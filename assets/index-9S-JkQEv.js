var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},z=[],B=-1;function V(e){return{current:e}}function H(e){0>B||(e.current=z[B],z[B]=null,B--)}function U(e,t){B++,z[B]=e.current,e.current=t}var ee=V(null),te=V(null),ne=V(null),re=V(null);function ie(e,t){switch(U(ne,t),U(te,e),U(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}H(ee),U(ee,e)}function ae(){H(ee),H(te),H(ne)}function oe(e){e.memoizedState!==null&&U(re,e);var t=ee.current,n=Ud(t,e.type);t!==n&&(U(te,e),U(ee,n))}function se(e){te.current===e&&(H(ee),H(te)),re.current===e&&(H(re),Qf._currentValue=R)}var ce,le;function ue(e){if(ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ce=t&&t[1]||``,le=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ce+e+le}var de=!1;function fe(e,t){if(!e||de)return``;de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{de=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ue(n):``}function pe(e,t){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue(`Lazy`);case 13:return e.child!==t&&t!==null?ue(`Suspense Fallback`):ue(`Suspense`);case 19:return ue(`SuspenseList`);case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ue(`Activity`);default:return``}}function me(e){try{var t=``,n=null;do t+=pe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var he=Object.prototype.hasOwnProperty,ge=t.unstable_scheduleCallback,_e=t.unstable_cancelCallback,ve=t.unstable_shouldYield,ye=t.unstable_requestPaint,be=t.unstable_now,xe=t.unstable_getCurrentPriorityLevel,Se=t.unstable_ImmediatePriority,Ce=t.unstable_UserBlockingPriority,we=t.unstable_NormalPriority,Te=t.unstable_LowPriority,Ee=t.unstable_IdlePriority,De=t.log,Oe=t.unstable_setDisableYieldValue,ke=null,Ae=null;function je(e){if(typeof De==`function`&&Oe(e),Ae&&typeof Ae.setStrictMode==`function`)try{Ae.setStrictMode(ke,e)}catch{}}var Me=Math.clz32?Math.clz32:Fe,Ne=Math.log,Pe=Math.LN2;function Fe(e){return e>>>=0,e===0?32:31-(Ne(e)/Pe|0)|0}var Ie=256,Le=262144,Re=4194304;function ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Be(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ze(n))):i=ze(o):i=ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ze(n))):i=ze(o)):i=ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ve(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function He(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ue(){var e=Re;return Re<<=1,!(Re&62914560)&&(Re=4194304),e}function We(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ge(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ke(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Me(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Me(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ye(e,t){var n=t&-t;return n=n&42?1:Xe(n),(n&(e.suspendedLanes|t))===0?n:0}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ze(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Qe(){var e=L.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function $e(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var et=Math.random().toString(36).slice(2),tt=`__reactFiber$`+et,nt=`__reactProps$`+et,rt=`__reactContainer$`+et,it=`__reactEvents$`+et,at=`__reactListeners$`+et,ot=`__reactHandles$`+et,st=`__reactResources$`+et,ct=`__reactMarker$`+et;function lt(e){delete e[tt],delete e[nt],delete e[it],delete e[at],delete e[ot]}function ut(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[tt])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function dt(e){if(e=e[tt]||e[rt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ft(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function pt(e){var t=e[st];return t||=e[st]={hoistableStyles:new Map,hoistableScripts:new Map},t}function mt(e){e[ct]=!0}var ht=new Set,gt={};function _t(e,t){vt(e,t),vt(e+`Capture`,t)}function vt(e,t){for(gt[e]=t,e=0;e<t.length;e++)ht.add(t[e])}var yt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),bt={},xt={};function St(e){return he.call(xt,e)?!0:he.call(bt,e)?!1:yt.test(e)?xt[e]=!0:(bt[e]=!0,!1)}function Ct(e,t,n){if(St(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function wt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Tt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Et(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Dt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ot(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kt(e){if(!e._valueTracker){var t=Dt(e)?`checked`:`value`;e._valueTracker=Ot(e,t,``+e[t])}}function At(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Dt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function jt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Mt=/[\n"\\]/g;function Nt(e){return e.replace(Mt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Pt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Et(t)):e.value!==``+Et(t)&&(e.value=``+Et(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):It(e,o,Et(n)):It(e,o,Et(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Et(s):e.removeAttribute(`name`)}function Ft(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){kt(e);return}n=n==null?``:``+Et(n),t=t==null?n:``+Et(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),kt(e)}function It(e,t,n){t===`number`&&jt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Lt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Et(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rt(e,t,n){if(t!=null&&(t=``+Et(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Et(n)}function zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(F(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Et(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),kt(e)}function Bt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Ht(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Vt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ut(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ht(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Ht(e,o,t[o])}function Wt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Gt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Kt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qt(e){return Kt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Jt(){}var Yt=null;function Xt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zt=null,Qt=null;function $t(e){var t=dt(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Pt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Nt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[nt]||null;if(!a)throw Error(i(90));Pt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&At(r)}break a;case`textarea`:Rt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Lt(e,!!n.multiple,t,!1)}}}var en=!1;function tn(e,t,n){if(en)return e(t,n);en=!0;try{return e(t)}finally{if(en=!1,(Zt!==null||Qt!==null)&&(bu(),Zt&&(t=Zt,e=Qt,Qt=Zt=null,$t(t),e)))for(t=0;t<e.length;t++)$t(e[t])}}function nn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[nt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var rn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),an=!1;if(rn)try{var on={};Object.defineProperty(on,`passive`,{get:function(){an=!0}}),window.addEventListener(`test`,on,on),window.removeEventListener(`test`,on,on)}catch{an=!1}var sn=null,cn=null,ln=null;function un(){if(ln)return ln;var e,t=cn,n=t.length,r,i=`value`in sn?sn.value:sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ln=i.slice(e,1<r?1-r:void 0)}function dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fn(){return!0}function pn(){return!1}function mn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?fn:pn,this.isPropagationStopped=pn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=fn)},persist:function(){},isPersistent:fn}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gn=mn(hn),_n=m({},hn,{view:0,detail:0}),vn=mn(_n),yn,bn,xn,Sn=m({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==xn&&(xn&&e.type===`mousemove`?(yn=e.screenX-xn.screenX,bn=e.screenY-xn.screenY):bn=yn=0,xn=e),yn)},movementY:function(e){return`movementY`in e?e.movementY:bn}}),Cn=mn(Sn),wn=mn(m({},Sn,{dataTransfer:0})),Tn=mn(m({},_n,{relatedTarget:0})),En=mn(m({},hn,{animationName:0,elapsedTime:0,pseudoElement:0})),Dn=mn(m({},hn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),On=mn(m({},hn,{data:0})),kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},An={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jn[e])?!!t[e]:!1}function Nn(){return Mn}var Pn=mn(m({},_n,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?An[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nn,charCode:function(e){return e.type===`keypress`?dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Fn=mn(m({},Sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),In=mn(m({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nn})),Ln=mn(m({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=mn(m({},Sn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=mn(m({},hn,{newState:0,oldState:0})),Bn=[9,13,27,32],Vn=rn&&`CompositionEvent`in window,Hn=null;rn&&`documentMode`in document&&(Hn=document.documentMode);var Un=rn&&`TextEvent`in window&&!Hn,Wn=rn&&(!Vn||Hn&&8<Hn&&11>=Hn),Gn=` `,Kn=!1;function qn(e,t){switch(e){case`keyup`:return Bn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Jn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Yn=!1;function Xn(e,t){switch(e){case`compositionend`:return Jn(t);case`keypress`:return t.which===32?(Kn=!0,Gn):null;case`textInput`:return e=t.data,e===Gn&&Kn?null:e;default:return null}}function Zn(e,t){if(Yn)return e===`compositionend`||!Vn&&qn(e,t)?(e=un(),ln=cn=sn=null,Yn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Wn&&t.locale!==`ko`?null:t.data;default:return null}}var Qn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Qn[e.type]:t===`textarea`}function er(e,t,n,r){Zt?Qt?Qt.push(r):Qt=[r]:Zt=r,t=Ed(t,`onChange`),0<t.length&&(n=new gn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var tr=null,nr=null;function rr(e){yd(e,0)}function ir(e){if(At(ft(e)))return e}function ar(e,t){if(e===`change`)return t}var or=!1;if(rn){var sr;if(rn){var cr=`oninput`in document;if(!cr){var lr=document.createElement(`div`);lr.setAttribute(`oninput`,`return;`),cr=typeof lr.oninput==`function`}sr=cr}else sr=!1;or=sr&&(!document.documentMode||9<document.documentMode)}function ur(){tr&&(tr.detachEvent(`onpropertychange`,dr),nr=tr=null)}function dr(e){if(e.propertyName===`value`&&ir(nr)){var t=[];er(t,nr,e,Xt(e)),tn(rr,t)}}function fr(e,t,n){e===`focusin`?(ur(),tr=t,nr=n,tr.attachEvent(`onpropertychange`,dr)):e===`focusout`&&ur()}function pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ir(nr)}function mr(e,t){if(e===`click`)return ir(t)}function hr(e,t){if(e===`input`||e===`change`)return ir(t)}function gr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var _r=typeof Object.is==`function`?Object.is:gr;function vr(e,t){if(_r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!he.call(t,i)||!_r(e[i],t[i]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function br(e,t){var n=yr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=yr(n)}}function xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=jt(e.document)}return t}function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var wr=rn&&`documentMode`in document&&11>=document.documentMode,Tr=null,Er=null,Dr=null,Or=!1;function kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||Tr==null||Tr!==jt(r)||(r=Tr,`selectionStart`in r&&Cr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&vr(Dr,r)||(Dr=r,r=Ed(Er,`onSelect`),0<r.length&&(t=new gn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var jr={animationend:Ar(`Animation`,`AnimationEnd`),animationiteration:Ar(`Animation`,`AnimationIteration`),animationstart:Ar(`Animation`,`AnimationStart`),transitionrun:Ar(`Transition`,`TransitionRun`),transitionstart:Ar(`Transition`,`TransitionStart`),transitioncancel:Ar(`Transition`,`TransitionCancel`),transitionend:Ar(`Transition`,`TransitionEnd`)},Mr={},Nr={};rn&&(Nr=document.createElement(`div`).style,`AnimationEvent`in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),`TransitionEvent`in window||delete jr.transitionend.transition);function Pr(e){if(Mr[e])return Mr[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nr)return Mr[e]=t[n];return e}var Fr=Pr(`animationend`),Ir=Pr(`animationiteration`),Lr=Pr(`animationstart`),Rr=Pr(`transitionrun`),zr=Pr(`transitionstart`),Br=Pr(`transitioncancel`),Vr=Pr(`transitionend`),Hr=new Map,Ur=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ur.push(`scrollEnd`);function Wr(e,t){Hr.set(e,t),_t(t,[e])}var Gr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Kr=[],qr=0,Jr=0;function Yr(){for(var e=qr,t=Jr=qr=0;t<e;){var n=Kr[t];Kr[t++]=null;var r=Kr[t];Kr[t++]=null;var i=Kr[t];Kr[t++]=null;var a=Kr[t];if(Kr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&$r(n,i,a)}}function Xr(e,t,n,r){Kr[qr++]=e,Kr[qr++]=t,Kr[qr++]=n,Kr[qr++]=r,Jr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zr(e,t,n,r){return Xr(e,t,n,r),ei(e)}function Qr(e,t){return Xr(e,null,null,t),ei(e)}function $r(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Me(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ei(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ti={};function ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,t,n,r){return new ni(e,t,n,r)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ai(e,t){var n=e.alternate;return n===null?(n=ri(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function oi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ii(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ee.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ri(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return ci(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ri(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ri(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ri(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ri(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ci(e,t,n,r){return e=ri(7,e,r,t),e.lanes=n,e}function li(e,t,n){return e=ri(6,e,null,t),e.lanes=n,e}function ui(e){var t=ri(18,null,null,0);return t.stateNode=e,t}function di(e,t,n){return t=ri(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fi=new WeakMap;function pi(e,t){if(typeof e==`object`&&e){var n=fi.get(e);return n===void 0?(t={value:e,source:t,stack:me(t)},fi.set(e,t),t):n}return{value:e,source:t,stack:me(t)}}var mi=[],hi=0,gi=null,_i=0,vi=[],yi=0,bi=null,xi=1,Si=``;function Ci(e,t){mi[hi++]=_i,mi[hi++]=gi,gi=e,_i=t}function W(e,t,n){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,bi=e;var r=xi;e=Si;var i=32-Me(r)-1;r&=~(1<<i),n+=1;var a=32-Me(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xi=1<<32-Me(t)+i|n<<i|r,Si=a+e}else xi=1<<a|n<<i|r,Si=e}function wi(e){e.return!==null&&(Ci(e,1),W(e,1,0))}function Ti(e){for(;e===gi;)gi=mi[--hi],mi[hi]=null,_i=mi[--hi],mi[hi]=null;for(;e===bi;)bi=vi[--yi],vi[yi]=null,Si=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null}function Ei(e,t){vi[yi++]=xi,vi[yi++]=Si,vi[yi++]=bi,xi=t.id,Si=t.overflow,bi=e}var Di=null,Oi=null,ki=!1,Ai=null,ji=!1,Mi=Error(i(519));function Ni(e){throw zi(pi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Mi}function Pi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[tt]=e,t[nt]=r,n){case`dialog`:bd(`cancel`,t),bd(`close`,t);break;case`iframe`:case`object`:case`embed`:bd(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)bd(_d[n],t);break;case`source`:bd(`error`,t);break;case`img`:case`image`:case`link`:bd(`error`,t),bd(`load`,t);break;case`details`:bd(`toggle`,t);break;case`input`:bd(`invalid`,t),Ft(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:bd(`invalid`,t);break;case`textarea`:bd(`invalid`,t),zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(bd(`beforetoggle`,t),bd(`toggle`,t)),r.onScroll!=null&&bd(`scroll`,t),r.onScrollEnd!=null&&bd(`scrollend`,t),r.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||Ni(e,!0)}function Fi(e){for(Di=e.return;Di;)switch(Di.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Di=Di.return}}function Ii(e){if(e!==Di)return!1;if(!ki)return Fi(e),ki=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&Oi&&Ni(e),Fi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else t===27?(t=Oi,Qd(e.type)?(e=uf,uf=null,Oi=e):Oi=t):Oi=Di?lf(e.stateNode.nextSibling):null;return!0}function Li(){Oi=Di=null,ki=!1}function Ri(){var e=Ai;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ai=null),e}function zi(e){Ai===null?Ai=[e]:Ai.push(e)}var Bi=V(null),Vi=null,Hi=null;function Ui(e,t,n){U(Bi,t._currentValue),t._currentValue=n}function Wi(e){e._currentValue=Bi.current,H(Bi)}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ki(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Gi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;_r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===re.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ki(t,e,n,r),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!_r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){Vi=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xi(e){return Qi(Vi,e)}function Zi(e,t){return Vi===null&&Yi(e),Qi(e,t)}function Qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Hi===null){if(e===null)throw Error(i(308));Hi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Hi=Hi.next=t;return n}var $i=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ea=t.unstable_scheduleCallback,ta=t.unstable_NormalPriority,na={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ra(){return{controller:new $i,data:new Map,refCount:0}}function ia(e){e.refCount--,e.refCount===0&&ea(ta,function(){e.controller.abort()})}var aa=null,oa=0,sa=0,ca=null;function la(e,t){if(aa===null){var n=aa=[];oa=0,sa=dd(),ca={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return oa++,t.then(ua,ua),t}function ua(){if(--oa===0&&aa!==null){ca!==null&&(ca.status=`fulfilled`);var e=aa;aa=null,sa=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var fa=I.S;I.S=function(e,t){eu=be(),typeof t==`object`&&t&&typeof t.then==`function`&&la(e,t),fa!==null&&fa(e,t)};var pa=V(null);function G(){var e=pa.current;return e===null?Il.pooledCache:e}function ma(e,t){t===null?U(pa,pa.current):U(pa,t.pool)}function ha(){var e=G();return e===null?null:{parent:na._currentValue,pool:e}}var ga=Error(i(460)),_a=Error(i(474)),va=Error(i(542)),ya={then:function(){}};function ba(e){return e=e.status,e===`fulfilled`||e===`rejected`}function xa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Jt,Jt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ta(e),e;default:if(typeof t.status==`string`)t.then(Jt,Jt);else{if(e=Il,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ta(e),e}throw Ca=t,ga}}function Sa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ca=e,ga):e}}var Ca=null;function wa(){if(Ca===null)throw Error(i(459));var e=Ca;return Ca=null,e}function Ta(e){if(e===ga||e===va)throw Error(i(483))}var Ea=null,Da=0;function Oa(e){var t=Da;return Da+=1,Ea===null&&(Ea=[]),xa(Ea,e,t)}function ka(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Aa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ja(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ai(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=li(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Sa(i)===t.type)?(t=a(t,n.props),ka(t,n),t.return=e,t):(t=si(n.type,n.key,n.props,null,e.mode,r),ka(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ci(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=si(t.type,t.key,t.props,null,e.mode,n),ka(n,t),n.return=e,n;case v:return t=di(t,e.mode,n),t.return=e,t;case O:return t=Sa(t),f(e,t,n)}if(F(t)||M(t))return t=ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Oa(t),n);if(t.$$typeof===C)return f(e,Zi(e,t),n);Aa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Sa(n),p(e,t,n,r)}if(F(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Oa(n),r);if(n.$$typeof===C)return p(e,t,Zi(e,n),r);Aa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Sa(r),m(e,t,n,r,i)}if(F(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Oa(r),i);if(r.$$typeof===C)return m(e,t,n,Zi(t,r),i);Aa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),ki&&Ci(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ki&&Ci(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),ki&&Ci(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ki&&Ci(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ki&&Ci(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ki&&Ci(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Sa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ka(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=ci(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=si(o.type,o.key,o.props,null,e.mode,c),ka(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=di(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Sa(o),b(e,r,o,c)}if(F(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Oa(o),c);if(o.$$typeof===C)return b(e,r,Zi(e,o),c);Aa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Da=0;var i=b(e,t,n,r);return Ea=null,i}catch(t){if(t===ga||t===va)throw t;var a=ri(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ma=ja(!0),Na=ja(!1),Pa=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ei(e),$r(e,null,n),t}return Xr(e,r,t,n),ei(e)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Je(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Va=!1;function Ha(){if(Va){var e=ca;if(e!==null)throw e}}function Ua(e,t,n,r){Va=!1;var i=e.updateQueue;Pa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Ll&f)===f:(r&f)===f){f!==0&&f===sa&&(Va=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Pa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Wa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ga(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wa(n[e],t)}var Ka=V(null),qa=V(0);function Ja(e,t){e=Ul,U(qa,e),U(Ka,t),Ul=e|t.baseLanes}function Ya(){U(qa,Ul),U(Ka,Ka.current)}function Xa(){Ul=qa.current,H(Ka),H(qa)}var Za=V(null),Qa=null;function $a(e){var t=e.alternate;U(io,io.current&1),U(Za,e),Qa===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(Qa=e)}function eo(e){U(io,io.current),U(Za,e),Qa===null&&(Qa=e)}function to(e){e.tag===22?(U(io,io.current),U(Za,e),Qa===null&&(Qa=e)):no(e)}function no(){U(io,io.current),U(Za,Za.current)}function ro(e){H(Za),Qa===e&&(Qa=null),H(io)}var io=V(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=0,K=null,so=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_r(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return oo=a,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?Ps:Fs,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){I.H=Ns;var t=so!==null&&so.next!==null;if(oo=0,co=so=K=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||Qs||(e=e.dependencies,e!==null&&Ji(e)&&(Qs=!0))}function xo(e,t,n,r){K=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=so=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=Is,o=t(n,r)}while(uo);return o}function So(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(so===null?null:so.memoizedState)!==e&&(K.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}oo=0,co=so=K=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?K.memoizedState=co=e:co=co.next=e,co}function Do(){if(so===null){var e=K.alternate;e=e===null?null:e.memoizedState}else e=so.next;var t=co===null?K.memoizedState:co.next;if(t!==null)co=t,so=e;else{if(e===null)throw K.alternate===null?Error(i(467)):Error(i(310));so=e,e={memoizedState:so.memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},co===null?K.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=xa(ho,e,t),t=K,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?Ps:Fs),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Xi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=K.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=K.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),K.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),so,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(oo&f)===f:(Ll&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===sa&&(d=!0);else if((oo&p)===p){u=u.next,p===sa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,K.lanes|=p,Gl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,K.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!_r(o,e.memoizedState)&&(Qs=!0,d&&(n=ca,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);_r(o,t.memoizedState)||(Qs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=K,a=Do(),o=ki;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!_r((so||a).memoizedState,n);if(s&&(a.memoizedState=n,Qs=!0),a=a.queue,as(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,es(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Il===null)throw Error(i(349));o||oo&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t=Oo(),K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,q(t)&&J(e)}function zo(e,t,n){return n(function(){q(t)&&J(e)})}function q(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_r(e,n)}catch{return!0}}function J(e){var t=Qr(e,2);t!==null&&hu(t,e,2)}function Bo(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Vo(e,t,n,r){return e.baseState=n,Po(e,so,typeof r==`function`?r:Mo)}function Ho(e,t,n,r,a){if(As(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Uo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Uo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),Wo(e,t,s)}catch(n){Ko(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),Wo(e,t,a)}catch(n){Ko(e,t,n)}}function Wo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Go(e,t,n)},function(n){return Ko(e,t,n)}):Go(e,t,n)}function Go(e,t,n){t.status=`fulfilled`,t.value=n,qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Uo(e,n)))}function Ko(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,qo(t),t=t.next;while(t!==r)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jo(e,t){return t}function Yo(e,t){if(ki){var n=Il.formState;if(n!==null){a:{var r=K;if(ki){if(Oi){b:{for(var i=Oi,a=ji;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Oi=lf(i.nextSibling),r=i.data===`F!`;break a}}Ni(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},n.queue=r,n=Ds.bind(null,K,r),r.dispatch=n,r=Bo(!1),a=ks.bind(null,K,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ho.bind(null,K,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Xo(e){return Zo(Do(),so,e)}function Zo(e,t,n){if(t=Po(e,t,Jo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===ga?va:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(K.flags|=2048,es(9,{destroy:void 0},Qo.bind(null,i,n),null)),[r,a,e]}function Qo(e,t){e.action=t}function $o(e){var t=Do(),n=so;if(n!==null)return Zo(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=K.updateQueue,t===null&&(t=Oo(),K.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ts(){return Do().memoizedState}function ns(e,t,n,r){var i=Eo();K.flags|=e,i.memoizedState=es(1|t,{destroy:void 0},n,r===void 0?null:r)}function rs(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;so!==null&&r!==null&&vo(r,so.memoizedState.deps)?i.memoizedState=es(t,a,n,r):(K.flags|=e,i.memoizedState=es(1|t,a,n,r))}function is(e,t){ns(8390656,8,e,t)}function as(e,t){rs(2048,8,e,t)}function os(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=Oo(),K.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ss(e){var t=Do().memoizedState;return os({ref:t,nextImpl:e}),function(){if(Fl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return rs(4,2,e,t)}function ls(e,t){return rs(4,4,e,t)}function us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n==null?null:n.concat([e]),rs(4,4,us.bind(null,t,e),n)}function fs(){}function ps(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ms(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[r,t],r}function hs(e,t,n){return n===void 0||oo&1073741824&&!(Ll&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),K.lanes|=e,Gl|=e,n)}function gs(e,t,n,r){return _r(n,t)?n:Ka.current===null?!(oo&42)||oo&1073741824&&!(Ll&261930)?(Qs=!0,e.memoizedState=n):(e=mu(),K.lanes|=e,Gl|=e,t):(e=hs(e,n,r),_r(e,t)||(Qs=!0),e)}function _s(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};I.T=s,ks(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Os(e,t,da(c,r),pu(e)):Os(e,t,r,pu(e))}catch(n){Os(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function vs(){}function ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=bs(e).queue;_s(e,a,t,R,n===null?vs:function(){return xs(e),n(r)})}function bs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xs(e){var t=bs(e);t.next===null&&(t=e.alternate.memoizedState),Os(e,t.next.queue,{},pu())}function Ss(){return Xi(Qf)}function Cs(){return Do().memoizedState}function ws(){return Do().memoizedState}function Ts(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=La(n);var r=Ra(t,e,n);r!==null&&(hu(r,t,n),za(r,t,n)),t={cache:ra()},e.payload=t;return}t=t.return}}function Es(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?js(t,n):(n=Zr(e,t,n,r),n!==null&&(hu(n,e,r),Ms(n,t,r)))}function Ds(e,t,n){Os(e,t,n,pu())}function Os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,_r(s,o))return Xr(e,t,i,0),Il===null&&Yr(),!1}catch{}if(n=Zr(e,t,i,r),n!==null)return hu(n,e,r),Ms(n,t,r),!0}return!1}function ks(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},As(e)){if(t)throw Error(i(479))}else t=Zr(e,n,r,2),t!==null&&hu(t,e,2)}function As(e){var t=e.alternate;return e===K||t!==null&&t===K}function js(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Je(e,n)}}var Ns={readContext:Xi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Ns.useEffectEvent=_o;var Ps={readContext:Xi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Xi,useEffect:is,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ns(4194308,4,us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){je(!0);try{n(t)}finally{je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Es.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Bo(e);var t=e.queue,n=Ds.bind(null,K,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){return hs(Eo(),e,t)},useTransition:function(){var e=Bo(!1);return e=_s.bind(null,K,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=K,a=Eo();if(ki){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Il===null)throw Error(i(349));Ll&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(zo.bind(null,r,o,e),[e]),r.flags|=2048,es(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Il.identifierPrefix;if(ki){var n=Si,r=xi;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ss,useFormState:Yo,useActionState:Yo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ks.bind(null,K,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ts.bind(null,K)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(Fl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:Xi,use:Ao,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:No,useRef:ts,useState:function(){return No(Mo)},useDebugValue:fs,useDeferredValue:function(e,t){return gs(Do(),so.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Cs,useHostTransitionStatus:Ss,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){return Vo(Do(),so,e,t)},useMemoCache:jo,useCacheRefresh:ws};Fs.useEffectEvent=ss;var Is={readContext:Xi,use:Ao,useCallback:ps,useContext:Xi,useEffect:as,useImperativeHandle:ds,useInsertionEffect:cs,useLayoutEffect:ls,useMemo:ms,useReducer:Fo,useRef:ts,useState:function(){return Fo(Mo)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Do();return so===null?hs(n,e,t):gs(n,so.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Cs,useHostTransitionStatus:Ss,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var n=Do();return so===null?(n.baseState=e,[e,n.queue.dispatch]):Vo(n,so,e,t)},useMemoCache:jo,useCacheRefresh:ws};Is.useEffectEvent=ss;function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=La(r);i.payload=t,n!=null&&(i.callback=n),t=Ra(e,i,r),t!==null&&(hu(t,e,r),za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=La(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ra(e,i,r),t!==null&&(hu(t,e,r),za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=La(n);r.tag=2,t!=null&&(r.callback=t),t=Ra(e,r,n),t!==null&&(hu(t,e,n),za(t,e,n))}};function zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,a):!0}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Vs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Hs(e){Gr(e)}function Us(e){console.error(e)}function Ws(e){Gr(e)}function Gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){Gs(e,t)},n}function Js(e){return e=La(e),e.tag=3,e}function Ys(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ks(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ks(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Xs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&qi(t,n,a,!0),n=Za.current,n!==null){switch(n.tag){case 31:case 13:return Qa===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ya?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===ya?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Du(),!1}if(ki)return t=Za.current,t===null?(r!==Mi&&(t=Error(i(423),{cause:r}),zi(pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=pi(r,n),a=qs(e.stateNode,r,a),Ba(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Mi&&(e=Error(i(422),{cause:r}),zi(pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=pi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=qs(n.stateNode,r,e),Ba(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Js(a),Ys(a,e,n,r),Ba(n,a),!1}n=n.return}while(n!==null);return!1}var Zs=Error(i(461)),Qs=!1;function $s(e,t,n,r){t.child=e===null?Na(t,null,n,r):Ma(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Yi(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!Qs?(wo(e,t,i),wc(e,t,i)):(ki&&s&&wi(t),t.flags|=1,$s(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,nc(e,t,a,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?vr:n,n(o,r)&&e.ref===t.ref)return wc(e,t,i)}return t.flags|=1,e=ai(a,r),e.ref=t.ref,e.return=t,t.child=e}function nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(vr(a,r)&&e.ref===t.ref)if(Qs=!1,t.pendingProps=r=a,Tc(e,i))e.flags&131072&&(Qs=!0);else return t.lanes=e.lanes,wc(e,t,i)}return uc(e,t,n,r,i)}function rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ac(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ma(t,a===null?null:a.cachePool),a===null?Ya():Ja(t,a),to(t);else return r=t.lanes=536870912,ac(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ma(t,null),Ya(),no(t)):(ma(t,a.cachePool),Ja(t,a),no(t),t.memoizedState=null);return $s(e,t,i,n),t.child}function ic(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ac(e,t,n,r,i){var a=G();return a=a===null?null:{parent:na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ma(t,null),Ya(),to(t),e!==null&&qi(e,t,r,!0),t.childLanes=i,null}function oc(e,t){return t=yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sc(e,t,n){return Ma(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,ro(t),t.memoizedState=null,e}function cc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(ki){if(r.mode===`hidden`)return e=oc(t,r),t.lanes=536870912,ic(null,e);if(eo(t),(e=Oi)?(e=af(e,ji),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Ni(t);return t.lanes=536870912,null}return oc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(eo(t),a)if(t.flags&256)t.flags&=-257,t=sc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Qs||qi(e,t,n,!1),a=(n&e.childLanes)!==0,Qs||a){if(r=Il,r!==null&&(s=Ye(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Qr(e,s),hu(r,e,s),Zs;Du(),t=sc(e,t,n)}else e=o.treeContext,Oi=lf(s.nextSibling),Di=t,ki=!0,Ai=null,ji=!1,e!==null&&Ei(t,e),t=oc(t,r),t.flags|=4096;return t}return e=ai(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uc(e,t,n,r,i){return Yi(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!Qs?(wo(e,t,i),wc(e,t,i)):(ki&&r&&wi(t),t.flags|=1,$s(e,t,n,i),t.child)}function dc(e,t,n,r,i,a){return Yi(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!Qs?(wo(e,t,a),wc(e,t,a)):(ki&&r&&wi(t),t.flags|=1,$s(e,t,n,a),t.child)}function fc(e,t,n,r,i){if(Yi(t),t.stateNode===null){var a=ti,o=n.contextType;typeof o==`object`&&o&&(a=Xi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Fa(t),o=n.contextType,a.context=typeof o==`object`&&o?Xi(o):ti,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ls(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Rs.enqueueReplaceState(a,a.state,null),Ua(t,r,a,i),Ha(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Vs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ti,typeof u==`object`&&u&&(o=Xi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Bs(t,a,r,o),Pa=!1;var f=t.memoizedState;a.state=f,Ua(t,r,a,i),Ha(),l=t.memoizedState,s||f!==l||Pa?(typeof d==`function`&&(Ls(t,n,d,r),l=t.memoizedState),(c=Pa||zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ia(e,t),o=t.memoizedProps,u=Vs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ti,typeof l==`object`&&l&&(c=Xi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Bs(t,a,r,c),Pa=!1,f=t.memoizedState,a.state=f,Ua(t,r,a,i),Ha();var p=t.memoizedState;o!==d||f!==p||Pa||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof s==`function`&&(Ls(t,n,s,r),p=t.memoizedState),(u=Pa||zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,lc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ma(t,e.child,null,i),t.child=Ma(t,null,n,i)):$s(e,t,n,i),t.memoizedState=a.state,e=t.child):e=wc(e,t,i),e}function pc(e,t,n,r){return Li(),t.flags|=256,$s(e,t,n,r),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:ha()}}function gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function _c(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(io.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(ki){if(a?$a(t):no(t),(e=Oi)?(e=af(e,ji),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi===null?null:{id:xi,overflow:Si},retryLane:536870912,hydrationErrors:null},n=ui(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Ni(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(no(t),a=t.mode,c=yc({mode:`hidden`,children:c},a),r=ci(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(null,r)):($a(t),vc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?($a(t),t.flags&=-257,t=bc(e,t,n)):t.memoizedState===null?(no(t),c=r.fallback,a=t.mode,r=yc({mode:`visible`,children:r.children},a),c=ci(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ma(t,e.child,null,n),r=t.child,r.memoizedState=hc(n),r.childLanes=gc(e,s,n),t.memoizedState=mc,t=ic(null,r)):(no(t),t.child=e.child,t.flags|=128,t=null);else if($a(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,zi({value:r,source:null,stack:null}),t=bc(e,t,n)}else if(Qs||qi(e,t,n,!1),s=(n&e.childLanes)!==0,Qs||s){if(s=Il,s!==null&&(r=Ye(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Qr(e,r),hu(s,e,r),Zs;of(c)||Du(),t=bc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Oi=lf(c.nextSibling),Di=t,ki=!0,Ai=null,ji=!1,e!==null&&Ei(t,e),t=vc(t,r.children),t.flags|=4096);return t}return a?(no(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ai(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ci(c,a,n,null),c.flags|=2):c=ai(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ic(null,r),r=t.child,c=e.child.memoizedState,c===null?c=hc(n):(a=c.cachePool,a===null?a=ha():(l=na._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=gc(e,s,n),t.memoizedState=mc,ic(e.child,r)):($a(t),n=e.child,e=n.sibling,n=ai(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function yc(e,t){return e=ri(22,e,null,t),e.lanes=0,e}function bc(e,t,n){return Ma(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function Sc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=io.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,U(io,o),$s(e,t,r,n),r=ki?_i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,a,r);break;case`together`:Sc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function wc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ji(e))):!0}function Ec(e,t,n){switch(t.tag){case 3:ie(t,t.stateNode.containerInfo),Ui(t,na,e.memoizedState.cache),Li();break;case 27:case 5:oe(t);break;case 4:ie(t,t.stateNode.containerInfo);break;case 10:Ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,eo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?($a(t),e=wc(e,t,n),e===null?null:e.sibling):_c(e,t,n):($a(t),t.flags|=128,null);$a(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(io,io.current),r)break;return null;case 22:return t.lanes=0,rc(e,t,n,t.pendingProps);case 24:Ui(t,na,e.memoizedState.cache)}return wc(e,t,n)}function Dc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qs=!0;else{if(!Tc(e,n)&&!(t.flags&128))return Qs=!1,Ec(e,t,n);Qs=!!(e.flags&131072)}else Qs=!1,ki&&t.flags&1048576&&W(t,_i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Sa(t.elementType),t.type=e,typeof e==`function`)ii(e)?(r=Vs(e,r),t.tag=1,t=fc(null,t,e,r,n)):(t.tag=0,t=uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ec(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=tc(null,t,e,r,n);break a}}throw t=P(e)||e,Error(i(306,t,``))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Vs(r,t.pendingProps),fc(e,t,r,a,n);case 3:a:{if(ie(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ia(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ui(t,na,r),r!==o.cache&&Ki(t,[na],n,!0),Ha(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=pc(e,t,r,n);break a}else if(r!==a){a=pi(Error(i(424)),t),zi(a),t=pc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Oi=lf(e.firstChild),Di=t,ki=!0,Ai=null,ji=!0,n=Na(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),r===a){t=wc(e,t,n);break a}$s(e,t,r,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:ki||(n=t.type,e=t.pendingProps,r=Vd(ne.current).createElement(n),r[tt]=t,r[nt]=e,Fd(r,n,e),mt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return oe(t),e===null&&ki&&(r=t.stateNode=pf(t.type,t.pendingProps,ne.current),Di=t,ji=!0,a=Oi,Qd(t.type)?(uf=a,Oi=lf(r.firstChild)):Oi=a),$s(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ki&&((a=r=Oi)&&(r=nf(r,t.type,t.pendingProps,ji),r===null?a=!1:(t.stateNode=r,Di=t,Oi=lf(r.firstChild),ji=!1,a=!0)),a||Ni(t)),oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),Qf._currentValue=a),lc(e,t),$s(e,t,r,n),t.child;case 6:return e===null&&ki&&((e=n=Oi)&&(n=rf(n,t.pendingProps,ji),n===null?e=!1:(t.stateNode=n,Di=t,Oi=null,e=!0)),e||Ni(t)),null;case 13:return _c(e,t,n);case 4:return ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ma(t,null,r,n):$s(e,t,r,n),t.child;case 11:return ec(e,t,t.type,t.pendingProps,n);case 7:return $s(e,t,t.pendingProps,n),t.child;case 8:return $s(e,t,t.pendingProps.children,n),t.child;case 12:return $s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ui(t,t.type,r.value),$s(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Yi(t),a=Xi(a),r=r(a),t.flags|=1,$s(e,t,r,n),t.child;case 14:return tc(e,t,t.type,t.pendingProps,n);case 15:return nc(e,t,t.type,t.pendingProps,n);case 19:return Cc(e,t,n);case 31:return cc(e,t,n);case 22:return rc(e,t,n,t.pendingProps);case 24:return Yi(t),r=Xi(na),e===null?(a=G(),a===null&&(a=Il,o=ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Fa(t),Ui(t,na,a)):((e.lanes&n)!==0&&(Ia(e,t),Ua(t,null,null,n),Ha()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ui(t,na,r),r!==a.cache&&Ki(t,[na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ui(t,na,r))),$s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Oc(e){e.flags|=4}function kc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ca=ya,_a}else e.flags&=-16777217}function Ac(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ca=ya,_a}function jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ue(),e.lanes|=t,Yl|=t)}function Mc(e,t){if(!ki)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pc(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nc(t),null;case 1:return Nc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Wi(na),ae(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?Oc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ri())),Nc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Oc(t),o===null?(Nc(t),kc(t,a,null,r,n)):(Nc(t),Ac(t,o))):o?o===e.memoizedState?(Nc(t),t.flags&=-16777217):(Oc(t),Nc(t),Ac(t,o)):(e=e.memoizedProps,e!==r&&Oc(t),Nc(t),kc(t,a,e,r,n)),null;case 27:if(se(t),n=ne.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}e=ee.current,Ii(t)?Pi(t,e):(e=pf(a,r,n),t.stateNode=e,Oc(t))}return Nc(t),null;case 5:if(se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Nc(t),null}if(o=ee.current,Ii(t))Pi(t,o);else{var s=Vd(ne.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[tt]=t,o[nt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Oc(t)}}return Nc(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Oc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ne.current,Ii(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Di,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[tt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ni(t,!0)}else e=Vd(e).createTextNode(r),e[tt]=t,t.stateNode=e}return Nc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ii(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[tt]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),e=!1}else n=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ro(t),t):(ro(t),null);if(t.flags&128)throw Error(i(558))}return Nc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[tt]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nc(t),a=!1}else a=Ri(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ro(t),t):(ro(t),null)}return ro(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jc(t,t.updateQueue),Nc(t),null);case 4:return ae(),e===null&&Sd(t.stateNode.containerInfo),Nc(t),null;case 10:return Wi(t.type),Nc(t),null;case 19:if(H(io),r=t.memoizedState,r===null)return Nc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Mc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ao(e),o!==null){for(t.flags|=128,Mc(r,!1),e=o.updateQueue,t.updateQueue=e,jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)oi(n,e),n=n.sibling;return U(io,io.current&1|2),ki&&Ci(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&be()>tu&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ao(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jc(t,e),Mc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!ki)return Nc(t),null}else 2*be()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Mc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Nc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=be(),e.sibling=null,n=io.current,U(io,a?n&1|2:n&1),ki&&Ci(t,r.treeForkCount),e);case 22:case 23:return ro(t),Xa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Nc(t),t.subtreeFlags&6&&(t.flags|=8192)):Nc(t),n=t.updateQueue,n!==null&&jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&H(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wi(na),Nc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Fc(e,t){switch(Ti(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wi(na),ae(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return se(t),null;case 31:if(t.memoizedState!==null){if(ro(t),t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ro(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(io),null;case 4:return ae(),null;case 10:return Wi(t.type),null;case 22:case 23:return ro(t),Xa(),e!==null&&H(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wi(na),null;case 25:return null;default:return null}}function Ic(e,t){switch(Ti(t),t.tag){case 3:Wi(na),ae();break;case 26:case 27:case 5:se(t);break;case 4:ae();break;case 31:t.memoizedState!==null&&ro(t);break;case 13:ro(t);break;case 19:H(io);break;case 10:Wi(t.type);break;case 22:case 23:ro(t),Xa(),e!==null&&H(pa);break;case 24:Wi(na)}}function Lc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Gu(t,t.return,e)}}function Rc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Gu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Gu(t,t.return,e)}}function zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ga(t,n)}catch(t){Gu(e,e.return,t)}}}function Bc(e,t,n){n.props=Vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Gu(e,t,n)}}function Vc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Gu(e,t,n)}}function Hc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Gu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Gu(e,t,n)}else n.current=null}function Uc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Gu(e,e.return,t)}}function Wc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[nt]=t}catch(t){Gu(e,e.return,t)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jt));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[tt]=e,t[nt]=n}catch(t){Gu(e,e.return,t)}}var Xc=!1,Zc=!1,Qc=!1,$c=typeof WeakSet==`function`?WeakSet:Set,el=null;function tl(e,t){if(e=e.containerInfo,zd=sp,e=Sr(e),Cr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,el=t;el!==null;)if(t=el,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,el=e;else for(;el!==null;){switch(t=el,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Vs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Gu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,el=e;break}el=t.return}}function nl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Lc(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Gu(n,n.return,e)}else{var i=Vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Gu(n,n.return,e)}}r&64&&zc(n),r&512&&Vc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ga(e,t)}catch(e){Gu(n,n.return,e)}}break;case 27:t===null&&r&4&&Yc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Uc(n),r&512&&Vc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&cl(e,n);break;case 13:gl(e,n),r&4&&ll(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Xc,!r){t=t!==null&&t.memoizedState!==null||Zc,i=Xc;var a=Zc;Xc=r,(Zc=t)&&!a?vl(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),Xc=i,Zc=a}break;case 30:break;default:gl(e,n)}}function rl(e){var t=e.alternate;t!==null&&(e.alternate=null,rl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var il=null,al=!1;function ol(e,t,n){for(n=n.child;n!==null;)sl(e,t,n),n=n.sibling}function sl(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount==`function`)try{Ae.onCommitFiberUnmount(ke,n)}catch{}switch(n.tag){case 26:Zc||Hc(n,t),ol(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zc||Hc(n,t);var r=il,i=al;Qd(n.type)&&(il=n.stateNode,al=!1),ol(e,t,n),mf(n.stateNode),il=r,al=i;break;case 5:Zc||Hc(n,t);case 6:if(r=il,i=al,il=null,ol(e,t,n),il=r,al=i,il!==null)if(al)try{(il.nodeType===9?il.body:il.nodeName===`HTML`?il.ownerDocument.body:il).removeChild(n.stateNode)}catch(e){Gu(n,t,e)}else try{il.removeChild(n.stateNode)}catch(e){Gu(n,t,e)}break;case 18:il!==null&&(al?(e=il,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):$d(il,n.stateNode));break;case 4:r=il,i=al,il=n.stateNode.containerInfo,al=!0,ol(e,t,n),il=r,al=i;break;case 0:case 11:case 14:case 15:Rc(2,n,t),Zc||Rc(4,n,t),ol(e,t,n);break;case 1:Zc||(Hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Bc(n,t,r)),ol(e,t,n);break;case 21:ol(e,t,n);break;case 22:Zc=(r=Zc)||n.memoizedState!==null,ol(e,t,n),Zc=r;break;default:ol(e,t,n)}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Gu(t,t.return,e)}}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Gu(t,t.return,e)}}function ul(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $c),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $c),t;default:throw Error(i(435,e.tag))}}function dl(e,t){var n=ul(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function fl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){il=c.stateNode,al=!1;break a}break;case 5:il=c.stateNode,al=!1;break a;case 3:case 4:il=c.stateNode.containerInfo,al=!0;break a}c=c.return}if(il===null)throw Error(i(160));sl(o,s,a),il=null,al=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Y(t,e),t=t.sibling}var pl=null;function Y(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fl(t,e),ml(e),r&4&&(Rc(3,e,e.return),Lc(3,e),Rc(5,e,e.return));break;case 1:fl(t,e),ml(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&64&&Xc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=pl;if(fl(t,e),ml(e),r&512&&(Zc||n===null||Hc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ct]||o[tt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[tt]=e,mt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[tt]=e,mt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:fl(t,e),ml(e),r&512&&(Zc||n===null||Hc(n,n.return)),n!==null&&r&4&&Wc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(fl(t,e),ml(e),r&512&&(Zc||n===null||Hc(n,n.return)),e.flags&32){a=e.stateNode;try{Bt(a,``)}catch(t){Gu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Wc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Qc=!0);break;case 6:if(fl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Gu(e,e.return,t)}}break;case 3:if(Bf=null,a=pl,pl=_f(t.containerInfo),fl(t,e),pl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Gu(e,e.return,t)}Qc&&(Qc=!1,hl(e));break;case 4:r=pl,pl=_f(e.stateNode.containerInfo),fl(t,e),ml(e),pl=r;break;case 12:fl(t,e),ml(e);break;case 31:fl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 13:fl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=be()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Xc,d=Zc;if(Xc=u||a,Zc=d||l,fl(t,e),Zc=d,Xc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Xc||Zc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Gu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Gu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Gu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,dl(e,n))));break;case 19:fl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,dl(e,r)));break;case 30:break;case 21:break;default:fl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Gc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Jc(e,Kc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Bt(o,``),n.flags&=-33),Jc(e,Kc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;qc(e,Kc(e),s);break;default:throw Error(i(161))}}catch(t){Gu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rc(4,t,t.return),_l(t);break;case 1:Hc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Bc(t,t.return,n),_l(t);break;case 27:mf(t.stateNode);case 26:case 5:Hc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Lc(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Gu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Wa(c[i],s)}catch(e){Gu(r,r.return,e)}}n&&o&64&&zc(a),Vc(a,a.return);break;case 27:Yc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Uc(a),Vc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&cl(i,a);break;case 13:vl(i,a,n),n&&o&4&&ll(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Vc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ia(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Lc(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ia(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Gu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Lc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,pl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=pl;pl=_f(e.stateNode.containerInfo),El(e,t,n),pl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Rc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];el=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;el!==null;){var n=el;switch(n.tag){case 0:case 11:case 15:Rc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ia(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,el=r;else a:for(n=e;el!==null;){r=el;var i=r.sibling,a=r.return;if(rl(r),r===n){el=null;break a}if(i!==null){i.return=a,el=i;break a}el=a}}}var Nl={getCacheForType:function(e){var t=Xi(na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xi(na).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,Fl=0,Il=null,X=null,Ll=0,Rl=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return Fl&2&&Ll!==0?Ll&-Ll:I.T===null?Qe():dd()}function mu(){if(Jl===0)if(!(Ll&536870912)||ki){var e=Le;Le<<=1,!(Le&3932160)&&(Le=262144),Jl=e}else Jl=536870912;return e=Za.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Il&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Ll,Jl,!1)),Ge(e,n),(!(Fl&2)||e!==Il)&&(e===Il&&(!(Fl&2)&&(Kl|=n),Wl===4&&yu(e,Ll,Jl,!1)),rd(e))}function gu(e,t,n){if(Fl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ve(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-be(),10<a)){if(yu(r,t,Jl,!Bl),Be(r,0,!0)!==0)break a;su=t,r.timeoutHandle=qd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},Dl(t,a,d);var m=(a&62914560)===a?$l-be():(a&4194048)===a?eu-be():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Me(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&qe(e,n,t)}function bu(){return Fl&6?!0:(id(0,!1),!1)}function xu(){if(X!==null){if(Rl===0)var e=X.return;else e=X,Hi=Vi=null,To(e),Ea=null,Da=0,e=X;for(;e!==null;)Ic(e.alternate,e),e=e.return;X=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Il=e,X=n=ai(e.current,null),Ll=t,Rl=0,zl=null,Bl=!1,Vl=Ve(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Me(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Yr(),n}function Cu(e,t){K=null,I.H=Ns,t===ga||t===va?(t=wa(),Rl=3):t===_a?(t=wa(),Rl=4):Rl=t===Zs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,X===null&&(Wl=1,Gs(e,pi(t,e.current)))}function wu(){var e=Za.current;return e===null?!0:(Ll&4194048)===Ll?Qa===null:(Ll&62914560)===Ll||Ll&536870912?e===Qa:!1}function Tu(){var e=I.H;return I.H=Ns,e===null?Ns:e}function Eu(){var e=I.A;return I.A=Nl,e}function Du(){Wl=4,Bl||(Ll&4194048)!==Ll&&Za.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Il===null||yu(Il,Ll,Jl,!1)}function Ou(e,t,n){var r=Fl;Fl|=2;var i=Tu(),a=Eu();(Il!==e||Ll!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(Rl!==0&&X!==null){var s=X,c=zl;switch(Rl){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:Za.current===null&&(t=!0);var l=Rl;if(Rl=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=Rl,Rl=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Hi=Vi=null,Fl=r,I.H=i,I.A=a,X===null&&(Il=null,Ll=0,Yr()),o}function ku(){for(;X!==null;)Mu(X)}function Au(e,t){var n=Fl;Fl|=2;var r=Tu(),a=Eu();Il!==e||Ll!==t?(nu=null,tu=be()+500,Su(e,t)):Vl=Ve(e,t);a:do try{if(Rl!==0&&X!==null){t=X;var o=zl;b:switch(Rl){case 1:Rl=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(ba(o)){Rl=0,zl=null,Nu(t);break}t=function(){Rl!==2&&Rl!==9||Il!==e||(Rl=7),rd(e)},o.then(t,t);break a;case 3:Rl=7;break a;case 4:Rl=5;break a;case 7:ba(o)?(Rl=0,zl=null,Nu(t)):(Rl=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Wf(s):c.stateNode.complete){Rl=0,zl=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Fu(u))}break b}}Rl=0,zl=null,Pu(e,t,o,5);break;case 6:Rl=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Hi=Vi=null,I.H=r,I.A=a,Fl=n,X===null?(Il=null,Ll=0,Yr(),Wl):0}function ju(){for(;X!==null&&!ve();)Mu(X)}function Mu(e){var t=Dc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):X=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dc(n,t,t.pendingProps,t.type,void 0,Ll);break;case 11:t=dc(n,t,t.pendingProps,t.type.render,t.ref,Ll);break;case 5:To(t);default:Ic(n,t),t=X=oi(t,Ul),t=Dc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):X=t}function Pu(e,t,n,r){Hi=Vi=null,To(t),Ea=null,Da=0;var i=t.return;try{if(Xs(e,i,t,n,Ll)){Wl=1,Gs(e,pi(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;Wl=1,Gs(e,pi(n,e.current)),X=null;return}t.flags&32768?(ki||r===1?e=!0:Vl||Ll&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Za.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Pc(t.alternate,t,Ul);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Fc(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);Wl=6,X=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(Fl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Jr,Ke(e,n,o,s,c,l),e===Il&&(X=Il=null,Ll=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(we,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=I.T,I.T=null,a=L.p,L.p=2,s=Fl,Fl|=4;try{tl(e,t,n)}finally{Fl=s,L.p=a,I.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Fl;Fl|=4;try{Y(t,e);var a=Bd,o=Sr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(c!==null&&Cr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=br(s,h),v=br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{Fl=i,L.p=r,I.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Fl;Fl|=4;try{nl(e,t.alternate,t)}finally{Fl=i,L.p=r,I.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ye();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),Ze(n),t=t.stateNode,Ae&&typeof Ae.onCommitFiberRoot==`function`)try{Ae.onCommitFiberRoot(ke,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=I.T,i=L.p,L.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,L.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ia(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=Ze(su),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,Fl&6)throw Error(i(331));var c=Fl;if(Fl|=4,Al(o.current),Sl(o,o.current,s,n),Fl=c,id(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot==`function`)try{Ae.onPostCommitFiberRoot(ke,o)}catch{}return!0}finally{L.p=a,I.T=r,Vu(e,t)}}function Wu(e,t,n){t=pi(n,t),t=qs(e.stateNode,t,2),e=Ra(e,t,2),e!==null&&(Ge(e,2),rd(e))}function Gu(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=pi(n,e),n=Js(2),r=Ra(t,n,2),r!==null&&(Ys(n,r,t,e),Ge(r,2),rd(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Il===e&&(Ll&n)===n&&(Wl===4||Wl===3&&(Ll&62914560)===Ll&&300>be()-$l?!(Fl&2)&&Su(e,0):ql|=n,Yl===Ll&&(Yl=0)),rd(e)}function Ju(e,t){t===0&&(t=Ue()),e=Qr(e,t),e!==null&&(Ge(e,t),rd(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return ge(e,t)}var Qu=null,$u=null,Z=!1,ed=!1,td=!1,nd=0;function rd(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),ed=!0,Z||(Z=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Me(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Ll,a=Be(r,r===Il?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ve(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=Z=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=be(),n=null,r=Qu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Me(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=He(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Il,n=Ll,n=Be(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&_e(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ve(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&_e(r),Ze(n)){case 2:case 8:n=Ce;break;case 32:n=we;break;case 268435456:n=Ee;break;default:n=we}return r=cd.bind(null,e),n=ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&_e(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Ll;return r=Be(e,e===Il?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,be()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Xd(function(){Fl&6?ge(Se,ad):od()})}function dd(){if(nd===0){var e=sa;e===0&&(e=Ie,Ie<<=1,!(Ie&261888)&&(Ie=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[nt]||null).action),o=r.submitter;o&&(t=(t=o[nt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new gn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Ur.length;hd++){var gd=Ur[hd];Wr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Wr(Fr,`onAnimationEnd`),Wr(Ir,`onAnimationIteration`),Wr(Lr,`onAnimationStart`),Wr(`dblclick`,`onDoubleClick`),Wr(`focusin`,`onFocus`),Wr(`focusout`,`onBlur`),Wr(Rr,`onTransitionRun`),Wr(zr,`onTransitionStart`),Wr(Br,`onTransitionCancel`),Wr(Vr,`onTransitionEnd`),vt(`onMouseEnter`,[`mouseout`,`mouseover`]),vt(`onMouseLeave`,[`mouseout`,`mouseover`]),vt(`onPointerEnter`,[`pointerout`,`pointerover`]),vt(`onPointerLeave`,[`pointerout`,`pointerover`]),_t(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),_t(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),_t(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),_t(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),_t(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),_t(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Gr(e)}i.currentTarget=null,a=c}}}}function bd(e,t){var n=t[it];n===void 0&&(n=t[it]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function Q(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,ht.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||Q(t,!1,e),Q(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,Q(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!an||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ut(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}tn(function(){var r=a,i=Xt(n),s=[];a:{var c=Hr.get(e);if(c!==void 0){var l=gn,u=e;switch(e){case`keypress`:if(dn(n)===0)break a;case`keydown`:case`keyup`:l=Pn;break;case`focusin`:u=`focus`,l=Tn;break;case`focusout`:u=`blur`,l=Tn;break;case`beforeblur`:case`afterblur`:l=Tn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Cn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=wn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=In;break;case Fr:case Ir:case Lr:l=En;break;case Vr:l=Ln;break;case`scroll`:case`scrollend`:l=vn;break;case`wheel`:l=Rn;break;case`copy`:case`cut`:case`paste`:l=Dn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Fn;break;case`toggle`:case`beforetoggle`:l=zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=nn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Yt&&(u=n.relatedTarget||n.fromElement)&&(ut(u)||u[rt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ut(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Cn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Fn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ft(l),h=u==null?c:ft(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ut(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?ft(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ar;else if($n(c))if(or)v=hr;else{v=pr;var y=fr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Wt(r.elementType)&&(v=ar):v=mr;if(v&&=v(e,r)){er(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&It(c,`number`,c.value)}switch(y=r?ft(r):window,e){case`focusin`:($n(y)||y.contentEditable===`true`)&&(Tr=y,Er=r,Dr=null);break;case`focusout`:Dr=Er=Tr=null;break;case`mousedown`:Or=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Or=!1,kr(s,n,i);break;case`selectionchange`:if(wr)break;case`keydown`:case`keyup`:kr(s,n,i)}var b;if(Vn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Yn?qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Wn&&n.locale!==`ko`&&(Yn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Yn&&(b=un()):(sn=i,cn=`value`in sn?sn.value:sn.textContent,Yn=!0)),y=Ed(r,x),0<y.length&&(x=new On(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Jn(n),b!==null&&(x.data=b)))),(b=Un?Xn(e,n):Zn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new On(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=nn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=nn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=nn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=nn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Bt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Bt(e,``+r);break;case`className`:wt(e,`class`,r);break;case`tabIndex`:wt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:wt(e,n,r);break;case`style`:Ut(e,r,o);break;case`data`:if(t!==`object`){wt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Jt);break;case`onScroll`:r!=null&&bd(`scroll`,e);break;case`onScrollEnd`:r!=null&&bd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:bd(`beforetoggle`,e),bd(`toggle`,e),Ct(e,`popover`,r);break;case`xlinkActuate`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Tt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Tt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ct(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Gt.get(n)||n,Ct(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Ut(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Bt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Bt(e,``+r);break;case`onScroll`:r!=null&&bd(`scroll`,e);break;case`onScrollEnd`:r!=null&&bd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Jt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!gt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[nt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ct(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:bd(`error`,e),bd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:bd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}Ft(e,o,c,l,u,s,a,!1);return;case`select`:for(a in bd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Lt(e,!!r,n,!0):Lt(e,!!r,t,!1);return;case`textarea`:for(s in bd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:bd(`beforetoggle`,e),bd(`toggle`,e),bd(`cancel`,e),bd(`close`,e);break;case`iframe`:case`object`:bd(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)bd(_d[r],e);break;case`image`:bd(`error`,e),bd(`load`,e);break;case`details`:bd(`toggle`,e);break;case`embed`:case`source`:case`link`:bd(`error`,e),bd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Wt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}Pt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Lt(e,!!n,n?[]:``,!1):Lt(e,!!n,t,!0)):Lt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Rt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Wt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Np(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),lt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=L.d;L.d={f:yf,r:bf,D:Cf,C:wf,L:$,m:Tf,X:Df,S:Ef,M:Of};function yf(){var e=vf.f(),t=bu();return e||t}function bf(e){var t=dt(e);t!==null&&t.tag===5&&t.type===`form`?xs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Nt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),mt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function $(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Nt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Nt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Nt(n.imageSizes)+`"]`)):i+=`[href="`+Nt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}hf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Fd(t,`link`,e),mt(t),r.head.appendChild(t)))}}function Tf(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Nt(r)+`"][href="`+Nt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!hf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),mt(r),n.head.appendChild(r)}}}function Ef(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=pt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);mt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=pt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),mt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=pt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&zf(e,t),a=n.createElement(`script`),mt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ne.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=pt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=pt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=pt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Nt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),mt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Nt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Nt(n.href)+`"]`);if(r)return t.instance=r,mt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),mt(r),Fd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,mt(o),o;r=Mf(n),(a=hf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),mt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,mt(a),a):(r=n,(a=hf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),mt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ct]||a[tt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,mt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=hf.get(i))&&Rf(r,i),a=a.createElement(`link`),mt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ri(3,null,null,t),e.current=a,a.stateNode=e,t=ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Fa(a),e}function tp(e){return e?(e=ti,e):ti}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=La(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ra(e,r,t),n!==null&&(hu(n,e,t),za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Qr(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=Xe(t);var n=Qr(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,up(e,t,n,r)}finally{L.p=a,I.T=i}}function lp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,up(e,t,n,r)}finally{L.p=a,I.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Me(o);s.entanglements[1]|=c,o&=~c}rd(a),!(Fl&6)&&(tu=be()+500,id(0,!1))}}break;case 31:case 13:s=Qr(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=Xt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ut(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(xe()){case Se:return 2;case Ce:return 8;case we:case Te:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ut(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,$e(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,$e(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yt=r,n.target.dispatchEvent(r),Yt=null}else return t=dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=dt(n);a!==null&&(e.splice(t,3),t-=3,ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[nt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[nt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[rt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ke=zp.inject(Rp),Ae=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Hs,s=Us,c=Ws;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[rt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d()),y=_(),b=l(h());function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var S;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(S||={});var C=`popstate`;function w(e){e===void 0&&(e={});function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return k(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:A(t)}return M(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substr(2,8)}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function k(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?j(t):t,{state:n,key:t&&t.key||r||D()})}function A(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function j(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=S.Pop,c=null,l=u();l??(l=0,o.replaceState(x({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=S.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=S.Push;let r=k(h.location,e,t);n&&n(r,e),l=u()+1;let d=O(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=S.Replace;let r=k(h.location,e,t);n&&n(r,e),l=u();let i=O(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:A(e);return n=n.replace(/ $/,`%20`),T(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var N;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(N||={});function P(e,t,n){return n===void 0&&(n=`/`),F(e,t,n,!1)}function F(e,t,n,r){let i=ce((typeof t==`string`?j(t):t).pathname||`/`,n);if(i==null)return null;let a=I(e);R(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=se(i);o=ie(a[e],t,r)}return o}function I(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(T(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=he([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),I(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:ne(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of L(e.path))i(e,t,n)}),t}function L(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=L(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function R(e){e.sort((e,t)=>e.score===t.score?re(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var z=/^:[\w-]+$/,B=3,V=2,H=1,U=10,ee=-2,te=e=>e===`*`;function ne(e,t){let n=e.split(`/`),r=n.length;return n.some(te)&&(r+=ee),t&&(r+=V),n.filter(e=>!te(e)).reduce((e,t)=>e+(z.test(t)?B:t===``?H:U),r)}function re(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ie(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ae({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ae({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:he([a,u.pathname]),pathnameBase:ge(he([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=he([a,u.pathnameBase]))}return o}function ae(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function oe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function le(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?j(e):e;return{pathname:n?n.startsWith(`/`)?n:ue(n,t):t,search:_e(r),hash:ve(i)}}function ue(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function de(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function fe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function pe(e,t){let n=fe(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function me(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=j(e):(i=x({},e),T(!i.pathname||!i.pathname.includes(`?`),de(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),de(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),de(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=le(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var he=e=>e.join(`/`).replace(/\/\/+/g,`/`),ge=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),_e=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function ye(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var be=[`post`,`put`,`patch`,`delete`];new Set(be);var xe=[`get`,...be];new Set(xe);function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Ce=v.createContext(null),we=v.createContext(null),Te=v.createContext(null),Ee=v.createContext(null),De=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Oe=v.createContext(null);function ke(e,t){let{relative:n}=t===void 0?{}:t;!Ae()&&T(!1);let{basename:r,navigator:i}=v.useContext(Te),{hash:a,pathname:o,search:s}=Le(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:he([r,o])),i.createHref({pathname:c,search:s,hash:a})}function Ae(){return v.useContext(Ee)!=null}function je(){return!Ae()&&T(!1),v.useContext(Ee).location}function Me(e){v.useContext(Te).static||v.useLayoutEffect(e)}function Ne(){let{isDataRoute:e}=v.useContext(De);return e?Qe():Pe()}function Pe(){!Ae()&&T(!1);let e=v.useContext(Ce),{basename:t,future:n,navigator:r}=v.useContext(Te),{matches:i}=v.useContext(De),{pathname:a}=je(),o=JSON.stringify(pe(i,n.v7_relativeSplatPath)),s=v.useRef(!1);return Me(()=>{s.current=!0}),v.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=me(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:he([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}var Fe=v.createContext(null);function Ie(e){let t=v.useContext(De).outlet;return t&&v.createElement(Fe.Provider,{value:e},t)}function Le(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Te),{matches:i}=v.useContext(De),{pathname:a}=je(),o=JSON.stringify(pe(i,r.v7_relativeSplatPath));return v.useMemo(()=>me(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function Re(e,t){return ze(e,t)}function ze(e,t,n,r){!Ae()&&T(!1);let{navigator:i}=v.useContext(Te),{matches:a}=v.useContext(De),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=je(),u;if(t){let e=typeof t==`string`?j(t):t;!(c===`/`||e.pathname?.startsWith(c))&&T(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=P(e,{pathname:f}),m=We(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:he([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:he([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?v.createElement(Ee.Provider,{value:{location:Se({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:S.Pop}},m):m}function Be(){let e=Ze(),t=ye(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Ve=v.createElement(Be,null),He=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:v.createElement(De.Provider,{value:this.props.routeContext},v.createElement(Oe.Provider,{value:this.state.error,children:this.props.component}))}};function Ue(e){let{routeContext:t,match:n,children:r}=e,i=v.useContext(Ce);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(De.Provider,{value:t},r)}function We(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&T(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Ve,s&&(c<0&&i===0?(et(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?v.createElement(r.route.Component,null):r.route.element?r.route.element:e,v.createElement(Ue,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?v.createElement(He,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Ge=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(Ge||{}),Ke=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Ke||{});function qe(e){let t=v.useContext(Ce);return!t&&T(!1),t}function Je(e){let t=v.useContext(we);return!t&&T(!1),t}function Ye(e){let t=v.useContext(De);return!t&&T(!1),t}function Xe(e){let t=Ye(e),n=t.matches[t.matches.length-1];return!n.route.id&&T(!1),n.route.id}function Ze(){let e=v.useContext(Oe),t=Je(Ke.UseRouteError),n=Xe(Ke.UseRouteError);return e===void 0?t.errors?.[n]:e}function Qe(){let{router:e}=qe(Ge.UseNavigateStable),t=Xe(Ke.UseNavigateStable),n=v.useRef(!1);return Me(()=>{n.current=!0}),v.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Se({fromRouteId:t},i)))},[e,t])}var $e={};function et(e,t,n){!t&&!$e[e]&&($e[e]=!0)}v.startTransition;function tt(e){let{to:t,replace:n,state:r,relative:i}=e;!Ae()&&T(!1);let{future:a,static:o}=v.useContext(Te),{matches:s}=v.useContext(De),{pathname:c}=je(),l=Ne(),u=me(t,pe(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return v.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function nt(e){return Ie(e.context)}function rt(e){T(!1)}function it(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=S.Pop,navigator:a,static:o=!1,future:s}=e;Ae()&&T(!1);let c=t.replace(/^\/*/,`/`),l=v.useMemo(()=>({basename:c,navigator:a,static:o,future:Se({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=j(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=v.useMemo(()=>{let e=ce(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:v.createElement(Te.Provider,{value:l},v.createElement(Ee.Provider,{children:n,value:h}))}function at(e){let{children:t,location:n}=e;return Re(st(t),n)}var ot=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(ot||{});new Promise(()=>{}),v.Component;function st(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,st(e.props.children,i));return}e.type!==rt&&T(!1),!(!e.props.index||!e.props.children)&&T(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=st(e.props.children,i)),n.push(a)}),n}function ct(){return ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}function lt(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ut(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dt(e,t){return e.button===0&&(!t||t===`_self`)&&!ut(e)}var ft=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`unstable_viewTransition`],pt=`6`;try{window.__reactRouterVersion=pt}catch{}var mt=v.startTransition;b.flushSync,v.useId;function ht(e){let{basename:t,children:n,future:r,window:i}=e,a=v.useRef();a.current??=w({window:i,v5Compat:!0});let o=a.current,[s,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=v.useCallback(e=>{l&&mt?mt(()=>c(e)):c(e)},[c,l]);return v.useLayoutEffect(()=>o.listen(u),[o,u]),v.createElement(it,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var gt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,_t=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=v.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,unstable_viewTransition:u}=e,d=lt(e,ft),{basename:f}=v.useContext(Te),p,m=!1;if(typeof c==`string`&&_t.test(c)&&(p=c,gt))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=ce(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=ke(c,{relative:r}),g=xt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,unstable_viewTransition:u});function _(e){n&&n(e),e.defaultPrevented||g(e)}return v.createElement(`a`,ct({},d,{href:p||h,onClick:m||i?n:_,ref:t,target:s}))}),yt;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(yt||={});var bt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(bt||={});function xt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,c=Ne(),l=je(),u=Le(e,{relative:o});return v.useCallback(t=>{dt(t,n)&&(t.preventDefault(),c(e,{replace:r===void 0?A(l)===A(u):r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}))},[l,c,u,r,i,n,e,a,o,s])}var St=function(){return St=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},St.apply(this,arguments)};function Ct(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var wt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt=`-ms-`,Et=`-moz-`,Dt=`-webkit-`,Ot=`comm`,kt=`rule`,At=`decl`,jt=`@import`,Mt=`@namespace`,Nt=`@keyframes`,Pt=`@layer`,Ft=Math.abs,It=String.fromCharCode,Lt=Object.assign;function Rt(e,t){return Ut(e,0)^45?(((t<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}function zt(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function Vt(e,t,n){return e.replace(t,n)}function Ht(e,t,n){return e.indexOf(t,n)}function Ut(e,t){return e.charCodeAt(t)|0}function Wt(e,t,n){return e.slice(t,n)}function Gt(e){return e.length}function Kt(e){return e.length}function qt(e,t){return t.push(e),e}function Jt(e,t){return e.map(t).join(``)}function Yt(e,t){return e.filter(function(e){return!Bt(e,t)})}var Xt=1,Zt=1,Qt=0,$t=0,en=0,tn=``;function nn(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Xt,column:Zt,length:o,return:``,siblings:s}}function rn(e,t){return Lt(nn(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function an(e){for(;e.root;)e=rn(e.root,{children:[e]});qt(e,e.siblings)}function on(){return en}function sn(){return en=$t>0?Ut(tn,--$t):0,Zt--,en===10&&(Zt=1,Xt--),en}function cn(){return en=$t<Qt?Ut(tn,$t++):0,Zt++,en===10&&(Zt=1,Xt++),en}function ln(){return Ut(tn,$t)}function un(){return $t}function dn(e,t){return Wt(tn,e,t)}function fn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pn(e){return Xt=Zt=1,Qt=Gt(tn=e),$t=0,[]}function mn(e){return tn=``,e}function hn(e){return zt(dn($t-1,vn(e===91?e+2:e===40?e+1:e)))}function gn(e){for(;(en=ln())&&en<33;)cn();return fn(e)>2||fn(en)>3?``:` `}function _n(e,t){for(;--t&&cn()&&!(en<48||en>102||en>57&&en<65||en>70&&en<97););return dn(e,un()+(t<6&&ln()==32&&cn()==32))}function vn(e){for(;cn();)switch(en){case e:return $t;case 34:case 39:e!==34&&e!==39&&vn(en);break;case 40:e===41&&vn(e);break;case 92:cn();break}return $t}function yn(e,t){for(;cn()&&e+en!==57&&!(e+en===84&&ln()===47););return`/*`+dn(t,$t-1)+`*`+It(e===47?e:cn())}function bn(e){for(;!fn(ln());)cn();return dn(e,$t)}function xn(e){return mn(Sn(``,null,null,null,[``],e=pn(e),0,[0],e))}function Sn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=cn()){case 40:if(m!=108&&Ut(C,d-1)==58){Ht(C+=Vt(hn(v),`&`,`&\f`),`&\f`,Ft(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=hn(v);break;case 9:case 10:case 13:case 32:C+=gn(m);break;case 92:C+=_n(un()-1,7);continue;case 47:switch(ln()){case 42:case 47:qt(wn(yn(cn(),un()),t,n,c),c),(fn(m||1)==5||fn(ln()||1)==5)&&Gt(C)&&Wt(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Gt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=Vt(C,/\f/g,``)),p>0&&(Gt(C)-d||h===0&&m===47)&&qt(p>32?Tn(C+`;`,r,n,d-1,c):Tn(Vt(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(qt(S=Cn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Sn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Ut(C,3)===110)break;case 108:if(Ut(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Sn(e,S,S,r&&qt(Cn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Sn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Gt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&sn()==125)continue}switch(C+=It(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Gt(C)-1)*_,_=1;break;case 64:ln()===45&&(C+=hn(cn())),f=ln(),u=d=Gt(y=C+=bn(un())),v++;break;case 45:m===45&&Gt(C)==2&&(h=0)}}return a}function Cn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Kt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Wt(e,f+1,f=Ft(g=o[h])),b=e;v<m;++v)(b=zt(g>0?p[v]+` `+y:Vt(y,/&\f/g,p[v])))&&(c[_++]=b);return nn(e,t,n,i===0?kt:s,c,l,u,d)}function wn(e,t,n,r){return nn(e,t,n,Ot,It(on()),Wt(e,2,-2),0,r)}function Tn(e,t,n,r,i){return nn(e,t,n,At,Wt(e,0,r),Wt(e,r+1,-1),r,i)}function En(e,t,n){switch(Rt(e,t)){case 5103:return Dt+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Dt+e+e;case 4855:return Dt+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Et+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Dt+e+Et+e+Tt+e+e;case 5936:switch(Ut(e,t+11)){case 114:return Dt+e+Tt+Vt(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Dt+e+Tt+Vt(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Dt+e+Tt+Vt(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return Dt+e+Tt+e+e;case 6165:return Dt+e+Tt+`flex-`+e+e;case 5187:return Dt+e+Vt(e,/(\w+).+(:[^]+)/,Dt+`box-$1$2`+Tt+`flex-$1$2`)+e;case 5443:return Dt+e+Tt+`flex-item-`+Vt(e,/flex-|-self/g,``)+(Bt(e,/flex-|baseline/)?``:Tt+`grid-row-`+Vt(e,/flex-|-self/g,``))+e;case 4675:return Dt+e+Tt+`flex-line-pack`+Vt(e,/align-content|flex-|-self/g,``)+e;case 5548:return Dt+e+Tt+Vt(e,`shrink`,`negative`)+e;case 5292:return Dt+e+Tt+Vt(e,`basis`,`preferred-size`)+e;case 6060:return Dt+`box-`+Vt(e,`-grow`,``)+Dt+e+Tt+Vt(e,`grow`,`positive`)+e;case 4554:return Dt+Vt(e,/([^-])(transform)/g,`$1`+Dt+`$2`)+e;case 6187:return Vt(Vt(Vt(e,/(zoom-|grab)/,Dt+`$1`),/(image-set)/,Dt+`$1`),e,``)+e;case 5495:case 3959:return Vt(e,/(image-set\([^]*)/,Dt+"$1$`$1");case 4968:return Vt(Vt(e,/(.+:)(flex-)?(.*)/,Dt+`box-pack:$3`+Tt+`flex-pack:$3`),/space-between/,`justify`)+Dt+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return Tt+`grid-column-align`+Wt(e,t)+e;break;case 2592:case 3360:return Tt+Vt(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Bt(e.props,/grid-\w+-end/)})?~Ht(e+(n=n[t].value),`span`,0)?e:Tt+Vt(e,`-start`,``)+e+Tt+`grid-row-span:`+(~Ht(n,`span`,0)?Bt(n,/\d+/):Bt(n,/\d+/)-+Bt(e,/\d+/))+`;`:Tt+Vt(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Bt(e.props,/grid-\w+-start/)})?e:Tt+Vt(Vt(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return Vt(e,/(.+)-inline(.+)/,Dt+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(Ut(e,t+1)){case 109:if(Ut(e,t+4)!==45)break;case 102:return Vt(e,/(.+:)(.+)-([^]+)/,`$1`+Dt+`$2-$3$1`+Et+(Ut(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ht(e,`stretch`,0)?En(Vt(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return Vt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return Tt+n+`:`+r+s+(i?Tt+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Ut(e,t+6)===121)return Vt(e,`:`,`:`+Dt)+e;break;case 6444:switch(Ut(e,Ut(e,14)===45?18:11)){case 120:return Vt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+Dt+(Ut(e,14)===45?`inline-`:``)+`box$3$1`+Dt+`$2$3$1`+Tt+`$2box$3`)+e;case 100:return Vt(e,`:`,`:`+Tt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Vt(e,`scroll-`,`scroll-snap-`)+e}return e}function Dn(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function On(e,t,n,r){switch(e.type){case Pt:if(e.children.length)break;case jt:case Mt:case At:return e.return=e.return||e.value;case Ot:return``;case Nt:return e.return=e.value+`{`+Dn(e.children,r)+`}`;case kt:if(!Gt(e.value=e.props.join(`,`)))return``}return Gt(n=Dn(e.children,r))?e.return=e.value+`{`+n+`}`:``}function kn(e){var t=Kt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function An(e){return function(t){t.root||(t=t.return)&&e(t)}}function jn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case At:e.return=En(e.value,e.length,n);return;case Nt:return Dn([rn(e,{value:Vt(e.value,`@`,`@`+Dt)})],r);case kt:if(e.length)return Jt(n=e.props,function(t){switch(Bt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:an(rn(e,{props:[Vt(t,/:(read-\w+)/,`:`+Et+`$1`)]})),an(rn(e,{props:[t]})),Lt(e,{props:Yt(n,r)});break;case`::placeholder`:an(rn(e,{props:[Vt(t,/:(plac\w+)/,`:`+Dt+`input-$1`)]})),an(rn(e,{props:[Vt(t,/:(plac\w+)/,`:`+Et+`$1`)]})),an(rn(e,{props:[Vt(t,/:(plac\w+)/,Tt+`input-$1`)]})),an(rn(e,{props:[t]})),Lt(e,{props:Yt(n,r)});break}return``})}}var Mn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Nn=`active`,Pn=`data-styled-version`,Fn=`6.3.12`,In=`/*!sc*/
`,Ln=typeof window<`u`&&typeof document<`u`,Rn=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),zn={};function Bn(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Vn=new Map,Hn=new Map,Un=1,Wn=function(e){if(Vn.has(e))return Vn.get(e);for(;Hn.has(Un);)Un++;var t=Un++;return Vn.set(e,t),Hn.set(t,e),t},Gn=function(e,t){Un=t+1,Vn.set(e,t),Hn.set(t,e)},Kn=Object.freeze([]),qn=Object.freeze({});function Jn(e,t,n){return n===void 0&&(n=qn),e.theme!==n.theme&&e.theme||t||n.theme}var Yn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`)),Xn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zn=/(^-|-$)/g;function Qn(e){return e.replace(Xn,`-`).replace(Zn,``)}var $n=/(a)(d)/gi,er=function(e){return String.fromCharCode(e+(e>25?39:97))};function tr(e){var t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=er(t%52)+n;return(er(t%52)+n).replace($n,`$1-$2`)}var nr,rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ir=function(e){return rr(5381,e)};function ar(e){return tr(ir(e)>>>0)}function or(e){return e.displayName||e.name||`Component`}function sr(e){return typeof e==`string`&&!0}var cr=typeof Symbol==`function`&&Symbol.for,lr=cr?Symbol.for(`react.memo`):60115,ur=cr?Symbol.for(`react.forward_ref`):60112,dr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mr=((nr={})[ur]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nr[lr]=pr,nr);function hr(e){return(`type`in(t=e)&&t.type.$$typeof)===lr?pr:`$$typeof`in e?mr[e.$$typeof]:dr;var t}var gr=Object.defineProperty,_r=Object.getOwnPropertyNames,vr=Object.getOwnPropertySymbols,yr=Object.getOwnPropertyDescriptor,br=Object.getPrototypeOf,xr=Object.prototype;function Sr(e,t,n){if(typeof t!=`string`){if(xr){var r=br(t);r&&r!==xr&&Sr(e,r,n)}var i=_r(t);vr&&(i=i.concat(vr(t)));for(var a=hr(e),o=hr(t),s=0;s<i.length;++s){var c=i[s];if(!(c in fr||n&&n[c]||o&&c in o||a&&c in a)){var l=yr(t,c);try{gr(e,c,l)}catch{}}}}return e}function Cr(e){return typeof e==`function`}function wr(e){return typeof e==`object`&&`styledComponentId`in e}function Tr(e,t){return e&&t?`${e} ${t}`:e||t||``}function Er(e,t){return e.join(t||``)}function Dr(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Or(e,t,n){if(n===void 0&&(n=!1),!n&&!Dr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Or(e[r],t[r]);else if(Dr(t))for(var r in t)e[r]=Or(e[r],t[r]);return e}function kr(e,t){Object.defineProperty(e,`toString`,{value:t})}var Ar=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Bn(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=(a=0,t.length);a<c;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+In;return t},e}(),jr=`style[${Mn}][${Pn}="${Fn}"]`,Mr=RegExp(`^${Mn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Nr=function(e){return typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11},Pr=function(e){if(!e)return document;if(Nr(e))return e;if(`getRootNode`in e){var t=e.getRootNode();if(Nr(t))return t}return document},Fr=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Ir=function(e,t){for(var n=(t.textContent??``).split(In),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(Mr);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Gn(l,c),Fr(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Lr=function(e){for(var t=Pr(e.options.target).querySelectorAll(jr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Mn)!==Nn&&(Ir(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Rr(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var zr=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Mn}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Mn,Nn),r.setAttribute(Pn,Fn);var o=Rr();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Br=function(){function e(e){this.element=zr(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=e.getRootNode().styleSheets??document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Vr=function(){function e(e){this.element=zr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Hr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),Ur=Ln,Wr={isServer:!Ln,useCSSOMInjection:!Rn},Gr=function(){function e(e,t,n){e===void 0&&(e=qn),t===void 0&&(t={});var r=this;this.options=St(St({},Wr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ln&&Ur&&(Ur=!1,Lr(this)),kr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Hn.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i);if(a===void 0||!a.size)return`continue`;var o=t.getGroup(n);if(o.length===0)return`continue`;var s=Mn+`.g`+n+`[id="`+i+`"]`,c=``;a.forEach(function(e){e.length>0&&(c+=e+`,`)}),r+=o+s+`{content:"`+c+`"}`+In},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Wn(e)},e.prototype.rehydrate=function(){!this.server&&Ln&&Lr(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(St(St({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Ln&&t.target!==this.options.target&&Pr(this.options.target)!==Pr(t.target)&&Lr(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Hr(n):t?new Br(n):new Vr(n)}(this.options),new Ar(e));var e},e.prototype.hasNameForId=function(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n},e.prototype.registerName=function(e,t){Wn(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Wn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Wn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Kr(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in wt||e.startsWith(`--`)?String(t).trim():`${t}px`}var qr=function(e){return e>=`A`&&e<=`Z`};function Jr(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;qr(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Yr=Symbol.for(`sc-keyframes`);function Xr(e){return typeof e==`object`&&!!e&&Yr in e}var Zr=function(e){return e==null||!1===e||e===``},Qr=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Zr(r)&&(Array.isArray(r)&&r.isCss||Cr(r)?t.push(`${Jr(n)}:`,r,`;`):Dr(r)?t.push.apply(t,Ct(Ct([`${n} {`],Qr(r),!1),[`}`],!1)):t.push(`${Jr(n)}: ${Kr(n,r)};`))}return t};function $r(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e==`string`)return e&&i.push(e),i;if(Zr(e))return i;if(wr(e))return i.push(`.${e.styledComponentId}`),i;if(Cr(e))return!Cr(a=e)||a.prototype&&a.prototype.isReactComponent||!t?(i.push(e),i):$r(e(t),t,n,r,i);var a;if(Xr(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Dr(e)){for(var o=Qr(e),s=0;s<o.length;s++)i.push(o[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)$r(e[s],t,n,r,i);return i}function ei(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Cr(n)&&!wr(n))return!1}return!0}var ti=ir(Fn),ni=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&ei(e),this.componentId=t,this.baseHash=rr(ti,t),this.baseStyle=n,Gr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Tr(r,this.staticRulesId);else{var i=Er($r(this.rules,e,t,n)),a=tr(rr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Tr(r,a),this.staticRulesId=a}else{for(var s=rr(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Er($r(u,e,t,n));s=rr(rr(s,String(l)),d),c+=d}}if(c){var f=tr(s>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(c,`.${f}`,void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=Tr(r,f)}}return{className:r,css:typeof window>`u`?t.getTag().getGroup(Wn(this.componentId)):``}},e}(),ri=/&/g,ii=47,ai=42;function oi(e){if(e.indexOf(`}`)===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,a=0;a<t;a++){var o=e.charCodeAt(a);if(r!==0||i||o!==ii||e.charCodeAt(a+1)!==ai)if(i)o===ai&&e.charCodeAt(a+1)===ii&&(i=!1,a++);else if(o!==34&&o!==39||a!==0&&e.charCodeAt(a-1)===92){if(r===0){if(o===123)n++;else if(o===125&&--n<0)return!0}}else r===0?r=o:r===o&&(r=0);else i=!0,a++}return n!==0||r!==0}function si(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=si(e.children,t)),e})}function ci(e){var t,n,r,i=e===void 0?qn:e,a=i.options,o=a===void 0?qn:a,s=i.plugins,c=s===void 0?Kn:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(r||=RegExp(`\\${n}\\b`,`g`),e.props[0]=e.props[0].replace(ri,n).replace(r,l))}),o.prefix&&u.push(jn),u.push(On);var d=[],f=kn(u.concat(An(function(e){return d.push(e)}))),p=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=void 0;var c=function(e){if(!oi(e))return e;for(var t=e.length,n=``,r=0,i=0,a=0,o=!1,s=0;s<t;s++){var c=e.charCodeAt(s);if(a!==0||o||c!==ii||e.charCodeAt(s+1)!==ai)if(o)c===ai&&e.charCodeAt(s+1)===ii&&(o=!1,s++);else if(c!==34&&c!==39||s!==0&&e.charCodeAt(s-1)===92){if(a===0)if(c===123)i++;else if(c===125){if(--i<0){for(var l=s+1;l<t;){var u=e.charCodeAt(l);if(u===59||u===10)break;l++}l<t&&e.charCodeAt(l)===59&&l++,i=0,s=l-1,r=l;continue}i===0&&(n+=e.substring(r,s+1),r=s+1)}else c===59&&i===0&&(n+=e.substring(r,s+1),r=s+1)}else a===0?a=c:a===c&&(a=0);else o=!0,s++}if(r<t){var d=e.substring(r);oi(d)||(n+=d)}return n}(function(e){if(e.indexOf(`//`)===-1)return e;for(var t=e.length,n=[],r=0,i=0,a=0,o=0;i<t;){var s=e.charCodeAt(i);if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92)if(a===0)if(s===ii&&i+1<t&&e.charCodeAt(i+1)===ai){for(i+=2;i+1<t&&(e.charCodeAt(i)!==ai||e.charCodeAt(i+1)!==ii);)i++;i+=2}else if(s===40&&i>=3&&(32|e.charCodeAt(i-1))==108&&(32|e.charCodeAt(i-2))==114&&(32|e.charCodeAt(i-3))==117)o=1,i++;else if(o>0)s===41?o--:s===40&&o++,i++;else if(s===ai&&i+1<t&&e.charCodeAt(i+1)===ii)i>r&&n.push(e.substring(r,i)),r=i+=2;else if(s===ii&&i+1<t&&e.charCodeAt(i+1)===ii){for(i>r&&n.push(e.substring(r,i));i<t&&e.charCodeAt(i)!==10;)i++;r=i}else i++;else i++;else a===0?a=s:a===s&&(a=0),i++}return r===0?e:(r<t&&n.push(e.substring(r)),n.join(``))}(e)),l=xn(a||i?`${a} ${i} { ${c} }`:c);return o.namespace&&(l=si(l,o.namespace)),d=[],Dn(l,f),d};return p.hash=c.length?c.reduce(function(e,t){return t.name||Bn(15),rr(e,t.name)},5381).toString():``,p}var li=new Gr,ui=ci(),di=v.createContext({shouldForwardProp:void 0,styleSheet:li,stylis:ui});di.Consumer;var fi=v.createContext(void 0);function pi(){return v.useContext(di)}function mi(e){if(!v.useMemo)return e.children;var t=pi().styleSheet,n=v.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=v.useMemo(function(){return ci({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=v.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return v.createElement(di.Provider,{value:i},v.createElement(fi.Provider,{value:r},e.children))}var hi=v.createContext(void 0);hi.Consumer;function gi(e){var t=v.useContext(hi),n=v.useMemo(function(){return function(e,t){if(!e)throw Bn(14);if(Cr(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Bn(8);return t?St(St({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?v.createElement(hi.Provider,{value:n},e.children):null}var _i={};function vi(e,t,n){var r=wr(e),i=e,a=!sr(e),o=t.attrs,s=o===void 0?Kn:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?Qn(e):`sc`;_i[n]=(_i[n]||0)+1;var r=`${n}-${ar(Fn+n+_i[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return sr(e)?`styled.${e}`:`Styled(${or(e)})`}(e):u,f=t.displayName&&t.componentId?`${Qn(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var _=new ni(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=v.useContext(hi),u=pi(),d=e.shouldForwardProp||u.shouldForwardProp,f=Jn(t,l,a)||qn,p=function(e,t,n){for(var r,i=St(St({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Cr(r=e[a])?r(i):r;for(var s in o)s===`className`?i.className=Tr(i.className,o[s]):s===`style`?i.style=St(St({},i.style),o[s]):s in t&&t[s]===void 0||(i[s]=o[s])}return`className`in t&&typeof t.className==`string`&&(i.className=Tr(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var _=function(e,t){var n=pi();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p).className,y=Tr(o,s);return _&&(y+=` `+_),p.className&&(y+=` `+p.className),h[sr(m)&&!Yn.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,v.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=v.forwardRef(y);return b.attrs=p,b.componentStyle=_,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?Tr(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Or(e,r[n],!0);return e}({},i.defaultProps,e):e}}),kr(b,function(){return`.${b.styledComponentId}`}),a&&Sr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function yi(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var bi=function(e){return Object.assign(e,{isCss:!0})};function xi(e){var t=[...arguments].slice(1);if(Cr(e)||Dr(e))return bi($r(yi(Kn,Ct([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?$r(n):bi($r(yi(n,t)))}function Si(e,t,n){if(n===void 0&&(n=qn),!t)throw Bn(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,xi.apply(void 0,Ct([r],i,!1)))};return r.attrs=function(r){return Si(e,t,St(St({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Si(e,t,St(St({},n),r))},r}var Ci=function(e){return Si(vi,e)},W=Ci;Yn.forEach(function(e){W[e]=Ci(e)});var wi,Ti=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ei(e),Gr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Er($r(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Gr.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function Ei(e){var t=[...arguments].slice(1),n=xi.apply(void 0,Ct([e],t,!1)),r=`sc-global-${ar(JSON.stringify(n))}`,i=new Ti(n,r),a=new WeakMap,o=function(e){var t=pi(),n=v.useContext(hi),s=a.get(t.styleSheet);return s===void 0&&(s=t.styleSheet.allocateGSInstance(r),a.set(t.styleSheet,s)),v.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,zn,n,a);else{var s=St(St({},t),{theme:Jn(t,r,o.defaultProps)});i.renderStyles(e,s,n,a)}}(s,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(s,t.styleSheet)}},[s,e,t.styleSheet,n,t.stylis]),null};return v.memo(o)}var Di=function(){function e(e,t){var n=this;this[wi]=!0,this.inject=function(e,t){t===void 0&&(t=ui);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,kr(this,function(){throw Bn(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=ui),this.name+e.hash},e}();function Oi(e){var t=[...arguments].slice(1),n=Er(xi.apply(void 0,Ct([e],t,!1)));return new Di(ar(n),n)}wi=Yr,function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Rr();return`<style ${Er([n&&`nonce="${n}"`,`${Mn}="true"`,`${Pn}="${Fn}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Bn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Bn(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Mn]=``,t[Pn]=Fn,t.dangerouslySetInnerHTML={__html:n},t),i=Rr();return i&&(r.nonce=i),[v.createElement(`style`,St({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Gr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Bn(2);return v.createElement(mi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Bn(3)},e}(),`${Mn}`;var ki=Ei`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({theme:e})=>e.fonts?.body||`'Poppins', sans-serif`};
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    transition: all 0.3s ease;
    font-size: ${({theme:e})=>e.fontSizes?.md||`1rem`};
    font-weight: ${({theme:e})=>e.fontWeights?.body||`400`};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({theme:e})=>e.fontWeights?.heading||`600`};
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${({theme:e})=>e.colors.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({theme:e})=>e.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({theme:e})=>e.transitions?.normal||`all 0.3s ease`};
    border-radius: ${({theme:e})=>e.buttons?.borderRadius||`8px`};
  }

  input, select, textarea {
    font-family: ${({theme:e})=>e.fonts?.body||`'Poppins', sans-serif`};
    padding: 10px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: ${({theme:e})=>e.colors.primary};
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
      outline: none;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    
    th, td {
      padding: ${({theme:e})=>e.spacing?.md||`12px 15px`};
      text-align: left;
      border-bottom: 1px solid ${({theme:e})=>e.colors.border};
      color: ${({theme:e})=>e.colors.textLight};
    }
    
    th {
      background-color: ${({theme:e})=>e.colors.primaryLight};
      color: ${({theme:e})=>e.colors.textLight};
      font-weight: 600;
    }
    
    tr:hover {
      background-color: ${({theme:e})=>e.colors.backgroundAlt};
    }
  }

  .card {
    background: ${({theme:e})=>e.colors.card};
    border-radius: ${({theme:e})=>e.borderRadius?.lg||`8px`};
    box-shadow: ${({theme:e})=>e.shadows?.md||`0 4px 6px rgba(0, 0, 0, 0.1)`};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease, box-shadow 0.3s ease`};
    
    &:hover {
      transform: ${({theme:e})=>e.cardStyle?.animation?`translateY(-5px)`:`none`};
      box-shadow: ${({theme:e})=>e.cardStyle?.animation?`0 10px 15px rgba(0, 0, 0, 0.1)`:e.shadows?.md||`0 4px 6px rgba(0, 0, 0, 0.1)`};
    }
    
    @media (max-width: 768px) {
      padding: 1rem;
      margin-bottom: 1rem;
      
      &:hover {
        transform: none;
      }
    }
  }

  .container {
    max-width: ${({theme:e})=>e.layout?.containerWidth===`narrow`?`800px`:e.layout?.containerWidth===`wide`?`1400px`:`1200px`};
    margin: 0 auto;
    padding: 0 1rem;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .grid {
    display: grid;
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .gap-4 {
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  .p-4 {
    padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  .m-4 {
    margin: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  .mb-4 {
    margin-bottom: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  .mt-4 {
    margin-top: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .rounded {
    border-radius: ${({theme:e})=>e.borderRadius?.md||`4px`};
  }

  .shadow {
    box-shadow: ${({theme:e})=>e.shadows?.md||`0 4px 6px rgba(0, 0, 0, 0.1)`};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease forwards;
  }

  .responsive-table {
    overflow-x: auto;
    width: 100%;
  }

  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }

  @media (max-width: 768px) {
    .grid-cols-2, .grid-cols-3, .grid-cols-4 {
      grid-template-columns: 1fr;
    }
    
    .responsive-grid {
      grid-template-columns: 1fr;
    }
    
    .hide-on-mobile {
      display: none;
    }
    
    .p-4 {
      padding: 0.75rem;
    }
    
    .m-4 {
      margin: 0.75rem;
    }
    
    h1 {
      font-size: 1.5rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .grid-cols-3, .grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Layout density styles */
  ${({theme:e})=>e.layout?.density===`compact`&&`
    .card, .p-4 {
      padding: 0.75rem;
    }
    
    .gap-4 {
      gap: 0.75rem;
    }
    
    table th, table td {
      padding: 8px 12px;
    }
    
    .mb-4, .mt-4, .m-4 {
      margin: 0.75rem;
    }
  `}

  ${({theme:e})=>e.layout?.density===`spacious`&&`
    .card, .p-4 {
      padding: 2rem;
    }
    
    .gap-4 {
      gap: 1.5rem;
    }
    
    table th, table td {
      padding: 16px 20px;
    }
    
    .mb-4, .mt-4, .m-4 {
      margin: 1.5rem;
    }
  `}

  /* Icon size styles */
  ${({theme:e})=>e.icons?.size===`small`&&`
    .icon, svg {
      font-size: 0.85em;
    }
  `}

  ${({theme:e})=>e.icons?.size===`large`&&`
    .icon, svg {
      font-size: 1.25em;
    }
  `}

  /* Button styles */
  button, .btn {
    border-radius: ${({theme:e})=>e.buttons?.borderRadius===`0`?`0`:e.buttons?.borderRadius===`9999px`?`9999px`:`8px`};
    
    box-shadow: ${({theme:e})=>e.buttons?.shadow?`0 4px 6px rgba(0, 0, 0, 0.1)`:`none`};
    
    &:hover {
      transform: ${({theme:e})=>e.buttons?.animation?`translateY(-2px)`:`none`};
      
      box-shadow: ${({theme:e})=>e.buttons?.shadow&&e.buttons?.animation?`0 6px 8px rgba(0, 0, 0, 0.15)`:e.buttons?.shadow?`0 4px 6px rgba(0, 0, 0, 0.1)`:`none`};
    }
  }
`;function Ai(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ai(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function ji(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ai(e))&&(r&&(r+=` `),r+=t);return r}function Mi(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Mi(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ni=e=>typeof e==`number`&&!isNaN(e),Pi=e=>typeof e==`string`,Fi=e=>typeof e==`function`,Ii=e=>Pi(e)||Ni(e),Li=e=>Pi(e)||Fi(e)?e:null,Ri=(e,t)=>e===!1||Ni(e)&&e>0?e:t,zi=e=>(0,v.isValidElement)(e)||Pi(e)||Fi(e)||Ni(e);function Bi(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function Vi({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,v.useRef)(0);return(0,v.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,v.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?Bi(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),v.createElement(v.Fragment,null,a)}}function Hi(e,t){return{content:Ui(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Ui(e,t,n=!1){return(0,v.isValidElement)(e)&&!Pi(e.type)?(0,v.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Fi(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Wi({closeToast:e,theme:t,ariaLabel:n=`close`}){return v.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},v.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},v.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function Gi({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:o,progress:s,rtl:c,isIn:l,theme:u}){let d=i||o&&s===0,f={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};o&&(f.transform=`scaleX(${s})`);let p=ji(`Toastify__progress-bar`,o?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),m=Fi(a)?a({rtl:c,type:r,defaultClassName:p}):ji(p,a),h={[o&&s>=1?`onTransitionEnd`:`onAnimationEnd`]:o&&s<1?null:()=>{l&&n()}};return v.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":d},v.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),v.createElement(`div`,{role:`progressbar`,"aria-hidden":d?`true`:`false`,"aria-label":`notification timer`,className:m,style:f,...h}))}var Ki=1,qi=()=>`${Ki++}`;function Ji(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,n;(n=(t=e.props)?.onClose)==null||n.call(t,e.removalReason),e.isActive=!1},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(Hi(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:o,updateId:l,data:u,staleId:p,delay:m}=t,g=l==null;g&&i++;let v={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:o,updateId:l,data:u,isIn:!1,className:Li(t.className||s.toastClassName),progressClassName:Li(t.progressClassName||s.progressClassName),autoClose:t.isLoading?!1:Ri(t.autoClose,s.autoClose),closeToast(e){c.get(o).removalReason=e,h(o)},deleteToast(){let e=c.get(o);if(e!=null){if(n(Hi(e,`removed`)),c.delete(o),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};v.closeButton=s.closeButton,t.closeButton===!1||zi(t.closeButton)?v.closeButton=t.closeButton:t.closeButton===!0&&(v.closeButton=zi(s.closeButton)?s.closeButton:!0);let y={content:e,props:v,staleId:p};s.limit&&s.limit>0&&i>s.limit&&g?a.push(y):Ni(m)?setTimeout(()=>{_(y)},m):_(y)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var Yi=new Map,Xi=[],Zi=new Set,Qi=e=>Zi.forEach(t=>t(e)),$i=()=>Yi.size>0;function ea(){Xi.forEach(e=>aa(e.content,e.options)),Xi=[]}var ta=(e,{containerId:t})=>Yi.get(t||1)?.toasts.get(e);function na(e,t){var n;if(t)return!!((n=Yi.get(t))!=null&&n.isToastActive(e));let r=!1;return Yi.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function ra(e){if(!$i()){Xi=Xi.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Ii(e))Yi.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=Yi.get(e.containerId);t?t.removeToast(e.id):Yi.forEach(t=>{t.removeToast(e.id)})}}var ia=(e={})=>{Yi.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function aa(e,t){zi(e)&&($i()||Xi.push({content:e,options:t}),Yi.forEach(n=>{n.buildToast(e,t)}))}function oa(e){var t;(t=Yi.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function sa(e,t){Yi.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function ca(e){let t=e.containerId||1;return{subscribe(n){let r=Ji(t,e,Qi);Yi.set(t,r);let i=r.observe(n);return ea(),()=>{i(),Yi.delete(t)}},setProps(e){var n;(n=Yi.get(t))==null||n.setProps(e)},getSnapshot(){return Yi.get(t)?.getSnapshot()}}}function la(e){return Zi.add(e),()=>{Zi.delete(e)}}function ua(e){return e&&(Pi(e.toastId)||Ni(e.toastId))?e.toastId:qi()}function da(e,t){return aa(e,t),t.toastId}function fa(e,t){return{...t,type:t&&t.type||e,toastId:ua(t)}}function pa(e){return(t,n)=>da(t,fa(e,n))}function G(e,t){return da(e,fa(`default`,t))}G.loading=(e,t)=>da(e,fa(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function ma(e,{pending:t,error:n,success:r},i){let a;t&&(a=Pi(t)?G.loading(t,i):G.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){G.dismiss(a);return}let r={type:e,...o,...i,data:n},s=Pi(t)?{render:t}:t;return a?G.update(a,{...r,...s}):G(s.render,{...r,...s}),n},c=Fi(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}G.promise=ma,G.success=pa(`success`),G.info=pa(`info`),G.error=pa(`error`),G.warning=pa(`warning`),G.warn=G.warning,G.dark=(e,t)=>da(e,fa(`default`,{theme:`dark`,...t}));function ha(e){ra(e)}G.dismiss=ha,G.clearWaitingQueue=ia,G.isActive=na,G.update=(e,t={})=>{let n=ta(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:qi()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,da(o,a)}},G.done=e=>{G.update(e,{progress:1})},G.onChange=la,G.play=e=>sa(!0,e),G.pause=e=>sa(!1,e);function ga(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,v.useRef)(ca(e)).current;r(e);let i=(0,v.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:na,count:i?.length}}function _a(e){let[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(!1),a=(0,v.useRef)(null),o=(0,v.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;oa({id:e.toastId,containerId:e.containerId,fn:n}),(0,v.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||_(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,_)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,_)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.nativeEvent.type!==`touchend`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?_():g()}function g(){n(!0)}function _(){n(!1)}function y(){o.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&_(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function S(){b();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=_,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var va=typeof window<`u`?v.useLayoutEffect:v.useEffect,ya=({theme:e,type:t,isLoading:n,...r})=>v.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function ba(e){return v.createElement(ya,{...e},v.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function xa(e){return v.createElement(ya,{...e},v.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function Sa(e){return v.createElement(ya,{...e},v.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function Ca(e){return v.createElement(ya,{...e},v.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function wa(){return v.createElement(`div`,{className:`Toastify__spinner`})}var Ta={info:xa,warning:ba,success:Sa,error:Ca,spinner:wa},Ea=e=>e in Ta;function Da({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(Fi(r)?i=r({...a,isLoading:n}):(0,v.isValidElement)(r)?i=(0,v.cloneElement)(r,a):n?i=Ta.spinner():Ea(t)&&(i=Ta[t](a))),i}var Oa=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=_a(e),{closeButton:o,children:s,autoClose:c,onClick:l,type:u,hideProgressBar:d,closeToast:f,transition:p,position:m,className:h,style:g,progressClassName:_,updateId:y,role:b,progress:x,rtl:S,toastId:C,deleteToast:w,isIn:T,isLoading:E,closeOnClick:D,theme:O,ariaLabel:k}=e,A=ji(`Toastify__toast`,`Toastify__toast-theme--${O}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":D}),j=Fi(h)?h({rtl:S,position:m,type:u,defaultClassName:A}):ji(A,h),M=Da(e),N=!!x||!c,P={closeToast:f,type:u,theme:O},F=null;return o===!1||(F=Fi(o)?o(P):(0,v.isValidElement)(o)?(0,v.cloneElement)(o,P):Wi(P)),v.createElement(p,{isIn:T,done:w,position:m,preventExitTransition:n,nodeRef:r,playToast:a},v.createElement(`div`,{id:C,tabIndex:0,onClick:l,"data-in":T,className:j,...i,style:g,ref:r,...T&&{role:b,"aria-label":k}},M!=null&&v.createElement(`div`,{className:ji(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!E})},M),Ui(s,e,!t),F,!e.customProgressBar&&v.createElement(Gi,{...y&&!N?{key:`p-${y}`}:{},rtl:S,theme:O,delay:c,isRunning:t,isIn:T,closeToast:f,hide:d,type:u,className:_,controlledProgress:N,progress:x||0})))},ka=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Aa=Vi(ka(`bounce`,!0));Vi(ka(`slide`,!0)),Vi(ka(`zoom`)),Vi(ka(`flip`));var ja={position:`top-right`,transition:Aa,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function Ma(e){let t={...ja,...e},n=e.stacked,[r,i]=(0,v.useState)(!0),a=(0,v.useRef)(null),{getToastToRender:o,isToastActive:s,count:c}=ga(t),{className:l,style:u,rtl:d,containerId:f,hotKeys:p}=t;function m(e){let t=ji(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return Fi(l)?l({position:e,rtl:d,defaultClassName:t}):ji(t,Li(l))}function h(){n&&(i(!0),G.play())}return va(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t);a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${1-(r?o:0)}`),i+=a.offsetHeight,o+=.025})}},[r,c,n]),(0,v.useEffect)(()=>{function e(e){var t;let n=a.current;p(e)&&((t=n.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),G.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),G.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p]),v.createElement(`section`,{ref:a,className:`Toastify`,id:f,onMouseEnter:()=>{n&&(i(!1),G.pause())},onMouseLeave:h,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},o((e,t)=>{let r=t.length?{...u}:{...u,pointerEvents:`none`};return v.createElement(`div`,{tabIndex:-1,className:m(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>v.createElement(Oa,{...t,stacked:n,collapseAll:h,isIn:s(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}function Na(e,t){return function(){return e.apply(t,arguments)}}var{toString:Pa}=Object.prototype,{getPrototypeOf:Fa}=Object,Ia=(e=>t=>{let n=Pa.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),La=e=>(e=e.toLowerCase(),t=>Ia(t)===e),Ra=e=>t=>typeof t===e,{isArray:za}=Array,Ba=Ra(`undefined`);function Va(e){return e!==null&&!Ba(e)&&e.constructor!==null&&!Ba(e.constructor)&&Ga(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Ha=La(`ArrayBuffer`);function Ua(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ha(e.buffer),t}var Wa=Ra(`string`),Ga=Ra(`function`),Ka=Ra(`number`),qa=e=>typeof e==`object`&&!!e,Ja=e=>e===!0||e===!1,Ya=e=>{if(Ia(e)!==`object`)return!1;let t=Fa(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xa=La(`Date`),Za=La(`File`),Qa=La(`Blob`),$a=La(`FileList`),eo=e=>qa(e)&&Ga(e.pipe),to=e=>{let t;return e&&(typeof FormData==`function`&&e instanceof FormData||Ga(e.append)&&((t=Ia(e))===`formdata`||t===`object`&&Ga(e.toString)&&e.toString()===`[object FormData]`))},no=La(`URLSearchParams`),[ro,io,ao,oo]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(La),K=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function so(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),za(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function co(e,t){t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var lo=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,uo=e=>!Ba(e)&&e!==lo;function fo(){let{caseless:e}=uo(this)&&this||{},t={},n=(n,r)=>{let i=e&&co(t,r)||r;Ya(t[i])&&Ya(n)?t[i]=fo(t[i],n):Ya(n)?t[i]=fo({},n):za(n)?t[i]=n.slice():t[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&so(arguments[e],n);return t}var po=(e,t,n,{allOwnKeys:r}={})=>(so(t,(t,r)=>{n&&Ga(t)?e[r]=Na(t,n):e[r]=t},{allOwnKeys:r}),e),mo=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ho=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},go=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Fa(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_o=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},vo=e=>{if(!e)return null;if(za(e))return e;let t=e.length;if(!Ka(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},yo=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Fa(Uint8Array)),bo=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},xo=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},So=La(`HTMLFormElement`),Co=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),wo=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),To=La(`RegExp`),Eo=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};so(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Do=e=>{Eo(e,(t,n)=>{if(Ga(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(Ga(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Oo=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return za(e)?r(e):r(String(e).split(t)),n},ko=()=>{},Ao=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,jo=`abcdefghijklmnopqrstuvwxyz`,Mo=`0123456789`,No={DIGIT:Mo,ALPHA:jo,ALPHA_DIGIT:jo+jo.toUpperCase()+Mo},Po=(e=16,t=No.ALPHA_DIGIT)=>{let n=``,{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Fo(e){return!!(e&&Ga(e.append)&&e[Symbol.toStringTag]===`FormData`&&e[Symbol.iterator])}var Io=e=>{let t=Array(10),n=(e,r)=>{if(qa(e)){if(t.indexOf(e)>=0)return;if(!(`toJSON`in e)){t[r]=e;let i=za(e)?[]:{};return so(e,(e,t)=>{let a=n(e,r+1);!Ba(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Lo=La(`AsyncFunction`),Ro=e=>e&&(qa(e)||Ga(e))&&Ga(e.then)&&Ga(e.catch),zo=((e,t)=>e?setImmediate:t?((e,t)=>(lo.addEventListener(`message`,({source:n,data:r})=>{n===lo&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),lo.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Ga(lo.postMessage)),q={isArray:za,isArrayBuffer:Ha,isBuffer:Va,isFormData:to,isArrayBufferView:Ua,isString:Wa,isNumber:Ka,isBoolean:Ja,isObject:qa,isPlainObject:Ya,isReadableStream:ro,isRequest:io,isResponse:ao,isHeaders:oo,isUndefined:Ba,isDate:Xa,isFile:Za,isBlob:Qa,isRegExp:To,isFunction:Ga,isStream:eo,isURLSearchParams:no,isTypedArray:yo,isFileList:$a,forEach:so,merge:fo,extend:po,trim:K,stripBOM:mo,inherits:ho,toFlatObject:go,kindOf:Ia,kindOfTest:La,endsWith:_o,toArray:vo,forEachEntry:bo,matchAll:xo,isHTMLForm:So,hasOwnProperty:wo,hasOwnProp:wo,reduceDescriptors:Eo,freezeMethods:Do,toObjectSet:Oo,toCamelCase:Co,noop:ko,toFiniteNumber:Ao,findKey:co,global:lo,isContextDefined:uo,ALPHABET:No,generateString:Po,isSpecCompliantForm:Fo,toJSONObject:Io,isAsyncFn:Lo,isThenable:Ro,setImmediate:zo,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(lo):typeof process<`u`&&process.nextTick||zo};function J(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name=`AxiosError`,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}q.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});var Bo=J.prototype,Vo={};[`ERR_BAD_OPTION_VALUE`,`ERR_BAD_OPTION`,`ECONNABORTED`,`ETIMEDOUT`,`ERR_NETWORK`,`ERR_FR_TOO_MANY_REDIRECTS`,`ERR_DEPRECATED`,`ERR_BAD_RESPONSE`,`ERR_BAD_REQUEST`,`ERR_CANCELED`,`ERR_NOT_SUPPORT`,`ERR_INVALID_URL`].forEach(e=>{Vo[e]={value:e}}),Object.defineProperties(J,Vo),Object.defineProperty(Bo,`isAxiosError`,{value:!0}),J.from=(e,t,n,r,i,a)=>{let o=Object.create(Bo);return q.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>e!==`isAxiosError`),J.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};function Ho(e){return q.isPlainObject(e)||q.isArray(e)}function Uo(e){return q.endsWith(e,`[]`)?e.slice(0,-2):e}function Wo(e,t,n){return e?e.concat(t).map(function(e,t){return e=Uo(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Go(e){return q.isArray(e)&&!e.some(Ho)}var Ko=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function qo(e,t,n){if(!q.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!q.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(q.isDate(e))return e.toISOString();if(!s&&q.isBlob(e))throw new J(`Blob is not supported. Use a Buffer instead.`);return q.isArrayBuffer(e)||q.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(e&&!i&&typeof e==`object`){if(q.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&Go(e)||(q.isFileList(e)||q.endsWith(n,`[]`))&&(s=q.toArray(e)))return n=Uo(n),s.forEach(function(e,r){!(q.isUndefined(e)||e===null)&&t.append(o===!0?Wo([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return Ho(e)?!0:(t.append(Wo(i,n,a),c(e)),!1)}let u=[],d=Object.assign(Ko,{defaultVisitor:l,convertValue:c,isVisitable:Ho});function f(e,n){if(!q.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),q.forEach(e,function(e,r){(!(q.isUndefined(e)||e===null)&&i.call(t,e,q.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!q.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function Jo(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Yo(e,t){this._pairs=[],e&&qo(e,this,t)}var Xo=Yo.prototype;Xo.append=function(e,t){this._pairs.push([e,t])},Xo.toString=function(e){let t=e?function(t){return e.call(this,t,Jo)}:Jo;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Zo(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`).replace(/%5B/gi,`[`).replace(/%5D/gi,`]`)}function Qo(e,t,n){if(!t)return e;let r=n&&n.encode||Zo,i=n&&n.serialize,a;if(a=i?i(t,n):q.isURLSearchParams(t)?t.toString():new Yo(t,n).toString(r),a){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+a}return e}var $o=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){q.forEach(this.handlers,function(t){t!==null&&e(t)})}},es={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ts={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Yo,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},ns=s({hasBrowserEnv:()=>rs,hasStandardBrowserEnv:()=>as,hasStandardBrowserWebWorkerEnv:()=>os,navigator:()=>is,origin:()=>ss}),rs=typeof window<`u`&&typeof document<`u`,is=typeof navigator==`object`&&navigator||void 0,as=rs&&(!is||[`ReactNative`,`NativeScript`,`NS`].indexOf(is.product)<0),os=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,ss=rs&&window.location.href||`http://localhost`,cs={...ns,...ts};function ls(e,t){return qo(e,new cs.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return cs.isNode&&q.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)}},t))}function us(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function ds(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function fs(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&q.isArray(r)?r.length:a,s?(q.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&q.isArray(r[a])&&(r[a]=ds(r[a])),!o)}if(q.isFormData(e)&&q.isFunction(e.entries)){let n={};return q.forEachEntry(e,(e,r)=>{t(us(e),r,n,0)}),n}return null}function ps(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var ms={transitional:es,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=q.isObject(e);if(i&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(fs(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return ls(e,this.formSerializer).toString();if((a=q.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return qo(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),ps(e)):e}],transformResponse:[function(e){let t=this.transitional||ms.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n)throw e.name===`SyntaxError`?J.from(e,J.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:cs.classes.FormData,Blob:cs.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{ms.headers[e]={}});var hs=q.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),gs=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&hs[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},_s=Symbol(`internals`);function vs(e){return e&&String(e).trim().toLowerCase()}function ys(e){return e===!1||e==null?e:q.isArray(e)?e.map(ys):String(e)}function bs(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var xs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ss(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function Cs(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function ws(e,t){let n=q.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Ts=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=vs(t);if(!i)throw Error(`header name must be a non-empty string`);let a=q.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=ys(e))}let a=(e,t)=>q.forEach(e,(e,n)=>i(e,n,t));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(q.isString(e)&&(e=e.trim())&&!xs(e))a(gs(e),t);else if(q.isHeaders(e))for(let[t,r]of e.entries())i(r,t,n);else e!=null&&i(t,e,n);return this}get(e,t){if(e=vs(e),e){let n=q.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return bs(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=vs(e),e){let n=q.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Ss(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=vs(e),e){let i=q.findKey(n,e);i&&(!t||Ss(n,n[i],i,t))&&(delete n[i],r=!0)}}return q.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Ss(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return q.forEach(this,(r,i)=>{let a=q.findKey(n,i);if(a){t[a]=ys(r),delete t[i];return}let o=e?Cs(i):String(i).trim();o!==i&&delete t[i],t[o]=ys(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return q.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&q.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[_s]=this[_s]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=vs(e);t[r]||(ws(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};Ts.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),q.reduceDescriptors(Ts.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),q.freezeMethods(Ts);function Es(e,t){let n=this||ms,r=t||n,i=Ts.from(r.headers),a=r.data;return q.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Ds(e){return!!(e&&e.__CANCEL__)}function Os(e,t,n){J.call(this,e??`canceled`,J.ERR_CANCELED,t,n),this.name=`CanceledError`}q.inherits(Os,J,{__CANCEL__:!0});function ks(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J(`Request failed with status code `+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function As(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function js(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Ms(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e.apply(null,t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Ns=(e,t,n=3)=>{let r=0,i=js(50,250);return Ms(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Ps=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Fs=e=>(...t)=>q.asap(()=>e(...t)),Is=cs.hasStandardBrowserEnv?(function(){let e=cs.navigator&&/(msie|trident)/i.test(cs.navigator.userAgent),t=document.createElement(`a`),n;function r(n){let r=n;return e&&(t.setAttribute(`href`,r),r=t.href),t.setAttribute(`href`,r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,``):``,host:t.host,search:t.search?t.search.replace(/^\?/,``):``,hash:t.hash?t.hash.replace(/^#/,``):``,hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)===`/`?t.pathname:`/`+t.pathname}}return n=r(window.location.href),function(e){let t=q.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}})():(function(){return function(){return!0}})(),Ls=cs.hasStandardBrowserEnv?{write(e,t,n,r,i,a){let o=[e+`=`+encodeURIComponent(t)];q.isNumber(n)&&o.push(`expires=`+new Date(n).toGMTString()),q.isString(r)&&o.push(`path=`+r),q.isString(i)&&o.push(`domain=`+i),a===!0&&o.push(`secure`),document.cookie=o.join(`; `)},read(e){let t=document.cookie.match(RegExp(`(^|;\\s*)(`+e+`)=([^;]*)`));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,``,Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zs(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Bs(e,t){return e&&!Rs(t)?zs(e,t):t}var Vs=e=>e instanceof Ts?{...e}:e;function Hs(e,t){t||={};let n={};function r(e,t,n){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:n},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function i(e,t,n){if(!q.isUndefined(t))return r(e,t,n);if(!q.isUndefined(e))return r(void 0,e,n)}function a(e,t){if(!q.isUndefined(t))return r(void 0,t)}function o(e,t){if(!q.isUndefined(t))return r(void 0,t);if(!q.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t)=>i(Vs(e),Vs(t),!0)};return q.forEach(Object.keys(Object.assign({},e,t)),function(r){let a=c[r]||i,o=a(e[r],t[r],r);q.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Us=e=>{let t=Hs({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;t.headers=o=Ts.from(o),t.url=Qo(Bs(t.baseURL,t.url),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``)));let c;if(q.isFormData(n)){if(cs.hasStandardBrowserEnv||cs.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){let[e,...t]=c?c.split(`;`).map(e=>e.trim()).filter(Boolean):[];o.setContentType([e||`multipart/form-data`,...t].join(`; `))}}if(cs.hasStandardBrowserEnv&&(r&&q.isFunction(r)&&(r=r(t)),r||r!==!1&&Is(t.url))){let e=i&&a&&Ls.read(a);e&&o.set(i,e)}return t},Ws=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Us(e),i=r.data,a=Ts.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Ts.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());ks(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new J(`Request aborted`,J.ECONNABORTED,e,h)),null)},h.onerror=function(){n(new J(`Network Error`,J.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||es;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new J(t,i.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&q.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),q.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Ns(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Ns(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Os(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=As(r.url);if(_&&cs.protocols.indexOf(_)===-1){n(new J(`Unsupported protocol `+_+`:`,J.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Gs=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof J?t:new Os(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>q.asap(o),s}},Ks=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},qs=async function*(e,t){for await(let n of Js(e))yield*Ks(n,t)},Js=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ys=(e,t,n,r)=>{let i=qs(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Xs=typeof fetch==`function`&&typeof Request==`function`&&typeof Response==`function`,Zs=Xs&&typeof ReadableStream==`function`,Qs=Xs&&(typeof TextEncoder==`function`?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$s=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ec=Zs&&$s(()=>{let e=!1,t=new Request(cs.origin,{body:new ReadableStream,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return e&&!t}),tc=64*1024,nc=Zs&&$s(()=>q.isReadableStream(new Response(``).body)),rc={stream:nc&&(e=>e.body)};Xs&&(e=>{[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(t=>{!rc[t]&&(rc[t]=q.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new J(`Response type '${t}' is not supported`,J.ERR_NOT_SUPPORT,n)})})})(new Response);var ic=async e=>{if(e==null)return 0;if(q.isBlob(e))return e.size;if(q.isSpecCompliantForm(e))return(await new Request(cs.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(q.isArrayBufferView(e)||q.isArrayBuffer(e))return e.byteLength;if(q.isURLSearchParams(e)&&(e+=``),q.isString(e))return(await Qs(e)).byteLength},ac=async(e,t)=>q.toFiniteNumber(e.getContentLength())??ic(t),oc={http:null,xhr:Ws,fetch:Xs&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:c,responseType:l,headers:u,withCredentials:d=`same-origin`,fetchOptions:f}=Us(e);l=l?(l+``).toLowerCase():`text`;let p=Gs([i,a&&a.toAbortSignal()],o),m,h=p&&p.unsubscribe&&(()=>{p.unsubscribe()}),g;try{if(c&&ec&&n!==`get`&&n!==`head`&&(g=await ac(u,r))!==0){let e=new Request(t,{method:`POST`,body:r,duplex:`half`}),n;if(q.isFormData(r)&&(n=e.headers.get(`content-type`))&&u.setContentType(n),e.body){let[t,n]=Ps(g,Ns(Fs(c)));r=Ys(e.body,tc,t,n)}}q.isString(d)||(d=d?`include`:`omit`);let i=`credentials`in Request.prototype;m=new Request(t,{...f,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:`half`,credentials:i?d:void 0});let a=await fetch(m),o=nc&&(l===`stream`||l===`response`);if(nc&&(s||o&&h)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=a[t]});let t=q.toFiniteNumber(a.headers.get(`content-length`)),[n,r]=s&&Ps(t,Ns(Fs(s),!0))||[];a=new Response(Ys(a.body,tc,n,()=>{r&&r(),h&&h()}),e)}l||=`text`;let _=await rc[q.findKey(rc,l)||`text`](a,e);return!o&&h&&h(),await new Promise((t,n)=>{ks(t,n,{data:_,headers:Ts.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:m})})}catch(t){throw h&&h(),t&&t.name===`TypeError`&&/fetch/i.test(t.message)?Object.assign(new J(`Network Error`,J.ERR_NETWORK,e,m),{cause:t.cause||t}):J.from(t,t&&t.code,e,m)}})};q.forEach(oc,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var sc=e=>`- ${e}`,cc=e=>q.isFunction(e)||e===null||e===!1,lc={getAdapter:e=>{e=q.isArray(e)?e:[e];let{length:t}=e,n,r,i={};for(let a=0;a<t;a++){n=e[a];let t;if(r=n,!cc(n)&&(r=oc[(t=String(n)).toLowerCase()],r===void 0))throw new J(`Unknown adapter '${t}'`);if(r)break;i[t||`#`+a]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new J(`There is no suitable adapter to dispatch the request `+(t?e.length>1?`since :
`+e.map(sc).join(`
`):` `+sc(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return r},adapters:oc};function uc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Os(null,e)}function dc(e){return uc(e),e.headers=Ts.from(e.headers),e.data=Es.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),lc.getAdapter(e.adapter||ms.adapter)(e).then(function(t){return uc(e),t.data=Es.call(e,e.transformResponse,t),t.headers=Ts.from(t.headers),t},function(t){return Ds(t)||(uc(e),t&&t.response&&(t.response.data=Es.call(e,e.transformResponse,t.response),t.response.headers=Ts.from(t.response.headers))),Promise.reject(t)})}var fc=`1.7.7`,pc={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{pc[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var mc={};pc.transitional=function(e,t,n){function r(e,t){return`[Axios v`+fc+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new J(r(i,` has been removed`+(t?` in `+t:``)),J.ERR_DEPRECATED);return t&&!mc[i]&&(mc[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}};function hc(e,t,n){if(typeof e!=`object`)throw new J(`options must be an object`,J.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new J(`option `+a+` must be `+n,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J(`Unknown option `+a,J.ERR_BAD_OPTION)}}var gc={assertOptions:hc,validators:pc},_c=gc.validators,vc=class{constructor(e){this.defaults=e,this.interceptors={request:new $o,response:new $o}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Hs(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&gc.assertOptions(n,{silentJSONParsing:_c.transitional(_c.boolean),forcedJSONParsing:_c.transitional(_c.boolean),clarifyTimeoutError:_c.transitional(_c.boolean)},!1),r!=null&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:gc.assertOptions(r,{encode:_c.function,serialize:_c.function},!0)),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&q.merge(i.common,i[t.method]);i&&q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Ts.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen==`function`&&e.runWhen(t)===!1||(s&&=e.synchronous,o.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[dc.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(u=0;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=dc.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Hs(this.defaults,e),Qo(Bs(e.baseURL,e.url),e.params,e.paramsSerializer)}};q.forEach([`delete`,`get`,`head`,`options`],function(e){vc.prototype[e]=function(t,n){return this.request(Hs(n||{},{method:e,url:t,data:(n||{}).data}))}}),q.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(Hs(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}vc.prototype[e]=t(),vc.prototype[e+`Form`]=t(!0)});var yc=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Os(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function bc(e){return function(t){return e.apply(null,t)}}function xc(e){return q.isObject(e)&&e.isAxiosError===!0}var Sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sc).forEach(([e,t])=>{Sc[t]=e});function Cc(e){let t=new vc(e),n=Na(vc.prototype.request,t);return q.extend(n,vc.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Cc(Hs(e,t))},n}var wc=Cc(ms);wc.Axios=vc,wc.CanceledError=Os,wc.CancelToken=yc,wc.isCancel=Ds,wc.VERSION=fc,wc.toFormData=qo,wc.AxiosError=J,wc.Cancel=wc.CanceledError,wc.all=function(e){return Promise.all(e)},wc.spread=bc,wc.isAxiosError=xc,wc.mergeConfig=Hs,wc.AxiosHeaders=Ts,wc.formToJSON=e=>fs(q.isHTMLForm(e)?new FormData(e):e),wc.getAdapter=lc.getAdapter,wc.HttpStatusCode=Sc,wc.default=wc;var Tc=`https://www.atomwalk.com`,Ec=`https://crm.atomwalk.com`,Dc=`/api`,Oc=localStorage.getItem(`dbName`),kc=`${Tc}${Dc}`,Ac=`${Ec}/api`,jc=`${Ec}/hr_api`;`${kc}${Oc}`,`${kc}${Oc}`,`${Tc}`,`${jc}`,`${kc}${Oc}`,`${kc}`,`${kc}`;var Mc=`${kc}/set_user_pin/${Oc}/`;`${jc}`;var Nc=`${Ac}/customer_user_login/`;`${Ac}${Oc}`;var Pc=`${kc}/get_applicable_site/`,Fc=`${kc}/customer_detail_list/${Oc}/`,Ic=`${jc}/get_employee_list/${Oc}/`;`${kc}${Oc}`;var Lc=`${jc}/process_employee_job/${Oc}/`,Rc=`${jc}/process_employee_file/${Oc}/`,zc=`${jc}/get_emp_allocation_data/${Oc}/`,Bc=`${jc}/process_emp_allocation/${Oc}/`,Vc=`${jc}/process_contract_allocation/${Oc}/`,Hc=`${jc}/get_contract_allocation_data/${Oc}/`,Uc=`${jc}/add_claim/${Oc}/`,Wc=`${jc}/process_claim/${Oc}/`,Gc=`${jc}/get_claim_list/${Oc}/`,Kc=`${jc}/expense_item_list/${Oc}/`,qc=()=>localStorage.getItem(`userToken`)?localStorage.getItem(`userToken`):localStorage.getItem(`customerToken`),Jc=async(e,t)=>{let n=qc();return wc.create({baseURL:kc,params:t,headers:{Authorization:`Token ${n}`}}).get(e)},Yc=async(e,t)=>wc.create({baseURL:kc,params:t}).get(e),Xc=async(e,t)=>{let n=qc();return wc.create({baseURL:kc,headers:{Authorization:n?`Token ${n}`:``}}).post(e,t)},Zc=async(e,t)=>{let n=qc();if(!(t instanceof FormData)){console.error(`Data is not FormData!`);return}return wc.create({baseURL:kc,headers:{Authorization:`Token ${n}`,"Content-Type":`multipart/form-data`}}).post(e,t)},Qc=wc.create({baseURL:kc});wc.get,wc.post,wc.put,wc.delete;function $c(e){return Yc(Pc,{mobile_app_type:e?`FMS_E`:`HRM_E`})}function el(e){let t={};return e&&(t.emp_data=e),Xc(Lc,t)}function tl(e){return Zc(Rc,e)}function nl(e){let t={};return e&&(t.customer_id=e),Jc(Fc,t)}async function rl(e,t){try{let n=await Xc(Mc,{u_id:localStorage.getItem(`custId`),o_pin:e,n_pin:t,user_type:`CUSTOMER`});return n.status,n}catch(e){return e}}function il(e){return Jc(Ic,e)}function al(e){return Jc(zc,e)}function ol(e){return Jc(Hc,e)}function sl(e){return Zc(Vc,e)}function cl(e){return Zc(Bc,e)}function ll(e){return Zc(Uc,e)}function ul(e){let t={};return e&&(t.claim_data=e),Xc(Wc,t)}function dl(e,t,n){let r={};return e&&(r.call_mode=e),t&&(r.emp_id=t),n&&(r.period=n),Jc(Gc,r)}function fl(){return Jc(Kc)}var pl=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Y=o(((e,t)=>{t.exports=pl()}))(),ml=(0,v.createContext)(),hl=()=>(0,v.useContext)(ml),gl=({children:e})=>{let[t,n]=(0,v.useState)(localStorage.getItem(`customerUser`)?JSON.parse(localStorage.getItem(`customerUser`)):null),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)([]);(0,v.useEffect)(()=>{t?(async()=>{let e=localStorage.getItem(`custId`);if(!e){i(!1);return}try{o((await nl(e))?.data[0])}catch(e){console.error(`Failed to fetch profile:`,e)}finally{i(!1)}})():i(!1)},[t]);let l={currentUser:t,logout:()=>{localStorage.removeItem(`customerToken`),localStorage.removeItem(`custId`),localStorage.removeItem(`customerUser`),G.success(`Logout successful!`),window.location.href=`/retainer/login`,localStorage.removeItem(`dbName`),localStorage.removeItem(`userToken`),localStorage.removeItem(`cust_emp_id`),n(null)},loading:r,profile:a,companyInfo:s,customerlogin:async e=>{try{let t={mobile_number:e.mobile,pin:e.password},r=await Qc.post(Nc+`${e.company}/`,t,{headers:{"Content-Type":`application/json`}});if(r.status===200){let{token:t,customer_id:i,cust_emp_id:a}=r.data;localStorage.setItem(`customerToken`,t),localStorage.setItem(`custId`,String(i)),localStorage.setItem(`cust_emp_id`,String(a)),localStorage.setItem(`customerUser`,JSON.stringify(e)),n(localStorage.getItem(`customerUser`)),G.success(`Login successful!`),window.location.href=`/retainer/activity`}}catch(e){console.log(`Login error:`,e.response.data.error),G.error(e.response.data.error||`Failed to login. try again later !!!`)}}};return(0,Y.jsx)(ml.Provider,{value:l,children:!r&&e})},_l=o((e=>{var t=d().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),vl=o(((e,t)=>{t.exports=_l()}))(),yl=e=>{let t=(0,vl.c)(2),{children:n}=e,{currentUser:r,loading:i}=hl();if(i){let e;return t[0]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,Y.jsx)(`div`,{style:{color:`black`},children:`Loading...`}),t[0]=e):e=t[0],e}if(!r){let e;return t[1]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,Y.jsx)(tt,{to:`/login`}),t[1]=e):e=t[1],e}return n},bl={default:{name:`Default`,colors:{primary:`#6C63FF`,primaryLight:`#E8E6FF`,secondary:`#FF6584`,secondaryLight:`#FFE5EB`,accent:`#63FFDA`,accentLight:`#E6FFF7`,success:`#00C853`,warning:`#FFD600`,error:`#FF3D00`,info:`#2196F3`,background:`#F8F9FD`,backgroundAlt:`#F0F2F8`,card:`#FFFFFF`,text:`#333333`,textLight:`#666666`,border:`#E0E0E0`,shadow:`rgba(108, 99, 255, 0.1)`}},ocean:{name:`Ocean`,colors:{primary:`#0277BD`,primaryLight:`#E1F5FE`,secondary:`#00BCD4`,secondaryLight:`#E0F7FA`,accent:`#26A69A`,accentLight:`#E0F2F1`,success:`#00C853`,warning:`#FFC107`,error:`#F44336`,info:`#29B6F6`,background:`#F5F7FA`,backgroundAlt:`#E1F5FE`,card:`#FFFFFF`,text:`#263238`,textLight:`#546E7A`,border:`#CFD8DC`,shadow:`rgba(2, 119, 189, 0.1)`}},sunset:{name:`Sunset`,colors:{primary:`#FF5722`,primaryLight:`#FBE9E7`,secondary:`#FF9800`,secondaryLight:`#FFF3E0`,accent:`#FFC107`,accentLight:`#FFF8E1`,success:`#4CAF50`,warning:`#FF9800`,error:`#F44336`,info:`#2196F3`,background:`#FFF8F6`,backgroundAlt:`#FFF3E0`,card:`#FFFFFF`,text:`#3E2723`,textLight:`#5D4037`,border:`#FFCCBC`,shadow:`rgba(255, 87, 34, 0.1)`}},dark:{name:`Dark`,colors:{primary:`#483A6F`,primaryLight:`#2E2845`,secondary:`#1A5F51`,secondaryLight:`#0E3D35`,accent:`#7E3B54`,accentLight:`#4A2432`,success:`#1F5C2E`,warning:`#7D5700`,error:`#7D2B2B`,info:`#2C5282`,background:`#0A0A0A`,backgroundAlt:`#121212`,card:`#1A1A1A`,text:`#E0E0E0`,textLight:`#8A8A8A`,border:`#2A2A2A`,shadow:`rgba(0, 0, 0, 0.6)`}}},xl={cardStyle:{borderRadius:`16px`,shadow:`medium`,border:!1,animation:!0},buttonStyle:{borderRadius:`8px`,shadow:!0,animation:!0,iconPosition:`left`},iconStyle:{size:`medium`,style:`filled`},typography:{fontFamily:`'Centra', sans-serif`,headingWeight:`600`,bodyWeight:`400`,fontSize:`medium`},layout:{density:`comfortable`,containerWidth:`standard`,sidebarStyle:`standard`}},Sl=(0,v.createContext)(),Cl=()=>(0,v.useContext)(Sl),wl=e=>{let t=(0,vl.c)(91),{children:n}=e,[r,i]=(0,v.useState)(`default`),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a={},t[0]=a):a=t[0];let[o,s]=(0,v.useState)(a),[c,l]=(0,v.useState)(xl),[u,d]=(0,v.useState)(!1),f,p;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{if(typeof window<`u`){let e=localStorage.getItem(`hrms-theme`),t=localStorage.getItem(`hrms-custom-colors`),n=localStorage.getItem(`hrms-ui-preferences`),r=localStorage.getItem(`hrms-is-custom-theme`);e&&i(e),t&&s(JSON.parse(t)),n&&l(JSON.parse(n)),r&&d(JSON.parse(r))}},p=[],t[1]=f,t[2]=p):(f=t[1],p=t[2]),(0,v.useEffect)(f,p);let m;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=e=>{i(e),d(!1),localStorage.setItem(`hrms-theme`,e),localStorage.setItem(`hrms-is-custom-theme`,`false`)},t[3]=m):m=t[3];let h=m,g;t[4]===o?g=t[5]:(g=e=>{let t={...o,...e};s(t),d(!0),localStorage.setItem(`hrms-custom-colors`,JSON.stringify(t)),localStorage.setItem(`hrms-is-custom-theme`,`true`)},t[4]=o,t[5]=g);let _=g,y;t[6]===c?y=t[7]:(y=(e,t)=>{let n={...c,[e]:{...c[e],...t}};l(n),localStorage.setItem(`hrms-ui-preferences`,JSON.stringify(n))},t[6]=c,t[7]=y);let b=y,x;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(x=()=>{l(xl),s({}),d(!1),localStorage.setItem(`hrms-ui-preferences`,JSON.stringify(xl)),localStorage.removeItem(`hrms-custom-colors`),localStorage.setItem(`hrms-is-custom-theme`,`false`)},t[8]=x):x=t[8];let S=x,C=bl[r]||bl.default,w;t[9]!==C.colors||t[10]!==o||t[11]!==u?(w=u?{...C.colors,...o}:C.colors,t[9]=C.colors,t[10]=o,t[11]=u,t[12]=w):w=t[12];let T=w,E=u?`Custom`:C.name,D;t[13]===c.typography.fontFamily?D=t[14]:(D={body:c.typography.fontFamily,heading:c.typography.fontFamily},t[13]=c.typography.fontFamily,t[14]=D);let O=c.typography.fontSize===`small`?`0.7rem`:c.typography.fontSize===`large`?`0.8rem`:`0.75rem`,k=c.typography.fontSize===`small`?`0.8rem`:c.typography.fontSize===`large`?`0.95rem`:`0.875rem`,A=c.typography.fontSize===`small`?`0.9rem`:c.typography.fontSize===`large`?`1.1rem`:`1rem`,j=c.typography.fontSize===`small`?`1rem`:c.typography.fontSize===`large`?`1.25rem`:`1.125rem`,M=c.typography.fontSize===`small`?`1.1rem`:c.typography.fontSize===`large`?`1.4rem`:`1.25rem`,N=c.typography.fontSize===`small`?`1.3rem`:c.typography.fontSize===`large`?`1.7rem`:`1.5rem`,P=c.typography.fontSize===`small`?`1.6rem`:c.typography.fontSize===`large`?`2.1rem`:`1.875rem`,F=c.typography.fontSize===`small`?`2rem`:c.typography.fontSize===`large`?`2.5rem`:`2.25rem`,I=c.typography.fontSize===`small`?`2.5rem`:c.typography.fontSize===`large`?`3.5rem`:`3rem`,L;t[15]!==O||t[16]!==k||t[17]!==A||t[18]!==j||t[19]!==M||t[20]!==N||t[21]!==P||t[22]!==F||t[23]!==I?(L={xs:O,sm:k,md:A,lg:j,xl:M,"2xl":N,"3xl":P,"4xl":F,"5xl":I},t[15]=O,t[16]=k,t[17]=A,t[18]=j,t[19]=M,t[20]=N,t[21]=P,t[22]=F,t[23]=I,t[24]=L):L=t[24];let R;t[25]!==c.typography.bodyWeight||t[26]!==c.typography.headingWeight?(R={heading:c.typography.headingWeight,body:c.typography.bodyWeight},t[25]=c.typography.bodyWeight,t[26]=c.typography.headingWeight,t[27]=R):R=t[27];let z;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(z={xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},t[28]=z):z=t[28];let B=c.layout.density===`compact`?`0.2rem`:c.layout.density===`spacious`?`0.3rem`:`0.25rem`,V=c.layout.density===`compact`?`0.4rem`:c.layout.density===`spacious`?`0.6rem`:`0.5rem`,H=c.layout.density===`compact`?`0.8rem`:c.layout.density===`spacious`?`1.2rem`:`1rem`,U=c.layout.density===`compact`?`1.2rem`:c.layout.density===`spacious`?`1.8rem`:`1.5rem`,ee=c.layout.density===`compact`?`1.6rem`:c.layout.density===`spacious`?`2.4rem`:`2rem`,te=c.layout.density===`compact`?`2.4rem`:c.layout.density===`spacious`?`3.6rem`:`3rem`,ne=c.layout.density===`compact`?`3.2rem`:c.layout.density===`spacious`?`4.8rem`:`4rem`,re;t[29]!==B||t[30]!==V||t[31]!==H||t[32]!==U||t[33]!==ee||t[34]!==te||t[35]!==ne?(re={xs:B,sm:V,md:H,lg:U,xl:ee,"2xl":te,"3xl":ne},t[29]=B,t[30]=V,t[31]=H,t[32]=U,t[33]=ee,t[34]=te,t[35]=ne,t[36]=re):re=t[36];let ie=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`0.25rem`:`0.125rem`,ae=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`0.5rem`:`0.25rem`,oe=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`1rem`:`0.5rem`,se=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`2rem`:`1rem`,ce;t[37]!==ie||t[38]!==ae||t[39]!==oe||t[40]!==se?(ce={sm:ie,md:ae,lg:oe,xl:se,full:`9999px`},t[37]=ie,t[38]=ae,t[39]=oe,t[40]=se,t[41]=ce):ce=t[41];let le=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 2px 5px rgba(0, 0, 0, 0.15)`:`0 1px 3px rgba(0, 0, 0, 0.12)`,ue=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 6px 12px rgba(0, 0, 0, 0.15)`:`0 4px 6px rgba(0, 0, 0, 0.1)`,de=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 15px 25px rgba(0, 0, 0, 0.15)`:`0 10px 15px rgba(0, 0, 0, 0.1)`,fe=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 25px 35px rgba(0, 0, 0, 0.15)`:`0 20px 25px rgba(0, 0, 0, 0.1)`,pe;t[42]!==le||t[43]!==ue||t[44]!==de||t[45]!==fe?(pe={none:`none`,sm:le,md:ue,lg:de,xl:fe},t[42]=le,t[43]=ue,t[44]=de,t[45]=fe,t[46]=pe):pe=t[46];let me=c.cardStyle.animation?`0.2s ease`:`0s`,he=c.cardStyle.animation?`0.3s ease`:`0s`,ge=c.cardStyle.animation?`0.5s ease`:`0s`,_e;t[47]!==me||t[48]!==he||t[49]!==ge?(_e={fast:me,normal:he,slow:ge},t[47]=me,t[48]=he,t[49]=ge,t[50]=_e):_e=t[50];let ve;t[51]!==c.buttonStyle.animation||t[52]!==c.buttonStyle.borderRadius||t[53]!==c.buttonStyle.iconPosition||t[54]!==c.buttonStyle.shadow?(ve={borderRadius:c.buttonStyle.borderRadius,shadow:c.buttonStyle.shadow,animation:c.buttonStyle.animation,iconPosition:c.buttonStyle.iconPosition},t[51]=c.buttonStyle.animation,t[52]=c.buttonStyle.borderRadius,t[53]=c.buttonStyle.iconPosition,t[54]=c.buttonStyle.shadow,t[55]=ve):ve=t[55];let ye;t[56]!==c.iconStyle.size||t[57]!==c.iconStyle.style?(ye={size:c.iconStyle.size,style:c.iconStyle.style},t[56]=c.iconStyle.size,t[57]=c.iconStyle.style,t[58]=ye):ye=t[58];let be;t[59]!==c.layout.containerWidth||t[60]!==c.layout.density||t[61]!==c.layout.sidebarStyle?(be={containerWidth:c.layout.containerWidth,sidebarStyle:c.layout.sidebarStyle,density:c.layout.density},t[59]=c.layout.containerWidth,t[60]=c.layout.density,t[61]=c.layout.sidebarStyle,t[62]=be):be=t[62];let xe;t[63]!==D||t[64]!==L||t[65]!==R||t[66]!==re||t[67]!==ce||t[68]!==pe||t[69]!==_e||t[70]!==ve||t[71]!==ye||t[72]!==be||t[73]!==E||t[74]!==T||t[75]!==c?(xe={name:E,colors:T,fonts:D,fontSizes:L,fontWeights:R,breakpoints:z,spacing:re,borderRadius:ce,shadows:pe,transitions:_e,buttons:ve,icons:ye,layout:be,uiPreferences:c,cardStyle:c.cardStyle,buttonStyle:c.buttonStyle,iconStyle:c.iconStyle,typographyStyle:c.typography,layoutStyle:c.layout},t[63]=D,t[64]=L,t[65]=R,t[66]=re,t[67]=ce,t[68]=pe,t[69]=_e,t[70]=ve,t[71]=ye,t[72]=be,t[73]=E,t[74]=T,t[75]=c,t[76]=xe):xe=t[76];let Se=xe,Ce;t[77]!==Se||t[78]!==r||t[79]!==o||t[80]!==u||t[81]!==c||t[82]!==_||t[83]!==b?(Ce={theme:Se,currentTheme:r,changeTheme:h,baseThemes:bl,customColors:o,updateCustomColors:_,uiPreferences:c,updateUIPreferences:b,isCustomTheme:u,resetCustomizations:S},t[77]=Se,t[78]=r,t[79]=o,t[80]=u,t[81]=c,t[82]=_,t[83]=b,t[84]=Ce):Ce=t[84];let we;t[85]!==n||t[86]!==Se?(we=(0,Y.jsx)(gi,{theme:Se,children:n}),t[85]=n,t[86]=Se,t[87]=we):we=t[87];let Te;return t[88]!==Ce||t[89]!==we?(Te=(0,Y.jsx)(Sl.Provider,{value:Ce,children:we}),t[88]=Ce,t[89]=we,t[90]=Te):Te=t[90],Te},Tl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},El=v.createContext&&v.createContext(Tl),Dl=[`attr`,`size`,`title`];function Ol(e,t){if(e==null)return{};var n,r,i=kl(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function kl(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(null,arguments)}function jl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ml(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?jl(Object(n),!0).forEach(function(t){Nl(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jl(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Nl(e,t,n){return(t=Pl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pl(e){var t=Fl(e,`string`);return typeof t==`symbol`?t:t+``}function Fl(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Il(e){return e&&e.map((e,t)=>v.createElement(e.tag,Ml({key:t},e.attr),Il(e.child)))}function X(e){return t=>v.createElement(Ll,Al({attr:Ml({},e.attr)},t),Il(e.child))}function Ll(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Ol(e,Dl),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),v.createElement(`svg`,Al({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Ml(Ml({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&v.createElement(`title`,null,i),e.children)};return El===void 0?t(Tl):v.createElement(El.Consumer,null,e=>t(e))}function Rl(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z`},child:[]}]})(e)}function zl(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z`},child:[]}]})(e)}function Bl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function Vl(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Hl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Ul(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z`},child:[]}]})(e)}function Wl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128 448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3zM96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4z`},child:[]}]})(e)}function Gl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Kl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z`},child:[]}]})(e)}function ql(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z`},child:[]}]})(e)}function Jl(e){return X({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z`},child:[]}]})(e)}function Yl(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z`},child:[]}]})(e)}function Xl(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z`},child:[]}]})(e)}function Zl(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z`},child:[]}]})(e)}function Ql(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z`},child:[]}]})(e)}function $l(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z`},child:[]}]})(e)}function eu(e){return X({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function tu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H16A16 16 0 0 0 0 48v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h120v112h-24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-24V112h120v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-68.69 260.69C354 283.36 336 288.36 336 304v48H112v-48c0-14.31-17.31-21.32-27.31-11.31l-80 80a16 16 0 0 0 0 22.62l80 80C94 484.64 112 479.64 112 464v-48h224v48c0 14.31 17.31 21.33 27.31 11.31l80-80a16 16 0 0 0 0-22.62z`},child:[]}]})(e)}function nu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z`},child:[]}]})(e)}function ru(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z`},child:[]}]})(e)}function iu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z`},child:[]}]})(e)}function au(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function ou(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function su(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M512 512H0V0h512v512z`},child:[]}]})(e)}function cu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z`},child:[]}]})(e)}function lu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function uu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z`},child:[]}]})(e)}function du(e){return X({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z`},child:[]}]})(e)}function fu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M544 128h-48v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8H88c-4.42 0-8-3.58-8-8v-88H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function pu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z`},child:[]}]})(e)}function mu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z`},child:[]}]})(e)}function hu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function gu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z`},child:[]}]})(e)}function _u(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z`},child:[]}]})(e)}function vu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z`},child:[]}]})(e)}function yu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z`},child:[]}]})(e)}function bu(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z`},child:[]}]})(e)}function xu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function Su(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z`},child:[]}]})(e)}function Cu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function wu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z`},child:[]}]})(e)}function Tu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z`},child:[]}]})(e)}function Eu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64zM192 208c-57.787 0-104-66.518-104-144h208c0 77.945-46.51 144-104 144z`},child:[]}]})(e)}function Du(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function Ou(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z`},child:[]}]})(e)}function ku(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z`},child:[]}]})(e)}function Au(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M512 320s-64 92.65-64 128c0 35.35 28.66 64 64 64s64-28.65 64-64-64-128-64-128zm-9.37-102.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.76c-6.25-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.62l86.19 86.18-94.76 94.76c-37.49 37.48-37.49 98.26 0 135.75l117.19 117.19c18.74 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.75.01-45.25zm-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15 81.61-81.61 58.6 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.6-58.6 58.95-58.95 162.44 162.44-48.34 48.34z`},child:[]}]})(e)}function ju(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z`},child:[]}]})(e)}function Mu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z`},child:[]}]})(e)}function Nu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z`},child:[]}]})(e)}function Pu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function Fu(e){return X({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z`},child:[]}]})(e)}function Iu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function Lu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z`},child:[]}]})(e)}function Ru(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z`},child:[]}]})(e)}function zu(e){return X({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z`},child:[]}]})(e)}function Bu(e){return X({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function Vu(e){return X({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z`},child:[]}]})(e)}function Hu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function Uu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function Wu(e){return X({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z`},child:[]}]})(e)}function Gu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function Ku(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}function qu(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z`},child:[]}]})(e)}function Ju(e){return X({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z`},child:[]}]})(e)}function Yu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z`},child:[]}]})(e)}function Xu(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z`},child:[]}]})(e)}function Zu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z`},child:[]},{tag:`circle`,attr:{cx:`256`,cy:`256`,r:`80`,fill:`none`,strokeMiterlimit:`10`,strokeWidth:`32`},child:[]}]})(e)}function Qu(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`},child:[]}]})(e)}function $u(e){return X({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z`},child:[]}]})(e)}var Z={colors:{primary:`#6C63FF`,primaryLight:`#E8E6FF`,secondary:`#FF6584`,secondaryLight:`#FFE5EB`,accent:`#63FFDA`,accentLight:`#E6FFF7`,success:`#00C853`,warning:`#FFD600`,error:`#FF3D00`,info:`#2196F3`,background:`#F8F9FD`,backgroundAlt:`#F0F2F8`,card:`#FFFFFF`,text:`#333333`,textLight:`#666666`,border:`#E0E0E0`,shadow:`rgba(108, 99, 255, 0.1)`},fonts:{body:`'Poppins', sans-serif`,heading:`'Poppins', sans-serif`},fontSizes:{xs:`0.75rem`,sm:`0.875rem`,md:`1rem`,lg:`1.125rem`,xl:`1.25rem`,"2xl":`1.5rem`,"3xl":`1.875rem`,"4xl":`2.25rem`,"5xl":`3rem`},breakpoints:{xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},spacing:{xs:`0.25rem`,sm:`0.5rem`,md:`1rem`,lg:`1.5rem`,xl:`2rem`,"2xl":`3rem`,"3xl":`4rem`},borderRadius:{sm:`0.125rem`,md:`0.25rem`,lg:`0.5rem`,xl:`1rem`,full:`9999px`},shadows:{sm:`0 1px 3px rgba(0, 0, 0, 0.12)`,md:`0 4px 6px rgba(0, 0, 0, 0.1)`,lg:`0 10px 15px rgba(0, 0, 0, 0.1)`,xl:`0 20px 25px rgba(0, 0, 0, 0.1)`},transitions:{fast:`0.2s ease`,normal:`0.3s ease`,slow:`0.5s ease`}},ed=W.div`
  width: ${e=>{let{isOpen:t,uiPreferences:n}=e,r=n?.layout?.sidebarStyle||`standard`;return t?r===`compact`?`200px`:r===`expanded`?`280px`:`250px`:`70px`}};
  height: 100vh;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${e=>{let{uiPreferences:t}=e,n=t?.components?.shadowIntensity||`medium`;return n===`none`?`none`:n===`heavy`?`3px 0 15px rgba(0, 0, 0, 0.2)`:`2px 0 10px rgba(0, 0, 0, 0.1)`}};
  overflow-x: hidden;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: ${e=>e.isOpen?`250px`:`0`};
    left: ${e=>e.isOpen?`0`:`-70px`};
    box-shadow: ${e=>e.isOpen?`2px 0 10px rgba(0, 0, 0, 0.1)`:`none`};
  }
`,td=W.div`
  padding: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`15px`:n===`spacious`?`25px`:`20px`}};
  display: flex;
  align-items: center;
  justify-content: ${e=>e.isOpen?`space-between`:`center`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,nd=W.div`
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`1.3rem`:n===`large`?`1.7rem`:`1.5rem`}};
  font-weight: bold;
  color: white;
  display: ${e=>e.isOpen?`block`:`none`};
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
`,rd=W.button`
  background: transparent;
  color: white;
  border: none;
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.components?.iconSize||`medium`;return n===`small`?`1rem`:n===`large`?`1.4rem`:`1.2rem`}};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`none`:`all 0.3s ease`}};
  
  &:hover {
    transform: ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`none`:`scale(1.1)`}};
  }
`,id=W.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`15px`:n===`spacious`?`25px`:`20px`}};
  height: calc(100vh - 140px);
  overflow-y: auto;
  padding-bottom: 48px;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`,ad=W.li`
  margin-bottom: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`3px`:n===`spacious`?`8px`:`5px`}};
`,od=W(vt)`
  display: flex;
  align-items: center;
  padding: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`10px 15px`:n===`spacious`?`14px 25px`:`12px 20px`}};
  color: white;
  text-decoration: none;
  transition: ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`none`:`all 0.3s ease`}};
  border-left: 3px solid transparent;
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`0.9rem`:n===`large`?`1.1rem`:`1rem`}};
  
  ${e=>e.active&&`
    background: rgba(255, 255, 255, 0.1);
    border-left-color: ${e.theme.colors.secondary};
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    margin-right: ${e=>e.isOpen?`10px`:`0`};
    font-size: ${e=>{let{uiPreferences:t}=e,n=t?.components?.iconSize||`medium`;return n===`small`?`1rem`:n===`large`?`1.4rem`:`1.2rem`}};
  }
  
  span {
    display: ${e=>e.isOpen?`block`:`none`};
    white-space: nowrap;
  }
`,sd=W.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`10px`:n===`spacious`?`20px`:`15px`}};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: ${e=>e.isOpen?`space-between`:`center`};
  background: ${({theme:e})=>e.colors.primary};
`,cd=W.div`
  display: ${e=>e.isOpen?`flex`:`none`};
  align-items: center;
`,ld=W.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: bold;
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
`,ud=W.span`
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`0.8rem`:n===`large`?`1rem`:`0.9rem`}};
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
`,dd=W.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`none`:`all 0.3s ease`}};
  
  &:hover {
    color: ${({theme:e})=>e.colors.secondary};
    transform: ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`none`:`scale(1.1)`}};
  }
  
  svg {
    font-size: ${e=>{let{uiPreferences:t}=e,n=t?.components?.iconSize||`medium`;return n===`small`?`1rem`:n===`large`?`1.4rem`:`1.2rem`}};
  }
`,fd=W.div`
  margin-bottom: 5px;
`,pd=W.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`0.9rem`:n===`large`?`1.1rem`:`1rem`}};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    margin-right: 10px;
    font-size: ${e=>{let{uiPreferences:t}=e,n=t?.components?.iconSize||`medium`;return n===`small`?`1rem`:n===`large`?`1.4rem`:`1.2rem`}};
  }
  
  span {
    flex-grow: 1;
    white-space: nowrap;
  }
  
  .arrow {
    transition: transform 0.3s ease;
    transform: ${({isOpen:e})=>e?`rotate(0deg)`:`rotate(-90deg)`};
  }
`,md=W.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-height: ${({isOpen:e,itemCount:t})=>e?`${t*44}px`:`0`};
  transition: max-height 0.3s ease;
`,hd=W.li`
  margin-bottom: 2px;
`,gd=W(vt)`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
  font-size: 0.9rem;
  
  ${e=>e.active&&`
    background: rgba(255, 255, 255, 0.1);
    border-left: 3px solid ${e.theme.colors.secondary};
    padding-left: 47px;
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    margin-right: 10px;
    font-size: 1rem;
  }
`,_d=e=>{let t=(0,vl.c)(70),{onToggle:n,initialOpen:r}=e,i=r===void 0?!1:r,[a,o]=(0,v.useState)(i),s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s={},t[0]=s):s=t[0];let[c,l]=(0,v.useState)(s),u=je(),{logout:d,profile:f}=hl(),{theme:p,uiPreferences:m}=Cl(),h=m?.layout?.sidebarStyle||`standard`,g;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,Y.jsx)(Jl,{}),t[1]=g):g=t[1];let _;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(_={path:`/activity`,name:`Activity List`,icon:(0,Y.jsx)(Du,{})},t[2]=_):_=t[2];let y;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(y=[{name:`Customer Portal`,icon:g,items:[_,{path:`/dashboard`,name:`Retainer Dashboard`,icon:(0,Y.jsx)(Cu,{})}]}],t[3]=y):y=t[3];let b=y,x,S;t[4]!==i||t[5]!==u.pathname?(x=()=>{o(i);let e={};b.forEach(t=>{let n=t.items.some(e=>u.pathname.startsWith(e.path));e[t.name]=n}),l(e)},S=[i,u.pathname],t[4]=i,t[5]=u.pathname,t[6]=x,t[7]=S):(x=t[6],S=t[7]),(0,v.useEffect)(x,S);let C;t[8]!==a||t[9]!==n?(C=()=>{let e=!a;o(e),n&&n(e)},t[8]=a,t[9]=n,t[10]=C):C=t[10];let w=C,T;t[11]!==a||t[12]!==w?(T=e=>{a||w(),setTimeout(()=>{l(t=>({...t,[e]:!t[e]}))},100)},t[11]=a,t[12]=w,t[13]=T):T=t[13];let E=T,D;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(D={path:`/activity`,name:`Activity List`,icon:(0,Y.jsx)(Du,{})},t[14]=D):D=t[14];let O;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(O=[D,{path:`/dashboard`,name:`Retainer Dashboard`,icon:(0,Y.jsx)(Cu,{})}],t[15]=O):O=t[15];let k=O,A;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,Y.jsx)(`img`,{src:`https://atomwalk.com/static/office/image/Atom_walk_logo.jpg`,alt:`Company Logo`,style:{width:`80px`,marginRight:`1rem`,borderRadius:`10px`}}),t[16]=A):A=t[16];let j;t[17]!==a||t[18]!==m?(j=(0,Y.jsx)(nd,{isOpen:a,uiPreferences:m,children:A}),t[17]=a,t[18]=m,t[19]=j):j=t[19];let M;t[20]===a?M=t[21]:(M=a?(0,Y.jsx)(eu,{}):(0,Y.jsx)(Gu,{}),t[20]=a,t[21]=M);let N;t[22]!==M||t[23]!==w||t[24]!==m?(N=(0,Y.jsx)(rd,{onClick:w,uiPreferences:m,children:M}),t[22]=M,t[23]=w,t[24]=m,t[25]=N):N=t[25];let P;t[26]!==a||t[27]!==j||t[28]!==N||t[29]!==m?(P=(0,Y.jsxs)(td,{isOpen:a,uiPreferences:m,children:[j,N]}),t[26]=a,t[27]=j,t[28]=N,t[29]=m,t[30]=P):P=t[30];let F;t[31]!==c||t[32]!==a||t[33]!==u.pathname||t[34]!==h||t[35]!==p||t[36]!==E||t[37]!==m?(F=h===`standard`?(0,Y.jsx)(id,{uiPreferences:m,children:k.map(e=>(0,Y.jsx)(ad,{uiPreferences:m,children:(0,Y.jsxs)(od,{to:e.path,active:u.pathname===e.path?1:0,isOpen:a,theme:p,uiPreferences:m,children:[e.icon,(0,Y.jsx)(`span`,{children:e.name})]})},e.path))}):(0,Y.jsx)(id,{uiPreferences:m,children:b.map(e=>(0,Y.jsxs)(fd,{children:[(0,Y.jsxs)(pd,{onClick:()=>E(e.name),isOpen:a,expanded:c[e.name],uiPreferences:m,children:[e.icon,(0,Y.jsx)(`span`,{children:a?e.name:``})]}),(0,Y.jsx)(md,{isOpen:c[e.name]&&a,itemCount:e.items.length,children:e.items.map(e=>(0,Y.jsx)(hd,{children:(0,Y.jsxs)(gd,{to:e.path,active:u.pathname.startsWith(e.path)?1:0,isOpen:a,theme:p,uiPreferences:m,children:[e.icon,(0,Y.jsx)(`span`,{children:e.name})]})},e.path))})]},e.name))}),t[31]=c,t[32]=a,t[33]=u.pathname,t[34]=h,t[35]=p,t[36]=E,t[37]=m,t[38]=F):F=t[38];let I;t[39]===f?.name?I=t[40]:(I=f?.name?.charAt(0)||`U`,t[39]=f?.name,t[40]=I);let L;t[41]!==I||t[42]!==p||t[43]!==m?(L=(0,Y.jsx)(ld,{theme:p,uiPreferences:m,children:I}),t[41]=I,t[42]=p,t[43]=m,t[44]=L):L=t[44];let R=f?.name||`User`,z;t[45]!==R||t[46]!==m?(z=(0,Y.jsx)(ud,{uiPreferences:m,children:R}),t[45]=R,t[46]=m,t[47]=z):z=t[47];let B;t[48]!==a||t[49]!==L||t[50]!==z?(B=(0,Y.jsxs)(cd,{isOpen:a,children:[L,z]}),t[48]=a,t[49]=L,t[50]=z,t[51]=B):B=t[51];let V;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,Y.jsx)(lu,{}),t[52]=V):V=t[52];let H;t[53]!==d||t[54]!==p||t[55]!==m?(H=(0,Y.jsx)(dd,{onClick:d,title:`Logout`,theme:p,uiPreferences:m,children:V}),t[53]=d,t[54]=p,t[55]=m,t[56]=H):H=t[56];let U;t[57]!==a||t[58]!==B||t[59]!==H||t[60]!==p||t[61]!==m?(U=(0,Y.jsxs)(sd,{isOpen:a,theme:p,uiPreferences:m,children:[B,H]}),t[57]=a,t[58]=B,t[59]=H,t[60]=p,t[61]=m,t[62]=U):U=t[62];let ee;return t[63]!==a||t[64]!==P||t[65]!==F||t[66]!==U||t[67]!==p||t[68]!==m?(ee=(0,Y.jsxs)(ed,{isOpen:a,theme:p,uiPreferences:m,children:[P,F,U]}),t[63]=a,t[64]=P,t[65]=F,t[66]=U,t[67]=p,t[68]=m,t[69]=ee):ee=t[69],ee},vd=xi`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>{let{uiPreferences:t,size:n}=e,r=t?.layout?.density||`comfortable`,i;return i=n===`sm`?`small`:n===`lg`?`large`:`medium`,r===`compact`?i===`small`?`0.4rem 0.8rem`:i===`large`?`0.6rem 1.2rem`:`0.5rem 1rem`:r===`spacious`?i===`small`?`0.6rem 1.2rem`:i===`large`?`0.9rem 1.8rem`:`0.75rem 1.5rem`:i===`small`?`0.5rem 1rem`:i===`large`?`0.75rem 1.5rem`:`0.625rem 1.25rem`}};
  
  font-size: ${e=>{let{uiPreferences:t,size:n}=e,r=t?.typography?.fontSize||`medium`,i;return i=n===`sm`?.875:n===`lg`?1.125:1,r===`small`?`${i*.9}rem`:r===`large`?`${i*1.1}rem`:`${i}rem`}};
  
  font-weight: ${e=>{let{uiPreferences:t}=e;return(t?.typography?.bodyWeight||`regular`)===`light`?`400`:`500`}};
  
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
  
  border-radius: ${e=>{let{uiPreferences:t}=e,n=t?.components?.buttonStyle||`default`;return n===`square`?`0`:n===`pill`?`9999px`:`4px`}};
  
  cursor: pointer;
  transition: ${e=>`
    all ${e.theme.transitions.fast}
  `};
  border: none;
  outline: none;
  
  ${e=>e.fullWidth&&`
    width: 100%;
  `}

   ${e=>e.customColor&&!e.variant?.includes(`Ghost`)&&`
    background: ${e.customColor};
    color: white;
    
    &:hover {
      background: ${e.customColor}dd;
    }
    
    &:active {
      background: ${e.customColor}ee;
    }
  `}
 
  ${e=>e.customColor&&e.variant?.includes(`Ghost`)&&`
    background: transparent;
    color: ${e.customColor};
    border: 1px solid ${e.customColor};
    
    &:hover {
      background: ${e.customColor}22;
    }
    
    &:active {
      background: ${e.customColor}44;
    }
  `}
  
  ${e=>!e.customColor&&e.variant===`primary`&&`
    background: ${e.theme.colors.primary};
    color: white;
    
    &:hover {
      background: ${e.theme.colors.primary}dd;
    }
    
    &:active {
      background: ${e.theme.colors.primary}ee;
    }
  `}
  
  ${e=>!e.customColor&&e.variant===`secondary`&&`
    background: ${e.theme.colors.secondary};
    color: white;
    
    &:hover {
      background: ${e.theme.colors.secondary}dd;
    }
    
    &:active {
      background: ${e.theme.colors.secondary}ee;
    }
  `}
  
  ${e=>!e.customColor&&e.variant===`outline`&&`
    background: transparent;
    color: ${e.theme.colors.primary};
    border: 1px solid ${e.theme.colors.primary};
    
    &:hover {
      background: ${e.theme.colors.primaryLight};
    }
    
    &:active {
      background: ${e.theme.colors.primaryLight}aa;
    }
  `}
   ${e=>!e.customColor&&e.variant===`outlines`&&`
    background: transparent;
    color: ${e.theme.colors.error};
    border: 1px solid ${e.theme.colors.error};
    
    &:hover {
      background: ${e.theme.colors.primaryLight};
    }
    
    &:active {
      background: ${e.theme.colors.primaryLight}aa;
    }
  `}
  
  ${e=>!e.customColor&&e.variant===`ghost`&&`
    background: transparent;
    color: ${e.theme.colors.primary};
    
    &:hover {
      background: ${e.theme.colors.primaryLight};
    }
    
    &:active {
      background: ${e.theme.colors.primaryLight}aa;
    }
  `}

${e=>!e.customColor&&e.variant===`success`&&`
    background: ${e.theme.colors.success};
    color: white;
    
    &:hover {
      background: ${e.theme.colors.success}dd;
    }
    
    &:active {
      background: ${e.theme.colors.success}aa;
    }
  `}

  ${e=>!e.customColor&&e.variant===`successGhost`&&`
    background: transparent;
    color: ${e.theme.colors.success};
    border: 1px solid ${e.theme.colors.success};
    
    &:hover {
      background: ${e.theme.colors.success}22;
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.disabled||`#d0d0d0`};
    color: ${e=>e.theme.colors.disabledText||`#888888`};
    border-color: ${e=>e.theme.colors.disabled||`#d0d0d0`};
    
    &:hover, &:active {
      background-color: ${e=>e.theme.colors.disabled||`#d0d0d0`};
      color: ${e=>e.theme.colors.disabledText||`#888888`};
      border-color: ${e=>e.theme.colors.disabled||`#d0d0d0`};
      transform: none;
    }
  }
  
  svg {
    margin-right: ${e=>e.iconOnly?`0`:`0.5rem`};
    font-size: ${e=>{let{uiPreferences:t}=e,n=t?.components?.iconSize||`medium`;return n===`small`?`0.9em`:n===`large`?`1.3em`:`1.1em`}};
  }
  
  ${e=>{let{uiPreferences:t}=e;return t?.components?.animations===!1?`
        transition: none;
        &:hover, &:active {
          transform: none;
        }
      `:``}}
`,yd=W.button`
  ${vd}
`,bd=W.a`
  ${vd}
  text-decoration: none;
`,Q=e=>{let t=(0,vl.c)(26),n,r,i,a,o,s,c,l,u;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9]):({children:n,variant:a,size:o,fullWidth:s,iconOnly:c,as:l,customColor:r,disabled:u,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u);let d=a===void 0?`primary`:a,f=o===void 0?`md`:o,p=s===void 0?!1:s,m=c===void 0?!1:c,h=l===void 0?`button`:l,g=u===void 0?!1:u,{theme:_,uiPreferences:v}=Cl(),y;t[10]!==r||t[11]!==g||t[12]!==p||t[13]!==m||t[14]!==i||t[15]!==f||t[16]!==_||t[17]!==v||t[18]!==d?(y={variant:d,size:f,fullWidth:p,iconOnly:m,disabled:g,theme:_,uiPreferences:v,customColor:r,...i},t[10]=r,t[11]=g,t[12]=p,t[13]=m,t[14]=i,t[15]=f,t[16]=_,t[17]=v,t[18]=d,t[19]=y):y=t[19];let b=y;if(h===`a`){let e;return t[20]!==b||t[21]!==n?(e=(0,Y.jsx)(bd,{...b,children:n}),t[20]=b,t[21]=n,t[22]=e):e=t[22],e}let x;return t[23]!==b||t[24]!==n?(x=(0,Y.jsx)(yd,{...b,children:n}),t[23]=b,t[24]=n,t[25]=x):x=t[25],x},xd=W.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 1rem;
`,Sd=W.div`
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  width: 100%;
  max-width: ${({width:e})=>e||`28rem`};
  border-radius: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-height: 95vh;
`,Cd=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`,wd=W.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  margin: 0;
`,Td=W.button`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0;

  &:hover {
    color: ${({theme:e})=>e.colors?.error||`#e53935`};
  }
`,Ed=W.div`
  overflow-y: auto;
  max-height: ${({maxHeight:e})=>e||`90vh`};
  padding: 0 0.25rem;

  & > * + * {
    margin-top: 1.5rem;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ccc`};
    border-radius: 4px;
  }
`,Dd=W.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
`;W.button`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  font-weight: 600;
  font-size: 0.875rem;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  }
`,W.button`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
  transition: background 0.2s ease;
  box-shadow: ${({disabled:e,theme:t})=>e?`none`:`0 4px 12px ${t.colors?.primary||`#6C5CE7`}44`};
  background: ${({disabled:e,theme:t})=>e?t.colors?.border||`#e0e0e0`:t.colors?.primary||`#6C5CE7`};
  color: ${({disabled:e,theme:t})=>e?t.colors?.textLight||`#999`:`#fff`};
  opacity: ${({disabled:e})=>e?.7:1};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors?.secondary||`#5a4bd1`};
  }
`;var Od=e=>{let t=(0,vl.c)(32),{isOpen:n,onClose:r,onSave:i,title:a,width:o,maxHeight:s,children:c,showSaveButton:l,saveButtonText:u,cancelButtonText:d,saveDisabled:f,setIsConfirmOpen:p}=e,m=a===void 0?`Modal Title`:a,h=l===void 0?!0:l,g=u===void 0?`Save Changes`:u,_=d===void 0?`Cancel`:d,y=f===void 0?!1:f,x,S;if(t[0]===n?(x=t[1],S=t[2]):(x=()=>{if(n)return document.body.style.overflow=`hidden`,kd},S=[n],t[0]=n,t[1]=x,t[2]=S),(0,v.useEffect)(x,S),!n)return null;let C;t[3]!==i||t[4]!==y||t[5]!==p?(C=()=>{y||(p?p(!0):i&&i())},t[3]=i,t[4]=y,t[5]=p,t[6]=C):C=t[6];let w=C,T;t[7]===m?T=t[8]:(T=(0,Y.jsx)(wd,{children:m}),t[7]=m,t[8]=T);let E;t[9]===r?E=t[10]:(E=(0,Y.jsx)(Td,{onClick:r,children:`×`}),t[9]=r,t[10]=E);let D;t[11]!==E||t[12]!==T?(D=(0,Y.jsxs)(Cd,{children:[T,E]}),t[11]=E,t[12]=T,t[13]=D):D=t[13];let O;t[14]!==c||t[15]!==s?(O=(0,Y.jsx)(Ed,{maxHeight:s,children:c}),t[14]=c,t[15]=s,t[16]=O):O=t[16];let k;t[17]!==_||t[18]!==w||t[19]!==r||t[20]!==g||t[21]!==y||t[22]!==h?(k=(h||_)&&(0,Y.jsxs)(Dd,{children:[(0,Y.jsx)(Q,{variant:`outline`,onClick:r,children:_}),h&&(0,Y.jsx)(Q,{variant:`primary`,onClick:w,disabled:y,children:g})]}),t[17]=_,t[18]=w,t[19]=r,t[20]=g,t[21]=y,t[22]=h,t[23]=k):k=t[23];let A;t[24]!==D||t[25]!==O||t[26]!==k||t[27]!==o?(A=(0,Y.jsxs)(Sd,{width:o,onClick:Ad,children:[D,O,k]}),t[24]=D,t[25]=O,t[26]=k,t[27]=o,t[28]=A):A=t[28];let j;return t[29]!==r||t[30]!==A?(j=(0,b.createPortal)((0,Y.jsx)(xd,{onClick:r,children:A}),document.getElementById(`modal-root`)||document.body),t[29]=r,t[30]=A,t[31]=j):j=t[31],j};function kd(){document.body.style.overflow=`unset`}function Ad(e){return e.stopPropagation()}W.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,W.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,W.h2`
  margin: 0;
  color: #333;
  font-size: 20px;
`;var jd=W.p`
  margin: 16px 0;
  color: #555;
`;W.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 12px;
`;var Md=W.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;W(Md)`
  background-color: #f1f1f1;
  color: #333;
  &:hover {
    background-color: #e1e1e1;
  }
`,W(Md)`
  background-color: ${e=>e.approve?`#28a745`:`#007bff`};
  color: white;
  &:hover {
    background-color: ${e=>e.approve?`#218838`:`#0069d9`};
  }
`;var Nd=W.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,Pd=e=>{let t=(0,vl.c)(14),{isOpen:n,onClose:r,onConfirm:i,approve:a,isLoading:o,title:s,message:c,confirmLabel:l}=e;if(!n)return null;let u=a===`APPROVE`,d=u?`Approve`:`Submit`,f=u?`approving`:`submitting`,p=s||`${d} Weekly Timesheet`,m=c||(u?`Are you sure you want to approve this weekly timesheet? This action cannot be undone.`:`Are you sure you want to submit your weekly timesheet for approval? You won't be able to make changes after submission.`),h=l||`${d} Weekly Timesheet`,g;t[0]!==f||t[1]!==o||t[2]!==h?(g=o?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Nd,{}),` `,f,`...`]}):h,t[0]=f,t[1]=o,t[2]=h,t[3]=g):g=t[3];let _;t[4]===m?_=t[5]:(_=(0,Y.jsx)(jd,{children:m}),t[4]=m,t[5]=_);let v;return t[6]!==o||t[7]!==n||t[8]!==r||t[9]!==i||t[10]!==p||t[11]!==g||t[12]!==_?(v=(0,Y.jsx)(Od,{width:`400px`,isOpen:n,title:p,onClose:r,onSave:i,saveDisabled:o,saveButtonText:g,children:_}),t[6]=o,t[7]=n,t[8]=r,t[9]=i,t[10]=p,t[11]=g,t[12]=_,t[13]=v):v=t[13],v},Fd=W.header`
  background: white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: ${e=>e.sidebarWidth};
  z-index: 99;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding: 0 15px;
  }
`;W.div`
  display: flex;
  align-items: center;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border-radius: 15px;
  padding: 4px 15px;
  width: 300px;
  position: relative;
  @media (max-width: 768px) {
    width: 40px;
    transition: all 0.3s ease;
    
    ${e=>e.expanded&&`
      position: absolute;
      top: 5px;
      left: 60px;
      right: 15px;
      width: auto;
      z-index: 100;
    `}
    
    input {
      display: ${e=>e.expanded?`block`:`none`};
    }
  }
`,W.input`
  border: none;
  background: transparent;
  margin-left: 10px;
  width: 100%;
  color:${({theme:e})=>e.colors.textLight};
  &:focus {
    outline: none;
  }
`,W.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  display: ${e=>e.show?`block`:`none`};
  color: #242424;
`,W.div`
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  
  &:hover {
    background: ${({theme:e})=>e.colors.backgroundAlt};
  }
  
  svg {
    margin-right: 10px;
    color: ${({theme:e})=>e.colors.primary};
  }
`;var Id=W.div`
  display: flex;
  align-items: center;
`,Ld=W.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textLight};
  font-size: 1.2rem;
  margin-left: 15px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`,Rd=W.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`,zd=W.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primaryLight};
  color: ${({theme:e})=>e.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`,Bd=W.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textLight};
  @media (max-width: 768px) {
    display: none;
  }
`,Vd=W.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textLight};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  @media (max-width: 768px) {
    display: block;
    margin-right: 10px;
  }
`,Hd=W(Ld)`
  color: ${({theme:e})=>e.colors.error};
  
  &:hover {
    color: ${({theme:e})=>e.colors.error};
    opacity: 0.8;
  }
`,Ud=e=>{let t=(0,vl.c)(39),{sidebarWidth:n,onMobileMenuClick:r}=e,i=n===void 0?`250px`:n,{logout:a,profile:o}=hl(),[s,c]=(0,v.useState)(!1),l=Ne(),u;t[0]===a?u=t[1]:(u=()=>{a()},t[0]=a,t[1]=u);let d=u,f;t[2]===l?f=t[3]:(f=()=>{l(`/profile`)},t[2]=l,t[3]=f);let p=f,m;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>{c(!1)},t[4]=m):m=t[4];let h=m,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{c(!0)},t[5]=g):g=t[5];let _=g,y;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(y={display:`flex`,alignItems:`center`},t[6]=y):y=t[6];let b;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Y.jsx)(Gu,{}),t[7]=b):b=t[7];let x;t[8]===r?x=t[9]:(x=(0,Y.jsx)(Vd,{onClick:r,children:b}),t[8]=r,t[9]=x);let S=o?.image,C;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(C={width:`50px`,height:`50px`,borderRadius:`10px`,marginRight:`10px`,border:`0.2px solid #000`},t[10]=C):C=t[10];let w;t[11]===S?w=t[12]:(w=(0,Y.jsx)(`img`,{src:S,alt:`Company Logo`,style:C}),t[11]=S,t[12]=w);let T;t[13]!==w||t[14]!==x?(T=(0,Y.jsxs)(`div`,{style:y,children:[x,w]}),t[13]=w,t[14]=x,t[15]=T):T=t[15];let E;t[16]===o?.name?E=t[17]:(E=o?.name?.charAt(0)||(0,Y.jsx)(Vl,{}),t[16]=o?.name,t[17]=E);let D;t[18]===E?D=t[19]:(D=(0,Y.jsx)(zd,{children:E}),t[18]=E,t[19]=D);let O=o?.name||`User`,k;t[20]===O?k=t[21]:(k=(0,Y.jsx)(Bd,{children:O}),t[20]=O,t[21]=k);let A;t[22]!==p||t[23]!==D||t[24]!==k?(A=(0,Y.jsxs)(Rd,{onClick:p,children:[D,k]}),t[22]=p,t[23]=D,t[24]=k,t[25]=A):A=t[25];let j;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,Y.jsx)(Hd,{onClick:_,title:`Logout`,children:(0,Y.jsx)(lu,{})}),t[26]=j):j=t[26];let M;t[27]===A?M=t[28]:(M=(0,Y.jsxs)(Id,{children:[A,j]}),t[27]=A,t[28]=M);let N;t[29]===d?N=t[30]:(N=()=>d(),t[29]=d,t[30]=N);let P;t[31]!==s||t[32]!==N?(P=(0,Y.jsx)(Pd,{isOpen:s,onClose:h,onConfirm:N,title:`Logout`,message:`Are you sure you want to logout?`,confirmLabel:`Logout`}),t[31]=s,t[32]=N,t[33]=P):P=t[33];let F;return t[34]!==i||t[35]!==T||t[36]!==M||t[37]!==P?(F=(0,Y.jsxs)(Fd,{sidebarWidth:i,children:[T,M,P]}),t[34]=i,t[35]=T,t[36]=M,t[37]=P,t[38]=F):F=t[38],F},Wd=W.div`
  display: flex;
  min-height: 100vh;
`,Gd=W.main`
  flex: 1;
  margin-left: ${e=>e.sidebarWidth};
  padding: 90px 20px 20px;
  transition: margin-left 0.3s ease;
  background: ${({theme:e})=>e.colors.background};
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 90px 15px 15px;
    width: 100%;
  }
`,Kd=W.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({theme:e})=>e.colors.primary};
`,qd=W.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${e=>e.show?`block`:`none`};
  
  @media (min-width: 769px) {
    display: none;
  }
`,Jd=e=>{let t=(0,vl.c)(29),{children:n,title:r}=e,[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),c,l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>{let e=()=>{s(window.innerWidth<=768),window.innerWidth,a(!1)};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},l=[],t[0]=c,t[1]=l):(c=t[0],l=t[1]),(0,v.useEffect)(c,l);let u;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=e=>{a(e)},t[2]=u):u=t[2];let d=u,f;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{a(!0)},t[3]=f):f=t[3];let p=f,m;t[4]===o?m=t[5]:(m=()=>{o&&a(!1)},t[4]=o,t[5]=m);let h=m,g;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(g={label:`Dashboard`,icon:(0,Y.jsx)(ru,{}),path:`/dashboard`},t[6]=g):g=t[6];let _;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(_={label:`Attendance Tracking`,icon:(0,Y.jsx)(ql,{}),path:`/attendance-tracking`},t[7]=_):_=t[7];let y;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(y={label:`Leave Management`,icon:(0,Y.jsx)(Uu,{}),path:`/leave-management`},t[8]=y):y=t[8];let b;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(b={label:`My Claims`,icon:(0,Y.jsx)(pu,{}),path:`/my-claims`},t[9]=b):b=t[9];let x;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(x=[g,_,y,b,{label:`My Pay Slip`,icon:(0,Y.jsx)(Mu,{}),path:`/my-pay-slip`}],t[10]=x):x=t[10];let S=x,C;t[11]===i?C=t[12]:(C=(0,Y.jsx)(_d,{onToggle:d,initialOpen:i,navItems:S}),t[11]=i,t[12]=C);let w=o&&i,T;t[13]!==h||t[14]!==w?(T=(0,Y.jsx)(qd,{show:w,onClick:h}),t[13]=h,t[14]=w,t[15]=T):T=t[15];let E=i?`250px`:`70px`,D=i?`250px`:`70px`,O;t[16]===D?O=t[17]:(O=(0,Y.jsx)(Ud,{sidebarWidth:D,onMobileMenuClick:p}),t[16]=D,t[17]=O);let k;t[18]===r?k=t[19]:(k=r&&(0,Y.jsx)(Kd,{children:r}),t[18]=r,t[19]=k);let A;t[20]!==n||t[21]!==E||t[22]!==O||t[23]!==k?(A=(0,Y.jsxs)(Gd,{sidebarWidth:E,children:[O,k,n]}),t[20]=n,t[21]=E,t[22]=O,t[23]=k,t[24]=A):A=t[24];let j;return t[25]!==C||t[26]!==T||t[27]!==A?(j=(0,Y.jsxs)(Wd,{children:[C,T,A]}),t[25]=C,t[26]=T,t[27]=A,t[28]=j):j=t[28],j},Yd=W.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  ${e=>e.clickable&&`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
  `}
`,Xd=W.div`
  display: flex;
  align-items: center;
  
  ${e=>e.clickable&&`
    cursor: pointer;
  `}
`,Zd=W.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  
  ${e=>e.color===`primary`&&`
    background: ${e.theme.colors.primaryLight};
    color: ${e.theme.colors.primary};
  `}
  
  ${e=>e.color===`secondary`&&`
    background: ${e.theme.colors.secondaryLight};
    color: ${e.theme.colors.secondary};
  `}
  
  ${e=>e.color===`accent`&&`
    background: ${e.theme.colors.accentLight};
    color: ${e.theme.colors.accent};
  `}
  
  ${e=>e.color===`success`&&`
    background: ${e.theme.colors.success}22;
    color: ${e.theme.colors.success};
  `}
  
  ${e=>e.color===`warning`&&`
    background: ${e.theme.colors.warning}22;
    color: ${e.theme.colors.warning};
  `}
  
  ${e=>e.color===`error`&&`
    background: ${e.theme.colors.error}22;
    color: ${e.theme.colors.error};
  `}

  ${e=>e.color===`info`&&`
    background: ${e.theme.colors.info}22;
    color: ${e.theme.colors.info};
  `}
`,Qd=W.div`
  flex: 1;
`,$d=W.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,ef=W.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.5rem;
`,tf=W.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  
  ${e=>e.type===`increase`&&`
    color: ${e.theme.colors.success};
  `}
  
  ${e=>e.type===`decrease`&&`
    color: ${e.theme.colors.error};
  `}
  
  svg {
    margin-right: 0.25rem;
  }
`,nf=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,rf=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  background: ${({theme:e,color:t})=>t?`${e.colors[t]}`:e.colors.background};

  ${e=>e.clickable&&`
    cursor: pointer;

    &:hover {
      background: ${e.color?e.theme.colors[e.color]:e.theme.colors.backgroundDark||`#f0f0f0`};
    }
  `}
`,af=W.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.black};
`,of=W.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.black};
  
  ${e=>e.status===`success`&&`
    color: ${e.theme.colors.success};
  `}
  
  ${e=>e.status===`warning`&&`
    color: ${e.theme.colors.warning};
  `}
  
  ${e=>e.status===`error`&&`
    color: ${e.theme.colors.error};
  `}

  ${e=>e.status===`info`&&`
    color: ${e.theme.colors.info};
  `}
`,sf=W.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 1.5rem;
  
  ${e=>e.clickable&&`
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
  `}
`,cf=W.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,lf=e=>{let t=(0,vl.c)(37),{icon:n,label:r,value:i,change:a,changeType:o,color:s,sections:c,onClick:l,onSectionClick:u,onItemClick:d}=e,f=o===void 0?`increase`:o,p=s===void 0?`primary`:s,m;t[0]===c?m=t[1]:(m=c===void 0?[]:c,t[0]=c,t[1]=m);let h=m,g;t[2]===l?g=t[3]:(g=e=>{l&&(e.stopPropagation(),l())},t[2]=l,t[3]=g);let _=g,v;t[4]===u?v=t[5]:(v=(e,t,n)=>{u&&(e.stopPropagation(),u(t,n))},t[4]=u,t[5]=v);let y=v,b;t[6]===d?b=t[7]:(b=(e,t,n,r,i)=>{d&&(e.stopPropagation(),d(r))},t[6]=d,t[7]=b);let x=b,S=!!l,C=!!l,w;t[8]!==p||t[9]!==n?(w=(0,Y.jsx)(Zd,{color:p,children:n}),t[8]=p,t[9]=n,t[10]=w):w=t[10];let T;t[11]===r?T=t[12]:(T=(0,Y.jsx)(ef,{children:r}),t[11]=r,t[12]=T);let E;t[13]===i?E=t[14]:(E=(0,Y.jsx)($d,{children:i}),t[13]=i,t[14]=E);let D;t[15]!==a||t[16]!==f?(D=a&&(0,Y.jsxs)(tf,{type:f,children:[f===`increase`?(0,Y.jsx)(Ku,{}):(0,Y.jsx)(Ju,{}),a]}),t[15]=a,t[16]=f,t[17]=D):D=t[17];let O;t[18]!==T||t[19]!==E||t[20]!==D?(O=(0,Y.jsxs)(Qd,{children:[T,E,D]}),t[18]=T,t[19]=E,t[20]=D,t[21]=O):O=t[21];let k;t[22]!==_||t[23]!==w||t[24]!==O||t[25]!==C?(k=(0,Y.jsxs)(Xd,{clickable:C,onClick:_,children:[w,O]}),t[22]=_,t[23]=w,t[24]=O,t[25]=C,t[26]=k):k=t[26];let A;t[27]!==x||t[28]!==y||t[29]!==d||t[30]!==u||t[31]!==h?(A=h.length!==0&&h.map((e,t)=>(0,Y.jsxs)(sf,{clickable:!!u,onClick:n=>y(n,t,e),children:[e.title&&(0,Y.jsx)(cf,{children:e.title}),(0,Y.jsx)(nf,{children:e.items.map((n,r)=>(0,Y.jsxs)(rf,{clickable:!!d,onClick:i=>x(i,t,r,n,e),color:n.status,children:[(0,Y.jsx)(af,{children:n.label}),(0,Y.jsx)(of,{children:n.value})]},r))})]},t)),t[27]=x,t[28]=y,t[29]=d,t[30]=u,t[31]=h,t[32]=A):A=t[32];let j;return t[33]!==k||t[34]!==A||t[35]!==S?(j=(0,Y.jsxs)(Yd,{clickable:S,children:[k,A]}),t[33]=k,t[34]=A,t[35]=S,t[36]=j):j=t[36],j},uf=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e,uiPreferences:t})=>{let n=t?.components?.cardStyle||`default`;return n===`square`?`0`:n===`rounded`?`16px`:`8px`}};
  box-shadow: ${({theme:e,uiPreferences:t})=>{let n=t?.components?.shadowIntensity||`medium`;return n===`none`?`none`:n===`heavy`?`0 8px 16px rgba(0, 0, 0, 0.2)`:`0 4px 6px rgba(0, 0, 0, 0.1)`}};
  padding: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`1rem`:n===`spacious`?`2rem`:`1.5rem`}};
  margin-bottom: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`1rem`:n===`spacious`?`2rem`:`1.5rem`}};
  transition: ${({theme:e})=>`
    transform ${e.transitions.fast}, 
    box-shadow ${e.transitions.fast}, 
    background-color ${e.transitions.fast}
  `};
  border: ${({theme:e,uiPreferences:t})=>{let n=t?.components?.borderStyle||`none`;return n===`thin`?`1px solid ${e.colors.border}`:n===`thick`?`2px solid ${e.colors.border}`:`none`}};
  
  ${({hoverable:e,theme:t,uiPreferences:n})=>{let r=n?.components?.animations!==!1;return e&&r?`
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
      `:``}}
  
  ${({variant:e,theme:t})=>e===`primary`?`border-top: 4px solid ${t.colors.primary};`:e===`secondary`?`border-top: 4px solid ${t.colors.secondary};`:e===`accent`?`border-top: 4px solid ${t.colors.accent};`:``}
`,df=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`0.75rem`:n===`spacious`?`1.5rem`:`1rem`}};
  
  h3 {
    margin: 0;
    color: ${({theme:e})=>e.colors.text};
    font-size: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.fontSize||`medium`;return n===`small`?`1.1rem`:n===`large`?`1.4rem`:`1.2rem`}};
    font-weight: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.headingWeight||`semiBold`;return n===`regular`?`400`:n===`bold`?`700`:`600`}};
    font-family: ${({theme:e,uiPreferences:t})=>t?.typography?.fontFamily||`Poppins`}, sans-serif;
  }
`,ff=W.div`
  font-size: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.fontSize||`medium`;return n===`small`?`0.9rem`:n===`large`?`1.1rem`:`1rem`}};
  font-weight: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.bodyWeight||`regular`;return n===`light`?`300`:n===`medium`?`500`:`400`}};
  font-family: ${({theme:e,uiPreferences:t})=>t?.typography?.fontFamily||`Poppins`}, sans-serif;
  color: ${({theme:e})=>e.colors.textSecondary};
`,pf=W.div`
  margin-top: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`0.75rem`:n===`spacious`?`1.5rem`:`1rem`}};
  padding-top: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`0.75rem`:n===`spacious`?`1.5rem`:`1rem`}};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.fontSize||`medium`;return n===`small`?`0.85rem`:n===`large`?`1.05rem`:`0.95rem`}};
`,mf=e=>{let t=(0,vl.c)(30),n,r,i,a,o,s,c;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7]):({title:s,children:n,footer:r,variant:c,hoverable:o,headerAction:i,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c);let l=o===void 0?!0:o,{theme:u,uiPreferences:d}=Cl(),f;t[8]!==i||t[9]!==u||t[10]!==s||t[11]!==d?(f=(s||i)&&(0,Y.jsxs)(df,{theme:u,uiPreferences:d,children:[s&&(0,Y.jsx)(`h3`,{children:s}),i]}),t[8]=i,t[9]=u,t[10]=s,t[11]=d,t[12]=f):f=t[12];let p;t[13]!==n||t[14]!==u||t[15]!==d?(p=(0,Y.jsx)(ff,{theme:u,uiPreferences:d,children:n}),t[13]=n,t[14]=u,t[15]=d,t[16]=p):p=t[16];let m;t[17]!==r||t[18]!==u||t[19]!==d?(m=r&&(0,Y.jsx)(pf,{theme:u,uiPreferences:d,children:r}),t[17]=r,t[18]=u,t[19]=d,t[20]=m):m=t[20];let h;return t[21]!==l||t[22]!==a||t[23]!==f||t[24]!==p||t[25]!==m||t[26]!==u||t[27]!==d||t[28]!==c?(h=(0,Y.jsxs)(uf,{variant:c,hoverable:l,theme:u,uiPreferences:d,...a,children:[f,p,m]}),t[21]=l,t[22]=a,t[23]=f,t[24]=p,t[25]=m,t[26]=u,t[27]=d,t[28]=c,t[29]=h):h=t[29],h},hf=W.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  
  ${e=>e.variant===`primary`&&`
    background: ${e.theme.colors.primaryLight};
    color: ${e.theme.colors.primary};
  `}
  
  ${e=>e.variant===`secondary`&&`
    background: ${e.theme.colors.secondaryLight};
    color: ${e.theme.colors.secondary};
  `}
  
  ${e=>e.variant===`success`&&`
    background: ${e.theme.colors.success}22;
    color: ${e.theme.colors.success};
  `}
  
  ${e=>e.variant===`warning`&&`
    background: ${e.theme.colors.warning}22;
    color: ${e.theme.colors.warning};
  `}
  
  ${e=>e.variant===`error`&&`
    background: ${e.theme.colors.error}22;
    color: ${e.theme.colors.error};
  `}
  
  ${e=>e.variant===`info`&&`
    background: ${e.theme.colors.info}22;
    color: ${e.theme.colors.info};
  `}

  ${e=>e.variant===`forward`&&`
  background: #f3e8fd;
  color: #8e44ad;
`}

${e=>e.variant===`back`&&`
  background: #fef5e7 ; 
  color: #f39c12;
`}

${e=>e.variant===`settle`&&`
  background: #eaf2f8;
  color: #2980b9;
`}

${e=>e.variant===`notPlanned`&&`
  background: #66666622;
  color: #666666;
`}
${e=>e.variant===`pink`&&`
  background: #ffe5f2;
  color: #FF69B4;
`}

${e=>e.variant===`reject`&&`
  background: ${e.theme.colors.error};
  color: #f3e8fd;
`}
`,gf=e=>{let t=(0,vl.c)(8),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({children:n,variant:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=i===void 0?`primary`:i,o;return t[4]!==n||t[5]!==r||t[6]!==a?(o=(0,Y.jsx)(hf,{variant:a,...r,children:n}),t[4]=n,t[5]=r,t[6]=a,t[7]=o):o=t[7],o},_f=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],vf=_f.reduce((e,t,n)=>(e[t.toLowerCase()]=n,e),{}),yf=e=>{if(!e)return`N/A`;try{return new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})}catch{return`Invalid Date`}},bf=e=>{if(!e)return``;if(e instanceof Date)return`${String(e.getDate()).padStart(2,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${e.getFullYear()}`;if(typeof e==`string`&&e.includes(`-`)){let[t,n,r]=e.split(`-`);return`${r}-${n}-${t}`}return``},xf=e=>e instanceof Date?`${String(e.getDate()).padStart(2,`0`)}-${_f[e.getMonth()]}-${e.getFullYear()}`:null,Sf=(e,t)=>{let n=new Date(e),r=new Date(t);return`${n.toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`})} – ${r.toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`})}`},Cf=e=>new Date(e).toLocaleString(`default`,{month:`long`,year:`numeric`}),wf=e=>{if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==3)return null;let n=parseInt(t[0],10),r=t[1],i=parseInt(t[2],10),a=vf[r.toLowerCase()];return isNaN(n)||isNaN(a)||isNaN(i)?null:new Date(i,a,n,0,0,0,0)},$=(e,t=!1)=>{if(!e)return``;let n=e;if(typeof e==`string`){e=e.replace(/\//g,`-`);let t={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},r=e.split(`-`);if(r.length===3){let[e,i,a]=r;n=t[i]===void 0?e.length===4?new Date(Number(e),Number(i)-1,Number(a)):new Date(Number(a),Number(i)-1,Number(e)):new Date(Number(a),t[i],Number(e))}else n=new Date(e)}if(!(n instanceof Date)||isNaN(n))return``;let r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=n.getFullYear();return t?`${a}-${i}-${r}`:`${r}-${i}-${a}`},Tf=({type:e=`current`,mode:t=`month`,offset:n=0,weekStartsOn:r=0}={})=>{let i=new Date,a=0;e===`previous`&&(a=-1),e===`next`&&(a=1),e===`current`&&(a=0);let o=a+n,s=new Date(i),c=new Date(i);if(t===`month`)s.setMonth(i.getMonth()+o,1),c.setMonth(i.getMonth()+o+1,0);else if(t===`week`){let e=(i.getDay()-r+7)%7;s.setDate(i.getDate()-e+o*7),c=new Date(s),c.setDate(s.getDate()+6)}else if(t===`today`)s.setDate(i.getDate()+o),c=new Date(s);else throw Error(`Unsupported mode: "${t}". Use "month" or "week".`);let l=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;return{start:l(s),end:l(c)}},Ef=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,Df=e=>{let[t,n]=e.split(`-W`).map(Number),r=new Date(t,0,1),i=(n-1)*7,a=new Date(r.getTime()+i*864e5),o=a.getDay(),s=o===0?-6:1-o;a.setDate(a.getDate()+s);let c=new Date(a);return c.setDate(a.getDate()+6),{start:yf(a),end:yf(c)}},Of=(e=[])=>{if(!Array.isArray(e)||e.length===0)return[];let t={};return e.forEach(e=>{if(e.activity_type===`P`){let n=`${e.id}_${e.order_item_id}`;t[n]={key:n,original_P:e,allAEntries:[]}}}),e.forEach(e=>{if(e.activity_type===`A`){let n=Number(e.ref_p_id);if(!n)return;let r=`${n}_${e.order_item_id}`;t[r]&&t[r].allAEntries.push(e)}}),Object.values(t).map(e=>{let t=e.allAEntries,n=t.length===0?null:t.reduce((e,t)=>{let n=wf(e.start_date);return wf(t.start_date)>n?t:e});return{key:e.key,original_P:e.original_P,original_A:n,allAEntries:t}})},kf=e=>{let t=e instanceof Date?e:wf(e);return t?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`:null},Af=({allAEntries:e})=>{let t=kf(new Date),n=e.find(e=>kf(e.start_date)===t);return n?n.status===`N`?{showStartBtn:!1,showCompleteBtn:!0,showUpdateBtn:!1,isCompleted:!1}:{showStartBtn:!1,showCompleteBtn:!1,showUpdateBtn:!0,isCompleted:!0}:{showStartBtn:!0,showCompleteBtn:!1,showUpdateBtn:!1,isCompleted:!1}},jf=e=>{let t=new Date(e);return isNaN(t)?null:xf(t)},Mf=(e=[])=>e.reduce((e,t)=>{if(!t.start_date)return e;let n=jf(t.start_date);return e[n]||(e[n]={date:n,section:n,remarks:t.remarks||``,effort:0,no_of_items:0,resourceList:t.resource_list}),e[n].effort+=Number(t.effort||0),e[n].no_of_items+=Number(t.no_of_items||0),e},{}),Nf=e=>{let t=e?.order_item_id??e?.original_P?.order_item_id??e?.key?.split(`_`)?.slice(1)?.join(`_`)??``;if(!t)return``;let n=String(t).split(`_`),r=n[n.length-1];return String(r).replace(/^0+/,``)},Pf=(e=[],t)=>{let n=Nf(t);return n?e.map(e=>{let t=(e?.claim_items||[]).filter(e=>String(e?.o_item_id).replace(/^0+/,``)===n);return t.length===0?null:{...e,claim_items:t}}).filter(Boolean):[]},Ff=(e=[],t=[])=>{let n=Of(e),r=(e,t)=>e!=null&&t!=null&&String(e)===String(t);return n.map(e=>{let{original_P:n,original_A:i,allAEntries:a=[],key:o}=e,s=Array.isArray(n?.resource_list)&&n.resource_list.length>0,c=``,l=``,u=t.filter(e=>r(n?.id,e?.allocation_id)),d=u.length>0,f=d&&u.every(e=>e?.is_approved===!0),p=a.map(e=>e?.id).filter(Boolean),m=t.filter(e=>p.some(t=>r(t,e?.allocation_id))),h=m.length>0,g=h&&m.every(e=>e?.is_approved===!0);g?(c=`Actual Approved`,l=`AA`):h?(c=`Actual Submitted`,l=`AS`):i?.status===`N`||i?.status===`P`?(c=`In Progress`,l=`P`):f?(c=`Plan Approved`,l=`PA`):d?(c=`Plan Submitted`,l=`PS`):!s||!i?(c=`Not Planned`,l=`NS`):(c=`Completed`,l=`C`);let _=l===`C`?`Completed`:`In Progress`,v=Af({allAEntries:a}),y=Mf(a);return{key:o,p_id:n?.id??null,a_id:i?.id??null,employee_name:n?.employee_name??``,emp_id:n?.emp_id??``,customer_name:n?.customer_name??``,product_name:n?.product_name??``,project_name:n?.project_name??``,activity_name:n?.activity_name??``,order_item_id:n?.order_item_id??``,order_item_key:n?.order_item_key??``,planned_start_date:n?.start_date||null,planned_end_date:n?.end_date||null,planned_start_time:n?.start_time||null,planned_end_time:n?.end_time||null,actual_start_date:i?.start_date||null,actual_end_date:i?.end_date||null,is_file_applicable:n?.is_file_applicable??!1,audit_type:n?.audit_type??``,store_name:n?.store_name??``,store_remarks:n?.store_remarks??``,complete:_,is_complete:l===`C`,statusDisplay:c,activityStatus:l,isPlanSubmitted:d,isPlanApproved:f,isActualSubmitted:h,isActualApproved:g,original_P:n,original_A:i,allAEntries:a,day_logs:y,ui:v}})},If=e=>{switch(e){case`P`:return`info`;case`NA`:return`error`;case`NS`:return`error`;case`C`:return`success`;case`AA`:return`success`;case`AS`:return`success`;case`PS`:return`info`;default:return`default`}},Lf=(e,t)=>{if(!e||!t)return[];let n=[],[r,i,a]=e.split(`-`).map(Number),[o,s,c]=t.split(`-`).map(Number),l=new Date(r,i-1,a),u=new Date(o,s-1,c);for(;l<=u;)n.push(xf(l)),l.setDate(l.getDate()+1);return n},Rf=e=>{let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r)},zf=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,Bf=(e,t)=>{if(!e||!t)return[];let n=[],r=Rf(e),i=Rf(t);for(;r<=i;)n.push(zf(r)),r=new Date(r.getFullYear(),r.getMonth(),r.getDate()+1);return n},Vf=(e,t)=>{let n=Rf(e);return n.setDate(n.getDate()+t),zf(n)},Hf=(e,t)=>(Rf(t)-Rf(e))/(1e3*60*60*24)==1,Uf=e=>{let t={};return e.forEach(e=>{t[e.emp_id]||(t[e.emp_id]={}),Bf(e.start_date,e.end_date).forEach(n=>{t[e.emp_id][n]=e.id})}),t},Wf=({empId:e,activeDates:t,ownershipMap:n,employeeMeta:r,existingRowsForEmp:i})=>{let a=[...new Set(t)].sort();if(a.length===0)return[];let o=t=>n[e]?.[t]??null,s={};i.forEach(e=>{e.id!=null&&(s[e.id]=e)});let c=i[0]||r,l=[],u=a[0],d=o(u),f=u,p=(t,n,i)=>{let a=i!=null&&s[i]||c;l.push({rowKey:i==null?crypto.randomUUID():`existing_${i}`,id:i,emp_id:e,employee_name:a.employee_name||r.employee_name,emp_type:a.emp_type||r.emp_type,remarks:a.remarks||``,contract_rate:a.contract_rate??r.contract_rate??0,start_date:t,end_date:n,is_approved:!!a.is_approved})};for(let e=1;e<a.length;e++){let t=a[e],n=o(t);if(Hf(f,t)&&n===d){f=t;continue}p(u,f,d),u=t,d=n,f=t}return p(u,f,d),l},Gf=(e,t,n)=>{if(e.start_date===e.end_date&&e.start_date===t)return n===`DELETE`?[]:[{...e,__isEditTarget:!0}];let r=[],i=t>e.start_date,a=t<e.end_date;return i&&r.push({...e,id:e.id,rowKey:e.id==null?crypto.randomUUID():`existing_${e.id}`,end_date:Vf(t,-1)}),n===`EDIT`&&r.push({...e,id:null,rowKey:crypto.randomUUID(),start_date:t,end_date:t,__isEditTarget:!0}),a&&r.push({...e,id:null,rowKey:crypto.randomUUID(),start_date:Vf(t,1)}),r},Kf=e=>{let t={};e.forEach(e=>{t[e.emp_id]||(t[e.emp_id]=[]),t[e.emp_id].push(e)});let n=[];return Object.values(t).forEach(e=>{let t=[...e].sort((e,t)=>e.start_date.localeCompare(t.start_date)),r=null;t.forEach(e=>{let t=Number(r?.contract_rate??0)===Number(e.contract_rate??0);if(r&&Hf(r.end_date,e.start_date)&&r.emp_type===e.emp_type&&(r.remarks||``)===(e.remarks||``)&&t&&(r.id==null||e.id==null||r.id===e.id)){let t=r.id??e.id;r={...r,id:t,end_date:e.end_date,rowKey:t==null?r.rowKey:`existing_${t}`}}else r&&n.push(r),r={...e}}),r&&n.push(r)}),n},qf=(e,t)=>{if(e.id==null)return`ADD`;let n=t[e.id];return n?e.start_date!==n.start_date||e.end_date!==n.end_date||e.emp_type!==n.emp_type||(e.remarks||``)!==(n.remarks||``)||Number(e.contract_rate??0)!==Number(n.contract_rate??0)?`UPDATE`:`ORIGINAL`:`ADD`},Jf=(e,t)=>{let n={};t.forEach(e=>{n[e.id]=e});let r={};t.forEach(e=>{r[`${e.emp_id}|${e.start_date}|${e.end_date}`]=e});let i=[],a=[],o=[],s=new Set;return e.forEach(e=>{let t=Number.isFinite(Number(e.contract_rate))?Number(e.contract_rate):0,c=e.id;if(c==null){let t=r[`${e.emp_id}|${e.start_date}|${e.end_date}`];t&&!s.has(t.id)&&(c=t.id)}if(c==null){i.push({emp_id:e.emp_id,emp_type:e.emp_type,start_date:$(e.start_date),end_date:$(e.end_date),remarks:e.remarks||``,contract_rate:t});return}s.add(c);let l=n[c];l&&(e.start_date!==l.start_date||e.end_date!==l.end_date||e.emp_type!==l.emp_type||(e.remarks||``)!==(l.remarks||``)||Number(e.contract_rate??0)!==Number(l.contract_rate??0)?a.push({id:c,emp_id:e.emp_id,emp_type:e.emp_type,start_date:$(e.start_date),end_date:$(e.end_date),remarks:e.remarks||``,contract_rate:t,is_updated:!0}):o.push({id:c,emp_id:e.emp_id,emp_type:e.emp_type}))}),{addPayload:i,updatePayload:a,deletePayload:t.filter(e=>!s.has(e.id)).map(e=>({id:e.id,is_deleted:!0,emp_type:e.emp_type})),unchangedPayload:o}},Yf=(e,t,{format:n=!1,maxDays:r=366}={})=>{let i=[],a=$(e,!0),o=$(t,!0);if(!a||!o)return i;let[s,c,l]=a.split(`-`).map(Number),[u,d,f]=o.split(`-`).map(Number),p=new Date(s,c-1,l),m=new Date(u,d-1,f),h=0;for(;p<=m&&h<r;)i.push(n?xf(p):new Date(p)),p.setDate(p.getDate()+1),h++;return i},Xf=e=>{let t=(0,vl.c)(14),{activityStart:n,activityEnd:r,allocations:i,originalById:a}=e,o;t[0]===i?o=t[1]:(o=i===void 0?[]:i,t[0]=i,t[1]=o);let s=o,c;t[2]===a?c=t[3]:(c=a===void 0?{}:a,t[2]=a,t[3]=c);let l=c,u;t[4]!==r||t[5]!==n?(u=Yf(n,r),t[4]=r,t[5]=n,t[6]=u):u=t[6];let d=u,f;t[7]!==d||t[8]!==s||t[9]!==l?(f={},d.forEach(e=>{f[xf(e)]=[]}),s.forEach(e=>{Yf(e.start_date,e.end_date,{format:!0}).forEach(t=>{f[t]&&f[t].push({...e,date:t,status:qf(e,l)})})}),t[7]=d,t[8]=s,t[9]=l,t[10]=f):f=t[10];let p=f,m;return t[11]!==d||t[12]!==p?(m={activityDates:d,dayWindow:d,dateWiseAssignments:p},t[11]=d,t[12]=p,t[13]=m):m=t[13],m},Zf=(e=[])=>{if(!e.length)return{activityStatus:`NS`,statusDisplay:`Not Planned`};let t=e.map(e=>e?.activityStatus);return t.includes(`NS`)?{activityStatus:`NS`,statusDisplay:`Not Planned`}:t.includes(`PS`)?{activityStatus:`PS`,statusDisplay:`Plan Submitted`}:t.includes(`PA`)?{activityStatus:`PA`,statusDisplay:`Plan Approved`}:t.includes(`P`)?{activityStatus:`P`,statusDisplay:`In Progress`}:t.includes(`AS`)?{activityStatus:`AS`,statusDisplay:`Actual Submitted`}:t.includes(`AA`)?{activityStatus:`AA`,statusDisplay:`Actual Approved`}:t.every(e=>e===`C`)?{activityStatus:`C`,statusDisplay:`Completed`}:{activityStatus:`NS`,statusDisplay:`Not Planned`}},Qf=(e,t=!1)=>{if(!e)return``;let n=String(e).replace(/\D/g,``);return n?t?n:parseInt(n,10).toString():``};function $f(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function ep(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)}function tp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`},child:[]}]})(e)}function np(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)}function rp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function ip(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)}function ap(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`8.5`,r:`1.5`},child:[]},{tag:`polyline`,attr:{points:`21 15 16 10 5 21`},child:[]}]})(e)}function op(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`8`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`17`,x2:`8`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`10 9 9 9 8 9`},child:[]}]})(e)}function sp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)}function cp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`},child:[]},{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`14`,x2:`21`,y2:`3`},child:[]}]})(e)}function lp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},child:[]},{tag:`polyline`,attr:{points:`22 4 12 14.01 9 11.01`},child:[]}]})(e)}function up(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`2`,x2:`16`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`2`,x2:`8`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`10`,x2:`21`,y2:`10`},child:[]}]})(e)}function dp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`},child:[]}]})(e)}function fp(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`},child:[]}]})(e)}function pp(e){return X({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`2`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z`},child:[]}]})(e)}var mp=Oi`from { opacity: 0; } to { opacity: 1; }`,hp=Oi`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }`,gp=W.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 18, 50, 0.5);
  backdrop-filter: blur(3px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Z.spacing.md};
  animation: ${mp} 0.2s ease;
`,_p=W.div`
  background: ${Z.colors.card};
  border-radius: ${Z.borderRadius.xl};
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${Z.shadows.xl};
  animation: ${hp} 0.25s ease;
  font-family: ${Z.fonts.body};

  @media (max-width: ${Z.breakpoints.sm}) {
    max-height: 95vh;
    border-radius: ${Z.borderRadius.lg};
  }
`,vp=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Z.spacing.lg} ${Z.spacing.xl};
  border-bottom: 1px solid ${Z.colors.border};
  position: sticky;
  top: 0;
  background: ${Z.colors.card};
  z-index: 1;
  border-radius: ${Z.borderRadius.xl} ${Z.borderRadius.xl} 0 0;
`,yp=W.div`
  display: flex;
  align-items: center;
  gap: ${Z.spacing.md};
`;W.div`
  width: 42px;
  height: 42px;
  border-radius: ${Z.borderRadius.lg};
  background: linear-gradient(135deg, ${Z.colors.primary}, ${Z.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${Z.fontSizes.md};
  font-weight: 700;
  flex-shrink: 0;
`;var bp=W.div``,xp=W.h2`
  margin: 0;
  font-size: ${Z.fontSizes.lg};
  font-weight: 700;
  color: ${Z.colors.text};
  line-height: 1.2;
`,Sp=W.p`
  margin: 0;
  font-size: ${Z.fontSizes.xs};
  color: ${Z.colors.textLight};
`,Cp=W.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: ${Z.borderRadius.lg};
  background: ${Z.colors.backgroundAlt};
  color: ${Z.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;
  transition: all ${Z.transitions.fast};

  &:hover {
    background: ${Z.colors.border};
    color: ${Z.colors.text};
  }
`,wp=W.div`
  padding: ${Z.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${Z.spacing.lg};
`,Tp=W.div`
  font-size: ${Z.fontSizes.xs};
  font-weight: 600;
  color: ${Z.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: ${Z.spacing.sm};
  padding-bottom: ${Z.spacing.xs};
  border-bottom: 1px solid ${Z.colors.border};
`,Ep=W.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Z.spacing.sm};

  @media (max-width: ${Z.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`,Dp=W.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: ${Z.spacing.sm} ${Z.spacing.md};

  background: ${({is_verified:e,theme:t})=>e===!0?`${t.colors.success}20`:e===!1?`${t.colors.error}20`:t.colors.background};

  border-radius: ${Z.borderRadius.lg};

  border: 1px solid ${({is_verified:e,theme:t})=>e===!0?`${t.colors.success}40`:e===!1?`${t.colors.error}40`:t.colors.border};

  ${({$full:e})=>e&&`grid-column: 1 / -1;`}
`,Op=W.div`
  width: 28px;
  height: 28px;
  border-radius: ${Z.borderRadius.md};
  background: ${({is_verified:e,theme:t})=>e===!0?t.colors.success:e===!1?t.colors.error:t.colors.primaryLight};
  /* color: ${Z.colors.primary}; */
  color: ${({is_verified:e,theme:t})=>e===!0||e===!1?t.colors.card:t.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
`,kp=W.div`
  min-width: 0;
  flex: 1;
`,Ap=W.div`
  font-size: ${Z.fontSizes.xs};
  color: ${Z.colors.textLight};
  font-weight: 500;
  margin-bottom: 2px;
`,jp=W.div`
  font-size: ${Z.fontSizes.sm};
  color: ${({$empty:e})=>e?Z.colors.border:Z.colors.text};
  font-weight: 600;
  word-break: break-word;
`,Mp=W.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${Z.borderRadius.xl};
  font-size: ${Z.fontSizes.xs};
  font-weight: 600;
  background: ${({$verified:e,$rejected:t})=>t?`#FFE6E6`:e?`#E6F9F0`:`#FFF4E5`};
  color: ${({$verified:e,$rejected:t,theme:n})=>t?n.colors.error:e?n.colors.success:`#E67E00`};
`,Np=W.div`
  padding: ${Z.spacing.md} ${Z.spacing.xl};
  border-top: 1px solid ${Z.colors.border};
  display: flex;
  justify-content: flex-end;
`,Pp=W.button`
  padding: 9px ${Z.spacing.xl};
  border-radius: ${Z.borderRadius.lg};
  border: 1.5px solid ${Z.colors.border};
  background: transparent;
  color: ${Z.colors.textLight};
  font-family: ${Z.fonts.body};
  font-size: ${Z.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all ${Z.transitions.fast};

  &:hover {
    border-color: ${Z.colors.text};
    color: ${Z.colors.text};
  }
`,Fp=W.div`
  margin-top: ${Z.spacing.sm};
  border-radius: ${Z.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${Z.colors.border};
`,Ip=W.img`
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  aspect-ration: 1:1;
  display: block;
`,Lp=W.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px ${Z.spacing.md};
  background: ${Z.colors.primaryLight};
  color: ${Z.colors.primary};
  font-size: ${Z.fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  border-radius: ${Z.borderRadius.lg};
  transition: background ${Z.transitions.fast};

  &:hover {
    background: ${Z.colors.primary};
    color: white;
  }

  svg { flex-shrink: 0; }
  span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`,Rp=W.div`
  font-size: ${Z.fontSizes.sm};
  color: ${Z.colors.border};
  font-weight: 600;
`,zp=e=>e==null||e===``?`—`:String(e),Bp=e=>e==null||e===``,Vp=e=>{let t=(0,vl.c)(157),{employee:n,onClose:r}=e;if(!n)return null;let i=Hp,a=Up,o;t[0]===n.ref_govt_id_number?o=t[1]:(o=a(n.ref_govt_id_number),t[0]=n.ref_govt_id_number,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>e.target===e.currentTarget&&r(),t[2]=r,t[3]=c);let l;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(l={width:`42px`,height:`42px`,borderRadius:`50%`,border:`2px solid rgb(245, 247, 214)`},t[4]=l):l=t[4];let u;t[5]===n.image?u=t[6]:(u=(0,Y.jsx)(`img`,{src:n.image,alt:`Profile`,style:l}),t[5]=n.image,t[6]=u);let d;t[7]===n.name?d=t[8]:(d=(0,Y.jsx)(xp,{children:n.name}),t[7]=n.name,t[8]=d);let f;t[9]===n.emp_id?f=t[10]:(f=(0,Y.jsx)(Sp,{children:n.emp_id}),t[9]=n.emp_id,t[10]=f);let p;t[11]!==d||t[12]!==f?(p=(0,Y.jsxs)(bp,{children:[d,f]}),t[11]=d,t[12]=f,t[13]=p):p=t[13];let m;t[14]!==u||t[15]!==p?(m=(0,Y.jsxs)(yp,{children:[u,p]}),t[14]=u,t[15]=p,t[16]=m):m=t[16];let h;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Y.jsx)($f,{}),t[17]=h):h=t[17];let g;t[18]===r?g=t[19]:(g=(0,Y.jsx)(Cp,{onClick:r,children:h}),t[18]=r,t[19]=g);let _;t[20]!==g||t[21]!==m?(_=(0,Y.jsxs)(vp,{children:[m,g]}),t[20]=g,t[21]=m,t[22]=_):_=t[22];let v;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,Y.jsx)(Tp,{children:`Personal Information`}),t[23]=v):v=t[23];let y;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,Y.jsx)(Op,{children:(0,Y.jsx)(ep,{})}),t[24]=y):y=t[24];let b;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Y.jsx)(Ap,{children:`Full Name`}),t[25]=b):b=t[25];let x;t[26]===n.name?x=t[27]:(x=zp(n.name),t[26]=n.name,t[27]=x);let S;t[28]===x?S=t[29]:(S=(0,Y.jsxs)(Dp,{children:[y,(0,Y.jsxs)(kp,{children:[b,(0,Y.jsx)(jp,{children:x})]})]}),t[28]=x,t[29]=S);let C;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,Y.jsx)(Op,{children:(0,Y.jsx)(dp,{})}),t[30]=C):C=t[30];let w;t[31]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Y.jsx)(Ap,{children:`Employee ID`}),t[31]=w):w=t[31];let T;t[32]===n.additional_ref_number?T=t[33]:(T=zp(n.additional_ref_number),t[32]=n.additional_ref_number,t[33]=T);let E;t[34]===T?E=t[35]:(E=(0,Y.jsxs)(Dp,{children:[C,(0,Y.jsxs)(kp,{children:[w,(0,Y.jsx)(jp,{children:T})]})]}),t[34]=T,t[35]=E);let D;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,Y.jsx)(Op,{children:(0,Y.jsx)(ep,{})}),t[36]=D):D=t[36];let O;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,Y.jsx)(Ap,{children:`Gender`}),t[37]=O):O=t[37];let k;t[38]===n.gender?k=t[39]:(k=Bp(n.gender),t[38]=n.gender,t[39]=k);let A;t[40]===n.gender?A=t[41]:(A=n.gender===`M`?`Male`:n.gender===`F`?`Female`:zp(n.gender),t[40]=n.gender,t[41]=A);let j;t[42]!==k||t[43]!==A?(j=(0,Y.jsxs)(Dp,{children:[D,(0,Y.jsxs)(kp,{children:[O,(0,Y.jsx)(jp,{$empty:k,children:A})]})]}),t[42]=k,t[43]=A,t[44]=j):j=t[44];let M;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,Y.jsx)(Op,{children:(0,Y.jsx)(up,{})}),t[45]=M):M=t[45];let N;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,Y.jsx)(Ap,{children:`Date of Birth`}),t[46]=N):N=t[46];let P;t[47]===n.dob?P=t[48]:(P=Bp(n.dob),t[47]=n.dob,t[48]=P);let F;t[49]===n.dob?F=t[50]:(F=zp(n.dob),t[49]=n.dob,t[50]=F);let I;t[51]!==P||t[52]!==F?(I=(0,Y.jsxs)(Dp,{children:[M,(0,Y.jsxs)(kp,{children:[N,(0,Y.jsx)(jp,{$empty:P,children:F})]})]}),t[51]=P,t[52]=F,t[53]=I):I=t[53];let L;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(L=(0,Y.jsx)(Op,{children:(0,Y.jsx)(dp,{})}),t[54]=L):L=t[54];let R;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(R=(0,Y.jsx)(Ap,{children:`Grade Level`}),t[55]=R):R=t[55];let z;t[56]===n.grade_level?z=t[57]:(z=Bp(n.grade_level),t[56]=n.grade_level,t[57]=z);let B=n.grade_level<=1?`Executive`:`Team Lead`,V;t[58]!==z||t[59]!==B?(V=(0,Y.jsxs)(Dp,{children:[L,(0,Y.jsxs)(kp,{children:[R,(0,Y.jsx)(jp,{$empty:z,children:B})]})]}),t[58]=z,t[59]=B,t[60]=V):V=t[60];let H;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,Y.jsx)(Op,{children:(0,Y.jsx)(tp,{})}),t[61]=H):H=t[61];let U;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,Y.jsx)(Ap,{children:`Verification Status`}),t[62]=U):U=t[62];let ee;t[63]!==n.is_rejected||t[64]!==n.is_verified?(ee=n.is_rejected?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Yu,{}),`Rejected`]}):n.is_verified?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(lp,{}),` Verified`]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(fp,{}),` Pending`]}),t[63]=n.is_rejected,t[64]=n.is_verified,t[65]=ee):ee=t[65];let te;t[66]!==n.is_rejected||t[67]!==n.is_verified||t[68]!==ee?(te=(0,Y.jsxs)(Dp,{children:[H,(0,Y.jsxs)(kp,{children:[U,(0,Y.jsx)(Mp,{$verified:n.is_verified,$rejected:n.is_rejected,children:ee})]})]}),t[66]=n.is_rejected,t[67]=n.is_verified,t[68]=ee,t[69]=te):te=t[69];let ne;t[70]!==S||t[71]!==E||t[72]!==j||t[73]!==I||t[74]!==V||t[75]!==te?(ne=(0,Y.jsxs)(`div`,{children:[v,(0,Y.jsxs)(Ep,{children:[S,E,j,I,V,te]})]}),t[70]=S,t[71]=E,t[72]=j,t[73]=I,t[74]=V,t[75]=te,t[76]=ne):ne=t[76];let re;t[77]!==n.is_rejected||t[78]!==n.is_verified||t[79]!==n.prior_experience?(re=(n.is_verified||n.is_rejected)&&(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(Tp,{children:`Finance Team Remark`}),(0,Y.jsx)(Ep,{children:(0,Y.jsxs)(Dp,{$full:!0,is_verified:n.is_verified,children:[(0,Y.jsx)(Op,{is_verified:n.is_verified,children:(0,Y.jsx)(pp,{})}),(0,Y.jsxs)(kp,{children:[(0,Y.jsx)(Ap,{children:n.is_verified?`Verify Remark`:`Reject Remark`}),(0,Y.jsx)(jp,{$empty:Bp((n.prior_experience,n.prior_experience)),children:(n.prior_experience,zp(n.prior_experience||`--`))})]})]})})]}),t[77]=n.is_rejected,t[78]=n.is_verified,t[79]=n.prior_experience,t[80]=re):re=t[80];let ie;t[81]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,Y.jsx)(Tp,{children:`Contact Details`}),t[81]=ie):ie=t[81];let ae;t[82]===Symbol.for(`react.memo_cache_sentinel`)?(ae=(0,Y.jsx)(Op,{children:(0,Y.jsx)(np,{})}),t[82]=ae):ae=t[82];let oe;t[83]===Symbol.for(`react.memo_cache_sentinel`)?(oe=(0,Y.jsx)(Ap,{children:`Mobile Number`}),t[83]=oe):oe=t[83];let se;t[84]===n.mobile_number?se=t[85]:(se=Bp(n.mobile_number),t[84]=n.mobile_number,t[85]=se);let ce;t[86]===n.mobile_number?ce=t[87]:(ce=zp(n.mobile_number),t[86]=n.mobile_number,t[87]=ce);let le;t[88]!==se||t[89]!==ce?(le=(0,Y.jsxs)(Dp,{children:[ae,(0,Y.jsxs)(kp,{children:[oe,(0,Y.jsx)(jp,{$empty:se,children:ce})]})]}),t[88]=se,t[89]=ce,t[90]=le):le=t[90];let ue;t[91]===Symbol.for(`react.memo_cache_sentinel`)?(ue=(0,Y.jsx)(Op,{children:(0,Y.jsx)(ip,{})}),t[91]=ue):ue=t[91];let de;t[92]===Symbol.for(`react.memo_cache_sentinel`)?(de=(0,Y.jsx)(Ap,{children:`Email ID`}),t[92]=de):de=t[92];let fe;t[93]===n.email_id?fe=t[94]:(fe=Bp(n.email_id),t[93]=n.email_id,t[94]=fe);let pe;t[95]===n.email_id?pe=t[96]:(pe=zp(n.email_id),t[95]=n.email_id,t[96]=pe);let me;t[97]!==fe||t[98]!==pe?(me=(0,Y.jsxs)(Dp,{children:[ue,(0,Y.jsxs)(kp,{children:[de,(0,Y.jsx)(jp,{$empty:fe,children:pe})]})]}),t[97]=fe,t[98]=pe,t[99]=me):me=t[99];let he;t[100]!==le||t[101]!==me?(he=(0,Y.jsxs)(`div`,{children:[ie,(0,Y.jsxs)(Ep,{children:[le,me]})]}),t[100]=le,t[101]=me,t[102]=he):he=t[102];let ge;t[103]===Symbol.for(`react.memo_cache_sentinel`)?(ge=(0,Y.jsx)(Tp,{children:`Identity`}),t[103]=ge):ge=t[103];let _e;t[104]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,Y.jsx)(Op,{children:(0,Y.jsx)(op,{})}),t[104]=_e):_e=t[104];let ve;t[105]===Symbol.for(`react.memo_cache_sentinel`)?(ve=(0,Y.jsx)(Ap,{children:`Govt. ID Type`}),t[105]=ve):ve=t[105];let ye;t[106]===s.typeName?ye=t[107]:(ye=(0,Y.jsxs)(Dp,{children:[_e,(0,Y.jsxs)(kp,{children:[ve,(0,Y.jsx)(jp,{children:s.typeName})]})]}),t[106]=s.typeName,t[107]=ye);let be;t[108]===Symbol.for(`react.memo_cache_sentinel`)?(be=(0,Y.jsx)(Op,{children:(0,Y.jsx)(op,{})}),t[108]=be):be=t[108];let xe;t[109]===Symbol.for(`react.memo_cache_sentinel`)?(xe=(0,Y.jsx)(Ap,{children:`Govt. ID Number`}),t[109]=xe):xe=t[109];let Se;t[110]===s.number?Se=t[111]:(Se=(0,Y.jsxs)(Dp,{children:[be,(0,Y.jsxs)(kp,{children:[xe,(0,Y.jsx)(jp,{children:s.number})]})]}),t[110]=s.number,t[111]=Se);let Ce;t[112]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=(0,Y.jsx)(Op,{children:(0,Y.jsx)(ap,{})}),t[112]=Ce):Ce=t[112];let we;t[113]===Symbol.for(`react.memo_cache_sentinel`)?(we=(0,Y.jsx)(Ap,{children:`Uploaded Document`}),t[113]=we):we=t[113];let Te;t[114]===n.emp_file_1?Te=t[115]:(Te=(0,Y.jsxs)(Dp,{$full:!0,children:[Ce,(0,Y.jsxs)(kp,{children:[we,Bp(n.emp_file_1)?(0,Y.jsx)(Rp,{children:`—`}):i(n.emp_file_1)?(0,Y.jsx)(Fp,{children:(0,Y.jsx)(Ip,{src:n.emp_file_1,alt:`ID Document`})}):(0,Y.jsxs)(Lp,{href:n.emp_file_1,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Y.jsx)(sp,{}),(0,Y.jsx)(`span`,{children:`View Document`}),(0,Y.jsx)(cp,{})]})]})]}),t[114]=n.emp_file_1,t[115]=Te);let Ee;t[116]!==ye||t[117]!==Se||t[118]!==Te?(Ee=(0,Y.jsxs)(`div`,{children:[ge,(0,Y.jsxs)(Ep,{children:[ye,Se,Te]})]}),t[116]=ye,t[117]=Se,t[118]=Te,t[119]=Ee):Ee=t[119];let De;t[120]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,Y.jsx)(Tp,{children:`Address`}),t[120]=De):De=t[120];let Oe;t[121]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,Y.jsx)(Op,{children:(0,Y.jsx)(rp,{})}),t[121]=Oe):Oe=t[121];let ke;t[122]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,Y.jsx)(Ap,{children:`Address Line 1`}),t[122]=ke):ke=t[122];let Ae;t[123]===n.address_line_1?Ae=t[124]:(Ae=Bp(n.address_line_1),t[123]=n.address_line_1,t[124]=Ae);let je;t[125]===n.address_line_1?je=t[126]:(je=zp(n.address_line_1),t[125]=n.address_line_1,t[126]=je);let Me;t[127]!==Ae||t[128]!==je?(Me=(0,Y.jsxs)(Dp,{$full:!0,children:[Oe,(0,Y.jsxs)(kp,{children:[ke,(0,Y.jsx)(jp,{$empty:Ae,children:je})]})]}),t[127]=Ae,t[128]=je,t[129]=Me):Me=t[129];let Ne;t[130]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,Y.jsx)(Op,{children:(0,Y.jsx)(rp,{})}),t[130]=Ne):Ne=t[130];let Pe;t[131]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,Y.jsx)(Ap,{children:`Address Line 2`}),t[131]=Pe):Pe=t[131];let Fe;t[132]===n.address_line_2?Fe=t[133]:(Fe=Bp(n.address_line_2),t[132]=n.address_line_2,t[133]=Fe);let Ie;t[134]===n.address_line_2?Ie=t[135]:(Ie=zp(n.address_line_2),t[134]=n.address_line_2,t[135]=Ie);let Le;t[136]!==Fe||t[137]!==Ie?(Le=(0,Y.jsxs)(Dp,{$full:!0,children:[Ne,(0,Y.jsxs)(kp,{children:[Pe,(0,Y.jsx)(jp,{$empty:Fe,children:Ie})]})]}),t[136]=Fe,t[137]=Ie,t[138]=Le):Le=t[138];let Re;t[139]!==Me||t[140]!==Le?(Re=(0,Y.jsxs)(`div`,{children:[De,(0,Y.jsxs)(Ep,{children:[Me,Le]})]}),t[139]=Me,t[140]=Le,t[141]=Re):Re=t[141];let ze;t[142]!==ne||t[143]!==re||t[144]!==he||t[145]!==Ee||t[146]!==Re?(ze=(0,Y.jsxs)(wp,{children:[ne,re,he,Ee,Re]}),t[142]=ne,t[143]=re,t[144]=he,t[145]=Ee,t[146]=Re,t[147]=ze):ze=t[147];let Be;t[148]===r?Be=t[149]:(Be=(0,Y.jsx)(Np,{children:(0,Y.jsx)(Pp,{onClick:r,children:`Close`})}),t[148]=r,t[149]=Be);let Ve;t[150]!==_||t[151]!==ze||t[152]!==Be?(Ve=(0,Y.jsxs)(_p,{children:[_,ze,Be]}),t[150]=_,t[151]=ze,t[152]=Be,t[153]=Ve):Ve=t[153];let He;return t[154]!==c||t[155]!==Ve?(He=(0,Y.jsx)(gp,{onClick:c,children:Ve}),t[154]=c,t[155]=Ve,t[156]=He):He=t[156],He};function Hp(e){return/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(e)}function Up(e){if(!e)return{typeName:`--`,number:`--`};if(e.includes(`^`)){let t=e.split(`^`),n=t[0],r=t[1]||`--`;return{typeName:{A:`Aadhar Card`,P:`Pan Card`,D:`Driving License`}[n]||`--`,number:r}}return{typeName:`--`,number:e}}var Wp=W.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: 1.5rem;
  overflow-x: auto;
`,Gp=W.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?e.theme.colors.primary:`transparent`};
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.text};
  font-weight: ${e=>e.active?`600`:`500`};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: ${e=>e.active?e.theme.fontSizes.md:e.theme.fontSizes.sm};
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,Kp=e=>{let t=(0,vl.c)(9),{tabs:n,activeTab:r,setActiveTab:i}=e,a;if(t[0]!==r||t[1]!==i||t[2]!==n){let e;t[4]!==r||t[5]!==i?(e=e=>(0,Y.jsx)(Gp,{active:r===e.key,onClick:()=>i(e.key),children:e.label},e.key),t[4]=r,t[5]=i,t[6]=e):e=t[6],a=n.map(e),t[0]=r,t[1]=i,t[2]=n,t[3]=a}else a=t[3];let o;return t[7]===a?o=t[8]:(o=(0,Y.jsx)(Wp,{children:a}),t[7]=a,t[8]=o),o},qp=W.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 1rem; backdrop-filter: blur(4px);
`,Jp=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px; width: 100%; max-width: 750px;
  max-height: 95vh; display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
`,Yp=W.div`
  padding: 1.25rem 1.5rem; background: ${({theme:e})=>e.colors.primaryLight};
  display: flex; justify-content: space-between; align-items: center;
  border-radius: 16px 16px 0 0;
`,Xp=W.h2`
  margin: 0; font-size: 1.35rem; color: ${({theme:e})=>e.colors.primary}; font-weight: 600;
`,Zp=W.button`
  background: white; border: none; width: 32px; height: 32px; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s;

  &:hover { color: ${({theme:e})=>e.colors.error}; transform: rotate(90deg); }
`,Qp=W.div`
  padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: ${({theme:e})=>e.colors.backgroundAlt}; border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.primary}; border-radius: 10px; }
`,$p=W.div`
  padding: 1rem 1.5rem; border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex; justify-content: flex-end; gap: 0.75rem; flex-shrink: 0;
  background: ${({theme:e})=>e.colors.background}; border-radius: 0 0 16px 16px;

  @media (max-width: 480px) {
    flex-direction: column; button { width: 100%; }
  }
`,em=W.div` margin-bottom: 1rem; `,tm=W.label`
  display: flex; align-items: center; gap: 6px;
  font-weight: 600; font-size: 0.85rem; margin-bottom: 0.4rem;
  color: ${({theme:e})=>e.colors.text};
`,nm=W.span` color: ${({theme:e})=>e.colors.error}; `,rm=W.input`
  width: 100%; padding: 10px 12px; border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px; font-size: 0.95rem; transition: all 0.3s;

  &:focus {
    outline: none; border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,im=W.select`
  width: 100%; padding: 0.75rem; border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px; background: white;

  &:focus {
    outline: none; border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,am=W.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,om=W.div`
  border: 2px dashed ${({theme:e})=>e.colors.border}; border-radius: 8px;
  padding: 0.75rem; cursor: pointer; transition: all 0.2s;
  background: ${({theme:e})=>e.colors.background};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primaryLight}22;
  }
`,sm=W.div` display: flex; align-items: center; gap: 0.75rem; `,cm=W.div`
  font-size: 1.25rem; color: ${({theme:e})=>e.colors.primary};
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; background: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 8px; flex-shrink: 0;
`,lm=W.div`
  color: ${({theme:e})=>e.colors.text}; font-size: 0.85rem; font-weight: 500;
`,um=W.div`
  font-size: 0.72rem; color: ${({theme:e})=>e.colors.textLight};
`,dm=W.div`
  display: flex; align-items: center; gap: 0.5rem;
  background: ${({theme:e})=>e.colors.backgroundAlt}; padding: 0.5rem 0.75rem;
  border-radius: 8px; margin-top: 0.5rem; border: 1px solid ${({theme:e})=>e.colors.border};
  span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`,fm=e=>{let t=(0,vl.c)(94),{isOpen:n,onClose:r,modalMode:i,formData:a,formDataFile:o,onChange:s,onChangeUpload:c,onFileChange:l,onSubmit:u,removeFile:d,isLoading:f,employeeDetails:p}=e,m=f===void 0?!1:f,h=(0,v.useRef)(null),g=(0,v.useRef)(null),[_,y]=(0,v.useState)(`D`),[b,x]=(0,v.useState)(!1),S=pm,C;t[0]!==a||t[1]!==o||t[2]!==i?(C=()=>i===`UPLOAD`?{proofType:o.proofType||``,govt_id_number:o.govt_id_number||``,fileKey:S(o.file),profile_img:o.profile_img||null}:i===`UPDATE`?{...a}:null,t[0]=a,t[1]=o,t[2]=i,t[3]=C):C=t[3];let w=C,T;t[4]!==o||t[5]!==i||t[6]!==_?(T=(e,t,n)=>{if(i===`UPDATE`)return JSON.stringify(e)!==JSON.stringify(t);if(i===`UPLOAD`){if(_===`D`)return n.some(n=>e[n]!==t[n]);if(_===`P`)return!!o.newProfileFile}return!0},t[4]=o,t[5]=i,t[6]=_,t[7]=T):T=t[7];let E=T,D;t[8]!==w||t[9]!==n||t[10]!==i?(D=()=>{if(!n)return;let e=w();i===`UPLOAD`?g.current=e:h.current=e,x(!1)},t[8]=w,t[9]=n,t[10]=i,t[11]=D):D=t[11];let O;t[12]!==n||t[13]!==i?(O=[n,i],t[12]=n,t[13]=i,t[14]=O):O=t[14],(0,v.useEffect)(D,O);let k;t[15]!==a||t[16]!==o||t[17]!==E||t[18]!==n||t[19]!==i||t[20]!==_?(k=()=>{if(!n){x(!1);return}let e=!1;i===`UPDATE`?h.current&&(e=E(a,h.current)):i===`UPLOAD`?(_===`D`&&(e=E({proofType:o.proofType||``,govt_id_number:o.govt_id_number||``,fileKey:S(o.file)},g.current||{},[`proofType`,`govt_id_number`,`fileKey`])),_===`P`&&(e=!!o.newProfileFile)):i===`ADD`&&(e=!0),x(e)},t[15]=a,t[16]=o,t[17]=E,t[18]=n,t[19]=i,t[20]=_,t[21]=k):k=t[21];let A;if(t[22]!==a||t[23]!==o||t[24]!==n||t[25]!==i||t[26]!==_?(A=[a,o,_,i,n,S],t[22]=a,t[23]=o,t[24]=n,t[25]=i,t[26]=_,t[27]=A):A=t[27],(0,v.useEffect)(k,A),!n)return null;let j=i===`UPLOAD`,M=i===`ADD`,N;t[28]!==M||t[29]!==b||t[30]!==m?(N=()=>m?!0:M?!1:!b,t[28]=M,t[29]=b,t[30]=m,t[31]=N):N=t[31];let P=N,F;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(F=[{key:`D`,label:`Document Upload`},{key:`P`,label:`Profile Image`}].filter(Boolean),t[32]=F):F=t[32];let I=F,L;t[33]===r?L=t[34]:(L=()=>{r(),y(`D`)},t[33]=r,t[34]=L);let R;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(R={display:`flex`,flexDirection:`column`},t[35]=R):R=t[35];let z=j?`Upload Auditor's Document`:i===`UPDATE`?`Update Auditor's Details`:`Add Auditor's Details`,B;t[36]===z?B=t[37]:(B=(0,Y.jsx)(Xp,{children:z}),t[36]=z,t[37]=B);let V;t[38]===p?V=t[39]:(V=p&&(0,Y.jsxs)(Xp,{children:[p.name,`(`,p.emp_id,`)`]}),t[38]=p,t[39]=V);let H;t[40]!==B||t[41]!==V?(H=(0,Y.jsxs)(`div`,{style:R,children:[B,V]}),t[40]=B,t[41]=V,t[42]=H):H=t[42];let U;t[43]===r?U=t[44]:(U=()=>{r(),y(`D`)},t[43]=r,t[44]=U);let ee;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(ee=(0,Y.jsx)(eu,{}),t[45]=ee):ee=t[45];let te;t[46]===U?te=t[47]:(te=(0,Y.jsx)(Zp,{onClick:U,children:ee}),t[46]=U,t[47]=te);let ne;t[48]!==H||t[49]!==te?(ne=(0,Y.jsxs)(Yp,{children:[H,te]}),t[48]=H,t[49]=te,t[50]=ne):ne=t[50];let re;t[51]!==a||t[52]!==j||t[53]!==s?(re=!j&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(am,{children:[(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Auditor ID `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`text`,value:a.emp_id,onChange:e=>s(`emp_id`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Auditor Name `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`text`,value:a.name,onChange:e=>s(`name`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Gender `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsxs)(im,{value:a.gender,onChange:e=>s(`gender`,e.target.value),children:[(0,Y.jsx)(`option`,{value:`M`,children:`Male`}),(0,Y.jsx)(`option`,{value:`F`,children:`Female`})]})]})]}),(0,Y.jsxs)(am,{children:[(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Dob `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`date`,value:a.dob,onChange:e=>s(`dob`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Email Id `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`email`,value:a.email_id,onChange:e=>s(`email_id`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsx)(tm,{children:`Mobile Number`}),(0,Y.jsx)(rm,{type:`tel`,maxLength:`10`,value:a.mobile_number,onChange:e=>s(`mobile_number`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Grade `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsxs)(im,{value:a.grade_level,onChange:e=>s(`grade_level`,e.target.value),children:[(0,Y.jsx)(`option`,{value:`RET-G1-TL`,children:`Team Lead`}),(0,Y.jsx)(`option`,{value:`RET-G1-EX`,children:`Executive`})]})]})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Address line 1 `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`text`,value:a.address_line_1,onChange:e=>s(`address_line_1`,e.target.value)})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsx)(tm,{children:`Address line 2`}),(0,Y.jsx)(rm,{type:`text`,value:a.address_line_2,onChange:e=>s(`address_line_2`,e.target.value)})]})]}),t[51]=a,t[52]=j,t[53]=s,t[54]=re):re=t[54];let ie;t[55]!==o||t[56]!==j||t[57]!==c||t[58]!==l||t[59]!==d||t[60]!==_?(ie=j&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Kp,{tabs:I,activeTab:_,setActiveTab:y}),_===`P`?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(em,{children:[(0,Y.jsx)(tm,{children:`Upload Profile Image`}),(0,Y.jsxs)(om,{onClick:hm,children:[(0,Y.jsx)(`input`,{id:`file-upload1`,type:`file`,onChange:e=>l(e,`profile`),accept:`image/*`,style:{display:`none`}}),(0,Y.jsxs)(sm,{children:[(0,Y.jsx)(cm,{children:(0,Y.jsx)(Xl,{})}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(lm,{children:`Click to upload file`}),(0,Y.jsx)(um,{children:`JPG, PNG • Max 5MB`})]})]})]}),(o.newProfileFile||o.profile_img)&&(0,Y.jsx)(dm,{children:(0,Y.jsx)(`img`,{src:o.newProfileFile?URL.createObjectURL(o.newProfileFile):o.profile_img,alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}})})]})}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(am,{children:[(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Select Id Proof Type`,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsxs)(im,{id:`proofType`,name:`proofType`,value:o.proofType,onChange:e=>c(`proofType`,e.target.value),required:!0,children:[(0,Y.jsx)(`option`,{value:``,disabled:!0,children:`Select Id Proof`}),(0,Y.jsx)(`option`,{value:`A`,children:`Aadhar Card`}),(0,Y.jsx)(`option`,{value:`P`,children:`Pan Card`}),(0,Y.jsx)(`option`,{value:`D`,children:`Driving license`})]})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Enter ID Proof Number `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsx)(rm,{type:`text`,value:o.govt_id_number,onChange:e=>c(`govt_id_number`,e.target.value,!0)})]})]}),(0,Y.jsxs)(em,{children:[(0,Y.jsxs)(tm,{children:[`Upload ID Proof `,(0,Y.jsx)(nm,{children:`*`})]}),(0,Y.jsxs)(om,{onClick:gm,children:[(0,Y.jsx)(`input`,{id:`file-upload`,type:`file`,onChange:l,accept:`image/*,.pdf`,style:{display:`none`}}),(0,Y.jsxs)(sm,{children:[(0,Y.jsx)(cm,{children:(0,Y.jsx)(Xl,{})}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(lm,{children:`Click to upload file`}),(0,Y.jsx)(um,{children:`JPG, PNG, PDF • Max 5MB`})]})]})]}),o.file&&(0,Y.jsxs)(dm,{children:[o.file.type&&o.file.type?.startsWith(`image/`)?(0,Y.jsx)(`img`,{src:URL.createObjectURL(o.file),alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}}):(0,Y.jsx)(Nu,{color:Z.colors.text}),(0,Y.jsx)(`span`,{title:o.file.name,style:{color:Z.colors.text},children:o.file.name}),(0,Y.jsx)(`button`,{type:`button`,onClick:d,children:(0,Y.jsx)(eu,{})})]})]})]})]}),t[55]=o,t[56]=j,t[57]=c,t[58]=l,t[59]=d,t[60]=_,t[61]=ie):ie=t[61];let ae;t[62]!==re||t[63]!==ie?(ae=(0,Y.jsxs)(Qp,{children:[re,ie]}),t[62]=re,t[63]=ie,t[64]=ae):ae=t[64];let oe;t[65]===r?oe=t[66]:(oe=(0,Y.jsx)(Q,{variant:`outline`,onClick:()=>{r(),y(`D`)},children:`Cancel`}),t[65]=r,t[66]=oe);let se;t[67]!==i||t[68]!==u||t[69]!==_?(se=()=>i===`UPLOAD`?u(_):u(),t[67]=i,t[68]=u,t[69]=_,t[70]=se):se=t[70];let ce=P(),le;t[71]===i?le=t[72]:(le=i===`ADD`&&(0,Y.jsx)(hu,{style:{marginRight:6}}),t[71]=i,t[72]=le);let ue;t[73]===i?ue=t[74]:(ue=i===`UPDATE`&&(0,Y.jsx)(pp,{style:{marginRight:6}}),t[73]=i,t[74]=ue);let de;t[75]===i?de=t[76]:(de=i===`UPLOAD`&&(0,Y.jsx)(Xu,{style:{marginRight:6}}),t[75]=i,t[76]=de);let fe=j?`Upload`:i===`ADD`?`Add`:`Update`,pe;t[77]!==se||t[78]!==ce||t[79]!==le||t[80]!==ue||t[81]!==de||t[82]!==fe?(pe=(0,Y.jsxs)(Q,{variant:`primary`,onClick:se,disabled:ce,children:[le,ue,de,fe]}),t[77]=se,t[78]=ce,t[79]=le,t[80]=ue,t[81]=de,t[82]=fe,t[83]=pe):pe=t[83];let me;t[84]!==oe||t[85]!==pe?(me=(0,Y.jsxs)($p,{children:[oe,pe]}),t[84]=oe,t[85]=pe,t[86]=me):me=t[86];let he;t[87]!==ne||t[88]!==ae||t[89]!==me?(he=(0,Y.jsxs)(Jp,{onClick:mm,children:[ne,ae,me]}),t[87]=ne,t[88]=ae,t[89]=me,t[90]=he):he=t[90];let ge;return t[91]!==L||t[92]!==he?(ge=(0,Y.jsx)(qp,{onClick:L,children:he}),t[91]=L,t[92]=he,t[93]=ge):ge=t[93],ge};function pm(e){return e?typeof e==`string`?e:`${e.name}_${e.size}_${e.lastModified}`:``}function mm(e){return e.stopPropagation()}function hm(){return document.getElementById(`file-upload1`).click()}function gm(){return document.getElementById(`file-upload`).click()}var _m=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.backgroundAlt};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,vm=W.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textLight};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    text-align: center;
  }
`,ym=W.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,bm=W.button`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  border: 1px solid ${({theme:e,active:t})=>t?e.colors.primary:e.colors.border};
  background: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.card};
  color: ${({theme:e,active:t})=>t?`white`:e.colors.text};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  min-width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background: ${({theme:e,active:t})=>t?e.colors.primary:e.colors.backgroundAlt};
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
    min-width: 36px;
    font-size: ${({theme:e})=>e.fontSizes.xs};
  }
`,xm=W.span`
  padding: ${({theme:e})=>`0 ${e.spacing.xs}`};
  color: ${({theme:e})=>e.colors.textLight};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }
`,Sm=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-left: ${({theme:e})=>e.spacing.lg};
  padding-left: ${({theme:e})=>e.spacing.lg};
  border-left: 2px solid ${({theme:e})=>e.colors.border};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-left: ${({theme:e})=>e.spacing.md};
    padding-left: ${({theme:e})=>e.spacing.md};
    gap: ${({theme:e})=>e.spacing.md};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    width: 100%;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,Cm=W.select`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.card};
  color: ${({theme:e})=>e.colors.text};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  cursor: pointer;
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,wm=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
`,Tm=W.input`
  width: 60px;
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.fonts.body};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
    opacity: 0.5;
  }
`,Em=W(bm)`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  background: ${({theme:e})=>e.colors.secondary};
  border-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  min-width: auto;
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary};
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,Dm=W.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 500;
  white-space: nowrap;
`,Om=({totalItems:e=0,itemsPerPage:t=10,currentPage:n=1,onPageChange:r,siblingCount:i=1,showFirstLast:a=!1,showPageSize:o=!1,showGoToPage:s=!1})=>{let[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(typeof window<`u`?window.innerWidth:1200);(0,v.useEffect)(()=>{let e=()=>d(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let f=Math.ceil(e/t),p=u<=576,m=u<=768,h=()=>{let e=[],t=f,r=p?0:m?1:i,a=Math.max(n-r,1),o=Math.min(n+r,t),s=a>2,c=o<t-2;if(!s&&!c)for(let n=1;n<=t;n++)e.push(n);else if(s&&!c){for(let t=1;t<=(p?2:3);t++)e.push(t);e.push(`...`);for(let n=t-(p?1:2);n<=t;n++)e.push(n)}else if(!s&&c){for(let t=1;t<=(p?2:3);t++)e.push(t);e.push(`...`);for(let n=t-(p?1:2);n<=t;n++)e.push(n)}else{e.push(1),e.push(`...`);for(let t=a;t<=o;t++)e.push(t);e.push(`...`),e.push(t)}return e},g=e=>{e<1||e>f||e===n||(r(e),l(``))},_=e=>{e.preventDefault();let t=parseInt(c);!isNaN(t)&&t>=1&&t<=f&&g(t)},y=(n-1)*t+1,b=Math.min(n*t,e);return(0,Y.jsxs)(_m,{children:[(0,Y.jsxs)(vm,{children:[`Showing `,y.toLocaleString(),` to `,b.toLocaleString(),` of `,e.toLocaleString(),` audits`]}),(0,Y.jsxs)(ym,{children:[a&&!p&&(0,Y.jsx)(bm,{onClick:()=>g(1),disabled:n===1,children:`«`}),(0,Y.jsx)(bm,{onClick:()=>g(n-1),disabled:n===1,children:`‹`}),h().map((e,t)=>e===`...`?(0,Y.jsx)(xm,{children:`...`},`ellipsis-${t}`):(0,Y.jsx)(bm,{active:n===e,onClick:()=>g(e),children:e},e)),(0,Y.jsx)(bm,{onClick:()=>g(n+1),disabled:n===f,children:`›`}),a&&!p&&(0,Y.jsx)(bm,{onClick:()=>g(f),disabled:n===f,children:`»`})]}),(o||s)&&(0,Y.jsxs)(Sm,{children:[o&&(0,Y.jsxs)(Cm,{value:t,onChange:e=>r(1,parseInt(e.target.value)),children:[(0,Y.jsx)(`option`,{value:10,children:`10 / page`}),(0,Y.jsx)(`option`,{value:25,children:`25 / page`}),(0,Y.jsx)(`option`,{value:50,children:`50 / page`}),(0,Y.jsx)(`option`,{value:100,children:`100 / page`})]}),s&&(0,Y.jsxs)(wm,{children:[(0,Y.jsx)(Tm,{type:`number`,min:1,max:f,value:c,onChange:e=>l(e.target.value),placeholder:`Page`,onKeyPress:e=>e.key===`Enter`&&_(e)}),(0,Y.jsx)(Em,{onClick:_,disabled:!c,children:`Go`})]}),(0,Y.jsxs)(Dm,{children:[n,`/`,f]})]})]})},km=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${Z.spacing.lg};
  margin-bottom: ${Z.spacing.xl};

  @media (max-width: ${Z.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Am=W.div`
  display: flex;
  gap: ${Z.spacing.md};
`,jm=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  p{
    color: ${({theme:e})=>e.colors.textLight};
    font-size: 0.9rem;
  }
`,Mm=W.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  overflow-y: hidden;

  th {
    text-align: left;
    padding: 12px;
    background: #f3f4f6;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`,Nm=W.div`
  display: flex;
  gap: ${Z.spacing.md};
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${Z.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,Pm=W.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: white;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 45%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Fm=W.input`
  flex: 1;
  padding: ${Z.spacing.sm} ${Z.spacing.md};
  border: 1px solid ${Z.colors.border};
  border-radius: ${Z.borderRadius.md};
  font-family: ${Z.fonts.body};
  font-size: ${Z.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${Z.colors.primary};
  }
  
  &::placeholder {
    color: ${Z.colors.textLight};
  }
`,Im=()=>{let{profile:e}=hl(),t=localStorage.getItem(`cust_emp_id`),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)([]),[u,d]=(0,v.useState)({o_emp_id:``,emp_id:``,name:``,gender:``,grade_level:``,dob:``,email_id:``,mobile_number:``,address_line_1:``,address_line_2:``,file:null}),[f,p]=(0,v.useState)({emp_id:``,proofType:``,govt_id_number:``,file:null,profile_img:null,newProfileFile:null}),[m,h]=(0,v.useState)(``),[g,_]=(0,v.useState)(``),[y,b]=(0,v.useState)(`All`),[x,S]=(0,v.useState)(null),[C,w]=(0,v.useState)(!1),[T,E]=(0,v.useState)(10),[D,O]=(0,v.useState)(1);(0,v.useEffect)(()=>{k()},[]);let k=async()=>{s(!0);try{l((await il({rm_emp_id:t})).data)}catch(e){G.error(e.response.message||e.message)}finally{s(!1)}},A=e=>e<=1?`EX`:e===2?`TL`:`-`,j=e=>e?`VERIFIED`:`UNVERIFIED`,M=(e=>{let t={total:e.length,VERIFIED:{TL:0,EX:0},UNVERIFIED:{TL:0,EX:0}};return e.forEach(e=>{let n=A(e.grade_level),r=j(e.is_verified);t[r]&&t[r][n]!==void 0&&t[r][n]++}),t})(c),N=c.filter(e=>{let t=A(e.grade_level),n=j(e.is_verified),r=g?.toLowerCase()||``,i=e.name?.toLowerCase().includes(r)||e.emp_id?.toLowerCase().includes(r)||e.additional_ref_number?.includes(r)||e.emp_id?.includes(r),a=!0;y!==`All`&&(y===`RET-G1-TL`?a=t===`TL`:y===`RET-G1-EX`&&(a=t===`EX`));let o=!0;return m?.status&&n!==m.status&&(o=!1),m?.grade&&t!==m.grade&&(o=!1),i&&a&&o}),P=(0,v.useMemo)(()=>{let e=(D-1)*T,t=e+T;return N.slice(e,t)},[N,D,T]),F=(e,t=T)=>{O(e),t!==T&&(E(t),O(1))},I=[{icon:(0,Y.jsx)(Bl,{}),label:`Total Auditors`,value:M.total,color:`primary`,sections:[{items:[{label:`Team Lead`,value:M.VERIFIED.TL+M.UNVERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.VERIFIED.EX+M.UNVERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:null,grade:null}),onItemClick:e=>h({status:null,grade:e.subStatus})},{icon:(0,Y.jsx)(Yl,{}),label:`Verified`,value:M.VERIFIED.TL+M.VERIFIED.EX,color:`success`,sections:[{items:[{label:`Team Lead`,value:M.VERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.VERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:`VERIFIED`,grade:null}),onItemClick:e=>h({status:`VERIFIED`,grade:e.subStatus})},{icon:(0,Y.jsx)(Hl,{}),label:`Not verified`,value:M.UNVERIFIED.TL+M.UNVERIFIED.EX,color:`secondary`,sections:[{items:[{label:`Team Lead`,value:M.UNVERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.UNVERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:`UNVERIFIED`,grade:null}),onItemClick:e=>h({status:`UNVERIFIED`,grade:e.subStatus})}],L=(e,t)=>{d(n=>({...n,[e]:t}))},R=(e,t)=>{p(n=>({...n,[e]:t}))};return(0,Y.jsxs)(Jd,{title:`Auditor Management`,children:[(0,Y.jsxs)(jm,{children:[(0,Y.jsx)(`div`,{children:(0,Y.jsx)(`p`,{children:`View and manage all auditors`})}),(0,Y.jsxs)(Q,{variant:`primary`,onClick:()=>{d({emp_id:``,name:``,gender:`M`,email_id:``,grade_level:`RET-G1-TL`,mobile_number:``,address_line_1:``,address_line_2:``,file:null}),r(!0),a(`ADD`)},children:[(0,Y.jsx)(hu,{}),` Add New Auditor`]})]}),(0,Y.jsx)(km,{children:I.map(e=>(0,Y.jsx)(lf,{icon:e.icon,label:e.label,value:e.value,color:e.color,sections:e.sections,onClick:()=>{e.onClick(),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},onItemClick:t=>{e.onItemClick(t),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}}))}),(0,Y.jsxs)(mf,{hoverable:!1,children:[(0,Y.jsxs)(Nm,{children:[(0,Y.jsx)(Fm,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:g,onChange:e=>_(e.target.value)}),(0,Y.jsxs)(Pm,{name:`selectedStatus`,value:y,onChange:e=>b(e.target.value),children:[(0,Y.jsx)(`option`,{value:`All`,children:`All`}),(0,Y.jsx)(`option`,{value:`RET-G1-TL`,children:`Team Lead`}),(0,Y.jsx)(`option`,{value:`RET-G1-EX`,children:`Executive`})]}),(0,Y.jsx)(Q,{variant:`outline`,onClick:()=>{_(``),b(`All`),h(null)},children:`Clear Filters`})]}),(0,Y.jsxs)(Mm,{children:[(0,Y.jsx)(`thead`,{children:(0,Y.jsxs)(`tr`,{children:[(0,Y.jsxs)(`th`,{children:[`System Ref ID`,(0,Y.jsx)(`br`,{}),`Auditor ID`]}),(0,Y.jsx)(`th`,{children:`Name`}),(0,Y.jsx)(`th`,{children:`Mobile`}),(0,Y.jsx)(`th`,{children:`Grade`}),(0,Y.jsx)(`th`,{children:`Document?`}),(0,Y.jsx)(`th`,{children:`Status`}),(0,Y.jsx)(`th`,{children:`Action`})]})}),(0,Y.jsx)(`tbody`,{children:o?(0,Y.jsx)(`tr`,{children:(0,Y.jsx)(`td`,{colSpan:7,style:{textAlign:`center`,padding:`1rem`},children:`Loading...`})}):P.length?P.map(e=>(0,Y.jsxs)(`tr`,{children:[(0,Y.jsxs)(`td`,{children:[e.emp_id,(0,Y.jsx)(`br`,{}),(0,Y.jsx)(gf,{variant:e.gender===`M`?`settle`:`pink`,children:e.additional_ref_number||`--`})]}),(0,Y.jsx)(`td`,{children:e.name}),(0,Y.jsx)(`td`,{children:e.mobile_number||`--`}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(gf,{variant:e.grade_level<=1?`info`:`forward`,children:e.grade_level<=1?`Executive`:`Team Lead`})}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(gf,{variant:e.ref_govt_id_number&&e.emp_file_1?`success`:`error`,children:e.ref_govt_id_number&&e.emp_file_1?`Yes`:`No`})}),(0,Y.jsx)(`td`,{children:(0,Y.jsx)(gf,{variant:e.is_rejected?`reject`:e.is_verified?`success`:`error`,children:e.is_rejected?`Rejected`:e.is_verified?`Verified`:`Not verified`})}),(0,Y.jsx)(`td`,{children:(0,Y.jsxs)(Am,{children:[(0,Y.jsx)(Q,{title:`View Deatils`,iconOnly:!0,onClick:()=>{S(e),w(!0)},children:(0,Y.jsx)(Zu,{})}),(0,Y.jsx)(Q,{title:`Upload Document`,iconOnly:!0,onClick:()=>{let t=``,n=e.ref_govt_id_number||``;if(n.includes(`^`)){let e=n.split(`^`);t=e[0],n=e[1]}p({emp_id:e.emp_id,proofType:t,govt_id_number:n,file:e.emp_file_1||null,isExisting:!!(e.ref_govt_id_number&&e.emp_file_1),profile_img:e.image,newProfileFile:null}),a(`UPLOAD`),r(!0),S(e)},children:(0,Y.jsx)(Xu,{})}),(0,Y.jsx)(Q,{title:`Update Details`,onClick:()=>{d({o_emp_id:e.emp_id,emp_id:e.additional_ref_number,name:e.name,gender:e.gender,grade_level:e.grade_level<=1?`RET-G1-EX`:`RET-G1-TL`,dob:$(e.dob,!0),email_id:e.email_id||``,mobile_number:e.mobile_number||``,address_line_1:e.address_line_1||``,address_line_2:e.address_line_2||``}),r(!0),a(`UPDATE`),S(e)},children:(0,Y.jsx)($u,{})})]})})]},e.id)):(0,Y.jsx)(`tr`,{children:(0,Y.jsx)(`td`,{colSpan:7,style:{textAlign:`center`,padding:`1rem`},children:`No data found`})})})]}),(0,Y.jsx)(Om,{totalItems:N.length,itemsPerPage:T,currentPage:D,onPageChange:F,siblingCount:2})]}),C&&(0,Y.jsx)(Vp,{employee:x,onClose:()=>{S(null),w(!1)}}),(0,Y.jsx)(fm,{isOpen:n,onClose:()=>{r(!1),a(``),S(``),p({})},modalMode:i,formData:u,formDataFile:f,onChange:L,onChangeUpload:R,onFileChange:(e,t=`doc`)=>{let n=e.target.files[0];if(n){if(n.size>5*1024*1024){G.error(`File size must be less than 5MB`);return}R(t===`profile`?`newProfileFile`:`file`,n)}},onSubmit:i===`UPLOAD`?async e=>{try{if(e===`P`){let e=x?.image?`UPDATE_IMAGE`:`ADD_IMAGE`;if(!f.newProfileFile){G.error(`Please upload profile image`);return}let t=new FormData;t.append(`emp_id`,f.emp_id),t.append(`call_mode`,e),f.newProfileFile&&typeof f.newProfileFile!=`string`&&t.append(`uploaded_file`,f.newProfileFile);let n=await tl(t);if(n&&n.status===200){G.success(e===`ADD_IMAGE`?`Profile Image successfully added!`:`Profile Image successfully updated!`),await k(),r(!1),a(``);return}}else{let e=!!f.proofType,t=!!f.govt_id_number?.trim(),n=!!f.file,i=f.isExisting?`UPDATE`:`ADD`;if(!e){G.error(`Govt ID type is required`);return}if(!t){G.error(`Govt ID number is required`);return}if(i===`ADD`&&!n){G.error(`Please upload a file`);return}if(i===`UPDATE`&&!n){G.error(`File cannot be empty in update`);return}let o=new FormData;o.append(`emp_id`,f.emp_id),o.append(`govt_id_number`,`${f.proofType}^${f.govt_id_number}`),o.append(`call_mode`,i),f.file&&typeof f.file!=`string`&&o.append(`uploaded_file`,f.file);let s=await tl(o);if(s&&s.status===200){G.success(i===`ADD`?`Document successfully added!`:`Document successfully updated!`),await k(),r(!1),a(``);return}}}catch(e){G.error(e?.response?.data?.message||`Something went wrong. Please try again later!`)}}:async()=>{if(!u.emp_id||!u.name||!u.gender||!u.dob||!u.email_id||!u.address_line_1){G.error(`Please fill all required fields`);return}let t=new Date,n=new Date(u.dob),o=t.getFullYear()-n.getFullYear(),s=t.getMonth()-n.getMonth();if((s<0||s===0&&t.getDate()<n.getDate())&&o--,o<18){G.error(`Employee must be at least 18 years old`);return}if(u.mobile_number.length<10){G.error(`Employee mobile number must be 10 digits`);return}try{(await el({emp_id:u.o_emp_id||``,additional_ref_number:u.emp_id||``,name:u.name,gender:u.gender,grade_id:u.grade_level,dob:bf(u.dob),email_id:u.email_id,mobile_number:u.mobile_number,address_line_1:u.address_line_1||``,address_line_2:u.address_line_2||``,call_mode:i===`ADD`?`ADD_RETAIN`:`UPDATE_RETAIN`,manager_mobile:e.mobile_number})).status===200&&(G.success(i===`ADD`?`Employee successfully added`:`Employee successfully updated`),await k(),r(!1),a(``))}catch(e){G.error(e?.response?.data?.message||`Something went wrong. Please try again later!!!`)}},removeFile:()=>{p(e=>({...e,file:null}))},isLoading:o,employeeDetails:x})]})},Lm=Oi`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Rm=W.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,zm=W.div`
  flex: 1;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Bm=W.div`
  max-width: 500px;
  animation: ${Lm} 1s ease;
     @media (max-width: 768px) {
    margin-top: 100px;
  }
`,Vm=W.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Hm=W.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Um=W.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.background};
  animation: ${Lm} 1s ease 0.3s backwards;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Wm=W.form`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 80px;
`,Gm=W.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.colors.primary};
`,Km=W.div`
  margin-bottom: 1.5rem;
`,qm=W.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Jm=W.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,Ym=W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  color: ${({theme:e})=>e.colors.textLight};
`,Xm=W.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  outline: none;
  font-size: 1rem;
`,Zm=W.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}dd;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;W.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textLight};
  
  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,W.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,W.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }`;var Qm=()=>{let e=(0,vl.c)(34),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={mobile:``,password:``,company:``},e[0]=t):t=e[0];let[n,r]=(0,v.useState)(t),[i,a]=(0,v.useState)(!1),o;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],e[1]=o):o=e[1];let[,s]=(0,v.useState)(o),[c]=(0,v.useState)(`Mobile Number`),{customerlogin:l}=hl(),u=window.location.pathname,d=Ne(),f;e[2]===d?f=e[3]:(f=()=>{(async()=>{let e=await $c();if(e.status===200)if(u===`/retainer/login`){let t=e.data?.filter($m);s(t),t.length>0&&(r(e=>({...e,company:t[0].name})),localStorage.setItem(`dbName`,t[0].name.split(`_`).slice(1).join(`_`)))}else s(e.data)})(),localStorage.getItem(`customerToken`)&&d(`/dashboard`)},e[2]=d,e[3]=f);let p;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(p=[],e[4]=p):p=e[4],(0,v.useEffect)(f,p);let m;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(m=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))},e[5]=m):m=e[5];let h=m,g;e[6]!==l||e[7]!==n.company||e[8]!==n.mobile||e[9]!==n.password?(g=async e=>{e.preventDefault(),a(!0),setTimeout(async()=>{n.mobile&&n.password?await l({mobile:n.mobile,password:n.password,company:n?.company?.split(`_`).slice(1).join(`_`)||`Acme Inc.`}):G.error(`Invalid credentials. Please try again.`),a(!1)},500)},e[6]=l,e[7]=n.company,e[8]=n.mobile,e[9]=n.password,e[10]=g):g=e[10];let _=g,y;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,Y.jsx)(zm,{children:(0,Y.jsxs)(Bm,{children:[(0,Y.jsx)(Vm,{children:`Welcome to Atomwalk`}),(0,Y.jsx)(Hm,{children:`A comprehensive retainer and associate auditors management portal.`})]})}),e[11]=y):y=e[11];let b;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Y.jsx)(Gm,{children:`Login to your account`}),e[12]=b):b=e[12];let x;e[13]===c?x=e[14]:(x=(0,Y.jsx)(qm,{htmlFor:`mobile`,children:c}),e[13]=c,e[14]=x);let S;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,Y.jsx)(Ym,{children:(0,Y.jsx)(Vl,{})}),e[15]=S):S=e[15];let C=`Enter your `+c,w;e[16]!==n.mobile||e[17]!==C?(w=(0,Y.jsxs)(Jm,{children:[S,(0,Y.jsx)(Xm,{type:`text`,id:`mobile`,name:`mobile`,placeholder:C,value:n.mobile,onChange:h,required:!0})]}),e[16]=n.mobile,e[17]=C,e[18]=w):w=e[18];let T;e[19]!==w||e[20]!==x?(T=(0,Y.jsxs)(Km,{children:[x,w]}),e[19]=w,e[20]=x,e[21]=T):T=e[21];let E;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,Y.jsx)(qm,{htmlFor:`password`,children:`Pin`}),e[22]=E):E=e[22];let D;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,Y.jsx)(Ym,{children:(0,Y.jsx)(Su,{})}),e[23]=D):D=e[23];let O;e[24]===n.password?O=e[25]:(O=(0,Y.jsxs)(Km,{children:[E,(0,Y.jsxs)(Jm,{children:[D,(0,Y.jsx)(Xm,{type:`password`,id:`password`,name:`password`,placeholder:`Enter your pin`,value:n.password,onChange:h,required:!0})]})]}),e[24]=n.password,e[25]=O);let k=i?`Logging in...`:`Login`,A;e[26]!==i||e[27]!==k?(A=(0,Y.jsx)(Zm,{type:`submit`,disabled:i,children:k}),e[26]=i,e[27]=k,e[28]=A):A=e[28];let j;return e[29]!==_||e[30]!==T||e[31]!==O||e[32]!==A?(j=(0,Y.jsxs)(Rm,{children:[y,(0,Y.jsx)(Um,{children:(0,Y.jsxs)(Wm,{onSubmit:_,children:[b,T,O,A]})})]}),e[29]=_,e[30]=T,e[31]=O,e[32]=A,e[33]=j):j=e[33],j};function $m(e){return e.ref_cust_name===`DEMO Allocation Project Management (Atomwalk)`}async function eh(){try{let e=localStorage.getItem(`cust_emp_id`),t={};return e&&(t.emp_id=e),await Jc(Ic,t)}catch(e){throw console.error(`Error fetching profile info:`,e),e}}var th=W.div`
  background: linear-gradient(120deg, ${({theme:e})=>e.colors.primary} 0%, ${({theme:e})=>e.colors.secondary} 100%);
  border-radius: ${({theme:e})=>e.borderRadius?.lg||`16px`};
  padding: ${({theme:e})=>e.spacing?.lg||`2rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`2rem`};
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  h1 {
    margin: 0;
    font-size: ${({theme:e})=>e.fontSizes?.[`2xl`]||`2rem`};
    font-weight: 700;
    color: white;
  }
  
  p {
    opacity: 0.8;
    margin: 0.5rem 0 0;
  }
`,nh=W.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.spacing?.lg||`2rem`};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0;
  }
`,rh=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.lg||`2rem`};
  @media (max-width: 600px) {
    gap: 0.5rem;
    width: 100%;
  }
`,ih=W(mf)`
  border-radius: ${({theme:e})=>e.borderRadius?.lg||`16px`};
  box-shadow: ${({theme:e})=>e.shadows?.lg||`0 8px 24px rgba(0, 0, 0, 0.08)`};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease, box-shadow 0.3s ease`};
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  @media (max-width: 600px) {
    padding: 0.5rem !important;
    min-width: 0;
    box-sizing: border-box;
  }
  
  &:hover {
    transform: ${({theme:e})=>e.cardStyle?.animation?`translateY(-5px)`:`none`};
    box-shadow: ${({theme:e})=>e.cardStyle?.animation?`0 12px 30px rgba(0, 0, 0, 0.12)`:e.shadows?.lg||`0 8px 24px rgba(0, 0, 0, 0.08)`};
  }
`,ah=W.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: ${({theme:e})=>e.borderRadius?.lg||`16px`};
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.backgroundAlt};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,oh=W.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({theme:e})=>e.spacing?.md||`1rem`} ${({theme:e})=>e.spacing?.md||`1rem`};
`,sh=W.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.fontSizes?.xl||`1.75rem`};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`,ch=W.div`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  text-align: center;
  font-size: 1.1rem;
`;W.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,W(gf)`
  padding: 0.5rem 1rem;
  border-radius: ${({theme:e})=>e.borderRadius?.full||`20px`};
  font-weight: 600;
  font-size: 0.85rem;
  
  &.primary {
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: white;
    box-shadow: 0 4px 10px ${({theme:e})=>e.colors.shadow};
  }
  
  &.secondary {
    background: linear-gradient(to right, #11998e, #38ef7d);
    color: white;
    box-shadow: 0 4px 10px rgba(17, 153, 142, 0.3);
  }
`;var lh=W.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing?.sm||`0.8rem`} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: ${({theme:e})=>e.colors.primary};
    margin-right: ${({theme:e})=>e.spacing?.md||`1rem`};
    min-width: 1.2rem;
    font-size: ${({theme:e})=>e.icons?.size||`1.2rem`};
  }
  
  span {
    font-weight: 500;
    color: ${({theme:e})=>e.colors.text};
  }
`,uh=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.lg||`2rem`};
  @media (max-width: 600px) {
    width: 100%;
  }
`,dh=W.h3`
  margin: 0 0 ${({theme:e})=>e.spacing?.lg||`1.5rem`} 0;
  font-size: ${({theme:e})=>e.fontSizes?.lg||`1.4rem`};
  color: ${({theme:e})=>e.colors.text};
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${({theme:e})=>e.colors.border};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  }
`,fh=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,ph=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  box-shadow: ${({theme:e})=>e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.05)`};
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease, box-shadow 0.3s ease`};
  border-top: 4px solid ${e=>e.color||e.theme.colors.primary};
  
  &:hover {
    transform: ${({theme:e})=>e.cardStyle?.animation?`translateY(-3px)`:`none`};
    box-shadow: ${({theme:e})=>e.cardStyle?.animation?`0 8px 16px rgba(0, 0, 0, 0.1)`:e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.05)`};
  }
`,mh=W.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: ${e=>e.iconColor||e.theme.colors.primary};
  }
`,hh=W.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text};
`,gh=W.div`
  padding: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  background: linear-gradient(to right, ${({theme:e})=>e.colors.backgroundAlt}, ${({theme:e})=>e.colors.background});
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.05);
`,_h=W.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }
`,vh=W.input`
  padding: 0.9rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`8px`};
  flex: 1;
  font-size: 1rem;
  letter-spacing: 0.1em;
  background: ${({theme:e})=>e.colors.card};
  color: ${({theme:e})=>e.colors.text};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
    letter-spacing: 0;
  }
`,yh=W.div`
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`8px`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  display: flex;
  align-items: center;
  
  &.success {
    background-color: ${({theme:e})=>e.colors.success}22;
    color: ${({theme:e})=>e.colors.success};
    border-left: 4px solid ${({theme:e})=>e.colors.success};
  }
  
  &.error {
    background-color: ${({theme:e})=>e.colors.error}22;
    color: ${({theme:e})=>e.colors.error};
    border-left: 4px solid ${({theme:e})=>e.colors.error};
  }
  
  svg {
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }
`,bh=W.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,xh=W(Q)`
  padding: 0.75rem 1.5rem;
  border-radius: ${({theme:e})=>e.buttons?.borderRadius||`8px`};
  font-weight: 600;
  transition: ${({theme:e})=>e.transitions?.normal||`all 0.3s ease`};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &.primary {
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    border: none;
    color: white;
    box-shadow: ${({theme:e})=>e.buttons?.shadow?`0 4px 10px `+e.colors.shadow:`none`};
    
    &:hover {
      box-shadow: ${({theme:e})=>e.buttons?.shadow&&e.buttons?.animation?`0 6px 15px `+e.colors.shadow:e.buttons?.shadow?`0 4px 10px `+e.colors.shadow:`none`};
      transform: ${({theme:e})=>e.buttons?.animation?`translateY(-2px)`:`none`};
    }
  }
  
  &.outline {
    background: ${({theme:e})=>e.colors.card};
    border: 2px solid ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primary};
    
    &:hover {
      background: ${({theme:e})=>e.colors.primaryLight};
      transform: ${({theme:e})=>e.buttons?.animation?`translateY(-2px)`:`none`};
    }
  }
  
  &.danger {
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    border: none;
    color: white;
    
    &:hover {
      box-shadow: ${({theme:e})=>e.buttons?.shadow&&e.buttons?.animation?`0 6px 15px rgba(255, 75, 43, 0.4)`:`none`};
      transform: ${({theme:e})=>e.buttons?.animation?`translateY(-2px)`:`none`};
    }
  }
`,Sh=W.div`
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`2rem`};
`,Ch=W.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`2rem`};
  overflow-x: auto;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
`,wh=W.button`
  padding: ${({theme:e})=>e.spacing?.md||`1rem`} ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  background: transparent;
  border: none;
  border-bottom: 3px solid ${e=>e.active?e.theme.colors.primary:`transparent`};
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.textLight};
  font-weight: ${e=>e.active?`600`:`500`};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 120px;
  @media (max-width: 600px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.95rem;
    min-width: 90px;
  }
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.backgroundAlt};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;W.div`
  background: linear-gradient(135deg, ${e=>e.bgStart||e.theme.colors.primary}, ${e=>e.bgEnd||e.theme.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  padding: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  position: relative;
`,W.div`
  font-size: ${({theme:e})=>e.fontSizes?.[`4xl`]||`2.5rem`};
  font-weight: 700;
  margin-bottom: 0.5rem;
`,W.div`
  font-size: ${({theme:e})=>e.fontSizes?.md||`1rem`};
  opacity: 0.9;
  font-weight: 500;
`,W.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  opacity: 0.15;
`;var Th=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`,Eh=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.1)`};
  transition: ${({theme:e})=>e.transitions?.normal||`all 0.3s ease`};
  cursor: pointer;
  border: 2px solid ${e=>e.isActive?e.theme.colors.primary:`transparent`};
  
  &:hover {
    transform: ${({theme:e})=>e.cardStyle?.animation?`translateY(-5px)`:`none`};
    box-shadow: ${({theme:e})=>e.cardStyle?.animation?`0 8px 20px rgba(0, 0, 0, 0.15)`:e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.1)`};
  }
`,Dh=W.div`
  height: 120px;
  background: linear-gradient(135deg, ${e=>e.colors.primary}, ${e=>e.colors.secondary});
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60%;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 20px;
    width: 80%;
    height: 40px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
`,Oh=W.div`
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,kh=W.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,Ah=W.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 0.8rem;
  }
`,jh=W.div`
  margin-right: 0.5rem;
  color: ${e=>e.color||e.theme.colors.primary};
`,Mh=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  box-shadow: ${({theme:e})=>e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.05)`};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Nh=W.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
`,Ph=W.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`8px`};
  cursor: pointer;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius?.sm||`8px`};
  }
`,Fh=W.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  text-align: center;
`,Ih=W.div`
  margin-top: ${({theme:e})=>e.spacing?.lg||`2rem`};
`,Lh=W.div`
  max-width: 600px;
  margin: 0 auto;
`,Rh=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius?.lg||`12px`};
  box-shadow: ${({theme:e})=>e.shadows?.md||`0 4px 12px rgba(0, 0, 0, 0.1)`};
  overflow: hidden;
  
  &.component-preview-card {
    border-radius: ${({theme:e})=>e.uiPreferences?.cardStyle?.borderRadius===`square`?`0`:e.uiPreferences?.cardStyle?.borderRadius===`rounded`?`16px`:`8px`};
    box-shadow: ${({theme:e})=>e.uiPreferences?.cardStyle?.shadow===`none`?`none`:e.uiPreferences?.cardStyle?.shadow===`heavy`?`0 15px 25px rgba(0, 0, 0, 0.15)`:`0 4px 12px rgba(0, 0, 0, 0.1)`};
    transition: ${({theme:e})=>e.uiPreferences?.cardStyle?.animation?`transform 0.3s ease, box-shadow 0.3s ease`:`none`};
    
    &:hover {
      transform: ${({theme:e})=>e.uiPreferences?.cardStyle?.animation?`translateY(-5px)`:`none`};
      box-shadow: ${({theme:e})=>e.uiPreferences?.cardStyle?.animation&&e.uiPreferences?.cardStyle?.shadow!==`none`?`0 20px 30px rgba(0, 0, 0, 0.15)`:e.uiPreferences?.cardStyle?.shadow===`none`?`none`:e.uiPreferences?.cardStyle?.shadow===`heavy`?`0 15px 25px rgba(0, 0, 0, 0.15)`:`0 4px 12px rgba(0, 0, 0, 0.1)`};
    }
  }
`,zh=W.div`
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`,Bh=W.div`
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  color: ${({theme:e})=>e.colors.text};
`,Vh=W.button`
  padding: 0.75rem 1.25rem;
  margin-right: 10px;
  border: none;
  border-radius: ${({theme:e})=>e.uiPreferences?.buttonStyle?.borderRadius===`0`?`0`:e.uiPreferences?.buttonStyle?.borderRadius===`9999px`?`9999px`:`8px`};
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ${({theme:e})=>e.uiPreferences?.buttonStyle?.animation?`all 0.3s ease`:`none`};
  box-shadow: ${({theme:e})=>e.uiPreferences?.buttonStyle?.shadow?`0 4px 6px rgba(0, 0, 0, 0.1)`:`none`};
  
  &:hover {
    transform: ${({theme:e})=>e.uiPreferences?.buttonStyle?.animation?`translateY(-2px)`:`none`};
    box-shadow: ${({theme:e})=>e.uiPreferences?.buttonStyle?.shadow&&e.uiPreferences?.buttonStyle?.animation?`0 6px 8px rgba(0, 0, 0, 0.15)`:e.uiPreferences?.buttonStyle?.shadow?`0 4px 6px rgba(0, 0, 0, 0.1)`:`none`};
  }
  
  ${e=>e.primary&&`
    background: linear-gradient(to right, ${e.theme.colors.primary}, ${e.theme.colors.secondary});
    color: white;
  `}
  
  ${e=>e.secondary&&`
    background: ${e.theme.colors.card};
    color: ${e.theme.colors.primary};
    border: 2px solid ${e.theme.colors.primary};
  `}
`,Hh=W.div`
  margin-bottom: 2rem;
`,Uh=W.h4`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 1.5rem 0 1rem;
  color: ${({theme:e})=>e.colors.text};
  
  svg {
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
`,Wh=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Gh=W.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 12px;
  padding: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 2px solid ${e=>e.isActive?e.theme.colors.primary:`transparent`};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,Kh=W.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  
  .square-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .rounded-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .default-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .no-shadow-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    border: 1px solid ${({theme:e})=>e.colors.border};
  }
  
  .medium-shadow-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .heavy-shadow-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .square-button-preview {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: white;
    font-weight: 600;
    border-radius: 0;
  }
  
  .default-button-preview {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: white;
    font-weight: 600;
    border-radius: 8px;
  }
  
  .pill-button-preview {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: white;
    font-weight: 600;
    border-radius: 9999px;
  }
  
  .small-icon-preview {
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
  
  .medium-icon-preview {
    font-size: 2rem;
    color: ${({theme:e})=>e.colors.primary};
  }
  
  .large-icon-preview {
    font-size: 2.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
  
  .animation-on-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      100% {
        left: 100%;
      }
    }
  }
  
  .animation-off-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .small-font-preview {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .medium-font-preview {
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .large-font-preview {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .light-heading-preview {
    font-size: 2rem;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .medium-heading-preview {
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .light-body-preview {
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .regular-body-preview {
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .medium-body-preview {
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.text};
  }
   .Centra-preview {
    font-family: 'Centra', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  .poppins-preview {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .roboto-preview {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .opensans-preview {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
  }
  
  .compact-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.backgroundAlt};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
    .density-line {
      width: 80%;
      height: 8px;
      background: ${({theme:e})=>e.colors.card};
      border-radius: 4px;
    }
  }
  
  .comfortable-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.backgroundAlt};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    .density-line {
      width: 80%;
      height: 8px;
      background: ${({theme:e})=>e.colors.card};
      border-radius: 4px;
    }
  }
  
  .spacious-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.backgroundAlt};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    
    .density-line {
      width: 80%;
      height: 8px;
      background: ${({theme:e})=>e.colors.card};
      border-radius: 4px;
    }
  }
  
  .narrow-container-preview {
    width: 40px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    margin: 0 auto;
  }
  
  .standard-container-preview {
    width: 50px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    margin: 0 auto;
  }
  
  .wide-container-preview {
    width: 60px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 8px;
    margin: 0 auto;
  }
  
  .compact-sidebar-preview {
    width: 20px;
    height: 60px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    gap: 8px;
    
    .sidebar-icon {
      width: 12px;
      height: 12px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
    }
  }
  
  .standard-sidebar-preview {
    width: 40px;
    height: 60px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    gap: 8px;
    
    .sidebar-item {
      width: 30px;
      height: 8px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 4px;
    }
  }
  
  .floating-sidebar-preview {
    width: 40px;
    height: 60px;
    background: ${({theme:e})=>e.colors.card};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    .sidebar-item {
      width: 30px;
      height: 8px;
      background: ${({theme:e})=>e.colors.primary};
      border-radius: 4px;
    }
  }
`,qh=W.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`,Jh=W.div`
  font-size: 0.85rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.text};
  font-weight: 500;
`,Yh=()=>{let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(`personal`),[m,h]=(0,v.useState)({}),[g,_]=(0,v.useState)(`presets`),y=m.job_title?.toLowerCase()||``,b=y.includes(`retainer`)?`Retainer`:y.includes(`associate`)?`Associate`:`Employee`,{theme:x,currentTheme:S,changeTheme:C,baseThemes:w,customColors:T,updateCustomColors:E,uiPreferences:D,updateUIPreferences:O,isCustomTheme:k,resetCustomizations:A}=Cl();(0,v.useEffect)(()=>{(async()=>{try{h((await eh())?.data[0])}catch(e){console.error(`Failed to fetch profile:`,e)}})()},[]);let j=e=>{C(e);let t=x[e]?.name||e;G.success(`Theme changed to ${t}`)},M=async()=>{if(l(``),d(``),!n||!i||!o){l(`All fields are required`);return}if(i!==o){l(`New PIN and Confirm PIN do not match`);return}if(i.length!==4||!/^\d+$/.test(i)){l(`PIN must be a 4-digit number`);return}(await rl(n,i))?.status===200?(d(`PIN reset successfully`),t(!1)):(l(`Failed to reset PIN. Please try again.`),t(!0)),r(``),a(``),s(``)},N=()=>{t(!1),r(``),a(``),s(``),l(``),d(``)};return(0,Y.jsxs)(Jd,{children:[(0,Y.jsxs)(th,{children:[(0,Y.jsx)(`h1`,{children:`My Profile`}),(0,Y.jsx)(`p`,{children:`Manage your personal information and account settings`})]}),(0,Y.jsxs)(nh,{children:[(0,Y.jsx)(rh,{children:(0,Y.jsxs)(ih,{children:[(0,Y.jsx)(ah,{children:(0,Y.jsx)(`img`,{src:m.image||`/placeholder.svg`,alt:m.name})}),(0,Y.jsxs)(oh,{children:[(0,Y.jsx)(sh,{children:m.name}),(0,Y.jsx)(ch,{children:b}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(lh,{children:[(0,Y.jsx)(wu,{}),(0,Y.jsxs)(`span`,{children:[b,` ID: `,m.emp_id]})]}),(0,Y.jsxs)(lh,{children:[(0,Y.jsx)(gu,{}),(0,Y.jsx)(`span`,{children:m.mobile_number||`Not specified`})]}),(0,Y.jsxs)(lh,{children:[(0,Y.jsx)(Iu,{}),(0,Y.jsx)(`span`,{children:m.email_id||`Not specified`})]}),(0,Y.jsxs)(lh,{children:[(0,Y.jsx)(Uu,{}),(0,Y.jsxs)(`span`,{children:[`Joined: `,m.date_of_join||`Not specified`]})]})]})]})]})}),(0,Y.jsx)(uh,{children:(0,Y.jsx)(ih,{children:(0,Y.jsxs)(Sh,{children:[(0,Y.jsxs)(Ch,{children:[(0,Y.jsxs)(wh,{active:f===`personal`,onClick:()=>p(`personal`),children:[(0,Y.jsx)(wu,{}),` Personal Info`]}),(0,Y.jsxs)(wh,{active:f===`security`,onClick:()=>p(`security`),children:[(0,Y.jsx)(Su,{}),` Security`]}),(0,Y.jsxs)(wh,{active:f===`theme`,onClick:()=>p(`theme`),children:[(0,Y.jsx)(_u,{}),` Themes`]})]}),(()=>{switch(f){case`personal`:return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Personal Information`}),(0,Y.jsxs)(fh,{children:[(0,Y.jsxs)(ph,{color:`#4776E6`,children:[(0,Y.jsxs)(mh,{iconColor:`#4776E6`,children:[(0,Y.jsx)(wu,{}),` `,b,` ID`]}),(0,Y.jsx)(hh,{children:m.emp_id||`Not specified`})]}),(0,Y.jsxs)(ph,{color:`#8E54E9`,children:[(0,Y.jsxs)(mh,{iconColor:`#8E54E9`,children:[(0,Y.jsx)(Ul,{}),` Role`]}),(0,Y.jsx)(hh,{children:b||`Not specified`})]}),(0,Y.jsxs)(ph,{color:`#DD6B20`,children:[(0,Y.jsxs)(mh,{iconColor:`#DD6B20`,children:[(0,Y.jsx)(Uu,{}),` Join Date`]}),(0,Y.jsx)(hh,{children:m.date_of_join||`Not specified`})]}),(0,Y.jsxs)(ph,{color:`#3182CE`,children:[(0,Y.jsxs)(mh,{iconColor:`#3182CE`,children:[(0,Y.jsx)(gu,{}),` Mobile`]}),(0,Y.jsx)(hh,{children:m.mobile_number||`Not specified`})]}),(0,Y.jsxs)(ph,{color:`#805AD5`,children:[(0,Y.jsxs)(mh,{iconColor:`#805AD5`,children:[(0,Y.jsx)(Iu,{}),` Email`]}),(0,Y.jsx)(hh,{children:m.email_id||`Not specified`})]})]})]});case`security`:return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Security Settings`}),(0,Y.jsx)(ih,{children:(0,Y.jsxs)(`div`,{style:{padding:`1.5rem`},children:[u&&(0,Y.jsxs)(yh,{className:`success`,children:[(0,Y.jsx)(Hu,{}),u]}),e?(0,Y.jsxs)(gh,{children:[(0,Y.jsx)(dh,{children:`Reset Your PIN`}),c&&(0,Y.jsxs)(yh,{className:`error`,children:[(0,Y.jsx)(eu,{}),c]}),(0,Y.jsxs)(mh,{children:[(0,Y.jsx)(Su,{}),` Current PIN`]}),(0,Y.jsx)(vh,{type:`password`,maxLength:6,value:n,onChange:e=>r(e.target.value),placeholder:`Enter current PIN`}),(0,Y.jsxs)(_h,{children:[(0,Y.jsxs)(`div`,{style:{flex:1},children:[(0,Y.jsxs)(mh,{children:[(0,Y.jsx)(Su,{}),` New PIN`]}),(0,Y.jsx)(vh,{type:`password`,maxLength:6,value:i,onChange:e=>a(e.target.value),placeholder:`Enter new PIN`})]}),(0,Y.jsxs)(`div`,{style:{flex:1},children:[(0,Y.jsxs)(mh,{children:[(0,Y.jsx)(Hu,{}),` Confirm PIN`]}),(0,Y.jsx)(vh,{type:`password`,maxLength:6,value:o,onChange:e=>s(e.target.value),placeholder:`Confirm new PIN`})]})]}),(0,Y.jsxs)(bh,{children:[(0,Y.jsxs)(xh,{className:`primary`,onClick:M,children:[(0,Y.jsx)(Hu,{}),` Reset PIN`]}),(0,Y.jsxs)(xh,{className:`outline`,onClick:N,children:[(0,Y.jsx)(eu,{}),` Cancel`]})]})]}):(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`p`,{style:{marginBottom:`1.5rem`,color:`#4a5568`},children:`Your PIN is used for secure transactions and approvals. It's recommended to change your PIN periodically.`}),(0,Y.jsxs)(xh,{className:`primary`,onClick:()=>t(!0),children:[(0,Y.jsx)(Su,{}),` Reset PIN`]})]})]})})]});case`theme`:return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Theme Personalization`}),(0,Y.jsx)(`p`,{style:{marginBottom:`1.5rem`,color:`#4a5568`},children:`Customize every aspect of the interface to match your preferences.`}),(0,Y.jsxs)(Sh,{children:[(0,Y.jsxs)(Ch,{style:{marginBottom:`1rem`},children:[(0,Y.jsxs)(wh,{active:g===`presets`,onClick:()=>_(`presets`),children:[(0,Y.jsx)(_u,{}),` Theme Presets`]}),(0,Y.jsxs)(wh,{active:g===`colors`,onClick:()=>_(`colors`),children:[(0,Y.jsx)(Au,{}),` Colors`]}),(0,Y.jsxs)(wh,{active:g===`components`,onClick:()=>_(`components`),children:[(0,Y.jsx)(mu,{}),` Components`]}),(0,Y.jsxs)(wh,{active:g===`typography`,onClick:()=>_(`typography`),children:[(0,Y.jsx)(ku,{}),` Typography`]}),(0,Y.jsxs)(wh,{active:g===`layout`,onClick:()=>_(`layout`),children:[(0,Y.jsx)(Ru,{}),` Layout`]})]}),g===`presets`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(Th,{children:[(0,Y.jsxs)(Eh,{isActive:S===`default`&&!k,onClick:()=>j(`default`),children:[(0,Y.jsx)(Dh,{colors:w.default.colors}),(0,Y.jsxs)(Oh,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,Y.jsx)(jh,{color:w.default.colors.primary,children:(0,Y.jsx)(_u,{})}),(0,Y.jsx)(kh,{children:w.default.name})]}),S===`default`&&!k&&(0,Y.jsx)(Ah,{children:(0,Y.jsx)(Hu,{})})]})]}),(0,Y.jsxs)(Eh,{isActive:S===`ocean`&&!k,onClick:()=>j(`ocean`),children:[(0,Y.jsx)(Dh,{colors:w.ocean.colors}),(0,Y.jsxs)(Oh,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,Y.jsx)(jh,{color:w.ocean.colors.primary,children:(0,Y.jsx)(Rl,{})}),(0,Y.jsx)(kh,{children:w.ocean.name})]}),S===`ocean`&&!k&&(0,Y.jsx)(Ah,{children:(0,Y.jsx)(Hu,{})})]})]}),(0,Y.jsxs)(Eh,{isActive:S===`sunset`&&!k,onClick:()=>j(`sunset`),children:[(0,Y.jsx)(Dh,{colors:w.sunset.colors}),(0,Y.jsxs)(Oh,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,Y.jsx)(jh,{color:w.sunset.colors.primary,children:(0,Y.jsx)(iu,{})}),(0,Y.jsx)(kh,{children:w.sunset.name})]}),S===`sunset`&&!k&&(0,Y.jsx)(Ah,{children:(0,Y.jsx)(Hu,{})})]})]}),(0,Y.jsxs)(Eh,{isActive:S===`dark`&&!k,onClick:()=>j(`dark`),children:[(0,Y.jsx)(Dh,{colors:w.dark.colors}),(0,Y.jsxs)(Oh,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,Y.jsx)(jh,{color:w.dark.colors.primary,children:(0,Y.jsx)(yu,{})}),(0,Y.jsx)(kh,{children:w.dark.name})]}),S===`dark`&&!k&&(0,Y.jsx)(Ah,{children:(0,Y.jsx)(Hu,{})})]})]}),k&&(0,Y.jsxs)(Eh,{isActive:k,onClick:()=>{},children:[(0,Y.jsx)(Dh,{colors:x.colors}),(0,Y.jsxs)(Oh,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,Y.jsx)(jh,{color:x.colors.primary,children:(0,Y.jsx)(Kl,{})}),(0,Y.jsx)(kh,{children:`Custom`})]}),(0,Y.jsx)(Ah,{children:(0,Y.jsx)(Hu,{})})]})]})]}),(0,Y.jsxs)(qh,{children:[(0,Y.jsxs)(xh,{className:`outline`,onClick:A,children:[(0,Y.jsx)(Zl,{}),` Reset All Customizations`]}),(0,Y.jsxs)(xh,{className:`primary`,onClick:()=>_(`colors`),children:[(0,Y.jsx)(vu,{}),` Customize Theme`]})]})]}),g===`colors`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Color Customization`}),(0,Y.jsxs)(fh,{children:[(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Primary Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.primary||x.colors.primary,onChange:e=>E({primary:e.target.value})}),(0,Y.jsx)(Fh,{children:T.primary||x.colors.primary})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Secondary Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.secondary||x.colors.secondary,onChange:e=>E({secondary:e.target.value})}),(0,Y.jsx)(Fh,{children:T.secondary||x.colors.secondary})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Accent Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.accent||x.colors.accent,onChange:e=>E({accent:e.target.value})}),(0,Y.jsx)(Fh,{children:T.accent||x.colors.accent})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Background Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.background||x.colors.background,onChange:e=>E({background:e.target.value})}),(0,Y.jsx)(Fh,{children:T.background||x.colors.background})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Card Background`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.card||x.colors.card,onChange:e=>E({card:e.target.value})}),(0,Y.jsx)(Fh,{children:T.card||x.colors.card})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Text Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.text||x.colors.text,onChange:e=>E({text:e.target.value})}),(0,Y.jsx)(Fh,{children:T.text||x.colors.text})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Success Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.success||x.colors.success,onChange:e=>E({success:e.target.value})}),(0,Y.jsx)(Fh,{children:T.success||x.colors.success})]}),(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(_u,{}),` Error Color`]}),(0,Y.jsx)(Ph,{type:`color`,value:T.error||x.colors.error,onChange:e=>E({error:e.target.value})}),(0,Y.jsx)(Fh,{children:T.error||x.colors.error})]})]}),(0,Y.jsxs)(Ih,{children:[(0,Y.jsx)(dh,{children:`Preview`}),(0,Y.jsx)(Lh,{children:(0,Y.jsxs)(Rh,{children:[(0,Y.jsx)(zh,{children:`Sample Card`}),(0,Y.jsxs)(Bh,{children:[(0,Y.jsx)(`p`,{children:`This is how your cards will look with the selected colors.`}),(0,Y.jsx)(Vh,{primary:!0,children:`Primary Button`}),(0,Y.jsx)(Vh,{secondary:!0,children:`Secondary Button`})]})]})})]})]}),g===`components`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Component Styles`}),(0,Y.jsxs)(Hh,{children:[(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(ou,{}),` Card Style`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.cardStyle.borderRadius===`square`,onClick:()=>O(`cardStyle`,{borderRadius:`square`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`square-preview`})}),(0,Y.jsx)(Jh,{children:`Square`})]}),(0,Y.jsxs)(Gh,{isActive:D.cardStyle.borderRadius===`rounded`,onClick:()=>O(`cardStyle`,{borderRadius:`rounded`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`rounded-preview`})}),(0,Y.jsx)(Jh,{children:`Rounded`})]}),(0,Y.jsxs)(Gh,{isActive:D.cardStyle.borderRadius===`16px`,onClick:()=>O(`cardStyle`,{borderRadius:`16px`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`default-preview`})}),(0,Y.jsx)(Jh,{children:`Default`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(cu,{}),` Shadow Style`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.cardStyle.shadow===`none`,onClick:()=>O(`cardStyle`,{shadow:`none`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`no-shadow-preview`})}),(0,Y.jsx)(Jh,{children:`No Shadow`})]}),(0,Y.jsxs)(Gh,{isActive:D.cardStyle.shadow===`medium`,onClick:()=>O(`cardStyle`,{shadow:`medium`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`medium-shadow-preview`})}),(0,Y.jsx)(Jh,{children:`Medium`})]}),(0,Y.jsxs)(Gh,{isActive:D.cardStyle.shadow===`heavy`,onClick:()=>O(`cardStyle`,{shadow:`heavy`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`heavy-shadow-preview`})}),(0,Y.jsx)(Jh,{children:`Heavy`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(su,{}),` Button Style`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.buttonStyle.borderRadius===`0`,onClick:()=>O(`buttonStyle`,{borderRadius:`0`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`square-button-preview`,children:`Button`})}),(0,Y.jsx)(Jh,{children:`Square`})]}),(0,Y.jsxs)(Gh,{isActive:D.buttonStyle.borderRadius===`8px`,onClick:()=>O(`buttonStyle`,{borderRadius:`8px`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`default-button-preview`,children:`Button`})}),(0,Y.jsx)(Jh,{children:`Default`})]}),(0,Y.jsxs)(Gh,{isActive:D.buttonStyle.borderRadius===`9999px`,onClick:()=>O(`buttonStyle`,{borderRadius:`9999px`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`pill-button-preview`,children:`Button`})}),(0,Y.jsx)(Jh,{children:`Pill`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(Tu,{}),` Icon Style`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.iconStyle.size===`small`,onClick:()=>O(`iconStyle`,{size:`small`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(au,{className:`small-icon-preview`})}),(0,Y.jsx)(Jh,{children:`Small`})]}),(0,Y.jsxs)(Gh,{isActive:D.iconStyle.size===`medium`,onClick:()=>O(`iconStyle`,{size:`medium`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(au,{className:`medium-icon-preview`})}),(0,Y.jsx)(Jh,{children:`Medium`})]}),(0,Y.jsxs)(Gh,{isActive:D.iconStyle.size===`large`,onClick:()=>O(`iconStyle`,{size:`large`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(au,{className:`large-icon-preview`})}),(0,Y.jsx)(Jh,{children:`Large`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)($l,{}),` Animation`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.cardStyle.animation,onClick:()=>O(`cardStyle`,{animation:!0}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`animation-on-preview`})}),(0,Y.jsx)(Jh,{children:`Enabled`})]}),(0,Y.jsxs)(Gh,{isActive:!D.cardStyle.animation,onClick:()=>O(`cardStyle`,{animation:!1}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`animation-off-preview`})}),(0,Y.jsx)(Jh,{children:`Disabled`})]})]})]}),(0,Y.jsxs)(Ih,{children:[(0,Y.jsx)(dh,{children:`Component Preview`}),(0,Y.jsx)(Lh,{children:(0,Y.jsxs)(Rh,{className:`component-preview-card`,children:[(0,Y.jsx)(zh,{children:`Sample Card`}),(0,Y.jsxs)(Bh,{children:[(0,Y.jsx)(`p`,{children:`This is how your components will look with the selected styles.`}),(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,marginTop:`1rem`},children:[(0,Y.jsxs)(Vh,{primary:!0,children:[D.buttonStyle.iconPosition===`left`&&(0,Y.jsx)(Hu,{style:{marginRight:`0.5rem`}}),`Primary Button`,D.buttonStyle.iconPosition===`right`&&(0,Y.jsx)(Hu,{style:{marginLeft:`0.5rem`}})]}),(0,Y.jsxs)(Vh,{secondary:!0,children:[D.buttonStyle.iconPosition===`left`&&(0,Y.jsx)(eu,{style:{marginRight:`0.5rem`}}),`Secondary Button`,D.buttonStyle.iconPosition===`right`&&(0,Y.jsx)(eu,{style:{marginLeft:`0.5rem`}})]})]})]})]})})]})]}),g===`typography`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Typography Settings`}),(0,Y.jsxs)(Hh,{children:[(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(ku,{}),` Font Size`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.typography.fontSize===`small`,onClick:()=>O(`typography`,{fontSize:`small`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`small-font-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Small`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.fontSize===`medium`,onClick:()=>O(`typography`,{fontSize:`medium`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`medium-font-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Medium`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.fontSize===`large`,onClick:()=>O(`typography`,{fontSize:`large`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`large-font-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Large`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(nu,{}),` Heading Weight`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.typography.headingWeight===`400`,onClick:()=>O(`typography`,{headingWeight:`400`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`light-heading-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Regular`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.headingWeight===`600`,onClick:()=>O(`typography`,{headingWeight:`600`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`medium-heading-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Semi-Bold`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.headingWeight===`700`,onClick:()=>O(`typography`,{headingWeight:`700`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`bold-heading-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Bold`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(tu,{}),` Body Text Weight`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.typography.bodyWeight===`300`,onClick:()=>O(`typography`,{bodyWeight:`300`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`light-body-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Light`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.bodyWeight===`400`,onClick:()=>O(`typography`,{bodyWeight:`400`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`regular-body-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Regular`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.bodyWeight===`500`,onClick:()=>O(`typography`,{bodyWeight:`500`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`medium-body-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Medium`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(ku,{}),` Font Family`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.typography.fontFamily===`'Centra', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Centra', sans-serif`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`Centra-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Centra`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.fontFamily===`'poppins', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'poppins', sans-serif`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`poppins-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Poppins`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.fontFamily===`'Roboto', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Roboto', sans-serif`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`roboto-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Roboto`})]}),(0,Y.jsxs)(Gh,{isActive:D.typography.fontFamily===`'Open Sans', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Open Sans', sans-serif`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`opensans-preview`,children:`Aa`})}),(0,Y.jsx)(Jh,{children:`Open Sans`})]})]})]}),(0,Y.jsxs)(Ih,{children:[(0,Y.jsx)(dh,{children:`Typography Preview`}),(0,Y.jsx)(Lh,{children:(0,Y.jsxs)(Rh,{className:`typography-preview-card`,children:[(0,Y.jsx)(zh,{children:`Typography Sample`}),(0,Y.jsxs)(Bh,{children:[(0,Y.jsx)(`h1`,{style:{marginBottom:`0.5rem`},children:`Heading 1`}),(0,Y.jsx)(`h2`,{style:{marginBottom:`0.5rem`},children:`Heading 2`}),(0,Y.jsx)(`h3`,{style:{marginBottom:`0.5rem`},children:`Heading 3`}),(0,Y.jsx)(`p`,{style:{marginBottom:`1rem`},children:`This is a paragraph of text that demonstrates how body text will appear with your selected typography settings. The quick brown fox jumps over the lazy dog.`}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`strong`,{children:`Bold text`}),` and `,(0,Y.jsx)(`em`,{children:`italic text`}),` examples.`]})]})]})})]})]}),g===`layout`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(dh,{children:`Layout Settings`}),(0,Y.jsxs)(Hh,{children:[(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(fu,{}),` Layout Density`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.layout.density===`compact`,onClick:()=>O(`layout`,{density:`compact`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`compact-preview`,children:[(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`})]})}),(0,Y.jsx)(Jh,{children:`Compact`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.density===`comfortable`,onClick:()=>O(`layout`,{density:`comfortable`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`comfortable-preview`,children:[(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`})]})}),(0,Y.jsx)(Jh,{children:`Comfortable`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.density===`spacious`,onClick:()=>O(`layout`,{density:`spacious`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`spacious-preview`,children:[(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`}),(0,Y.jsx)(`div`,{className:`density-line`})]})}),(0,Y.jsx)(Jh,{children:`Spacious`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(Ru,{}),` Container Width`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.layout.containerWidth===`narrow`,onClick:()=>O(`layout`,{containerWidth:`narrow`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`narrow-container-preview`})}),(0,Y.jsx)(Jh,{children:`Narrow`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.containerWidth===`standard`,onClick:()=>O(`layout`,{containerWidth:`standard`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`standard-container-preview`})}),(0,Y.jsx)(Jh,{children:`Standard`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.containerWidth===`wide`,onClick:()=>O(`layout`,{containerWidth:`wide`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsx)(`div`,{className:`wide-container-preview`})}),(0,Y.jsx)(Jh,{children:`Wide`})]})]}),(0,Y.jsxs)(Uh,{children:[(0,Y.jsx)(Gu,{}),` Sidebar Style`]}),(0,Y.jsxs)(Wh,{children:[(0,Y.jsxs)(Gh,{isActive:D.layout.sidebarStyle===`compact`,onClick:()=>O(`layout`,{sidebarStyle:`compact`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`compact-sidebar-preview`,children:[(0,Y.jsx)(`div`,{className:`sidebar-icon`}),(0,Y.jsx)(`div`,{className:`sidebar-icon`}),(0,Y.jsx)(`div`,{className:`sidebar-icon`})]})}),(0,Y.jsx)(Jh,{children:`Compact`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.sidebarStyle===`standard`,onClick:()=>O(`layout`,{sidebarStyle:`standard`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`standard-sidebar-preview`,children:[(0,Y.jsx)(`div`,{className:`sidebar-item`}),(0,Y.jsx)(`div`,{className:`sidebar-item`}),(0,Y.jsx)(`div`,{className:`sidebar-item`})]})}),(0,Y.jsx)(Jh,{children:`Standard`})]}),(0,Y.jsxs)(Gh,{isActive:D.layout.sidebarStyle===`floating`,onClick:()=>O(`layout`,{sidebarStyle:`floating`}),children:[(0,Y.jsx)(Kh,{children:(0,Y.jsxs)(`div`,{className:`floating-sidebar-preview`,children:[(0,Y.jsx)(`div`,{className:`sidebar-item`}),(0,Y.jsx)(`div`,{className:`sidebar-item`}),(0,Y.jsx)(`div`,{className:`sidebar-item`})]})}),(0,Y.jsx)(Jh,{children:`Floating`})]})]})]})]})]})]});default:return null}})()]})})})]})]})},Xh=`/retainer/assets/ErrorPage-D21CcmLu.svg`,Zh=W.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f9fafb;
`,Qh=W.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
`;W.h1`
  font-size: 120px;
  font-weight: 800;
  margin: 0;
  color: #111;

  @media (max-width: 768px) {
    font-size: 80px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
  }
`,W.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #555;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;var $h=W.div`
  margin: 30px 0;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 220px;
    }
  }
`,eg=W.p`
  font-size: 16px;
  color: #777;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,tg=W.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #111;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`,ng=()=>{let e=(0,vl.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Y.jsx)(Zh,{children:(0,Y.jsxs)(Qh,{children:[(0,Y.jsx)($h,{children:(0,Y.jsx)(`img`,{src:Xh,alt:`Not Found`})}),(0,Y.jsx)(eg,{children:`The page you're looking for doesn’t exist.`}),(0,Y.jsx)(tg,{onClick:rg,children:`Go Back`})]})}),e[0]=t):t=e[0],t};function rg(){return window.history.back()}function ig(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`},child:[]}]})(e)}function ag(e){return X({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`15`,x2:`15`,y1:`12`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`12`,x2:`18`,y1:`15`,y2:`15`},child:[]},{tag:`rect`,attr:{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`},child:[]}]})(e)}var og=W.div`
  overflow-x: auto;
  background: ${({theme:e,color:t})=>t?`${e.colors[t]}`:e.colors.background};
  border-radius: 8px;
  padding: 0.4rem;
  min-height: 140px;
`,sg=W.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 800px;
  color: ${({theme:e})=>e.colors.text};
`,cg=W.th`
  text-align: left;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.75rem;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text};
  font-weight: 600;
`,lg=W.td`
  padding: ${({theme:e})=>e.spacing.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text};
`,ug=W.td`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-weight: 600;
`;W.td`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-weight: 600;
`;var dg=W.tr`
  background-color: ${({theme:e})=>e.colors.backgroundAlt};
  
  td {
    padding: 0;
  }
`,fg=W.div`
  padding: 1rem;
`,pg=W.tr`
  cursor: ${({rowAction:e})=>e?`pointer`:`default`};
  
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;function mg(e){let t=(0,vl.c)(25),{columns:n,data:r,renderRow:i,expandedRow:a,renderExpandedRow:o,emptyMessage:s,isLoading:c,rowAction:l,modifiedId:u,modifiedIdName:d}=e,f=s===void 0?`No data available`:s,p=c===void 0?!1:c,m=l===void 0?null:l,h=u===void 0?!1:u,g=d===void 0?`id`:d,_;t[0]===r?_=t[1]:(_=Array.isArray(r)?r:[],t[0]=r,t[1]=_);let y=_,b=y.length>0,x=Array.isArray(n)&&n.length>0?n.length:1,S;t[2]!==h||t[3]!==g?(S=e=>h&&g?e[g]:e?.id||e?.p_id||e?.emp_id||e?.unique_id,t[2]=h,t[3]=g,t[4]=S):S=t[4];let C=S,w;t[5]===n?w=t[6]:(w=n?.map(hg),t[5]=n,t[6]=w);let T;t[7]===w?T=t[8]:(T=(0,Y.jsx)(`thead`,{children:(0,Y.jsx)(`tr`,{children:w})}),t[7]=w,t[8]=T);let E;t[9]!==x||t[10]!==f||t[11]!==a||t[12]!==C||t[13]!==b||t[14]!==p||t[15]!==o||t[16]!==i||t[17]!==m||t[18]!==y?(E=p?(0,Y.jsx)(`tr`,{children:(0,Y.jsx)(ug,{colSpan:x,children:`Loading...`})}):b?y.map((e,t)=>{let n=C(e),r=a===n;return(0,Y.jsxs)(v.Fragment,{children:[(0,Y.jsx)(pg,{onClick:()=>m?.(e),rowAction:m,children:i(e)}),r&&o&&(0,Y.jsx)(dg,{children:(0,Y.jsx)(`td`,{colSpan:x,children:(0,Y.jsx)(fg,{children:o(e)})})})]},n||t)}):(0,Y.jsx)(`tr`,{children:(0,Y.jsx)(ug,{colSpan:x,children:f})}),t[9]=x,t[10]=f,t[11]=a,t[12]=C,t[13]=b,t[14]=p,t[15]=o,t[16]=i,t[17]=m,t[18]=y,t[19]=E):E=t[19];let D;t[20]===E?D=t[21]:(D=(0,Y.jsx)(`tbody`,{children:E}),t[20]=E,t[21]=D);let O;return t[22]!==D||t[23]!==T?(O=(0,Y.jsx)(og,{children:(0,Y.jsxs)(sg,{children:[T,D]})}),t[22]=D,t[23]=T,t[24]=O):O=t[24],O}function hg(e,t){return(0,Y.jsx)(cg,{children:e},t)}var gg=Oi`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,W.div`
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,W.span`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,W.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,W.div`
  display: flex;
  border-bottom: 2px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  margin-bottom: 0.85rem;
  gap: 0;
`,W.button`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({active:e,theme:t})=>e?t.colors?.primary||`#6C5CE7`:t.colors?.textLight||`#aaa`};
  border-bottom: 2px solid ${({active:e,theme:t})=>e?t.colors?.primary||`#6C5CE7`:`transparent`};
  margin-bottom: -2px;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover { color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`,W.span`
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 10px;
  background: ${({active:e,theme:t})=>e?t.colors?.primary||`#6C5CE7`:t.colors?.border||`#e0e0e0`};
  color: ${({active:e})=>e?`#fff`:`#888`};
  transition: all 0.15s ease;
`,W.div`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  margin-bottom: 0.45rem;
  display: flex;
  align-items: center;
  gap: 5px;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.8rem;
  font-style: italic;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  font-size: 0.83rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-radius: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.textLight||`#888`};
  margin-bottom: 0.6rem;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0.75rem;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}10`:`#f0eeff`};
  border: 1px solid ${({theme:e})=>e.colors?.primary?`${e.colors.primary}28`:`#c4b5fd`};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  margin-bottom: 0.6rem;
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.65rem;
  overflow: hidden;
`,W.div`
  display: grid;
  grid-template-columns: 1.8fr 0.9fr 0.7fr 0.7fr 0.7fr auto;
  padding: 0.45rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  gap: 0.5rem;
`,W.span`
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,W.div`
  max-height: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ddd`};
    border-radius: 4px;
  }
`,W.div`
  display: grid;
  grid-template-columns: 1.8fr 0.9fr 0.7fr 0.7fr 0.7fr auto;
  padding: 0.55rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  animation: ${gg} 0.15s ease both;
  background: ${({deleted:e,theme:t})=>e?`#fee2e210`:t.colors?.card||`#fff`};
  opacity: ${({deleted:e})=>e?.6:1};
  transition: background 0.15s, opacity 0.15s;

  &:last-child { border-bottom: none; }
`,W.div`
  font-size: 0.78rem;
  color: ${({theme:e,muted:t})=>t?e.colors?.textLight||`#aaa`:e.colors?.text||`#333`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 5px;
`,W.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,W.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem 0.75rem;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}06`:`#f9f8ff`};
  border-top: 1px dashed ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  animation: ${gg} 0.15s ease both;

  @media (max-width: 480px) { grid-template-columns: 1fr 1fr; }
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({fullWidth:e})=>e&&`grid-column: 1 / -1;`}
`,W.label`
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,W.input`
  padding: 0.35rem 0.55rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.78rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`,W.select`
  padding: 0.35rem 0.55rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.78rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`,W.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`,W.div`
  position: relative;
  margin-bottom: 0.6rem;
`,W.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.55rem 1rem 0.55rem 2.1rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.6rem;
  font-size: 0.82rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors?.primary?`${e.colors.primary}18`:`#ede9ff`};
  }
  &::placeholder { color: ${({theme:e})=>e.colors?.textLight||`#bbb`}; }
`,W.div`
  position: absolute;
  left: 0.65rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.65rem;
  overflow: hidden;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ddd`};
    border-radius: 4px;
  }
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  cursor: pointer;
  transition: background 0.12s ease;
  animation: ${gg} 0.15s ease both;

  &:last-child { border-bottom: none; }
  &:hover { background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`}; }
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,W.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 6px;
`,W.span`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,W.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1.5px solid ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  background: transparent;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s ease;

  &:hover { background: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; color: #fff; }
`;var _g=W.div`
  margin-bottom: 1rem;
`,vg=W.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  color: ${e=>e.theme.colors.text};
`,yg=W.span`
  color: ${e=>e.theme.colors.error};
`,bg=W.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,xg=W.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid ${e=>e.theme.colors.border};
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.3s;

  &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
     transform: none;
   }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primaryLight};
  }
`,Sg=W.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid ${e=>e.theme.colors.border};
  border-radius: 10px;
  min-height: 20px;
  resize: vertical;
  font-family: inherit;
  font-size: 0.95rem;

    &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
     transform: none;
   }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primaryLight};
  }
`,Cg=W.div`
  border: 2px dashed ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({theme:e})=>e.colors.background};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primaryLight}22;
  }
`,wg=W.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Tg=W.div`
  font-size: 1.25rem;
  color: ${({theme:e})=>e.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 8px;
  flex-shrink: 0;
`,Eg=W.div`
  flex: 1;
`,Dg=W.div`
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.15rem;
`,Og=W.div`
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors.textLight};
`,kg=W.input`
  display: none;

    &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
     transform: none;
   }
`,Ag=W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  
  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${e=>e.theme.colors.text};
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  button {
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.error};
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.7;
    }
  }
`,jg=({isOpen:e,onClose:t,claimData:n=null,onSaved:r})=>{let i=localStorage.getItem(`cust_emp_id`);console.log(`claimData`,n);let[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)([]),d={type:``,amount:``,date:``,claim_remarks:``,file:null,emp_id:i,o_item_id:Qf(n?.o_item_id||n?.order_item_id)},[f,p]=(0,v.useState)(d),m=!!l.find(e=>e.id===f.type)?.is_exp_bill_required,h=(0,v.useCallback)(()=>{p(d),c(!1)},[]),g=()=>{h(),t()},_=async()=>{try{u((await fl())?.data||[])}catch(e){console.error(`Error fetching expense items:`,e),G.error(`Failed to load expense items`)}},y=(0,v.useCallback)(e=>{e?.item_id&&p({type:e.item_id||``,amount:e.expense_amt||``,date:$(e.expense_date,!0),claim_remarks:e.remarks||``,file:e.submitted_file_1?{uri:e.submitted_file_1,name:e.submitted_file_1.split(`/`).pop().split(`?`)[0]}:null,emp_id:i,o_item_id:n?.o_item_id})},[i]);(0,v.useEffect)(()=>{_()},[]),(0,v.useEffect)(()=>{e&&(n?.item_id?y(n):h())},[e,n,y,h]);let b=(e,t)=>{p(n=>({...n,[e]:t}))},x=e=>{let t=e.target.files[0];if(t){if(t.size>5*1024*1024){G.error(`File size must be less than 5MB`),e.target.value=``;return}c(!1),b(`file`,t)}},S=()=>{b(`file`,null)};return(0,Y.jsx)(Od,{isOpen:e,onClose:g,title:n?.item_id?`Edit OPE (${n?.master_data?.master_claim_id})`:`Add OPE`,saveButtonText:n?.item_id?`Update OPE`:`Add OPE`,onSave:async()=>{if(!f.type)return G.error(`Please select an expense item`);if(!f.date)return G.error(`Please select expense date`);if(!f.amount||Number(f.amount)<=0)return G.error(`Please enter a valid OPE amount`);if(m&&!f.file){c(!0);return}o(!0),c(!1);try{let e=n?.master_data?.master_claim_id,t=new Date(f.date),i=`${t.getDate().toString().padStart(2,`0`)}-${(t.getMonth()+1).toString().padStart(2,`0`)}-${t.getFullYear()}`,a=new FormData;f.file&&a.append(`file_1`,f.file),a.append(`remarks`,f.claim_remarks||``),a.append(`item`,f.type),a.append(`quantity`,`1`),a.append(`expense_amt`,f.amount),a.append(`expense_date`,i),a.append(`emp_id`,f.emp_id),a.append(`quantity`,1),a.append(`o_item_id`,f.o_item_id),a.append(`call_mode`,n?.item_id?`CLAIM_UPDATE`:`CLAIM_SAVE`),e&&a.append(`m_claim_id`,e),n?.item_id&&a.append(`claim_id`,n.id);for(let[e,t]of a.entries())console.log(e,t);(await ll(a)).status===200?(o(!1),g(),G.success(n?.item_id?`Update claim successfully`:`Add claim successfully`),c(!1),await r()):G.error(`Claim Submission Error`,`Failed to claim. Unexpected response.`)}catch(e){G.error(e.response?.data?.message||e.message||`Submission failed`)}finally{o(!1)}},saveDisabled:a,children:(0,Y.jsxs)(`div`,{style:{padding:`0.2rem`},children:[(0,Y.jsxs)(_g,{children:[(0,Y.jsxs)(vg,{htmlFor:`type`,children:[(0,Y.jsx)(Cu,{}),`Expense Item`]}),(0,Y.jsxs)(bg,{id:`type`,name:`type`,value:f.type,onChange:e=>b(`type`,e.target.value),required:!0,children:[(0,Y.jsx)(`option`,{value:``,children:`Select Expense Item`}),l.map((e,t)=>(0,Y.jsx)(`option`,{value:e.id,children:e.name},t))]})]}),(0,Y.jsxs)(_g,{children:[(0,Y.jsxs)(vg,{htmlFor:`date`,children:[(0,Y.jsx)(Uu,{}),` Date of Expense`]}),(0,Y.jsx)(`div`,{style:{position:`relative`},children:(0,Y.jsx)(xg,{id:`date`,name:`date`,type:`date`,value:f.date,onChange:e=>b(`date`,e.target.value),required:!0})})]}),(0,Y.jsxs)(_g,{children:[(0,Y.jsxs)(vg,{children:[` `,(0,Y.jsx)(du,{}),`OPE Amount `,(0,Y.jsx)(yg,{children:`*`})]}),(0,Y.jsx)(xg,{type:`number`,min:0,value:f.amount,onChange:e=>b(`amount`,e.target.value),placeholder:`Enter OPE Amount`})]}),(0,Y.jsxs)(_g,{children:[(0,Y.jsxs)(vg,{children:[(0,Y.jsx)(op,{}),` Remarks(Optional)`]}),(0,Y.jsx)(Sg,{value:f.claim_remarks,onChange:e=>b(`claim_remarks`,e.target.value),placeholder:`Add any notes...`})]}),(0,Y.jsxs)(_g,{children:[(0,Y.jsxs)(vg,{children:[`Receipts/Attachments `,m&&(0,Y.jsx)(yg,{children:`*`})]}),(0,Y.jsxs)(Cg,{onClick:()=>document.getElementById(`file-upload`).click(),children:[(0,Y.jsx)(kg,{id:`file-upload`,name:`file`,type:`file`,onChange:x,accept:`image/*,.pdf,`}),(0,Y.jsxs)(wg,{children:[(0,Y.jsx)(Tg,{children:(0,Y.jsx)(Xl,{})}),(0,Y.jsxs)(Eg,{children:[(0,Y.jsx)(Dg,{children:`Click to upload file`}),(0,Y.jsx)(Og,{children:`JPG, PNG, PDF, EXCEL, WORD • Max 5MB`})]})]})]}),s&&(0,Y.jsx)(`span`,{style:{color:`red`,fontSize:`0.75rem`,marginTop:`0.3rem`,display:`block`},children:`Please upload a receipt/attachment`}),f.file&&(0,Y.jsxs)(Ag,{children:[f.file?.type?.startsWith(`image/`)?(0,Y.jsx)(`img`,{src:URL.createObjectURL(f.file),alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}}):(0,Y.jsx)(Nu,{color:e=>e.colors.text}),(0,Y.jsx)(`span`,{title:f?.file?.name,children:f?.file?.name}),(0,Y.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),S()},children:(0,Y.jsx)(eu,{})})]})]})]})})},Mg=Oi`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;W.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.75rem;
  overflow: hidden;
  animation: ${Mg} 0.25s ease both;
  animation-delay: ${({index:e})=>e*.06}s;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  gap: 0.5rem;
  flex-wrap: wrap;
`,W.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}18`:`#ede9ff`};
  padding: 2px 8px;
  border-radius: 20px;
  letter-spacing: 0.04em;
`,W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #059669;
  background: #d1fae5;
  padding: 2px 8px;
  border-radius: 20px;
`,W.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`,W.div`
  padding: 0.65rem 0.9rem;
  border-right: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};

  &:last-child,
  &:nth-child(3n) {
    border-right: none;
  }

  @media (max-width: 480px) {
    &:nth-child(2n) { border-right: none; }
    &:nth-child(3n) { border-right: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`}; }
    &:nth-child(odd):last-child { border-right: none; }
  }
`,W.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
`,W(W.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  word-break: break-word;
`)`
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  font-size: 0.9rem;
`,W.div`
  grid-column: 1 / -1;
  padding: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,W.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 6px;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}12`:`#ede9ff`};
  border: 1px solid ${({theme:e})=>e.colors?.primary?`${e.colors.primary}30`:`#c4b5fd`};
  transition: background 0.15s ease;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}22`:`#ddd6fe`};
  }
`,W.span`
  font-size: 0.78rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  font-style: italic;
`,W.div`
  text-align: center;
  padding: 2.5rem 1rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};

  svg { margin-bottom: 0.5rem; opacity: 0.4; }
  p { font-size: 0.85rem; margin: 0; }
`,W.div`
  background: ${({theme:e,shouldHidePrimaryButton:t})=>t?`${e.colors?.error}30`:e.colors?.card||`#fff`};
  border: 1px solid ${({theme:e,shouldHidePrimaryButton:t})=>t?e.colors?.error:e.colors?.border||`#e0e0e0`};
  border-radius: ${({theme:e})=>e.cardStyle?.borderRadius||`12px`};
  padding: ${({theme:e})=>e.spacing?.lg||`1rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.md||`1rem`};
  box-shadow: ${({theme:e})=>e.shadows?.md||`0 4px 6px rgba(0, 0, 0, 0.1)`};
  transition: ${({theme:e})=>e.transitions?.normal||`all 0.3s ease`};
  
  &:hover {
    border-color: ${({theme:e,shouldHidePrimaryButton:t})=>t?e.colors?.error:e.colors?.primary||`#6C63FF`};
    box-shadow: ${({theme:e})=>e.cardStyle?.shadow===`heavy`?`0 10px 20px rgba(108,99,255,0.2)`:e.shadows?.lg||`0 4px 12px rgba(108,99,255,0.15)`};
    transform: ${({theme:e})=>e.cardStyle?.animation?`translateY(-2px)`:`none`};
  }
`,W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
`,W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
`,W.div`
  display: grid;
 grid-template-columns: ${({filterType:e})=>`5fr 1fr`};
  gap: ${({theme:e})=>e.spacing?.xl||`3rem`};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }
`,W.div`
  flex: 1;
  min-width: 0
`,W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  min-width: 180px;
  
  @media (max-width: 968px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`,W.h2`
  font-size: ${({theme:e})=>e.fontSizes?.lg||`1.125rem`};
  font-weight: ${({theme:e})=>e.fontWeights?.heading||`600`};
  margin: 0 0 ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,W.div`
  font-family: 'Courier New', monospace;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.8rem`};
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.4rem`};
`,W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  margin: ${({theme:e})=>e.spacing?.md||`1rem`} 0;
`,W.div`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.85rem`};
  color: ${({theme:e})=>e.colors?.text||`#000`};
`,W.div`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.xs||`0.2rem`};
`,W.div`
  color: ${({theme:e})=>e.colors?.card||`#666`};
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.xs||`0.2rem`};
`,W(gf)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-weight: 600;

  ${({status:e})=>e===`Started`&&`
    background: #2196F3;
    color: #fff;
  `}

  ${({status:e})=>e===`In Progress`&&`
    background: #2196F3;
    color: #fff;
  `}

  ${({status:e})=>e===`Completed`&&`
    background: #00C853;
    color: #fff;
  `}

  ${({status:e})=>e===`Planned`&&`
    background: #FFD600;
    color: #000;
  `}

  ${({status:e})=>e===`Pending`&&`
    background: #9333EA; /* amber/orange */
    color: #fff;
  `}
`,W.div`
  margin: ${({theme:e})=>e.spacing?.md||`0.75rem`} 0;
`,W.div`
  height: 6px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f0f2f8`};
  border-radius: ${({theme:e})=>e.borderRadius?.full||`999px`};
  overflow: hidden;
`,W.div`
  height: 100%;
  width: ${({p:e})=>e}%;
  background: ${({theme:e})=>e.colors?.primary||`#6C63FF`};
  transition: ${({theme:e})=>e.transitions?.normal||`width 0.4s ease`};
`,W.div`
  margin-top: ${({theme:e})=>e.spacing?.md||`1rem`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`8px`};
  overflow: hidden;
`,W.div`
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  padding: ${({theme:e})=>e.spacing?.sm||`0.5rem`} ${({theme:e})=>e.spacing?.md||`0.75rem`};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.85rem`};
  transition: ${({theme:e})=>e.transitions?.fast||`0.2s ease`};
  
  &:hover {
    background: ${({theme:e})=>e.colors?.primaryLight||`#E8E6FF`};
  }
`,W.div`
color: "#666";
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease`};
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
`,W.div`
  max-height: ${({isOpen:e})=>e?`400px`:`0`};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions?.normal||`max-height 0.3s ease`};
`,W.div`
  display: grid;
  gap: 1px;
  background-color: ${({theme:e})=>e.colors?.border||`#e0e0e0`};
`,W.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  align-items: center;
  padding: ${({theme:e})=>e.spacing?.sm||`0.5rem`} ${({theme:e})=>e.spacing?.md||`0.75rem`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.8rem`};
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing?.xs||`4px`};
  }
`,W.span`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
`,W.span`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,W.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
`,W.span`
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f0f2f8`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  padding: 3px 8px;
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`4px`};
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,W.div`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  font-style: italic;
  padding-top: ${({theme:e})=>e.spacing?.xs||`4px`};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,W.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
`,W.span`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.text||`#333333`};
  font-weight: 500;
`,W.span`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.card||`#333333`};
  font-weight: 500;
`,W(Q)`
  background: ${({theme:e})=>e.colors?.primary||`#6C63FF`};
  color: #fff;
  
  &:hover:not(:disabled) {
    background:  '#5a52e0';
  }
      @media (max-width: 768px) {
    width: 100%;
  }
`,W(Q)`
  background: ${({theme:e})=>e.colors?.success||`#00C853`};
  color: #fff;
  font-size: 16px;
  
  &:hover:not(:disabled) {
    background: #00b347;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`,W(Q)`
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#ddd`};
  font-size: 16px;
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors?.backgroundAlt||`#f5f5f5`};
  }
      @media (max-width: 768px) {
    width: 100%;
  }
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`8px`};
  overflow: hidden;
  margin-top: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
`,W.div`
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  padding: ${({theme:e})=>e.spacing?.sm||`0.75rem`} ${({theme:e})=>e.spacing?.lg||`1rem`};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({theme:e})=>e.transitions?.fast||`0.2s ease`};
  
  &:hover {
    background: ${({theme:e})=>e.colors?.primaryLight||`#E8E6FF`};
  }
`,W.div`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.5rem`};
`,W.div`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease`};
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  display: flex;
  align-items: center;
`,W.div`
  max-height: ${({isOpen:e})=>e?`500px`:`0`};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions?.normal||`max-height 0.3s ease`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
`,W.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  flex-wrap: wrap;
  padding: ${({theme:e})=>e.spacing?.sm||`0.5rem`} 0;
  border-top: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  padding: ${({theme:e})=>e.spacing?.md||`1rem`} 0;
`,W.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
`,W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  padding: ${({theme:e})=>e.spacing?.lg||`1rem`};
`,W.div`
  grid-column: 1 / -1;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.85rem`};
  color: ${({theme:e})=>e.colors?.text||`#000`};
`,W.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,W.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${({theme:e})=>e.spacing?.xs||`6px`};
  margin-top: ${({theme:e})=>e.spacing?.xs||`4px`};
  max-height: 160px;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ccc`};
    border-radius: 4px;
  }
`,W.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`6px`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
`,W.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({color:e})=>e}22;
  color: ${({color:e})=>e};
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,W.span`
  font-weight: 600;
  font-size: 0.78rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}18;
  padding: 1px 6px;
  border-radius: 3px;
`;var Ng=(e,t)=>{let n=(0,vl.c)(22),r;n[0]===e?r=n[1]:(r=e===void 0?[]:e,n[0]=e,n[1]=r);let i=r,a=t===void 0?10:t,[o,s]=(0,v.useState)(1),[c,l]=(0,v.useState)(a),u;n[2]!==o||n[3]!==i.length||n[4]!==c?(u=()=>{let e=Math.max(1,Math.ceil(i.length/c));o>e&&s(e)},n[2]=o,n[3]=i.length,n[4]=c,n[5]=u):u=n[5];let d;n[6]!==o||n[7]!==i||n[8]!==c?(d=[i,c,o],n[6]=o,n[7]=i,n[8]=c,n[9]=d):d=n[9],(0,v.useEffect)(u,d);let f=(o-1)*c,p=f+c,m;n[10]!==i||n[11]!==p||n[12]!==f?(m=i.slice(f,p),n[10]=i,n[11]=p,n[12]=f,n[13]=m):m=n[13];let h=m,g;n[14]===c?g=n[15]:(g=(e,t)=>{let n=t===void 0?c:t;n===c?s(e):(l(n),s(1))},n[14]=c,n[15]=g);let _=g,y;return n[16]!==o||n[17]!==i.length||n[18]!==_||n[19]!==c||n[20]!==h?(y={currentPage:o,itemsPerPage:c,paginatedData:h,totalItems:i.length,handlePageChange:_,setCurrentPage:s,setItemsPerPage:l},n[16]=o,n[17]=i.length,n[18]=_,n[19]=c,n[20]=h,n[21]=y):y=n[21],y},Pg=(e,t)=>{if(!e||!t)return[];let n=t.split(`.`),r=(e,t)=>{if(e==null)return[];if(t>=n.length)return[e];let i=n[t];if(i.includes(`[]`)){i=i.replace(`[]`,``);let n=e[i];return Array.isArray(n)?n.flatMap(e=>r(e,t+1)):[]}return r(e[i],t+1)};return r(e,0)},Fg=(e,t)=>e==null?!1:typeof e==`string`||typeof e==`number`||typeof e==`boolean`?String(e).toLowerCase().includes(t.toLowerCase()):Array.isArray(e)?e.some(e=>Fg(e,t)):typeof e==`object`?Object.values(e).some(e=>Fg(e,t)):!1,Ig=e=>{if(!e)return null;if(e instanceof Date)return e;if(typeof e!=`string`)return null;let t=e.trim(),n=new Date(t);if(!Number.isNaN(n.getTime()))return n;let r=t.split(/[-/]/).map(e=>e.trim());if(r.length===3){let[e,t,n]=r,i={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},a=/^[0-9]{4}$/.test(e),o=/^[0-9]{4}$/.test(n),s=t.toLowerCase();if(a&&/^[0-9]{1,2}$/.test(t)&&/^[0-9]{1,2}$/.test(n)){let r=new Date(Number(e),Number(t)-1,Number(n));return Number.isNaN(r.getTime())?null:r}if(o&&/^[0-9]{1,2}$/.test(e)&&/^[0-9]{1,2}$/.test(t)){let r=new Date(Number(n),Number(t)-1,Number(e));return Number.isNaN(r.getTime())?null:r}if(o&&i[s]!=null&&/^[0-9]{1,2}$/.test(e)){let t=new Date(Number(n),i[s],Number(e));return Number.isNaN(t.getTime())?null:t}}return null},Lg=e=>{let t=(0,vl.c)(15),{data:n,fields:r,search:i,extraFilters:a}=e,o;t[0]===n?o=t[1]:(o=n===void 0?[]:n,t[0]=n,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=r===void 0?[]:r,t[2]=r,t[3]=c);let l=c,u=i===void 0?``:i,d;t[4]===a?d=t[5]:(d=a===void 0?{}:a,t[4]=a,t[5]=d);let f=d,p;if(t[6]!==s||t[7]!==f||t[8]!==l||t[9]!==u){let e;t[11]!==f||t[12]!==l||t[13]!==u?(e=e=>{let t=!u||l.some(t=>Pg(e,t).some(e=>Fg(e,u))),n=Object.entries(f).every(t=>{let[n,r]=t;if(!r||r===`ALL`)return!0;if(n===`dateRange`&&r?.field){let t=Pg(e,r.field)[0],n=Ig(t),i=Ig(r.from),a=Ig(r.to);return!((i||a)&&(!n||Number.isNaN(n.getTime()))||i&&n<i||a&&n>a)}return Pg(e,n).some(e=>e==null?!1:String(e).toLowerCase()===String(r).toLowerCase())});return t&&n},t[11]=f,t[12]=l,t[13]=u,t[14]=e):e=t[14],p=s.filter(e),t[6]=s,t[7]=f,t[8]=l,t[9]=u,t[10]=p}else p=t[10];return p};Oi`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  width: 100%;
`,W.div`
  position: relative;
  display: inline-block;
`,W.input`
  padding: 0.35rem 0.6rem 0.35rem 1.6rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.375rem;
  font-size: 0.72rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 160px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`,W.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
  display: flex;
  align-items: center;
`,W.select`
  padding: 0.35rem 1.5rem 0.35rem 0.5rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.375rem;
  font-size: 0.72rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`,W.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({color:e})=>e||`#e5e7eb`};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-transform: uppercase;
`,W.button`
  background: none;
  border: none;
  cursor: ${({disabled:e})=>e?`default`:`pointer`};
  color: ${({assigned:e,theme:t})=>e?`#10b981`:t.colors?.primary||`#6C5CE7`};
  opacity: ${({disabled:e})=>e?.35:1};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${({disabled:e})=>e?`transparent`:`rgba(0, 0, 0, 0.05)`};
  }
`,W.div`
  max-height: 260px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ddd`};
    border-radius: 4px;
  }
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 99px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f5f7`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};

  svg { color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }

  span {
    color: ${({theme:e})=>e.colors?.textLight||`#888`};
    margin-right: 0.15rem;
  }
`,W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #ef4444;
  margin-left: 0.25rem;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.38rem 0.75rem;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}10`:`#f0eeff`};
  border: 1px solid ${({theme:e})=>e.colors?.primary?`${e.colors.primary}28`:`#c4b5fd`};
  border-radius: 0.5rem;
  font-size: 0.71rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.75rem;
  overflow: hidden;
`,W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.85rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
`,W.div`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({theme:e})=>e.colors?.textLight||`#888`};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,W.div`
  overflow-x: auto;
`,W.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.74rem;
`,W.th`
  padding: 0.5rem 0.6rem;
  text-align: ${({center:e})=>e?`center`:`left`};
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  white-space: nowrap;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
`,W.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};

  &:last-child { border-bottom: none; }
`,W.td`
  padding: 0.48rem 0.6rem;
  text-align: ${({center:e})=>e?`center`:`left`};
  vertical-align: middle;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,W.span`
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,W.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  margin: auto;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.64rem;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,W.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,W.div`
  padding: 1.5rem;
  text-align: center;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.75rem;
`,W.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.74rem;
`,W.th`
  padding: 0.5rem 0.85rem;
  text-align: left;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
`,W.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({deleted:e,theme:t})=>e?`#fef2f210`:t.colors?.card||`#fff`};
  opacity: ${({deleted:e})=>e?.65:1};
  transition: background 0.12s;

  &:last-child { border-bottom: none; }
`,W.td`
  padding: 0.6rem 0.85rem;
  vertical-align: middle;
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,W.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`,W.div`
  font-size: 0.73rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  line-height: 1.55;
`,W.span`
  font-size: 0.65rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  display: block;
`,W.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,W.div`
  padding: 2rem;
  text-align: center;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  svg { opacity: 0.3; }
`,W.tr`
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}05`:`#faf9ff`};
`,W.td`
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
`,W.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 0.5rem;
  align-items: end;
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({full:e})=>e&&`grid-column: 1 / -1;`}
`,W.label`
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`;var Rg=xi`
  padding: 0.33rem 0.5rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.74rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`;W.input`${Rg}`,W.select`${Rg}`,W.div`
  display: flex;
  gap: 0.3rem;
  padding-bottom: 1px;
`;function zg(e){return X({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0`},child:[]}]})(e)}var Bg=W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,Vg=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`,Hg=W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  border-radius: 8px;
  background: #fafafa;
  border: 1px dashed ${({theme:e})=>e.colors.border};

  span {
    color: #666;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    gap: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;var Ug=W.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: white;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 45%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Wg=W.input`
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: white;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;W.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  overflow-y: hidden;

  th {
    text-align: left;
    padding: 12px;
    background: #f3f4f6;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`;var Gg=W.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Kg=W.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,qg=W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,Jg=W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.accentLight};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;W.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e,variant:t})=>t===`primary`?`${e.colors.primary}10`:t===`success`?`${e.colors.success}10`:`transparent`};
  border-radius:  ${({theme:e})=>e.borderRadius.lg};
`,W.span`
  font-weight: 700;
  min-width: 25px;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
`;var Yg=W.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  /* background: ${({theme:e,variant:t})=>`${e.colors.primary}10`}; */
`,Xg=W.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`,Zg=W.input`
  flex: 1;
  padding: ${Z.spacing.sm} ${Z.spacing.md};
  border: 1px solid ${Z.colors.border};
  border-radius: ${Z.borderRadius.md};
  font-family: ${Z.fonts.body};
  font-size: ${Z.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${Z.colors.primary};
  }
  
  &::placeholder {
    color: ${Z.colors.textLight};
  }
`,Qg=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,$g=`activityListSelection`,e_=()=>{if(typeof window>`u`)return null;try{let e=window.sessionStorage.getItem($g);return e?JSON.parse(e):null}catch{return null}},t_=[(0,Y.jsxs)(Y.Fragment,{children:[`Customer`,(0,Y.jsx)(`br`,{}),`Order Item ID`]}),(0,Y.jsxs)(Y.Fragment,{children:[`Audit Type`,(0,Y.jsx)(`br`,{}),`Store Location`]}),`Planned Date`,`Plan slots`,`Status`,`Actions`];function n_(e={}){let{start_date:t,end_date:n,retainer_list:r=[]}=e;return r.filter(e=>e.a_type===`P`&&e.start_date===t&&e.end_date===n)}var r_=(e=[],t=[])=>{let n=e.reduce((e,t)=>{let n=t.order_item_id;return e[n]||(e[n]={order_item_id:n,order_item_key:t.order_item_key||`--`,product_name:t.product_name||`--`,customer_name:t.customer_name||`--`,store_name:``,audit_type:``,planned_start_date:t.planned_start_date,planned_end_date:t.planned_end_date,total_planned_item:0,grouped_data:[],claims:[]}),e[n].total_planned_item+=1,e[n].store_name+=` ${t.store_name||``}`,e[n].audit_type+=` ${t.audit_type||``}`,t.planned_start_date&&(!e[n].planned_start_date||new Date(t.planned_start_date)<new Date(e[n].planned_start_date))&&(e[n].planned_start_date=t.planned_start_date),t.planned_end_date&&(!e[n].planned_end_date||new Date(t.planned_end_date)>new Date(e[n].planned_end_date))&&(e[n].planned_end_date=t.planned_end_date),t.claims&&Array.isArray(t.claims)&&t.claims.forEach(t=>{e[n].claims.some(e=>e.master_claim_id===t.master_claim_id)||e[n].claims.push(t)}),e[n].grouped_data.push(t),e},{});return Object.values(n).map(e=>{let n=Zf(e.grouped_data,t);return{...e,...n}})},i_=()=>{let e=new Date,t=Ne(),n=e_(),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(null),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(!1),[h,g]=(0,v.useState)({search:``,status:``}),[_,y]=(0,v.useState)(null),[b,x]=(0,v.useState)([]),[S,C]=(0,v.useState)([]),[w,T]=(0,v.useState)([]),[E,D]=(0,v.useState)(n?.tab||`month`),[O,k]=(0,v.useState)(n?.activeRangeType||`month`),[A,j]=(0,v.useState)(0),M=localStorage.getItem(`cust_emp_id`),[N,P]=(0,v.useState)(()=>{let e=n?.dateRange;return e?.start&&e?.end?e:Tf({type:`current`,mode:`month`})}),[F,I]=(0,v.useState)(e.toISOString().split(`T`)[0]),L=()=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`,R=()=>{let t=new Date(e),n=t.getDay()||7;t.setDate(t.getDate()+4-n);let r=new Date(t.getFullYear(),0,1),i=Math.ceil(((t-r)/864e5+1)/7);return`${t.getFullYear()}-W${String(i).padStart(2,`0`)}`},[z,B]=(0,v.useState)(n?.selectedMonth||L()),[V,H]=(0,v.useState)(n?.selectedWeek||R()),U=(0,v.useCallback)((e,t=w)=>Array.isArray(e)?e.map(e=>{let n=Pf(t,e);return{...e,claims:n,hasClaim:n.length>0}}):[],[w]);(0,v.useEffect)(()=>{typeof window<`u`&&window.sessionStorage.setItem($g,JSON.stringify({tab:E,activeRangeType:O,selectedMonth:z,selectedWeek:V,dateRange:N}))},[E,O,z,V,N]),(0,v.useEffect)(()=>{M&&ie(N.start,N.end)},[M,N.start,N.end]);let ee=(0,v.useCallback)(async()=>{if(M)try{let e=(await il({emp_id:M}))?.data?.[0]||{};if(!e.id){T([]);return}let t=(await dl(`GET`,e.id,`CY`))?.data||[];T(t),x(e=>U(e,t))}catch(e){console.error(e),G.error(`Failed to load claims`),T([])}},[M,U]);(0,v.useEffect)(()=>{M&&ee()},[M]);let te=e=>{let t=e.target.value;B(t);let[n,r]=t.split(`-`).map(Number),i=new Date(n,r-1,1),a=new Date(n,r,0),o={start:Ef(i),end:Ef(a)};P(o),ie(o.start,o.end)},ne=e=>{let t=e.target.value;H(t);let n=Df(t),r={start:Ef(new Date(n.start)),end:Ef(new Date(n.end))};P(r),ie(r.start,r.end)},re=e=>{if(k(e),e===`month`){let[e,t]=z.split(`-`).map(Number),n=new Date(e,t-1,1),r=new Date(e,t,0),i={start:Ef(n),end:Ef(r)};P(i),ie(i.start,i.end)}else{let e=Df(V),t={start:Ef(new Date(e.start)),end:Ef(new Date(e.end))};P(t),ie(t.start,t.end)}},ie=async(e,t)=>{let n=localStorage.getItem(`cust_emp_id`),r=e||N.start,a=t||N.end,o=new Date(r);if(new Date(a)<o)return G.info(`End date cannot be earlier than start date`),!1;let s={emp_id:n,start_date:bf(r),end_date:bf(a)};i(!0);try{let[e,t]=await Promise.all([al(s),ol(s)]),n=t?.data||[];C(n),x(U(Ff(e?.data||[],n),w))}catch{G.error(`No data found...`),i(!1)}finally{i(!1)}},ae=r_(b,S),oe=Lg({data:ae,fields:[`customer_name`,`order_item_key`,`product_name`,`store_name`,`audit_type`],search:h.search,extraFilters:{activityStatus:h.status}}),{paginatedData:se,currentPage:ce,itemsPerPage:le,totalItems:ue,handlePageChange:de}=Ng((0,v.useMemo)(()=>[...oe].sort((e,t)=>{if(e.activityStatus===`NS`&&t.activityStatus!==`NS`)return-1;if(e.activityStatus!==`NS`&&t.activityStatus===`NS`)return 1;let n=new Date(e.planned_start_date);return new Date(t.planned_start_date)-n}),[oe]),10);console.log(`paginatedData`,se);let fe=e=>{y(t=>t===e.order_item_id?null:e.order_item_id)},pe=(e,n)=>{n.stopPropagation(),u(e),t(`/resource-list`,{state:{data:e,resourcePlannedList:S}})},me=()=>{typeof window<`u`&&window.sessionStorage.removeItem($g);let e=L(),t=Tf({type:`current`,mode:`month`});g({search:``,status:`ALL`}),D(`month`),k(`month`),B(e),H(R()),P(t),ie(t.start,t.end)},he=(e,t)=>e.filter(e=>e.statusDisplay===t).length,ge=he(ae,`Not Planned`),_e=he(ae,`Not Started`),ve=he(ae,`Actual Submitted`),ye=he(ae,`Plan Approved`),be=he(ae,`Plan Submitted`),xe=[{icon:(0,Y.jsx)(zu,{}),label:`Total Audit Item`,value:ae.length,color:`primary`,onClick:e=>g({...e,status:`ALL`})},{icon:(0,Y.jsx)(Hl,{}),label:`Resource Not Planned`,value:ge,color:`error`,onClick:e=>g({...e,status:`NS`})},{icon:(0,Y.jsx)(Yl,{}),label:`Resource Planned Submitted`,value:be,color:`info`,onClick:e=>g({...e,status:`PS`})},{icon:(0,Y.jsx)(Hu,{}),label:`Audit Actual Submitted`,value:ve,color:`success`,onClick:e=>g({...e,status:`AS`})},{icon:(0,Y.jsx)(Eu,{}),label:`In Progress`,value:_e,color:`info`,onClick:e=>g({...e,status:`P`})},{icon:(0,Y.jsx)(zg,{}),label:`Planned Approved`,value:ye,color:`info`,onClick:e=>g({...e,status:`PA`})}];return console.log(`paginatedData`,se),(0,Y.jsxs)(Jd,{title:`Audit/OrderItem Allocation List`,children:[(0,Y.jsxs)(Vg,{children:[(0,Y.jsx)(Bg,{children:`Track and manage your assigned audit tasks`}),(0,Y.jsx)(`div`,{})]}),(0,Y.jsx)(Qg,{children:xe.map(e=>(0,Y.jsx)(lf,{icon:e.icon,label:e.label,value:e.value,color:e.color,sections:e?.sections,onClick:()=>{e?.onClick(),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},onItemClick:t=>{e.onItemClick(t),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}}))}),(0,Y.jsxs)(mf,{children:[(0,Y.jsx)(Kp,{tabs:[{key:`month`,label:`Monthly view`},{key:`week`,label:`Weekly view`}],activeTab:E,setActiveTab:e=>{D(e),re(e)}}),(0,Y.jsxs)(Hg,{style:{marginBottom:`1rem`},children:[(0,Y.jsx)(Zg,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:h.search,onChange:e=>g(t=>({...t,search:e.target.value}))}),E===`month`&&(0,Y.jsx)(Wg,{type:`month`,value:z,onChange:te}),E===`week`&&(0,Y.jsx)(Wg,{type:`week`,value:V,onChange:ne}),(0,Y.jsxs)(Ug,{name:`status`,value:h.status,onChange:e=>g(t=>({...t,status:e.target.value})),children:[(0,Y.jsx)(`option`,{value:`ALL`,children:`All`}),(0,Y.jsx)(`option`,{value:`NA`,children:`Not Assigned`}),(0,Y.jsx)(`option`,{value:`P`,children:`In Progress`}),(0,Y.jsx)(`option`,{value:`C`,children:`Completed`}),(0,Y.jsx)(`option`,{value:`NS`,children:`Not Started`})]}),(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,onClick:me,children:`Clear Filters`})]}),(0,Y.jsx)(mg,{columns:t_,data:[...se],isLoading:r,modifiedId:!0,modifiedIdName:`order_item_id`,expandedRow:_,rowAction:fe,renderRow:e=>{let n=e?.grouped_data?.[0]||{};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(lg,{children:[(0,Y.jsx)(Kg,{children:e.customer_name}),` `,(0,Y.jsx)(qg,{children:e?.order_item_key})]}),(0,Y.jsxs)(lg,{children:[e.product_name,(0,Y.jsx)(`br`,{}),(0,Y.jsx)(Jg,{title:n.store_name||`-`,children:n?.store_name||`-`})]}),(0,Y.jsx)(lg,{children:e.planned_start_date===e.planned_end_date?yf(e.planned_start_date):(0,Y.jsxs)(Y.Fragment,{children:[yf(e.planned_start_date),(0,Y.jsx)(`br`,{}),yf(e.planned_end_date)]})}),(0,Y.jsx)(lg,{style:{paddingLeft:`2.5rem`},children:e.total_planned_item||0}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:If(e.activityStatus),children:e.statusDisplay})}),(0,Y.jsx)(lg,{children:(0,Y.jsxs)(Gg,{children:[e.total_planned_item===1&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?(0,Y.jsxs)(Q,{size:`sm`,variant:`primary`,onClick:t=>{t.stopPropagation(),pe(e?.grouped_data?.[0]||{},t)},children:[(0,Y.jsx)(Gl,{size:16}),`Assign Resources`]}):(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:t=>{t.stopPropagation(),fe(e)},children:[_===e.order_item_id?(0,Y.jsx)(Fu,{size:16}):(0,Y.jsx)(Pu,{size:16}),_===e.order_item_id?`Hide Allocations`:`View Allocations`]}),(e.activityStatus===`C`||e.activityStatus===`AP`||e.activityStatus===`AS`)&&(0,Y.jsxs)(Q,{size:`sm`,onClick:n=>{n.stopPropagation(),t(`/clamDetails`,{state:{data:{...e,claims:e?.claims||[],mode:`ADD`}}})},children:[(0,Y.jsx)(bu,{}),`Claim`]})]})})]})},renderExpandedRow:e=>{let t=e?.grouped_data||[];return(0,Y.jsx)(mg,{columns:[`Sl No.`,`Planned Date`,`Planned Resource`,`Status`,`Action`],data:t,renderRow:e=>{let n=t.findIndex(t=>t===e),r=n_(e?.original_P)?.[0],i=e?.original_A?.resource_list?.length>0,a=e.planned_start_date===e.planned_end_date?yf(e.planned_start_date):`${yf(e.planned_start_date)} to ${yf(e.planned_end_date)}`;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(lg,{style:{paddingLeft:`1.5rem`},children:n+1}),(0,Y.jsx)(lg,{children:a}),(0,Y.jsx)(lg,{children:(0,Y.jsxs)(Yg,{children:[(0,Y.jsx)(Xg,{variant:`primary`,children:r?.tl_count||0}),` `,`TL /`,` `,(0,Y.jsx)(Xg,{variant:`primary`,children:r?.ex_count||0}),` `,`EX`]})}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:If(e.activityStatus),children:e.statusDisplay})}),(0,Y.jsx)(lg,{children:(0,Y.jsxs)(Q,{size:`sm`,variant:!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?`primary`:`outline`,onClick:t=>{t.stopPropagation(),pe(e,t)},children:[!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?(0,Y.jsx)(Gl,{}):(0,Y.jsx)(Pu,{}),!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?`Assign`:`View`,` `,`Resources`]})})]})}})}}),(0,Y.jsx)(Om,{totalItems:ue,itemsPerPage:le,currentPage:ce,onPageChange:de,siblingCount:2})]})]})},a_=(0,v.createContext)(null),o_=({children:e})=>{let[t,n]=(0,v.useState)({data:[],loading:!1,error:null}),[r,i]=(0,v.useState)({data:[],loading:!1,error:null}),[a,o]=(0,v.useState)({data:[],loading:!1,error:null}),[s,c]=(0,v.useState)({data:[],loading:!1,error:null}),l=(0,v.useCallback)(async(e={},t=[])=>{n(e=>({...e,loading:!0,error:null}));try{let r=await al(e),i=Array.isArray(t)&&t.length>0?t:s.data,a=Ff(r?.data,i);return n({data:a,loading:!1,error:null}),a}catch(e){throw n({data:[],loading:!1,error:e}),e}},[s.data]),u=(0,v.useCallback)(async(e={})=>{c(e=>({...e,loading:!0,error:null}));try{let t=((await ol(e))?.data||[]).map(e=>({...e,start_date:e.start_date?$(e.start_date,!0):e.s_date?$(e.s_date,!0):``,end_date:e.end_date?$(e.end_date,!0):e.e_date?$(e.e_date,!0):``}));return c({data:t,loading:!1,error:null}),t}catch(e){throw c({data:[],loading:!1,error:e}),console.error(`Failed to load allocations`,e),e}},[]),d=(0,v.useCallback)(async(e={})=>{o(e=>({...e,loading:!0,error:null}));try{let t=(await il(e))?.data||[];return o({data:t,loading:!1,error:null}),t}catch(e){throw o({data:[],loading:!1,error:e}),e}},[]),f=(0,v.useCallback)(async(e,t,n)=>{i(e=>({...e,loading:!0,error:null}));try{let r=(await dl(e,t,n))?.data||[];return i({data:r,loading:!1,error:null}),r}catch(e){throw i({data:[],loading:!1,error:e}),e}},[]),p=e=>{if(typeof window>`u`)return null;try{let t=window.sessionStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},m=(0,v.useMemo)(()=>({activityState:t,fetchEmpActivityAllocations:l,employeeState:a,fetchEmployees:d,claimState:r,fetchClaims:f,fetchContractAllocations:u,getStoredActivityListSelection:p,resourceAllocationState:s}),[t,a,r,l,d,f,u,s]);return(0,Y.jsx)(a_.Provider,{value:m,children:e})};W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`,W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W.input`
  flex: 1;
  padding: ${({theme:e})=>{e.spacing.sm}} ${({theme:e})=>{e.spacing.md}};
  border: 1px solid ${({theme:e})=>{e.colors.border}};
  border-radius: ${({theme:e})=>{e.borderRadius.md}};
  font-family: ${({theme:e})=>{e.fonts.body}};
  font-size: ${({theme:e})=>{e.fontSizes.sm}};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{e.colors.primary}};
  }
  
  &::placeholder {
    color: ${({theme:e})=>{e.colors.textLight}};
  }
`,W.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: white;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 45%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,W.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,W.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.accentLight};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  /* background: ${({theme:e,variant:t})=>`${e.colors.primary}10`}; */
`,W.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;var s_=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`,c_=W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,l_=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,u_=()=>{let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)([]),i=localStorage.getItem(`cust_emp_id`),[a,o]=(0,v.useState)(`month`),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)([]),[d,f]=(0,v.useState)(()=>Tf({type:`current`,mode:`month`})),[p,m]=(0,v.useState)(0);(0,v.useEffect)(()=>{i&&(h(),_(),g())},[i]);let h=async(e,n)=>{let r=localStorage.getItem(`cust_emp_id`),i=e||d.start,a=n||d.end,o=new Date(i);if(new Date(a)<o)return toast.info(`End date cannot be earlier than start date`),!1;let s={emp_id:r,start_date:bf(i),end_date:bf(a)};c(!0);try{t(Ff((await al(s)).data))}catch{toast.error(`No data found...`),c(!1)}finally{c(!1)}},g=async(e,t)=>{let n=localStorage.getItem(`cust_emp_id`),r=e||d.start,i=t||d.end,a=new Date(r);if(new Date(i)<a)return toast.info(`End date cannot be earlier than start date`),!1;let o={emp_id:n,start_date:bf(r),end_date:bf(i)};c(!0);try{u((await ol(o)).data)}catch{toast.error(`No data found...`),c(!1)}finally{c(!1)}},_=(0,v.useCallback)(async()=>{if(i)try{let e=(await il({emp_id:i}))?.data?.[0]||{};e.id&&r((await dl(`GET`,e.id,`CY`))?.data||[])}catch(e){console.error(e),toast.error(`Failed to load profile or claims`),r([])}},[i]),y=(0,v.useMemo)(()=>{if(!Array.isArray(n))return[];let e=d.start,t=d.end;return n.filter(n=>n?.claim_date?n.claim_items.some(n=>{if(!n?.expense_date)return!1;let r=$(n?.expense_date,!0);return r>=e&&r<=t}):!1)},[n,d.start,d.end]),b=(0,v.useMemo)(()=>Array.isArray(e)?e.map(e=>{let t=Pf(y,e);return{...e,claims:t,hasClaim:t.length>0}}):[],[e,y]);console.log(`activitiesWithClaims`,b);let x=(0,v.useMemo)(()=>{if(!Array.isArray(b)||!Array.isArray(l))return[];let e=e=>e==null?``:String(e).replace(/^0+/,``),t=new Map;l.forEach(n=>{let r=e(n?.allocation_id);r&&t.set(r,n)});let n={};return b.forEach(r=>{let i=r?.original_P?.order_item_id||r?.order_item_id;if(!i)return;let a=e(i);n[a]||(n[a]={order_item_key:i,customer_name:r?.customer_name||`-`,plannedAllocations:new Map,actualAllocations:new Map});let o=n[a],s=e(r?.p_id);if(s){let e=t.get(s);e&&o.plannedAllocations.set(s,e)}(Array.isArray(r?.allAEntries)?r.allAEntries:Array.isArray(r?.original_A?.allAEntries)?r.original_A.allAEntries:[]).forEach(n=>{let r=e(n?.id);if(!r)return;let i=t.get(r);i&&o.actualAllocations.set(r,i)})}),Object.values(n).map(t=>{let n=e(t.order_item_id),r=Array.from(t.plannedAllocations.values()),i=Array.from(t.actualAllocations.values()),a=y.map(t=>{let r=(t?.claim_items||[]).filter(t=>e(t?.o_item_id)===n);return r.length===0?null:{...t,claim_items:r}}).filter(Boolean),o=e=>String(e?.emp_type||e?.employee_type||e?.resource_type||``).toUpperCase(),s=r.filter(e=>o(e)===`T`),c=r.filter(e=>o(e)===`E`),l=i.filter(e=>o(e)===`T`),u=i.filter(e=>o(e)===`E`),d=e=>e.reduce((e,t)=>e+Number(t?.contract_rate||0),0),f=d(s),p=d(c),m=d(l),h=d(u),g=f+p,_=m+h,v=a.flatMap(e=>e?.claim_items||[]),b=v.reduce((e,t)=>e+Number(t?.expense_amt||t?.claim_amt||t?.amount||0),0),x=v.reduce((e,t)=>e+Number(t?.settlement_amt||0),0),S=`Not Claimed`;return v.length>0&&(S=v.every(e=>e?.is_approved)?`Approved`:`Pending`),{order_item_key:t.order_item_key,customer_name:t.customer_name,plannedTLCount:s.length,plannedEXCount:c.length,plannedTLRate:f,plannedEXRate:p,totalPlannedRate:g,actualTLCount:l.length,actualEXCount:u.length,actualTLRate:m,actualEXRate:h,totalActualRate:_,totalRate:_,totalClaimAmount:b,totalSettlement:x,claimsCount:v.length,status:S,plannedAllocations:r,actualAllocations:i,claims:a,claimItems:v}})},[b,l,y]);console.log(`activitiesWithClaims`,b),console.log(`resourcePlannedList`,l),console.log(`profitabilityData`,x);let S=(0,v.useMemo)(()=>{let e={};return b.forEach(t=>{let n=t?.original_P?.order_item_key||t?.order_item_key||`UNKNOWN`;e[n]||(e[n]={order_item_key:n,customer_name:t.customer_name,grouped_data:[]}),e[n].grouped_data.push(t)}),Object.values(e).map(e=>{let t=[...e.grouped_data].sort((e,t)=>(e.planned_start_date||``).localeCompare(t.planned_start_date||``)),n=t[0]?.planned_start_date||null,r=t[t.length-1]?.planned_end_date||null,i=t.flatMap(e=>Array.isArray(e.claims)?e.claims:[]),a=new Map;i.forEach(e=>{let t=e?.id||e?.claim_id;t!=null&&!a.has(t)&&a.set(t,e)});let o=Array.from(a.values()),s=Array.from(a.values()).flatMap(e=>Array.isArray(e.claim_items)?e.claim_items:[]),c=o.reduce((e,t)=>e+Number(t?.expense_amt||0),0),l=o.reduce((e,t)=>e+Number(t?.settlement_amt||0),0),u=s.filter(e=>e?.is_approved).length,d=s.length,f=o;return{...e,items:t,grouped_data:t,earliestPlannedDate:n,latestPlannedDate:r,claimsCount:d,totalOPE:c,totalSettlement:l,approvedCount:u,claimsItem:f}}).sort((e,t)=>(e.earliestPlannedDate||``).localeCompare(t.earliestPlannedDate||``))},[b]),C=e=>{o(e),m(0);let t=Tf({type:`current`,mode:e,offset:0});f(t),h(t.start,t.end)},w=e=>{let t=p+e;m(t);let n=Tf({type:`current`,mode:a,offset:t});f(n),h(n.start,n.end)},T=[{label:`Total Order Items`,value:S.length,color:`primary`,icon:(0,Y.jsx)(Wu,{})},{label:`Total Cost`,value:`120,000`,color:`warning`,icon:(0,Y.jsx)(zl,{})},{label:`Total OPE`,value:`15,000`,color:`success`,icon:(0,Y.jsx)(ju,{})},{label:`AMOUNT TO BE PAID`,value:`135,000`,color:`error`,icon:(0,Y.jsx)(Ou,{})}];return console.log(`groupedActivities`,S),(0,Y.jsxs)(Jd,{children:[(0,Y.jsxs)(s_,{children:[(0,Y.jsx)(c_,{children:`Track and manage your clams`}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,Y.jsx)(Q,{variant:a===`month`?`primary`:`outline`,onClick:()=>C(`month`),children:`Month`}),(0,Y.jsx)(Q,{variant:a===`week`?`primary`:`outline`,onClick:()=>C(`week`),children:`Week`})]}),(0,Y.jsxs)(`div`,{style:{marginTop:`0.5rem`,fontWeight:`bold`,fontSize:`1.1rem`,color:`#333`,display:`flex`,alignItems:`center`,gap:`0.8rem`},children:[(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>w(-1),children:`< Prev`}),(0,Y.jsx)(`span`,{children:a===`month`?Cf(d.start):Sf(d.start,d.end)}),(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>w(1),children:`Next >`})]})]})]}),(0,Y.jsx)(l_,{children:T.map(e=>(0,Y.jsx)(lf,{label:e.label,value:e.value,icon:e.icon,color:e.color}))})]})},d_=W.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: ${({theme:e})=>e.spacing?.md||`1rem`};
`,f_=W.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 99px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f5f7`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.5rem`};
  color: ${({theme:e})=>e.colors?.text||`#333`};

  svg {
    color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }

  span {
    color: ${({theme:e})=>e.colors?.textLight||`#888`};
    margin-right: 0.15rem;
  }
`,p_=W.div`
  position: relative;
  display: inline-block;
  flex: 1;
`,m_=W.input`
  padding: ${({theme:e})=>`${e?.spacing?.sm||`0.35rem`} ${e?.spacing?.lg||`1.2rem`}`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.375rem;
  font-size: 0.72rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`,h_=W.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
  display: flex;
  align-items: center;
`,g_=W.select`
  padding: ${({theme:e})=>`${e?.spacing?.sm||`0.35rem`} ${e?.spacing?.md||`0.8rem`}`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.375rem;
  font-size: 0.72rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`,__=W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,v_=W.span`
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,y_=W.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({color:e})=>e||`#e5e7eb`};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-transform: uppercase;
`;W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #ef4444;
  margin-left: 0.25rem;
`;var b_=e=>({num:String(e.getDate()).padStart(2,`0`),dow:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`][e.getDay()]}),x_=[`#6C5CE7`,`#0984e3`,`#00b894`,`#e17055`,`#fd79a8`,`#74b9ff`,`#55efc4`],S_=e=>x_[(e||``).charCodeAt(0)%x_.length],C_=e=>(e||``).split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase(),w_=({employees:e,dayWindow:t,activityData:n,activityDates:r,activityStart:i,activityEnd:a,workingAllocations:o,busyDateMap:s,employeeDateMap:c,handleToggleAllocation:l,handleAutoAssign:u,handleUndoAutoAssign:d,lastAutoAssign:f})=>{let[p,m]=(0,v.useState)({search:``,roleFilter:`ALL`}),h=(0,v.useMemo)(()=>e.map(e=>({...e,role:Number(e.grade_level)>1?`TL`:`EX`})),[e]),[g,_]=(0,v.useState)(0),y=t.length>6,b=(0,v.useMemo)(()=>y?t.slice(g,g+6):t,[t,g,y]),x=g>0,S=g+6<t.length,C=()=>_(e=>Math.max(0,e-6)),w=()=>_(e=>Math.min(t.length-6,e+6)),T=Lg({data:h,fields:[`name`,`emp_id`],search:p.search,extraFilters:p.roleFilter===`ALL`?{}:{role:p.roleFilter}}),{paginatedData:E,currentPage:D,itemsPerPage:O,totalItems:k,handlePageChange:A}=Ng(T,25),j=(n?.original_P?.retainer_list||[]).find(e=>e.a_type===`P`&&e.start_date===n?.original_P?.start_date&&e.end_date===n?.original_P?.end_date),M=j?.tl_count||0,N=j?.ex_count||0;o.filter(e=>e.emp_type===`T`&&e.action!==`DELETE`).length,o.filter(e=>e.emp_type===`E`&&e.action!==`DELETE`).length;let P=(0,v.useMemo)(()=>{let e=[`Resource`];return y&&e.push((0,Y.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,Y.jsx)(Q,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!x,onClick:C,title:`Previous 7 days`,children:(0,Y.jsx)(Vu,{size:11})})})),b.forEach(t=>{let{num:n,dow:r}=b_(t);e.push(`${n} ${r}`)}),y&&e.push((0,Y.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,Y.jsx)(Q,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!S,onClick:w,title:`Next 7 days`,children:(0,Y.jsx)(Bu,{size:11})})})),e.push(`Action`),e},[b]),F=(0,v.useMemo)(()=>{let e={};t.forEach(t=>{let n=xf(t);e[n]={tl:0,ex:0}});let n={};return h.forEach(e=>{n[e.emp_id]=e.role}),Object.entries(c).forEach(([t,r])=>{let i=n[t];i&&Object.entries(r).forEach(([t,n])=>{!n||!e[t]||(i===`TL`?e[t].tl+=1:e[t].ex+=1)})}),e},[c,h,t]);return(0,v.useMemo)(()=>o.filter(e=>e.emp_type===`T`&&e.action!==`DELETE`).length,[o]),(0,v.useMemo)(()=>o.filter(e=>e.emp_type===`E`&&e.action!==`DELETE`).length,[o]),(0,Y.jsxs)(mf,{hoverable:!1,title:`Resource Availability (${yf(i)} – ${yf(a)}})`,children:[(0,Y.jsxs)(d_,{children:[(0,Y.jsxs)(f_,{children:[(0,Y.jsx)(Uu,{size:10}),(0,Y.jsx)(`span`,{children:`Activity:`}),yf(i),` – `,yf(a)]}),(0,Y.jsxs)(f_,{children:[(0,Y.jsx)(Bl,{size:10}),`TL`,(0,Y.jsx)(`span`,{style:{fontWeight:600},children:`Planned:`}),` `,M]}),(0,Y.jsxs)(f_,{children:[(0,Y.jsx)(Vl,{size:10}),`EX`,(0,Y.jsx)(`span`,{style:{fontWeight:600},children:`Planned:`}),` `,N]})]}),(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,marginBottom:`0.75rem`},children:[y&&(0,Y.jsx)(Q,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!x,onClick:C,title:`Previous 7 days`,children:(0,Y.jsx)(Vu,{size:11})}),b.map(e=>{let t=xf(e),{num:n,dow:r}=b_(e),i=F[t]||{tl:0,ex:0};return(0,Y.jsxs)(f_,{style:{fontSize:`0.75rem`},children:[(0,Y.jsxs)(`span`,{style:{fontWeight:600},children:[n,` `,r,`:`]}),` TL `,i.tl,` · EX `,i.ex]},t)}),y&&(0,Y.jsx)(Q,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!S,onClick:w,title:`Next 7 days`,children:(0,Y.jsx)(Bu,{size:11})})]}),(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`,marginBottom:`1rem`},children:[(0,Y.jsxs)(p_,{children:[(0,Y.jsx)(h_,{children:(0,Y.jsx)(uu,{size:11})}),(0,Y.jsx)(m_,{placeholder:`Search resources...`,value:p.search,onChange:e=>m(t=>({...t,search:e.target.value}))})]}),(0,Y.jsxs)(g_,{value:p.roleFilter,onChange:e=>m(t=>({...t,roleFilter:e.target.value})),children:[(0,Y.jsx)(`option`,{value:`ALL`,children:`All Roles`}),(0,Y.jsx)(`option`,{value:`TL`,children:`Team Leads (TL)`}),(0,Y.jsx)(`option`,{value:`EX`,children:`Executives (EX)`})]})]}),(0,Y.jsx)(mg,{columns:P,data:E,emptyMessage:`No matching employees found`,renderRow:e=>{let t=r.some(t=>{let n=xf(t),r=!!c[e.emp_id]?.[n],i=!!s[e.emp_id]?.[n];return!r&&!i});return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(lg,{children:(0,Y.jsxs)(__,{children:[(0,Y.jsx)(y_,{color:S_(e.name),style:{width:24,height:24,fontSize:`0.55rem`},children:C_(e.name)}),(0,Y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minWidth:0,flex:1},children:[(0,Y.jsx)(v_,{children:e.name}),(0,Y.jsxs)(`span`,{style:{fontSize:`0.62rem`,color:`#999`},children:[e.emp_id,` • `,(0,Y.jsx)(gf,{variant:e.role===`TL`?`forward`:`info`,children:e.role})]})]})]})}),y&&(0,Y.jsx)(lg,{}),b.map(t=>{let n=xf(t),r=!!c[e.emp_id]?.[n],i=!!s[e.emp_id]?.[n],o=a?n>$(a,!0):!1;return(0,Y.jsx)(lg,{style:{textAlign:`left`},children:(0,Y.jsx)(`input`,{type:`checkbox`,checked:r||i,disabled:i,onChange:t=>l(e,n,t.target.checked),style:{width:16,height:16,accentColor:`#6C5CE7`,cursor:i?`not-allowed`:`pointer`},title:r?`Already assigned on this date`:i?`Not available on this date`:o?`After activity end date`:`Click to select`})},n)}),y&&(0,Y.jsx)(lg,{}),(0,Y.jsx)(lg,{children:(0,Y.jsxs)(`div`,{style:{marginLeft:`0.5rem`},children:[t?(0,Y.jsx)(Q,{variant:`primary`,iconOnly:!0,onClick:()=>u(e),title:`Click to auto-assign available dates`,children:(0,Y.jsx)(Gl,{size:12})}):(0,Y.jsx)(Q,{variant:`outline`,iconOnly:!0,disabled:!0,title:`Already assigned / No free dates for this activity`,children:(0,Y.jsx)(Hu,{size:11})}),f?.[e.emp_id]?.length>0&&(0,Y.jsx)(Q,{variant:`outline`,iconOnly:!0,onClick:()=>d(e),title:`Undo last auto-assign for this resource`,children:(0,Y.jsx)(Zl,{size:11})})]})})]})}}),T.length>0&&(0,Y.jsx)(Om,{totalItems:k,itemsPerPage:O,currentPage:D,onPageChange:A})]})},T_=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate())},E_=(e,t)=>{let n=[];Object.entries(e).forEach(([e,t])=>{(t.rows||[]).forEach(t=>{let r=$(e,!0);n.push({id:t.resource_id??null,emp_id:t.emp_id,emp_type:t.emp_type,remarks:t.remarks||``,contract_rate:Number(t.contract_rate)||0,start_date:r,end_date:r,rowKey:t.rowKey})})});let r=[];t.forEach(e=>{let t=T_(e.s_date),n=T_(e.e_date);if(!t||!n)return;let i=new Date(t);for(;i<=n;){let t=$(i,!0);r.push({id:e.id,emp_id:e.emp_id,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:Number(e.contract_rate)||0,start_date:t,end_date:t}),i.setDate(i.getDate()+1)}});let i=Kf(n),a=Kf(r),o={};a.forEach(e=>{o[e.id]=e});let s=[],c=[],l=[],u=new Set;return i.forEach(e=>{let t={emp_id:e.emp_id,emp_type:e.emp_type,start_date:$(e.start_date),end_date:$(e.end_date),remarks:e.remarks||``,contract_rate:e.contract_rate||0};if(e.id==null){s.push(t);return}u.add(e.id);let n=o[e.id];if(!n){s.push(t);return}e.start_date!==n.start_date||e.end_date!==n.end_date||e.emp_type!==n.emp_type||(e.remarks||``)!==(n.remarks||``)||String(e.contract_rate??``)!==String(n.contract_rate??``)?c.push({...t,id:e.id,is_updated:!0}):l.push({id:e.id,emp_id:e.emp_id,emp_type:e.emp_type})}),{addPayload:s,updatePayload:c,deletePayload:a.filter(e=>!u.has(e.id)).map(e=>({id:e.id,is_deleted:!0,emp_type:e.emp_type})),unchangedPayload:l}},D_=e=>{let t=(0,vl.c)(76),{isOpen:n,onClose:r,employees:i,minActualDate:a,maxActualDate:o,isUpdateMode:s,onSave:c}=e,[l,u]=(0,v.useState)(a),[d,f]=(0,v.useState)(o),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=[],t[0]=p):p=t[0];let[m,h]=(0,v.useState)(p),g;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(g={},t[1]=g):g=t[1];let[_,y]=(0,v.useState)(g);(0,v.useState)(``);let[b,x]=(0,v.useState)(`same`),[S,C]=(0,v.useState)(``),w;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(w={},t[2]=w):w=t[2];let[T,E]=(0,v.useState)(w);if(!n)return null;let D=M_,O;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(O=e=>{h(t=>t.includes(e.emp_id)?t.filter(t=>t!==e.emp_id):[...t,e.emp_id]),y(t=>t[e.emp_id]?t:{...t,[e.emp_id]:D(e)})},t[3]=O):O=t[3];let k=O,A;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(A=(e,t)=>{y(n=>({...n,[e]:t}))},t[4]=A):A=t[4];let j=A,M;t[5]!==_||t[6]!==i||t[7]!==d||t[8]!==T||t[9]!==c||t[10]!==b||t[11]!==S||t[12]!==m||t[13]!==l?(M=()=>{if(!l||!d){G.error(`Please select start date and end date`);return}if(l>d){G.error(`Start date cannot be after end date`);return}if(m.length===0){G.error(`Please select at least one resource`);return}c(m.map(e=>{let t=i.find(t=>t.emp_id===e);return{emp_id:e,employee_name:t?.name||``,emp_type:_[e]||D(t),remarks:b===`same`?S:T[e]||``}}),l,d),h([]),y({}),C(``),E({}),x(`same`)},t[5]=_,t[6]=i,t[7]=d,t[8]=T,t[9]=c,t[10]=b,t[11]=S,t[12]=m,t[13]=l,t[14]=M):M=t[14];let N=M,P;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(P=(e,t)=>{E(n=>({...n,[e]:t}))},t[15]=P):P=t[15];let F=P,I=s?`Update Actual`:`Add Actual`,L;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(L={display:`flex`,gap:`1rem`},t[16]=L):L=t[16];let R,z;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(R={flex:1},z=(0,Y.jsx)(k_,{children:`Start Date`}),t[17]=R,t[18]=z):(R=t[17],z=t[18]);let B;t[19]===d?B=t[20]:(B=e=>{let t=e.target.value;u(t),d&&t>d&&f(t)},t[19]=d,t[20]=B);let V;t[21]!==o||t[22]!==a||t[23]!==l||t[24]!==B?(V=(0,Y.jsxs)(O_,{style:R,children:[z,(0,Y.jsx)(A_,{type:`date`,value:l,min:a,max:o,onChange:B})]}),t[21]=o,t[22]=a,t[23]=l,t[24]=B,t[25]=V):V=t[25];let H,U;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(H={flex:1},U=(0,Y.jsx)(k_,{children:`End Date`}),t[26]=H,t[27]=U):(H=t[26],U=t[27]);let ee=l||a,te;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(te=e=>f(e.target.value),t[28]=te):te=t[28];let ne;t[29]!==d||t[30]!==o||t[31]!==ee?(ne=(0,Y.jsxs)(O_,{style:H,children:[U,(0,Y.jsx)(A_,{type:`date`,value:d,min:ee,max:o,onChange:te})]}),t[29]=d,t[30]=o,t[31]=ee,t[32]=ne):ne=t[32];let re;t[33]!==V||t[34]!==ne?(re=(0,Y.jsxs)(`div`,{style:L,children:[V,ne]}),t[33]=V,t[34]=ne,t[35]=re):re=t[35];let ie,ae;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,Y.jsx)(k_,{children:`Remarks Mode`}),ae={display:`flex`,gap:`1rem`},t[36]=ie,t[37]=ae):(ie=t[36],ae=t[37]);let oe;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(oe={display:`flex`,alignItems:`center`,gap:`0.35rem`,fontWeight:400},t[38]=oe):oe=t[38];let se=b===`same`,ce;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(ce=()=>x(`same`),t[39]=ce):ce=t[39];let le;t[40]===se?le=t[41]:(le=(0,Y.jsxs)(k_,{style:oe,children:[(0,Y.jsx)(`input`,{type:`radio`,name:`remarkMode`,checked:se,onChange:ce}),`Same remark for all`]}),t[40]=se,t[41]=le);let ue;t[42]===Symbol.for(`react.memo_cache_sentinel`)?(ue={display:`flex`,alignItems:`center`,gap:`0.35rem`,fontWeight:400},t[42]=ue):ue=t[42];let de=b===`individual`,fe;t[43]===Symbol.for(`react.memo_cache_sentinel`)?(fe=()=>x(`individual`),t[43]=fe):fe=t[43];let pe;t[44]===de?pe=t[45]:(pe=(0,Y.jsxs)(k_,{style:ue,children:[(0,Y.jsx)(`input`,{type:`radio`,name:`remarkMode`,checked:de,onChange:fe}),`Individual remark per resource`]}),t[44]=de,t[45]=pe);let me;t[46]!==le||t[47]!==pe?(me=(0,Y.jsxs)(O_,{children:[ie,(0,Y.jsxs)(`div`,{style:ae,children:[le,pe]})]}),t[46]=le,t[47]=pe,t[48]=me):me=t[48];let he,ge;t[49]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,Y.jsx)(k_,{children:`Select Resources`}),ge={maxHeight:220,overflowY:`auto`,border:`1px solid #eee`,borderRadius:6,padding:`0.5rem`},t[49]=he,t[50]=ge):(he=t[49],ge=t[50]);let _e;if(t[51]!==_||t[52]!==i||t[53]!==T||t[54]!==b||t[55]!==m){let e;t[57]!==_||t[58]!==T||t[59]!==b||t[60]!==m?(e=e=>{let t=m.includes(e.emp_id);return(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.5rem`,padding:`0.35rem 0`,borderBottom:`1px solid #f5f5f5`},children:[(0,Y.jsxs)(k_,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flex:1},children:[(0,Y.jsx)(`input`,{type:`checkbox`,checked:t,onChange:()=>k(e)}),e.name,` (`,e.emp_id,`)`]}),t&&(0,Y.jsxs)(j_,{value:_[e.emp_id]||D(e),onChange:t=>j(e.emp_id,t.target.value),style:{width:140},children:[(0,Y.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),(0,Y.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`})]}),b===`individual`&&(0,Y.jsx)(A_,{type:`text`,placeholder:`Remarks`,value:T[e.emp_id]||``,onChange:t=>F(e.emp_id,t.target.value),style:{width:180}})]},e.emp_id)},t[57]=_,t[58]=T,t[59]=b,t[60]=m,t[61]=e):e=t[61],_e=i.map(e),t[51]=_,t[52]=i,t[53]=T,t[54]=b,t[55]=m,t[56]=_e}else _e=t[56];let ve;t[62]===_e?ve=t[63]:(ve=(0,Y.jsxs)(O_,{children:[he,(0,Y.jsx)(`div`,{style:ge,children:_e})]}),t[62]=_e,t[63]=ve);let ye;t[64]!==b||t[65]!==S?(ye=b===`same`&&(0,Y.jsxs)(O_,{children:[(0,Y.jsx)(k_,{children:`Remarks`}),(0,Y.jsx)(A_,{type:`text`,value:S,onChange:e=>C(e.target.value),placeholder:`Remarks`})]}),t[64]=b,t[65]=S,t[66]=ye):ye=t[66];let be;return t[67]!==N||t[68]!==n||t[69]!==r||t[70]!==re||t[71]!==me||t[72]!==ve||t[73]!==ye||t[74]!==I?(be=(0,Y.jsxs)(Od,{width:`1200px`,isOpen:n,onClose:r,title:I,onSave:N,saveButtonText:`Continue`,cancelButtonText:`Cancel`,children:[re,me,ve,ye]}),t[67]=N,t[68]=n,t[69]=r,t[70]=re,t[71]=me,t[72]=ve,t[73]=ye,t[74]=I,t[75]=be):be=t[75],be},O_=W.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,k_=W.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
`,A_=W.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,j_=W.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;W.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;function M_(e){return Number(e?.grade_level)>1?`T`:`E`}var N_=W.div`
  max-height: 800px;
  overflow-y: auto;

  border-radius: 8px;
`,P_=W.div`
  margin-bottom: 1.5rem;
  border: 1px solid ${({theme:e})=>e.colors?.primary||`#e0e0e0`}88;
  border-radius: 8px;
  overflow: hidden;
`,F_=W.div`
  background: #f8f9fa;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,I_=W.div`
  font-size: ${({theme:e})=>e.fontSize?.md||`0.95rem`};
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#333`};
`,L_=W.div`
  font-size: 0.8rem;
  color: #555;
  strong { color: #222; }
`,R_=W.div`
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: none; }
`,z_=W.div`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors?.primary||`#888`};
  margin-bottom: 8px;
`,B_=W.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,V_=W.div`
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
`,H_=W.div`
  background: ${({$variant:e,theme:t})=>e===`plan`?t.colors?.backgroundAlt||`#f1f5f9`:`#fff7ed`};
  padding: 6px 10px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${({$variant:e})=>e===`plan`?`#334155`:`#9a5b13`};
`,U_=W.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-top: 1px solid #f1f1f1;
  &:first-of-type { border-top: none; }
`,W_=W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,G_=W.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,K_=W.div`
  font-size: 0.68rem;
  color: #888;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,q_=W.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,J_=W.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#0E7A91`};
  white-space: nowrap;
`,Y_=W.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,X_=W.div`
  padding: 14px 10px;
  text-align: center;
  font-size: 0.75rem;
  color: #999;
`,Z_=W.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 8px 12px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f9fafb`};
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #333;
`;W.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
`,W.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.8fr;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f1f5f9`};
  padding: 6px 10px;
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #888;
`,W.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.8fr;
  align-items: center;
  padding: 7px 10px;
  border-top: 1px solid #f1f1f1;
  font-size: 0.76rem;
  color: #333;
`,W.a`
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors?.primary||`#0E7A91`};
  text-decoration: underline;
`,W.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 10px 12px;
  margin-top: 10px;
  background: ${({theme:e})=>e.colors?.primary||`#0E7A91`}1A;
  border: 1px solid ${({theme:e})=>e.colors?.primary||`#0E7A91`}33;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.primary||`#0E7A91`};
`;var Q_=W.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacings?.md||`0.5rem`};
  margin-bottom: ${({theme:e})=>e.spacings?.md||`0.5rem`};
  gap: ${({theme:e})=>e.spacings?.md||`0.5rem`};
`,$_=e=>e===`T`?`TL`:`EX`,ev=e=>[{category:`Travel`,id:`CLM-${e}-01`,amount:1200,file:`#`},{category:`Food`,id:`CLM-${e}-02`,amount:450,file:`#`}],tv=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());let[t,n,r]=String(e).split(`T`)[0].split(`-`).map(Number);return new Date(t,n-1,r)},nv=e=>{if(!e)return``;let t=e instanceof Date?e:tv(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`},rv={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},iv=e=>{if(typeof e!=`string`)return null;let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){let[,e,n,r]=t,i=new Date(Number(e),Number(n)-1,Number(r));return isNaN(i.getTime())?null:i}if(t=e.match(/^(\d{2})-(\d{2})-(\d{4})$/),t){let[,e,n,r]=t,i=new Date(Number(r),Number(n)-1,Number(e));return isNaN(i.getTime())?null:i}if(t=e.match(/^(\d{2})-([A-Za-z]{3})-(\d{4})$/),t){let[,e,n,r]=t,i=rv[n.toLowerCase()];if(i==null)return null;let a=new Date(Number(r),i,Number(e));return isNaN(a.getTime())?null:a}return null},av=({dateWiseAssignments:e,dayWindow:t,editingId:n,handleEditDate:r,handleDeleteDate:i,handleFieldChange:a,handleConfirmUpdate:o,handleCancelEdit:s,activityStart:c,activityEnd:l,activityData:u,employees:d=[],loadAllData:f})=>{let p=localStorage.getItem(`cust_emp_id`),[m,h]=(0,v.useState)(!1),g=new Date,[_,y]=(0,v.useState)(``),[b,x]=(0,v.useState)(``),[S,C]=(0,v.useState)(u?.allAEntries||[]),[w,T]=(0,v.useState)(!1),[E,D]=(0,v.useState)(``),[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``),[M,N]=(0,v.useState)(!1),[P,F]=(0,v.useState)({}),[I,L]=(0,v.useState)(!1),[R,z]=(0,v.useState)(``),[B,V]=(0,v.useState)(``),[H,U]=(0,v.useState)({isOpen:!1,loading:!1,title:`Confirmation`,message:``,confirmLabel:`Confirm`,onConfirm:null});Ne();let[ee,te]=(0,v.useState)(``),[ne,re]=(0,v.useState)(`E`),[ie,ae]=(0,v.useState)(``),[oe,se]=(0,v.useState)(()=>new Set),[ce,le]=(0,v.useState)(()=>new Set),[ue,de]=(0,v.useState)([]),fe=tv(l),pe=fe&&g>fe,me=S.length>0,he=u?.original_A?.id||u?.a_id||null,[ge,_e]=(0,v.useState)(!!he),[ve,ye]=(0,v.useState)(()=>new Set),be=ve.size?[...ve].map(e=>$(e,!0)).sort().at(-1):null,xe=(0,v.useMemo)(()=>{let e={};return S.forEach(t=>{t?.start_date&&t?.id&&(e[t.start_date]=t.id)}),e},[S]);(0,v.useEffect)(()=>{S.length&&ye(e=>{let t=new Set(e);return S.forEach(e=>{e?.start_date&&t.add(e.start_date)}),t})},[S]);let Se=async()=>{try{let e=u?.original_P?.id;if(!e){G.error(`Missing p_id, cannot start activity`);return}let t=new Date,n=$(nv(g)),r=t.toTimeString().slice(0,5),i=new FormData;i.append(`emp_id`,p),i.append(`activity_date`,n),i.append(`call_mode`,`ADD`),i.append(`p_id`,e),i.append(`geo_type`,`I`),i.append(`start_time`,r),i.append(`end_time`,``),await cl(i);for(let[e,t]of i.entries())console.log(e,t);await f(),await we(),G.success(`Activity started.`)}catch(e){G.error(e?.response?.data?.message||`Failed to start activity`)}},Ce=async e=>{try{let t=u?.original_P?.id;if(!t){G.error(`Missing p_id, cannot start activity`);return}let n=new Date,r=$(e),i=n.toTimeString().slice(0,5),a=new FormData;a.append(`emp_id`,p),a.append(`activity_date`,r),a.append(`call_mode`,`ADD`),a.append(`p_id`,t),a.append(`geo_type`,`I`),a.append(`start_time`,i),a.append(`end_time`,``),await cl(a);for(let[e,t]of a.entries())console.log(e,t);await f(),await we(),G.success(`Activity started for ${e}.`)}catch(e){G.error(e?.response?.data?.message||`Failed to start activity`)}},we=(0,v.useCallback)(async()=>{let e=u?.planned_start_date,t=u?.planned_end_date,n=[...new Set((u?.allAEntries||[]).map(e=>e.id).filter(Boolean))];if(!e||!t||!n.length){de([]);return}try{h(!0),de((await Promise.all(n.map(e=>ol({emp_id:p,allocation_id:e})))).flatMap(e=>Array.isArray(e?.data)?e.data:[]).filter(e=>e?.is_active===!0))}catch(e){console.error(`Failed to fetch resource data:`,e),G.error(`Failed to load resource data`),de([])}finally{h(!1)}},[u,p]);(0,v.useEffect)(()=>{C(u?.allAEntries||[])},[u]),(0,v.useEffect)(()=>{ue.length&&ye(e=>{let t=new Set(e);return ue.forEach(e=>{if(!e?.s_date||!e?.e_date)return;let n=tv(e.s_date),r=tv(e.e_date);if(!n||!r)return;let i=new Date(n);for(;i<=r;)t.add(xf(i)),i.setDate(i.getDate()+1)}),t})},[ue]),(0,v.useEffect)(()=>{we()},[we]);let Te=async()=>{try{let{addPayload:e,updatePayload:t,deletePayload:n,unchangedPayload:r}=E_(P,ue),i=(e=>{let t={};return e.forEach(e=>{let n=xe[e.start_date]||he||u?.original_P?.id;t[n]||(t[n]=[]),t[n].push(e)}),t})([...e,...t,...n,...r]);for(let[e,t]of Object.entries(i)){let n=new FormData;n.append(`emp_id`,p),n.append(`p_id`,e),t.some(e=>!e.is_deleted),n.append(`call_mode`,`UPDATE`),n.append(`c_emp_list`,JSON.stringify(t)),await sl(n);for(let[e,t]of n.entries())console.log(e,t)}F({}),await f(),G.success(`Actuals saved successfully`)}catch(e){G.error(e?.response?.data?.message||`Failed to save actuals`)}};(0,v.useEffect)(()=>{ue.length&&F(e=>{let t={...e};return ue.forEach(e=>{if(!e?.s_date||!e?.e_date)return;let n=tv(e.s_date),r=tv(e.e_date);if(!n||!r)return;let i=new Date(n);for(;i<=r;){let n=xf(i);t[n]||(t[n]={confirmed:!1,rows:[]});let r=`api-${e.id}-${e.allocation_id}-${n}`;t[n].rows.some(t=>t.source===`api`&&t.resource_id===e.id&&t.allocation_id===e.allocation_id)||(t[n]={...t[n],rows:[...t[n].rows,{rowKey:r,original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:Number(e.contract_rate)||0,resource_id:e.id,allocation_id:e.allocation_id,order_item_id:e.order_item_id,is_approved:!!e.is_approved,is_present:!!e.is_present,is_active:!!e.is_active,a_percent:e.a_percent,ope_amt:e.ope_amt,app_remarks:e.app_remarks||``,approve_date:e.approve_date,s_date:e.s_date,e_date:e.e_date,source:`api`}]}),i.setDate(i.getDate()+1)}}),t})},[ue]);let Ee=e=>{se(t=>{let n=new Set(t);return n.delete(e),n}),le(t=>new Set(t).add(e))},De=(e,t,n)=>{se(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),F(e=>e[t]?e:{...e,[t]:{confirmed:!1,rows:n.map(e=>({rowKey:e.rowKey,original_emp_id:e.original_emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks,contract_rate:e.contract_rate,resource_id:e.resource_id}))}})},Oe=()=>{F(e=>{let t={};return Object.entries(e).forEach(([e,n])=>{n.confirmed&&(t[e]=n)}),t})},ke=Object.values(P).some(e=>!e.confirmed),Ae=e=>{F(t=>{let n={...t};return delete n[e],n})},je=e=>{F(t=>{let n=t[e]||{confirmed:!1,rows:[]};return{...t,[e]:{...n,rows:[...n.rows,{rowKey:crypto.randomUUID(),original_emp_id:null,emp_id:d[0]?.emp_id||``,employee_name:d[0]?.name||``,emp_type:Number(d[0]?.grade_level)>1?`T`:`E`,remarks:``,contract_rate:0,start_date:e,end_date:e}]}}})},Me=(e,t)=>{F(n=>({...n,[e]:{confirmed:!1,rows:t.map(t=>({rowKey:crypto.randomUUID(),original_emp_id:t.emp_id,emp_id:t.emp_id,employee_name:t.employee_name,emp_type:t.emp_type,remarks:t.remarks||``,contract_rate:t.contract_rate,start_date:e,end_date:e}))}}))},Pe=()=>{z(Xe),V(Ze),L(!0)},Fe=()=>{if(!be){G.error(`Start the activity for a date before copying actuals`);return}let n=new Date;n.setHours(0,0,0,0),F(r=>{let i={...r};return t.forEach(t=>{let r=xf(t),a=$(r,!0);if(console.log(`dStrComparable`,a),console.log(`lastStartedDate`,be),a>be||new Date(t.getFullYear(),t.getMonth(),t.getDate())>n||i[r]?.rows?.length)return;let o=e[r]||[];o.length!==0&&(i[r]={confirmed:!1,rows:o.map(e=>({rowKey:crypto.randomUUID(),original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:e.contract_rate,start_date:r,end_date:r}))})}),i})},Ie=(e,t,n,r)=>{F(i=>{let a=i[e];return a?{...i,[e]:{...a,rows:a.rows.map(e=>e.rowKey===t?{...e,[n]:r}:e)}}:i})},Le=(e,t,n)=>{let r=d.find(e=>e.emp_id===n);F(i=>{let a=i[e];return a?{...i,[e]:{...a,rows:a.rows.map(e=>e.rowKey===t?{...e,emp_id:n,employee_name:r?.name||e.employee_name}:e)}}:i})},Re=(e,t)=>{F(n=>{let r=n[e];return r?{...n,[e]:{...r,rows:r.rows.filter(e=>e.rowKey!==t)}}:n})},ze=async e=>{F(t=>({...t,[e]:{...t[e],confirmed:!0}}))},Be=e=>{F(t=>({...t,[e]:{...t[e],confirmed:!1}}))},Ve=(e,t,n)=>{se(e=>{let n=new Set(e);return n.delete(t),n}),F(r=>{let i=r[e];return i?{...r,[e]:{...i,rows:i.rows.map(e=>e.rowKey===t?{...e,emp_id:n.emp_id,employee_name:n.employee_name,emp_type:n.emp_type,remarks:n.remarks,contract_rate:n.contract_rate}:e)}}:r})},He=new Set(t.map(e=>xf(e))),Ue=e=>typeof e==`string`&&(/^\d{4}-\d{2}-\d{2}$/.test(e)||/^\d{2}-\d{2}-\d{4}$/.test(e)||/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(e)),We=[...new Set([...Object.keys(P).filter(e=>Ue(e)&&(P[e]?.rows||[]).length>0),...ue.map(e=>xf(tv(e.s_date))).filter(Boolean),...S.map(e=>e.start_date).filter(Ue)])].filter(e=>!He.has(e)).map(e=>({d:iv(e),dStr:e})).filter(e=>e.d),Ge=[...t.filter(t=>{let n=xf(t),r=(e[n]||[]).length>0,i=(P[n]?.rows||[]).length>0;return r||i}).map(e=>({d:e,dStr:xf(e)})),...We].sort((e,t)=>e.d-t.d),Ke=Lg({data:Ge,fields:[],search:``,extraFilters:{dateRange:{field:`d`,from:_?tv(_):null,to:b?tv(b):null}}});(0,v.useEffect)(()=>{if(!Ge.length||_||b)return;let e=Ge.map(({d:e})=>e).filter(e=>e instanceof Date&&!isNaN(e));if(!e.length)return;let t=tv($(c,!0)),n=new Date(Math.min(...e)),r=t&&n<t?n:t||n,i=new Date(Math.max(...e));y(nv(r)),x(nv(i))},[Ge]),g.setHours(0,0,0,0);let qe=tv(c),Je=tv(l),Ye=Je&&Je<g?Je:g,Xe=qe?nv(qe):``,Ze=nv(Ye),Qe=Ge.some(({dStr:e})=>!ue.some(t=>{let n=$(e,!0),r=$(t.s_date,!0),i=$(t.e_date,!0);return n&&r&&i&&n>=r&&n<=i})),$e=ce.size>0||Object.values(P).some(e=>(e.rows||[]).some(e=>e.source!==`api`)),et=({title:e=`Confirmation`,message:t,confirmLabel:n=`Confirm`,onConfirm:r,reload:i=!1})=>{U({isOpen:!0,loading:!1,title:e,message:t,confirmLabel:n,onConfirm:r,reload:i})},tt=()=>{U(e=>({...e,isOpen:!1,loading:!1,onConfirm:null}))};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(mf,{title:`Resource Overview`,hoverable:!1,headerAction:me?Qe?(0,Y.jsx)(pv,{activityStarted:ge,handleStartActivity:Ce,handleCopyAllActual:Fe,handleCancelCopyAllActual:Oe,hasUnconfirmedDrafts:ke,handleOpenActualRangeModal:Pe}):pe?(0,Y.jsx)(Q_,{children:(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:Pe,children:[(0,Y.jsx)(hu,{}),` Add Actual`]})}):null:pe?(0,Y.jsx)(Q,{size:`sm`,variant:`primary`,onClick:()=>et({title:`Start Activity`,message:`Are you sure you want to start this activity?`,confirmLabel:`Start`,onConfirm:Se,reload:!0}),children:`Start Activity`}):null,children:[(0,Y.jsxs)(N_,{children:[Ke.length!==0&&(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,margin:`0.5rem 0`},children:[(0,Y.jsxs)(sv,{children:[(0,Y.jsx)(cv,{children:`From`}),(0,Y.jsx)(lv,{type:`date`,value:_,onChange:e=>y(e.target.value)})]}),(0,Y.jsxs)(sv,{children:[(0,Y.jsx)(cv,{children:`To`}),(0,Y.jsx)(lv,{type:`date`,value:b,onChange:e=>x(e.target.value)})]}),(_||b)&&(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:()=>{y(``),x(``)},children:`Clear`})]}),Ke.filter(({d:e})=>e instanceof Date&&!isNaN(e)).length===0?(0,Y.jsx)(X_,{style:{fontSize:`1rem`,padding:`2rem`},children:`No resource allocated`}):Ke.filter(({d:e})=>e instanceof Date&&!isNaN(e)).map(({d:t,dStr:f})=>{let p=e[f]||[],m=p.filter(e=>e.emp_type===`T`).length,h=p.filter(e=>e.emp_type===`E`).length,g=ue.filter(e=>{if(!e?.s_date||!e?.e_date)return!1;let t=$(f,!0),n=$(e.s_date,!0),r=$(e.e_date,!0);return t&&n&&r&&t>=n&&t<=r}).map(e=>({...e,rowKey:`api-${e.id}-${e.allocation_id}-${f}`,original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:e.contract_rate||0,is_approved:!!e.is_approved,is_present:!!e.is_present,allocation_id:e.allocation_id,resource_id:e.id})),_=g.length>0,v=g.some(e=>oe.has(e.rowKey)),y=ve.has(f)||_,b=P[f],x=b?.rows||[],C=new Map(x.map(e=>[e.rowKey,e])),w=_?[...g.map(e=>C.get(e.rowKey)||e),...x.filter(e=>!g.some(t=>t.rowKey===e.rowKey))]:x,T=new Set(p.map(e=>e.emp_id)),E=p.some(e=>e.status===`ORIGINAL`),D=p.reduce((e,t)=>e+(Number(t.contract_rate)||0),0),O=w.reduce((e,t)=>e+(Number(t.contract_rate)||0),0);return D+ev(f).reduce((e,t)=>e+(Number(t.amount)||0),0),S.some(e=>e.start_date===f),(0,Y.jsxs)(P_,{children:[(0,Y.jsxs)(F_,{children:[(0,Y.jsx)(I_,{children:t instanceof Date&&!isNaN(t)?t.toLocaleDateString(`en-US`,{month:`long`,year:`numeric`,day:`numeric`}).toUpperCase():f}),(0,Y.jsxs)(L_,{children:[`TL: `,(0,Y.jsx)(`strong`,{children:m}),` \xA0\xA0 EX: `,(0,Y.jsx)(`strong`,{children:h})]})]}),(0,Y.jsxs)(R_,{children:[(0,Y.jsx)(z_,{children:`Resource Details`}),(0,Y.jsxs)(B_,{children:[(0,Y.jsxs)(V_,{children:[(0,Y.jsxs)(H_,{$variant:`plan`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Y.jsx)(`span`,{children:`Plan`}),!pe&&!y&&E&&(0,Y.jsx)(Q,{size:`sm`,variant:`primary`,onClick:()=>et({title:`Start Activity`,message:`Are you sure you want to start the activity for ${f}?`,confirmLabel:`Start`,onConfirm:()=>Ce(f),reload:!0}),children:`Start Activity`}),y&&!_&&!b&&!v&&p.length>0&&(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:()=>Me(f,p),children:[(0,Y.jsx)(ig,{}),` Copy Actual`]}),y&&b&&!b.confirmed&&(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:()=>Ae(f),children:`Cancel Copy Actual`})]}),p.length===0?(0,Y.jsx)(X_,{children:`No resources planned`}):p.map(e=>{let t=e.is_approved||u?.allAEntries?.length;return n===e.rowKey?(0,Y.jsx)(dv,{row:e,onChange:a,onConfirm:o,onCancel:s,activityStart:c,activityEnd:l,openConfirmation:et},e.rowKey):(0,Y.jsxs)(U_,{children:[(0,Y.jsxs)(W_,{children:[(0,Y.jsxs)(G_,{children:[e.employee_name||e.emp_id,(0,Y.jsxs)(`span`,{style:{color:Z.colors.textLight},children:[`(`,e.emp_id,`)`]}),e.action===`ADD`&&(0,Y.jsx)(gf,{variant:`warning`,style:{fontSize:`0.58rem`},children:`New`}),e.action===`UPDATE`&&(0,Y.jsx)(gf,{variant:`info`,style:{fontSize:`0.58rem`},children:`Updated`}),e.is_approved&&(0,Y.jsx)(gf,{variant:`success`,style:{fontSize:`0.58rem`},children:`Approved`})]}),(0,Y.jsxs)(K_,{children:[(0,Y.jsx)(gf,{variant:e.emp_type===`T`?`forward`:`info`,style:{fontSize:`0.6rem`},children:$_(e.emp_type)}),(0,Y.jsxs)(`span`,{children:[e.start_date||`—`,` to `,e.end_date||`—`]}),e.remarks&&(0,Y.jsxs)(`span`,{children:[`· `,e.remarks]})]})]}),(0,Y.jsxs)(q_,{children:[(0,Y.jsx)(J_,{children:e.contract_rate==null?`—`:`₹${e.contract_rate}`}),(0,Y.jsxs)(Y_,{onClick:e=>e.stopPropagation(),children:[(0,Y.jsx)(Q,{iconOnly:!0,variant:`primary`,title:`Edit`,disabled:t,onClick:()=>r(e,f),children:(0,Y.jsx)(Lu,{size:11})}),(0,Y.jsx)(Q,{iconOnly:!0,variant:`outlines`,title:`Remove`,disabled:t,onClick:()=>i(e,f),children:(0,Y.jsx)(Ql,{size:11})})]})]})]},e.rowKey)}),w.filter((e,t,n)=>!T.has(e.emp_id)&&n.findIndex(t=>t.emp_id===e.emp_id)===t).map(e=>(0,Y.jsx)(U_,{style:{opacity:.6},children:(0,Y.jsx)(W_,{children:(0,Y.jsxs)(G_,{children:[e.employee_name||e.emp_id,(0,Y.jsx)(gf,{variant:`warning`,style:{fontSize:`0.58rem`},children:`Not planned for this date`})]})})},`extra-${e.rowKey}`))]}),(0,Y.jsxs)(V_,{children:[(0,Y.jsx)(H_,{$variant:`actual`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,Y.jsx)(`span`,{children:`Actual`})}),w.length===0&&(0,Y.jsx)(X_,{children:`No actual data recorded`}),w.map(e=>{let t=e.is_approved===!0||e.is_present===!0;return(0,Y.jsx)(fv,{row:e,employees:d,onSave:_?()=>Ee(e.rowKey):void 0,onCancel:_?()=>Ve(f,e.rowKey,g.find(t=>t.rowKey===e.rowKey)):void 0,readOnly:_?t||!oe.has(e.rowKey):b?.confirmed,isReplaced:_?!T.has(e.emp_id):e.original_emp_id!=null&&e.emp_id!==e.original_emp_id,minActualDate:$(Xe,!0),maxActualDate:$(Ze,!0),onFieldChange:(n,r)=>{t||Ie(f,e.rowKey,n,r)},disableActualAction:t,onEmployeeChange:n=>{t||Le(f,e.rowKey,n)},onToggleEdit:_?()=>De(e.rowKey,f,g):void 0,onRemove:()=>{t||Re(f,e.rowKey)}},e.rowKey)}),!_&&b&&!b.confirmed&&(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`,padding:`8px 10px`},children:[(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:()=>je(f),children:[(0,Y.jsx)(Gl,{}),` Add resource`]}),b.rows.length>0&&(0,Y.jsxs)(Q,{size:`sm`,variant:`success`,onClick:()=>ze(f),children:[(0,Y.jsx)(Yl,{}),` Confirm`]})]}),!_&&b?.confirmed&&(0,Y.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`8px 10px`},children:[(0,Y.jsx)(gf,{variant:`success`,style:{fontSize:`0.6rem`},children:`Confirmed`}),(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:()=>Be(f),children:`Edit`})]})]})]}),(0,Y.jsxs)(Z_,{style:{marginTop:10},children:[(0,Y.jsxs)(`span`,{children:[`Plan Total: ₹`,D]}),(0,Y.jsxs)(`span`,{children:[`Actual Total: ₹`,O]})]})]}),(0,Y.jsx)(Q_,{})]},f)})]}),me&&$e&&(0,Y.jsx)(Q_,{style:{marginTop:`1rem`,justifyContent:`flex-end`},children:(0,Y.jsx)(Q,{variant:`primary`,onClick:()=>et({title:`Submit Actuals`,message:`Are you sure you want to submit actual allocations?`,confirmLabel:`Submit`,onConfirm:Te,reload:!0}),children:`Submit Actuals`})})]}),I&&(0,Y.jsx)(D_,{isOpen:I,onClose:e=>{L(!1),e.stopPropagation()},employees:d,minActualDate:Xe,maxActualDate:Ze,onSave:(e,t,n)=>{F(r=>{let i={...r},a=tv(t),o=tv(n);for(;a<=o;){let t=xf(a),n=i[t]||{confirmed:!1,rows:[]};i[t]={...n,confirmed:!1,rows:[...n.rows,...e.map(e=>({rowKey:crypto.randomUUID(),original_emp_id:null,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks,contract_rate:0,start_date:t,end_date:t}))]},a.setDate(a.getDate()+1)}return i}),L(!1)},isUpdateMode:M}),(0,Y.jsx)(Pd,{isOpen:H.isOpen,onClose:tt,isLoading:H.loading,onConfirm:async()=>{try{U(e=>({...e,loading:!0})),H.onConfirm&&await H.onConfirm();let e=H.reload;tt(),e&&window.location.reload()}catch{U(e=>({...e,loading:!1}))}},title:H.title,message:H.message,confirmLabel:H.confirmLabel})]})},ov=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f9f9fa`};
  border-radius: 6px;
  border: 1px dashed ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  margin: 0.5rem 0;
`,sv=W.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,cv=W.label`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
`,lv=W.input`
  padding: 0.25rem 0.4rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#ccc`};
  border-radius: 4px;
  font-size: 0.7rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`,uv=W.select`
  padding: 0.25rem 0.4rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#ccc`};
  border-radius: 4px;
  font-size: 0.7rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }
`;W.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,W.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,W.h3`
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
`,W.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,W.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
`,W.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,W.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,W.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;var dv=e=>{let t=(0,vl.c)(64),{row:n,onChange:r,onConfirm:i,onCancel:a,activityStart:o,activityEnd:s,openConfirmation:c}=e,l;t[0]===o?l=t[1]:(l=o?$(o,!0):``,t[0]=o,t[1]=l);let u=l,d;t[2]===s?d=t[3]:(d=s?$(s,!0):``,t[2]=s,t[3]=d);let f=d;console.log(`row`,n);let p;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,Y.jsx)(cv,{children:`Start Date`}),t[4]=p):p=t[4];let m=n.start_date||``,h;t[5]!==r||t[6]!==n.rowKey?(h=e=>r(n.rowKey,`start_date`,e.target.value),t[5]=r,t[6]=n.rowKey,t[7]=h):h=t[7];let g;t[8]!==f||t[9]!==u||t[10]!==m||t[11]!==h?(g=(0,Y.jsxs)(sv,{children:[p,(0,Y.jsx)(lv,{type:`date`,min:u,max:f,value:m,onChange:h})]}),t[8]=f,t[9]=u,t[10]=m,t[11]=h,t[12]=g):g=t[12];let _;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,Y.jsx)(cv,{children:`End Date`}),t[13]=_):_=t[13];let v=n.end_date||``,y;t[14]!==r||t[15]!==n.rowKey?(y=e=>r(n.rowKey,`end_date`,e.target.value),t[14]=r,t[15]=n.rowKey,t[16]=y):y=t[16];let b;t[17]!==f||t[18]!==u||t[19]!==v||t[20]!==y?(b=(0,Y.jsxs)(sv,{children:[_,(0,Y.jsx)(lv,{type:`date`,min:u,max:f,value:v,onChange:y})]}),t[17]=f,t[18]=u,t[19]=v,t[20]=y,t[21]=b):b=t[21];let x;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,Y.jsx)(cv,{children:`Employee Type`}),t[22]=x):x=t[22];let S=n.emp_type||`E`,C;t[23]!==r||t[24]!==n.rowKey?(C=e=>r(n.rowKey,`emp_type`,e.target.value),t[23]=r,t[24]=n.rowKey,t[25]=C):C=t[25];let w,T;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,Y.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),T=(0,Y.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`}),t[26]=w,t[27]=T):(w=t[26],T=t[27]);let E;t[28]!==S||t[29]!==C?(E=(0,Y.jsxs)(sv,{children:[x,(0,Y.jsxs)(uv,{value:S,onChange:C,children:[w,T]})]}),t[28]=S,t[29]=C,t[30]=E):E=t[30];let D;t[31]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,Y.jsx)(cv,{children:`Contract Rate`}),t[31]=D):D=t[31];let O=n.contract_rate||``,k;t[32]!==r||t[33]!==n.rowKey?(k=e=>r(n.rowKey,`contract_rate`,e.target.value),t[32]=r,t[33]=n.rowKey,t[34]=k):k=t[34];let A;t[35]!==O||t[36]!==k?(A=(0,Y.jsxs)(sv,{children:[D,(0,Y.jsx)(lv,{type:`number`,value:O,placeholder:`Enter rate`,onChange:k})]}),t[35]=O,t[36]=k,t[37]=A):A=t[37];let j,M;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(j={gridColumn:`span 2`},M=(0,Y.jsx)(cv,{children:`Remarks`}),t[38]=j,t[39]=M):(j=t[38],M=t[39]);let N=n.remarks||``,P;t[40]!==r||t[41]!==n.rowKey?(P=e=>r(n.rowKey,`remarks`,e.target.value),t[40]=r,t[41]=n.rowKey,t[42]=P):P=t[42];let F;t[43]!==N||t[44]!==P?(F=(0,Y.jsxs)(sv,{style:j,children:[M,(0,Y.jsx)(lv,{type:`text`,value:N,placeholder:`Remarks`,onChange:P})]}),t[43]=N,t[44]=P,t[45]=F):F=t[45];let I;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(I={display:`flex`,alignItems:`flex-end`,gap:`0.5rem`},t[46]=I):I=t[46];let L;t[47]!==i||t[48]!==c||t[49]!==n.rowKey?(L=(0,Y.jsx)(Q,{size:`small`,variant:`successGhost`,onClick:()=>c({title:`Update Resource`,message:`Are you sure you want to update this resource?`,confirmLabel:`Update`,onConfirm:()=>i(n.rowKey)}),children:`Confirm`}),t[47]=i,t[48]=c,t[49]=n.rowKey,t[50]=L):L=t[50];let R;t[51]!==a||t[52]!==n.rowKey?(R=(0,Y.jsx)(Q,{size:`small`,variant:`outlines`,onClick:()=>a(n.rowKey),children:`Cancel`}),t[51]=a,t[52]=n.rowKey,t[53]=R):R=t[53];let z;t[54]!==L||t[55]!==R?(z=(0,Y.jsxs)(`div`,{style:I,children:[L,R]}),t[54]=L,t[55]=R,t[56]=z):z=t[56];let B;return t[57]!==b||t[58]!==E||t[59]!==A||t[60]!==F||t[61]!==z||t[62]!==g?(B=(0,Y.jsxs)(ov,{onClick:mv,children:[g,b,E,A,F,z]}),t[57]=b,t[58]=E,t[59]=A,t[60]=F,t[61]=z,t[62]=g,t[63]=B):B=t[63],B},fv=e=>{let t=(0,vl.c)(110),{row:n,employees:r,readOnly:i,isReplaced:a,onFieldChange:o,onEmployeeChange:s,onRemove:c,disableActualAction:l,onToggleEdit:u,onSave:d,onCancel:f,minActualDate:p,maxActualDate:m}=e;if(i){let e=n.employee_name||n.emp_id,r;t[0]===a?r=t[1]:(r=a&&(0,Y.jsx)(gf,{variant:`info`,style:{fontSize:`0.58rem`},children:`Add`}),t[0]=a,t[1]=r);let i;t[2]!==e||t[3]!==r?(i=(0,Y.jsxs)(G_,{children:[e,r]}),t[2]=e,t[3]=r,t[4]=i):i=t[4];let o=n.emp_type===`T`?`forward`:`info`,s;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(s={fontSize:`0.6rem`},t[5]=s):s=t[5];let c=n.emp_type===`T`?`TL`:`EX`,d;t[6]!==o||t[7]!==c?(d=(0,Y.jsx)(gf,{variant:o,style:s,children:c}),t[6]=o,t[7]=c,t[8]=d):d=t[8];let f=n.start_date||n.s_date||`—`,p=n.end_date||n.e_date||`—`,m;t[9]!==f||t[10]!==p?(m=(0,Y.jsxs)(`span`,{children:[f,` to `,p]}),t[9]=f,t[10]=p,t[11]=m):m=t[11];let h;t[12]===n.remarks?h=t[13]:(h=n.remarks&&(0,Y.jsxs)(`span`,{children:[`· `,n.remarks]}),t[12]=n.remarks,t[13]=h);let g;t[14]!==m||t[15]!==h||t[16]!==d?(g=(0,Y.jsxs)(K_,{children:[d,m,h]}),t[14]=m,t[15]=h,t[16]=d,t[17]=g):g=t[17];let _;t[18]!==g||t[19]!==i?(_=(0,Y.jsxs)(W_,{children:[i,g]}),t[18]=g,t[19]=i,t[20]=_):_=t[20];let v=n.contract_rate==null?`—`:`₹${n.contract_rate}`,y;t[21]===v?y=t[22]:(y=(0,Y.jsx)(J_,{children:v}),t[21]=v,t[22]=y);let b;t[23]!==l||t[24]!==u?(b=!l&&u&&(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:u,children:`Edit`}),t[23]=l,t[24]=u,t[25]=b):b=t[25];let x;t[26]!==y||t[27]!==b?(x=(0,Y.jsxs)(q_,{children:[y,b]}),t[26]=y,t[27]=b,t[28]=x):x=t[28];let S;return t[29]!==_||t[30]!==x?(S=(0,Y.jsxs)(U_,{children:[_,x]}),t[29]=_,t[30]=x,t[31]=S):S=t[31],S}let h=hv,g;t[32]===a?g=t[33]:(g=a&&(0,Y.jsx)(gf,{variant:`warning`,style:{fontSize:`0.55rem`},children:`Replaced`}),t[32]=a,t[33]=g);let _;t[34]===g?_=t[35]:(_=(0,Y.jsxs)(cv,{children:[`Resource `,g]}),t[34]=g,t[35]=_);let v;t[36]!==r||t[37]!==s||t[38]!==o||t[39]!==n.emp_id||t[40]!==n.employee_name?(v=r.length>0?(0,Y.jsx)(uv,{value:n.emp_id,onChange:e=>s(e.target.value),children:r.map(gv)}):(0,Y.jsx)(lv,{type:`text`,value:n.employee_name,onChange:e=>o(`employee_name`,e.target.value)}),t[36]=r,t[37]=s,t[38]=o,t[39]=n.emp_id,t[40]=n.employee_name,t[41]=v):v=t[41];let y;t[42]!==_||t[43]!==v?(y=(0,Y.jsxs)(sv,{children:[_,v]}),t[42]=_,t[43]=v,t[44]=y):y=t[44];let b;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,Y.jsx)(cv,{children:`Employee Type`}),t[45]=b):b=t[45];let x;t[46]===o?x=t[47]:(x=e=>o(`emp_type`,e.target.value),t[46]=o,t[47]=x);let S,C;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,Y.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),C=(0,Y.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`}),t[48]=S,t[49]=C):(S=t[48],C=t[49]);let w;t[50]!==n.emp_type||t[51]!==x?(w=(0,Y.jsxs)(sv,{children:[b,(0,Y.jsxs)(uv,{value:n.emp_type,onChange:x,children:[S,C]})]}),t[50]=n.emp_type,t[51]=x,t[52]=w):w=t[52];let T;t[53]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,Y.jsx)(cv,{children:`Start Date`}),t[53]=T):T=t[53];let E=n.start_date||n.s_date||``,D;t[54]===E?D=t[55]:(D=$(E,!0),t[54]=E,t[55]=D);let O;t[56]!==o||t[57]!==n?(O=e=>o(h(n),e.target.value),t[56]=o,t[57]=n,t[58]=O):O=t[58];let k;t[59]!==m||t[60]!==p||t[61]!==D||t[62]!==O?(k=(0,Y.jsxs)(sv,{children:[T,(0,Y.jsx)(lv,{type:`date`,min:p,max:m,value:D,onChange:O})]}),t[59]=m,t[60]=p,t[61]=D,t[62]=O,t[63]=k):k=t[63];let A;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,Y.jsx)(cv,{children:`End Date`}),t[64]=A):A=t[64];let j=n.start_date||p,M=n.end_date||n.e_date||``,N;t[65]===M?N=t[66]:(N=$(M,!0),t[65]=M,t[66]=N);let P;t[67]!==o||t[68]!==n?(P=e=>o(h(n),e.target.value),t[67]=o,t[68]=n,t[69]=P):P=t[69];let F;t[70]!==m||t[71]!==j||t[72]!==N||t[73]!==P?(F=(0,Y.jsxs)(sv,{children:[A,(0,Y.jsx)(lv,{type:`date`,min:j,max:m,value:N,onChange:P})]}),t[70]=m,t[71]=j,t[72]=N,t[73]=P,t[74]=F):F=t[74];let I;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,Y.jsx)(cv,{children:`Contract Rate`}),t[75]=I):I=t[75];let L=n.contract_rate||``,R;t[76]===o?R=t[77]:(R=e=>o(`contract_rate`,e.target.value),t[76]=o,t[77]=R);let z;t[78]!==L||t[79]!==R?(z=(0,Y.jsxs)(sv,{children:[I,(0,Y.jsx)(lv,{type:`number`,value:L,placeholder:`Enter rate`,onChange:R})]}),t[78]=L,t[79]=R,t[80]=z):z=t[80];let B,V;t[81]===Symbol.for(`react.memo_cache_sentinel`)?(B={gridColumn:`span 2`},V=(0,Y.jsx)(cv,{children:`Remarks`}),t[81]=B,t[82]=V):(B=t[81],V=t[82]);let H;t[83]===o?H=t[84]:(H=e=>o(`remarks`,e.target.value),t[83]=o,t[84]=H);let U;t[85]!==n.remarks||t[86]!==H?(U=(0,Y.jsxs)(sv,{style:B,children:[V,(0,Y.jsx)(lv,{type:`text`,value:n.remarks,placeholder:`Remarks`,onChange:H})]}),t[85]=n.remarks,t[86]=H,t[87]=U):U=t[87];let ee;t[88]!==k||t[89]!==F||t[90]!==z||t[91]!==U||t[92]!==y||t[93]!==w?(ee=(0,Y.jsxs)(ov,{children:[y,w,k,F,z,U]}),t[88]=k,t[89]=F,t[90]=z,t[91]=U,t[92]=y,t[93]=w,t[94]=ee):ee=t[94];let te;t[95]===Symbol.for(`react.memo_cache_sentinel`)?(te={display:`flex`,alignItems:`flex-end`,gap:`0.5rem`},t[95]=te):te=t[95];let ne;t[96]===d?ne=t[97]:(ne=d&&(0,Y.jsx)(Q,{size:`sm`,variant:`success`,onClick:d,children:`Save`}),t[96]=d,t[97]=ne);let re;t[98]===f?re=t[99]:(re=f&&(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:f,children:`Cancel`}),t[98]=f,t[99]=re);let ie;t[100]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,Y.jsx)(Wl,{}),t[100]=ie):ie=t[100];let ae;t[101]===c?ae=t[102]:(ae=(0,Y.jsxs)(Q,{size:`sm`,variant:`outlines`,onClick:c,children:[` `,ie,` Remove`]}),t[101]=c,t[102]=ae);let oe;t[103]!==ne||t[104]!==re||t[105]!==ae?(oe=(0,Y.jsxs)(`div`,{style:te,children:[ne,re,ae]}),t[103]=ne,t[104]=re,t[105]=ae,t[106]=oe):oe=t[106];let se;return t[107]!==ee||t[108]!==oe?(se=(0,Y.jsxs)(Y.Fragment,{children:[ee,oe]}),t[107]=ee,t[108]=oe,t[109]=se):se=t[109],se},pv=e=>{let t=(0,vl.c)(15),{handleCopyAllActual:n,handleCancelCopyAllActual:r,hasUnconfirmedDrafts:i,handleOpenActualRangeModal:a}=e,o;t[0]!==n||t[1]!==i?(o=!i&&(0,Y.jsxs)(Q,{size:`sm`,variant:`primary`,onClick:()=>n(),children:[(0,Y.jsx)(ag,{}),` Copy Actual (All Dates)`]}),t[0]=n,t[1]=i,t[2]=o):o=t[2];let s;t[3]!==r||t[4]!==i?(s=i&&(0,Y.jsx)(Q,{size:`sm`,variant:`outlines`,onClick:()=>r(),children:`Cancel Copy Actual`}),t[3]=r,t[4]=i,t[5]=s):s=t[5];let c;t[6]===a?c=t[7]:(c=()=>a(),t[6]=a,t[7]=c);let l;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,Y.jsx)(hu,{}),t[8]=l):l=t[8];let u;t[9]===c?u=t[10]:(u=(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:c,children:[l,` Add Actual`]}),t[9]=c,t[10]=u);let d;return t[11]!==o||t[12]!==s||t[13]!==u?(d=(0,Y.jsxs)(Q_,{children:[o,s,u]}),t[11]=o,t[12]=s,t[13]=u,t[14]=d):d=t[14],d};function mv(e){return e.stopPropagation()}function hv(e){return e.start_date?`start_date`:`s_date`}function gv(e){return(0,Y.jsx)(`option`,{value:e.emp_id,children:e.name},e.emp_id)}var _v=W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,vv=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;W.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f4f6`};
  border-radius: 20px;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};

  span {
    font-weight: 600;
    color: ${({theme:e})=>e.colors?.textLight||`#777`};
  }
`;var yv=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem 1.5rem;
`,bv=W.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,xv=W.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f1f0fe`};
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Sv=W.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Cv=W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,wv=W.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,Tv=e=>e?new Date(e).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,Ev=()=>{let e=je(),[t,n]=(0,v.useState)(e.state?.data),r=e.state?.resourcePlannedList,i=localStorage.getItem(`cust_emp_id`),{start:a,end:o}=Tf(),[s,c]=(0,v.useState)(null),[l,u]=(0,v.useState)({}),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(!1),[h,g]=(0,v.useState)(!1),[_,y]=(0,v.useState)(`save`),[b,x]=(0,v.useState)(!1),[S,C]=(0,v.useState)([]),[w,T]=(0,v.useState)([]),[E,D]=(0,v.useState)([]),[O,k]=(0,v.useState)([]),[A,j]=(0,v.useState)([]),M=t?.original_P?.start_date||t?.planned_start_date||``,N=t?.original_P?.end_date||t?.planned_end_date||``,P=e=>e.is_approved||!!t?.allAEntries?.length,F=(0,v.useMemo)(()=>Uf(E),[E]),{dayWindow:I,dateWiseAssignments:L}=Xf({activityStart:M,activityEnd:N,allocations:O,originalById:(0,v.useMemo)(()=>{let e={};return E.forEach(t=>{e[t.id]=t}),e},[E]),getRowStatus:qf}),R=(0,v.useMemo)(()=>{let e={};return O.forEach(t=>{e[t.emp_id]||(e[t.emp_id]={}),Lf(t.start_date,t.end_date).forEach(n=>{e[t.emp_id][n]=t.rowKey})}),e},[O]),z=(0,v.useMemo)(()=>{let e={};return A.forEach(t=>{e[t.emp_id]||(e[t.emp_id]={}),Lf(t.start_date,t.end_date).forEach(n=>{R[t.emp_id]?.[n]||(e[t.emp_id][n]=!0)})}),e},[A,R]),{addPayload:B,updatePayload:V,deletePayload:H,unchangedPayload:U}=(0,v.useMemo)(()=>Jf(O,E),[O,E]),ee=B.length+V.length+H.length,te=[B.length&&`Add ${B.length}`,V.length&&`Update ${V.length}`,H.length&&`Remove ${H.length}`].filter(Boolean).join(` · `)||`Save Changes`;(0,v.useEffect)(()=>{ae(),ie()},[]);let ne=async(e={})=>{if(!e)return[];try{return((await ol(e))?.data||[]).map(e=>({...e,start_date:e.start_date?$(e.start_date,!0):e.s_date?$(e.s_date,!0):``,end_date:e.end_date?$(e.end_date,!0):e.e_date?$(e.e_date,!0):``}))}catch{return G.error(`Failed to load existing allocations`),[]}},re=async()=>{let e=t?.original_P?.id;if(e)try{let t=Ff((await al({emp_id:i,start_date:$(a),end_date:$(o)})).data,r).find(t=>t?.original_P?.id===e);t&&n(t)}catch(e){console.error(`Failed to refresh activity data:`,e)}},ie=async()=>{let{id:e}=t?.original_P||{};try{let[n,r]=await Promise.all([ne({allocation_id:e,start_date:$(a),end_date:$(o)}),ne({emp_id:i,start_date:$(a),end_date:$(o)})]),s=n.map(e=>({id:e.id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:e.contract_rate,start_date:e.start_date,end_date:e.end_date,is_approved:!!e.is_approved}));D(s),k(s.map(e=>({...e,rowKey:`existing_${e.id}`}))),j(r.filter(e=>e.allocation_id!==t?.original_P?.id)),await re()}catch{G.error(`Failed to load allocation data`)}},ae=async()=>{try{f(!0),T((await il({rm_emp_id:i}))?.data?.filter(e=>e.is_verified)||[])}catch{G.error(`Failed to fetch employees`)}finally{f(!1)}},oe=(e,t,n)=>{let r=$(t,!0);k(t=>{let i=t.filter(t=>t.emp_id!==e.emp_id),a=t.filter(t=>t.emp_id===e.emp_id),o=a.flatMap(e=>Bf(e.start_date,e.end_date)),s=n?[...o,r]:o.filter(e=>e!==r),c=Wf({empId:e.emp_id,activeDates:s,ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:Number(e.grade_level)>1?`T`:`E`,remarks:``,contract_rate:0,is_approved:!1},existingRowsForEmp:a});return Kf([...i,...c])})},[se,ce]=(0,v.useState)({}),le=e=>{let t=I.map(xf).filter(t=>!R[e.emp_id]?.[t]&&!z[e.emp_id]?.[t]);if(!t.length){G.info(`No dates available`);return}let n=t.map(e=>$(e,!0));k(t=>{let r=t.filter(t=>t.emp_id!==e.emp_id),i=t.filter(t=>t.emp_id===e.emp_id),a=i.flatMap(e=>Bf(e.start_date,e.end_date)),o=Wf({empId:e.emp_id,activeDates:[...a,...n],ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:Number(e.grade_level)>1?`T`:`E`,remarks:``,contract_rate:0,is_approved:!1},existingRowsForEmp:i});return Kf([...r,...o])}),ce(t=>({...t,[e.emp_id]:n})),G.success(`${t.length} date(s) selected for ${e.name}`)},ue=e=>{let t=se[e.emp_id];if(!t||!t.length){G.info(`Nothing to undo for this resource`);return}let n=new Set(t);k(t=>{let r=t.filter(t=>t.emp_id!==e.emp_id),i=t.filter(t=>t.emp_id===e.emp_id),a=i.flatMap(e=>Bf(e.start_date,e.end_date)).filter(e=>!n.has(e)),o=Wf({empId:e.emp_id,activeDates:a,ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:Number(e.grade_level)>1?`T`:`E`,remarks:``,contract_rate:0,is_approved:!1},existingRowsForEmp:i});return Kf([...r,...o])}),ce(t=>{let n={...t};return delete n[e.emp_id],n}),G.success(`Undo auto-assign for ${e.name}`)},de=(e,t)=>{if(P(e)){G.info(`Cannot edit approved/actual started allocation`);return}let n=Gf(e,$(t,!0),`EDIT`),r=n.find(e=>e.__isEditTarget),i=crypto.randomUUID();k(t=>[...t.filter(t=>t.rowKey!==e.rowKey),...n]),u(t=>({...t,[i]:{originalRow:e,segmentKeys:n.map(e=>e.rowKey)}})),c(r?{rowKey:r.rowKey,groupId:i}:null)},fe=(e,t,n)=>{k(r=>r.map(r=>r.rowKey===e?{...r,[t]:n}:r))},pe=e=>{let t=O.find(t=>t.rowKey===e);if(!t){c(null);return}if(t.start_date>t.end_date){G.error(`Start date cannot be after end date`);return}let n=$(M,!0),r=$(N,!0);if(n&&t.start_date<n||r&&t.end_date>r){G.error(`Dates must fall within the activity's start and end dates`);return}if(O.some(n=>n.rowKey!==e&&n.emp_id===t.emp_id&&t.start_date<=n.end_date&&t.end_date>=n.start_date)){G.error(`This resource already has an allocation overlapping these dates`);return}k(e=>Kf(e)),u(t=>{let n=Object.entries(t).find(([,t])=>t.segmentKeys.includes(e));if(!n)return t;let r={...t};return delete r[n[0]],r}),c(null)},me=e=>{let t=Object.entries(l).find(([,t])=>t.segmentKeys.includes(e));if(!t){c(null);return}let[n,{originalRow:r,segmentKeys:i}]=t;k(e=>[...e.filter(e=>!i.includes(e.rowKey)),r]),u(e=>{let t={...e};return delete t[n],t}),c(null)},he=(e,t)=>{if(P(e)){G.info(`Cannot delete`);return}k(n=>{let r=Gf(e,$(t,!0),`DELETE`);return Kf([...n.filter(t=>t.rowKey!==e.rowKey),...r])})},ge=()=>{let e=new Set(O.flatMap(e=>Bf(e.start_date,e.end_date))),t=[...e].filter(e=>{let t=O.filter(t=>Bf(t.start_date,t.end_date).includes(e)),n=t.filter(e=>e.emp_type===`T`).length,r=t.filter(e=>e.emp_type===`E`).length;return n<ye||r<be});if(t.length>0){G.error(`Required TL/EX not met for: ${t.sort().join(`, `)}`);return}let n=I.map(e=>xf(e)).filter(t=>!e.has($(t,!0)));if(n.length>0){C(n),y(`missingDates`),g(!0);return}y(`save`),g(!0)},_e=async()=>{try{x(!0);let e=t?.original_P?.id;if(!e)return;let n=[...new Set(O.flatMap(e=>Bf(e.start_date,e.end_date)))].filter(e=>{let t=O.filter(t=>Bf(t.start_date,t.end_date).includes(e)),n=t.filter(e=>e.emp_type===`T`).length,r=t.filter(e=>e.emp_type===`E`).length;return n<ye||r<be});if(n.length>0){let e=n.sort().join(`, `);G.error(`Required TL/EX not met for: ${$(e)}`);return}let r=O,a=[...B,...V,...H,...U];if(a.length){let t=new FormData;t.append(`emp_id`,i),t.append(`p_id`,e);let n=O.some(e=>e.id!=null),r=B.length&&!V.length&&!H.length&&!n?`ADD`:`UPDATE`;t.append(`call_mode`,r),t.append(`c_emp_list`,JSON.stringify(a)),await sl(t);for(let[e,n]of t.entries())console.log(e,n)}if(r.length>0){let t=r.map(e=>`${e.emp_id}^${e.employee_name||``}^${e.emp_type}`).join(`|`),n=new FormData;n.append(`emp_id`,i),n.append(`call_mode`,`RESOURCE_ADD`),n.append(`a_id`,e),n.append(`geo_type`,`O`),n.append(`resource_list`,t),await cl(n);for(let[e,t]of n.entries())console.log(e,t)}G.success(`Saved successfully`),g(!1),ie()}catch(e){G.error(e?.response?.data?.message||`Save failed`)}finally{x(!1)}},ve=(t?.original_P?.retainer_list||[]).find(e=>e.a_type===`P`&&e.start_date===t?.original_P?.start_date&&e.end_date===t?.original_P?.end_date),ye=ve?.tl_count||0,be=ve?.ex_count||0;return console.log(t),(0,Y.jsxs)(Jd,{title:`Allocation Plan Overview`,children:[(0,Y.jsxs)(vv,{children:[(0,Y.jsx)(_v,{children:`Track and manage your assigned audit tasks`}),(0,Y.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:(0,Y.jsxs)(Q,{size:`md`,onClick:()=>window.history.back(),children:[(0,Y.jsx)(qu,{}),`Back`]})})]}),(0,Y.jsxs)(mf,{title:`Activity Details`,hoverable:!1,children:[(0,Y.jsxs)(yv,{children:[(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Uu,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Duration`}),(0,Y.jsxs)(wv,{children:[Tv(t.planned_start_date),` – `,Tv(t.planned_end_date)]})]})]}),(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Nu,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Customer`}),(0,Y.jsx)(wv,{children:t.customer_name})]})]}),(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Nu,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Order Item`}),(0,Y.jsx)(wv,{children:t.order_item_key})]})]}),(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Ul,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Required TL`}),(0,Y.jsx)(wv,{children:ye??`—`})]})]}),(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Vl,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Required EX`}),(0,Y.jsx)(wv,{children:be??`—`})]})]}),(0,Y.jsxs)(bv,{children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(xu,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Location`}),(0,Y.jsx)(wv,{children:t.store_name||`—`})]})]})]}),t.store_remarks&&(0,Y.jsxs)(bv,{style:{marginTop:`1rem`},children:[(0,Y.jsx)(xv,{children:(0,Y.jsx)(Qu,{size:13})}),(0,Y.jsxs)(Sv,{children:[(0,Y.jsx)(Cv,{children:`Remark`}),(0,Y.jsx)(wv,{children:t.store_remarks||`—`})]})]})]}),(0,Y.jsx)(av,{dateWiseAssignments:L,dayWindow:I,editingId:s?.rowKey,handleEditDate:de,handleDeleteDate:he,handleFieldChange:fe,handleConfirmUpdate:pe,handleCancelEdit:me,activityStart:M,activityEnd:N,activityData:t,isActual:!1,employees:w,loadAllData:ie}),![`AA`,`AS`,`C`,`PA`].includes(t.activityStatus)&&!t.a_id&&(0,Y.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`1rem`,marginBottom:`1rem`},children:[(0,Y.jsx)(Q,{onClick:()=>m(!0),children:`Add Resources`}),p&&(0,Y.jsx)(Q,{variant:`outline`,onClick:()=>m(!1),children:`Close`})]}),ee>0&&(0,Y.jsx)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,borderRadius:`6px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,Y.jsxs)(Q,{onClick:ge,color:`primary`,style:{marginLeft:`auto`},children:[te,` Resources in plan `]})}),p&&(0,Y.jsx)(w_,{employees:w,dayWindow:I,activityData:t,activityDates:I,activityStart:M,activityEnd:N,busyDateMap:z,employeeDateMap:R,handleToggleAllocation:oe,workingAllocations:O,handleAutoAssign:le,handleUndoAutoAssign:ue,lastAutoAssign:se}),(0,Y.jsx)(Pd,{isOpen:h,isLoading:b,onConfirm:_e,onClose:()=>g(!1),title:`Confirm Resource Plan`,message:_===`missingDates`?`No resources are planned for: ${S.join(`, `)}. Are you sure you want to save anyway?`:`Are you sure you want to save these resources in the plan?`,confirmLabel:`Yes, Save`})]})},Dv=e=>e?new Date(e).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,Ov=e=>`₹${Number(e||0).toLocaleString(`en-IN`)}`,kv=W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,Av=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;W.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;var jv=W.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f4f6`};
  border-radius: 20px;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};

  span {
    font-weight: 600;
    color: ${({theme:e})=>e.colors?.textLight||`#777`};
  }
`;W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({theme:e})=>e.spacing?.sm||`1rem`} ${({theme:e})=>e.spacing?.md||`1rem`};
`,W.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
  margin: 0;
`,W.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 8px;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,W.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#fafafa`};
  border: none;
  cursor: pointer;
  text-align: left;
`,W.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
`,W.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors?.textLight||`#777`};
`,W.div`
  padding: 0.85rem 0.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
`,W.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  cursor: ${({pointer:e})=>e?`pointer`:`default`};
`,W.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,W.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
`,W.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 0.6rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#fafafa`};
  border-top: 1px dashed ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  font-size: 0.75rem;
  font-weight: 600;
`,W.span`
  color: ${({theme:e})=>e.colors?.textLight||`#e5e7eb`};
`,W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}12`:`#6C5CE712`};
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
`,W.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr 1fr 1.4fr 0.7fr;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 8px;
  overflow: hidden;
`,W.div`
  display: contents;
  > span {
    background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f4f6`};
    font-size: 0.65rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme:e})=>e.colors?.textLight||`#777`};
    padding: 0.55rem 0.75rem;
  }
`,W.div`
  display: contents;
  > span, > a {
    padding: 0.6rem 0.75rem;
    font-size: 0.75rem;
    border-top: 1px solid ${({theme:e})=>e.colors?.border||`#eee`};
    display: flex;
    align-items: center;
  }
`;var Mv=W.a`
  color: ${({theme:e,disabled:t})=>t?`#999`:e.colors?.primary||`#6C5CE7`};
  font-weight: ${({disabled:e})=>e?`400`:`600`};
  text-decoration: none;
  gap: 0.3rem;
  cursor: ${({disabled:e})=>e?`default`:`pointer`};
  pointer-events: ${({disabled:e})=>e?`none`:`auto`};
  &:hover { 
    text-decoration: ${({disabled:e})=>e?`none`:`underline`}; 
  }
`,Nv=W.div`
  padding: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,Pv=W.div`
  font-size: 0.75rem;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fv=W.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.85rem;
  align-items: center;
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}12`:`#6C5CE712`};
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
`,Iv=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem 1.5rem;
`,Lv=W.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,Rv=W.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f1f0fe;
  color: #6C5CE7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zv=W.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Bv=W.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Vv=W.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
`,Hv=()=>{Ne();let e=je().state?.data,t=localStorage.getItem(`cust_emp_id`),n=e.mode,[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(!1),[d,f]=(0,v.useState)(()=>e?.claims||[]),p=(0,v.useMemo)(()=>{for(let e of d)for(let t of e?.claim_items||[]){let{label:e}=Uv(t.expense_status);if(e===`Submitted`)return`Submitted`}return``},[d]),[m,h]=(0,v.useState)([]),[g,_]=(0,v.useState)(null),[y,b]=(0,v.useState)(null),[x,S]=(0,v.useState)(null),C=(0,v.useCallback)(async()=>{if(!(!t||!e))try{o(!0);let n=(await il({emp_id:t}))?.data?.[0]||{};if(!n.id){f([]);return}f(Pf((await dl(`GET`,n.id,`CY`))?.data||[],e))}catch(e){console.error(e),G.error(`Failed to load claims`),f([])}finally{o(!1)}},[t,e]),w=(0,v.useMemo)(()=>Wv(m),[m]),T=(0,v.useMemo)(()=>w.reduce((e,t)=>({resource:e.resource+t.tl_amount+t.ex_amount,claim:e.claim+t.claim_amount}),{resource:0,claim:0}),[w]),E=(0,v.useMemo)(()=>d.reduce((e,t)=>(e.totalOPE+=Number(t?.expense_amt||0),e.totalSettlement+=Number(t?.settlement_amt||0),e),{totalOPE:0,totalSettlement:0}),[d]);T.resource+E.totalOPE;let D=(0,v.useCallback)(async()=>{let n=e?.planned_start_date||e.earliestPlannedDate,r=e?.planned_end_date||e.latestPlannedDate,a=[...new Set((e?.grouped_data?.length?e.grouped_data.flatMap(e=>e?.allAEntries||[]):e?.allAEntries||[]).map(e=>e?.id).filter(Boolean))];if(!n||!r||!a.length){h([]);return}try{i(!0),h((await Promise.all(a.map(e=>ol({emp_id:t,allocation_id:e,start_date:$(n),end_date:$(r)})))).flatMap(e=>Array.isArray(e?.data)?e.data:[]))}catch(e){console.error(`Failed to fetch resource data:`,e),G.error(`Failed to load resource data`),h([])}finally{i(!1)}},[e,t]);(0,v.useEffect)(()=>{D()},[D]),(0,v.useEffect)(()=>{e?.claims?.length?f(e.claims):C()},[e,C]);let O=e=>{b(e),c(!0)},k=()=>{let t=d?.[0]||null;O({...e,...t&&{master_data:t}})},A=async e=>{try{(await ul({m_claim_id:e,call_mode:`SUBMIT_ALL`})).status===200&&G.success(`All claim items submitted successfully`),await C()}catch(e){G.error(e.data.message||e.data||`Failed to submit the claims. Please try again later !!!`)}finally{S(null),u(!1)}};console.log(`activityData shdbk`,e);let j=(e?.original_P?.retainer_list||[]).find(t=>t.a_type===`P`&&t.start_date===e?.original_P?.start_date&&t.end_date===e?.original_P?.end_date),M=(0,v.useMemo)(()=>(e?.grouped_data||[]).map(e=>{let t=(e?.original_P?.retainer_list||[]).find(t=>t.a_type===`P`&&t.start_date===e?.original_P?.start_date&&t.end_date===e?.original_P?.end_date);return{allocationId:e?.allocation_id||e?.id||e?.allAEntries?.[0]?.id,start_date:t?.start_date,end_date:t?.end_date,tl_count:t?.tl_count||0,ex_count:t?.ex_count||0}}),[e]),N=j?.tl_count||0,P=j?.ex_count||0;return(0,Y.jsxs)(Jd,{title:`Clam Details`,children:[(0,Y.jsxs)(Av,{children:[(0,Y.jsx)(kv,{children:`Claim Detailed view`}),(0,Y.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,Y.jsxs)(Q,{size:`md`,onClick:()=>window.history.back(),children:[(0,Y.jsx)(qu,{}),`Back`]})})]}),(0,Y.jsxs)(mf,{title:`Activity Details`,hoverable:!1,children:[(0,Y.jsxs)(Iv,{children:[(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Uu,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Duration`}),(0,Y.jsxs)(Vv,{children:[Dv(e.planned_start_date),` – `,Dv(e.planned_end_date)]})]})]}),(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Nu,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Customer`}),(0,Y.jsx)(Vv,{children:e.customer_name})]})]}),(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Nu,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Order Item`}),(0,Y.jsx)(Vv,{children:e.order_item_key})]})]}),M.length===1&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Ul,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Required TL`}),(0,Y.jsx)(Vv,{children:N??`—`})]})]}),(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Vl,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Required EX`}),(0,Y.jsx)(Vv,{children:P??`—`})]})]})]}),(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(xu,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Location`}),(0,Y.jsx)(Vv,{children:e.store_name||`—`})]})]})]}),e.store_remarks&&(0,Y.jsxs)(Lv,{style:{marginTop:`1rem`},children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Qu,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsx)(Bv,{children:`Remark`}),(0,Y.jsx)(Vv,{children:e.store_remarks||`—`})]})]})]}),M.length>1&&(0,Y.jsx)(mf,{title:`Allocation Dates`,children:(0,Y.jsx)(Iv,{style:{marginTop:`1rem`},children:M.map((e,t)=>(0,Y.jsxs)(Lv,{children:[(0,Y.jsx)(Rv,{children:(0,Y.jsx)(Ul,{size:13})}),(0,Y.jsxs)(zv,{children:[(0,Y.jsxs)(Bv,{children:[`Allocation `,t+1]}),(0,Y.jsxs)(Vv,{children:[Dv(e.start_date),` –`,` `,Dv(e.end_date)]}),(0,Y.jsxs)(Vv,{children:[`TL: `,e.tl_count,` \xA0 | \xA0 EX: `,e.ex_count]})]})]},e.allocationId||t))})}),(0,Y.jsxs)(mf,{hoverable:!1,style:{marginTop:`1rem`},title:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Mu,{size:12,style:{marginRight:`0.4rem`}}),`Claims `,d[0]?.claim_items?.length&&`(${d[0]?.claim_items?.length})`]}),headerAction:n!==`VIEW`&&(e?.activityStatus===`C`||e?.activityStatus===`AS`||e?.activityStatus===`AP`)&&p!==`Submitted`&&(0,Y.jsxs)(Q,{variant:`primary`,onClick:k,children:[(0,Y.jsx)(hu,{size:11,style:{marginRight:`0.35rem`}}),`Add Claim`]}),children:[d.length>0&&(0,Y.jsxs)(jv,{style:{marginBottom:`0.8rem`,fontSize:`1rem`},children:[(0,Y.jsx)(Mu,{size:12,style:{marginRight:`0.4rem`}}),(0,Y.jsx)(`span`,{children:`Master Clam Id:`}),d[0].master_claim_id]}),e.activityStatus!==`AP`&&e.activityStatus!==`AS`&&e.activityStatus!==`C`?(0,Y.jsx)(Nv,{style:{fontWeight:`600`,fontSize:`0.8rem`},children:`Activity not completed yet`}):d.length===0?(0,Y.jsx)(Nv,{children:`No claims submitted yet`}):(0,Y.jsx)(mg,{emptyMessage:`No claims submitted yet`,isLoading:a,columns:[`Sl no.`,`Category`,`Date`,`Amount`,`Status`,`Remarks`,`Attachment`,`${n!==`VIEW`&&p!==`Submitted`?`Action`:``}`],data:d.flatMap(e=>(e?.claim_items||[]).map(t=>({...t,master_data:e}))),renderRow:e=>{console.log(e);let{variant:t,label:r}=Uv(e.expense_status),i=e?.master_data?.claim_items?.findIndex(t=>t.claim_id===e.claim_id);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(lg,{style:{marginLeft:`1rem`},children:i>=0?i+1:`—`}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:`info`,style:{fontSize:`0.62rem`},children:e.item_name})}),(0,Y.jsx)(lg,{children:e.expense_date}),(0,Y.jsx)(lg,{children:Ov(e.expense_amt)}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:t,children:r})}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(Pv,{title:e.remarks||`--`,children:e.remarks||`--`})}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(Mv,{href:e.submitted_file_1,target:`_blank`,rel:`noreferrer`,disabled:!e.submitted_file_1,children:e.submitted_file_1?`View`:`Not Submitted`})}),n!==`VIEW`&&r!==`Submitted`&&(0,Y.jsx)(lg,{children:(0,Y.jsx)(Q,{size:`sm`,onClick:()=>O(e),children:`Update`})})]})}}),(0,Y.jsx)(Fv,{children:(0,Y.jsxs)(`span`,{children:[`Total Claim Amount: `,Ov(E.totalOPE)]})}),d.length>0&&n!==`VIEW`&&p!==`Submitted`&&(0,Y.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginTop:`1rem`},children:(0,Y.jsx)(Q,{onClick:()=>{S(d?.[0]?.master_claim_id||null),u(!0)},children:`Submit All Claims`})})]}),s&&(0,Y.jsx)(jg,{isOpen:s,onClose:()=>c(!1),claimData:y,onSaved:C}),l&&(0,Y.jsx)(Pd,{isOpen:l,title:`Confirmation`,message:`Are you sure you want to submit the claim items?`,onConfirm:()=>A(x),onClose:()=>{u(!1),S(null)},confirmLabel:`Yes`})]})},Uv=e=>({N:{variant:`warning`,label:`Not Submitted`},S:{variant:`success`,label:`Submitted`},A:{variant:`info`,label:`Approved`},R:{variant:`error`,label:`Rejected`}})[e]||{variant:`default`,label:`Unknown`},Wv=(e=[])=>{let t=e.reduce((e,t)=>{let n=$(t.s_date,!0),r=$(t.e_date,!0);if(!n||!r)return e;let i=new Date(`${n}T00:00:00`),a=new Date(`${r}T00:00:00`);for(;i<=a;){let n=[i.getFullYear(),String(i.getMonth()+1).padStart(2,`0`),String(i.getDate()).padStart(2,`0`)].join(`-`);e[n]||(e[n]={date:n,tl_count:0,ex_count:0,tl_amount:0,ex_amount:0,claim_amount:0,resources:[]});let r=Number(t.contract_rate)||0,a=Number(t.ope_amt)||0;t.emp_type===`T`?(e[n].tl_count+=1,e[n].tl_amount+=r):t.emp_type===`E`&&(e[n].ex_count+=1,e[n].ex_amount+=r),e[n].claim_amount+=a,e[n].resources.push(t),i.setDate(i.getDate()+1)}return e},{});return Object.values(t).sort((e,t)=>new Date(`${e.date}T00:00:00`)-new Date(`${t.date}T00:00:00`))},Gv=W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,Kv=W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`,qv=W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${Z.spacing.lg};
  margin-bottom: ${Z.spacing.xl};

  @media (max-width: ${Z.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Jv=W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  border-radius: 8px;
  background: #fafafa;
  border: 1px dashed ${({theme:e})=>e.colors.border};

  span {
    color: #666;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    gap: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;var Yv=W.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: white;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 45%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;W.input`
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: white;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;var Xv=W.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Zv=W.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,Qv=W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,$v=W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.accentLight};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;W.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e,variant:t})=>t===`primary`?`${e.colors.primary}10`:t===`success`?`${e.colors.success}10`:`transparent`};
  border-radius:  ${({theme:e})=>e.borderRadius.lg};
`,W.span`
  font-weight: 700;
  min-width: 25px;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
`,W.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`,W.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;var ey=W.input`
  flex: 1;
  padding: ${Z.spacing.sm} ${Z.spacing.md};
  border: 1px solid ${Z.colors.border};
  border-radius: ${Z.borderRadius.md};
  font-family: ${Z.fonts.body};
  font-size: ${Z.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${Z.colors.primary};
  }
  
  &::placeholder {
    color: ${Z.colors.textLight};
  }
`,ty=W.span`
  font-weight: 600;
  color: ${({theme:e,value:t})=>t?e.colors.textLight:e.colors.text};
`,ny=[(0,Y.jsxs)(Y.Fragment,{children:[`Customer`,(0,Y.jsx)(`br`,{}),`Order Item ID`]}),`Audit Type`,`Planned Date`,`Claim Amount`,`Approved/Total Claims`,`Planned slots`,`Claim Status`,`Actions`],ry=e=>`₹${Number(e||0).toLocaleString(`en-IN`)}`,iy=()=>{let e=Ne(),[t,n]=(0,v.useState)({search:``,status:``}),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)([]),[l,u]=(0,v.useState)([]),[d,f]=(0,v.useState)(`month`),[p,m]=(0,v.useState)(0),h=localStorage.getItem(`cust_emp_id`),[g,_]=(0,v.useState)(()=>Tf({type:`current`,mode:`month`}));(0,v.useEffect)(()=>{h&&(y(),b())},[h]);let y=async(e,t)=>{let n=localStorage.getItem(`cust_emp_id`),r=e||g.start,i=t||g.end,a=new Date(r);if(new Date(i)<a)return G.info(`End date cannot be earlier than start date`),!1;let s={emp_id:n,start_date:bf(r),end_date:bf(i)};o(!0);try{c(Ff((await al(s)).data))}catch{G.error(`No data found...`),o(!1)}finally{o(!1)}},b=(0,v.useCallback)(async()=>{if(h)try{let e=(await il({emp_id:h}))?.data?.[0]||{};e.id&&u((await dl(`GET`,e.id,`CY`))?.data||[])}catch(e){console.error(e),G.error(`Failed to load profile or claims`),u([])}},[h]),x=(0,v.useMemo)(()=>{if(!Array.isArray(l))return[];let e=g.start,t=g.end;return l.filter(n=>n?.claim_date?n.claim_items.some(n=>{if(!n?.expense_date)return!1;let r=$(n?.expense_date,!0);return r>=e&&r<=t}):!1)},[l,g.start,g.end]),S=(0,v.useMemo)(()=>Array.isArray(s)?s.map(e=>{let t=Pf(x,e);return{...e,claims:t,hasClaim:t.length>0}}):[],[s,x]),C=(0,v.useMemo)(()=>{let e={};return S.forEach(t=>{let n=t?.original_P?.order_item_key||t?.order_item_key||`UNKNOWN`;e[n]||(e[n]={order_item_key:n,customer_name:t.customer_name,grouped_data:[]}),e[n].grouped_data.push(t)}),Object.values(e).map(e=>{let t=[...e.grouped_data].sort((e,t)=>(e.planned_start_date||``).localeCompare(t.planned_start_date||``)),n=t[0]?.planned_start_date||null,r=t[t.length-1]?.planned_end_date||null,i=t.flatMap(e=>Array.isArray(e.claims)?e.claims:[]),a=new Map;i.forEach(e=>{let t=e?.id||e?.claim_id;t!=null&&!a.has(t)&&a.set(t,e)});let o=Array.from(a.values()),s=Array.from(a.values()).flatMap(e=>Array.isArray(e.claim_items)?e.claim_items:[]),c=o.reduce((e,t)=>e+Number(t?.expense_amt||0),0),l=o.reduce((e,t)=>e+Number(t?.settlement_amt||0),0),u=s.filter(e=>e?.is_approved).length,d=s.length,f=o;return{...e,items:t,grouped_data:t,earliestPlannedDate:n,latestPlannedDate:r,claimsCount:d,totalOPE:c,totalSettlement:l,approvedCount:u,claimsItem:f}}).sort((e,t)=>(e.earliestPlannedDate||``).localeCompare(t.earliestPlannedDate||``))},[S]),w=e=>{f(e),m(0);let t=Tf({type:`current`,mode:e,offset:0});_(t),y(t.start,t.end)},T=e=>{let t=p+e;m(t);let n=Tf({type:`current`,mode:d,offset:t});_(n),y(n.start,n.end)},E=C,D=(0,v.useMemo)(()=>x.reduce((e,t)=>(e.totalOPE+=Number(t?.expense_amt||0),e.totalSettlement+=Number(t?.settlement_amt||0),e),{totalOPE:0,totalSettlement:0}),[x]),O=D.totalOPE-D.totalSettlement,k=(0,v.useMemo)(()=>[{label:`Total Order Items`,value:C.length,color:`primary`,icon:(0,Y.jsx)(Wu,{})},{label:`Total OPE`,value:ry(D.totalOPE),color:`success`,icon:(0,Y.jsx)(ju,{})},{label:`Total Settlement`,value:ry(D.totalSettlement),color:`warning`,icon:(0,Y.jsx)(zl,{})},{label:`AMOUNT TO BE PAID`,value:ry(O),color:`error`,icon:(0,Y.jsx)(Ou,{})}],[S.length,D.totalSettlement,D.totalOPE,O]),{paginatedData:A,currentPage:j,itemsPerPage:M,totalItems:N,handlePageChange:P}=Ng(Lg({data:E,fields:[`customer_name`,`order_item_key`,`store_name`,`audit_type`],search:t.search,extraFilters:{activityStatus:t.status}}),10);return(0,Y.jsxs)(Jd,{title:`Clam screen`,children:[(0,Y.jsxs)(Kv,{children:[(0,Y.jsx)(Gv,{children:`Track and manage your clams`}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,Y.jsx)(Q,{variant:d===`month`?`primary`:`outline`,onClick:()=>w(`month`),children:`Month`}),(0,Y.jsx)(Q,{variant:d===`week`?`primary`:`outline`,onClick:()=>w(`week`),children:`Week`})]}),(0,Y.jsxs)(`div`,{style:{marginTop:`0.5rem`,fontWeight:`bold`,fontSize:`1.1rem`,color:`#333`,display:`flex`,alignItems:`center`,gap:`0.8rem`},children:[(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>T(-1),children:`< Prev`}),(0,Y.jsx)(`span`,{children:d===`month`?Cf(g.start):Sf(g.start,g.end)}),(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>T(1),children:`Next >`})]})]})]}),(0,Y.jsx)(qv,{children:k.map(e=>(0,Y.jsx)(lf,{label:e.label,value:e.value,icon:e.icon,color:e.color}))}),(0,Y.jsxs)(mf,{children:[(0,Y.jsxs)(Jv,{children:[(0,Y.jsx)(ey,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:t.search,onChange:e=>n(t=>({...t,search:e.target.value}))}),(0,Y.jsxs)(Yv,{name:`status`,value:t.status,onChange:e=>n(t=>({...t,status:e.target.value})),children:[(0,Y.jsx)(`option`,{value:`ALL`,children:`All`}),(0,Y.jsx)(`option`,{value:`NA`,children:`Not Assigned`}),(0,Y.jsx)(`option`,{value:`P`,children:`In Progress`}),(0,Y.jsx)(`option`,{value:`C`,children:`Completed`}),(0,Y.jsx)(`option`,{value:`NS`,children:`Not Started`})]}),(0,Y.jsx)(Q,{variant:`outline`,size:`sm`,onClick:()=>n({search:``,status:`ALL`}),children:`Clear Filters`})]}),(0,Y.jsx)(mg,{columns:ny,data:A.reverse(),isLoading:a,rowAction:e=>{i(t=>t===e.order_item_key?null:e.order_item_key)},expandedRow:r,modifiedId:!0,modifiedIdName:`order_item_key`,renderRow:t=>{let n=t.items[0]||{},r=t.items.length,i=()=>t.earliestPlannedDate===t.latestPlannedDate?yf(t.earliestPlannedDate):(0,Y.jsxs)(Y.Fragment,{children:[yf(t.earliestPlannedDate),` `,(0,Y.jsx)(`br`,{}),` `,yf(t.latestPlannedDate)]}),a=t.claimsItem[0],{variant:o,label:s}=ay(a?.expense_status);return console.log(t),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(lg,{children:[(0,Y.jsx)(Zv,{children:t.customer_name}),` `,(0,Y.jsx)(Qv,{children:t.order_item_key})]}),(0,Y.jsx)(lg,{children:n.audit_type}),(0,Y.jsx)(lg,{children:i()}),(0,Y.jsx)(lg,{children:t.claimsCount>0?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ty,{children:`OPE:`}),` `,(0,Y.jsx)(ty,{value:!0,children:ry(t.totalOPE)}),(0,Y.jsx)(`br`,{}),(0,Y.jsx)(ty,{children:`Settled:`}),` `,(0,Y.jsx)(ty,{value:!0,children:ry(t.totalSettlement)})]}):`No claims`}),(0,Y.jsx)(lg,{children:(0,Y.jsxs)(gf,{variant:t.approvedCount>0?`success`:`error`,children:[t.approvedCount,`/`,t.claimsCount,` approved`]})}),(0,Y.jsx)(lg,{children:r}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:o,children:s})}),(0,Y.jsx)(lg,{children:[`AA`,`AS`,`C`,`PA`].includes(t.activityStatus)&&(0,Y.jsx)(Xv,{children:t?.claimsItem.length===0?(0,Y.jsxs)(Q,{size:`sm`,onClick:()=>e(`/clamDetails`,{state:{data:{...t,mode:`ADD`}}}),children:[(0,Y.jsx)(hu,{}),` Add Clam`]}):(0,Y.jsxs)(Q,{size:`sm`,variant:`outline`,onClick:()=>e(`/clamDetails`,{state:{data:{...t,mode:`VIEW`}}}),children:[(0,Y.jsx)(Pu,{}),` View Clam`]})})})]})},renderExpandedRow:e=>(0,Y.jsx)(mg,{columns:[`Audit Type / Store`,`Planned Date`,`Activity Status`],data:e.items,modifiedId:!0,modifiedIdName:`unique_id`,renderRow:e=>{let t=()=>e?.planned_start_date===e?.planned_end_date?yf(e?.planned_start_date):(0,Y.jsxs)(Y.Fragment,{children:[yf(e?.planned_start_date),` to `,yf(e?.planned_end_date)]}),n=(Array.isArray(e.claims)?e.claims:[])[0],{variant:r,label:i}=ay(n?.expense_status);return e?.original_P?.is_ope_actual,(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(lg,{children:[e.audit_type,(0,Y.jsx)(`br`,{}),(0,Y.jsx)($v,{title:e.original_P?.store_name||`-`,children:e.original_P?.store_name||`-`})]}),(0,Y.jsx)(lg,{children:t()}),(0,Y.jsx)(lg,{children:(0,Y.jsx)(gf,{variant:If(e.activityStatus),children:e.statusDisplay})})]})}})}),(0,Y.jsx)(Om,{totalItems:N,itemsPerPage:M,currentPage:j,onPageChange:P,siblingCount:2})]})]})},ay=e=>({N:{variant:`warning`,label:`Not Submitted`},S:{variant:`success`,label:`Submitted`},A:{variant:`info`,label:`Approved`},R:{variant:`error`,label:`Rejected`}})[e]||{variant:`warning`,label:`Not Submitted`};W.p`
 color: ${({theme:e})=>e.colors.textLight};
`,W.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`,W.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,W.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W.input`
  flex: 1;
  padding: ${({theme:e})=>{e.spacing.sm}} ${({theme:e})=>{e.spacing.md}};
  border: 1px solid ${({theme:e})=>{e.colors.border}};
  border-radius: ${({theme:e})=>{e.borderRadius.md}};
  font-family: ${({theme:e})=>{e.fonts.body}};
  font-size: ${({theme:e})=>{e.fontSizes.sm}};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{e.colors.primary}};
  }
  
  &::placeholder {
    color: ${({theme:e})=>{e.colors.textLight}};
  }
`,W.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: white;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 45%;
    min-width: unset;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,W.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,W.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,W.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.accentLight};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W.span`
  font-weight: 600;
  color: ${({theme:e,value:t})=>t?e.colors.textLight:e.colors.text};
`;function oy(){let e={username:`ASHUTOSH@PMA_00001`,password:`ashutosh@11`};(0,v.useEffect)(()=>{localStorage.getItem(`apiResponse`)||t()},[]);let t=async()=>{try{let t=await fetch(`https://www.atomwalk.com/rest-auth/login/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!t.ok)throw Error(`Network response was not ok`);let n=await t.json();localStorage.setItem(`apiResponse`,JSON.stringify(n))}catch(e){console.error(`Error during login:`,e)}};return(0,Y.jsx)(gl,{children:(0,Y.jsx)(wl,{children:(0,Y.jsxs)(o_,{children:[(0,Y.jsx)(ht,{basename:`/retainer`,children:(0,Y.jsxs)(at,{children:[(0,Y.jsx)(rt,{path:`/login`,element:(0,Y.jsx)(Qm,{})}),(0,Y.jsxs)(rt,{element:(0,Y.jsx)(yl,{children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ki,{}),(0,Y.jsx)(nt,{})]})}),children:[(0,Y.jsx)(rt,{path:`/dashboard`,element:(0,Y.jsx)(Im,{})}),(0,Y.jsx)(rt,{path:`/activity`,element:(0,Y.jsx)(i_,{})}),(0,Y.jsx)(rt,{path:`/profitability-dashboard`,element:(0,Y.jsx)(u_,{})}),(0,Y.jsx)(rt,{path:`/clam-list`,element:(0,Y.jsx)(iy,{})}),(0,Y.jsx)(rt,{path:`/clamDetails`,element:(0,Y.jsx)(Hv,{})}),(0,Y.jsx)(rt,{path:`/resource-list`,element:(0,Y.jsx)(Ev,{})}),(0,Y.jsx)(rt,{path:`/profile`,element:(0,Y.jsx)(Yh,{})})]}),(0,Y.jsx)(rt,{path:`*`,element:(0,Y.jsx)(ng,{})})]})}),(0,Y.jsx)(Ma,{position:`top-right`,autoClose:3e3})]})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,Y.jsx)(v.StrictMode,{children:(0,Y.jsx)(oy,{})}));