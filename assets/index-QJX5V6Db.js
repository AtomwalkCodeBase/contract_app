var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},z=[],ee=-1;function B(e){return{current:e}}function V(e){0>ee||(e.current=z[ee],z[ee]=null,ee--)}function H(e,t){ee++,z[ee]=e.current,e.current=t}var te=B(null),U=B(null),W=B(null),ne=B(null);function re(e,t){switch(H(W,t),H(U,e),H(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}V(te),H(te,e)}function ie(){V(te),V(U),V(W)}function ae(e){e.memoizedState!==null&&H(ne,e);var t=te.current,n=Wd(t,e.type);t!==n&&(H(U,e),H(te,n))}function oe(e){U.current===e&&(V(te),V(U)),ne.current===e&&(V(ne),$f._currentValue=R)}var se,ce;function le(e){if(se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||``,ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+se+e+ce}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?le(n):``}function fe(e,t){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le(`Lazy`);case 13:return e.child!==t&&t!==null?le(`Suspense Fallback`):le(`Suspense`);case 19:return le(`SuspenseList`);case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return le(`Activity`);default:return``}}function pe(e){try{var t=``,n=null;do t+=fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var me=Object.prototype.hasOwnProperty,he=t.unstable_scheduleCallback,ge=t.unstable_cancelCallback,_e=t.unstable_shouldYield,ve=t.unstable_requestPaint,ye=t.unstable_now,be=t.unstable_getCurrentPriorityLevel,xe=t.unstable_ImmediatePriority,Se=t.unstable_UserBlockingPriority,Ce=t.unstable_NormalPriority,we=t.unstable_LowPriority,Te=t.unstable_IdlePriority,Ee=t.log,De=t.unstable_setDisableYieldValue,Oe=null,ke=null;function Ae(e){if(typeof Ee==`function`&&De(e),ke&&typeof ke.setStrictMode==`function`)try{ke.setStrictMode(Oe,e)}catch{}}var je=Math.clz32?Math.clz32:Pe,Me=Math.log,Ne=Math.LN2;function Pe(e){return e>>>=0,e===0?32:31-(Me(e)/Ne|0)|0}var Fe=256,Ie=262144,Le=4194304;function Re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Re(n))):i=Re(o):i=Re(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Re(n))):i=Re(o)):i=Re(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Be(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ve(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Le;return Le<<=1,!(Le&62914560)&&(Le=4194304),e}function Ue(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function We(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ke(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ke(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Je(e,t){var n=t&-t;return n=n&42?1:Ye(n),(n&(e.suspendedLanes|t))===0?n:0}function Ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xe(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ze(){var e=L.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function Qe(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var $e=Math.random().toString(36).slice(2),et=`__reactFiber$`+$e,tt=`__reactProps$`+$e,nt=`__reactContainer$`+$e,rt=`__reactEvents$`+$e,it=`__reactListeners$`+$e,at=`__reactHandles$`+$e,ot=`__reactResources$`+$e,st=`__reactMarker$`+$e;function ct(e){delete e[et],delete e[tt],delete e[rt],delete e[it],delete e[at]}function lt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[et])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function ut(e){if(e=e[et]||e[nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function ft(e){var t=e[ot];return t||=e[ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function pt(e){e[st]=!0}var mt=new Set,ht={};function gt(e,t){_t(e,t),_t(e+`Capture`,t)}function _t(e,t){for(ht[e]=t,e=0;e<t.length;e++)mt.add(t[e])}var vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),yt={},bt={};function xt(e){return me.call(bt,e)?!0:me.call(yt,e)?!1:vt.test(e)?bt[e]=!0:(yt[e]=!0,!1)}function St(e,t,n){if(xt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Tt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Et(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Dt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ot(e){if(!e._valueTracker){var t=Et(e)?`checked`:`value`;e._valueTracker=Dt(e,t,``+e[t])}}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Et(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function At(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var jt=/[\n"\\]/g;function Mt(e){return e.replace(jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Tt(t)):e.value!==``+Tt(t)&&(e.value=``+Tt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Tt(n)):Ft(e,o,Tt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Tt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ot(e);return}n=n==null?``:``+Tt(n),t=t==null?n:``+Tt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ot(e)}function Ft(e,t,n){t===`number`&&At(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Tt(n)}function Rt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(F(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Tt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ot(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Vt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Bt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Ht(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Vt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Vt(e,o,t[o])}function Ut(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Wt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kt(e){return Gt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function qt(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,Zt=null;function Qt(e){var t=ut(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[tt]||null;if(!a)throw Error(i(90));Nt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&kt(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var $t=!1;function en(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(Xt!==null||Zt!==null)&&(xu(),Xt&&(t=Xt,e=Zt,Zt=Xt=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var nn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),rn=!1;if(nn)try{var an={};Object.defineProperty(an,`passive`,{get:function(){rn=!0}}),window.addEventListener(`test`,an,an),window.removeEventListener(`test`,an,an)}catch{rn=!1}var on=null,sn=null,cn=null;function ln(){if(cn)return cn;var e,t=sn,n=t.length,r,i=`value`in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return cn=i.slice(e,1<r?1-r:void 0)}function un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dn(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?dn:fn,this.isPropagationStopped=fn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=dn)},persist:function(){},isPersistent:dn}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hn=pn(mn),gn=m({},mn,{view:0,detail:0}),_n=pn(gn),vn,yn,bn,xn=m({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==bn&&(bn&&e.type===`mousemove`?(vn=e.screenX-bn.screenX,yn=e.screenY-bn.screenY):yn=vn=0,bn=e),vn)},movementY:function(e){return`movementY`in e?e.movementY:yn}}),Sn=pn(xn),Cn=pn(m({},xn,{dataTransfer:0})),wn=pn(m({},gn,{relatedTarget:0})),Tn=pn(m({},mn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=pn(m({},mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Dn=pn(m({},mn,{data:0})),On={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},An={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=An[e])?!!t[e]:!1}function Mn(){return jn}var Nn=pn(m({},gn,{key:function(e){if(e.key){var t=On[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mn,charCode:function(e){return e.type===`keypress`?un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Pn=pn(m({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Fn=pn(m({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mn})),In=pn(m({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ln=pn(m({},xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Rn=pn(m({},mn,{newState:0,oldState:0})),zn=[9,13,27,32],Bn=nn&&`CompositionEvent`in window,Vn=null;nn&&`documentMode`in document&&(Vn=document.documentMode);var Hn=nn&&`TextEvent`in window&&!Vn,Un=nn&&(!Bn||Vn&&8<Vn&&11>=Vn),Wn=` `,Gn=!1;function Kn(e,t){switch(e){case`keyup`:return zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Jn=!1;function Yn(e,t){switch(e){case`compositionend`:return qn(t);case`keypress`:return t.which===32?(Gn=!0,Wn):null;case`textInput`:return e=t.data,e===Wn&&Gn?null:e;default:return null}}function Xn(e,t){if(Jn)return e===`compositionend`||!Bn&&Kn(e,t)?(e=ln(),cn=sn=on=null,Jn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Un&&t.locale!==`ko`?null:t.data;default:return null}}var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Zn[e.type]:t===`textarea`}function $n(e,t,n,r){Xt?Zt?Zt.push(r):Zt=[r]:Xt=r,t=Dd(t,`onChange`),0<t.length&&(n=new hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function nr(e){bd(e,0)}function rr(e){if(kt(dt(e)))return e}function ir(e,t){if(e===`change`)return t}var ar=!1;if(nn){var or;if(nn){var sr=`oninput`in document;if(!sr){var cr=document.createElement(`div`);cr.setAttribute(`oninput`,`return;`),sr=typeof cr.oninput==`function`}or=sr}else or=!1;ar=or&&(!document.documentMode||9<document.documentMode)}function lr(){er&&(er.detachEvent(`onpropertychange`,ur),tr=er=null)}function ur(e){if(e.propertyName===`value`&&rr(tr)){var t=[];$n(t,tr,e,Yt(e)),en(nr,t)}}function dr(e,t,n){e===`focusin`?(lr(),er=t,tr=n,er.attachEvent(`onpropertychange`,ur)):e===`focusout`&&lr()}function fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return rr(tr)}function pr(e,t){if(e===`click`)return rr(t)}function mr(e,t){if(e===`input`||e===`change`)return rr(t)}function hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var gr=typeof Object.is==`function`?Object.is:hr;function _r(e,t){if(gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!me.call(t,i)||!gr(e[i],t[i]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n=vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=vr(n)}}function br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=At(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=At(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Cr=nn&&`documentMode`in document&&11>=document.documentMode,wr=null,Tr=null,Er=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||wr==null||wr!==At(r)||(r=wr,`selectionStart`in r&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&_r(Er,r)||(Er=r,r=Dd(Tr,`onSelect`),0<r.length&&(t=new hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ar={animationend:kr(`Animation`,`AnimationEnd`),animationiteration:kr(`Animation`,`AnimationIteration`),animationstart:kr(`Animation`,`AnimationStart`),transitionrun:kr(`Transition`,`TransitionRun`),transitionstart:kr(`Transition`,`TransitionStart`),transitioncancel:kr(`Transition`,`TransitionCancel`),transitionend:kr(`Transition`,`TransitionEnd`)},jr={},Mr={};nn&&(Mr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),`TransitionEvent`in window||delete Ar.transitionend.transition);function Nr(e){if(jr[e])return jr[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mr)return jr[e]=t[n];return e}var Pr=Nr(`animationend`),Fr=Nr(`animationiteration`),Ir=Nr(`animationstart`),Lr=Nr(`transitionrun`),Rr=Nr(`transitionstart`),zr=Nr(`transitioncancel`),Br=Nr(`transitionend`),Vr=new Map,Hr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Hr.push(`scrollEnd`);function Ur(e,t){Vr.set(e,t),gt(t,[e])}var Wr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Gr=[],Kr=0,qr=0;function Jr(){for(var e=Kr,t=qr=Kr=0;t<e;){var n=Gr[t];Gr[t++]=null;var r=Gr[t];Gr[t++]=null;var i=Gr[t];Gr[t++]=null;var a=Gr[t];if(Gr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Qr(n,i,a)}}function Yr(e,t,n,r){Gr[Kr++]=e,Gr[Kr++]=t,Gr[Kr++]=n,Gr[Kr++]=r,qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Xr(e,t,n,r){return Yr(e,t,n,r),$r(e)}function Zr(e,t){return Yr(e,null,null,t),$r(e)}function Qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function $r(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ii(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ai(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ri(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,te.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ni(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ni(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ni(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ni(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=ni(7,e,r,t),e.lanes=n,e}function ci(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function li(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function ui(e,t,n){return t=ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var di=new WeakMap;function fi(e,t){if(typeof e==`object`&&e){var n=di.get(e);return n===void 0?(t={value:e,source:t,stack:pe(t)},di.set(e,t),t):n}return{value:e,source:t,stack:pe(t)}}var pi=[],mi=0,hi=null,gi=0,_i=[],vi=0,yi=null,bi=1,xi=``;function Si(e,t){pi[mi++]=gi,pi[mi++]=hi,hi=e,gi=t}function G(e,t,n){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,yi=e;var r=bi;e=xi;var i=32-je(r)-1;r&=~(1<<i),n+=1;var a=32-je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bi=1<<32-je(t)+i|n<<i|r,xi=a+e}else bi=1<<a|n<<i|r,xi=e}function Ci(e){e.return!==null&&(Si(e,1),G(e,1,0))}function wi(e){for(;e===hi;)hi=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null;for(;e===yi;)yi=_i[--vi],_i[vi]=null,xi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null}function Ti(e,t){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,bi=t.id,xi=t.overflow,yi=e}var Ei=null,Di=null,Oi=!1,ki=null,Ai=!1,ji=Error(i(519));function Mi(e){throw Ri(fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ji}function Ni(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[et]=e,t[tt]=r,n){case`dialog`:xd(`cancel`,t),xd(`close`,t);break;case`iframe`:case`object`:case`embed`:xd(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)xd(vd[n],t);break;case`source`:xd(`error`,t);break;case`img`:case`image`:case`link`:xd(`error`,t),xd(`load`,t);break;case`details`:xd(`toggle`,t);break;case`input`:xd(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:xd(`invalid`,t);break;case`textarea`:xd(`invalid`,t),Rt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(xd(`beforetoggle`,t),xd(`toggle`,t)),r.onScroll!=null&&xd(`scroll`,t),r.onScrollEnd!=null&&xd(`scrollend`,t),r.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||Mi(e,!0)}function Pi(e){for(Ei=e.return;Ei;)switch(Ei.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Ei=Ei.return}}function Fi(e){if(e!==Ei)return!1;if(!Oi)return Pi(e),Oi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Gd(e.type,e.memoizedProps)),n=!n),n&&Di&&Mi(e),Pi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Di=ff(e)}else t===27?(t=Di,$d(e.type)?(e=df,df=null,Di=e):Di=t):Di=Ei?uf(e.stateNode.nextSibling):null;return!0}function Ii(){Di=Ei=null,Oi=!1}function Li(){var e=ki;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),ki=null),e}function Ri(e){ki===null?ki=[e]:ki.push(e)}var zi=B(null),Bi=null,Vi=null;function Hi(e,t,n){H(zi,t._currentValue),t._currentValue=n}function Ui(e){e._currentValue=zi.current,V(zi)}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Gi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Wi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ki(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;gr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ne.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Gi(t,e,n,r),t.flags|=262144}function qi(e){for(e=e.firstContext;e!==null;){if(!gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ji(e){Bi=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Yi(e){return Zi(Bi,e)}function Xi(e,t){return Bi===null&&Ji(e),Zi(e,t)}function Zi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vi===null){if(e===null)throw Error(i(308));Vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vi=Vi.next=t;return n}var Qi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},$i=t.unstable_scheduleCallback,ea=t.unstable_NormalPriority,ta={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function na(){return{controller:new Qi,data:new Map,refCount:0}}function ra(e){e.refCount--,e.refCount===0&&$i(ea,function(){e.controller.abort()})}var ia=null,aa=0,oa=0,sa=null;function ca(e,t){if(ia===null){var n=ia=[];aa=0,oa=fd(),sa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return aa++,t.then(la,la),t}function la(){if(--aa===0&&ia!==null){sa!==null&&(sa.status=`fulfilled`);var e=ia;ia=null,oa=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ua(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var da=I.S;I.S=function(e,t){tu=ye(),typeof t==`object`&&t&&typeof t.then==`function`&&ca(e,t),da!==null&&da(e,t)};var fa=B(null);function K(){var e=fa.current;return e===null?Ll.pooledCache:e}function pa(e,t){t===null?H(fa,fa.current):H(fa,t.pool)}function ma(){var e=K();return e===null?null:{parent:ta._currentValue,pool:e}}var ha=Error(i(460)),ga=Error(i(474)),_a=Error(i(542)),va={then:function(){}};function ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ba(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e;default:if(typeof t.status==`string`)t.then(qt,qt);else{if(e=Ll,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,wa(e),e}throw Sa=t,ha}}function xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Sa=e,ha):e}}var Sa=null;function Ca(){if(Sa===null)throw Error(i(459));var e=Sa;return Sa=null,e}function wa(e){if(e===ha||e===_a)throw Error(i(483))}var Ta=null,Ea=0;function Da(e){var t=Ea;return Ea+=1,Ta===null&&(Ta=[]),ba(Ta,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ka(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Aa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&xa(i)===t.type)?(t=a(t,n.props),Oa(t,n),t.return=e,t):(t=oi(n.type,n.key,n.props,null,e.mode,r),Oa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=oi(t.type,t.key,t.props,null,e.mode,n),Oa(n,t),n.return=e,n;case v:return t=ui(t,e.mode,n),t.return=e,t;case O:return t=xa(t),f(e,t,n)}if(F(t)||M(t))return t=si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Da(t),n);if(t.$$typeof===C)return f(e,Xi(e,t),n);ka(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=xa(n),p(e,t,n,r)}if(F(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Da(n),r);if(n.$$typeof===C)return p(e,t,Xi(e,n),r);ka(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=xa(r),m(e,t,n,r,i)}if(F(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Da(r),i);if(r.$$typeof===C)return m(e,t,n,Xi(t,r),i);ka(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Oi&&Si(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Oi&&Si(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Oi&&Si(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Oi&&Si(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Oi&&Si(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Oi&&Si(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Oa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=oi(o.type,o.key,o.props,null,e.mode,c),Oa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ui(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=xa(o),b(e,r,o,c)}if(F(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Da(o),c);if(o.$$typeof===C)return b(e,r,Xi(e,o),c);ka(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ea=0;var i=b(e,t,n,r);return Ta=null,i}catch(t){if(t===ha||t===_a)throw t;var a=ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ja=Aa(!0),Ma=Aa(!1),Na=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Il&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=$r(e),Qr(e,null,n),t}return Yr(e,r,t,n),$r(e)}function Ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ba=!1;function Va(){if(Ba){var e=sa;if(e!==null)throw e}}function Ha(e,t,n,r){Ba=!1;var i=e.updateQueue;Na=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Rl&f)===f:(r&f)===f){f!==0&&f===oa&&(Ba=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Na=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Ua(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Wa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ua(n[e],t)}var Ga=B(null),Ka=B(0);function qa(e,t){e=Wl,H(Ka,e),H(Ga,t),Wl=e|t.baseLanes}function Ja(){H(Ka,Wl),H(Ga,Ga.current)}function Ya(){Wl=Ka.current,V(Ga),V(Ka)}var Xa=B(null),Za=null;function Qa(e){var t=e.alternate;H(ro,ro.current&1),H(Xa,e),Za===null&&(t===null||Ga.current!==null||t.memoizedState!==null)&&(Za=e)}function $a(e){H(ro,ro.current),H(Xa,e),Za===null&&(Za=e)}function eo(e){e.tag===22?(H(ro,ro.current),H(Xa,e),Za===null&&(Za=e)):to(e)}function to(){H(ro,ro.current),H(Xa,Xa.current)}function no(e){V(Xa),Za===e&&(Za=null),V(ro)}var ro=B(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=0,oo=null,so=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return ao=a,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?Fs:Is,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){I.H=Ps;var t=so!==null&&so.next!==null;if(ao=0,co=so=oo=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||$s||(e=e.dependencies,e!==null&&qi(e)&&($s=!0))}function xo(e,t,n,r){oo=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=so=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=Ls,o=t(n,r)}while(uo);return o}function So(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(so===null?null:so.memoizedState)!==e&&(oo.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}ao=0,co=so=oo=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?oo.memoizedState=co=e:co=co.next=e,co}function Do(){if(so===null){var e=oo.alternate;e=e===null?null:e.memoizedState}else e=so.next;var t=co===null?oo.memoizedState:co.next;if(t!==null)co=t,so=e;else{if(e===null)throw oo.alternate===null?Error(i(467)):Error(i(310));so=e,e={memoizedState:so.memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},co===null?oo.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=ba(ho,e,t),t=oo,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?Fs:Is),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Yi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=oo.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=oo.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),oo.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),so,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ao&f)===f:(Rl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===oa&&(d=!0);else if((ao&p)===p){u=u.next,p===oa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,oo.lanes|=p,Kl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,oo.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!gr(o,e.memoizedState)&&($s=!0,d&&(n=sa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);gr(o,t.memoizedState)||($s=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=oo,a=Do(),o=Oi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!gr((so||a).memoizedState,n);if(s&&(a.memoizedState=n,$s=!0),a=a.queue,os(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ts(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Ll===null)throw Error(i(349));o||ao&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oo.updateQueue,t===null?(t=Oo(),oo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,q(t)&&Bo(e)}function zo(e,t,n){return n(function(){q(t)&&Bo(e)})}function q(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gr(e,n)}catch{return!0}}function Bo(e){var t=Zr(e,2);t!==null&&gu(t,e,2)}function Vo(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){Ae(!0);try{n()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Ho(e,t,n,r){return e.baseState=n,Po(e,so,typeof r==`function`?r:Mo)}function Uo(e,t,n,r,a){if(js(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Wo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Wo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),Go(e,t,s)}catch(n){qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),Go(e,t,a)}catch(n){qo(e,t,n)}}function Go(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ko(e,t,n)},function(n){return qo(e,t,n)}):Ko(e,t,n)}function Ko(e,t,n){t.status=`fulfilled`,t.value=n,Jo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wo(e,n)))}function qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Jo(t),t=t.next;while(t!==r)}e.action=null}function Jo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yo(e,t){return t}function Xo(e,t){if(Oi){var n=Ll.formState;if(n!==null){a:{var r=oo;if(Oi){if(Di){b:{for(var i=Di,a=Ai;i.nodeType!==8;){if(!a){i=null;break b}if(i=uf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Di=uf(i.nextSibling),r=i.data===`F!`;break a}}Mi(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},n.queue=r,n=Os.bind(null,oo,r),r.dispatch=n,r=Vo(!1),a=As.bind(null,oo,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Uo.bind(null,oo,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Zo(e){return Qo(Do(),so,e)}function Qo(e,t,n){if(t=Po(e,t,Yo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===ha?_a:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(oo.flags|=2048,ts(9,{destroy:void 0},$o.bind(null,i,n),null)),[r,a,e]}function $o(e,t){e.action=t}function es(e){var t=Do(),n=so;if(n!==null)return Qo(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ts(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=oo.updateQueue,t===null&&(t=Oo(),oo.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ns(){return Do().memoizedState}function rs(e,t,n,r){var i=Eo();oo.flags|=e,i.memoizedState=ts(1|t,{destroy:void 0},n,r===void 0?null:r)}function is(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;so!==null&&r!==null&&vo(r,so.memoizedState.deps)?i.memoizedState=ts(t,a,n,r):(oo.flags|=e,i.memoizedState=ts(1|t,a,n,r))}function as(e,t){rs(8390656,8,e,t)}function os(e,t){is(2048,8,e,t)}function ss(e){oo.flags|=4;var t=oo.updateQueue;if(t===null)t=Oo(),oo.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function cs(e){var t=Do().memoizedState;return ss({ref:t,nextImpl:e}),function(){if(Il&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ls(e,t){return is(4,2,e,t)}function us(e,t){return is(4,4,e,t)}function ds(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fs(e,t,n){n=n==null?null:n.concat([e]),is(4,4,ds.bind(null,t,e),n)}function ps(){}function ms(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r}function gs(e,t,n){return n===void 0||ao&1073741824&&!(Rl&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),oo.lanes|=e,Kl|=e,n)}function _s(e,t,n,r){return gr(n,t)?n:Ga.current===null?!(ao&42)||ao&1073741824&&!(Rl&261930)?($s=!0,e.memoizedState=n):(e=hu(),oo.lanes|=e,Kl|=e,t):(e=gs(e,n,r),gr(e,t)||($s=!0),e)}function vs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};I.T=s,As(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ks(e,t,ua(c,r),mu(e)):ks(e,t,r,mu(e))}catch(n){ks(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function ys(){}function bs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=xs(e).queue;vs(e,a,t,R,n===null?ys:function(){return Ss(e),n(r)})}function xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ss(e){var t=xs(e);t.next===null&&(t=e.alternate.memoizedState),ks(e,t.next.queue,{},mu())}function Cs(){return Yi($f)}function ws(){return Do().memoizedState}function Ts(){return Do().memoizedState}function Es(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ia(n);var r=La(t,e,n);r!==null&&(gu(r,t,n),Ra(r,t,n)),t={cache:na()},e.payload=t;return}t=t.return}}function Ds(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},js(e)?Ms(t,n):(n=Xr(e,t,n,r),n!==null&&(gu(n,e,r),Ns(n,t,r)))}function Os(e,t,n){ks(e,t,n,mu())}function ks(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(js(e))Ms(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,gr(s,o))return Yr(e,t,i,0),Ll===null&&Jr(),!1}catch{}if(n=Xr(e,t,i,r),n!==null)return gu(n,e,r),Ns(n,t,r),!0}return!1}function As(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},js(e)){if(t)throw Error(i(479))}else t=Xr(e,n,r,2),t!==null&&gu(t,e,2)}function js(e){var t=e.alternate;return e===oo||t!==null&&t===oo}function Ms(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ns(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qe(e,n)}}var Ps={readContext:Yi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Ps.useEffectEvent=_o;var Fs={readContext:Yi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Yi,useEffect:as,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),rs(4194308,4,ds.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){rs(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){Ae(!0);try{e()}finally{Ae(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){Ae(!0);try{n(t)}finally{Ae(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ds.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Vo(e);var t=e.queue,n=Os.bind(null,oo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ps,useDeferredValue:function(e,t){return gs(Eo(),e,t)},useTransition:function(){var e=Vo(!1);return e=vs.bind(null,oo,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=oo,a=Eo();if(Oi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ll===null)throw Error(i(349));Rl&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,as(zo.bind(null,r,o,e),[e]),r.flags|=2048,ts(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Ll.identifierPrefix;if(Oi){var n=xi,r=bi;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Cs,useFormState:Xo,useActionState:Xo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=As.bind(null,oo,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Es.bind(null,oo)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(Il&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Is={readContext:Yi,use:Ao,useCallback:ms,useContext:Yi,useEffect:os,useImperativeHandle:fs,useInsertionEffect:ls,useLayoutEffect:us,useMemo:hs,useReducer:No,useRef:ns,useState:function(){return No(Mo)},useDebugValue:ps,useDeferredValue:function(e,t){return _s(Do(),so.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:ws,useHostTransitionStatus:Cs,useFormState:Zo,useActionState:Zo,useOptimistic:function(e,t){return Ho(Do(),so,e,t)},useMemoCache:jo,useCacheRefresh:Ts};Is.useEffectEvent=cs;var Ls={readContext:Yi,use:Ao,useCallback:ms,useContext:Yi,useEffect:os,useImperativeHandle:fs,useInsertionEffect:ls,useLayoutEffect:us,useMemo:hs,useReducer:Fo,useRef:ns,useState:function(){return Fo(Mo)},useDebugValue:ps,useDeferredValue:function(e,t){var n=Do();return so===null?gs(n,e,t):_s(n,so.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:ws,useHostTransitionStatus:Cs,useFormState:es,useActionState:es,useOptimistic:function(e,t){var n=Do();return so===null?(n.baseState=e,[e,n.queue.dispatch]):Ho(n,so,e,t)},useMemoCache:jo,useCacheRefresh:Ts};Ls.useEffectEvent=cs;function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ia(r);i.payload=t,n!=null&&(i.callback=n),t=La(e,i,r),t!==null&&(gu(t,e,r),Ra(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ia(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=La(e,i,r),t!==null&&(gu(t,e,r),Ra(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ia(n);r.tag=2,t!=null&&(r.callback=t),t=La(e,r,n),t!==null&&(gu(t,e,n),Ra(t,e,n))}};function Bs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,a):!0}function Vs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function Hs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Us(e){Wr(e)}function Ws(e){console.error(e)}function Gs(e){Wr(e)}function Ks(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){return n=Ia(n),n.tag=3,n.payload={element:null},n.callback=function(){Ks(e,t)},n}function Ys(e){return e=Ia(e),e.tag=3,e}function Xs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){qs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Zs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ki(t,n,a,!0),n=Xa.current,n!==null){switch(n.tag){case 31:case 13:return Za===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===va?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),qu(e,r,a)),!1;case 22:return n.flags|=65536,r===va?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),qu(e,r,a)),!1}throw Error(i(435,n.tag))}return qu(e,r,a),Ou(),!1}if(Oi)return t=Xa.current,t===null?(r!==ji&&(t=Error(i(423),{cause:r}),Ri(fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fi(r,n),a=Js(e.stateNode,r,a),za(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ji&&(e=Error(i(422),{cause:r}),Ri(fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=fi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Js(n.stateNode,r,e),za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ys(a),Xs(a,e,n,r),za(n,a),!1}n=n.return}while(n!==null);return!1}var Qs=Error(i(461)),$s=!1;function ec(e,t,n,r){t.child=e===null?Ma(t,null,n,r):ja(t,e.child,n,r)}function tc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ji(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!$s?(wo(e,t,i),Tc(e,t,i)):(Oi&&s&&Ci(t),t.flags|=1,ec(e,t,r,i),t.child)}function nc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,rc(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ec(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?_r:n,n(o,r)&&e.ref===t.ref)return Tc(e,t,i)}return t.flags|=1,e=ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function rc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_r(a,r)&&e.ref===t.ref)if($s=!1,t.pendingProps=r=a,Ec(e,i))e.flags&131072&&($s=!0);else return t.lanes=e.lanes,Tc(e,t,i)}return dc(e,t,n,r,i)}function ic(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return oc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pa(t,a===null?null:a.cachePool),a===null?Ja():qa(t,a),eo(t);else return r=t.lanes=536870912,oc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&pa(t,null),Ja(),to(t)):(pa(t,a.cachePool),qa(t,a),to(t),t.memoizedState=null);return ec(e,t,i,n),t.child}function ac(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function oc(e,t,n,r,i){var a=K();return a=a===null?null:{parent:ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&pa(t,null),Ja(),eo(t),e!==null&&Ki(e,t,r,!0),t.childLanes=i,null}function sc(e,t){return t=bc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cc(e,t,n){return ja(t,e.child,null,n),e=sc(t,t.pendingProps),e.flags|=2,no(t),t.memoizedState=null,e}function lc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Oi){if(r.mode===`hidden`)return e=sc(t,r),t.lanes=536870912,ac(null,e);if($a(t),(e=Di)?(e=of(e,Ai),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw Mi(t);return t.lanes=536870912,null}return sc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if($a(t),a)if(t.flags&256)t.flags&=-257,t=cc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if($s||Ki(e,t,n,!1),a=(n&e.childLanes)!==0,$s||a){if(r=Ll,r!==null&&(s=Je(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Zr(e,s),gu(r,e,s),Qs;Ou(),t=cc(e,t,n)}else e=o.treeContext,Di=uf(s.nextSibling),Ei=t,Oi=!0,ki=null,Ai=!1,e!==null&&Ti(t,e),t=sc(t,r),t.flags|=4096;return t}return e=ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function uc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function dc(e,t,n,r,i){return Ji(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!$s?(wo(e,t,i),Tc(e,t,i)):(Oi&&r&&Ci(t),t.flags|=1,ec(e,t,n,i),t.child)}function fc(e,t,n,r,i,a){return Ji(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!$s?(wo(e,t,a),Tc(e,t,a)):(Oi&&r&&Ci(t),t.flags|=1,ec(e,t,n,a),t.child)}function pc(e,t,n,r,i){if(Ji(t),t.stateNode===null){var a=ei,o=n.contextType;typeof o==`object`&&o&&(a=Yi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=zs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Pa(t),o=n.contextType,a.context=typeof o==`object`&&o?Yi(o):ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Rs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&zs.enqueueReplaceState(a,a.state,null),Ha(t,r,a,i),Va(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Hs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ei,typeof u==`object`&&u&&(o=Yi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Vs(t,a,r,o),Na=!1;var f=t.memoizedState;a.state=f,Ha(t,r,a,i),Va(),l=t.memoizedState,s||f!==l||Na?(typeof d==`function`&&(Rs(t,n,d,r),l=t.memoizedState),(c=Na||Bs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fa(e,t),o=t.memoizedProps,u=Hs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ei,typeof l==`object`&&l&&(c=Yi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Vs(t,a,r,c),Na=!1,f=t.memoizedState,a.state=f,Ha(t,r,a,i),Va();var p=t.memoizedState;o!==d||f!==p||Na||e!==null&&e.dependencies!==null&&qi(e.dependencies)?(typeof s==`function`&&(Rs(t,n,s,r),p=t.memoizedState),(u=Na||Bs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,uc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ja(t,e.child,null,i),t.child=ja(t,null,n,i)):ec(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Tc(e,t,i),e}function mc(e,t,n,r){return Ii(),t.flags|=256,ec(e,t,n,r),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:ma()}}function _c(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function vc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ro.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(Oi){if(a?Qa(t):to(t),(e=Di)?(e=of(e,Ai),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Ei=t,Di=null)):e=null,e===null)throw Mi(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(to(t),a=t.mode,c=bc({mode:`hidden`,children:c},a),r=si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=gc(n),r.childLanes=_c(e,s,n),t.memoizedState=hc,ac(null,r)):(Qa(t),yc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Qa(t),t.flags&=-257,t=xc(e,t,n)):t.memoizedState===null?(to(t),c=r.fallback,a=t.mode,r=bc({mode:`visible`,children:r.children},a),c=si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ja(t,e.child,null,n),r=t.child,r.memoizedState=gc(n),r.childLanes=_c(e,s,n),t.memoizedState=hc,t=ac(null,r)):(to(t),t.child=e.child,t.flags|=128,t=null);else if(Qa(t),cf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ri({value:r,source:null,stack:null}),t=xc(e,t,n)}else if($s||Ki(e,t,n,!1),s=(n&e.childLanes)!==0,$s||s){if(s=Ll,s!==null&&(r=Je(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Zr(e,r),gu(s,e,r),Qs;sf(c)||Ou(),t=xc(e,t,n)}else sf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Di=uf(c.nextSibling),Ei=t,Oi=!0,ki=null,Ai=!1,e!==null&&Ti(t,e),t=yc(t,r.children),t.flags|=4096);return t}return a?(to(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ii(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=si(c,a,n,null),c.flags|=2):c=ii(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ac(null,r),r=t.child,c=e.child.memoizedState,c===null?c=gc(n):(a=c.cachePool,a===null?a=ma():(l=ta._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=_c(e,s,n),t.memoizedState=hc,ac(e.child,r)):(Qa(t),n=e.child,e=n.sibling,n=ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function yc(e,t){return t=bc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function bc(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function xc(e,t,n){return ja(t,e.child,null,n),e=yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function Cc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function wc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ro.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,H(ro,o),ec(e,t,r,n),r=Oi?gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,n,t);else if(e.tag===19)Sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cc(t,!0,n,null,a,r);break;case`together`:Cc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Tc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ec(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&qi(e))):!0}function Dc(e,t,n){switch(t.tag){case 3:re(t,t.stateNode.containerInfo),Hi(t,ta,e.memoizedState.cache),Ii();break;case 27:case 5:ae(t);break;case 4:re(t,t.stateNode.containerInfo);break;case 10:Hi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$a(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Qa(t),e=Tc(e,t,n),e===null?null:e.sibling):vc(e,t,n):(Qa(t),t.flags|=128,null);Qa(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ki(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return wc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ro,ro.current),r)break;return null;case 22:return t.lanes=0,ic(e,t,n,t.pendingProps);case 24:Hi(t,ta,e.memoizedState.cache)}return Tc(e,t,n)}function Oc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$s=!0;else{if(!Ec(e,n)&&!(t.flags&128))return $s=!1,Dc(e,t,n);$s=!!(e.flags&131072)}else $s=!1,Oi&&t.flags&1048576&&G(t,gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e==`function`)ri(e)?(r=Hs(e,r),t.tag=1,t=pc(null,t,e,r,n)):(t.tag=0,t=dc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=tc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=nc(null,t,e,r,n);break a}}throw t=P(e)||e,Error(i(306,t,``))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Hs(r,t.pendingProps),pc(e,t,r,a,n);case 3:a:{if(re(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Fa(e,t),Ha(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Hi(t,ta,r),r!==o.cache&&Gi(t,[ta],n,!0),Va(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=mc(e,t,r,n);break a}else if(r!==a){a=fi(Error(i(424)),t),Ri(a),t=mc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Di=uf(e.firstChild),Ei=t,Oi=!0,ki=null,Ai=!0,n=Ma(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ii(),r===a){t=Tc(e,t,n);break a}ec(e,t,r,n)}t=t.child}return t;case 26:return uc(e,t),e===null?(n=Q(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oi||(n=t.type,e=t.pendingProps,r=Hd(W.current).createElement(n),r[et]=t,r[tt]=e,Id(r,n,e),pt(r),t.stateNode=r):t.memoizedState=Q(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ae(t),e===null&&Oi&&(r=t.stateNode=mf(t.type,t.pendingProps,W.current),Ei=t,Ai=!0,a=Di,$d(t.type)?(df=a,Di=uf(r.firstChild)):Di=a),ec(e,t,t.pendingProps.children,n),uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oi&&((a=r=Di)&&(r=rf(r,t.type,t.pendingProps,Ai),r===null?a=!1:(t.stateNode=r,Ei=t,Di=uf(r.firstChild),Ai=!1,a=!0)),a||Mi(t)),ae(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Gd(a,o)?r=null:s!==null&&Gd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),$f._currentValue=a),uc(e,t),ec(e,t,r,n),t.child;case 6:return e===null&&Oi&&((e=n=Di)&&(n=af(n,t.pendingProps,Ai),n===null?e=!1:(t.stateNode=n,Ei=t,Di=null,e=!0)),e||Mi(t)),null;case 13:return vc(e,t,n);case 4:return re(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ja(t,null,r,n):ec(e,t,r,n),t.child;case 11:return tc(e,t,t.type,t.pendingProps,n);case 7:return ec(e,t,t.pendingProps,n),t.child;case 8:return ec(e,t,t.pendingProps.children,n),t.child;case 12:return ec(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Hi(t,t.type,r.value),ec(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ji(t),a=Yi(a),r=r(a),t.flags|=1,ec(e,t,r,n),t.child;case 14:return nc(e,t,t.type,t.pendingProps,n);case 15:return rc(e,t,t.type,t.pendingProps,n);case 19:return wc(e,t,n);case 31:return lc(e,t,n);case 22:return ic(e,t,n,t.pendingProps);case 24:return Ji(t),r=Yi(ta),e===null?(a=K(),a===null&&(a=Ll,o=na(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Pa(t),Hi(t,ta,a)):((e.lanes&n)!==0&&(Fa(e,t),Ha(t,null,null,n),Va()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Hi(t,ta,r),r!==a.cache&&Gi(t,[ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Hi(t,ta,r))),ec(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function kc(e){e.flags|=4}function Ac(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Sa=va,ga}else e.flags&=-16777217}function jc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Sa=va,ga}function Mc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:He(),e.lanes|=t,Xl|=t)}function Nc(e,t){if(!Oi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fc(e,t,n){var r=t.pendingProps;switch(wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pc(t),null;case 1:return Pc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ui(ta),ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?kc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Li())),Pc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(kc(t),o===null?(Pc(t),Ac(t,a,null,r,n)):(Pc(t),jc(t,o))):o?o===e.memoizedState?(Pc(t),t.flags&=-16777217):(kc(t),Pc(t),jc(t,o)):(e=e.memoizedProps,e!==r&&kc(t),Pc(t),Ac(t,a,e,r,n)),null;case 27:if(oe(t),n=W.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Pc(t),null}e=te.current,Fi(t)?Ni(t,e):(e=mf(a,r,n),t.stateNode=e,kc(t))}return Pc(t),null;case 5:if(oe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Pc(t),null}if(o=te.current,Fi(t))Ni(t,o);else{var s=Hd(W.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[et]=t,o[tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Id(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&kc(t)}}return Pc(t),Ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&kc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=W.current,Fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ei,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Mi(t,!0)}else e=Hd(e).createTextNode(r),e[et]=t,t.stateNode=e}return Pc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Fi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[et]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pc(t),e=!1}else n=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(no(t),t):(no(t),null);if(t.flags&128)throw Error(i(558))}return Pc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[et]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pc(t),a=!1}else a=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(no(t),t):(no(t),null)}return no(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Mc(t,t.updateQueue),Pc(t),null);case 4:return ie(),e===null&&wd(t.stateNode.containerInfo),Pc(t),null;case 10:return Ui(t.type),Pc(t),null;case 19:if(V(ro),r=t.memoizedState,r===null)return Pc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Nc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,Nc(r,!1),e=o.updateQueue,t.updateQueue=e,Mc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ai(n,e),n=n.sibling;return H(ro,ro.current&1|2),Oi&&Si(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ye()>nu&&(t.flags|=128,a=!0,Nc(r,!1),t.lanes=4194304)}else{if(!a)if(e=io(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Mc(t,e),Nc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Oi)return Pc(t),null}else 2*ye()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Nc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Pc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ye(),e.sibling=null,n=ro.current,H(ro,a?n&1|2:n&1),Oi&&Si(t,r.treeForkCount),e);case 22:case 23:return no(t),Ya(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Pc(t),t.subtreeFlags&6&&(t.flags|=8192)):Pc(t),n=t.updateQueue,n!==null&&Mc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&V(fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ui(ta),Pc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ic(e,t){switch(wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(ta),ie(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return oe(t),null;case 31:if(t.memoizedState!==null){if(no(t),t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(no(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(ro),null;case 4:return ie(),null;case 10:return Ui(t.type),null;case 22:case 23:return no(t),Ya(),e!==null&&V(fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ui(ta),null;case 25:return null;default:return null}}function Lc(e,t){switch(wi(t),t.tag){case 3:Ui(ta),ie();break;case 26:case 27:case 5:oe(t);break;case 4:ie();break;case 31:t.memoizedState!==null&&no(t);break;case 13:no(t);break;case 19:V(ro);break;case 10:Ui(t.type);break;case 22:case 23:no(t),Ya(),e!==null&&V(fa);break;case 24:Ui(ta)}}function Rc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Ku(t,t.return,e)}}function zc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Ku(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Ku(t,t.return,e)}}function Bc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wa(t,n)}catch(t){Ku(e,e.return,t)}}}function Vc(e,t,n){n.props=Hs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Ku(e,t,n)}}function Hc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Ku(e,t,n)}}function Uc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Ku(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Ku(e,t,n)}else n.current=null}function Wc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Ku(e,e.return,t)}}function Gc(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[tt]=t}catch(t){Ku(e,e.return,t)}}function Kc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Id(t,r,n),t[et]=e,t[tt]=n}catch(t){Ku(e,e.return,t)}}var Zc=!1,Qc=!1,$c=!1,el=typeof WeakSet==`function`?WeakSet:Set,tl=null;function nl(e,t){if(e=e.containerInfo,Bd=cp,e=xr(e),Sr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},cp=!1,tl=t;tl!==null;)if(t=tl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,tl=e;else for(;tl!==null;){switch(t=tl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Hs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Ku(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,tl=e;break}tl=t.return}}function rl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_l(e,n),r&4&&Rc(5,n);break;case 1:if(_l(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Ku(n,n.return,e)}else{var i=Hs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Ku(n,n.return,e)}}r&64&&Bc(n),r&512&&Hc(n,n.return);break;case 3:if(_l(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wa(e,t)}catch(e){Ku(n,n.return,e)}}break;case 27:t===null&&r&4&&Xc(n);case 26:case 5:_l(e,n),t===null&&r&4&&Wc(n),r&512&&Hc(n,n.return);break;case 12:_l(e,n);break;case 31:_l(e,n),r&4&&ll(e,n);break;case 13:_l(e,n),r&4&&ul(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xu.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||Zc,!r){t=t!==null&&t.memoizedState!==null||Qc,i=Zc;var a=Qc;Zc=r,(Qc=t)&&!a?yl(e,n,(n.subtreeFlags&8772)!=0):_l(e,n),Zc=i,Qc=a}break;case 30:break;default:_l(e,n)}}function il(e){var t=e.alternate;t!==null&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var al=null,ol=!1;function sl(e,t,n){for(n=n.child;n!==null;)cl(e,t,n),n=n.sibling}function cl(e,t,n){if(ke&&typeof ke.onCommitFiberUnmount==`function`)try{ke.onCommitFiberUnmount(Oe,n)}catch{}switch(n.tag){case 26:Qc||Uc(n,t),sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qc||Uc(n,t);var r=al,i=ol;$d(n.type)&&(al=n.stateNode,ol=!1),sl(e,t,n),hf(n.stateNode),al=r,ol=i;break;case 5:Qc||Uc(n,t);case 6:if(r=al,i=ol,al=null,sl(e,t,n),al=r,ol=i,al!==null)if(ol)try{(al.nodeType===9?al.body:al.nodeName===`HTML`?al.ownerDocument.body:al).removeChild(n.stateNode)}catch(e){Ku(n,t,e)}else try{al.removeChild(n.stateNode)}catch(e){Ku(n,t,e)}break;case 18:al!==null&&(ol?(e=al,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):ef(al,n.stateNode));break;case 4:r=al,i=ol,al=n.stateNode.containerInfo,ol=!0,sl(e,t,n),al=r,ol=i;break;case 0:case 11:case 14:case 15:zc(2,n,t),Qc||zc(4,n,t),sl(e,t,n);break;case 1:Qc||(Uc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Vc(n,t,r)),sl(e,t,n);break;case 21:sl(e,t,n);break;case 22:Qc=(r=Qc)||n.memoizedState!==null,sl(e,t,n),Qc=r;break;default:sl(e,t,n)}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Ku(t,t.return,e)}}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Ku(t,t.return,e)}}function dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new el),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new el),t;default:throw Error(i(435,e.tag))}}function fl(e,t){var n=dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Zu.bind(null,e,t);t.then(r,r)}})}function pl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($d(c.type)){al=c.stateNode,ol=!1;break a}break;case 5:al=c.stateNode,ol=!1;break a;case 3:case 4:al=c.stateNode.containerInfo,ol=!0;break a}c=c.return}if(al===null)throw Error(i(160));cl(o,s,a),al=null,ol=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)J(t,e),t=t.sibling}var ml=null;function J(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pl(t,e),hl(e),r&4&&(zc(3,e,e.return),Rc(3,e),zc(5,e,e.return));break;case 1:pl(t,e),hl(e),r&512&&(Qc||n===null||Uc(n,n.return)),r&64&&Zc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ml;if(pl(t,e),hl(e),r&512&&(Qc||n===null||Uc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[st]||o[et]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Id(o,r,n),o[et]=e,pt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[et]=e,pt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:pl(t,e),hl(e),r&512&&(Qc||n===null||Uc(n,n.return)),n!==null&&r&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pl(t,e),hl(e),r&512&&(Qc||n===null||Uc(n,n.return)),e.flags&32){a=e.stateNode;try{zt(a,``)}catch(t){Ku(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Gc(e,a,n===null?a:n.memoizedProps)),r&1024&&($c=!0);break;case 6:if(pl(t,e),hl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Ku(e,e.return,t)}}break;case 3:if(Vf=null,a=ml,ml=vf(t.containerInfo),pl(t,e),ml=a,hl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Ku(e,e.return,t)}$c&&($c=!1,gl(e));break;case 4:r=ml,ml=vf(e.stateNode.containerInfo),pl(t,e),hl(e),ml=r;break;case 12:pl(t,e),hl(e);break;case 31:pl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 13:pl(t,e),hl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=ye()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Zc,d=Qc;if(Zc=u||a,Qc=d||l,pl(t,e),Qc=d,Zc=u,hl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Zc||Qc||vl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Ku(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Ku(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?tf(m,!0):tf(l.stateNode,!1)}catch(e){Ku(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,fl(e,n))));break;case 19:pl(t,e),hl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 30:break;case 21:break;default:pl(t,e),hl(e)}}function hl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Kc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Yc(e,qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(zt(o,``),n.flags&=-33),Yc(e,qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Jc(e,qc(e),s);break;default:throw Error(i(161))}}catch(t){Ku(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rl(e,t.alternate,t),t=t.sibling}function vl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zc(4,t,t.return),vl(t);break;case 1:Uc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Vc(t,t.return,n),vl(t);break;case 27:hf(t.stateNode);case 26:case 5:Uc(t,t.return),vl(t);break;case 22:t.memoizedState===null&&vl(t);break;case 30:vl(t);break;default:vl(t)}e=e.sibling}}function yl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:yl(i,a,n),Rc(4,a);break;case 1:if(yl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Ku(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ua(c[i],s)}catch(e){Ku(r,r.return,e)}}n&&o&64&&Bc(a),Hc(a,a.return);break;case 27:Xc(a);case 26:case 5:yl(i,a,n),n&&r===null&&o&4&&Wc(a),Hc(a,a.return);break;case 12:yl(i,a,n);break;case 31:yl(i,a,n),n&&o&4&&ll(i,a);break;case 13:yl(i,a,n),n&&o&4&&ul(i,a);break;case 22:a.memoizedState===null&&yl(i,a,n),Hc(a,a.return);break;case 30:break;default:yl(i,a,n)}t=t.sibling}}function bl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ra(n))}function xl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e))}function Sl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cl(e,t,n,r),t=t.sibling}function Cl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,r),i&2048&&Rc(9,t);break;case 1:Sl(e,t,n,r);break;case 3:Sl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e)));break;case 12:if(i&2048){Sl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Ku(t,t.return,e)}}else Sl(e,t,n,r);break;case 31:Sl(e,t,n,r);break;case 13:Sl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Sl(e,t,n,r):(a._visibility|=2,wl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Sl(e,t,n,r):Tl(e,t),i&2048&&bl(o,t);break;case 24:Sl(e,t,n,r),i&2048&&xl(t.alternate,t);break;default:Sl(e,t,n,r)}}function wl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:wl(a,o,s,c,i),Rc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,wl(a,o,s,c,i)):u._visibility&2?wl(a,o,s,c,i):Tl(a,o),i&&l&2048&&bl(o.alternate,o);break;case 24:wl(a,o,s,c,i),i&&l&2048&&xl(o.alternate,o);break;default:wl(a,o,s,c,i)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Tl(n,r),i&2048&&bl(r.alternate,r);break;case 24:Tl(n,r),i&2048&&xl(r.alternate,r);break;default:Tl(n,r)}t=t.sibling}}var El=8192;function Dl(e,t,n){if(e.subtreeFlags&El)for(e=e.child;e!==null;)Ol(e,t,n),e=e.sibling}function Ol(e,t,n){switch(e.tag){case 26:Dl(e,t,n),e.flags&El&&e.memoizedState!==null&&Kf(n,ml,e.memoizedState,e.memoizedProps);break;case 5:Dl(e,t,n);break;case 3:case 4:var r=ml;ml=vf(e.stateNode.containerInfo),Dl(e,t,n),ml=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=El,El=16777216,Dl(e,t,n),El=r):Dl(e,t,n));break;default:Dl(e,t,n)}}function kl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Nl(r,e)}kl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jl(e),e=e.sibling}function jl(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&zc(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):Al(e);break;default:Al(e)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Nl(r,e)}kl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zc(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function Nl(e,t){for(;tl!==null;){var n=tl;switch(n.tag){case 0:case 11:case 15:zc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ra(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,tl=r;else a:for(n=e;tl!==null;){r=tl;var i=r.sibling,a=r.return;if(il(r),r===n){tl=null;break a}if(i!==null){i.return=a,tl=i;break a}tl=a}}}var Pl={getCacheForType:function(e){var t=Yi(ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Yi(ta).controller.signal}},Fl=typeof WeakMap==`function`?WeakMap:Map,Il=0,Ll=null,Y=null,Rl=0,zl=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return Il&2&&Rl!==0?Rl&-Rl:I.T===null?Ze():fd()}function hu(){if(Yl===0)if(!(Rl&536870912)||Oi){var e=Ie;Ie<<=1,!(Ie&3932160)&&(Ie=262144),Yl=e}else Yl=536870912;return e=Xa.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===Ll&&(zl===2||zl===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,Rl,Yl,!1)),We(e,n),(!(Il&2)||e!==Ll)&&(e===Ll&&(!(Il&2)&&(ql|=n),Gl===4&&bu(e,Rl,Yl,!1)),ad(e))}function _u(e,t,n){if(Il&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Be(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-ye(),10<a)){if(bu(r,t,Yl,!Vl),ze(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=Jd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);ad(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Ol(t,a,d);var m=(a&62914560)===a?eu-ye():(a&4194048)===a?tu-ye():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ke(e,n,t)}function xu(){return Il&6?!0:(X(0,!1),!1)}function Su(){if(Y!==null){if(zl===0)var e=Y.return;else e=Y,Vi=Bi=null,To(e),Ta=null,Ea=0,e=Y;for(;e!==null;)Lc(e.alternate,e),e=e.return;Y=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),Ll=e,Y=n=ii(e.current,null),Rl=t,zl=0,Bl=null,Vl=!1,Hl=Be(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,Jr(),n}function wu(e,t){oo=null,I.H=Ps,t===ha||t===_a?(t=Ca(),zl=3):t===ga?(t=Ca(),zl=4):zl=t===Qs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,Y===null&&(Gl=1,Ks(e,fi(t,e.current)))}function Tu(){var e=Xa.current;return e===null?!0:(Rl&4194048)===Rl?Za===null:(Rl&62914560)===Rl||Rl&536870912?e===Za:!1}function Eu(){var e=I.H;return I.H=Ps,e===null?Ps:e}function Du(){var e=I.A;return I.A=Pl,e}function Ou(){Gl=4,Vl||(Rl&4194048)!==Rl&&Xa.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||Ll===null||bu(Ll,Rl,Yl,!1)}function ku(e,t,n){var r=Il;Il|=2;var i=Eu(),a=Du();(Ll!==e||Rl!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(zl!==0&&Y!==null){var s=Y,c=Bl;switch(zl){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:Xa.current===null&&(t=!0);var l=zl;if(zl=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=zl,zl=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Vi=Bi=null,Il=r,I.H=i,I.A=a,Y===null&&(Ll=null,Rl=0,Jr()),o}function Au(){for(;Y!==null;)Nu(Y)}function ju(e,t){var n=Il;Il|=2;var r=Eu(),a=Du();Ll!==e||Rl!==t?(ru=null,nu=ye()+500,Cu(e,t)):Hl=Be(e,t);a:do try{if(zl!==0&&Y!==null){t=Y;var o=Bl;b:switch(zl){case 1:zl=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(ya(o)){zl=0,Bl=null,Pu(t);break}t=function(){zl!==2&&zl!==9||Ll!==e||(zl=7),ad(e)},o.then(t,t);break a;case 3:zl=7;break a;case 4:zl=5;break a;case 7:ya(o)?(zl=0,Bl=null,Pu(t)):(zl=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Gf(s):c.stateNode.complete){zl=0,Bl=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,Iu(u))}break b}}zl=0,Bl=null,Fu(e,t,o,5);break;case 6:zl=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Vi=Bi=null,I.H=r,I.A=a,Il=n,Y===null?(Ll=null,Rl=0,Jr(),Gl):0}function Mu(){for(;Y!==null&&!_e();)Nu(Y)}function Nu(e){var t=Oc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):Y=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fc(n,t,t.pendingProps,t.type,void 0,Rl);break;case 11:t=fc(n,t,t.pendingProps,t.type.render,t.ref,Rl);break;case 5:To(t);default:Lc(n,t),t=Y=ai(t,Wl),t=Oc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):Y=t}function Fu(e,t,n,r){Vi=Bi=null,To(t),Ta=null,Ea=0;var i=t.return;try{if(Zs(e,i,t,n,Rl)){Gl=1,Ks(e,fi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;Gl=1,Ks(e,fi(n,e.current)),Y=null;return}t.flags&32768?(Oi||r===1?e=!0:Hl||Rl&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=Fc(t.alternate,t,Wl);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Ic(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);Gl=6,Y=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(Il&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=qr,Ge(e,n,o,s,c,l),e===Ll&&(Y=Ll=null,Rl=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Qu(Ce,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=I.T,I.T=null,a=L.p,L.p=2,s=Il,Il|=4;try{nl(e,t,n)}finally{Il=s,L.p=a,I.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Il;Il|=4;try{J(t,e);var a=Vd,o=xr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&br(s.ownerDocument.documentElement,s)){if(c!==null&&Sr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=yr(s,h),v=yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!Bd,Vd=Bd=null}finally{Il=i,L.p=r,I.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Il;Il|=4;try{rl(e,t.alternate,t)}finally{Il=i,L.p=r,I.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,ve();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),Xe(n),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot==`function`)try{ke.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=I.T,i=L.p,L.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,L.p=i}}cu&3&&Uu(),ad(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,X(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ra(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=Xe(cu),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,Il&6)throw Error(i(331));var c=Il;if(Il|=4,jl(o.current),Cl(o,o.current,s,n),Il=c,X(0,!1),ke&&typeof ke.onPostCommitFiberRoot==`function`)try{ke.onPostCommitFiberRoot(Oe,o)}catch{}return!0}finally{L.p=a,I.T=r,Hu(e,t)}}function Gu(e,t,n){t=fi(n,t),t=Js(e.stateNode,t,2),e=La(e,t,2),e!==null&&(We(e,2),ad(e))}function Ku(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=fi(n,e),n=Ys(2),r=La(t,n,2),r!==null&&(Xs(n,r,t,e),We(r,2),ad(r));break}}t=t.return}}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ju.bind(null,e,t,n),t.then(e,e))}function Ju(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ll===e&&(Rl&n)===n&&(Gl===4||Gl===3&&(Rl&62914560)===Rl&&300>ye()-eu?!(Il&2)&&Cu(e,0):Jl|=n,Xl===Rl&&(Xl=0)),ad(e)}function Yu(e,t){t===0&&(t=He()),e=Zr(e,t),e!==null&&(We(e,t),ad(e))}function Xu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Zu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Yu(e,n)}function Qu(e,t){return he(e,t)}var $u=null,ed=null,td=!1,nd=!1,rd=!1,id=0;function ad(e){e!==ed&&e.next===null&&(ed===null?$u=ed=e:ed=ed.next=e),nd=!0,td||(td=!0,dd())}function X(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=$u;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=Rl,a=ze(r,r===Ll?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Be(r,a)||(n=!0,ud(r,a));r=r.next}while(n);rd=!1}}function od(){sd()}function sd(){nd=td=!1;var e=0;id!==0&&qd()&&(e=id);for(var t=ye(),n=null,r=$u;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?$u=i:n.next=i,i===null&&(ed=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}au!==0&&au!==5||X(e,!1),id!==0&&(id=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ve(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ll,n=Rl,n=ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(zl===2||zl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ge(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Be(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ge(r),Xe(n)){case 2:case 8:n=Se;break;case 32:n=Ce;break;case 268435456:n=Te;break;default:n=Ce}return r=ld.bind(null,e),n=he(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ge(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=Rl;return r=ze(e,e===Ll?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,ye()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Zd(function(){Il&6?he(xe,od):sd()})}function fd(){if(id===0){var e=oa;e===0&&(e=Fe,Fe<<=1,!(Fe&261888)&&(Fe=256)),id=e}return id}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Kt(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[tt]||null).action),o=r.submitter;o&&(t=(t=o[tt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?md(i,o):new FormData(i);bs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),bs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<Hr.length;gd++){var _d=Hr[gd];Ur(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Ur(Pr,`onAnimationEnd`),Ur(Fr,`onAnimationIteration`),Ur(Ir,`onAnimationStart`),Ur(`dblclick`,`onDoubleClick`),Ur(`focusin`,`onFocus`),Ur(`focusout`,`onBlur`),Ur(Lr,`onTransitionRun`),Ur(Rr,`onTransitionStart`),Ur(zr,`onTransitionCancel`),Ur(Br,`onTransitionEnd`),_t(`onMouseEnter`,[`mouseout`,`mouseover`]),_t(`onMouseLeave`,[`mouseout`,`mouseover`]),_t(`onPointerEnter`,[`pointerout`,`pointerover`]),_t(`onPointerLeave`,[`pointerout`,`pointerover`]),gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}}}}function xd(e,t){var n=t[rt];n===void 0&&(n=t[rt]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,mt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=lt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}en(function(){var r=a,i=Yt(n),s=[];a:{var c=Vr.get(e);if(c!==void 0){var l=hn,u=e;switch(e){case`keypress`:if(un(n)===0)break a;case`keydown`:case`keyup`:l=Nn;break;case`focusin`:u=`focus`,l=wn;break;case`focusout`:u=`blur`,l=wn;break;case`beforeblur`:case`afterblur`:l=wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Sn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Cn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Fn;break;case Pr:case Fr:case Ir:l=Tn;break;case Br:l=In;break;case`scroll`:case`scrollend`:l=_n;break;case`wheel`:l=Ln;break;case`copy`:case`cut`:case`paste`:l=En;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Pn;break;case`toggle`:case`beforetoggle`:l=Rn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=tn(m,p),g!=null&&d.push(Z(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(lt(u)||u[nt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?lt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Sn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Pn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:dt(l),h=u==null?c:dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,lt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ir;else if(Qn(c))if(ar)v=mr;else{v=fr;var y=dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Ut(r.elementType)&&(v=ir):v=pr;if(v&&=v(e,r)){$n(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ft(c,`number`,c.value)}switch(y=r?dt(r):window,e){case`focusin`:(Qn(y)||y.contentEditable===`true`)&&(wr=y,Tr=r,Er=null);break;case`focusout`:Er=Tr=wr=null;break;case`mousedown`:Dr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Dr=!1,Or(s,n,i);break;case`selectionchange`:if(Cr)break;case`keydown`:case`keyup`:Or(s,n,i)}var b;if(Bn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Jn?Kn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Un&&n.locale!==`ko`&&(Jn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Jn&&(b=ln()):(on=i,sn=`value`in on?on.value:on.textContent,Jn=!0)),y=Dd(r,x),0<y.length&&(x=new Dn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=qn(n),b!==null&&(x.data=b)))),(b=Hn?Yn(e,n):Xn(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Dn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Z(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=tn(e,n),i!=null&&r.unshift(Z(e,i,a)),i=tn(e,t),i!=null&&r.push(Z(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=tn(n,a),l!=null&&o.unshift(Z(n,l,c))):i||(l=tn(n,a),l!=null&&o.push(Z(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Pd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&zt(e,``+r);break;case`className`:Ct(e,`class`,r);break;case`tabIndex`:Ct(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ct(e,n,r);break;case`style`:Ht(e,r,o);break;case`data`:if(t!==`object`){Ct(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Pd(e,t,`name`,a.name,a,null),Pd(e,t,`formEncType`,a.formEncType,a,null),Pd(e,t,`formMethod`,a.formMethod,a,null),Pd(e,t,`formTarget`,a.formTarget,a,null)):(Pd(e,t,`encType`,a.encType,a,null),Pd(e,t,`method`,a.method,a,null),Pd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Kt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`onScroll`:r!=null&&xd(`scroll`,e);break;case`onScrollEnd`:r!=null&&xd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Kt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:xd(`beforetoggle`,e),xd(`toggle`,e),St(e,`popover`,r);break;case`xlinkActuate`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:St(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Wt.get(n)||n,St(e,n,r))}}function Fd(e,t,n,r,a,o){switch(n){case`style`:Ht(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&zt(e,``+r);break;case`onScroll`:r!=null&&xd(`scroll`,e);break;case`onScrollEnd`:r!=null&&xd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!ht.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[tt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):St(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:xd(`error`,e),xd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Pd(e,t,o,s,n,null)}}a&&Pd(e,t,`srcSet`,n.srcSet,n,null),r&&Pd(e,t,`src`,n.src,n,null);return;case`input`:xd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Pd(e,t,r,d,n,null)}}Pt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in xd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Pd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(s in xd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Pd(e,t,s,c,n,null)}Rt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Pd(e,t,l,r,n,null)}return;case`dialog`:xd(`beforetoggle`,e),xd(`toggle`,e),xd(`cancel`,e),xd(`close`,e);break;case`iframe`:case`object`:xd(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)xd(vd[r],e);break;case`image`:xd(`error`,e),xd(`load`,e);break;case`details`:xd(`toggle`,e);break;case`embed`:case`source`:case`link`:xd(`error`,e),xd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Pd(e,t,u,r,n,null)}return;default:if(Ut(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Fd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Pd(e,t,c,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Pd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Pd(e,t,p,m,r,f)}}Nt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Pd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Pd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Pd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Pd(e,t,s,a,r,o)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Pd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Pd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Pd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Pd(e,t,u,p,r,m)}return;default:if(Ut(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Fd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Pd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Pd(e,t,f,p,r,m)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Rd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Rd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[st]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&hf(e.ownerDocument.body);n=i}while(n);Pp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[st])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ct(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=L.d;L.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=xu();return e||t}function xf(e){var t=ut(e);t!==null&&t.tag===5&&t.type===`form`?Ss(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Id(t,`link`,e),pt(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}gf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Id(t,`link`,e),pt(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!gf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),gf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Id(r,`link`,e),pt(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var i=ft(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);pt(c),Id(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=ft(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=m({src:e,async:!0},t),(t=gf.get(i))&&Bf(e,t),a=n.createElement(`script`),pt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=ft(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=gf.get(i))&&Bf(e,t),a=n.createElement(`script`),pt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Q(e,t,n,r){var a=(a=W.current)?vf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=ft(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=ft(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Mt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),pt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Mt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,pt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),pt(r),Id(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,pt(o),o;r=Nf(n),(a=gf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),pt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,pt(a),a):(r=n,(a=gf.get(o))&&(r=m({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),pt(a),Id(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[st]||a[et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=gf.get(i))&&zf(r,i),a=a.createElement(`link`),pt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Id(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=na(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Pa(a),e}function np(e){return e?(e=ei,e):ei}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ia(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=La(e,r,t),n!==null&&(gu(n,e,t),Ra(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Zr(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=Ye(t);var n=Zr(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,dp(e,t,n,r)}finally{L.p=a,I.T=i}}function up(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,dp(e,t,n,r)}finally{L.p=a,I.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Ed(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=ut(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Re(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-je(o);s.entanglements[1]|=c,o&=~c}ad(a),!(Il&6)&&(nu=ye()+500,X(0,!1))}}break;case 31:case 13:s=Zr(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Ed(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function fp(e){return e=Yt(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=lt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(be()){case xe:return 2;case Se:return 8;case Ce:case we:return 32;case Te:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ut(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=lt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Qe(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=ut(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=ut(n);a!==null&&(e.splice(t,3),t-=3,bs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[tt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[tt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[nt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.4`)throw Error(i(527,Rp,`19.2.4`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Oe=Bp.inject(zp),ke=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Us,s=Ws,c=Gs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[nt]=t.current,wd(e),new Ip(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d()),y=_(),b=l(h());function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var S;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(S||={});var C=`popstate`;function w(e){e===void 0&&(e={});function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return k(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:A(t)}return M(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function D(){return Math.random().toString(36).substr(2,8)}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function k(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?j(t):t,{state:n,key:t&&t.key||r||D()})}function A(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function j(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=S.Pop,c=null,l=u();l??(l=0,o.replaceState(x({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=S.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=S.Push;let r=k(h.location,e,t);n&&n(r,e),l=u()+1;let d=O(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=S.Replace;let r=k(h.location,e,t);n&&n(r,e),l=u();let i=O(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:A(e);return n=n.replace(/ $/,`%20`),T(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var N;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(N||={});function P(e,t,n){return n===void 0&&(n=`/`),F(e,t,n,!1)}function F(e,t,n,r){let i=se((typeof t==`string`?j(t):t).pathname||`/`,n);if(i==null)return null;let a=I(e);R(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=oe(i);o=re(a[e],t,r)}return o}function I(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(T(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=me([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),I(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:W(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of L(e.path))i(e,t,n)}),t}function L(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=L(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function R(e){e.sort((e,t)=>e.score===t.score?ne(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var z=/^:[\w-]+$/,ee=3,B=2,V=1,H=10,te=-2,U=e=>e===`*`;function W(e,t){let n=e.split(`/`),r=n.length;return n.some(U)&&(r+=te),t&&(r+=B),n.filter(e=>!U(e)).reduce((e,t)=>e+(z.test(t)?ee:t===``?V:H),r)}function ne(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function re(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ie({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ie({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:me([a,u.pathname]),pathnameBase:he(me([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=me([a,u.pathnameBase]))}return o}function ie(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ae(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ae(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ce(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?j(e):e;return{pathname:n?n.startsWith(`/`)?n:le(n,t):t,search:ge(r),hash:_e(i)}}function le(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ue(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function de(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function fe(e,t){let n=de(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function pe(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=j(e):(i=x({},e),T(!i.pathname||!i.pathname.includes(`?`),ue(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),ue(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),ue(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var me=e=>e.join(`/`).replace(/\/\/+/g,`/`),he=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),ge=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,_e=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var ye=[`post`,`put`,`patch`,`delete`];new Set(ye);var be=[`get`,...ye];new Set(be);function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}var Se=v.createContext(null),Ce=v.createContext(null),we=v.createContext(null),Te=v.createContext(null),Ee=v.createContext({outlet:null,matches:[],isDataRoute:!1}),De=v.createContext(null);function Oe(e,t){let{relative:n}=t===void 0?{}:t;!ke()&&T(!1);let{basename:r,navigator:i}=v.useContext(we),{hash:a,pathname:o,search:s}=Ie(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:me([r,o])),i.createHref({pathname:c,search:s,hash:a})}function ke(){return v.useContext(Te)!=null}function Ae(){return!ke()&&T(!1),v.useContext(Te).location}function je(e){v.useContext(we).static||v.useLayoutEffect(e)}function Me(){let{isDataRoute:e}=v.useContext(Ee);return e?Ze():Ne()}function Ne(){!ke()&&T(!1);let e=v.useContext(Se),{basename:t,future:n,navigator:r}=v.useContext(we),{matches:i}=v.useContext(Ee),{pathname:a}=Ae(),o=JSON.stringify(fe(i,n.v7_relativeSplatPath)),s=v.useRef(!1);return je(()=>{s.current=!0}),v.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=pe(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:me([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}var Pe=v.createContext(null);function Fe(e){let t=v.useContext(Ee).outlet;return t&&v.createElement(Pe.Provider,{value:e},t)}function Ie(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(we),{matches:i}=v.useContext(Ee),{pathname:a}=Ae(),o=JSON.stringify(fe(i,r.v7_relativeSplatPath));return v.useMemo(()=>pe(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function Le(e,t){return Re(e,t)}function Re(e,t,n,r){!ke()&&T(!1);let{navigator:i}=v.useContext(we),{matches:a}=v.useContext(Ee),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Ae(),u;if(t){let e=typeof t==`string`?j(t):t;!(c===`/`||e.pathname?.startsWith(c))&&T(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=P(e,{pathname:f}),m=Ue(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:me([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:me([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?v.createElement(Te.Provider,{value:{location:xe({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:S.Pop}},m):m}function ze(){let e=Xe(),t=ve(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Be=v.createElement(ze,null),Ve=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:v.createElement(Ee.Provider,{value:this.props.routeContext},v.createElement(De.Provider,{value:this.state.error,children:this.props.component}))}};function He(e){let{routeContext:t,match:n,children:r}=e,i=v.useContext(Se);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Ee.Provider,{value:t},r)}function Ue(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&T(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Be,s&&(c<0&&i===0?($e(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?v.createElement(r.route.Component,null):r.route.element?r.route.element:e,v.createElement(He,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?v.createElement(Ve,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var We=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(We||{}),Ge=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Ge||{});function Ke(e){let t=v.useContext(Se);return!t&&T(!1),t}function qe(e){let t=v.useContext(Ce);return!t&&T(!1),t}function Je(e){let t=v.useContext(Ee);return!t&&T(!1),t}function Ye(e){let t=Je(e),n=t.matches[t.matches.length-1];return!n.route.id&&T(!1),n.route.id}function Xe(){let e=v.useContext(De),t=qe(Ge.UseRouteError),n=Ye(Ge.UseRouteError);return e===void 0?t.errors?.[n]:e}function Ze(){let{router:e}=Ke(We.UseNavigateStable),t=Ye(Ge.UseNavigateStable),n=v.useRef(!1);return je(()=>{n.current=!0}),v.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,xe({fromRouteId:t},i)))},[e,t])}var Qe={};function $e(e,t,n){!t&&!Qe[e]&&(Qe[e]=!0)}v.startTransition;function et(e){let{to:t,replace:n,state:r,relative:i}=e;!ke()&&T(!1);let{future:a,static:o}=v.useContext(we),{matches:s}=v.useContext(Ee),{pathname:c}=Ae(),l=Me(),u=pe(t,fe(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return v.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function tt(e){return Fe(e.context)}function nt(e){T(!1)}function rt(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=S.Pop,navigator:a,static:o=!1,future:s}=e;ke()&&T(!1);let c=t.replace(/^\/*/,`/`),l=v.useMemo(()=>({basename:c,navigator:a,static:o,future:xe({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=j(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=v.useMemo(()=>{let e=se(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:v.createElement(we.Provider,{value:l},v.createElement(Te.Provider,{children:n,value:h}))}function it(e){let{children:t,location:n}=e;return Le(ot(t),n)}var at=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(at||{});new Promise(()=>{}),v.Component;function ot(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,ot(e.props.children,i));return}e.type!==nt&&T(!1),!(!e.props.index||!e.props.children)&&T(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ot(e.props.children,i)),n.push(a)}),n}function st(){return st=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},st.apply(this,arguments)}function ct(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ut(e,t){return e.button===0&&(!t||t===`_self`)&&!lt(e)}var dt=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`unstable_viewTransition`],ft=`6`;try{window.__reactRouterVersion=ft}catch{}var pt=v.startTransition;b.flushSync,v.useId;function mt(e){let{basename:t,children:n,future:r,window:i}=e,a=v.useRef();a.current??=w({window:i,v5Compat:!0});let o=a.current,[s,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=v.useCallback(e=>{l&&pt?pt(()=>c(e)):c(e)},[c,l]);return v.useLayoutEffect(()=>o.listen(u),[o,u]),v.createElement(rt,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var ht=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=v.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,unstable_viewTransition:u}=e,d=ct(e,dt),{basename:f}=v.useContext(we),p,m=!1;if(typeof c==`string`&&gt.test(c)&&(p=c,ht))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=se(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=Oe(c,{relative:r}),g=bt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,unstable_viewTransition:u});function _(e){n&&n(e),e.defaultPrevented||g(e)}return v.createElement(`a`,st({},d,{href:p||h,onClick:m||i?n:_,ref:t,target:s}))}),vt;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(vt||={});var yt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(yt||={});function bt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,c=Me(),l=Ae(),u=Ie(e,{relative:o});return v.useCallback(t=>{ut(t,n)&&(t.preventDefault(),c(e,{replace:r===void 0?A(l)===A(u):r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}))},[l,c,u,r,i,n,e,a,o,s])}var xt=function(){return xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},xt.apply(this,arguments)};function St(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt=`-ms-`,Tt=`-moz-`,Et=`-webkit-`,Dt=`comm`,Ot=`rule`,kt=`decl`,At=`@import`,jt=`@namespace`,Mt=`@keyframes`,Nt=`@layer`,Pt=Math.abs,Ft=String.fromCharCode,It=Object.assign;function Lt(e,t){return Ht(e,0)^45?(((t<<2^Ht(e,0))<<2^Ht(e,1))<<2^Ht(e,2))<<2^Ht(e,3):0}function Rt(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function Bt(e,t,n){return e.replace(t,n)}function Vt(e,t,n){return e.indexOf(t,n)}function Ht(e,t){return e.charCodeAt(t)|0}function Ut(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function Gt(e){return e.length}function Kt(e,t){return t.push(e),e}function qt(e,t){return e.map(t).join(``)}function Jt(e,t){return e.filter(function(e){return!zt(e,t)})}var Yt=1,Xt=1,Zt=0,Qt=0,$t=0,en=``;function tn(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Yt,column:Xt,length:o,return:``,siblings:s}}function nn(e,t){return It(tn(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function rn(e){for(;e.root;)e=nn(e.root,{children:[e]});Kt(e,e.siblings)}function an(){return $t}function on(){return $t=Qt>0?Ht(en,--Qt):0,Xt--,$t===10&&(Xt=1,Yt--),$t}function sn(){return $t=Qt<Zt?Ht(en,Qt++):0,Xt++,$t===10&&(Xt=1,Yt++),$t}function cn(){return Ht(en,Qt)}function ln(){return Qt}function un(e,t){return Ut(en,e,t)}function dn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fn(e){return Yt=Xt=1,Zt=Wt(en=e),Qt=0,[]}function pn(e){return en=``,e}function mn(e){return Rt(un(Qt-1,_n(e===91?e+2:e===40?e+1:e)))}function hn(e){for(;($t=cn())&&$t<33;)sn();return dn(e)>2||dn($t)>3?``:` `}function gn(e,t){for(;--t&&sn()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return un(e,ln()+(t<6&&cn()==32&&sn()==32))}function _n(e){for(;sn();)switch($t){case e:return Qt;case 34:case 39:e!==34&&e!==39&&_n($t);break;case 40:e===41&&_n(e);break;case 92:sn();break}return Qt}function vn(e,t){for(;sn()&&e+$t!==57&&!(e+$t===84&&cn()===47););return`/*`+un(t,Qt-1)+`*`+Ft(e===47?e:sn())}function yn(e){for(;!dn(cn());)sn();return un(e,Qt)}function bn(e){return pn(xn(``,null,null,null,[``],e=fn(e),0,[0],e))}function xn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=sn()){case 40:if(m!=108&&Ht(C,d-1)==58){Vt(C+=Bt(mn(v),`&`,`&\f`),`&\f`,Pt(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=mn(v);break;case 9:case 10:case 13:case 32:C+=hn(m);break;case 92:C+=gn(ln()-1,7);continue;case 47:switch(cn()){case 42:case 47:Kt(Cn(vn(sn(),ln()),t,n,c),c),(dn(m||1)==5||dn(cn()||1)==5)&&Wt(C)&&Ut(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Wt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=Bt(C,/\f/g,``)),p>0&&(Wt(C)-d||h===0&&m===47)&&Kt(p>32?wn(C+`;`,r,n,d-1,c):wn(Bt(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Kt(S=Sn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)xn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Ht(C,3)===110)break;case 108:if(Ht(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?xn(e,S,S,r&&Kt(Sn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):xn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Wt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&on()==125)continue}switch(C+=Ft(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Wt(C)-1)*_,_=1;break;case 64:cn()===45&&(C+=mn(sn())),f=cn(),u=d=Wt(y=C+=yn(ln())),v++;break;case 45:m===45&&Wt(C)==2&&(h=0)}}return a}function Sn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Gt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Ut(e,f+1,f=Pt(g=o[h])),b=e;v<m;++v)(b=Rt(g>0?p[v]+` `+y:Bt(y,/&\f/g,p[v])))&&(c[_++]=b);return tn(e,t,n,i===0?Ot:s,c,l,u,d)}function Cn(e,t,n,r){return tn(e,t,n,Dt,Ft(an()),Ut(e,2,-2),0,r)}function wn(e,t,n,r,i){return tn(e,t,n,kt,Ut(e,0,r),Ut(e,r+1,-1),r,i)}function Tn(e,t,n){switch(Lt(e,t)){case 5103:return Et+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Et+e+e;case 4855:return Et+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Tt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Et+e+Tt+e+wt+e+e;case 5936:switch(Ht(e,t+11)){case 114:return Et+e+wt+Bt(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Et+e+wt+Bt(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Et+e+wt+Bt(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return Et+e+wt+e+e;case 6165:return Et+e+wt+`flex-`+e+e;case 5187:return Et+e+Bt(e,/(\w+).+(:[^]+)/,Et+`box-$1$2`+wt+`flex-$1$2`)+e;case 5443:return Et+e+wt+`flex-item-`+Bt(e,/flex-|-self/g,``)+(zt(e,/flex-|baseline/)?``:wt+`grid-row-`+Bt(e,/flex-|-self/g,``))+e;case 4675:return Et+e+wt+`flex-line-pack`+Bt(e,/align-content|flex-|-self/g,``)+e;case 5548:return Et+e+wt+Bt(e,`shrink`,`negative`)+e;case 5292:return Et+e+wt+Bt(e,`basis`,`preferred-size`)+e;case 6060:return Et+`box-`+Bt(e,`-grow`,``)+Et+e+wt+Bt(e,`grow`,`positive`)+e;case 4554:return Et+Bt(e,/([^-])(transform)/g,`$1`+Et+`$2`)+e;case 6187:return Bt(Bt(Bt(e,/(zoom-|grab)/,Et+`$1`),/(image-set)/,Et+`$1`),e,``)+e;case 5495:case 3959:return Bt(e,/(image-set\([^]*)/,Et+"$1$`$1");case 4968:return Bt(Bt(e,/(.+:)(flex-)?(.*)/,Et+`box-pack:$3`+wt+`flex-pack:$3`),/space-between/,`justify`)+Et+e+e;case 4200:if(!zt(e,/flex-|baseline/))return wt+`grid-column-align`+Ut(e,t)+e;break;case 2592:case 3360:return wt+Bt(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,zt(e.props,/grid-\w+-end/)})?~Vt(e+(n=n[t].value),`span`,0)?e:wt+Bt(e,`-start`,``)+e+wt+`grid-row-span:`+(~Vt(n,`span`,0)?zt(n,/\d+/):zt(n,/\d+/)-+zt(e,/\d+/))+`;`:wt+Bt(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return zt(e.props,/grid-\w+-start/)})?e:wt+Bt(Bt(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return Bt(e,/(.+)-inline(.+)/,Et+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Ht(e,t+1)){case 109:if(Ht(e,t+4)!==45)break;case 102:return Bt(e,/(.+:)(.+)-([^]+)/,`$1`+Et+`$2-$3$1`+Tt+(Ht(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Vt(e,`stretch`,0)?Tn(Bt(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return Bt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return wt+n+`:`+r+s+(i?wt+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Ht(e,t+6)===121)return Bt(e,`:`,`:`+Et)+e;break;case 6444:switch(Ht(e,Ht(e,14)===45?18:11)){case 120:return Bt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+Et+(Ht(e,14)===45?`inline-`:``)+`box$3$1`+Et+`$2$3$1`+wt+`$2box$3`)+e;case 100:return Bt(e,`:`,`:`+wt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Bt(e,`scroll-`,`scroll-snap-`)+e}return e}function En(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Dn(e,t,n,r){switch(e.type){case Nt:if(e.children.length)break;case At:case jt:case kt:return e.return=e.return||e.value;case Dt:return``;case Mt:return e.return=e.value+`{`+En(e.children,r)+`}`;case Ot:if(!Wt(e.value=e.props.join(`,`)))return``}return Wt(n=En(e.children,r))?e.return=e.value+`{`+n+`}`:``}function On(e){var t=Gt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function kn(e){return function(t){t.root||(t=t.return)&&e(t)}}function An(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kt:e.return=Tn(e.value,e.length,n);return;case Mt:return En([nn(e,{value:Bt(e.value,`@`,`@`+Et)})],r);case Ot:if(e.length)return qt(n=e.props,function(t){switch(zt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:rn(nn(e,{props:[Bt(t,/:(read-\w+)/,`:`+Tt+`$1`)]})),rn(nn(e,{props:[t]})),It(e,{props:Jt(n,r)});break;case`::placeholder`:rn(nn(e,{props:[Bt(t,/:(plac\w+)/,`:`+Et+`input-$1`)]})),rn(nn(e,{props:[Bt(t,/:(plac\w+)/,`:`+Tt+`$1`)]})),rn(nn(e,{props:[Bt(t,/:(plac\w+)/,wt+`input-$1`)]})),rn(nn(e,{props:[t]})),It(e,{props:Jt(n,r)});break}return``})}}var jn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Mn=`active`,Nn=`data-styled-version`,Pn=`6.3.12`,Fn=`/*!sc*/
`,In=typeof window<`u`&&typeof document<`u`,Ln=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Rn={};function zn(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Bn=new Map,Vn=new Map,Hn=1,Un=function(e){if(Bn.has(e))return Bn.get(e);for(;Vn.has(Hn);)Hn++;var t=Hn++;return Bn.set(e,t),Vn.set(t,e),t},Wn=function(e,t){Hn=t+1,Bn.set(e,t),Vn.set(t,e)},Gn=Object.freeze([]),Kn=Object.freeze({});function qn(e,t,n){return n===void 0&&(n=Kn),e.theme!==n.theme&&e.theme||t||n.theme}var Jn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`)),Yn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xn=/(^-|-$)/g;function Zn(e){return e.replace(Yn,`-`).replace(Xn,``)}var Qn=/(a)(d)/gi,$n=function(e){return String.fromCharCode(e+(e>25?39:97))};function er(e){var t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=$n(t%52)+n;return($n(t%52)+n).replace(Qn,`$1-$2`)}var tr,nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rr=function(e){return nr(5381,e)};function ir(e){return er(rr(e)>>>0)}function ar(e){return e.displayName||e.name||`Component`}function or(e){return typeof e==`string`&&!0}var sr=typeof Symbol==`function`&&Symbol.for,cr=sr?Symbol.for(`react.memo`):60115,lr=sr?Symbol.for(`react.forward_ref`):60112,ur={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pr=((tr={})[lr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tr[cr]=fr,tr);function mr(e){return(`type`in(t=e)&&t.type.$$typeof)===cr?fr:`$$typeof`in e?pr[e.$$typeof]:ur;var t}var hr=Object.defineProperty,gr=Object.getOwnPropertyNames,_r=Object.getOwnPropertySymbols,vr=Object.getOwnPropertyDescriptor,yr=Object.getPrototypeOf,br=Object.prototype;function xr(e,t,n){if(typeof t!=`string`){if(br){var r=yr(t);r&&r!==br&&xr(e,r,n)}var i=gr(t);_r&&(i=i.concat(_r(t)));for(var a=mr(e),o=mr(t),s=0;s<i.length;++s){var c=i[s];if(!(c in dr||n&&n[c]||o&&c in o||a&&c in a)){var l=vr(t,c);try{hr(e,c,l)}catch{}}}}return e}function Sr(e){return typeof e==`function`}function Cr(e){return typeof e==`object`&&`styledComponentId`in e}function wr(e,t){return e&&t?`${e} ${t}`:e||t||``}function Tr(e,t){return e.join(t||``)}function Er(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Dr(e,t,n){if(n===void 0&&(n=!1),!n&&!Er(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Dr(e[r],t[r]);else if(Er(t))for(var r in t)e[r]=Dr(e[r],t[r]);return e}function Or(e,t){Object.defineProperty(e,`toString`,{value:t})}var kr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw zn(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=(a=0,t.length);a<c;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+Fn;return t},e}(),Ar=`style[${jn}][${Nn}="${Pn}"]`,jr=RegExp(`^${jn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Mr=function(e){return typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11},Nr=function(e){if(!e)return document;if(Mr(e))return e;if(`getRootNode`in e){var t=e.getRootNode();if(Mr(t))return t}return document},Pr=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Fr=function(e,t){for(var n=(t.textContent??``).split(Fn),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(jr);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Wn(l,c),Pr(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Ir=function(e){for(var t=Nr(e.options.target).querySelectorAll(Ar),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(jn)!==Mn&&(Fr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Lr(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Rr=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${jn}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(jn,Mn),r.setAttribute(Nn,Pn);var o=Lr();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},zr=function(){function e(e){this.element=Rr(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=e.getRootNode().styleSheets??document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Br=function(){function e(e){this.element=Rr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Vr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),Hr=In,Ur={isServer:!In,useCSSOMInjection:!Ln},Wr=function(){function e(e,t,n){e===void 0&&(e=Kn),t===void 0&&(t={});var r=this;this.options=xt(xt({},Ur),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&In&&Hr&&(Hr=!1,Ir(this)),Or(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Vn.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i);if(a===void 0||!a.size)return`continue`;var o=t.getGroup(n);if(o.length===0)return`continue`;var s=jn+`.g`+n+`[id="`+i+`"]`,c=``;a.forEach(function(e){e.length>0&&(c+=e+`,`)}),r+=o+s+`{content:"`+c+`"}`+Fn},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Un(e)},e.prototype.rehydrate=function(){!this.server&&In&&Ir(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(xt(xt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&In&&t.target!==this.options.target&&Nr(this.options.target)!==Nr(t.target)&&Ir(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Vr(n):t?new zr(n):new Br(n)}(this.options),new kr(e));var e},e.prototype.hasNameForId=function(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n},e.prototype.registerName=function(e,t){Un(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Un(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Un(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Gr(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Ct||e.startsWith(`--`)?String(t).trim():`${t}px`}var Kr=function(e){return e>=`A`&&e<=`Z`};function qr(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;Kr(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var Jr=Symbol.for(`sc-keyframes`);function Yr(e){return typeof e==`object`&&!!e&&Jr in e}var Xr=function(e){return e==null||!1===e||e===``},Zr=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Xr(r)&&(Array.isArray(r)&&r.isCss||Sr(r)?t.push(`${qr(n)}:`,r,`;`):Er(r)?t.push.apply(t,St(St([`${n} {`],Zr(r),!1),[`}`],!1)):t.push(`${qr(n)}: ${Gr(n,r)};`))}return t};function Qr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e==`string`)return e&&i.push(e),i;if(Xr(e))return i;if(Cr(e))return i.push(`.${e.styledComponentId}`),i;if(Sr(e))return!Sr(a=e)||a.prototype&&a.prototype.isReactComponent||!t?(i.push(e),i):Qr(e(t),t,n,r,i);var a;if(Yr(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Er(e)){for(var o=Zr(e),s=0;s<o.length;s++)i.push(o[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Qr(e[s],t,n,r,i);return i}function $r(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!Cr(n))return!1}return!0}var ei=rr(Pn),ti=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&$r(e),this.componentId=t,this.baseHash=nr(ei,t),this.baseStyle=n,Wr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=wr(r,this.staticRulesId);else{var i=Tr(Qr(this.rules,e,t,n)),a=er(nr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=wr(r,a),this.staticRulesId=a}else{for(var s=nr(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Tr(Qr(u,e,t,n));s=nr(nr(s,String(l)),d),c+=d}}if(c){var f=er(s>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(c,`.${f}`,void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=wr(r,f)}}return{className:r,css:typeof window>`u`?t.getTag().getGroup(Un(this.componentId)):``}},e}(),ni=/&/g,ri=47,ii=42;function ai(e){if(e.indexOf(`}`)===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,a=0;a<t;a++){var o=e.charCodeAt(a);if(r!==0||i||o!==ri||e.charCodeAt(a+1)!==ii)if(i)o===ii&&e.charCodeAt(a+1)===ri&&(i=!1,a++);else if(o!==34&&o!==39||a!==0&&e.charCodeAt(a-1)===92){if(r===0){if(o===123)n++;else if(o===125&&--n<0)return!0}}else r===0?r=o:r===o&&(r=0);else i=!0,a++}return n!==0||r!==0}function oi(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=oi(e.children,t)),e})}function si(e){var t,n,r,i=e===void 0?Kn:e,a=i.options,o=a===void 0?Kn:a,s=i.plugins,c=s===void 0?Gn:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(r||=RegExp(`\\${n}\\b`,`g`),e.props[0]=e.props[0].replace(ni,n).replace(r,l))}),o.prefix&&u.push(An),u.push(Dn);var d=[],f=On(u.concat(kn(function(e){return d.push(e)}))),p=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=void 0;var c=function(e){if(!ai(e))return e;for(var t=e.length,n=``,r=0,i=0,a=0,o=!1,s=0;s<t;s++){var c=e.charCodeAt(s);if(a!==0||o||c!==ri||e.charCodeAt(s+1)!==ii)if(o)c===ii&&e.charCodeAt(s+1)===ri&&(o=!1,s++);else if(c!==34&&c!==39||s!==0&&e.charCodeAt(s-1)===92){if(a===0)if(c===123)i++;else if(c===125){if(--i<0){for(var l=s+1;l<t;){var u=e.charCodeAt(l);if(u===59||u===10)break;l++}l<t&&e.charCodeAt(l)===59&&l++,i=0,s=l-1,r=l;continue}i===0&&(n+=e.substring(r,s+1),r=s+1)}else c===59&&i===0&&(n+=e.substring(r,s+1),r=s+1)}else a===0?a=c:a===c&&(a=0);else o=!0,s++}if(r<t){var d=e.substring(r);ai(d)||(n+=d)}return n}(function(e){if(e.indexOf(`//`)===-1)return e;for(var t=e.length,n=[],r=0,i=0,a=0,o=0;i<t;){var s=e.charCodeAt(i);if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92)if(a===0)if(s===ri&&i+1<t&&e.charCodeAt(i+1)===ii){for(i+=2;i+1<t&&(e.charCodeAt(i)!==ii||e.charCodeAt(i+1)!==ri);)i++;i+=2}else if(s===40&&i>=3&&(32|e.charCodeAt(i-1))==108&&(32|e.charCodeAt(i-2))==114&&(32|e.charCodeAt(i-3))==117)o=1,i++;else if(o>0)s===41?o--:s===40&&o++,i++;else if(s===ii&&i+1<t&&e.charCodeAt(i+1)===ri)i>r&&n.push(e.substring(r,i)),r=i+=2;else if(s===ri&&i+1<t&&e.charCodeAt(i+1)===ri){for(i>r&&n.push(e.substring(r,i));i<t&&e.charCodeAt(i)!==10;)i++;r=i}else i++;else i++;else a===0?a=s:a===s&&(a=0),i++}return r===0?e:(r<t&&n.push(e.substring(r)),n.join(``))}(e)),l=bn(a||i?`${a} ${i} { ${c} }`:c);return o.namespace&&(l=oi(l,o.namespace)),d=[],En(l,f),d};return p.hash=c.length?c.reduce(function(e,t){return t.name||zn(15),nr(e,t.name)},5381).toString():``,p}var ci=new Wr,li=si(),ui=v.createContext({shouldForwardProp:void 0,styleSheet:ci,stylis:li});ui.Consumer;var di=v.createContext(void 0);function fi(){return v.useContext(ui)}function pi(e){if(!v.useMemo)return e.children;var t=fi().styleSheet,n=v.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=v.useMemo(function(){return si({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=v.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return v.createElement(ui.Provider,{value:i},v.createElement(di.Provider,{value:r},e.children))}var mi=v.createContext(void 0);mi.Consumer;function hi(e){var t=v.useContext(mi),n=v.useMemo(function(){return function(e,t){if(!e)throw zn(14);if(Sr(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw zn(8);return t?xt(xt({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?v.createElement(mi.Provider,{value:n},e.children):null}var gi={};function _i(e,t,n){var r=Cr(e),i=e,a=!or(e),o=t.attrs,s=o===void 0?Gn:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?Zn(e):`sc`;gi[n]=(gi[n]||0)+1;var r=`${n}-${ir(Pn+n+gi[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return or(e)?`styled.${e}`:`Styled(${ar(e)})`}(e):u,f=t.displayName&&t.componentId?`${Zn(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var _=new ti(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=v.useContext(mi),u=fi(),d=e.shouldForwardProp||u.shouldForwardProp,f=qn(t,l,a)||Kn,p=function(e,t,n){for(var r,i=xt(xt({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Sr(r=e[a])?r(i):r;for(var s in o)s===`className`?i.className=wr(i.className,o[s]):s===`style`?i.style=xt(xt({},i.style),o[s]):s in t&&t[s]===void 0||(i[s]=o[s])}return`className`in t&&typeof t.className==`string`&&(i.className=wr(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var _=function(e,t){var n=fi();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p).className,y=wr(o,s);return _&&(y+=` `+_),p.className&&(y+=` `+p.className),h[or(m)&&!Jn.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,v.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=v.forwardRef(y);return b.attrs=p,b.componentStyle=_,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?wr(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Dr(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Or(b,function(){return`.${b.styledComponentId}`}),a&&xr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function vi(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var yi=function(e){return Object.assign(e,{isCss:!0})};function bi(e){var t=[...arguments].slice(1);if(Sr(e)||Er(e))return yi(Qr(vi(Gn,St([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Qr(n):yi(Qr(vi(n,t)))}function xi(e,t,n){if(n===void 0&&(n=Kn),!t)throw zn(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,bi.apply(void 0,St([r],i,!1)))};return r.attrs=function(r){return xi(e,t,xt(xt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return xi(e,t,xt(xt({},n),r))},r}var Si=function(e){return xi(_i,e)},G=Si;Jn.forEach(function(e){G[e]=Si(e)});var Ci,wi=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$r(e),Wr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Tr(Qr(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Wr.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function Ti(e){var t=[...arguments].slice(1),n=bi.apply(void 0,St([e],t,!1)),r=`sc-global-${ir(JSON.stringify(n))}`,i=new wi(n,r),a=new WeakMap,o=function(e){var t=fi(),n=v.useContext(mi),s=a.get(t.styleSheet);return s===void 0&&(s=t.styleSheet.allocateGSInstance(r),a.set(t.styleSheet,s)),v.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Rn,n,a);else{var s=xt(xt({},t),{theme:qn(t,r,o.defaultProps)});i.renderStyles(e,s,n,a)}}(s,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(s,t.styleSheet)}},[s,e,t.styleSheet,n,t.stylis]),null};return v.memo(o)}var Ei=function(){function e(e,t){var n=this;this[Ci]=!0,this.inject=function(e,t){t===void 0&&(t=li);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Or(this,function(){throw zn(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=li),this.name+e.hash},e}();function Di(e){var t=[...arguments].slice(1),n=Tr(bi.apply(void 0,St([e],t,!1)));return new Ei(ir(n),n)}Ci=Jr,function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Lr();return`<style ${Tr([n&&`nonce="${n}"`,`${jn}="true"`,`${Nn}="${Pn}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw zn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw zn(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[jn]=``,t[Nn]=Pn,t.dangerouslySetInnerHTML={__html:n},t),i=Lr();return i&&(r.nonce=i),[v.createElement(`style`,xt({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Wr({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw zn(2);return v.createElement(pi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw zn(3)},e}(),`${jn}`;var Oi=Ti`
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
`;function ki(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ki(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Ai(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ki(e))&&(r&&(r+=` `),r+=t);return r}function ji(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}ji(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Mi=e=>typeof e==`number`&&!isNaN(e),Ni=e=>typeof e==`string`,Pi=e=>typeof e==`function`,Fi=e=>Ni(e)||Mi(e),Ii=e=>Ni(e)||Pi(e)?e:null,Li=(e,t)=>e===!1||Mi(e)&&e>0?e:t,Ri=e=>(0,v.isValidElement)(e)||Ni(e)||Pi(e)||Mi(e);function zi(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function Bi({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,v.useRef)(0);return(0,v.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,v.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?zi(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),v.createElement(v.Fragment,null,a)}}function Vi(e,t){return{content:Hi(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Hi(e,t,n=!1){return(0,v.isValidElement)(e)&&!Ni(e.type)?(0,v.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Pi(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function Ui({closeToast:e,theme:t,ariaLabel:n=`close`}){return v.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},v.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},v.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function Wi({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:i,className:a,controlledProgress:o,progress:s,rtl:c,isIn:l,theme:u}){let d=i||o&&s===0,f={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};o&&(f.transform=`scaleX(${s})`);let p=Ai(`Toastify__progress-bar`,o?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),m=Pi(a)?a({rtl:c,type:r,defaultClassName:p}):Ai(p,a),h={[o&&s>=1?`onTransitionEnd`:`onAnimationEnd`]:o&&s<1?null:()=>{l&&n()}};return v.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":d},v.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${r}`}),v.createElement(`div`,{role:`progressbar`,"aria-hidden":d?`true`:`false`,"aria-label":`notification timer`,className:m,style:f,...h}))}var Gi=1,Ki=()=>`${Gi++}`;function qi(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,n;(n=(t=e.props)?.onClose)==null||n.call(t,e.removalReason),e.isActive=!1},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(Vi(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:o,updateId:l,data:u,staleId:p,delay:m}=t,g=l==null;g&&i++;let v={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:o,updateId:l,data:u,isIn:!1,className:Ii(t.className||s.toastClassName),progressClassName:Ii(t.progressClassName||s.progressClassName),autoClose:t.isLoading?!1:Li(t.autoClose,s.autoClose),closeToast(e){c.get(o).removalReason=e,h(o)},deleteToast(){let e=c.get(o);if(e!=null){if(n(Vi(e,`removed`)),c.delete(o),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};v.closeButton=s.closeButton,t.closeButton===!1||Ri(t.closeButton)?v.closeButton=t.closeButton:t.closeButton===!0&&(v.closeButton=Ri(s.closeButton)?s.closeButton:!0);let y={content:e,props:v,staleId:p};s.limit&&s.limit>0&&i>s.limit&&g?a.push(y):Mi(m)?setTimeout(()=>{_(y)},m):_(y)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var Ji=new Map,Yi=[],Xi=new Set,Zi=e=>Xi.forEach(t=>t(e)),Qi=()=>Ji.size>0;function $i(){Yi.forEach(e=>ia(e.content,e.options)),Yi=[]}var ea=(e,{containerId:t})=>Ji.get(t||1)?.toasts.get(e);function ta(e,t){var n;if(t)return!!((n=Ji.get(t))!=null&&n.isToastActive(e));let r=!1;return Ji.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function na(e){if(!Qi()){Yi=Yi.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Fi(e))Ji.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=Ji.get(e.containerId);t?t.removeToast(e.id):Ji.forEach(t=>{t.removeToast(e.id)})}}var ra=(e={})=>{Ji.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ia(e,t){Ri(e)&&(Qi()||Yi.push({content:e,options:t}),Ji.forEach(n=>{n.buildToast(e,t)}))}function aa(e){var t;(t=Ji.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function oa(e,t){Ji.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function sa(e){let t=e.containerId||1;return{subscribe(n){let r=qi(t,e,Zi);Ji.set(t,r);let i=r.observe(n);return $i(),()=>{i(),Ji.delete(t)}},setProps(e){var n;(n=Ji.get(t))==null||n.setProps(e)},getSnapshot(){return Ji.get(t)?.getSnapshot()}}}function ca(e){return Xi.add(e),()=>{Xi.delete(e)}}function la(e){return e&&(Ni(e.toastId)||Mi(e.toastId))?e.toastId:Ki()}function ua(e,t){return ia(e,t),t.toastId}function da(e,t){return{...t,type:t&&t.type||e,toastId:la(t)}}function fa(e){return(t,n)=>ua(t,da(e,n))}function K(e,t){return ua(e,da(`default`,t))}K.loading=(e,t)=>ua(e,da(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function pa(e,{pending:t,error:n,success:r},i){let a;t&&(a=Ni(t)?K.loading(t,i):K.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){K.dismiss(a);return}let r={type:e,...o,...i,data:n},s=Ni(t)?{render:t}:t;return a?K.update(a,{...r,...s}):K(s.render,{...r,...s}),n},c=Pi(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}K.promise=pa,K.success=fa(`success`),K.info=fa(`info`),K.error=fa(`error`),K.warning=fa(`warning`),K.warn=K.warning,K.dark=(e,t)=>ua(e,da(`default`,{theme:`dark`,...t}));function ma(e){na(e)}K.dismiss=ma,K.clearWaitingQueue=ra,K.isActive=ta,K.update=(e,t={})=>{let n=ea(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ki()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,ua(o,a)}},K.done=e=>{K.update(e,{progress:1})},K.onChange=ca,K.play=e=>oa(!0,e),K.pause=e=>oa(!1,e);function ha(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,v.useRef)(sa(e)).current;r(e);let i=(0,v.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:ta,count:i?.length}}function ga(e){let[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(!1),a=(0,v.useRef)(null),o=(0,v.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;aa({id:e.toastId,containerId:e.containerId,fn:n}),(0,v.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||_(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,_)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,_)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.nativeEvent.type!==`touchend`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?_():g()}function g(){n(!0)}function _(){n(!1)}function y(){o.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&_(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function S(){b();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=_,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var _a=typeof window<`u`?v.useLayoutEffect:v.useEffect,va=({theme:e,type:t,isLoading:n,...r})=>v.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function ya(e){return v.createElement(va,{...e},v.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function ba(e){return v.createElement(va,{...e},v.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function xa(e){return v.createElement(va,{...e},v.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function Sa(e){return v.createElement(va,{...e},v.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function Ca(){return v.createElement(`div`,{className:`Toastify__spinner`})}var wa={info:ba,warning:ya,success:xa,error:Sa,spinner:Ca},Ta=e=>e in wa;function Ea({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(Pi(r)?i=r({...a,isLoading:n}):(0,v.isValidElement)(r)?i=(0,v.cloneElement)(r,a):n?i=wa.spinner():Ta(t)&&(i=wa[t](a))),i}var Da=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:a}=ga(e),{closeButton:o,children:s,autoClose:c,onClick:l,type:u,hideProgressBar:d,closeToast:f,transition:p,position:m,className:h,style:g,progressClassName:_,updateId:y,role:b,progress:x,rtl:S,toastId:C,deleteToast:w,isIn:T,isLoading:E,closeOnClick:D,theme:O,ariaLabel:k}=e,A=Ai(`Toastify__toast`,`Toastify__toast-theme--${O}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":D}),j=Pi(h)?h({rtl:S,position:m,type:u,defaultClassName:A}):Ai(A,h),M=Ea(e),N=!!x||!c,P={closeToast:f,type:u,theme:O},F=null;return o===!1||(F=Pi(o)?o(P):(0,v.isValidElement)(o)?(0,v.cloneElement)(o,P):Ui(P)),v.createElement(p,{isIn:T,done:w,position:m,preventExitTransition:n,nodeRef:r,playToast:a},v.createElement(`div`,{id:C,tabIndex:0,onClick:l,"data-in":T,className:j,...i,style:g,ref:r,...T&&{role:b,"aria-label":k}},M!=null&&v.createElement(`div`,{className:Ai(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!E})},M),Hi(s,e,!t),F,!e.customProgressBar&&v.createElement(Wi,{...y&&!N?{key:`p-${y}`}:{},rtl:S,theme:O,delay:c,isRunning:t,isIn:T,closeToast:f,hide:d,type:u,className:_,controlledProgress:N,progress:x||0})))},Oa=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),ka=Bi(Oa(`bounce`,!0));Bi(Oa(`slide`,!0)),Bi(Oa(`zoom`)),Bi(Oa(`flip`));var Aa={position:`top-right`,transition:ka,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function ja(e){let t={...Aa,...e},n=e.stacked,[r,i]=(0,v.useState)(!0),a=(0,v.useRef)(null),{getToastToRender:o,isToastActive:s,count:c}=ha(t),{className:l,style:u,rtl:d,containerId:f,hotKeys:p}=t;function m(e){let t=Ai(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return Pi(l)?l({position:e,rtl:d,defaultClassName:t}):Ai(t,Ii(l))}function h(){n&&(i(!0),K.play())}return _a(()=>{if(n){let e=a.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,o=0;Array.from(e).reverse().forEach((e,t)=>{let a=e;a.classList.add(`Toastify__toast--stacked`),t>0&&(a.dataset.collapsed=`${r}`),a.dataset.pos||(a.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t);a.style.setProperty(`--y`,`${n?s:s*-1}px`),a.style.setProperty(`--g`,`12`),a.style.setProperty(`--s`,`${1-(r?o:0)}`),i+=a.offsetHeight,o+=.025})}},[r,c,n]),(0,v.useEffect)(()=>{function e(e){var t;let n=a.current;p(e)&&((t=n.querySelector(`[tabIndex="0"]`))==null||t.focus(),i(!1),K.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(i(!0),K.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p]),v.createElement(`section`,{ref:a,className:`Toastify`,id:f,onMouseEnter:()=>{n&&(i(!1),K.pause())},onMouseLeave:h,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},o((e,t)=>{let r=t.length?{...u}:{...u,pointerEvents:`none`};return v.createElement(`div`,{tabIndex:-1,className:m(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>v.createElement(Da,{...t,stacked:n,collapseAll:h,isIn:s(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}function Ma(e,t){return function(){return e.apply(t,arguments)}}var{toString:Na}=Object.prototype,{getPrototypeOf:Pa}=Object,Fa=(e=>t=>{let n=Na.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ia=e=>(e=e.toLowerCase(),t=>Fa(t)===e),La=e=>t=>typeof t===e,{isArray:Ra}=Array,za=La(`undefined`);function Ba(e){return e!==null&&!za(e)&&e.constructor!==null&&!za(e.constructor)&&Wa(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Va=Ia(`ArrayBuffer`);function Ha(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Va(e.buffer),t}var Ua=La(`string`),Wa=La(`function`),Ga=La(`number`),Ka=e=>typeof e==`object`&&!!e,qa=e=>e===!0||e===!1,Ja=e=>{if(Fa(e)!==`object`)return!1;let t=Pa(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ya=Ia(`Date`),Xa=Ia(`File`),Za=Ia(`Blob`),Qa=Ia(`FileList`),$a=e=>Ka(e)&&Wa(e.pipe),eo=e=>{let t;return e&&(typeof FormData==`function`&&e instanceof FormData||Wa(e.append)&&((t=Fa(e))===`formdata`||t===`object`&&Wa(e.toString)&&e.toString()===`[object FormData]`))},to=Ia(`URLSearchParams`),[no,ro,io,ao]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Ia),oo=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function so(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Ra(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function co(e,t){t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var lo=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,uo=e=>!za(e)&&e!==lo;function fo(){let{caseless:e}=uo(this)&&this||{},t={},n=(n,r)=>{let i=e&&co(t,r)||r;Ja(t[i])&&Ja(n)?t[i]=fo(t[i],n):Ja(n)?t[i]=fo({},n):Ra(n)?t[i]=n.slice():t[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&so(arguments[e],n);return t}var po=(e,t,n,{allOwnKeys:r}={})=>(so(t,(t,r)=>{n&&Wa(t)?e[r]=Ma(t,n):e[r]=t},{allOwnKeys:r}),e),mo=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ho=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},go=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Pa(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_o=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},vo=e=>{if(!e)return null;if(Ra(e))return e;let t=e.length;if(!Ga(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},yo=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Pa(Uint8Array)),bo=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},xo=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},So=Ia(`HTMLFormElement`),Co=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),wo=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),To=Ia(`RegExp`),Eo=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};so(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Do=e=>{Eo(e,(t,n)=>{if(Wa(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(Wa(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Oo=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Ra(e)?r(e):r(String(e).split(t)),n},ko=()=>{},Ao=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,jo=`abcdefghijklmnopqrstuvwxyz`,Mo=`0123456789`,No={DIGIT:Mo,ALPHA:jo,ALPHA_DIGIT:jo+jo.toUpperCase()+Mo},Po=(e=16,t=No.ALPHA_DIGIT)=>{let n=``,{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Fo(e){return!!(e&&Wa(e.append)&&e[Symbol.toStringTag]===`FormData`&&e[Symbol.iterator])}var Io=e=>{let t=Array(10),n=(e,r)=>{if(Ka(e)){if(t.indexOf(e)>=0)return;if(!(`toJSON`in e)){t[r]=e;let i=Ra(e)?[]:{};return so(e,(e,t)=>{let a=n(e,r+1);!za(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Lo=Ia(`AsyncFunction`),Ro=e=>e&&(Ka(e)||Wa(e))&&Wa(e.then)&&Wa(e.catch),zo=((e,t)=>e?setImmediate:t?((e,t)=>(lo.addEventListener(`message`,({source:n,data:r})=>{n===lo&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),lo.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Wa(lo.postMessage)),q={isArray:Ra,isArrayBuffer:Va,isBuffer:Ba,isFormData:eo,isArrayBufferView:Ha,isString:Ua,isNumber:Ga,isBoolean:qa,isObject:Ka,isPlainObject:Ja,isReadableStream:no,isRequest:ro,isResponse:io,isHeaders:ao,isUndefined:za,isDate:Ya,isFile:Xa,isBlob:Za,isRegExp:To,isFunction:Wa,isStream:$a,isURLSearchParams:to,isTypedArray:yo,isFileList:Qa,forEach:so,merge:fo,extend:po,trim:oo,stripBOM:mo,inherits:ho,toFlatObject:go,kindOf:Fa,kindOfTest:Ia,endsWith:_o,toArray:vo,forEachEntry:bo,matchAll:xo,isHTMLForm:So,hasOwnProperty:wo,hasOwnProp:wo,reduceDescriptors:Eo,freezeMethods:Do,toObjectSet:Oo,toCamelCase:Co,noop:ko,toFiniteNumber:Ao,findKey:co,global:lo,isContextDefined:uo,ALPHABET:No,generateString:Po,isSpecCompliantForm:Fo,toJSONObject:Io,isAsyncFn:Lo,isThenable:Ro,setImmediate:zo,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(lo):typeof process<`u`&&process.nextTick||zo};function Bo(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name=`AxiosError`,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}q.inherits(Bo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});var Vo=Bo.prototype,Ho={};[`ERR_BAD_OPTION_VALUE`,`ERR_BAD_OPTION`,`ECONNABORTED`,`ETIMEDOUT`,`ERR_NETWORK`,`ERR_FR_TOO_MANY_REDIRECTS`,`ERR_DEPRECATED`,`ERR_BAD_RESPONSE`,`ERR_BAD_REQUEST`,`ERR_CANCELED`,`ERR_NOT_SUPPORT`,`ERR_INVALID_URL`].forEach(e=>{Ho[e]={value:e}}),Object.defineProperties(Bo,Ho),Object.defineProperty(Vo,`isAxiosError`,{value:!0}),Bo.from=(e,t,n,r,i,a)=>{let o=Object.create(Vo);return q.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>e!==`isAxiosError`),Bo.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};function Uo(e){return q.isPlainObject(e)||q.isArray(e)}function Wo(e){return q.endsWith(e,`[]`)?e.slice(0,-2):e}function Go(e,t,n){return e?e.concat(t).map(function(e,t){return e=Wo(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Ko(e){return q.isArray(e)&&!e.some(Uo)}var qo=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Jo(e,t,n){if(!q.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!q.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(q.isDate(e))return e.toISOString();if(!s&&q.isBlob(e))throw new Bo(`Blob is not supported. Use a Buffer instead.`);return q.isArrayBuffer(e)||q.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(e&&!i&&typeof e==`object`){if(q.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&Ko(e)||(q.isFileList(e)||q.endsWith(n,`[]`))&&(s=q.toArray(e)))return n=Wo(n),s.forEach(function(e,r){!(q.isUndefined(e)||e===null)&&t.append(o===!0?Go([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return Uo(e)?!0:(t.append(Go(i,n,a),c(e)),!1)}let u=[],d=Object.assign(qo,{defaultVisitor:l,convertValue:c,isVisitable:Uo});function f(e,n){if(!q.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),q.forEach(e,function(e,r){(!(q.isUndefined(e)||e===null)&&i.call(t,e,q.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!q.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function Yo(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Xo(e,t){this._pairs=[],e&&Jo(e,this,t)}var Zo=Xo.prototype;Zo.append=function(e,t){this._pairs.push([e,t])},Zo.toString=function(e){let t=e?function(t){return e.call(this,t,Yo)}:Yo;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Qo(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`).replace(/%5B/gi,`[`).replace(/%5D/gi,`]`)}function $o(e,t,n){if(!t)return e;let r=n&&n.encode||Qo,i=n&&n.serialize,a;if(a=i?i(t,n):q.isURLSearchParams(t)?t.toString():new Xo(t,n).toString(r),a){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+a}return e}var es=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){q.forEach(this.handlers,function(t){t!==null&&e(t)})}},ts={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ns={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Xo,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},rs=s({hasBrowserEnv:()=>is,hasStandardBrowserEnv:()=>os,hasStandardBrowserWebWorkerEnv:()=>ss,navigator:()=>as,origin:()=>cs}),is=typeof window<`u`&&typeof document<`u`,as=typeof navigator==`object`&&navigator||void 0,os=is&&(!as||[`ReactNative`,`NativeScript`,`NS`].indexOf(as.product)<0),ss=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,cs=is&&window.location.href||`http://localhost`,ls={...rs,...ns};function us(e,t){return Jo(e,new ls.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ls.isNode&&q.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)}},t))}function ds(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function fs(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function ps(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&q.isArray(r)?r.length:a,s?(q.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&q.isArray(r[a])&&(r[a]=fs(r[a])),!o)}if(q.isFormData(e)&&q.isFunction(e.entries)){let n={};return q.forEachEntry(e,(e,r)=>{t(ds(e),r,n,0)}),n}return null}function ms(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var hs={transitional:ts,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=q.isObject(e);if(i&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(ps(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return us(e,this.formSerializer).toString();if((a=q.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return Jo(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),ms(e)):e}],transformResponse:[function(e){let t=this.transitional||hs.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n)throw e.name===`SyntaxError`?Bo.from(e,Bo.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:ls.classes.FormData,Blob:ls.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{hs.headers[e]={}});var gs=q.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),_s=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&gs[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},vs=Symbol(`internals`);function ys(e){return e&&String(e).trim().toLowerCase()}function bs(e){return e===!1||e==null?e:q.isArray(e)?e.map(bs):String(e)}function xs(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Ss=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cs(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function ws(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ts(e,t){let n=q.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Es=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=ys(t);if(!i)throw Error(`header name must be a non-empty string`);let a=q.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=bs(e))}let a=(e,t)=>q.forEach(e,(e,n)=>i(e,n,t));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(q.isString(e)&&(e=e.trim())&&!Ss(e))a(_s(e),t);else if(q.isHeaders(e))for(let[t,r]of e.entries())i(r,t,n);else e!=null&&i(t,e,n);return this}get(e,t){if(e=ys(e),e){let n=q.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return xs(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=ys(e),e){let n=q.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Cs(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=ys(e),e){let i=q.findKey(n,e);i&&(!t||Cs(n,n[i],i,t))&&(delete n[i],r=!0)}}return q.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Cs(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return q.forEach(this,(r,i)=>{let a=q.findKey(n,i);if(a){t[a]=bs(r),delete t[i];return}let o=e?ws(i):String(i).trim();o!==i&&delete t[i],t[o]=bs(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return q.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&q.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[vs]=this[vs]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=ys(e);t[r]||(Ts(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};Es.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),q.reduceDescriptors(Es.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),q.freezeMethods(Es);function Ds(e,t){let n=this||hs,r=t||n,i=Es.from(r.headers),a=r.data;return q.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Os(e){return!!(e&&e.__CANCEL__)}function ks(e,t,n){Bo.call(this,e??`canceled`,Bo.ERR_CANCELED,t,n),this.name=`CanceledError`}q.inherits(ks,Bo,{__CANCEL__:!0});function As(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Bo(`Request failed with status code `+n.status,[Bo.ERR_BAD_REQUEST,Bo.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function js(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function Ms(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Ns(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e.apply(null,t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Ps=(e,t,n=3)=>{let r=0,i=Ms(50,250);return Ns(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Fs=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Is=e=>(...t)=>q.asap(()=>e(...t)),Ls=ls.hasStandardBrowserEnv?(function(){let e=ls.navigator&&/(msie|trident)/i.test(ls.navigator.userAgent),t=document.createElement(`a`),n;function r(n){let r=n;return e&&(t.setAttribute(`href`,r),r=t.href),t.setAttribute(`href`,r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,``):``,host:t.host,search:t.search?t.search.replace(/^\?/,``):``,hash:t.hash?t.hash.replace(/^#/,``):``,hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)===`/`?t.pathname:`/`+t.pathname}}return n=r(window.location.href),function(e){let t=q.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}})():(function(){return function(){return!0}})(),Rs=ls.hasStandardBrowserEnv?{write(e,t,n,r,i,a){let o=[e+`=`+encodeURIComponent(t)];q.isNumber(n)&&o.push(`expires=`+new Date(n).toGMTString()),q.isString(r)&&o.push(`path=`+r),q.isString(i)&&o.push(`domain=`+i),a===!0&&o.push(`secure`),document.cookie=o.join(`; `)},read(e){let t=document.cookie.match(RegExp(`(^|;\\s*)(`+e+`)=([^;]*)`));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,``,Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bs(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Vs(e,t){return e&&!zs(t)?Bs(e,t):t}var Hs=e=>e instanceof Es?{...e}:e;function Us(e,t){t||={};let n={};function r(e,t,n){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:n},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function i(e,t,n){if(!q.isUndefined(t))return r(e,t,n);if(!q.isUndefined(e))return r(void 0,e,n)}function a(e,t){if(!q.isUndefined(t))return r(void 0,t)}function o(e,t){if(!q.isUndefined(t))return r(void 0,t);if(!q.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t)=>i(Hs(e),Hs(t),!0)};return q.forEach(Object.keys(Object.assign({},e,t)),function(r){let a=c[r]||i,o=a(e[r],t[r],r);q.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Ws=e=>{let t=Us({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;t.headers=o=Es.from(o),t.url=$o(Vs(t.baseURL,t.url),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``)));let c;if(q.isFormData(n)){if(ls.hasStandardBrowserEnv||ls.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){let[e,...t]=c?c.split(`;`).map(e=>e.trim()).filter(Boolean):[];o.setContentType([e||`multipart/form-data`,...t].join(`; `))}}if(ls.hasStandardBrowserEnv&&(r&&q.isFunction(r)&&(r=r(t)),r||r!==!1&&Ls(t.url))){let e=i&&a&&Rs.read(a);e&&o.set(i,e)}return t},Gs=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Ws(e),i=r.data,a=Es.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Es.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());As(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new Bo(`Request aborted`,Bo.ECONNABORTED,e,h)),null)},h.onerror=function(){n(new Bo(`Network Error`,Bo.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||ts;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Bo(t,i.clarifyTimeoutError?Bo.ETIMEDOUT:Bo.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&q.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),q.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Ps(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Ps(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new ks(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=js(r.url);if(_&&ls.protocols.indexOf(_)===-1){n(new Bo(`Unsupported protocol `+_+`:`,Bo.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Ks=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof Bo?t:new ks(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new Bo(`timeout ${t} of ms exceeded`,Bo.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>q.asap(o),s}},qs=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Js=async function*(e,t){for await(let n of Ys(e))yield*qs(n,t)},Ys=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Xs=(e,t,n,r)=>{let i=Js(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Zs=typeof fetch==`function`&&typeof Request==`function`&&typeof Response==`function`,Qs=Zs&&typeof ReadableStream==`function`,$s=Zs&&(typeof TextEncoder==`function`?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ec=(e,...t)=>{try{return!!e(...t)}catch{return!1}},tc=Qs&&ec(()=>{let e=!1,t=new Request(ls.origin,{body:new ReadableStream,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return e&&!t}),nc=64*1024,rc=Qs&&ec(()=>q.isReadableStream(new Response(``).body)),ic={stream:rc&&(e=>e.body)};Zs&&(e=>{[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(t=>{!ic[t]&&(ic[t]=q.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new Bo(`Response type '${t}' is not supported`,Bo.ERR_NOT_SUPPORT,n)})})})(new Response);var ac=async e=>{if(e==null)return 0;if(q.isBlob(e))return e.size;if(q.isSpecCompliantForm(e))return(await new Request(ls.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(q.isArrayBufferView(e)||q.isArrayBuffer(e))return e.byteLength;if(q.isURLSearchParams(e)&&(e+=``),q.isString(e))return(await $s(e)).byteLength},oc=async(e,t)=>q.toFiniteNumber(e.getContentLength())??ac(t),sc={http:null,xhr:Gs,fetch:Zs&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:c,responseType:l,headers:u,withCredentials:d=`same-origin`,fetchOptions:f}=Ws(e);l=l?(l+``).toLowerCase():`text`;let p=Ks([i,a&&a.toAbortSignal()],o),m,h=p&&p.unsubscribe&&(()=>{p.unsubscribe()}),g;try{if(c&&tc&&n!==`get`&&n!==`head`&&(g=await oc(u,r))!==0){let e=new Request(t,{method:`POST`,body:r,duplex:`half`}),n;if(q.isFormData(r)&&(n=e.headers.get(`content-type`))&&u.setContentType(n),e.body){let[t,n]=Fs(g,Ps(Is(c)));r=Xs(e.body,nc,t,n)}}q.isString(d)||(d=d?`include`:`omit`);let i=`credentials`in Request.prototype;m=new Request(t,{...f,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:`half`,credentials:i?d:void 0});let a=await fetch(m),o=rc&&(l===`stream`||l===`response`);if(rc&&(s||o&&h)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=a[t]});let t=q.toFiniteNumber(a.headers.get(`content-length`)),[n,r]=s&&Fs(t,Ps(Is(s),!0))||[];a=new Response(Xs(a.body,nc,n,()=>{r&&r(),h&&h()}),e)}l||=`text`;let _=await ic[q.findKey(ic,l)||`text`](a,e);return!o&&h&&h(),await new Promise((t,n)=>{As(t,n,{data:_,headers:Es.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:m})})}catch(t){throw h&&h(),t&&t.name===`TypeError`&&/fetch/i.test(t.message)?Object.assign(new Bo(`Network Error`,Bo.ERR_NETWORK,e,m),{cause:t.cause||t}):Bo.from(t,t&&t.code,e,m)}})};q.forEach(sc,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var cc=e=>`- ${e}`,lc=e=>q.isFunction(e)||e===null||e===!1,uc={getAdapter:e=>{e=q.isArray(e)?e:[e];let{length:t}=e,n,r,i={};for(let a=0;a<t;a++){n=e[a];let t;if(r=n,!lc(n)&&(r=sc[(t=String(n)).toLowerCase()],r===void 0))throw new Bo(`Unknown adapter '${t}'`);if(r)break;i[t||`#`+a]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new Bo(`There is no suitable adapter to dispatch the request `+(t?e.length>1?`since :
`+e.map(cc).join(`
`):` `+cc(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return r},adapters:sc};function dc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ks(null,e)}function fc(e){return dc(e),e.headers=Es.from(e.headers),e.data=Ds.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),uc.getAdapter(e.adapter||hs.adapter)(e).then(function(t){return dc(e),t.data=Ds.call(e,e.transformResponse,t),t.headers=Es.from(t.headers),t},function(t){return Os(t)||(dc(e),t&&t.response&&(t.response.data=Ds.call(e,e.transformResponse,t.response),t.response.headers=Es.from(t.response.headers))),Promise.reject(t)})}var pc=`1.7.7`,mc={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{mc[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var hc={};mc.transitional=function(e,t,n){function r(e,t){return`[Axios v`+pc+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new Bo(r(i,` has been removed`+(t?` in `+t:``)),Bo.ERR_DEPRECATED);return t&&!hc[i]&&(hc[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}};function gc(e,t,n){if(typeof e!=`object`)throw new Bo(`options must be an object`,Bo.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new Bo(`option `+a+` must be `+n,Bo.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Bo(`Unknown option `+a,Bo.ERR_BAD_OPTION)}}var _c={assertOptions:gc,validators:mc},vc=_c.validators,yc=class{constructor(e){this.defaults=e,this.interceptors={request:new es,response:new es}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Us(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&_c.assertOptions(n,{silentJSONParsing:vc.transitional(vc.boolean),forcedJSONParsing:vc.transitional(vc.boolean),clarifyTimeoutError:vc.transitional(vc.boolean)},!1),r!=null&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:_c.assertOptions(r,{encode:vc.function,serialize:vc.function},!0)),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&q.merge(i.common,i[t.method]);i&&q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Es.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){typeof e.runWhen==`function`&&e.runWhen(t)===!1||(s&&=e.synchronous,o.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[fc.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(u=0;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=fc.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Us(this.defaults,e),$o(Vs(e.baseURL,e.url),e.params,e.paramsSerializer)}};q.forEach([`delete`,`get`,`head`,`options`],function(e){yc.prototype[e]=function(t,n){return this.request(Us(n||{},{method:e,url:t,data:(n||{}).data}))}}),q.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(Us(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}yc.prototype[e]=t(),yc.prototype[e+`Form`]=t(!0)});var bc=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new ks(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function xc(e){return function(t){return e.apply(null,t)}}function Sc(e){return q.isObject(e)&&e.isAxiosError===!0}var Cc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cc).forEach(([e,t])=>{Cc[t]=e});function wc(e){let t=new yc(e),n=Ma(yc.prototype.request,t);return q.extend(n,yc.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return wc(Us(e,t))},n}var Tc=wc(hs);Tc.Axios=yc,Tc.CanceledError=ks,Tc.CancelToken=bc,Tc.isCancel=Os,Tc.VERSION=pc,Tc.toFormData=Jo,Tc.AxiosError=Bo,Tc.Cancel=Tc.CanceledError,Tc.all=function(e){return Promise.all(e)},Tc.spread=xc,Tc.isAxiosError=Sc,Tc.mergeConfig=Us,Tc.AxiosHeaders=Es,Tc.formToJSON=e=>ps(q.isHTMLForm(e)?new FormData(e):e),Tc.getAdapter=uc.getAdapter,Tc.HttpStatusCode=Cc,Tc.default=Tc;var Ec=`https://www.atomwalk.com`,Dc=`https://crm.atomwalk.com`,Oc=`/api`,kc=localStorage.getItem(`dbName`),Ac=`${Ec}${Oc}`,jc=`${Dc}/api`,Mc=`${Dc}/hr_api`;`${Ac}${kc}`,`${Ac}${kc}`,`${Ec}`,`${Mc}`,`${Ac}${kc}`,`${Ac}`,`${Ac}`;var Nc=`${Ac}/set_user_pin/${kc}/`;`${Mc}`;var Pc=`${jc}/customer_user_login/`;`${jc}${kc}`;var Fc=`${Ac}/get_applicable_site/`,Ic=`${Ac}/customer_detail_list/${kc}/`,Lc=`${Mc}/get_employee_list/${kc}/`;`${Ac}${kc}`;var Rc=`${Mc}/process_employee_job/${kc}/`,zc=`${Mc}/process_employee_file/${kc}/`,Bc=`${Mc}/get_emp_allocation_data/${kc}/`,Vc=`${Mc}/process_emp_allocation/${kc}/`,Hc=`${Mc}/process_contract_allocation/${kc}/`,Uc=`${Mc}/get_contract_allocation_data/${kc}/`,Wc=`${Mc}/add_claim/${kc}/`,Gc=`${Mc}/process_claim/${kc}/`,Kc=`${Mc}/get_claim_list/${kc}/`,qc=`${Mc}/expense_item_list/${kc}/`,Jc=()=>localStorage.getItem(`userToken`)?localStorage.getItem(`userToken`):localStorage.getItem(`customerToken`),Yc=async(e,t)=>{let n=Jc();return Tc.create({baseURL:Ac,params:t,headers:{Authorization:`Token ${n}`}}).get(e)},Xc=async(e,t)=>Tc.create({baseURL:Ac,params:t}).get(e),Zc=async(e,t)=>{let n=Jc();return Tc.create({baseURL:Ac,headers:{Authorization:n?`Token ${n}`:``}}).post(e,t)},Qc=async(e,t)=>{let n=Jc();if(!(t instanceof FormData)){console.error(`Data is not FormData!`);return}return Tc.create({baseURL:Ac,headers:{Authorization:`Token ${n}`,"Content-Type":`multipart/form-data`}}).post(e,t)},$c=Tc.create({baseURL:Ac});Tc.get,Tc.post,Tc.put,Tc.delete;function el(e){return Xc(Fc,{mobile_app_type:e?`FMS_E`:`HRM_E`})}function tl(e){let t={};return e&&(t.emp_data=e),Zc(Rc,t)}function nl(e){return Qc(zc,e)}function rl(e){let t={};return e&&(t.customer_id=e),Yc(Ic,t)}async function il(e,t){try{let n=await Zc(Nc,{u_id:localStorage.getItem(`custId`),o_pin:e,n_pin:t,user_type:`CUSTOMER`});return n.status,n}catch(e){return e}}function al(e){return Yc(Lc,e)}function ol(e){return Yc(Bc,e)}function sl(e){return Yc(Uc,e)}function cl(e){return Qc(Hc,e)}function ll(e){return Qc(Vc,e)}function ul(e){return Qc(Wc,e)}function dl(e){let t={};return e&&(t.claim_data=e),Zc(Gc,t)}function fl(e,t,n){let r={};return e&&(r.call_mode=e),t&&(r.emp_id=t),n&&(r.period=n),Yc(Kc,r)}function pl(){return Yc(qc)}var ml=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),J=o(((e,t)=>{t.exports=ml()}))(),hl=(0,v.createContext)(),gl=()=>(0,v.useContext)(hl),_l=({children:e})=>{let[t,n]=(0,v.useState)(localStorage.getItem(`customerUser`)?JSON.parse(localStorage.getItem(`customerUser`)):null),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)([]);(0,v.useEffect)(()=>{t?(async()=>{let e=localStorage.getItem(`custId`);if(!e){i(!1);return}try{o((await rl(e))?.data[0])}catch(e){console.error(`Failed to fetch profile:`,e)}finally{i(!1)}})():i(!1)},[t]);let l={currentUser:t,logout:()=>{localStorage.removeItem(`customerToken`),localStorage.removeItem(`custId`),localStorage.removeItem(`customerUser`),K.success(`Logout successful!`),window.location.href=`/retainer/login`,localStorage.removeItem(`dbName`),localStorage.removeItem(`userToken`),localStorage.removeItem(`cust_emp_id`),n(null)},loading:r,profile:a,companyInfo:s,customerlogin:async e=>{try{let t={mobile_number:e.mobile,pin:e.password},r=await $c.post(Pc+`${e.company}/`,t,{headers:{"Content-Type":`application/json`}});if(r.status===200){let{token:t,customer_id:i,cust_emp_id:a}=r.data;localStorage.setItem(`customerToken`,t),localStorage.setItem(`custId`,String(i)),localStorage.setItem(`cust_emp_id`,String(a)),localStorage.setItem(`customerUser`,JSON.stringify(e)),n(localStorage.getItem(`customerUser`)),K.success(`Login successful!`),window.location.href=`/retainer/activity`}}catch(e){console.log(`Login error:`,e.response.data.error),K.error(e.response.data.error||`Failed to login. try again later !!!`)}}};return(0,J.jsx)(hl.Provider,{value:l,children:!r&&e})},vl=o((e=>{var t=d().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),yl=o(((e,t)=>{t.exports=vl()}))(),bl=e=>{let t=(0,yl.c)(2),{children:n}=e,{currentUser:r,loading:i}=gl();if(i){let e;return t[0]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,J.jsx)(`div`,{style:{color:`black`},children:`Loading...`}),t[0]=e):e=t[0],e}if(!r){let e;return t[1]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,J.jsx)(et,{to:`/login`}),t[1]=e):e=t[1],e}return n},xl={default:{name:`Default`,colors:{primary:`#6C63FF`,primaryLight:`#E8E6FF`,secondary:`#FF6584`,secondaryLight:`#FFE5EB`,accent:`#63FFDA`,accentLight:`#E6FFF7`,success:`#00C853`,warning:`#FFD600`,error:`#FF3D00`,info:`#2196F3`,background:`#F8F9FD`,backgroundAlt:`#F0F2F8`,card:`#FFFFFF`,text:`#333333`,textLight:`#666666`,border:`#E0E0E0`,shadow:`rgba(108, 99, 255, 0.1)`}},ocean:{name:`Ocean`,colors:{primary:`#0277BD`,primaryLight:`#E1F5FE`,secondary:`#00BCD4`,secondaryLight:`#E0F7FA`,accent:`#26A69A`,accentLight:`#E0F2F1`,success:`#00C853`,warning:`#FFC107`,error:`#F44336`,info:`#29B6F6`,background:`#F5F7FA`,backgroundAlt:`#E1F5FE`,card:`#FFFFFF`,text:`#263238`,textLight:`#546E7A`,border:`#CFD8DC`,shadow:`rgba(2, 119, 189, 0.1)`}},sunset:{name:`Sunset`,colors:{primary:`#FF5722`,primaryLight:`#FBE9E7`,secondary:`#FF9800`,secondaryLight:`#FFF3E0`,accent:`#FFC107`,accentLight:`#FFF8E1`,success:`#4CAF50`,warning:`#FF9800`,error:`#F44336`,info:`#2196F3`,background:`#FFF8F6`,backgroundAlt:`#FFF3E0`,card:`#FFFFFF`,text:`#3E2723`,textLight:`#5D4037`,border:`#FFCCBC`,shadow:`rgba(255, 87, 34, 0.1)`}},dark:{name:`Dark`,colors:{primary:`#483A6F`,primaryLight:`#2E2845`,secondary:`#1A5F51`,secondaryLight:`#0E3D35`,accent:`#7E3B54`,accentLight:`#4A2432`,success:`#1F5C2E`,warning:`#7D5700`,error:`#7D2B2B`,info:`#2C5282`,background:`#0A0A0A`,backgroundAlt:`#121212`,card:`#1A1A1A`,text:`#E0E0E0`,textLight:`#8A8A8A`,border:`#2A2A2A`,shadow:`rgba(0, 0, 0, 0.6)`}}},Sl={cardStyle:{borderRadius:`16px`,shadow:`medium`,border:!1,animation:!0},buttonStyle:{borderRadius:`8px`,shadow:!0,animation:!0,iconPosition:`left`},iconStyle:{size:`medium`,style:`filled`},typography:{fontFamily:`'Centra', sans-serif`,headingWeight:`600`,bodyWeight:`400`,fontSize:`medium`},layout:{density:`comfortable`,containerWidth:`standard`,sidebarStyle:`standard`}},Cl=(0,v.createContext)(),wl=()=>(0,v.useContext)(Cl),Tl=e=>{let t=(0,yl.c)(91),{children:n}=e,[r,i]=(0,v.useState)(`default`),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a={},t[0]=a):a=t[0];let[o,s]=(0,v.useState)(a),[c,l]=(0,v.useState)(Sl),[u,d]=(0,v.useState)(!1),f,p;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{if(typeof window<`u`){let e=localStorage.getItem(`hrms-theme`),t=localStorage.getItem(`hrms-custom-colors`),n=localStorage.getItem(`hrms-ui-preferences`),r=localStorage.getItem(`hrms-is-custom-theme`);e&&i(e),t&&s(JSON.parse(t)),n&&l(JSON.parse(n)),r&&d(JSON.parse(r))}},p=[],t[1]=f,t[2]=p):(f=t[1],p=t[2]),(0,v.useEffect)(f,p);let m;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=e=>{i(e),d(!1),localStorage.setItem(`hrms-theme`,e),localStorage.setItem(`hrms-is-custom-theme`,`false`)},t[3]=m):m=t[3];let h=m,g;t[4]===o?g=t[5]:(g=e=>{let t={...o,...e};s(t),d(!0),localStorage.setItem(`hrms-custom-colors`,JSON.stringify(t)),localStorage.setItem(`hrms-is-custom-theme`,`true`)},t[4]=o,t[5]=g);let _=g,y;t[6]===c?y=t[7]:(y=(e,t)=>{let n={...c,[e]:{...c[e],...t}};l(n),localStorage.setItem(`hrms-ui-preferences`,JSON.stringify(n))},t[6]=c,t[7]=y);let b=y,x;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(x=()=>{l(Sl),s({}),d(!1),localStorage.setItem(`hrms-ui-preferences`,JSON.stringify(Sl)),localStorage.removeItem(`hrms-custom-colors`),localStorage.setItem(`hrms-is-custom-theme`,`false`)},t[8]=x):x=t[8];let S=x,C=xl[r]||xl.default,w;t[9]!==C.colors||t[10]!==o||t[11]!==u?(w=u?{...C.colors,...o}:C.colors,t[9]=C.colors,t[10]=o,t[11]=u,t[12]=w):w=t[12];let T=w,E=u?`Custom`:C.name,D;t[13]===c.typography.fontFamily?D=t[14]:(D={body:c.typography.fontFamily,heading:c.typography.fontFamily},t[13]=c.typography.fontFamily,t[14]=D);let O=c.typography.fontSize===`small`?`0.7rem`:c.typography.fontSize===`large`?`0.8rem`:`0.75rem`,k=c.typography.fontSize===`small`?`0.8rem`:c.typography.fontSize===`large`?`0.95rem`:`0.875rem`,A=c.typography.fontSize===`small`?`0.9rem`:c.typography.fontSize===`large`?`1.1rem`:`1rem`,j=c.typography.fontSize===`small`?`1rem`:c.typography.fontSize===`large`?`1.25rem`:`1.125rem`,M=c.typography.fontSize===`small`?`1.1rem`:c.typography.fontSize===`large`?`1.4rem`:`1.25rem`,N=c.typography.fontSize===`small`?`1.3rem`:c.typography.fontSize===`large`?`1.7rem`:`1.5rem`,P=c.typography.fontSize===`small`?`1.6rem`:c.typography.fontSize===`large`?`2.1rem`:`1.875rem`,F=c.typography.fontSize===`small`?`2rem`:c.typography.fontSize===`large`?`2.5rem`:`2.25rem`,I=c.typography.fontSize===`small`?`2.5rem`:c.typography.fontSize===`large`?`3.5rem`:`3rem`,L;t[15]!==O||t[16]!==k||t[17]!==A||t[18]!==j||t[19]!==M||t[20]!==N||t[21]!==P||t[22]!==F||t[23]!==I?(L={xs:O,sm:k,md:A,lg:j,xl:M,"2xl":N,"3xl":P,"4xl":F,"5xl":I},t[15]=O,t[16]=k,t[17]=A,t[18]=j,t[19]=M,t[20]=N,t[21]=P,t[22]=F,t[23]=I,t[24]=L):L=t[24];let R;t[25]!==c.typography.bodyWeight||t[26]!==c.typography.headingWeight?(R={heading:c.typography.headingWeight,body:c.typography.bodyWeight},t[25]=c.typography.bodyWeight,t[26]=c.typography.headingWeight,t[27]=R):R=t[27];let z;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(z={xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},t[28]=z):z=t[28];let ee=c.layout.density===`compact`?`0.2rem`:c.layout.density===`spacious`?`0.3rem`:`0.25rem`,B=c.layout.density===`compact`?`0.4rem`:c.layout.density===`spacious`?`0.6rem`:`0.5rem`,V=c.layout.density===`compact`?`0.8rem`:c.layout.density===`spacious`?`1.2rem`:`1rem`,H=c.layout.density===`compact`?`1.2rem`:c.layout.density===`spacious`?`1.8rem`:`1.5rem`,te=c.layout.density===`compact`?`1.6rem`:c.layout.density===`spacious`?`2.4rem`:`2rem`,U=c.layout.density===`compact`?`2.4rem`:c.layout.density===`spacious`?`3.6rem`:`3rem`,W=c.layout.density===`compact`?`3.2rem`:c.layout.density===`spacious`?`4.8rem`:`4rem`,ne;t[29]!==ee||t[30]!==B||t[31]!==V||t[32]!==H||t[33]!==te||t[34]!==U||t[35]!==W?(ne={xs:ee,sm:B,md:V,lg:H,xl:te,"2xl":U,"3xl":W},t[29]=ee,t[30]=B,t[31]=V,t[32]=H,t[33]=te,t[34]=U,t[35]=W,t[36]=ne):ne=t[36];let re=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`0.25rem`:`0.125rem`,ie=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`0.5rem`:`0.25rem`,ae=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`1rem`:`0.5rem`,oe=c.cardStyle.borderRadius===`square`?`0`:c.cardStyle.borderRadius===`rounded`?`2rem`:`1rem`,se;t[37]!==re||t[38]!==ie||t[39]!==ae||t[40]!==oe?(se={sm:re,md:ie,lg:ae,xl:oe,full:`9999px`},t[37]=re,t[38]=ie,t[39]=ae,t[40]=oe,t[41]=se):se=t[41];let ce=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 2px 5px rgba(0, 0, 0, 0.15)`:`0 1px 3px rgba(0, 0, 0, 0.12)`,le=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 6px 12px rgba(0, 0, 0, 0.15)`:`0 4px 6px rgba(0, 0, 0, 0.1)`,ue=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 15px 25px rgba(0, 0, 0, 0.15)`:`0 10px 15px rgba(0, 0, 0, 0.1)`,de=c.cardStyle.shadow===`none`?`none`:c.cardStyle.shadow===`heavy`?`0 25px 35px rgba(0, 0, 0, 0.15)`:`0 20px 25px rgba(0, 0, 0, 0.1)`,fe;t[42]!==ce||t[43]!==le||t[44]!==ue||t[45]!==de?(fe={none:`none`,sm:ce,md:le,lg:ue,xl:de},t[42]=ce,t[43]=le,t[44]=ue,t[45]=de,t[46]=fe):fe=t[46];let pe=c.cardStyle.animation?`0.2s ease`:`0s`,me=c.cardStyle.animation?`0.3s ease`:`0s`,he=c.cardStyle.animation?`0.5s ease`:`0s`,ge;t[47]!==pe||t[48]!==me||t[49]!==he?(ge={fast:pe,normal:me,slow:he},t[47]=pe,t[48]=me,t[49]=he,t[50]=ge):ge=t[50];let _e;t[51]!==c.buttonStyle.animation||t[52]!==c.buttonStyle.borderRadius||t[53]!==c.buttonStyle.iconPosition||t[54]!==c.buttonStyle.shadow?(_e={borderRadius:c.buttonStyle.borderRadius,shadow:c.buttonStyle.shadow,animation:c.buttonStyle.animation,iconPosition:c.buttonStyle.iconPosition},t[51]=c.buttonStyle.animation,t[52]=c.buttonStyle.borderRadius,t[53]=c.buttonStyle.iconPosition,t[54]=c.buttonStyle.shadow,t[55]=_e):_e=t[55];let ve;t[56]!==c.iconStyle.size||t[57]!==c.iconStyle.style?(ve={size:c.iconStyle.size,style:c.iconStyle.style},t[56]=c.iconStyle.size,t[57]=c.iconStyle.style,t[58]=ve):ve=t[58];let ye;t[59]!==c.layout.containerWidth||t[60]!==c.layout.density||t[61]!==c.layout.sidebarStyle?(ye={containerWidth:c.layout.containerWidth,sidebarStyle:c.layout.sidebarStyle,density:c.layout.density},t[59]=c.layout.containerWidth,t[60]=c.layout.density,t[61]=c.layout.sidebarStyle,t[62]=ye):ye=t[62];let be;t[63]!==D||t[64]!==L||t[65]!==R||t[66]!==ne||t[67]!==se||t[68]!==fe||t[69]!==ge||t[70]!==_e||t[71]!==ve||t[72]!==ye||t[73]!==E||t[74]!==T||t[75]!==c?(be={name:E,colors:T,fonts:D,fontSizes:L,fontWeights:R,breakpoints:z,spacing:ne,borderRadius:se,shadows:fe,transitions:ge,buttons:_e,icons:ve,layout:ye,uiPreferences:c,cardStyle:c.cardStyle,buttonStyle:c.buttonStyle,iconStyle:c.iconStyle,typographyStyle:c.typography,layoutStyle:c.layout},t[63]=D,t[64]=L,t[65]=R,t[66]=ne,t[67]=se,t[68]=fe,t[69]=ge,t[70]=_e,t[71]=ve,t[72]=ye,t[73]=E,t[74]=T,t[75]=c,t[76]=be):be=t[76];let xe=be,Se;t[77]!==xe||t[78]!==r||t[79]!==o||t[80]!==u||t[81]!==c||t[82]!==_||t[83]!==b?(Se={theme:xe,currentTheme:r,changeTheme:h,baseThemes:xl,customColors:o,updateCustomColors:_,uiPreferences:c,updateUIPreferences:b,isCustomTheme:u,resetCustomizations:S},t[77]=xe,t[78]=r,t[79]=o,t[80]=u,t[81]=c,t[82]=_,t[83]=b,t[84]=Se):Se=t[84];let Ce;t[85]!==n||t[86]!==xe?(Ce=(0,J.jsx)(hi,{theme:xe,children:n}),t[85]=n,t[86]=xe,t[87]=Ce):Ce=t[87];let we;return t[88]!==Se||t[89]!==Ce?(we=(0,J.jsx)(Cl.Provider,{value:Se,children:Ce}),t[88]=Se,t[89]=Ce,t[90]=we):we=t[90],we},El={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Dl=v.createContext&&v.createContext(El),Ol=[`attr`,`size`,`title`];function kl(e,t){if(e==null)return{};var n,r,i=Al(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Al(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jl(){return jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jl.apply(null,arguments)}function Ml(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Nl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ml(Object(n),!0).forEach(function(t){Pl(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ml(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Pl(e,t,n){return(t=Fl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fl(e){var t=Il(e,`string`);return typeof t==`symbol`?t:t+``}function Il(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ll(e){return e&&e.map((e,t)=>v.createElement(e.tag,Nl({key:t},e.attr),Ll(e.child)))}function Y(e){return t=>v.createElement(Rl,jl({attr:Nl({},e.attr)},t),Ll(e.child))}function Rl(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=kl(e,Ol),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),v.createElement(`svg`,jl({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Nl(Nl({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&v.createElement(`title`,null,i),e.children)};return Dl===void 0?t(El):v.createElement(Dl.Consumer,null,e=>t(e))}function zl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z`},child:[]}]})(e)}function Bl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z`},child:[]}]})(e)}function Vl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function Hl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Ul(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function Wl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z`},child:[]}]})(e)}function Gl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128 448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3zM96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4z`},child:[]}]})(e)}function Kl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function ql(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z`},child:[]}]})(e)}function Jl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z`},child:[]}]})(e)}function Yl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z`},child:[]}]})(e)}function Xl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z`},child:[]}]})(e)}function Zl(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z`},child:[]}]})(e)}function Ql(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z`},child:[]}]})(e)}function $l(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z`},child:[]}]})(e)}function eu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z`},child:[]}]})(e)}function tu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function nu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H16A16 16 0 0 0 0 48v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h120v112h-24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-24V112h120v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-68.69 260.69C354 283.36 336 288.36 336 304v48H112v-48c0-14.31-17.31-21.32-27.31-11.31l-80 80a16 16 0 0 0 0 22.62l80 80C94 484.64 112 479.64 112 464v-48h224v48c0 14.31 17.31 21.33 27.31 11.31l80-80a16 16 0 0 0 0-22.62z`},child:[]}]})(e)}function ru(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z`},child:[]}]})(e)}function iu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z`},child:[]}]})(e)}function au(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z`},child:[]}]})(e)}function ou(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function su(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function cu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M512 512H0V0h512v512z`},child:[]}]})(e)}function lu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z`},child:[]}]})(e)}function uu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z`},child:[]}]})(e)}function du(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z`},child:[]}]})(e)}function fu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z`},child:[]}]})(e)}function pu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M544 128h-48v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8H88c-4.42 0-8-3.58-8-8v-88H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function mu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z`},child:[]}]})(e)}function hu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z`},child:[]}]})(e)}function gu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function _u(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z`},child:[]}]})(e)}function vu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z`},child:[]}]})(e)}function yu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z`},child:[]}]})(e)}function bu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z`},child:[]}]})(e)}function xu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z`},child:[]}]})(e)}function Su(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function Cu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z`},child:[]}]})(e)}function wu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function Tu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z`},child:[]}]})(e)}function Eu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z`},child:[]}]})(e)}function Du(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64zM192 208c-57.787 0-104-66.518-104-144h208c0 77.945-46.51 144-104 144z`},child:[]}]})(e)}function Ou(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function ku(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z`},child:[]}]})(e)}function Au(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z`},child:[]}]})(e)}function ju(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M512 320s-64 92.65-64 128c0 35.35 28.66 64 64 64s64-28.65 64-64-64-128-64-128zm-9.37-102.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.76c-6.25-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.62l86.19 86.18-94.76 94.76c-37.49 37.48-37.49 98.26 0 135.75l117.19 117.19c18.74 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.75.01-45.25zm-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15 81.61-81.61 58.6 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.6-58.6 58.95-58.95 162.44 162.44-48.34 48.34z`},child:[]}]})(e)}function Mu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z`},child:[]}]})(e)}function Nu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z`},child:[]}]})(e)}function Pu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z`},child:[]}]})(e)}function Fu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z`},child:[]}]})(e)}function Iu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function Lu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z`},child:[]}]})(e)}function Ru(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function zu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function Bu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z`},child:[]}]})(e)}function Vu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z`},child:[]}]})(e)}function Hu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z`},child:[]}]})(e)}function Uu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z`},child:[]}]})(e)}function Wu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z`},child:[]}]})(e)}function Gu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z`},child:[]}]})(e)}function Ku(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function qu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z`},child:[]}]})(e)}function Ju(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z`},child:[]}]})(e)}function Yu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z`},child:[]}]})(e)}function Xu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z`},child:[]}]})(e)}function Zu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function Qu(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}function $u(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z`},child:[]}]})(e)}function ed(e){return Y({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z`},child:[]}]})(e)}function td(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z`},child:[]}]})(e)}function nd(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z`},child:[]}]})(e)}function rd(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z`},child:[]},{tag:`circle`,attr:{cx:`256`,cy:`256`,r:`80`,fill:`none`,strokeMiterlimit:`10`,strokeWidth:`32`},child:[]}]})(e)}function id(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`},child:[]}]})(e)}function ad(e){return Y({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z`},child:[]}]})(e)}var X={colors:{primary:`#6C63FF`,primaryLight:`#E8E6FF`,secondary:`#FF6584`,secondaryLight:`#FFE5EB`,accent:`#63FFDA`,accentLight:`#E6FFF7`,success:`#00C853`,warning:`#FFD600`,error:`#FF3D00`,info:`#2196F3`,background:`#F8F9FD`,backgroundAlt:`#F0F2F8`,card:`#FFFFFF`,text:`#333333`,textLight:`#666666`,border:`#E0E0E0`,shadow:`rgba(108, 99, 255, 0.1)`},fonts:{body:`'Poppins', sans-serif`,heading:`'Poppins', sans-serif`},fontSizes:{xs:`0.75rem`,sm:`0.875rem`,md:`1rem`,lg:`1.125rem`,xl:`1.25rem`,"2xl":`1.5rem`,"3xl":`1.875rem`,"4xl":`2.25rem`,"5xl":`3rem`},breakpoints:{xs:`320px`,sm:`576px`,md:`768px`,lg:`992px`,xl:`1200px`},spacing:{xs:`0.25rem`,sm:`0.5rem`,md:`1rem`,lg:`1.5rem`,xl:`2rem`,"2xl":`3rem`,"3xl":`4rem`},borderRadius:{sm:`0.125rem`,md:`0.25rem`,lg:`0.5rem`,xl:`1rem`,full:`9999px`},shadows:{sm:`0 1px 3px rgba(0, 0, 0, 0.12)`,md:`0 4px 6px rgba(0, 0, 0, 0.1)`,lg:`0 10px 15px rgba(0, 0, 0, 0.1)`,xl:`0 20px 25px rgba(0, 0, 0, 0.1)`},transitions:{fast:`0.2s ease`,normal:`0.3s ease`,slow:`0.5s ease`}},od=G.div`
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
`,sd=G.div`
  padding: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`15px`:n===`spacious`?`25px`:`20px`}};
  display: flex;
  align-items: center;
  justify-content: ${e=>e.isOpen?`space-between`:`center`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,cd=G.div`
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`1.3rem`:n===`large`?`1.7rem`:`1.5rem`}};
  font-weight: bold;
  color: white;
  display: ${e=>e.isOpen?`block`:`none`};
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
`,ld=G.button`
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
`,ud=G.ul`
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
`,dd=G.li`
  margin-bottom: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`3px`:n===`spacious`?`8px`:`5px`}};
`,fd=G(_t)`
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
`,pd=G.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${e=>{let{uiPreferences:t}=e,n=t?.layout?.density||`comfortable`;return n===`compact`?`10px`:n===`spacious`?`20px`:`15px`}};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: ${e=>e.isOpen?`space-between`:`center`};
  background: ${({theme:e})=>e.colors.primary};
`,md=G.div`
  display: ${e=>e.isOpen?`flex`:`none`};
  align-items: center;
`,hd=G.div`
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
`,gd=G.span`
  font-size: ${e=>{let{uiPreferences:t}=e,n=t?.typography?.fontSize||`medium`;return n===`small`?`0.8rem`:n===`large`?`1rem`:`0.9rem`}};
  font-family: ${e=>{let{uiPreferences:t}=e;return`${t?.typography?.fontFamily||`Poppins`}, sans-serif`}};
`,_d=G.button`
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
`,vd=G.div`
  margin-bottom: 5px;
`,yd=G.div`
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
`,bd=G.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-height: ${({isOpen:e,itemCount:t})=>e?`${t*44}px`:`0`};
  transition: max-height 0.3s ease;
`,xd=G.li`
  margin-bottom: 2px;
`,Sd=G(_t)`
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
`,Cd=e=>{let t=(0,yl.c)(70),{onToggle:n,initialOpen:r}=e,i=r===void 0?!1:r,[a,o]=(0,v.useState)(i),s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s={},t[0]=s):s=t[0];let[c,l]=(0,v.useState)(s),u=Ae(),{logout:d,profile:f}=gl(),{theme:p,uiPreferences:m}=wl(),h=m?.layout?.sidebarStyle||`standard`,g;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,J.jsx)(Yl,{}),t[1]=g):g=t[1];let _;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(_={path:`/activity`,name:`Activity List`,icon:(0,J.jsx)(Ou,{})},t[2]=_):_=t[2];let y;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(y=[{name:`Customer Portal`,icon:g,items:[_,{path:`/dashboard`,name:`Retainer Dashboard`,icon:(0,J.jsx)(Vl,{})}]}],t[3]=y):y=t[3];let b=y,x,S;t[4]!==i||t[5]!==u.pathname?(x=()=>{o(i);let e={};b.forEach(t=>{let n=t.items.some(e=>u.pathname.startsWith(e.path));e[t.name]=n}),l(e)},S=[i,u.pathname],t[4]=i,t[5]=u.pathname,t[6]=x,t[7]=S):(x=t[6],S=t[7]),(0,v.useEffect)(x,S);let C;t[8]!==a||t[9]!==n?(C=()=>{let e=!a;o(e),n&&n(e)},t[8]=a,t[9]=n,t[10]=C):C=t[10];let w=C,T;t[11]!==a||t[12]!==w?(T=e=>{a||w(),setTimeout(()=>{l(t=>({...t,[e]:!t[e]}))},100)},t[11]=a,t[12]=w,t[13]=T):T=t[13];let E=T,D;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(D={path:`/activity`,name:`Activity List`,icon:(0,J.jsx)(Ou,{})},t[14]=D):D=t[14];let O;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(O=[D,{path:`/dashboard`,name:`Retainer Dashboard`,icon:(0,J.jsx)(Vl,{})}],t[15]=O):O=t[15];let k=O,A;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,J.jsx)(`img`,{src:`https://atomwalk.com/static/office/image/Atom_walk_logo.jpg`,alt:`Company Logo`,style:{width:`80px`,marginRight:`1rem`,borderRadius:`10px`}}),t[16]=A):A=t[16];let j;t[17]!==a||t[18]!==m?(j=(0,J.jsx)(cd,{isOpen:a,uiPreferences:m,children:A}),t[17]=a,t[18]=m,t[19]=j):j=t[19];let M;t[20]===a?M=t[21]:(M=a?(0,J.jsx)(tu,{}):(0,J.jsx)(Zu,{}),t[20]=a,t[21]=M);let N;t[22]!==M||t[23]!==w||t[24]!==m?(N=(0,J.jsx)(ld,{onClick:w,uiPreferences:m,children:M}),t[22]=M,t[23]=w,t[24]=m,t[25]=N):N=t[25];let P;t[26]!==a||t[27]!==j||t[28]!==N||t[29]!==m?(P=(0,J.jsxs)(sd,{isOpen:a,uiPreferences:m,children:[j,N]}),t[26]=a,t[27]=j,t[28]=N,t[29]=m,t[30]=P):P=t[30];let F;t[31]!==c||t[32]!==a||t[33]!==u.pathname||t[34]!==h||t[35]!==p||t[36]!==E||t[37]!==m?(F=h===`standard`?(0,J.jsx)(ud,{uiPreferences:m,children:k.map(e=>(0,J.jsx)(dd,{uiPreferences:m,children:(0,J.jsxs)(fd,{to:e.path,active:u.pathname===e.path?1:0,isOpen:a,theme:p,uiPreferences:m,children:[e.icon,(0,J.jsx)(`span`,{children:e.name})]})},e.path))}):(0,J.jsx)(ud,{uiPreferences:m,children:b.map(e=>(0,J.jsxs)(vd,{children:[(0,J.jsxs)(yd,{onClick:()=>E(e.name),isOpen:a,expanded:c[e.name],uiPreferences:m,children:[e.icon,(0,J.jsx)(`span`,{children:a?e.name:``})]}),(0,J.jsx)(bd,{isOpen:c[e.name]&&a,itemCount:e.items.length,children:e.items.map(e=>(0,J.jsx)(xd,{children:(0,J.jsxs)(Sd,{to:e.path,active:u.pathname.startsWith(e.path)?1:0,isOpen:a,theme:p,uiPreferences:m,children:[e.icon,(0,J.jsx)(`span`,{children:e.name})]})},e.path))})]},e.name))}),t[31]=c,t[32]=a,t[33]=u.pathname,t[34]=h,t[35]=p,t[36]=E,t[37]=m,t[38]=F):F=t[38];let I;t[39]===f?.name?I=t[40]:(I=f?.name?.charAt(0)||`U`,t[39]=f?.name,t[40]=I);let L;t[41]!==I||t[42]!==p||t[43]!==m?(L=(0,J.jsx)(hd,{theme:p,uiPreferences:m,children:I}),t[41]=I,t[42]=p,t[43]=m,t[44]=L):L=t[44];let R=f?.name||`User`,z;t[45]!==R||t[46]!==m?(z=(0,J.jsx)(gd,{uiPreferences:m,children:R}),t[45]=R,t[46]=m,t[47]=z):z=t[47];let ee;t[48]!==a||t[49]!==L||t[50]!==z?(ee=(0,J.jsxs)(md,{isOpen:a,children:[L,z]}),t[48]=a,t[49]=L,t[50]=z,t[51]=ee):ee=t[51];let B;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,J.jsx)(uu,{}),t[52]=B):B=t[52];let V;t[53]!==d||t[54]!==p||t[55]!==m?(V=(0,J.jsx)(_d,{onClick:d,title:`Logout`,theme:p,uiPreferences:m,children:B}),t[53]=d,t[54]=p,t[55]=m,t[56]=V):V=t[56];let H;t[57]!==a||t[58]!==ee||t[59]!==V||t[60]!==p||t[61]!==m?(H=(0,J.jsxs)(pd,{isOpen:a,theme:p,uiPreferences:m,children:[ee,V]}),t[57]=a,t[58]=ee,t[59]=V,t[60]=p,t[61]=m,t[62]=H):H=t[62];let te;return t[63]!==a||t[64]!==P||t[65]!==F||t[66]!==H||t[67]!==p||t[68]!==m?(te=(0,J.jsxs)(od,{isOpen:a,theme:p,uiPreferences:m,children:[P,F,H]}),t[63]=a,t[64]=P,t[65]=F,t[66]=H,t[67]=p,t[68]=m,t[69]=te):te=t[69],te},wd=bi`
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
`,Td=G.button`
  ${wd}
`,Ed=G.a`
  ${wd}
  text-decoration: none;
`,Z=e=>{let t=(0,yl.c)(26),n,r,i,a,o,s,c,l,u;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9]):({children:n,variant:a,size:o,fullWidth:s,iconOnly:c,as:l,customColor:r,disabled:u,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u);let d=a===void 0?`primary`:a,f=o===void 0?`md`:o,p=s===void 0?!1:s,m=c===void 0?!1:c,h=l===void 0?`button`:l,g=u===void 0?!1:u,{theme:_,uiPreferences:v}=wl(),y;t[10]!==r||t[11]!==g||t[12]!==p||t[13]!==m||t[14]!==i||t[15]!==f||t[16]!==_||t[17]!==v||t[18]!==d?(y={variant:d,size:f,fullWidth:p,iconOnly:m,disabled:g,theme:_,uiPreferences:v,customColor:r,...i},t[10]=r,t[11]=g,t[12]=p,t[13]=m,t[14]=i,t[15]=f,t[16]=_,t[17]=v,t[18]=d,t[19]=y):y=t[19];let b=y;if(h===`a`){let e;return t[20]!==b||t[21]!==n?(e=(0,J.jsx)(Ed,{...b,children:n}),t[20]=b,t[21]=n,t[22]=e):e=t[22],e}let x;return t[23]!==b||t[24]!==n?(x=(0,J.jsx)(Td,{...b,children:n}),t[23]=b,t[24]=n,t[25]=x):x=t[25],x},Dd=G.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 1rem;
`,Od=G.div`
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
`,kd=G.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`,Ad=G.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  margin: 0;
`,jd=G.button`
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
`,Md=G.div`
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
`,Nd=G.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
`;G.button`
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
`,G.button`
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
`;var Pd=e=>{let t=(0,yl.c)(32),{isOpen:n,onClose:r,onSave:i,title:a,width:o,maxHeight:s,children:c,showSaveButton:l,saveButtonText:u,cancelButtonText:d,saveDisabled:f,setIsConfirmOpen:p}=e,m=a===void 0?`Modal Title`:a,h=l===void 0?!0:l,g=u===void 0?`Save Changes`:u,_=d===void 0?`Cancel`:d,y=f===void 0?!1:f,x,S;if(t[0]===n?(x=t[1],S=t[2]):(x=()=>{if(n)return document.body.style.overflow=`hidden`,Fd},S=[n],t[0]=n,t[1]=x,t[2]=S),(0,v.useEffect)(x,S),!n)return null;let C;t[3]!==i||t[4]!==y||t[5]!==p?(C=()=>{y||(p?p(!0):i&&i())},t[3]=i,t[4]=y,t[5]=p,t[6]=C):C=t[6];let w=C,T;t[7]===m?T=t[8]:(T=(0,J.jsx)(Ad,{children:m}),t[7]=m,t[8]=T);let E;t[9]===r?E=t[10]:(E=(0,J.jsx)(jd,{onClick:r,children:`×`}),t[9]=r,t[10]=E);let D;t[11]!==E||t[12]!==T?(D=(0,J.jsxs)(kd,{children:[T,E]}),t[11]=E,t[12]=T,t[13]=D):D=t[13];let O;t[14]!==c||t[15]!==s?(O=(0,J.jsx)(Md,{maxHeight:s,children:c}),t[14]=c,t[15]=s,t[16]=O):O=t[16];let k;t[17]!==_||t[18]!==w||t[19]!==r||t[20]!==g||t[21]!==y||t[22]!==h?(k=(h||_)&&(0,J.jsxs)(Nd,{children:[(0,J.jsx)(Z,{variant:`outline`,onClick:r,children:_}),h&&(0,J.jsx)(Z,{variant:`primary`,onClick:w,disabled:y,children:g})]}),t[17]=_,t[18]=w,t[19]=r,t[20]=g,t[21]=y,t[22]=h,t[23]=k):k=t[23];let A;t[24]!==D||t[25]!==O||t[26]!==k||t[27]!==o?(A=(0,J.jsxs)(Od,{width:o,onClick:Id,children:[D,O,k]}),t[24]=D,t[25]=O,t[26]=k,t[27]=o,t[28]=A):A=t[28];let j;return t[29]!==r||t[30]!==A?(j=(0,b.createPortal)((0,J.jsx)(Dd,{onClick:r,children:A}),document.getElementById(`modal-root`)||document.body),t[29]=r,t[30]=A,t[31]=j):j=t[31],j};function Fd(){document.body.style.overflow=`unset`}function Id(e){return e.stopPropagation()}G.div`
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
`,G.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,G.h2`
  margin: 0;
  color: #333;
  font-size: 20px;
`;var Ld=G.p`
  margin: 16px 0;
  color: #555;
`;G.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 12px;
`;var Rd=G.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;G(Rd)`
  background-color: #f1f1f1;
  color: #333;
  &:hover {
    background-color: #e1e1e1;
  }
`,G(Rd)`
  background-color: ${e=>e.approve?`#28a745`:`#007bff`};
  color: white;
  &:hover {
    background-color: ${e=>e.approve?`#218838`:`#0069d9`};
  }
`;var zd=G.div`
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
`,Bd=e=>{let t=(0,yl.c)(14),{isOpen:n,onClose:r,onConfirm:i,approve:a,isLoading:o,title:s,message:c,confirmLabel:l}=e;if(!n)return null;let u=a===`APPROVE`,d=u?`Approve`:`Submit`,f=u?`approving`:`submitting`,p=s||`${d} Weekly Timesheet`,m=c||(u?`Are you sure you want to approve this weekly timesheet? This action cannot be undone.`:`Are you sure you want to submit your weekly timesheet for approval? You won't be able to make changes after submission.`),h=l||`${d} Weekly Timesheet`,g;t[0]!==f||t[1]!==o||t[2]!==h?(g=o?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(zd,{}),` `,f,`...`]}):h,t[0]=f,t[1]=o,t[2]=h,t[3]=g):g=t[3];let _;t[4]===m?_=t[5]:(_=(0,J.jsx)(Ld,{children:m}),t[4]=m,t[5]=_);let v;return t[6]!==o||t[7]!==n||t[8]!==r||t[9]!==i||t[10]!==p||t[11]!==g||t[12]!==_?(v=(0,J.jsx)(Pd,{width:`400px`,isOpen:n,title:p,onClose:r,onSave:i,saveDisabled:o,saveButtonText:g,children:_}),t[6]=o,t[7]=n,t[8]=r,t[9]=i,t[10]=p,t[11]=g,t[12]=_,t[13]=v):v=t[13],v},Vd=G.header`
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
`;G.div`
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
`,G.input`
  border: none;
  background: transparent;
  margin-left: 10px;
  width: 100%;
  color:${({theme:e})=>e.colors.textLight};
  &:focus {
    outline: none;
  }
`,G.div`
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
`,G.div`
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
`;var Hd=G.div`
  display: flex;
  align-items: center;
`,Ud=G.button`
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
`,Wd=G.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`,Gd=G.div`
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
`,Kd=G.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textLight};
  @media (max-width: 768px) {
    display: none;
  }
`,qd=G.button`
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
`,Jd=G(Ud)`
  color: ${({theme:e})=>e.colors.error};
  
  &:hover {
    color: ${({theme:e})=>e.colors.error};
    opacity: 0.8;
  }
`,Yd=e=>{let t=(0,yl.c)(39),{sidebarWidth:n,onMobileMenuClick:r}=e,i=n===void 0?`250px`:n,{logout:a,profile:o}=gl(),[s,c]=(0,v.useState)(!1),l=Me(),u;t[0]===a?u=t[1]:(u=()=>{a()},t[0]=a,t[1]=u);let d=u,f;t[2]===l?f=t[3]:(f=()=>{l(`/profile`)},t[2]=l,t[3]=f);let p=f,m;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>{c(!1)},t[4]=m):m=t[4];let h=m,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{c(!0)},t[5]=g):g=t[5];let _=g,y;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(y={display:`flex`,alignItems:`center`},t[6]=y):y=t[6];let b;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,J.jsx)(Zu,{}),t[7]=b):b=t[7];let x;t[8]===r?x=t[9]:(x=(0,J.jsx)(qd,{onClick:r,children:b}),t[8]=r,t[9]=x);let S=o?.image,C;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(C={width:`50px`,height:`50px`,borderRadius:`10px`,marginRight:`10px`,border:`0.2px solid #000`},t[10]=C):C=t[10];let w;t[11]===S?w=t[12]:(w=(0,J.jsx)(`img`,{src:S,alt:`Company Logo`,style:C}),t[11]=S,t[12]=w);let T;t[13]!==w||t[14]!==x?(T=(0,J.jsxs)(`div`,{style:y,children:[x,w]}),t[13]=w,t[14]=x,t[15]=T):T=t[15];let E;t[16]===o?.name?E=t[17]:(E=o?.name?.charAt(0)||(0,J.jsx)(Hl,{}),t[16]=o?.name,t[17]=E);let D;t[18]===E?D=t[19]:(D=(0,J.jsx)(Gd,{children:E}),t[18]=E,t[19]=D);let O=o?.name||`User`,k;t[20]===O?k=t[21]:(k=(0,J.jsx)(Kd,{children:O}),t[20]=O,t[21]=k);let A;t[22]!==p||t[23]!==D||t[24]!==k?(A=(0,J.jsxs)(Wd,{onClick:p,children:[D,k]}),t[22]=p,t[23]=D,t[24]=k,t[25]=A):A=t[25];let j;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,J.jsx)(Jd,{onClick:_,title:`Logout`,children:(0,J.jsx)(uu,{})}),t[26]=j):j=t[26];let M;t[27]===A?M=t[28]:(M=(0,J.jsxs)(Hd,{children:[A,j]}),t[27]=A,t[28]=M);let N;t[29]===d?N=t[30]:(N=()=>d(),t[29]=d,t[30]=N);let P;t[31]!==s||t[32]!==N?(P=(0,J.jsx)(Bd,{isOpen:s,onClose:h,onConfirm:N,title:`Logout`,message:`Are you sure you want to logout?`,confirmLabel:`Logout`}),t[31]=s,t[32]=N,t[33]=P):P=t[33];let F;return t[34]!==i||t[35]!==T||t[36]!==M||t[37]!==P?(F=(0,J.jsxs)(Vd,{sidebarWidth:i,children:[T,M,P]}),t[34]=i,t[35]=T,t[36]=M,t[37]=P,t[38]=F):F=t[38],F},Xd=G.div`
  display: flex;
  min-height: 100vh;
`,Zd=G.main`
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
`,Qd=G.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({theme:e})=>e.colors.primary};
`,$d=G.div`
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
`,ef=e=>{let t=(0,yl.c)(29),{children:n,title:r}=e,[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),c,l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=()=>{let e=()=>{s(window.innerWidth<=768),window.innerWidth,a(!1)};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},l=[],t[0]=c,t[1]=l):(c=t[0],l=t[1]),(0,v.useEffect)(c,l);let u;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=e=>{a(e)},t[2]=u):u=t[2];let d=u,f;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(f=()=>{a(!0)},t[3]=f):f=t[3];let p=f,m;t[4]===o?m=t[5]:(m=()=>{o&&a(!1)},t[4]=o,t[5]=m);let h=m,g;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(g={label:`Dashboard`,icon:(0,J.jsx)(iu,{}),path:`/dashboard`},t[6]=g):g=t[6];let _;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(_={label:`Attendance Tracking`,icon:(0,J.jsx)(Jl,{}),path:`/attendance-tracking`},t[7]=_):_=t[7];let y;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(y={label:`Leave Management`,icon:(0,J.jsx)(Yu,{}),path:`/leave-management`},t[8]=y):y=t[8];let b;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(b={label:`My Claims`,icon:(0,J.jsx)(mu,{}),path:`/my-claims`},t[9]=b):b=t[9];let x;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(x=[g,_,y,b,{label:`My Pay Slip`,icon:(0,J.jsx)(Nu,{}),path:`/my-pay-slip`}],t[10]=x):x=t[10];let S=x,C;t[11]===i?C=t[12]:(C=(0,J.jsx)(Cd,{onToggle:d,initialOpen:i,navItems:S}),t[11]=i,t[12]=C);let w=o&&i,T;t[13]!==h||t[14]!==w?(T=(0,J.jsx)($d,{show:w,onClick:h}),t[13]=h,t[14]=w,t[15]=T):T=t[15];let E=i?`250px`:`70px`,D=i?`250px`:`70px`,O;t[16]===D?O=t[17]:(O=(0,J.jsx)(Yd,{sidebarWidth:D,onMobileMenuClick:p}),t[16]=D,t[17]=O);let k;t[18]===r?k=t[19]:(k=r&&(0,J.jsx)(Qd,{children:r}),t[18]=r,t[19]=k);let A;t[20]!==n||t[21]!==E||t[22]!==O||t[23]!==k?(A=(0,J.jsxs)(Zd,{sidebarWidth:E,children:[O,k,n]}),t[20]=n,t[21]=E,t[22]=O,t[23]=k,t[24]=A):A=t[24];let j;return t[25]!==C||t[26]!==T||t[27]!==A?(j=(0,J.jsxs)(Xd,{children:[C,T,A]}),t[25]=C,t[26]=T,t[27]=A,t[28]=j):j=t[28],j},tf=G.div`
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
`,nf=G.div`
  display: flex;
  align-items: center;
  
  ${e=>e.clickable&&`
    cursor: pointer;
  `}
`,rf=G.div`
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
`,af=G.div`
  flex: 1;
`,of=G.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,sf=G.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.5rem;
`,cf=G.div`
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
`,lf=G.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,uf=G.div`
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
`,df=G.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.black};
`,ff=G.span`
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
`,pf=G.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 1.5rem;
  
  ${e=>e.clickable&&`
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
  `}
`,mf=G.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,hf=e=>{let t=(0,yl.c)(37),{icon:n,label:r,value:i,change:a,changeType:o,color:s,sections:c,onClick:l,onSectionClick:u,onItemClick:d}=e,f=o===void 0?`increase`:o,p=s===void 0?`primary`:s,m;t[0]===c?m=t[1]:(m=c===void 0?[]:c,t[0]=c,t[1]=m);let h=m,g;t[2]===l?g=t[3]:(g=e=>{l&&(e.stopPropagation(),l())},t[2]=l,t[3]=g);let _=g,v;t[4]===u?v=t[5]:(v=(e,t,n)=>{u&&(e.stopPropagation(),u(t,n))},t[4]=u,t[5]=v);let y=v,b;t[6]===d?b=t[7]:(b=(e,t,n,r,i)=>{d&&(e.stopPropagation(),d(r))},t[6]=d,t[7]=b);let x=b,S=!!l,C=!!l,w;t[8]!==p||t[9]!==n?(w=(0,J.jsx)(rf,{color:p,children:n}),t[8]=p,t[9]=n,t[10]=w):w=t[10];let T;t[11]===r?T=t[12]:(T=(0,J.jsx)(sf,{children:r}),t[11]=r,t[12]=T);let E;t[13]===i?E=t[14]:(E=(0,J.jsx)(of,{children:i}),t[13]=i,t[14]=E);let D;t[15]!==a||t[16]!==f?(D=a&&(0,J.jsxs)(cf,{type:f,children:[f===`increase`?(0,J.jsx)(Qu,{}):(0,J.jsx)(ed,{}),a]}),t[15]=a,t[16]=f,t[17]=D):D=t[17];let O;t[18]!==T||t[19]!==E||t[20]!==D?(O=(0,J.jsxs)(af,{children:[T,E,D]}),t[18]=T,t[19]=E,t[20]=D,t[21]=O):O=t[21];let k;t[22]!==_||t[23]!==w||t[24]!==O||t[25]!==C?(k=(0,J.jsxs)(nf,{clickable:C,onClick:_,children:[w,O]}),t[22]=_,t[23]=w,t[24]=O,t[25]=C,t[26]=k):k=t[26];let A;t[27]!==x||t[28]!==y||t[29]!==d||t[30]!==u||t[31]!==h?(A=h.length!==0&&h.map((e,t)=>(0,J.jsxs)(pf,{clickable:!!u,onClick:n=>y(n,t,e),children:[e.title&&(0,J.jsx)(mf,{children:e.title}),(0,J.jsx)(lf,{children:e.items.map((n,r)=>(0,J.jsxs)(uf,{clickable:!!d,onClick:i=>x(i,t,r,n,e),color:n.status,children:[(0,J.jsx)(df,{children:n.label}),(0,J.jsx)(ff,{children:n.value})]},r))})]},t)),t[27]=x,t[28]=y,t[29]=d,t[30]=u,t[31]=h,t[32]=A):A=t[32];let j;return t[33]!==k||t[34]!==A||t[35]!==S?(j=(0,J.jsxs)(tf,{clickable:S,children:[k,A]}),t[33]=k,t[34]=A,t[35]=S,t[36]=j):j=t[36],j},gf=G.div`
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
`,_f=G.div`
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
`,vf=G.div`
  font-size: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.fontSize||`medium`;return n===`small`?`0.9rem`:n===`large`?`1.1rem`:`1rem`}};
  font-weight: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.bodyWeight||`regular`;return n===`light`?`300`:n===`medium`?`500`:`400`}};
  font-family: ${({theme:e,uiPreferences:t})=>t?.typography?.fontFamily||`Poppins`}, sans-serif;
  color: ${({theme:e})=>e.colors.textSecondary};
`,yf=G.div`
  margin-top: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`0.75rem`:n===`spacious`?`1.5rem`:`1rem`}};
  padding-top: ${({theme:e,uiPreferences:t})=>{let n=t?.layout?.density||`comfortable`;return n===`compact`?`0.75rem`:n===`spacious`?`1.5rem`:`1rem`}};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({theme:e,uiPreferences:t})=>{let n=t?.typography?.fontSize||`medium`;return n===`small`?`0.85rem`:n===`large`?`1.05rem`:`0.95rem`}};
`,bf=e=>{let t=(0,yl.c)(30),n,r,i,a,o,s,c;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7]):({title:s,children:n,footer:r,variant:c,hoverable:o,headerAction:i,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c);let l=o===void 0?!0:o,{theme:u,uiPreferences:d}=wl(),f;t[8]!==i||t[9]!==u||t[10]!==s||t[11]!==d?(f=(s||i)&&(0,J.jsxs)(_f,{theme:u,uiPreferences:d,children:[s&&(0,J.jsx)(`h3`,{children:s}),i]}),t[8]=i,t[9]=u,t[10]=s,t[11]=d,t[12]=f):f=t[12];let p;t[13]!==n||t[14]!==u||t[15]!==d?(p=(0,J.jsx)(vf,{theme:u,uiPreferences:d,children:n}),t[13]=n,t[14]=u,t[15]=d,t[16]=p):p=t[16];let m;t[17]!==r||t[18]!==u||t[19]!==d?(m=r&&(0,J.jsx)(yf,{theme:u,uiPreferences:d,children:r}),t[17]=r,t[18]=u,t[19]=d,t[20]=m):m=t[20];let h;return t[21]!==l||t[22]!==a||t[23]!==f||t[24]!==p||t[25]!==m||t[26]!==u||t[27]!==d||t[28]!==c?(h=(0,J.jsxs)(gf,{variant:c,hoverable:l,theme:u,uiPreferences:d,...a,children:[f,p,m]}),t[21]=l,t[22]=a,t[23]=f,t[24]=p,t[25]=m,t[26]=u,t[27]=d,t[28]=c,t[29]=h):h=t[29],h},xf=G.span`
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
`,Sf=e=>{let t=(0,yl.c)(8),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({children:n,variant:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=i===void 0?`primary`:i,o;return t[4]!==n||t[5]!==r||t[6]!==a?(o=(0,J.jsx)(xf,{variant:a,...r,children:n}),t[4]=n,t[5]=r,t[6]=a,t[7]=o):o=t[7],o},Cf=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wf=Cf.reduce((e,t,n)=>(e[t.toLowerCase()]=n,e),{}),Tf=(e,t=!1)=>{if(!e)return`N/A`;try{return t?new Date(e).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`}):new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})}catch{return`Invalid Date`}},Ef=e=>{if(!e)return``;if(e instanceof Date)return`${String(e.getDate()).padStart(2,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${e.getFullYear()}`;if(typeof e==`string`&&e.includes(`-`)){let[t,n,r]=e.split(`-`);return`${r}-${n}-${t}`}return``},Df=e=>e instanceof Date?`${String(e.getDate()).padStart(2,`0`)}-${Cf[e.getMonth()]}-${e.getFullYear()}`:null,Of=(e,t)=>{let n=new Date(e),r=new Date(t);return`${n.toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`})} – ${r.toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`})}`},kf=e=>new Date(e).toLocaleString(`default`,{month:`long`,year:`numeric`}),Af=e=>{if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==3)return null;let n=parseInt(t[0],10),r=t[1],i=parseInt(t[2],10),a=wf[r.toLowerCase()];return isNaN(n)||isNaN(a)||isNaN(i)?null:new Date(i,a,n,0,0,0,0)},Q=(e,t=!1)=>{if(!e)return``;let n=e;if(typeof e==`string`){e=e.replace(/\//g,`-`);let t={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},r=e.split(`-`);if(r.length===3){let[e,i,a]=r;n=t[i]===void 0?e.length===4?new Date(Number(e),Number(i)-1,Number(a)):new Date(Number(a),Number(i)-1,Number(e)):new Date(Number(a),t[i],Number(e))}else n=new Date(e)}if(!(n instanceof Date)||isNaN(n))return``;let r=String(n.getDate()).padStart(2,`0`),i=String(n.getMonth()+1).padStart(2,`0`),a=n.getFullYear();return t?`${a}-${i}-${r}`:`${r}-${i}-${a}`},jf=({type:e=`current`,mode:t=`month`,offset:n=0,weekStartsOn:r=0}={})=>{let i=new Date,a=0;e===`previous`&&(a=-1),e===`next`&&(a=1),e===`current`&&(a=0);let o=a+n,s=new Date(i),c=new Date(i);if(t===`month`)s.setMonth(i.getMonth()+o,1),c.setMonth(i.getMonth()+o+1,0);else if(t===`week`){let e=(i.getDay()-r+7)%7;s.setDate(i.getDate()-e+o*7),c=new Date(s),c.setDate(s.getDate()+6)}else if(t===`today`)s.setDate(i.getDate()+o),c=new Date(s);else throw Error(`Unsupported mode: "${t}". Use "month" or "week".`);let l=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;return{start:l(s),end:l(c)}},Mf=(e=[])=>{if(!Array.isArray(e)||e.length===0)return[];let t={};return e.forEach(e=>{if(e.activity_type===`P`){let n=`${e.id}_${e.order_item_id}`;t[n]={key:n,original_P:e,allAEntries:[]}}}),e.forEach(e=>{if(e.activity_type===`A`){let n=Number(e.ref_p_id);if(!n)return;let r=`${n}_${e.order_item_id}`;t[r]&&t[r].allAEntries.push(e)}}),Object.values(t).map(e=>{let t=e.allAEntries,n=t.length===0?null:t.reduce((e,t)=>{let n=Af(e.start_date);return Af(t.start_date)>n?t:e});return{key:e.key,original_P:e.original_P,original_A:n,allAEntries:t}})},Nf=e=>{let t=e instanceof Date?e:Af(e);return t?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`:null},Pf=({allAEntries:e})=>{let t=Nf(new Date),n=e.find(e=>Nf(e.start_date)===t);return n?n.status===`N`?{showStartBtn:!1,showCompleteBtn:!0,showUpdateBtn:!1,isCompleted:!1}:{showStartBtn:!1,showCompleteBtn:!1,showUpdateBtn:!0,isCompleted:!0}:{showStartBtn:!0,showCompleteBtn:!1,showUpdateBtn:!1,isCompleted:!1}},Ff=e=>{let t=new Date(e);return isNaN(t)?null:Df(t)},If=(e=[])=>e.reduce((e,t)=>{if(!t.start_date)return e;let n=Ff(t.start_date);return e[n]||(e[n]={date:n,section:n,remarks:t.remarks||``,effort:0,no_of_items:0,resourceList:t.resource_list}),e[n].effort+=Number(t.effort||0),e[n].no_of_items+=Number(t.no_of_items||0),e},{}),Lf=e=>{let t=e?.order_item_id??e?.original_P?.order_item_id??e?.key?.split(`_`)?.slice(1)?.join(`_`)??``;if(!t)return``;let n=String(t).split(`_`),r=n[n.length-1];return String(r).replace(/^0+/,``)},Rf=(e=[],t)=>{let n=Lf(t);return n?e.map(e=>{let t=(e?.claim_items||[]).filter(e=>String(e?.o_item_id).replace(/^0+/,``)===n);return t.length===0?null:{...e,claim_items:t}}).filter(Boolean):[]},zf=(e=[],t=[])=>{let n=Mf(e),r=t.filter(e=>e.is_active===!0),i=(e,t)=>e!=null&&t!=null&&String(e)===String(t);return n.map(e=>{let{original_P:t,original_A:n,allAEntries:a=[],key:o}=e,s=Array.isArray(t?.resource_list)&&t.resource_list.length>0,c=``,l=``,u=r.filter(e=>i(t?.id,e?.allocation_id)),d=u.length>0,f=d&&u.every(e=>e?.is_approved===!0),p=a.map(e=>e?.id).filter(Boolean),m=r.filter(e=>p.some(t=>i(t,e?.allocation_id))),h=m.length>0,g=h&&m.every(e=>e?.is_approved===!0);g?(c=`Actual Approved`,l=`AA`):h?(c=`Actual Submitted`,l=`AS`):n?.status===`N`||n?.status===`P`?(c=`In Progress`,l=`P`):f?(c=`Plan Approved`,l=`PA`):d?(c=`Plan Submitted`,l=`PS`):!s||!n?(c=`Not Planned`,l=`NS`):(c=`Completed`,l=`C`);let _=l===`C`?`Completed`:`In Progress`,v=Pf({allAEntries:a}),y=If(a);return{key:o,p_id:t?.id??null,a_id:n?.id??null,employee_name:t?.employee_name??``,emp_id:t?.emp_id??``,customer_name:t?.customer_name??``,product_name:t?.product_name??``,project_name:t?.project_name??``,activity_name:t?.activity_name??``,order_item_id:t?.order_item_id??``,order_item_key:t?.order_item_key??``,planned_start_date:t?.start_date||null,planned_end_date:t?.end_date||null,planned_start_time:t?.start_time||null,planned_end_time:t?.end_time||null,actual_start_date:n?.start_date||null,actual_end_date:n?.end_date||null,is_file_applicable:t?.is_file_applicable??!1,audit_type:t?.audit_type??``,store_name:t?.store_name??``,store_remarks:t?.store_remarks??``,complete:_,is_complete:l===`C`,statusDisplay:c,activityStatus:l,isPlanSubmitted:d,isPlanApproved:f,isActualSubmitted:h,isActualApproved:g,original_P:t,original_A:n,allAEntries:a,day_logs:y,ui:v}})},Bf=e=>{switch(e){case`P`:return`info`;case`NA`:return`error`;case`NS`:return`error`;case`C`:return`success`;case`AA`:return`success`;case`AS`:return`success`;case`PS`:return`info`;default:return`default`}},Vf=(e,t)=>{if(!e||!t)return[];let n=[],[r,i,a]=e.split(`-`).map(Number),[o,s,c]=t.split(`-`).map(Number),l=new Date(r,i-1,a),u=new Date(o,s-1,c);for(;l<=u;)n.push(Df(l)),l.setDate(l.getDate()+1);return n},Hf=e=>{let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r)},Uf=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,Wf=(e,t)=>{if(!e||!t)return[];let n=[],r=Hf(e),i=Hf(t);for(;r<=i;)n.push(Uf(r)),r=new Date(r.getFullYear(),r.getMonth(),r.getDate()+1);return n},Gf=(e,t)=>{let n=Hf(e);return n.setDate(n.getDate()+t),Uf(n)},Kf=(e,t)=>(Hf(t)-Hf(e))/(1e3*60*60*24)==1,qf=e=>{let t={};return e.forEach(e=>{t[e.emp_id]||(t[e.emp_id]={}),Wf(e.start_date,e.end_date).forEach(n=>{t[e.emp_id][n]=e.id})}),t},Jf=({empId:e,activeDates:t,ownershipMap:n,employeeMeta:r,existingRowsForEmp:i,dateEmpTypes:a={},dateEmpRates:o={}})=>{let s=[...new Set(t)].sort();if(s.length===0)return[];let c=t=>n[e]?.[t]??null,l=e=>{if(a[e])return a[e];let t=c(e);if(t!=null&&i){let e=i.find(e=>e.id===t);if(e?.emp_type)return e.emp_type}return r.emp_type||`E`},u=(e,t)=>o[e]??t??r.contract_rate??0,d={};i.forEach(e=>{e.id!=null&&(d[e.id]=e)});let f=i[0]||r,p=[],m=s[0],h=c(m),g=l(m),_=m,v=(t,n,i,a)=>{let o=i!=null&&d[i]||f,s=o.contract_rate?o.contract_rate:r.contract_rate;p.push({rowKey:i==null?crypto.randomUUID():`existing_${i}`,id:i,emp_id:e,employee_name:o.employee_name||r.employee_name,emp_type:a||o.emp_type||r.emp_type,remarks:o.remarks||``,contract_rate:u(t,s),start_date:t,end_date:n,is_approved:!!o.is_approved})};for(let e=1;e<s.length;e++){let t=s[e],n=c(t),r=l(t);if(Kf(_,t)&&n===h&&r===g){_=t;continue}v(m,_,h,g),m=t,h=n,g=r,_=t}return v(m,_,h,g),p},Yf=(e,t,n)=>{if(e.start_date===e.end_date&&e.start_date===t)return n===`DELETE`?[]:[{...e,__isEditTarget:!0}];let r=[],i=t>e.start_date,a=t<e.end_date;return i&&r.push({...e,id:e.id,rowKey:e.id==null?crypto.randomUUID():`existing_${e.id}`,end_date:Gf(t,-1)}),n===`EDIT`&&r.push({...e,id:null,rowKey:crypto.randomUUID(),start_date:t,end_date:t,__isEditTarget:!0}),a&&r.push({...e,id:null,rowKey:crypto.randomUUID(),start_date:Gf(t,1)}),r},Xf=e=>{let t={};e.forEach(e=>{t[e.emp_id]||(t[e.emp_id]=[]),t[e.emp_id].push(e)});let n=[];return Object.values(t).forEach(e=>{let t=[...e].sort((e,t)=>e.start_date.localeCompare(t.start_date)),r=null;t.forEach(e=>{let t=Number(r?.contract_rate??0)===Number(e.contract_rate??0);if(r&&Kf(r.end_date,e.start_date)&&r.emp_type===e.emp_type&&(r.remarks||``)===(e.remarks||``)&&t&&(r.id==null||e.id==null||r.id===e.id)){let t=r.id??e.id;r={...r,id:t,end_date:e.end_date,rowKey:t==null?r.rowKey:`existing_${t}`}}else r&&n.push(r),r={...e}}),r&&n.push(r)}),n},Zf=(e,t)=>{if(e.id==null)return`ADD`;let n=t[e.id];return n?e.start_date!==n.start_date||e.end_date!==n.end_date||e.emp_type!==n.emp_type||(e.remarks||``)!==(n.remarks||``)||Number(e.contract_rate??0)!==Number(n.contract_rate??0)?`UPDATE`:`ORIGINAL`:`ADD`},Qf=(e,t)=>{let n={};t.forEach(e=>{n[e.id]=e});let r={};t.forEach(e=>{r[`${e.emp_id}|${e.start_date}|${e.end_date}`]=e});let i=[],a=[],o=[],s=new Set;return e.forEach(e=>{let t=Number.isFinite(Number(e.contract_rate))?Number(e.contract_rate):0,c=e.id;if(c==null){let t=r[`${e.emp_id}|${e.start_date}|${e.end_date}`];t&&!s.has(t.id)&&(c=t.id)}if(c==null){i.push({emp_id:e.emp_id,emp_type:e.emp_type,start_date:Q(e.start_date),end_date:Q(e.end_date),remarks:e.remarks||``,contract_rate:t});return}s.add(c);let l=n[c];l&&(e.start_date!==l.start_date||e.end_date!==l.end_date||e.emp_type!==l.emp_type||(e.remarks||``)!==(l.remarks||``)||Number(e.contract_rate??0)!==Number(l.contract_rate??0)?a.push({id:c,emp_id:e.emp_id,emp_type:e.emp_type,start_date:Q(e.start_date),end_date:Q(e.end_date),remarks:e.remarks||``,contract_rate:t,is_updated:!0}):o.push({id:c,emp_id:e.emp_id,emp_type:e.emp_type}))}),{addPayload:i,updatePayload:a,deletePayload:t.filter(e=>!s.has(e.id)).map(e=>({id:e.id,is_deleted:!0,emp_type:e.emp_type})),unchangedPayload:o}},$f=(e,t,{format:n=!1,maxDays:r=366}={})=>{let i=[],a=Q(e,!0),o=Q(t,!0);if(!a||!o)return i;let[s,c,l]=a.split(`-`).map(Number),[u,d,f]=o.split(`-`).map(Number),p=new Date(s,c-1,l),m=new Date(u,d-1,f),h=0;for(;p<=m&&h<r;)i.push(n?Df(p):new Date(p)),p.setDate(p.getDate()+1),h++;return i},ep=e=>{let t=(0,yl.c)(14),{activityStart:n,activityEnd:r,allocations:i,originalById:a}=e,o;t[0]===i?o=t[1]:(o=i===void 0?[]:i,t[0]=i,t[1]=o);let s=o,c;t[2]===a?c=t[3]:(c=a===void 0?{}:a,t[2]=a,t[3]=c);let l=c,u;t[4]!==r||t[5]!==n?(u=$f(n,r),t[4]=r,t[5]=n,t[6]=u):u=t[6];let d=u,f;t[7]!==d||t[8]!==s||t[9]!==l?(f={},d.forEach(e=>{f[Df(e)]=[]}),s.forEach(e=>{$f(e.start_date,e.end_date,{format:!0}).forEach(t=>{f[t]&&f[t].push({...e,date:t,status:Zf(e,l)})})}),t[7]=d,t[8]=s,t[9]=l,t[10]=f):f=t[10];let p=f,m;return t[11]!==d||t[12]!==p?(m={activityDates:d,dayWindow:d,dateWiseAssignments:p},t[11]=d,t[12]=p,t[13]=m):m=t[13],m},tp=(e=[])=>{if(!e.length)return{activityStatus:`NS`,statusDisplay:`Not Planned`};let t=e.map(e=>e?.activityStatus);return t.includes(`NS`)?{activityStatus:`NS`,statusDisplay:`Not Planned`}:t.includes(`PS`)?{activityStatus:`PS`,statusDisplay:`Plan Submitted`}:t.includes(`PA`)?{activityStatus:`PA`,statusDisplay:`Plan Approved`}:t.includes(`P`)?{activityStatus:`P`,statusDisplay:`In Progress`}:t.includes(`AS`)?{activityStatus:`AS`,statusDisplay:`Actual Submitted`}:t.includes(`AA`)?{activityStatus:`AA`,statusDisplay:`Actual Approved`}:t.every(e=>e===`C`)?{activityStatus:`C`,statusDisplay:`Completed`}:{activityStatus:`NS`,statusDisplay:`Not Planned`}},np=(e=[],t=[])=>{let n=e.reduce((e,t)=>{let n=t.order_item_id;return e[n]||(e[n]={order_item_id:n,order_item_key:t.order_item_key||`--`,product_name:t.product_name||`--`,customer_name:t.customer_name||`--`,store_name:``,audit_type:``,planned_start_date:t.planned_start_date,planned_end_date:t.planned_end_date,total_planned_item:0,grouped_data:[],claims:[],resource_planned:[]}),e[n].total_planned_item+=1,e[n].store_name+=` ${t.store_name||``}`,e[n].audit_type+=` ${t.audit_type||``}`,t.planned_start_date&&(!e[n].planned_start_date||new Date(t.planned_start_date)<new Date(e[n].planned_start_date))&&(e[n].planned_start_date=t.planned_start_date),t.planned_end_date&&(!e[n].planned_end_date||new Date(t.planned_end_date)>new Date(e[n].planned_end_date))&&(e[n].planned_end_date=t.planned_end_date),t.claims&&Array.isArray(t.claims)&&t.claims.forEach(t=>{e[n].claims.some(e=>e.master_claim_id===t.master_claim_id)||e[n].claims.push(t)}),e[n].grouped_data.push(t),e},{});return Object.values(n).map(e=>{let n=tp(e.grouped_data,t),r=(t||[]).filter(t=>rp(t.order_item_id)===rp(e.order_item_id));return{...e,...n,resource_planned:r}})},rp=(e,t=!1)=>{if(!e)return``;let n=String(e).replace(/\D/g,``);return n?t?n:parseInt(n,10).toString():``},ip=e=>`₹${Number(e||0).toLocaleString(`en-IN`)}`;function ap(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function op(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)}function sp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`},child:[]}]})(e)}function cp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)}function lp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function up(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)}function dp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`8.5`,r:`1.5`},child:[]},{tag:`polyline`,attr:{points:`21 15 16 10 5 21`},child:[]}]})(e)}function fp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`8`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`17`,x2:`8`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`10 9 9 9 8 9`},child:[]}]})(e)}function pp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)}function mp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`},child:[]},{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`14`,x2:`21`,y2:`3`},child:[]}]})(e)}function hp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},child:[]},{tag:`polyline`,attr:{points:`22 4 12 14.01 9 11.01`},child:[]}]})(e)}function gp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`2`,x2:`16`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`2`,x2:`8`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`10`,x2:`21`,y2:`10`},child:[]}]})(e)}function _p(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`},child:[]}]})(e)}function vp(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`},child:[]}]})(e)}function yp(e){return Y({tag:`svg`,attr:{fill:`none`,viewBox:`0 0 24 24`,strokeWidth:`2`,stroke:`currentColor`,"aria-hidden":`true`},child:[{tag:`path`,attr:{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z`},child:[]}]})(e)}var bp=Di`from { opacity: 0; } to { opacity: 1; }`,xp=Di`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }`,Sp=G.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 18, 50, 0.5);
  backdrop-filter: blur(3px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${X.spacing.md};
  animation: ${bp} 0.2s ease;
`,Cp=G.div`
  background: ${X.colors.card};
  border-radius: ${X.borderRadius.xl};
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${X.shadows.xl};
  animation: ${xp} 0.25s ease;
  font-family: ${X.fonts.body};

  @media (max-width: ${X.breakpoints.sm}) {
    max-height: 95vh;
    border-radius: ${X.borderRadius.lg};
  }
`,wp=G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${X.spacing.lg} ${X.spacing.xl};
  border-bottom: 1px solid ${X.colors.border};
  position: sticky;
  top: 0;
  background: ${X.colors.card};
  z-index: 1;
  border-radius: ${X.borderRadius.xl} ${X.borderRadius.xl} 0 0;
`,Tp=G.div`
  display: flex;
  align-items: center;
  gap: ${X.spacing.md};
`;G.div`
  width: 42px;
  height: 42px;
  border-radius: ${X.borderRadius.lg};
  background: linear-gradient(135deg, ${X.colors.primary}, ${X.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${X.fontSizes.md};
  font-weight: 700;
  flex-shrink: 0;
`;var Ep=G.div``,Dp=G.h2`
  margin: 0;
  font-size: ${X.fontSizes.lg};
  font-weight: 700;
  color: ${X.colors.text};
  line-height: 1.2;
`,Op=G.p`
  margin: 0;
  font-size: ${X.fontSizes.xs};
  color: ${X.colors.textLight};
`,kp=G.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: ${X.borderRadius.lg};
  background: ${X.colors.backgroundAlt};
  color: ${X.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;
  transition: all ${X.transitions.fast};

  &:hover {
    background: ${X.colors.border};
    color: ${X.colors.text};
  }
`,Ap=G.div`
  padding: ${X.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${X.spacing.lg};
`,jp=G.div`
  font-size: ${X.fontSizes.xs};
  font-weight: 600;
  color: ${X.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: ${X.spacing.sm};
  padding-bottom: ${X.spacing.xs};
  border-bottom: 1px solid ${X.colors.border};
`,Mp=G.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${X.spacing.sm};

  @media (max-width: ${X.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`,Np=G.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: ${X.spacing.sm} ${X.spacing.md};

  background: ${({is_verified:e,theme:t})=>e===!0?`${t.colors.success}20`:e===!1?`${t.colors.error}20`:t.colors.background};

  border-radius: ${X.borderRadius.lg};

  border: 1px solid ${({is_verified:e,theme:t})=>e===!0?`${t.colors.success}40`:e===!1?`${t.colors.error}40`:t.colors.border};

  ${({$full:e})=>e&&`grid-column: 1 / -1;`}
`,Pp=G.div`
  width: 28px;
  height: 28px;
  border-radius: ${X.borderRadius.md};
  background: ${({is_verified:e,theme:t})=>e===!0?t.colors.success:e===!1?t.colors.error:t.colors.primaryLight};
  /* color: ${X.colors.primary}; */
  color: ${({is_verified:e,theme:t})=>e===!0||e===!1?t.colors.card:t.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
`,Fp=G.div`
  min-width: 0;
  flex: 1;
`,Ip=G.div`
  font-size: ${X.fontSizes.xs};
  color: ${X.colors.textLight};
  font-weight: 500;
  margin-bottom: 2px;
`,Lp=G.div`
  font-size: ${X.fontSizes.sm};
  color: ${({$empty:e})=>e?X.colors.border:X.colors.text};
  font-weight: 600;
  word-break: break-word;
`,Rp=G.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${X.borderRadius.xl};
  font-size: ${X.fontSizes.xs};
  font-weight: 600;
  background: ${({$verified:e,$rejected:t})=>t?`#FFE6E6`:e?`#E6F9F0`:`#FFF4E5`};
  color: ${({$verified:e,$rejected:t,theme:n})=>t?n.colors.error:e?n.colors.success:`#E67E00`};
`,zp=G.div`
  padding: ${X.spacing.md} ${X.spacing.xl};
  border-top: 1px solid ${X.colors.border};
  display: flex;
  justify-content: flex-end;
`,Bp=G.button`
  padding: 9px ${X.spacing.xl};
  border-radius: ${X.borderRadius.lg};
  border: 1.5px solid ${X.colors.border};
  background: transparent;
  color: ${X.colors.textLight};
  font-family: ${X.fonts.body};
  font-size: ${X.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all ${X.transitions.fast};

  &:hover {
    border-color: ${X.colors.text};
    color: ${X.colors.text};
  }
`,Vp=G.div`
  margin-top: ${X.spacing.sm};
  border-radius: ${X.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${X.colors.border};
`,Hp=G.img`
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  aspect-ration: 1:1;
  display: block;
`,Up=G.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px ${X.spacing.md};
  background: ${X.colors.primaryLight};
  color: ${X.colors.primary};
  font-size: ${X.fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  border-radius: ${X.borderRadius.lg};
  transition: background ${X.transitions.fast};

  &:hover {
    background: ${X.colors.primary};
    color: white;
  }

  svg { flex-shrink: 0; }
  span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`,Wp=G.div`
  font-size: ${X.fontSizes.sm};
  color: ${X.colors.border};
  font-weight: 600;
`,Gp=e=>e==null||e===``?`—`:String(e),Kp=e=>e==null||e===``,qp=e=>{let t=(0,yl.c)(157),{employee:n,onClose:r}=e;if(!n)return null;let i=Jp,a=Yp,o;t[0]===n.ref_govt_id_number?o=t[1]:(o=a(n.ref_govt_id_number),t[0]=n.ref_govt_id_number,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>e.target===e.currentTarget&&r(),t[2]=r,t[3]=c);let l;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(l={width:`42px`,height:`42px`,borderRadius:`50%`,border:`2px solid rgb(245, 247, 214)`},t[4]=l):l=t[4];let u;t[5]===n.image?u=t[6]:(u=(0,J.jsx)(`img`,{src:n.image,alt:`Profile`,style:l}),t[5]=n.image,t[6]=u);let d;t[7]===n.name?d=t[8]:(d=(0,J.jsx)(Dp,{children:n.name}),t[7]=n.name,t[8]=d);let f;t[9]===n.emp_id?f=t[10]:(f=(0,J.jsx)(Op,{children:n.emp_id}),t[9]=n.emp_id,t[10]=f);let p;t[11]!==d||t[12]!==f?(p=(0,J.jsxs)(Ep,{children:[d,f]}),t[11]=d,t[12]=f,t[13]=p):p=t[13];let m;t[14]!==u||t[15]!==p?(m=(0,J.jsxs)(Tp,{children:[u,p]}),t[14]=u,t[15]=p,t[16]=m):m=t[16];let h;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,J.jsx)(ap,{}),t[17]=h):h=t[17];let g;t[18]===r?g=t[19]:(g=(0,J.jsx)(kp,{onClick:r,children:h}),t[18]=r,t[19]=g);let _;t[20]!==g||t[21]!==m?(_=(0,J.jsxs)(wp,{children:[m,g]}),t[20]=g,t[21]=m,t[22]=_):_=t[22];let v;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,J.jsx)(jp,{children:`Personal Information`}),t[23]=v):v=t[23];let y;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,J.jsx)(Pp,{children:(0,J.jsx)(op,{})}),t[24]=y):y=t[24];let b;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,J.jsx)(Ip,{children:`Full Name`}),t[25]=b):b=t[25];let x;t[26]===n.name?x=t[27]:(x=Gp(n.name),t[26]=n.name,t[27]=x);let S;t[28]===x?S=t[29]:(S=(0,J.jsxs)(Np,{children:[y,(0,J.jsxs)(Fp,{children:[b,(0,J.jsx)(Lp,{children:x})]})]}),t[28]=x,t[29]=S);let C;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,J.jsx)(Pp,{children:(0,J.jsx)(_p,{})}),t[30]=C):C=t[30];let w;t[31]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,J.jsx)(Ip,{children:`Employee ID`}),t[31]=w):w=t[31];let T;t[32]===n.additional_ref_number?T=t[33]:(T=Gp(n.additional_ref_number),t[32]=n.additional_ref_number,t[33]=T);let E;t[34]===T?E=t[35]:(E=(0,J.jsxs)(Np,{children:[C,(0,J.jsxs)(Fp,{children:[w,(0,J.jsx)(Lp,{children:T})]})]}),t[34]=T,t[35]=E);let D;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,J.jsx)(Pp,{children:(0,J.jsx)(op,{})}),t[36]=D):D=t[36];let O;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,J.jsx)(Ip,{children:`Gender`}),t[37]=O):O=t[37];let k;t[38]===n.gender?k=t[39]:(k=Kp(n.gender),t[38]=n.gender,t[39]=k);let A;t[40]===n.gender?A=t[41]:(A=n.gender===`M`?`Male`:n.gender===`F`?`Female`:Gp(n.gender),t[40]=n.gender,t[41]=A);let j;t[42]!==k||t[43]!==A?(j=(0,J.jsxs)(Np,{children:[D,(0,J.jsxs)(Fp,{children:[O,(0,J.jsx)(Lp,{$empty:k,children:A})]})]}),t[42]=k,t[43]=A,t[44]=j):j=t[44];let M;t[45]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,J.jsx)(Pp,{children:(0,J.jsx)(gp,{})}),t[45]=M):M=t[45];let N;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,J.jsx)(Ip,{children:`Date of Birth`}),t[46]=N):N=t[46];let P;t[47]===n.dob?P=t[48]:(P=Kp(n.dob),t[47]=n.dob,t[48]=P);let F;t[49]===n.dob?F=t[50]:(F=Gp(n.dob),t[49]=n.dob,t[50]=F);let I;t[51]!==P||t[52]!==F?(I=(0,J.jsxs)(Np,{children:[M,(0,J.jsxs)(Fp,{children:[N,(0,J.jsx)(Lp,{$empty:P,children:F})]})]}),t[51]=P,t[52]=F,t[53]=I):I=t[53];let L;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(L=(0,J.jsx)(Pp,{children:(0,J.jsx)(_p,{})}),t[54]=L):L=t[54];let R;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(R=(0,J.jsx)(Ip,{children:`Grade Level`}),t[55]=R):R=t[55];let z;t[56]===n.grade_level?z=t[57]:(z=Kp(n.grade_level),t[56]=n.grade_level,t[57]=z);let ee=n.grade_level<=1?`Executive`:`Team Lead`,B;t[58]!==z||t[59]!==ee?(B=(0,J.jsxs)(Np,{children:[L,(0,J.jsxs)(Fp,{children:[R,(0,J.jsx)(Lp,{$empty:z,children:ee})]})]}),t[58]=z,t[59]=ee,t[60]=B):B=t[60];let V;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,J.jsx)(Pp,{children:(0,J.jsx)(sp,{})}),t[61]=V):V=t[61];let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsx)(Ip,{children:`Verification Status`}),t[62]=H):H=t[62];let te;t[63]!==n.is_rejected||t[64]!==n.is_verified?(te=n.is_rejected?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(td,{}),`Rejected`]}):n.is_verified?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(hp,{}),` Verified`]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vp,{}),` Pending`]}),t[63]=n.is_rejected,t[64]=n.is_verified,t[65]=te):te=t[65];let U;t[66]!==n.is_rejected||t[67]!==n.is_verified||t[68]!==te?(U=(0,J.jsxs)(Np,{children:[V,(0,J.jsxs)(Fp,{children:[H,(0,J.jsx)(Rp,{$verified:n.is_verified,$rejected:n.is_rejected,children:te})]})]}),t[66]=n.is_rejected,t[67]=n.is_verified,t[68]=te,t[69]=U):U=t[69];let W;t[70]!==S||t[71]!==E||t[72]!==j||t[73]!==I||t[74]!==B||t[75]!==U?(W=(0,J.jsxs)(`div`,{children:[v,(0,J.jsxs)(Mp,{children:[S,E,j,I,B,U]})]}),t[70]=S,t[71]=E,t[72]=j,t[73]=I,t[74]=B,t[75]=U,t[76]=W):W=t[76];let ne;t[77]!==n.is_rejected||t[78]!==n.is_verified||t[79]!==n.prior_experience?(ne=(n.is_verified||n.is_rejected)&&(0,J.jsxs)(`div`,{children:[(0,J.jsx)(jp,{children:`Finance Team Remark`}),(0,J.jsx)(Mp,{children:(0,J.jsxs)(Np,{$full:!0,is_verified:n.is_verified,children:[(0,J.jsx)(Pp,{is_verified:n.is_verified,children:(0,J.jsx)(yp,{})}),(0,J.jsxs)(Fp,{children:[(0,J.jsx)(Ip,{children:n.is_verified?`Verify Remark`:`Reject Remark`}),(0,J.jsx)(Lp,{$empty:Kp((n.prior_experience,n.prior_experience)),children:(n.prior_experience,Gp(n.prior_experience||`--`))})]})]})})]}),t[77]=n.is_rejected,t[78]=n.is_verified,t[79]=n.prior_experience,t[80]=ne):ne=t[80];let re;t[81]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,J.jsx)(jp,{children:`Contact Details`}),t[81]=re):re=t[81];let ie;t[82]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,J.jsx)(Pp,{children:(0,J.jsx)(cp,{})}),t[82]=ie):ie=t[82];let ae;t[83]===Symbol.for(`react.memo_cache_sentinel`)?(ae=(0,J.jsx)(Ip,{children:`Mobile Number`}),t[83]=ae):ae=t[83];let oe;t[84]===n.mobile_number?oe=t[85]:(oe=Kp(n.mobile_number),t[84]=n.mobile_number,t[85]=oe);let se;t[86]===n.mobile_number?se=t[87]:(se=Gp(n.mobile_number),t[86]=n.mobile_number,t[87]=se);let ce;t[88]!==oe||t[89]!==se?(ce=(0,J.jsxs)(Np,{children:[ie,(0,J.jsxs)(Fp,{children:[ae,(0,J.jsx)(Lp,{$empty:oe,children:se})]})]}),t[88]=oe,t[89]=se,t[90]=ce):ce=t[90];let le;t[91]===Symbol.for(`react.memo_cache_sentinel`)?(le=(0,J.jsx)(Pp,{children:(0,J.jsx)(up,{})}),t[91]=le):le=t[91];let ue;t[92]===Symbol.for(`react.memo_cache_sentinel`)?(ue=(0,J.jsx)(Ip,{children:`Email ID`}),t[92]=ue):ue=t[92];let de;t[93]===n.email_id?de=t[94]:(de=Kp(n.email_id),t[93]=n.email_id,t[94]=de);let fe;t[95]===n.email_id?fe=t[96]:(fe=Gp(n.email_id),t[95]=n.email_id,t[96]=fe);let pe;t[97]!==de||t[98]!==fe?(pe=(0,J.jsxs)(Np,{children:[le,(0,J.jsxs)(Fp,{children:[ue,(0,J.jsx)(Lp,{$empty:de,children:fe})]})]}),t[97]=de,t[98]=fe,t[99]=pe):pe=t[99];let me;t[100]!==ce||t[101]!==pe?(me=(0,J.jsxs)(`div`,{children:[re,(0,J.jsxs)(Mp,{children:[ce,pe]})]}),t[100]=ce,t[101]=pe,t[102]=me):me=t[102];let he;t[103]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,J.jsx)(jp,{children:`Identity`}),t[103]=he):he=t[103];let ge;t[104]===Symbol.for(`react.memo_cache_sentinel`)?(ge=(0,J.jsx)(Pp,{children:(0,J.jsx)(fp,{})}),t[104]=ge):ge=t[104];let _e;t[105]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,J.jsx)(Ip,{children:`Govt. ID Type`}),t[105]=_e):_e=t[105];let ve;t[106]===s.typeName?ve=t[107]:(ve=(0,J.jsxs)(Np,{children:[ge,(0,J.jsxs)(Fp,{children:[_e,(0,J.jsx)(Lp,{children:s.typeName})]})]}),t[106]=s.typeName,t[107]=ve);let ye;t[108]===Symbol.for(`react.memo_cache_sentinel`)?(ye=(0,J.jsx)(Pp,{children:(0,J.jsx)(fp,{})}),t[108]=ye):ye=t[108];let be;t[109]===Symbol.for(`react.memo_cache_sentinel`)?(be=(0,J.jsx)(Ip,{children:`Govt. ID Number`}),t[109]=be):be=t[109];let xe;t[110]===s.number?xe=t[111]:(xe=(0,J.jsxs)(Np,{children:[ye,(0,J.jsxs)(Fp,{children:[be,(0,J.jsx)(Lp,{children:s.number})]})]}),t[110]=s.number,t[111]=xe);let Se;t[112]===Symbol.for(`react.memo_cache_sentinel`)?(Se=(0,J.jsx)(Pp,{children:(0,J.jsx)(dp,{})}),t[112]=Se):Se=t[112];let Ce;t[113]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=(0,J.jsx)(Ip,{children:`Uploaded Document`}),t[113]=Ce):Ce=t[113];let we;t[114]===n.emp_file_1?we=t[115]:(we=(0,J.jsxs)(Np,{$full:!0,children:[Se,(0,J.jsxs)(Fp,{children:[Ce,Kp(n.emp_file_1)?(0,J.jsx)(Wp,{children:`—`}):i(n.emp_file_1)?(0,J.jsx)(Vp,{children:(0,J.jsx)(Hp,{src:n.emp_file_1,alt:`ID Document`})}):(0,J.jsxs)(Up,{href:n.emp_file_1,target:`_blank`,rel:`noopener noreferrer`,children:[(0,J.jsx)(pp,{}),(0,J.jsx)(`span`,{children:`View Document`}),(0,J.jsx)(mp,{})]})]})]}),t[114]=n.emp_file_1,t[115]=we);let Te;t[116]!==ve||t[117]!==xe||t[118]!==we?(Te=(0,J.jsxs)(`div`,{children:[he,(0,J.jsxs)(Mp,{children:[ve,xe,we]})]}),t[116]=ve,t[117]=xe,t[118]=we,t[119]=Te):Te=t[119];let Ee;t[120]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,J.jsx)(jp,{children:`Address`}),t[120]=Ee):Ee=t[120];let De;t[121]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,J.jsx)(Pp,{children:(0,J.jsx)(lp,{})}),t[121]=De):De=t[121];let Oe;t[122]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,J.jsx)(Ip,{children:`Address Line 1`}),t[122]=Oe):Oe=t[122];let ke;t[123]===n.address_line_1?ke=t[124]:(ke=Kp(n.address_line_1),t[123]=n.address_line_1,t[124]=ke);let Ae;t[125]===n.address_line_1?Ae=t[126]:(Ae=Gp(n.address_line_1),t[125]=n.address_line_1,t[126]=Ae);let je;t[127]!==ke||t[128]!==Ae?(je=(0,J.jsxs)(Np,{$full:!0,children:[De,(0,J.jsxs)(Fp,{children:[Oe,(0,J.jsx)(Lp,{$empty:ke,children:Ae})]})]}),t[127]=ke,t[128]=Ae,t[129]=je):je=t[129];let Me;t[130]===Symbol.for(`react.memo_cache_sentinel`)?(Me=(0,J.jsx)(Pp,{children:(0,J.jsx)(lp,{})}),t[130]=Me):Me=t[130];let Ne;t[131]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,J.jsx)(Ip,{children:`Address Line 2`}),t[131]=Ne):Ne=t[131];let Pe;t[132]===n.address_line_2?Pe=t[133]:(Pe=Kp(n.address_line_2),t[132]=n.address_line_2,t[133]=Pe);let Fe;t[134]===n.address_line_2?Fe=t[135]:(Fe=Gp(n.address_line_2),t[134]=n.address_line_2,t[135]=Fe);let Ie;t[136]!==Pe||t[137]!==Fe?(Ie=(0,J.jsxs)(Np,{$full:!0,children:[Me,(0,J.jsxs)(Fp,{children:[Ne,(0,J.jsx)(Lp,{$empty:Pe,children:Fe})]})]}),t[136]=Pe,t[137]=Fe,t[138]=Ie):Ie=t[138];let Le;t[139]!==je||t[140]!==Ie?(Le=(0,J.jsxs)(`div`,{children:[Ee,(0,J.jsxs)(Mp,{children:[je,Ie]})]}),t[139]=je,t[140]=Ie,t[141]=Le):Le=t[141];let Re;t[142]!==W||t[143]!==ne||t[144]!==me||t[145]!==Te||t[146]!==Le?(Re=(0,J.jsxs)(Ap,{children:[W,ne,me,Te,Le]}),t[142]=W,t[143]=ne,t[144]=me,t[145]=Te,t[146]=Le,t[147]=Re):Re=t[147];let ze;t[148]===r?ze=t[149]:(ze=(0,J.jsx)(zp,{children:(0,J.jsx)(Bp,{onClick:r,children:`Close`})}),t[148]=r,t[149]=ze);let Be;t[150]!==_||t[151]!==Re||t[152]!==ze?(Be=(0,J.jsxs)(Cp,{children:[_,Re,ze]}),t[150]=_,t[151]=Re,t[152]=ze,t[153]=Be):Be=t[153];let Ve;return t[154]!==c||t[155]!==Be?(Ve=(0,J.jsx)(Sp,{onClick:c,children:Be}),t[154]=c,t[155]=Be,t[156]=Ve):Ve=t[156],Ve};function Jp(e){return/\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(e)}function Yp(e){if(!e)return{typeName:`--`,number:`--`};if(e.includes(`^`)){let t=e.split(`^`),n=t[0],r=t[1]||`--`;return{typeName:{A:`Aadhar Card`,P:`Pan Card`,D:`Driving License`}[n]||`--`,number:r}}return{typeName:`--`,number:e}}var Xp=G.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: 1.5rem;
  overflow-x: auto;
`,Zp=G.button`
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
`,Qp=e=>{let t=(0,yl.c)(9),{tabs:n,activeTab:r,setActiveTab:i}=e,a;if(t[0]!==r||t[1]!==i||t[2]!==n){let e;t[4]!==r||t[5]!==i?(e=e=>(0,J.jsx)(Zp,{active:r===e.key,onClick:()=>i(e.key),children:e.label},e.key),t[4]=r,t[5]=i,t[6]=e):e=t[6],a=n.map(e),t[0]=r,t[1]=i,t[2]=n,t[3]=a}else a=t[3];let o;return t[7]===a?o=t[8]:(o=(0,J.jsx)(Xp,{children:a}),t[7]=a,t[8]=o),o},$p=G.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 1rem; backdrop-filter: blur(4px);
`,em=G.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px; width: 100%; max-width: 750px;
  max-height: 95vh; display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
`,tm=G.div`
  padding: 1.25rem 1.5rem; background: ${({theme:e})=>e.colors.primaryLight};
  display: flex; justify-content: space-between; align-items: center;
  border-radius: 16px 16px 0 0;
`,nm=G.h2`
  margin: 0; font-size: 1.35rem; color: ${({theme:e})=>e.colors.primary}; font-weight: 600;
`,rm=G.button`
  background: white; border: none; width: 32px; height: 32px; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s;

  &:hover { color: ${({theme:e})=>e.colors.error}; transform: rotate(90deg); }
`,im=G.div`
  padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: ${({theme:e})=>e.colors.backgroundAlt}; border-radius: 10px; }
  &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.primary}; border-radius: 10px; }
`,am=G.div`
  padding: 1rem 1.5rem; border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex; justify-content: flex-end; gap: 0.75rem; flex-shrink: 0;
  background: ${({theme:e})=>e.colors.background}; border-radius: 0 0 16px 16px;

  @media (max-width: 480px) {
    flex-direction: column; button { width: 100%; }
  }
`,om=G.div` margin-bottom: 1rem; `,sm=G.label`
  display: flex; align-items: center; gap: 6px;
  font-weight: 600; font-size: 0.85rem; margin-bottom: 0.4rem;
  color: ${({theme:e})=>e.colors.text};
`,cm=G.span` color: ${({theme:e})=>e.colors.error}; `,lm=G.input`
  width: 100%; padding: 10px 12px; border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px; font-size: 0.95rem; transition: all 0.3s;

  &:focus {
    outline: none; border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,um=G.select`
  width: 100%; padding: 0.75rem; border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px; background: white;

  &:focus {
    outline: none; border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,dm=G.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,fm=G.div`
  border: 2px dashed ${({theme:e})=>e.colors.border}; border-radius: 8px;
  padding: 0.75rem; cursor: pointer; transition: all 0.2s;
  background: ${({theme:e})=>e.colors.background};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primaryLight}22;
  }
`,pm=G.div` display: flex; align-items: center; gap: 0.75rem; `,mm=G.div`
  font-size: 1.25rem; color: ${({theme:e})=>e.colors.primary};
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; background: ${({theme:e})=>e.colors.primaryLight};
  border-radius: 8px; flex-shrink: 0;
`,hm=G.div`
  color: ${({theme:e})=>e.colors.text}; font-size: 0.85rem; font-weight: 500;
`,gm=G.div`
  font-size: 0.72rem; color: ${({theme:e})=>e.colors.textLight};
`,_m=G.div`
  display: flex; align-items: center; gap: 0.5rem;
  background: ${({theme:e})=>e.colors.backgroundAlt}; padding: 0.5rem 0.75rem;
  border-radius: 8px; margin-top: 0.5rem; border: 1px solid ${({theme:e})=>e.colors.border};
  span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`,vm=e=>{let t=(0,yl.c)(95),{isOpen:n,onClose:r,modalMode:i,formData:a,formDataFile:o,onChange:s,onChangeUpload:c,onFileChange:l,onSubmit:u,removeFile:d,isLoading:f,employeeDetails:p}=e,m=f===void 0?!1:f,h=(0,v.useRef)(null),g=(0,v.useRef)(null),[_,y]=(0,v.useState)(`D`),[b,x]=(0,v.useState)(!1),S=ym,C;t[0]!==a||t[1]!==o||t[2]!==i?(C=()=>i===`UPLOAD`?{proofType:o.proofType||``,govt_id_number:o.govt_id_number||``,fileKey:S(o.file),profile_img:o.profile_img||null}:i===`UPDATE`?{...a}:null,t[0]=a,t[1]=o,t[2]=i,t[3]=C):C=t[3];let w=C,T;t[4]!==o||t[5]!==i||t[6]!==_?(T=(e,t,n)=>{if(i===`UPDATE`)return JSON.stringify(e)!==JSON.stringify(t);if(i===`UPLOAD`){if(_===`D`)return n.some(n=>e[n]!==t[n]);if(_===`P`)return!!o.newProfileFile}return!0},t[4]=o,t[5]=i,t[6]=_,t[7]=T):T=t[7];let E=T,D;t[8]!==w||t[9]!==n||t[10]!==i?(D=()=>{if(!n)return;let e=w();i===`UPLOAD`?g.current=e:h.current=e,x(!1)},t[8]=w,t[9]=n,t[10]=i,t[11]=D):D=t[11];let O;t[12]!==n||t[13]!==i?(O=[n,i],t[12]=n,t[13]=i,t[14]=O):O=t[14],(0,v.useEffect)(D,O);let k;t[15]!==a||t[16]!==o||t[17]!==E||t[18]!==n||t[19]!==i||t[20]!==_?(k=()=>{if(!n){x(!1);return}let e=!1;i===`UPDATE`?h.current&&(e=E(a,h.current)):i===`UPLOAD`?(_===`D`&&(e=E({proofType:o.proofType||``,govt_id_number:o.govt_id_number||``,fileKey:S(o.file)},g.current||{},[`proofType`,`govt_id_number`,`fileKey`])),_===`P`&&(e=!!o.newProfileFile)):i===`ADD`&&(e=!0),x(e)},t[15]=a,t[16]=o,t[17]=E,t[18]=n,t[19]=i,t[20]=_,t[21]=k):k=t[21];let A;if(t[22]!==a||t[23]!==o||t[24]!==n||t[25]!==i||t[26]!==_?(A=[a,o,_,i,n,S],t[22]=a,t[23]=o,t[24]=n,t[25]=i,t[26]=_,t[27]=A):A=t[27],(0,v.useEffect)(k,A),!n)return null;let j=i===`UPLOAD`,M=i===`ADD`,N;t[28]!==M||t[29]!==b||t[30]!==m?(N=()=>m?!0:M?!1:!b,t[28]=M,t[29]=b,t[30]=m,t[31]=N):N=t[31];let P=N,F;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(F=[{key:`D`,label:`Document Upload`},{key:`P`,label:`Profile Image`}].filter(Boolean),t[32]=F):F=t[32];let I=F,L;t[33]===r?L=t[34]:(L=()=>{r(),y(`D`)},t[33]=r,t[34]=L);let R;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(R={display:`flex`,flexDirection:`column`},t[35]=R):R=t[35];let z=j?`Upload Auditor's Document`:i===`UPDATE`?`Update Auditor's Details`:`Add Auditor's Details`,ee;t[36]===z?ee=t[37]:(ee=(0,J.jsx)(nm,{children:z}),t[36]=z,t[37]=ee);let B;t[38]!==p||t[39]!==i?(B=p&&i!==`ADD`&&(0,J.jsxs)(nm,{children:[p.name,`(`,p.emp_id,`)`]}),t[38]=p,t[39]=i,t[40]=B):B=t[40];let V;t[41]!==ee||t[42]!==B?(V=(0,J.jsxs)(`div`,{style:R,children:[ee,B]}),t[41]=ee,t[42]=B,t[43]=V):V=t[43];let H;t[44]===r?H=t[45]:(H=()=>{r(),y(`D`)},t[44]=r,t[45]=H);let te;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(te=(0,J.jsx)(tu,{}),t[46]=te):te=t[46];let U;t[47]===H?U=t[48]:(U=(0,J.jsx)(rm,{onClick:H,children:te}),t[47]=H,t[48]=U);let W;t[49]!==V||t[50]!==U?(W=(0,J.jsxs)(tm,{children:[V,U]}),t[49]=V,t[50]=U,t[51]=W):W=t[51];let ne;t[52]!==a||t[53]!==j||t[54]!==s?(ne=!j&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(dm,{children:[(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Auditor ID `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`text`,value:a.emp_id,onChange:e=>s(`emp_id`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Auditor Name `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`text`,value:a.name,onChange:e=>s(`name`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Gender `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsxs)(um,{value:a.gender,onChange:e=>s(`gender`,e.target.value),children:[(0,J.jsx)(`option`,{value:`M`,children:`Male`}),(0,J.jsx)(`option`,{value:`F`,children:`Female`})]})]})]}),(0,J.jsxs)(dm,{children:[(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Dob `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`date`,value:a.dob,onChange:e=>s(`dob`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Email Id `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`email`,value:a.email_id,onChange:e=>s(`email_id`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsx)(sm,{children:`Mobile Number`}),(0,J.jsx)(lm,{type:`tel`,maxLength:`10`,value:a.mobile_number,onChange:e=>s(`mobile_number`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Grade `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsxs)(um,{value:a.grade_level,onChange:e=>s(`grade_level`,e.target.value),children:[(0,J.jsx)(`option`,{value:`RET-G1-TL`,children:`Team Lead`}),(0,J.jsx)(`option`,{value:`RET-G1-EX`,children:`Executive`})]})]})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Address line 1 `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`text`,value:a.address_line_1,onChange:e=>s(`address_line_1`,e.target.value)})]}),(0,J.jsxs)(om,{children:[(0,J.jsx)(sm,{children:`Address line 2`}),(0,J.jsx)(lm,{type:`text`,value:a.address_line_2,onChange:e=>s(`address_line_2`,e.target.value)})]})]}),t[52]=a,t[53]=j,t[54]=s,t[55]=ne):ne=t[55];let re;t[56]!==o||t[57]!==j||t[58]!==c||t[59]!==l||t[60]!==d||t[61]!==_?(re=j&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Qp,{tabs:I,activeTab:_,setActiveTab:y}),_===`P`?(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(om,{children:[(0,J.jsx)(sm,{children:`Upload Profile Image`}),(0,J.jsxs)(fm,{onClick:xm,children:[(0,J.jsx)(`input`,{id:`file-upload1`,type:`file`,onChange:e=>l(e,`profile`),accept:`image/*`,style:{display:`none`}}),(0,J.jsxs)(pm,{children:[(0,J.jsx)(mm,{children:(0,J.jsx)(Zl,{})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(hm,{children:`Click to upload file`}),(0,J.jsx)(gm,{children:`JPG, PNG • Max 5MB`})]})]})]}),(o.newProfileFile||o.profile_img)&&(0,J.jsx)(_m,{children:(0,J.jsx)(`img`,{src:o.newProfileFile?URL.createObjectURL(o.newProfileFile):o.profile_img,alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}})})]})}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(dm,{children:[(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Select Id Proof Type`,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsxs)(um,{id:`proofType`,name:`proofType`,value:o.proofType,onChange:e=>c(`proofType`,e.target.value),required:!0,children:[(0,J.jsx)(`option`,{value:``,disabled:!0,children:`Select Id Proof`}),(0,J.jsx)(`option`,{value:`A`,children:`Aadhar Card`}),(0,J.jsx)(`option`,{value:`P`,children:`Pan Card`}),(0,J.jsx)(`option`,{value:`D`,children:`Driving license`})]})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Enter ID Proof Number `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsx)(lm,{type:`text`,value:o.govt_id_number,onChange:e=>c(`govt_id_number`,e.target.value,!0)})]})]}),(0,J.jsxs)(om,{children:[(0,J.jsxs)(sm,{children:[`Upload ID Proof `,(0,J.jsx)(cm,{children:`*`})]}),(0,J.jsxs)(fm,{onClick:Sm,children:[(0,J.jsx)(`input`,{id:`file-upload`,type:`file`,onChange:l,accept:`image/*,.pdf`,style:{display:`none`}}),(0,J.jsxs)(pm,{children:[(0,J.jsx)(mm,{children:(0,J.jsx)(Zl,{})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(hm,{children:`Click to upload file`}),(0,J.jsx)(gm,{children:`JPG, PNG, PDF • Max 5MB`})]})]})]}),o.file&&(0,J.jsxs)(_m,{children:[o.file.type&&o.file.type?.startsWith(`image/`)?(0,J.jsx)(`img`,{src:URL.createObjectURL(o.file),alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}}):(0,J.jsx)(Fu,{color:X.colors.text}),(0,J.jsx)(`span`,{title:o.file.name,style:{color:X.colors.text},children:o.file.name}),(0,J.jsx)(`button`,{type:`button`,onClick:d,children:(0,J.jsx)(tu,{})})]})]})]})]}),t[56]=o,t[57]=j,t[58]=c,t[59]=l,t[60]=d,t[61]=_,t[62]=re):re=t[62];let ie;t[63]!==ne||t[64]!==re?(ie=(0,J.jsxs)(im,{children:[ne,re]}),t[63]=ne,t[64]=re,t[65]=ie):ie=t[65];let ae;t[66]===r?ae=t[67]:(ae=(0,J.jsx)(Z,{variant:`outline`,onClick:()=>{r(),y(`D`)},children:`Cancel`}),t[66]=r,t[67]=ae);let oe;t[68]!==i||t[69]!==u||t[70]!==_?(oe=()=>i===`UPLOAD`?u(_):u(),t[68]=i,t[69]=u,t[70]=_,t[71]=oe):oe=t[71];let se=P(),ce;t[72]===i?ce=t[73]:(ce=i===`ADD`&&(0,J.jsx)(gu,{style:{marginRight:6}}),t[72]=i,t[73]=ce);let le;t[74]===i?le=t[75]:(le=i===`UPDATE`&&(0,J.jsx)(yp,{style:{marginRight:6}}),t[74]=i,t[75]=le);let ue;t[76]===i?ue=t[77]:(ue=i===`UPLOAD`&&(0,J.jsx)(nd,{style:{marginRight:6}}),t[76]=i,t[77]=ue);let de=j?`Upload`:i===`ADD`?`Add`:`Update`,fe;t[78]!==oe||t[79]!==se||t[80]!==ce||t[81]!==le||t[82]!==ue||t[83]!==de?(fe=(0,J.jsxs)(Z,{variant:`primary`,onClick:oe,disabled:se,children:[ce,le,ue,de]}),t[78]=oe,t[79]=se,t[80]=ce,t[81]=le,t[82]=ue,t[83]=de,t[84]=fe):fe=t[84];let pe;t[85]!==ae||t[86]!==fe?(pe=(0,J.jsxs)(am,{children:[ae,fe]}),t[85]=ae,t[86]=fe,t[87]=pe):pe=t[87];let me;t[88]!==W||t[89]!==ie||t[90]!==pe?(me=(0,J.jsxs)(em,{onClick:bm,children:[W,ie,pe]}),t[88]=W,t[89]=ie,t[90]=pe,t[91]=me):me=t[91];let he;return t[92]!==L||t[93]!==me?(he=(0,J.jsx)($p,{onClick:L,children:me}),t[92]=L,t[93]=me,t[94]=he):he=t[94],he};function ym(e){return e?typeof e==`string`?e:`${e.name}_${e.size}_${e.lastModified}`:``}function bm(e){return e.stopPropagation()}function xm(){return document.getElementById(`file-upload1`).click()}function Sm(){return document.getElementById(`file-upload`).click()}var Cm=G.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.backgroundAlt};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,wm=G.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textLight};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    text-align: center;
  }
`,Tm=G.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,Em=G.button`
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
`,Dm=G.span`
  padding: ${({theme:e})=>`0 ${e.spacing.xs}`};
  color: ${({theme:e})=>e.colors.textLight};
  font-size: ${({theme:e})=>e.fontSizes.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }
`,Om=G.div`
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
`,km=G.select`
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
`,Am=G.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
`,jm=G.input`
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
`,Mm=G(Em)`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.sm}`};
  background: ${({theme:e})=>e.colors.secondary};
  border-color: ${({theme:e})=>e.colors.secondary};
  color: white;
  min-width: auto;
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary};
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,Nm=G.span`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 500;
  white-space: nowrap;
`,Pm=({totalItems:e=0,itemsPerPage:t=10,currentPage:n=1,onPageChange:r,siblingCount:i=1,showFirstLast:a=!1,showPageSize:o=!1,showGoToPage:s=!1})=>{let[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(typeof window<`u`?window.innerWidth:1200);(0,v.useEffect)(()=>{let e=()=>d(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let f=Math.ceil(e/t),p=u<=576,m=u<=768,h=()=>{let e=[],t=f,r=p?0:m?1:i,a=Math.max(n-r,1),o=Math.min(n+r,t),s=a>2,c=o<t-2;if(!s&&!c)for(let n=1;n<=t;n++)e.push(n);else if(s&&!c){for(let t=1;t<=(p?2:3);t++)e.push(t);e.push(`...`);for(let n=t-(p?1:2);n<=t;n++)e.push(n)}else if(!s&&c){for(let t=1;t<=(p?2:3);t++)e.push(t);e.push(`...`);for(let n=t-(p?1:2);n<=t;n++)e.push(n)}else{e.push(1),e.push(`...`);for(let t=a;t<=o;t++)e.push(t);e.push(`...`),e.push(t)}return e},g=e=>{e<1||e>f||e===n||(r(e),l(``))},_=e=>{e.preventDefault();let t=parseInt(c);!isNaN(t)&&t>=1&&t<=f&&g(t)},y=(n-1)*t+1,b=Math.min(n*t,e);return(0,J.jsxs)(Cm,{children:[(0,J.jsxs)(wm,{children:[`Showing `,y.toLocaleString(),` to `,b.toLocaleString(),` of `,e.toLocaleString(),` audits`]}),(0,J.jsxs)(Tm,{children:[a&&!p&&(0,J.jsx)(Em,{onClick:()=>g(1),disabled:n===1,children:`«`}),(0,J.jsx)(Em,{onClick:()=>g(n-1),disabled:n===1,children:`‹`}),h().map((e,t)=>e===`...`?(0,J.jsx)(Dm,{children:`...`},`ellipsis-${t}`):(0,J.jsx)(Em,{active:n===e,onClick:()=>g(e),children:e},e)),(0,J.jsx)(Em,{onClick:()=>g(n+1),disabled:n===f,children:`›`}),a&&!p&&(0,J.jsx)(Em,{onClick:()=>g(f),disabled:n===f,children:`»`})]}),(o||s)&&(0,J.jsxs)(Om,{children:[o&&(0,J.jsxs)(km,{value:t,onChange:e=>r(1,parseInt(e.target.value)),children:[(0,J.jsx)(`option`,{value:10,children:`10 / page`}),(0,J.jsx)(`option`,{value:25,children:`25 / page`}),(0,J.jsx)(`option`,{value:50,children:`50 / page`}),(0,J.jsx)(`option`,{value:100,children:`100 / page`})]}),s&&(0,J.jsxs)(Am,{children:[(0,J.jsx)(jm,{type:`number`,min:1,max:f,value:c,onChange:e=>l(e.target.value),placeholder:`Page`,onKeyPress:e=>e.key===`Enter`&&_(e)}),(0,J.jsx)(Mm,{onClick:_,disabled:!c,children:`Go`})]}),(0,J.jsxs)(Nm,{children:[n,`/`,f]})]})]})},Fm=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${X.spacing.lg};
  margin-bottom: ${X.spacing.xl};

  @media (max-width: ${X.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Im=G.div`
  display: flex;
  gap: ${X.spacing.md};
`,Lm=G.div`
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
`,Rm=G.table`
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
`,zm=G.div`
  display: flex;
  gap: ${X.spacing.md};
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${X.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,Bm=G.select`
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
`,Vm=G.input`
  flex: 1;
  padding: ${X.spacing.sm} ${X.spacing.md};
  border: 1px solid ${X.colors.border};
  border-radius: ${X.borderRadius.md};
  font-family: ${X.fonts.body};
  font-size: ${X.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${X.colors.primary};
  }
  
  &::placeholder {
    color: ${X.colors.textLight};
  }
`,Hm=G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,Um=()=>{let{profile:e}=gl(),t=localStorage.getItem(`cust_emp_id`),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)([]),[u,d]=(0,v.useState)({o_emp_id:``,emp_id:``,name:``,gender:``,grade_level:``,dob:``,email_id:``,mobile_number:``,address_line_1:``,address_line_2:``,file:null}),[f,p]=(0,v.useState)({emp_id:``,proofType:``,govt_id_number:``,file:null,profile_img:null,newProfileFile:null}),[m,h]=(0,v.useState)(``),[g,_]=(0,v.useState)(``),[y,b]=(0,v.useState)(`All`),[x,S]=(0,v.useState)(null),[C,w]=(0,v.useState)(!1),[T,E]=(0,v.useState)(10),[D,O]=(0,v.useState)(1);(0,v.useEffect)(()=>{k()},[]);let k=async()=>{s(!0);try{l((await al({rm_emp_id:t})).data)}catch(e){K.error(e.response.message||e.message)}finally{s(!1)}},A=e=>e<=1?`EX`:e===2?`TL`:`-`,j=e=>e?`VERIFIED`:`UNVERIFIED`,M=(e=>{let t={total:e.length,VERIFIED:{TL:0,EX:0},UNVERIFIED:{TL:0,EX:0}};return e.forEach(e=>{let n=A(e.grade_level),r=j(e.is_verified);t[r]&&t[r][n]!==void 0&&t[r][n]++}),t})(c),N=c.filter(e=>{let t=A(e.grade_level),n=j(e.is_verified),r=g?.toLowerCase()||``,i=e.name?.toLowerCase().includes(r)||e.emp_id?.toLowerCase().includes(r)||e.additional_ref_number?.includes(r)||e.emp_id?.includes(r),a=!0;y!==`All`&&(y===`RET-G1-TL`?a=t===`TL`:y===`RET-G1-EX`&&(a=t===`EX`));let o=!0;return m?.status&&n!==m.status&&(o=!1),m?.grade&&t!==m.grade&&(o=!1),i&&a&&o}),P=(0,v.useMemo)(()=>{let e=(D-1)*T,t=e+T;return N.slice(e,t)},[N,D,T]),F=(e,t=T)=>{O(e),t!==T&&(E(t),O(1))},I=[{icon:(0,J.jsx)(Vl,{}),label:`Total Auditors`,value:M.total,color:`primary`,sections:[{items:[{label:`Team Lead`,value:M.VERIFIED.TL+M.UNVERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.VERIFIED.EX+M.UNVERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:null,grade:null}),onItemClick:e=>h({status:null,grade:e.subStatus})},{icon:(0,J.jsx)(Xl,{}),label:`Verified`,value:M.VERIFIED.TL+M.VERIFIED.EX,color:`success`,sections:[{items:[{label:`Team Lead`,value:M.VERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.VERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:`VERIFIED`,grade:null}),onItemClick:e=>h({status:`VERIFIED`,grade:e.subStatus})},{icon:(0,J.jsx)(Ul,{}),label:`Not verified`,value:M.UNVERIFIED.TL+M.UNVERIFIED.EX,color:`secondary`,sections:[{items:[{label:`Team Lead`,value:M.UNVERIFIED.TL,status:`info`,subStatus:`TL`},{label:`Executive`,value:M.UNVERIFIED.EX,status:`success`,subStatus:`EX`}]}],onClick:()=>h({status:`UNVERIFIED`,grade:null}),onItemClick:e=>h({status:`UNVERIFIED`,grade:e.subStatus})}],L=(e,t)=>{d(n=>({...n,[e]:t}))},R=(e,t)=>{p(n=>({...n,[e]:t}))};return(0,J.jsxs)(ef,{title:`Auditor Management`,children:[(0,J.jsxs)(Lm,{children:[(0,J.jsx)(`div`,{children:(0,J.jsx)(`p`,{children:`View and manage all auditors`})}),(0,J.jsxs)(Z,{variant:`primary`,onClick:()=>{d({emp_id:``,name:``,gender:`M`,email_id:``,grade_level:`RET-G1-TL`,mobile_number:``,address_line_1:``,address_line_2:``,file:null}),r(!0),a(`ADD`)},children:[(0,J.jsx)(gu,{}),` Add New Auditor`]})]}),(0,J.jsx)(Fm,{children:I.map(e=>(0,J.jsx)(hf,{icon:e.icon,label:e.label,value:e.value,color:e.color,sections:e.sections,onClick:()=>{e.onClick(),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},onItemClick:t=>{e.onItemClick(t),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}}))}),(0,J.jsxs)(bf,{hoverable:!1,title:`Resource List`,children:[(0,J.jsxs)(zm,{children:[(0,J.jsx)(Vm,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:g,onChange:e=>_(e.target.value)}),(0,J.jsxs)(Bm,{name:`selectedStatus`,value:y,onChange:e=>b(e.target.value),children:[(0,J.jsx)(`option`,{value:`All`,children:`All`}),(0,J.jsx)(`option`,{value:`RET-G1-TL`,children:`Team Lead`}),(0,J.jsx)(`option`,{value:`RET-G1-EX`,children:`Executive`})]}),(0,J.jsx)(Z,{variant:`outline`,onClick:()=>{_(``),b(`All`),h(null)},children:`Clear Filters`})]}),(0,J.jsx)(Hm,{children:`**After Document Upload resource will verify`}),(0,J.jsxs)(Rm,{children:[(0,J.jsx)(`thead`,{children:(0,J.jsxs)(`tr`,{children:[(0,J.jsxs)(`th`,{children:[`System Ref ID`,(0,J.jsx)(`br`,{}),`Auditor ID`]}),(0,J.jsx)(`th`,{children:`Name`}),(0,J.jsx)(`th`,{children:`Mobile`}),(0,J.jsx)(`th`,{children:`Grade`}),(0,J.jsx)(`th`,{children:`Document?`}),(0,J.jsx)(`th`,{children:`Status`}),(0,J.jsx)(`th`,{children:`Action`})]})}),(0,J.jsx)(`tbody`,{children:o?(0,J.jsx)(`tr`,{children:(0,J.jsx)(`td`,{colSpan:7,style:{textAlign:`center`,padding:`1rem`},children:`Loading...`})}):P.length?P.map(e=>(0,J.jsxs)(`tr`,{children:[(0,J.jsxs)(`td`,{children:[e.emp_id,(0,J.jsx)(`br`,{}),(0,J.jsx)(Sf,{variant:e.gender===`M`?`settle`:`pink`,children:e.additional_ref_number||`--`})]}),(0,J.jsx)(`td`,{children:e.name}),(0,J.jsx)(`td`,{children:e.mobile_number||`--`}),(0,J.jsx)(`td`,{children:(0,J.jsx)(Sf,{variant:e.grade_level<=1?`info`:`forward`,children:e.grade_level<=1?`Executive`:`Team Lead`})}),(0,J.jsx)(`td`,{children:(0,J.jsx)(Sf,{variant:e.ref_govt_id_number&&e.emp_file_1?`success`:`error`,children:e.ref_govt_id_number&&e.emp_file_1?`Yes`:`No`})}),(0,J.jsx)(`td`,{children:(0,J.jsx)(Sf,{variant:e.is_rejected?`reject`:e.is_verified?`success`:`error`,children:e.is_rejected?`Rejected`:e.is_verified?`Verified`:`Not verified`})}),(0,J.jsx)(`td`,{children:(0,J.jsxs)(Im,{children:[(0,J.jsx)(Z,{title:`View Deatils`,iconOnly:!0,onClick:()=>{S(e),w(!0)},children:(0,J.jsx)(rd,{})}),(0,J.jsx)(Z,{title:`Upload Document`,iconOnly:!0,onClick:()=>{let t=``,n=e.ref_govt_id_number||``;if(n.includes(`^`)){let e=n.split(`^`);t=e[0],n=e[1]}p({emp_id:e.emp_id,proofType:t,govt_id_number:n,file:e.emp_file_1||null,isExisting:!!(e.ref_govt_id_number&&e.emp_file_1),profile_img:e.image,newProfileFile:null}),a(`UPLOAD`),r(!0),S(e)},children:(0,J.jsx)(nd,{})}),(0,J.jsx)(Z,{title:`Update Details`,onClick:()=>{d({o_emp_id:e.emp_id,emp_id:e.additional_ref_number,name:e.name,gender:e.gender,grade_level:e.grade_level<=1?`RET-G1-EX`:`RET-G1-TL`,dob:Q(e.dob,!0),email_id:e.email_id||``,mobile_number:e.mobile_number||``,address_line_1:e.address_line_1||``,address_line_2:e.address_line_2||``}),r(!0),a(`UPDATE`),S(e)},children:(0,J.jsx)(ad,{})})]})})]},e.id)):(0,J.jsx)(`tr`,{children:(0,J.jsx)(`td`,{colSpan:7,style:{textAlign:`center`,padding:`1rem`},children:`No data found`})})})]}),(0,J.jsx)(Pm,{totalItems:N.length,itemsPerPage:T,currentPage:D,onPageChange:F,siblingCount:2})]}),C&&(0,J.jsx)(qp,{employee:x,onClose:()=>{S(null),w(!1)}}),(0,J.jsx)(vm,{isOpen:n,onClose:()=>{r(!1),a(``),S(``),p({})},modalMode:i,formData:u,formDataFile:f,onChange:L,onChangeUpload:R,onFileChange:(e,t=`doc`)=>{let n=e.target.files[0];if(n){if(n.size>5*1024*1024){K.error(`File size must be less than 5MB`);return}R(t===`profile`?`newProfileFile`:`file`,n)}},onSubmit:i===`UPLOAD`?async e=>{try{if(e===`P`){let e=x?.image?`UPDATE_IMAGE`:`ADD_IMAGE`;if(!f.newProfileFile){K.error(`Please upload profile image`);return}let t=new FormData;t.append(`emp_id`,f.emp_id),t.append(`call_mode`,e),f.newProfileFile&&typeof f.newProfileFile!=`string`&&t.append(`uploaded_file`,f.newProfileFile);let n=await nl(t);if(n&&n.status===200){K.success(e===`ADD_IMAGE`?`Profile Image successfully added!`:`Profile Image successfully updated!`),await k(),r(!1),a(``);return}}else{let e=!!f.proofType,t=!!f.govt_id_number?.trim(),n=!!f.file,i=f.isExisting?`UPDATE`:`ADD`;if(!e){K.error(`Govt ID type is required`);return}if(!t){K.error(`Govt ID number is required`);return}if(i===`ADD`&&!n){K.error(`Please upload a file`);return}if(i===`UPDATE`&&!n){K.error(`File cannot be empty in update`);return}let o=new FormData;o.append(`emp_id`,f.emp_id),o.append(`govt_id_number`,`${f.proofType}^${f.govt_id_number}`),o.append(`call_mode`,i),f.file&&typeof f.file!=`string`&&o.append(`uploaded_file`,f.file);let s=await nl(o);if(s&&s.status===200){K.success(i===`ADD`?`Document successfully added!`:`Document successfully updated!`),await k(),r(!1),a(``);return}}}catch(e){K.error(e?.response?.data?.message||`Something went wrong. Please try again later!`)}}:async()=>{if(!u.emp_id||!u.name||!u.gender||!u.dob||!u.email_id||!u.address_line_1){K.error(`Please fill all required fields`);return}let t=new Date,n=new Date(u.dob),o=t.getFullYear()-n.getFullYear(),s=t.getMonth()-n.getMonth();if((s<0||s===0&&t.getDate()<n.getDate())&&o--,o<18){K.error(`Employee must be at least 18 years old`);return}if(u.mobile_number.length<10){K.error(`Employee mobile number must be 10 digits`);return}try{(await tl({emp_id:u.o_emp_id||``,additional_ref_number:u.emp_id||``,name:u.name,gender:u.gender,grade_id:u.grade_level,dob:Ef(u.dob),email_id:u.email_id,mobile_number:u.mobile_number,address_line_1:u.address_line_1||``,address_line_2:u.address_line_2||``,call_mode:i===`ADD`?`ADD_RETAIN`:`UPDATE_RETAIN`,manager_mobile:e.mobile_number})).status===200&&(K.success(i===`ADD`?`Employee successfully added`:`Employee successfully updated`),await k(),r(!1),a(``))}catch(e){K.error(e?.response?.data?.message||`Something went wrong. Please try again later!!!`)}},removeFile:()=>{p(e=>({...e,file:null}))},isLoading:o,employeeDetails:x})]})},Wm=`/retainer/assets/logo2-BToGv6dp.png`,Gm=Di`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`,Km=G.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primaryLight}, ${({theme:e})=>e.colors.background});
  padding: 2rem 1rem;
`,qm=G.form`
  width: 100%;
  max-width: 420px;
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  padding: 2.5rem 2rem 2rem;
  animation: ${Gm} 0.6s ease;
`;G.div`
  width: 56px;
  height: 56px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  margin: 0 auto 1rem;
  box-shadow: 0 6px 16px ${({theme:e})=>e.colors.shadow};
`,G.div`
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: 0.4rem;
`;var Jm=G.h2`
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes[`2xl`]};
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.4rem;
`,Ym=G.p`
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.4;
`,Xm=G.div`
  margin-bottom: 1.25rem;
`,Zm=G.label`
  display: block;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  letter-spacing: 0.05em;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.4rem;
  text-transform: uppercase;
`,Qm=G.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.backgroundAlt};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions.normal};

  &:focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
    background: ${({theme:e})=>e.colors.card};
  }
`,$m=G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
`,eh=G.input`
  flex: 1;
  padding: 0.75rem 0.5rem 0.75rem 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-family: ${({theme:e})=>e.fonts.body};
  color: ${({theme:e})=>e.colors.text};

  &::placeholder {
    color: ${({theme:e})=>e.colors.border};
  }
`,th=G.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  display: flex;
  align-items: center;
`,nh=G.button`
  width: 100%;
  padding: 0.85rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.normal};

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,rh=G.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.5rem 0 1rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  letter-spacing: 0.05em;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.border};
  }
`,ih=G.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: ${({theme:e})=>e.fontSizes.sm};

  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`,ah=G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`,oh=G.img`
  height: 36px;
  width: auto;
  object-fit: contain;
`;G.span`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};

  span {
    color: ${({theme:e})=>e.colors.primary};
  }
`,G.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.textLight};
  letter-spacing: 0.04em;
`;var sh=()=>{let e=(0,yl.c)(39),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={mobile:``,password:``},e[0]=t):t=e[0];let[n,r]=(0,v.useState)(t),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),c;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],e[1]=c):c=e[1];let[,l]=(0,v.useState)(c),{customerlogin:u}=gl(),d=window.location.pathname,f=Me(),p;e[2]===f?p=e[3]:(p=()=>{(async()=>{let e=await el();if(e.status===200)if(d===`/retainer/login`){let t=e.data?.filter(ch);l(t),t.length>0&&(r(e=>({...e,company:t[0].name})),localStorage.setItem(`dbName`,t[0].name.split(`_`).slice(1).join(`_`)))}else l(e.data)})(),localStorage.getItem(`customerToken`)&&f(`/dashboard`)},e[2]=f,e[3]=p);let m;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(m=[],e[4]=m):m=e[4],(0,v.useEffect)(p,m);let h;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(h=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))},e[5]=h):h=e[5];let g=h,_;e[6]!==u||e[7]!==n.company||e[8]!==n.mobile||e[9]!==n.password?(_=async e=>{e.preventDefault(),a(!0),setTimeout(async()=>{n.mobile&&n.password?await u({mobile:n.mobile,password:n.password,company:n?.company?.split(`_`).slice(1).join(`_`)||`Acme Inc.`}):K.error(`Invalid credentials. Please try again.`),a(!1)},500)},e[6]=u,e[7]=n.company,e[8]=n.mobile,e[9]=n.password,e[10]=_):_=e[10];let y=_,b,x,S;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,J.jsx)(ah,{children:(0,J.jsx)(oh,{src:Wm,alt:`Atomwalk logo`})}),x=(0,J.jsx)(Jm,{children:`Retainer & Associate Portal`}),S=(0,J.jsx)(Ym,{children:`Manage assigned audits and update resource allocations securely.`}),e[11]=b,e[12]=x,e[13]=S):(b=e[11],x=e[12],S=e[13]);let C;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,J.jsx)(Zm,{htmlFor:`mobile`,children:`Mobile Number`}),e[14]=C):C=e[14];let w;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,J.jsx)($m,{children:(0,J.jsx)(Hl,{})}),e[15]=w):w=e[15];let T;e[16]===n.mobile?T=e[17]:(T=(0,J.jsxs)(Xm,{children:[C,(0,J.jsxs)(Qm,{children:[w,(0,J.jsx)(eh,{type:`text`,id:`mobile`,name:`mobile`,placeholder:`Enter your mobile number`,value:n.mobile,onChange:g,required:!0})]})]}),e[16]=n.mobile,e[17]=T);let E;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,J.jsx)(Zm,{htmlFor:`password`,children:`Security Pin`}),e[18]=E):E=e[18];let D;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,J.jsx)($m,{children:(0,J.jsx)(Cu,{})}),e[19]=D):D=e[19];let O=o?`text`:`password`,k;e[20]!==n.password||e[21]!==O?(k=(0,J.jsx)(eh,{type:O,id:`password`,name:`password`,placeholder:`Enter your pin`,value:n.password,onChange:g,required:!0}),e[20]=n.password,e[21]=O,e[22]=k):k=e[22];let A;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>s(lh),e[23]=A):A=e[23];let j;e[24]===o?j=e[25]:(j=(0,J.jsx)(th,{type:`button`,onClick:A,children:o?(0,J.jsx)(Lu,{}):(0,J.jsx)(Iu,{})}),e[24]=o,e[25]=j);let M;e[26]!==k||e[27]!==j?(M=(0,J.jsxs)(Xm,{children:[E,(0,J.jsxs)(Qm,{children:[D,k,j]})]}),e[26]=k,e[27]=j,e[28]=M):M=e[28];let N=i?`Logging in...`:`Login to Portal`,P;e[29]!==i||e[30]!==N?(P=(0,J.jsx)(nh,{type:`submit`,disabled:i,children:N}),e[29]=i,e[30]=N,e[31]=P):P=e[31];let F;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,J.jsx)(rh,{}),e[32]=F):F=e[32];let I;e[33]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,J.jsxs)(ih,{children:[(0,J.jsx)(`a`,{children:`Forgot Pin?`}),(0,J.jsx)(`a`,{children:`Need Help?`})]}),e[33]=I):I=e[33];let L;return e[34]!==y||e[35]!==T||e[36]!==M||e[37]!==P?(L=(0,J.jsx)(Km,{children:(0,J.jsxs)(qm,{onSubmit:y,children:[b,x,S,T,M,P,F,I]})}),e[34]=y,e[35]=T,e[36]=M,e[37]=P,e[38]=L):L=e[38],L};function ch(e){return e.ref_cust_name===`DEMO Allocation Project Management (Atomwalk)`}function lh(e){return!e}async function uh(){try{let e=localStorage.getItem(`cust_emp_id`),t={};return e&&(t.emp_id=e),await Yc(Lc,t)}catch(e){throw console.error(`Error fetching profile info:`,e),e}}var dh=G.div`
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
`,fh=G.div`
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
`,ph=G.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.lg||`2rem`};
  @media (max-width: 600px) {
    gap: 0.5rem;
    width: 100%;
  }
`,mh=G(bf)`
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
`,hh=G.div`
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
`,gh=G.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({theme:e})=>e.spacing?.md||`1rem`} ${({theme:e})=>e.spacing?.md||`1rem`};
`,_h=G.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.fontSizes?.xl||`1.75rem`};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`,vh=G.div`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  text-align: center;
  font-size: 1.1rem;
`;G.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,G(Sf)`
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
`;var yh=G.div`
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
`,bh=G.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.lg||`2rem`};
  @media (max-width: 600px) {
    width: 100%;
  }
`,xh=G.h3`
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
`,Sh=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ch=G.div`
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
`,wh=G.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: ${e=>e.iconColor||e.theme.colors.primary};
  }
`,Th=G.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text};
`,Eh=G.div`
  padding: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  background: linear-gradient(to right, ${({theme:e})=>e.colors.backgroundAlt}, ${({theme:e})=>e.colors.background});
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.05);
`,Dh=G.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }
`,Oh=G.input`
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
`,kh=G.div`
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
`,Ah=G.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,jh=G(Z)`
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
`,Mh=G.div`
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`2rem`};
`,Nh=G.div`
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
`,Ph=G.button`
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
`;G.div`
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
`,G.div`
  font-size: ${({theme:e})=>e.fontSizes?.[`4xl`]||`2.5rem`};
  font-weight: 700;
  margin-bottom: 0.5rem;
`,G.div`
  font-size: ${({theme:e})=>e.fontSizes?.md||`1rem`};
  opacity: 0.9;
  font-weight: 500;
`,G.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  opacity: 0.15;
`;var Fh=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.lg||`1.5rem`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`,Ih=G.div`
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
`,Lh=G.div`
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
`,Rh=G.div`
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,zh=G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,Bh=G.div`
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
`,Vh=G.div`
  margin-right: 0.5rem;
  color: ${e=>e.color||e.theme.colors.primary};
`,Hh=G.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`12px`};
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  box-shadow: ${({theme:e})=>e.shadows?.sm||`0 4px 12px rgba(0, 0, 0, 0.05)`};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Uh=G.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
`,Wh=G.input`
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
`,Gh=G.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textLight};
  text-align: center;
`,Kh=G.div`
  margin-top: ${({theme:e})=>e.spacing?.lg||`2rem`};
`,qh=G.div`
  max-width: 600px;
  margin: 0 auto;
`,Jh=G.div`
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
`,Yh=G.div`
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  background: linear-gradient(to right, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`,Xh=G.div`
  padding: ${({theme:e})=>e.spacing?.md||`1.25rem`};
  color: ${({theme:e})=>e.colors.text};
`,Zh=G.button`
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
`,Qh=G.div`
  margin-bottom: 2rem;
`,$h=G.h4`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 1.5rem 0 1rem;
  color: ${({theme:e})=>e.colors.text};
  
  svg {
    margin-right: 0.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }
`,eg=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`,tg=G.div`
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
`,ng=G.div`
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
`,rg=G.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`,ig=G.div`
  font-size: 0.85rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.text};
  font-weight: 500;
`,ag=()=>{let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(`personal`),[m,h]=(0,v.useState)({}),[g,_]=(0,v.useState)(`presets`),y=m.job_title?.toLowerCase()||``,b=y.includes(`retainer`)?`Retainer`:y.includes(`associate`)?`Associate`:`Employee`,{theme:x,currentTheme:S,changeTheme:C,baseThemes:w,customColors:T,updateCustomColors:E,uiPreferences:D,updateUIPreferences:O,isCustomTheme:k,resetCustomizations:A}=wl();(0,v.useEffect)(()=>{(async()=>{try{h((await uh())?.data[0])}catch(e){console.error(`Failed to fetch profile:`,e)}})()},[]);let j=e=>{C(e);let t=x[e]?.name||e;K.success(`Theme changed to ${t}`)},M=async()=>{if(l(``),d(``),!n||!i||!o){l(`All fields are required`);return}if(i!==o){l(`New PIN and Confirm PIN do not match`);return}if(i.length!==4||!/^\d+$/.test(i)){l(`PIN must be a 4-digit number`);return}(await il(n,i))?.status===200?(d(`PIN reset successfully`),t(!1)):(l(`Failed to reset PIN. Please try again.`),t(!0)),r(``),a(``),s(``)},N=()=>{t(!1),r(``),a(``),s(``),l(``),d(``)};return(0,J.jsxs)(ef,{children:[(0,J.jsxs)(dh,{children:[(0,J.jsx)(`h1`,{children:`My Profile`}),(0,J.jsx)(`p`,{children:`Manage your personal information and account settings`})]}),(0,J.jsxs)(fh,{children:[(0,J.jsx)(ph,{children:(0,J.jsxs)(mh,{children:[(0,J.jsx)(hh,{children:(0,J.jsx)(`img`,{src:m.image||`/placeholder.svg`,alt:m.name})}),(0,J.jsxs)(gh,{children:[(0,J.jsx)(_h,{children:m.name}),(0,J.jsx)(vh,{children:b}),(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(yh,{children:[(0,J.jsx)(Tu,{}),(0,J.jsxs)(`span`,{children:[b,` ID: `,m.emp_id]})]}),(0,J.jsxs)(yh,{children:[(0,J.jsx)(_u,{}),(0,J.jsx)(`span`,{children:m.mobile_number||`Not specified`})]}),(0,J.jsxs)(yh,{children:[(0,J.jsx)(zu,{}),(0,J.jsx)(`span`,{children:m.email_id||`Not specified`})]}),(0,J.jsxs)(yh,{children:[(0,J.jsx)(Yu,{}),(0,J.jsxs)(`span`,{children:[`Joined: `,m.date_of_join||`Not specified`]})]})]})]})]})}),(0,J.jsx)(bh,{children:(0,J.jsx)(mh,{children:(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsxs)(Ph,{active:f===`personal`,onClick:()=>p(`personal`),children:[(0,J.jsx)(Tu,{}),` Personal Info`]}),(0,J.jsxs)(Ph,{active:f===`security`,onClick:()=>p(`security`),children:[(0,J.jsx)(Cu,{}),` Security`]}),(0,J.jsxs)(Ph,{active:f===`theme`,onClick:()=>p(`theme`),children:[(0,J.jsx)(vu,{}),` Themes`]})]}),(()=>{switch(f){case`personal`:return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Personal Information`}),(0,J.jsxs)(Sh,{children:[(0,J.jsxs)(Ch,{color:`#4776E6`,children:[(0,J.jsxs)(wh,{iconColor:`#4776E6`,children:[(0,J.jsx)(Tu,{}),` `,b,` ID`]}),(0,J.jsx)(Th,{children:m.emp_id||`Not specified`})]}),(0,J.jsxs)(Ch,{color:`#8E54E9`,children:[(0,J.jsxs)(wh,{iconColor:`#8E54E9`,children:[(0,J.jsx)(Wl,{}),` Role`]}),(0,J.jsx)(Th,{children:b||`Not specified`})]}),(0,J.jsxs)(Ch,{color:`#DD6B20`,children:[(0,J.jsxs)(wh,{iconColor:`#DD6B20`,children:[(0,J.jsx)(Yu,{}),` Join Date`]}),(0,J.jsx)(Th,{children:m.date_of_join||`Not specified`})]}),(0,J.jsxs)(Ch,{color:`#3182CE`,children:[(0,J.jsxs)(wh,{iconColor:`#3182CE`,children:[(0,J.jsx)(_u,{}),` Mobile`]}),(0,J.jsx)(Th,{children:m.mobile_number||`Not specified`})]}),(0,J.jsxs)(Ch,{color:`#805AD5`,children:[(0,J.jsxs)(wh,{iconColor:`#805AD5`,children:[(0,J.jsx)(zu,{}),` Email`]}),(0,J.jsx)(Th,{children:m.email_id||`Not specified`})]})]})]});case`security`:return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Security Settings`}),(0,J.jsx)(mh,{children:(0,J.jsxs)(`div`,{style:{padding:`1.5rem`},children:[u&&(0,J.jsxs)(kh,{className:`success`,children:[(0,J.jsx)(Ku,{}),u]}),e?(0,J.jsxs)(Eh,{children:[(0,J.jsx)(xh,{children:`Reset Your PIN`}),c&&(0,J.jsxs)(kh,{className:`error`,children:[(0,J.jsx)(tu,{}),c]}),(0,J.jsxs)(wh,{children:[(0,J.jsx)(Cu,{}),` Current PIN`]}),(0,J.jsx)(Oh,{type:`password`,maxLength:6,value:n,onChange:e=>r(e.target.value),placeholder:`Enter current PIN`}),(0,J.jsxs)(Dh,{children:[(0,J.jsxs)(`div`,{style:{flex:1},children:[(0,J.jsxs)(wh,{children:[(0,J.jsx)(Cu,{}),` New PIN`]}),(0,J.jsx)(Oh,{type:`password`,maxLength:6,value:i,onChange:e=>a(e.target.value),placeholder:`Enter new PIN`})]}),(0,J.jsxs)(`div`,{style:{flex:1},children:[(0,J.jsxs)(wh,{children:[(0,J.jsx)(Ku,{}),` Confirm PIN`]}),(0,J.jsx)(Oh,{type:`password`,maxLength:6,value:o,onChange:e=>s(e.target.value),placeholder:`Confirm new PIN`})]})]}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{className:`primary`,onClick:M,children:[(0,J.jsx)(Ku,{}),` Reset PIN`]}),(0,J.jsxs)(jh,{className:`outline`,onClick:N,children:[(0,J.jsx)(tu,{}),` Cancel`]})]})]}):(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`p`,{style:{marginBottom:`1.5rem`,color:`#4a5568`},children:`Your PIN is used for secure transactions and approvals. It's recommended to change your PIN periodically.`}),(0,J.jsxs)(jh,{className:`primary`,onClick:()=>t(!0),children:[(0,J.jsx)(Cu,{}),` Reset PIN`]})]})]})})]});case`theme`:return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Theme Personalization`}),(0,J.jsx)(`p`,{style:{marginBottom:`1.5rem`,color:`#4a5568`},children:`Customize every aspect of the interface to match your preferences.`}),(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{style:{marginBottom:`1rem`},children:[(0,J.jsxs)(Ph,{active:g===`presets`,onClick:()=>_(`presets`),children:[(0,J.jsx)(vu,{}),` Theme Presets`]}),(0,J.jsxs)(Ph,{active:g===`colors`,onClick:()=>_(`colors`),children:[(0,J.jsx)(ju,{}),` Colors`]}),(0,J.jsxs)(Ph,{active:g===`components`,onClick:()=>_(`components`),children:[(0,J.jsx)(hu,{}),` Components`]}),(0,J.jsxs)(Ph,{active:g===`typography`,onClick:()=>_(`typography`),children:[(0,J.jsx)(Au,{}),` Typography`]}),(0,J.jsxs)(Ph,{active:g===`layout`,onClick:()=>_(`layout`),children:[(0,J.jsx)(Vu,{}),` Layout`]})]}),g===`presets`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Fh,{children:[(0,J.jsxs)(Ih,{isActive:S===`default`&&!k,onClick:()=>j(`default`),children:[(0,J.jsx)(Lh,{colors:w.default.colors}),(0,J.jsxs)(Rh,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(Vh,{color:w.default.colors.primary,children:(0,J.jsx)(vu,{})}),(0,J.jsx)(zh,{children:w.default.name})]}),S===`default`&&!k&&(0,J.jsx)(Bh,{children:(0,J.jsx)(Ku,{})})]})]}),(0,J.jsxs)(Ih,{isActive:S===`ocean`&&!k,onClick:()=>j(`ocean`),children:[(0,J.jsx)(Lh,{colors:w.ocean.colors}),(0,J.jsxs)(Rh,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(Vh,{color:w.ocean.colors.primary,children:(0,J.jsx)(zl,{})}),(0,J.jsx)(zh,{children:w.ocean.name})]}),S===`ocean`&&!k&&(0,J.jsx)(Bh,{children:(0,J.jsx)(Ku,{})})]})]}),(0,J.jsxs)(Ih,{isActive:S===`sunset`&&!k,onClick:()=>j(`sunset`),children:[(0,J.jsx)(Lh,{colors:w.sunset.colors}),(0,J.jsxs)(Rh,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(Vh,{color:w.sunset.colors.primary,children:(0,J.jsx)(au,{})}),(0,J.jsx)(zh,{children:w.sunset.name})]}),S===`sunset`&&!k&&(0,J.jsx)(Bh,{children:(0,J.jsx)(Ku,{})})]})]}),(0,J.jsxs)(Ih,{isActive:S===`dark`&&!k,onClick:()=>j(`dark`),children:[(0,J.jsx)(Lh,{colors:w.dark.colors}),(0,J.jsxs)(Rh,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(Vh,{color:w.dark.colors.primary,children:(0,J.jsx)(bu,{})}),(0,J.jsx)(zh,{children:w.dark.name})]}),S===`dark`&&!k&&(0,J.jsx)(Bh,{children:(0,J.jsx)(Ku,{})})]})]}),k&&(0,J.jsxs)(Ih,{isActive:k,onClick:()=>{},children:[(0,J.jsx)(Lh,{colors:x.colors}),(0,J.jsxs)(Rh,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,J.jsx)(Vh,{color:x.colors.primary,children:(0,J.jsx)(ql,{})}),(0,J.jsx)(zh,{children:`Custom`})]}),(0,J.jsx)(Bh,{children:(0,J.jsx)(Ku,{})})]})]})]}),(0,J.jsxs)(rg,{children:[(0,J.jsxs)(jh,{className:`outline`,onClick:A,children:[(0,J.jsx)(Ql,{}),` Reset All Customizations`]}),(0,J.jsxs)(jh,{className:`primary`,onClick:()=>_(`colors`),children:[(0,J.jsx)(yu,{}),` Customize Theme`]})]})]}),g===`colors`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Color Customization`}),(0,J.jsxs)(Sh,{children:[(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Primary Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.primary||x.colors.primary,onChange:e=>E({primary:e.target.value})}),(0,J.jsx)(Gh,{children:T.primary||x.colors.primary})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Secondary Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.secondary||x.colors.secondary,onChange:e=>E({secondary:e.target.value})}),(0,J.jsx)(Gh,{children:T.secondary||x.colors.secondary})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Accent Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.accent||x.colors.accent,onChange:e=>E({accent:e.target.value})}),(0,J.jsx)(Gh,{children:T.accent||x.colors.accent})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Background Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.background||x.colors.background,onChange:e=>E({background:e.target.value})}),(0,J.jsx)(Gh,{children:T.background||x.colors.background})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Card Background`]}),(0,J.jsx)(Wh,{type:`color`,value:T.card||x.colors.card,onChange:e=>E({card:e.target.value})}),(0,J.jsx)(Gh,{children:T.card||x.colors.card})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Text Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.text||x.colors.text,onChange:e=>E({text:e.target.value})}),(0,J.jsx)(Gh,{children:T.text||x.colors.text})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Success Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.success||x.colors.success,onChange:e=>E({success:e.target.value})}),(0,J.jsx)(Gh,{children:T.success||x.colors.success})]}),(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Uh,{children:[(0,J.jsx)(vu,{}),` Error Color`]}),(0,J.jsx)(Wh,{type:`color`,value:T.error||x.colors.error,onChange:e=>E({error:e.target.value})}),(0,J.jsx)(Gh,{children:T.error||x.colors.error})]})]}),(0,J.jsxs)(Kh,{children:[(0,J.jsx)(xh,{children:`Preview`}),(0,J.jsx)(qh,{children:(0,J.jsxs)(Jh,{children:[(0,J.jsx)(Yh,{children:`Sample Card`}),(0,J.jsxs)(Xh,{children:[(0,J.jsx)(`p`,{children:`This is how your cards will look with the selected colors.`}),(0,J.jsx)(Zh,{primary:!0,children:`Primary Button`}),(0,J.jsx)(Zh,{secondary:!0,children:`Secondary Button`})]})]})})]})]}),g===`components`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Component Styles`}),(0,J.jsxs)(Qh,{children:[(0,J.jsxs)($h,{children:[(0,J.jsx)(su,{}),` Card Style`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.cardStyle.borderRadius===`square`,onClick:()=>O(`cardStyle`,{borderRadius:`square`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`square-preview`})}),(0,J.jsx)(ig,{children:`Square`})]}),(0,J.jsxs)(tg,{isActive:D.cardStyle.borderRadius===`rounded`,onClick:()=>O(`cardStyle`,{borderRadius:`rounded`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`rounded-preview`})}),(0,J.jsx)(ig,{children:`Rounded`})]}),(0,J.jsxs)(tg,{isActive:D.cardStyle.borderRadius===`16px`,onClick:()=>O(`cardStyle`,{borderRadius:`16px`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`default-preview`})}),(0,J.jsx)(ig,{children:`Default`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(lu,{}),` Shadow Style`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.cardStyle.shadow===`none`,onClick:()=>O(`cardStyle`,{shadow:`none`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`no-shadow-preview`})}),(0,J.jsx)(ig,{children:`No Shadow`})]}),(0,J.jsxs)(tg,{isActive:D.cardStyle.shadow===`medium`,onClick:()=>O(`cardStyle`,{shadow:`medium`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`medium-shadow-preview`})}),(0,J.jsx)(ig,{children:`Medium`})]}),(0,J.jsxs)(tg,{isActive:D.cardStyle.shadow===`heavy`,onClick:()=>O(`cardStyle`,{shadow:`heavy`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`heavy-shadow-preview`})}),(0,J.jsx)(ig,{children:`Heavy`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(cu,{}),` Button Style`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.buttonStyle.borderRadius===`0`,onClick:()=>O(`buttonStyle`,{borderRadius:`0`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`square-button-preview`,children:`Button`})}),(0,J.jsx)(ig,{children:`Square`})]}),(0,J.jsxs)(tg,{isActive:D.buttonStyle.borderRadius===`8px`,onClick:()=>O(`buttonStyle`,{borderRadius:`8px`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`default-button-preview`,children:`Button`})}),(0,J.jsx)(ig,{children:`Default`})]}),(0,J.jsxs)(tg,{isActive:D.buttonStyle.borderRadius===`9999px`,onClick:()=>O(`buttonStyle`,{borderRadius:`9999px`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`pill-button-preview`,children:`Button`})}),(0,J.jsx)(ig,{children:`Pill`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(Eu,{}),` Icon Style`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.iconStyle.size===`small`,onClick:()=>O(`iconStyle`,{size:`small`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(ou,{className:`small-icon-preview`})}),(0,J.jsx)(ig,{children:`Small`})]}),(0,J.jsxs)(tg,{isActive:D.iconStyle.size===`medium`,onClick:()=>O(`iconStyle`,{size:`medium`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(ou,{className:`medium-icon-preview`})}),(0,J.jsx)(ig,{children:`Medium`})]}),(0,J.jsxs)(tg,{isActive:D.iconStyle.size===`large`,onClick:()=>O(`iconStyle`,{size:`large`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(ou,{className:`large-icon-preview`})}),(0,J.jsx)(ig,{children:`Large`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(eu,{}),` Animation`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.cardStyle.animation,onClick:()=>O(`cardStyle`,{animation:!0}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`animation-on-preview`})}),(0,J.jsx)(ig,{children:`Enabled`})]}),(0,J.jsxs)(tg,{isActive:!D.cardStyle.animation,onClick:()=>O(`cardStyle`,{animation:!1}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`animation-off-preview`})}),(0,J.jsx)(ig,{children:`Disabled`})]})]})]}),(0,J.jsxs)(Kh,{children:[(0,J.jsx)(xh,{children:`Component Preview`}),(0,J.jsx)(qh,{children:(0,J.jsxs)(Jh,{className:`component-preview-card`,children:[(0,J.jsx)(Yh,{children:`Sample Card`}),(0,J.jsxs)(Xh,{children:[(0,J.jsx)(`p`,{children:`This is how your components will look with the selected styles.`}),(0,J.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,marginTop:`1rem`},children:[(0,J.jsxs)(Zh,{primary:!0,children:[D.buttonStyle.iconPosition===`left`&&(0,J.jsx)(Ku,{style:{marginRight:`0.5rem`}}),`Primary Button`,D.buttonStyle.iconPosition===`right`&&(0,J.jsx)(Ku,{style:{marginLeft:`0.5rem`}})]}),(0,J.jsxs)(Zh,{secondary:!0,children:[D.buttonStyle.iconPosition===`left`&&(0,J.jsx)(tu,{style:{marginRight:`0.5rem`}}),`Secondary Button`,D.buttonStyle.iconPosition===`right`&&(0,J.jsx)(tu,{style:{marginLeft:`0.5rem`}})]})]})]})]})})]})]}),g===`typography`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Typography Settings`}),(0,J.jsxs)(Qh,{children:[(0,J.jsxs)($h,{children:[(0,J.jsx)(Au,{}),` Font Size`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.typography.fontSize===`small`,onClick:()=>O(`typography`,{fontSize:`small`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`small-font-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Small`})]}),(0,J.jsxs)(tg,{isActive:D.typography.fontSize===`medium`,onClick:()=>O(`typography`,{fontSize:`medium`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`medium-font-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Medium`})]}),(0,J.jsxs)(tg,{isActive:D.typography.fontSize===`large`,onClick:()=>O(`typography`,{fontSize:`large`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`large-font-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Large`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(ru,{}),` Heading Weight`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.typography.headingWeight===`400`,onClick:()=>O(`typography`,{headingWeight:`400`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`light-heading-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Regular`})]}),(0,J.jsxs)(tg,{isActive:D.typography.headingWeight===`600`,onClick:()=>O(`typography`,{headingWeight:`600`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`medium-heading-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Semi-Bold`})]}),(0,J.jsxs)(tg,{isActive:D.typography.headingWeight===`700`,onClick:()=>O(`typography`,{headingWeight:`700`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`bold-heading-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Bold`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(nu,{}),` Body Text Weight`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.typography.bodyWeight===`300`,onClick:()=>O(`typography`,{bodyWeight:`300`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`light-body-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Light`})]}),(0,J.jsxs)(tg,{isActive:D.typography.bodyWeight===`400`,onClick:()=>O(`typography`,{bodyWeight:`400`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`regular-body-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Regular`})]}),(0,J.jsxs)(tg,{isActive:D.typography.bodyWeight===`500`,onClick:()=>O(`typography`,{bodyWeight:`500`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`medium-body-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Medium`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(Au,{}),` Font Family`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.typography.fontFamily===`'Centra', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Centra', sans-serif`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`Centra-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Centra`})]}),(0,J.jsxs)(tg,{isActive:D.typography.fontFamily===`'poppins', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'poppins', sans-serif`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`poppins-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Poppins`})]}),(0,J.jsxs)(tg,{isActive:D.typography.fontFamily===`'Roboto', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Roboto', sans-serif`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`roboto-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Roboto`})]}),(0,J.jsxs)(tg,{isActive:D.typography.fontFamily===`'Open Sans', sans-serif`,onClick:()=>O(`typography`,{fontFamily:`'Open Sans', sans-serif`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`opensans-preview`,children:`Aa`})}),(0,J.jsx)(ig,{children:`Open Sans`})]})]})]}),(0,J.jsxs)(Kh,{children:[(0,J.jsx)(xh,{children:`Typography Preview`}),(0,J.jsx)(qh,{children:(0,J.jsxs)(Jh,{className:`typography-preview-card`,children:[(0,J.jsx)(Yh,{children:`Typography Sample`}),(0,J.jsxs)(Xh,{children:[(0,J.jsx)(`h1`,{style:{marginBottom:`0.5rem`},children:`Heading 1`}),(0,J.jsx)(`h2`,{style:{marginBottom:`0.5rem`},children:`Heading 2`}),(0,J.jsx)(`h3`,{style:{marginBottom:`0.5rem`},children:`Heading 3`}),(0,J.jsx)(`p`,{style:{marginBottom:`1rem`},children:`This is a paragraph of text that demonstrates how body text will appear with your selected typography settings. The quick brown fox jumps over the lazy dog.`}),(0,J.jsxs)(`p`,{children:[(0,J.jsx)(`strong`,{children:`Bold text`}),` and `,(0,J.jsx)(`em`,{children:`italic text`}),` examples.`]})]})]})})]})]}),g===`layout`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(xh,{children:`Layout Settings`}),(0,J.jsxs)(Qh,{children:[(0,J.jsxs)($h,{children:[(0,J.jsx)(pu,{}),` Layout Density`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.layout.density===`compact`,onClick:()=>O(`layout`,{density:`compact`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`compact-preview`,children:[(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`})]})}),(0,J.jsx)(ig,{children:`Compact`})]}),(0,J.jsxs)(tg,{isActive:D.layout.density===`comfortable`,onClick:()=>O(`layout`,{density:`comfortable`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`comfortable-preview`,children:[(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`})]})}),(0,J.jsx)(ig,{children:`Comfortable`})]}),(0,J.jsxs)(tg,{isActive:D.layout.density===`spacious`,onClick:()=>O(`layout`,{density:`spacious`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`spacious-preview`,children:[(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`}),(0,J.jsx)(`div`,{className:`density-line`})]})}),(0,J.jsx)(ig,{children:`Spacious`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(Vu,{}),` Container Width`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.layout.containerWidth===`narrow`,onClick:()=>O(`layout`,{containerWidth:`narrow`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`narrow-container-preview`})}),(0,J.jsx)(ig,{children:`Narrow`})]}),(0,J.jsxs)(tg,{isActive:D.layout.containerWidth===`standard`,onClick:()=>O(`layout`,{containerWidth:`standard`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`standard-container-preview`})}),(0,J.jsx)(ig,{children:`Standard`})]}),(0,J.jsxs)(tg,{isActive:D.layout.containerWidth===`wide`,onClick:()=>O(`layout`,{containerWidth:`wide`}),children:[(0,J.jsx)(ng,{children:(0,J.jsx)(`div`,{className:`wide-container-preview`})}),(0,J.jsx)(ig,{children:`Wide`})]})]}),(0,J.jsxs)($h,{children:[(0,J.jsx)(Zu,{}),` Sidebar Style`]}),(0,J.jsxs)(eg,{children:[(0,J.jsxs)(tg,{isActive:D.layout.sidebarStyle===`compact`,onClick:()=>O(`layout`,{sidebarStyle:`compact`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`compact-sidebar-preview`,children:[(0,J.jsx)(`div`,{className:`sidebar-icon`}),(0,J.jsx)(`div`,{className:`sidebar-icon`}),(0,J.jsx)(`div`,{className:`sidebar-icon`})]})}),(0,J.jsx)(ig,{children:`Compact`})]}),(0,J.jsxs)(tg,{isActive:D.layout.sidebarStyle===`standard`,onClick:()=>O(`layout`,{sidebarStyle:`standard`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`standard-sidebar-preview`,children:[(0,J.jsx)(`div`,{className:`sidebar-item`}),(0,J.jsx)(`div`,{className:`sidebar-item`}),(0,J.jsx)(`div`,{className:`sidebar-item`})]})}),(0,J.jsx)(ig,{children:`Standard`})]}),(0,J.jsxs)(tg,{isActive:D.layout.sidebarStyle===`floating`,onClick:()=>O(`layout`,{sidebarStyle:`floating`}),children:[(0,J.jsx)(ng,{children:(0,J.jsxs)(`div`,{className:`floating-sidebar-preview`,children:[(0,J.jsx)(`div`,{className:`sidebar-item`}),(0,J.jsx)(`div`,{className:`sidebar-item`}),(0,J.jsx)(`div`,{className:`sidebar-item`})]})}),(0,J.jsx)(ig,{children:`Floating`})]})]})]})]})]})]});default:return null}})()]})})})]})]})},og=`/retainer/assets/ErrorPage-D21CcmLu.svg`,sg=G.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f9fafb;
`,cg=G.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
`;G.h1`
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
`,G.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #555;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;var lg=G.div`
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
`,ug=G.p`
  font-size: 16px;
  color: #777;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,dg=G.button`
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
`,fg=()=>{let e=(0,yl.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,J.jsx)(sg,{children:(0,J.jsxs)(cg,{children:[(0,J.jsx)(lg,{children:(0,J.jsx)(`img`,{src:og,alt:`Not Found`})}),(0,J.jsx)(ug,{children:`The page you're looking for doesn’t exist.`}),(0,J.jsx)(dg,{onClick:pg,children:`Go Back`})]})}),e[0]=t):t=e[0],t};function pg(){return window.history.back()}function mg(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`},child:[]}]})(e)}function hg(e){return Y({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`15`,x2:`15`,y1:`12`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`12`,x2:`18`,y1:`15`,y2:`15`},child:[]},{tag:`rect`,attr:{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`},child:[]}]})(e)}var gg=G.div`
  overflow-x: auto;
  background: ${({theme:e,color:t})=>t?`${e.colors[t]}`:e.colors.background};
  border-radius: 8px;
  padding: 0.4rem;
  min-height: 140px;
`,_g=G.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 800px;
  color: ${({theme:e})=>e.colors.text};
`,vg=G.th`
  text-align: left;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.75rem;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text};
  font-weight: 600;
`,$=G.td`
  padding: ${({theme:e})=>e.spacing.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text};
`,yg=G.td`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-weight: 600;
`;G.td`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-weight: 600;
`;var bg=G.tr`
  background-color: ${({theme:e})=>e.colors.backgroundAlt};
  
  td {
    padding: 0;
  }
`,xg=G.div`
  padding: 1rem;
`,Sg=G.tr`
  cursor: ${({rowAction:e})=>e?`pointer`:`default`};
  
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;function Cg(e){let t=(0,yl.c)(25),{columns:n,data:r,renderRow:i,expandedRow:a,renderExpandedRow:o,emptyMessage:s,isLoading:c,rowAction:l,modifiedId:u,modifiedIdName:d}=e,f=s===void 0?`No data available`:s,p=c===void 0?!1:c,m=l===void 0?null:l,h=u===void 0?!1:u,g=d===void 0?`id`:d,_;t[0]===r?_=t[1]:(_=Array.isArray(r)?r:[],t[0]=r,t[1]=_);let y=_,b=y.length>0,x=Array.isArray(n)&&n.length>0?n.length:1,S;t[2]!==h||t[3]!==g?(S=e=>h&&g?e[g]:e?.id||e?.p_id||e?.emp_id||e?.unique_id,t[2]=h,t[3]=g,t[4]=S):S=t[4];let C=S,w;t[5]===n?w=t[6]:(w=n?.map(wg),t[5]=n,t[6]=w);let T;t[7]===w?T=t[8]:(T=(0,J.jsx)(`thead`,{children:(0,J.jsx)(`tr`,{children:w})}),t[7]=w,t[8]=T);let E;t[9]!==x||t[10]!==f||t[11]!==a||t[12]!==C||t[13]!==b||t[14]!==p||t[15]!==o||t[16]!==i||t[17]!==m||t[18]!==y?(E=p?(0,J.jsx)(`tr`,{children:(0,J.jsx)(yg,{colSpan:x,children:`Loading...`})}):b?y.map((e,t)=>{let n=C(e),r=a===n;return(0,J.jsxs)(v.Fragment,{children:[(0,J.jsx)(Sg,{onClick:()=>m?.(e),rowAction:m,children:i(e)}),r&&o&&(0,J.jsx)(bg,{children:(0,J.jsx)(`td`,{colSpan:x,children:(0,J.jsx)(xg,{children:o(e)})})})]},n||t)}):(0,J.jsx)(`tr`,{children:(0,J.jsx)(yg,{colSpan:x,children:f})}),t[9]=x,t[10]=f,t[11]=a,t[12]=C,t[13]=b,t[14]=p,t[15]=o,t[16]=i,t[17]=m,t[18]=y,t[19]=E):E=t[19];let D;t[20]===E?D=t[21]:(D=(0,J.jsx)(`tbody`,{children:E}),t[20]=E,t[21]=D);let O;return t[22]!==D||t[23]!==T?(O=(0,J.jsx)(gg,{children:(0,J.jsxs)(_g,{children:[T,D]})}),t[22]=D,t[23]=T,t[24]=O):O=t[24],O}function wg(e,t){return(0,J.jsx)(vg,{children:e},t)}var Tg=Di`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,G.div`
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,G.span`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,G.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,G.div`
  display: flex;
  border-bottom: 2px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  margin-bottom: 0.85rem;
  gap: 0;
`,G.button`
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
`,G.span`
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 10px;
  background: ${({active:e,theme:t})=>e?t.colors?.primary||`#6C5CE7`:t.colors?.border||`#e0e0e0`};
  color: ${({active:e})=>e?`#fff`:`#888`};
  transition: all 0.15s ease;
`,G.div`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  margin-bottom: 0.45rem;
  display: flex;
  align-items: center;
  gap: 5px;
`,G.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.8rem;
  font-style: italic;
`,G.div`
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
`,G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.textLight||`#888`};
  margin-bottom: 0.6rem;
`,G.div`
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
`,G.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.65rem;
  overflow: hidden;
`,G.div`
  display: grid;
  grid-template-columns: 1.8fr 0.9fr 0.7fr 0.7fr 0.7fr auto;
  padding: 0.45rem 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  gap: 0.5rem;
`,G.span`
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,G.div`
  max-height: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ddd`};
    border-radius: 4px;
  }
`,G.div`
  display: grid;
  grid-template-columns: 1.8fr 0.9fr 0.7fr 0.7fr 0.7fr auto;
  padding: 0.55rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  animation: ${Tg} 0.15s ease both;
  background: ${({deleted:e,theme:t})=>e?`#fee2e210`:t.colors?.card||`#fff`};
  opacity: ${({deleted:e})=>e?.6:1};
  transition: background 0.15s, opacity 0.15s;

  &:last-child { border-bottom: none; }
`,G.div`
  font-size: 0.78rem;
  color: ${({theme:e,muted:t})=>t?e.colors?.textLight||`#aaa`:e.colors?.text||`#333`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 5px;
`,G.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,G.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem 0.75rem;
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}06`:`#f9f8ff`};
  border-top: 1px dashed ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  animation: ${Tg} 0.15s ease both;

  @media (max-width: 480px) { grid-template-columns: 1fr 1fr; }
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({fullWidth:e})=>e&&`grid-column: 1 / -1;`}
`,G.label`
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,G.input`
  padding: 0.35rem 0.55rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.78rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`,G.select`
  padding: 0.35rem 0.55rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.78rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`,G.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`,G.div`
  position: relative;
  margin-bottom: 0.6rem;
`,G.input`
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
`,G.div`
  position: absolute;
  left: 0.65rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
`,G.div`
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
`,G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  cursor: pointer;
  transition: background 0.12s ease;
  animation: ${Tg} 0.15s ease both;

  &:last-child { border-bottom: none; }
  &:hover { background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`}; }
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,G.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 6px;
`,G.span`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`,G.button`
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
`;var Eg=G.div`
  margin-bottom: 1rem;
`,Dg=G.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  color: ${e=>e.theme.colors.text};
`,Og=G.span`
  color: ${e=>e.theme.colors.error};
`,kg=G.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }
`,Ag=G.input`
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
`,jg=G.textarea`
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
`,Mg=G.div`
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
`,Ng=G.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Pg=G.div`
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
`,Fg=G.div`
  flex: 1;
`,Ig=G.div`
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.15rem;
`,Lg=G.div`
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors.textLight};
`,Rg=G.input`
  display: none;

    &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
     transform: none;
   }
`,zg=G.div`
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
`,Bg=({isOpen:e,onClose:t,claimData:n=null,onSaved:r})=>{let i=localStorage.getItem(`cust_emp_id`);console.log(`claimData`,n);let[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)([]),d={type:``,amount:``,date:``,claim_remarks:``,file:null,emp_id:i,o_item_id:rp(n?.o_item_id||n?.order_item_id)},[f,p]=(0,v.useState)(d),m=!!l.find(e=>e.id===f.type)?.is_exp_bill_required,h=(0,v.useCallback)(()=>{p(d),c(!1)},[]),g=()=>{h(),t()},_=async()=>{try{u((await pl())?.data||[])}catch(e){console.error(`Error fetching expense items:`,e),K.error(`Failed to load expense items`)}},y=(0,v.useCallback)(e=>{e?.item_id&&p({type:e.item_id||``,amount:e.expense_amt||``,date:Q(e.expense_date,!0),claim_remarks:e.remarks||``,file:e.submitted_file_1?{uri:e.submitted_file_1,name:e.submitted_file_1.split(`/`).pop().split(`?`)[0]}:null,emp_id:i,o_item_id:n?.o_item_id})},[i]);(0,v.useEffect)(()=>{_()},[]),(0,v.useEffect)(()=>{e&&(n?.item_id?y(n):h())},[e,n,y,h]);let b=(e,t)=>{p(n=>({...n,[e]:t}))},x=e=>{let t=e.target.files[0];if(t){if(t.size>5*1024*1024){K.error(`File size must be less than 5MB`),e.target.value=``;return}c(!1),b(`file`,t)}},S=()=>{b(`file`,null)};return(0,J.jsx)(Pd,{isOpen:e,onClose:g,title:n?.item_id?`Edit OPE (${n?.master_data?.master_claim_id})`:`Add OPE`,saveButtonText:n?.item_id?`Update OPE`:`Add OPE`,onSave:async()=>{if(!f.type)return K.error(`Please select an expense item`);if(!f.date)return K.error(`Please select expense date`);if(!f.amount||Number(f.amount)<=0)return K.error(`Please enter a valid OPE amount`);if(m&&!f.file){c(!0);return}o(!0),c(!1);try{let e=n?.master_data?.master_claim_id,t=new Date(f.date),i=`${t.getDate().toString().padStart(2,`0`)}-${(t.getMonth()+1).toString().padStart(2,`0`)}-${t.getFullYear()}`,a=new FormData;f.file&&a.append(`file_1`,f.file),a.append(`remarks`,f.claim_remarks||``),a.append(`item`,f.type),a.append(`quantity`,`1`),a.append(`expense_amt`,f.amount),a.append(`expense_date`,i),a.append(`emp_id`,f.emp_id),a.append(`quantity`,1),a.append(`o_item_id`,f.o_item_id),a.append(`call_mode`,n?.item_id?`CLAIM_UPDATE`:`CLAIM_SAVE`),e&&a.append(`m_claim_id`,e),n?.item_id&&a.append(`claim_id`,n.id);for(let[e,t]of a.entries())console.log(e,t);(await ul(a)).status===200?(o(!1),g(),K.success(n?.item_id?`Update claim successfully`:`Add claim successfully`),c(!1),await r()):K.error(`Claim Submission Error`,`Failed to claim. Unexpected response.`)}catch(e){K.error(e.response?.data?.message||e.message||`Submission failed`)}finally{o(!1)}},saveDisabled:a,children:(0,J.jsxs)(`div`,{style:{padding:`0.2rem`},children:[(0,J.jsxs)(Eg,{children:[(0,J.jsxs)(Dg,{htmlFor:`type`,children:[(0,J.jsx)(wu,{}),`Expense Item`]}),(0,J.jsxs)(kg,{id:`type`,name:`type`,value:f.type,onChange:e=>b(`type`,e.target.value),required:!0,children:[(0,J.jsx)(`option`,{value:``,children:`Select Expense Item`}),l.map((e,t)=>(0,J.jsx)(`option`,{value:e.id,children:e.name},t))]})]}),(0,J.jsxs)(Eg,{children:[(0,J.jsxs)(Dg,{htmlFor:`date`,children:[(0,J.jsx)(Yu,{}),` Date of Expense`]}),(0,J.jsx)(`div`,{style:{position:`relative`},children:(0,J.jsx)(Ag,{id:`date`,name:`date`,type:`date`,value:f.date,onChange:e=>b(`date`,e.target.value),required:!0})})]}),(0,J.jsxs)(Eg,{children:[(0,J.jsxs)(Dg,{children:[` `,(0,J.jsx)(fu,{}),`OPE Amount `,(0,J.jsx)(Og,{children:`*`})]}),(0,J.jsx)(Ag,{type:`number`,min:0,value:f.amount,onChange:e=>b(`amount`,e.target.value),placeholder:`Enter OPE Amount`})]}),(0,J.jsxs)(Eg,{children:[(0,J.jsxs)(Dg,{children:[(0,J.jsx)(fp,{}),` Remarks(Optional)`]}),(0,J.jsx)(jg,{value:f.claim_remarks,onChange:e=>b(`claim_remarks`,e.target.value),placeholder:`Add any notes...`})]}),(0,J.jsxs)(Eg,{children:[(0,J.jsxs)(Dg,{children:[`Receipts/Attachments `,m&&(0,J.jsx)(Og,{children:`*`})]}),(0,J.jsxs)(Mg,{onClick:()=>document.getElementById(`file-upload`).click(),children:[(0,J.jsx)(Rg,{id:`file-upload`,name:`file`,type:`file`,onChange:x,accept:`image/*,.pdf,`}),(0,J.jsxs)(Ng,{children:[(0,J.jsx)(Pg,{children:(0,J.jsx)(Zl,{})}),(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:`Click to upload file`}),(0,J.jsx)(Lg,{children:`JPG, PNG, PDF, EXCEL, WORD • Max 5MB`})]})]})]}),s&&(0,J.jsx)(`span`,{style:{color:`red`,fontSize:`0.75rem`,marginTop:`0.3rem`,display:`block`},children:`Please upload a receipt/attachment`}),f.file&&(0,J.jsxs)(zg,{children:[f.file?.type?.startsWith(`image/`)?(0,J.jsx)(`img`,{src:URL.createObjectURL(f.file),alt:`preview`,style:{width:40,height:40,objectFit:`cover`,borderRadius:6}}):(0,J.jsx)(Fu,{color:e=>e.colors.text}),(0,J.jsx)(`span`,{title:f?.file?.name,children:f?.file?.name}),(0,J.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),S()},children:(0,J.jsx)(tu,{})})]})]})]})})},Vg=Di`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;G.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,G.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.75rem;
  overflow: hidden;
  animation: ${Vg} 0.25s ease both;
  animation-delay: ${({index:e})=>e*.06}s;
`,G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  gap: 0.5rem;
  flex-wrap: wrap;
`,G.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}18`:`#ede9ff`};
  padding: 2px 8px;
  border-radius: 20px;
  letter-spacing: 0.04em;
`,G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #059669;
  background: #d1fae5;
  padding: 2px 8px;
  border-radius: 20px;
`,G.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`,G.div`
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
`,G.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
`,G(G.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  word-break: break-word;
`)`
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  font-size: 0.9rem;
`,G.div`
  grid-column: 1 / -1;
  padding: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,G.a`
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
`,G.span`
  font-size: 0.78rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  font-style: italic;
`,G.div`
  text-align: center;
  padding: 2.5rem 1rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};

  svg { margin-bottom: 0.5rem; opacity: 0.4; }
  p { font-size: 0.85rem; margin: 0; }
`,G.div`
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
`,G.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.md||`1rem`};
`,G.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
`,G.div`
  display: grid;
 grid-template-columns: ${({filterType:e})=>`5fr 1fr`};
  gap: ${({theme:e})=>e.spacing?.xl||`3rem`};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing?.md||`1rem`};
  }
`,G.div`
  flex: 1;
  min-width: 0
`,G.div`
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
`,G.h2`
  font-size: ${({theme:e})=>e.fontSizes?.lg||`1.125rem`};
  font-weight: ${({theme:e})=>e.fontWeights?.heading||`600`};
  margin: 0 0 ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,G.div`
  font-family: 'Courier New', monospace;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.8rem`};
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.4rem`};
`,G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  margin: ${({theme:e})=>e.spacing?.md||`1rem`} 0;
`,G.div`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.85rem`};
  color: ${({theme:e})=>e.colors?.text||`#000`};
`,G.div`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.xs||`0.2rem`};
`,G.div`
  color: ${({theme:e})=>e.colors?.card||`#666`};
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.25rem`};
  margin-bottom: ${({theme:e})=>e.spacing?.xs||`0.2rem`};
`,G(Sf)`
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
`,G.div`
  margin: ${({theme:e})=>e.spacing?.md||`0.75rem`} 0;
`,G.div`
  height: 6px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f0f2f8`};
  border-radius: ${({theme:e})=>e.borderRadius?.full||`999px`};
  overflow: hidden;
`,G.div`
  height: 100%;
  width: ${({p:e})=>e}%;
  background: ${({theme:e})=>e.colors?.primary||`#6C63FF`};
  transition: ${({theme:e})=>e.transitions?.normal||`width 0.4s ease`};
`,G.div`
  margin-top: ${({theme:e})=>e.spacing?.md||`1rem`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`8px`};
  overflow: hidden;
`,G.div`
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
`,G.div`
color: "#666";
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease`};
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
`,G.div`
  max-height: ${({isOpen:e})=>e?`400px`:`0`};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions?.normal||`max-height 0.3s ease`};
`,G.div`
  display: grid;
  gap: 1px;
  background-color: ${({theme:e})=>e.colors?.border||`#e0e0e0`};
`,G.div`
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
`,G.span`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
`,G.span`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,G.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
`,G.span`
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f0f2f8`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  padding: 3px 8px;
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`4px`};
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes?.xs||`0.75rem`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,G.div`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  font-style: italic;
  padding-top: ${({theme:e})=>e.spacing?.xs||`4px`};
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing?.xs||`4px`};
`,G.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing?.md||`1rem`};
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
`,G.span`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.text||`#333333`};
  font-weight: 500;
`,G.span`
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.card||`#333333`};
  font-weight: 500;
`,G(Z)`
  background: ${({theme:e})=>e.colors?.primary||`#6C63FF`};
  color: #fff;
  
  &:hover:not(:disabled) {
    background:  '#5a52e0';
  }
      @media (max-width: 768px) {
    width: 100%;
  }
`,G(Z)`
  background: ${({theme:e})=>e.colors?.success||`#00C853`};
  color: #fff;
  font-size: 16px;
  
  &:hover:not(:disabled) {
    background: #00b347;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`,G(Z)`
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
`,G.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: ${({theme:e})=>e.borderRadius?.md||`8px`};
  overflow: hidden;
  margin-top: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
`,G.div`
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
`,G.div`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.875rem`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing?.xs||`0.5rem`};
`,G.div`
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
  transition: ${({theme:e})=>e.transitions?.normal||`transform 0.3s ease`};
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  display: flex;
  align-items: center;
`,G.div`
  max-height: ${({isOpen:e})=>e?`500px`:`0`};
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions?.normal||`max-height 0.3s ease`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};
`,G.div`
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
`,G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  padding: ${({theme:e})=>e.spacing?.md||`1rem`} 0;
`,G.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
`,G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing?.md||`0.75rem`};
  padding: ${({theme:e})=>e.spacing?.lg||`1rem`};
`,G.div`
  grid-column: 1 / -1;
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.85rem`};
  color: ${({theme:e})=>e.colors?.text||`#000`};
`,G.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,G.div`
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
`,G.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-radius: ${({theme:e})=>e.borderRadius?.sm||`6px`};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
`,G.div`
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
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,G.span`
  font-weight: 600;
  font-size: 0.78rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,G.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({color:e})=>e};
  background: ${({color:e})=>e}18;
  padding: 1px 6px;
  border-radius: 3px;
`;var Hg=(e,t)=>{let n=(0,yl.c)(22),r;n[0]===e?r=n[1]:(r=e===void 0?[]:e,n[0]=e,n[1]=r);let i=r,a=t===void 0?10:t,[o,s]=(0,v.useState)(1),[c,l]=(0,v.useState)(a),u;n[2]!==o||n[3]!==i.length||n[4]!==c?(u=()=>{let e=Math.max(1,Math.ceil(i.length/c));o>e&&s(e)},n[2]=o,n[3]=i.length,n[4]=c,n[5]=u):u=n[5];let d;n[6]!==o||n[7]!==i||n[8]!==c?(d=[i,c,o],n[6]=o,n[7]=i,n[8]=c,n[9]=d):d=n[9],(0,v.useEffect)(u,d);let f=(o-1)*c,p=f+c,m;n[10]!==i||n[11]!==p||n[12]!==f?(m=i.slice(f,p),n[10]=i,n[11]=p,n[12]=f,n[13]=m):m=n[13];let h=m,g;n[14]===c?g=n[15]:(g=(e,t)=>{let n=t===void 0?c:t;n===c?s(e):(l(n),s(1))},n[14]=c,n[15]=g);let _=g,y;return n[16]!==o||n[17]!==i.length||n[18]!==_||n[19]!==c||n[20]!==h?(y={currentPage:o,itemsPerPage:c,paginatedData:h,totalItems:i.length,handlePageChange:_,setCurrentPage:s,setItemsPerPage:l},n[16]=o,n[17]=i.length,n[18]=_,n[19]=c,n[20]=h,n[21]=y):y=n[21],y},Ug=(e,t)=>{if(!e||!t)return[];let n=t.split(`.`),r=(e,t)=>{if(e==null)return[];if(t>=n.length)return[e];let i=n[t];if(i.includes(`[]`)){i=i.replace(`[]`,``);let n=e[i];return Array.isArray(n)?n.flatMap(e=>r(e,t+1)):[]}return r(e[i],t+1)};return r(e,0)},Wg=(e,t)=>e==null?!1:typeof e==`string`||typeof e==`number`||typeof e==`boolean`?String(e).toLowerCase().includes(t.toLowerCase()):Array.isArray(e)?e.some(e=>Wg(e,t)):typeof e==`object`?Object.values(e).some(e=>Wg(e,t)):!1,Gg=e=>{if(!e)return null;if(e instanceof Date)return e;if(typeof e!=`string`)return null;let t=e.trim(),n=new Date(t);if(!Number.isNaN(n.getTime()))return n;let r=t.split(/[-/]/).map(e=>e.trim());if(r.length===3){let[e,t,n]=r,i={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},a=/^[0-9]{4}$/.test(e),o=/^[0-9]{4}$/.test(n),s=t.toLowerCase();if(a&&/^[0-9]{1,2}$/.test(t)&&/^[0-9]{1,2}$/.test(n)){let r=new Date(Number(e),Number(t)-1,Number(n));return Number.isNaN(r.getTime())?null:r}if(o&&/^[0-9]{1,2}$/.test(e)&&/^[0-9]{1,2}$/.test(t)){let r=new Date(Number(n),Number(t)-1,Number(e));return Number.isNaN(r.getTime())?null:r}if(o&&i[s]!=null&&/^[0-9]{1,2}$/.test(e)){let t=new Date(Number(n),i[s],Number(e));return Number.isNaN(t.getTime())?null:t}}return null},Kg=e=>{let t=(0,yl.c)(15),{data:n,fields:r,search:i,extraFilters:a}=e,o;t[0]===n?o=t[1]:(o=n===void 0?[]:n,t[0]=n,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=r===void 0?[]:r,t[2]=r,t[3]=c);let l=c,u=i===void 0?``:i,d;t[4]===a?d=t[5]:(d=a===void 0?{}:a,t[4]=a,t[5]=d);let f=d,p;if(t[6]!==s||t[7]!==f||t[8]!==l||t[9]!==u){let e;t[11]!==f||t[12]!==l||t[13]!==u?(e=e=>{let t=!u||l.some(t=>Ug(e,t).some(e=>Wg(e,u))),n=Object.entries(f).every(t=>{let[n,r]=t;if(!r||r===`ALL`)return!0;if(n===`dateRange`&&r?.field){let t=Ug(e,r.field)[0],n=Gg(t),i=Gg(r.from),a=Gg(r.to);return!((i||a)&&(!n||Number.isNaN(n.getTime()))||i&&n<i||a&&n>a)}return Ug(e,n).some(e=>e==null?!1:String(e).toLowerCase()===String(r).toLowerCase())});return t&&n},t[11]=f,t[12]=l,t[13]=u,t[14]=e):e=t[14],p=s.filter(e),t[6]=s,t[7]=f,t[8]=l,t[9]=u,t[10]=p}else p=t[10];return p};Di`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  width: 100%;
`,G.div`
  position: relative;
  display: inline-block;
`,G.input`
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
`,G.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
  display: flex;
  align-items: center;
`,G.select`
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
`,G.div`
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
`,G.button`
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
`,G.div`
  max-height: 260px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors?.border||`#ddd`};
    border-radius: 4px;
  }
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`,G.div`
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
`,G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #ef4444;
  margin-left: 0.25rem;
`,G.div`
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
`,G.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 0.75rem;
  overflow: hidden;
`,G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.85rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
`,G.div`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({theme:e})=>e.colors?.textLight||`#888`};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,G.div`
  overflow-x: auto;
`,G.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.74rem;
`,G.th`
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
`,G.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({theme:e})=>e.colors?.card||`#fff`};

  &:last-child { border-bottom: none; }
`,G.td`
  padding: 0.48rem 0.6rem;
  text-align: ${({center:e})=>e?`center`:`left`};
  vertical-align: middle;
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,G.span`
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,G.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  margin: auto;
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.64rem;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,G.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({color:e})=>e};
`,G.div`
  padding: 1.5rem;
  text-align: center;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.75rem;
`,G.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.74rem;
`,G.th`
  padding: 0.5rem 0.85rem;
  text-align: left;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f8f9fc`};
`,G.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#f0f0f0`};
  background: ${({deleted:e,theme:t})=>e?`#fef2f210`:t.colors?.card||`#fff`};
  opacity: ${({deleted:e})=>e?.65:1};
  transition: background 0.12s;

  &:last-child { border-bottom: none; }
`,G.td`
  padding: 0.6rem 0.85rem;
  vertical-align: middle;
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,G.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`,G.div`
  font-size: 0.73rem;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  line-height: 1.55;
`,G.span`
  font-size: 0.65rem;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
  display: block;
`,G.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,G.div`
  padding: 2rem;
  text-align: center;
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  svg { opacity: 0.3; }
`,G.tr`
  background: ${({theme:e})=>e.colors?.primary?`${e.colors.primary}05`:`#faf9ff`};
`,G.td`
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
`,G.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 0.5rem;
  align-items: end;
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  ${({full:e})=>e&&`grid-column: 1 / -1;`}
`,G.label`
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors?.textLight||`#aaa`};
`;var qg=bi`
  padding: 0.33rem 0.5rem;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e0e0e0`};
  border-radius: 0.4rem;
  font-size: 0.74rem;
  background: ${({theme:e})=>e.colors?.card||`#fff`};
  color: ${({theme:e})=>e.colors?.text||`#333`};
  width: 100%;
  box-sizing: border-box;

  &:focus { outline: none; border-color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`}; }
`;G.input`${qg}`,G.select`${qg}`,G.div`
  display: flex;
  gap: 0.3rem;
  padding-bottom: 1px;
`;function Jg(e){return Y({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{fillRule:`evenodd`,d:`M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0`},child:[]}]})(e)}var Yg=G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,Xg=G.div`
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
`,Zg=G.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;G.div`
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
`,G.div`
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
`;var Qg=G.select`
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
`;G.input`
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
`,G.table`
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
`;var $g=G.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,e_=G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,t_=G.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,n_=G.div`
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
`;G.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e,variant:t})=>t===`primary`?`${e.colors.primary}10`:t===`success`?`${e.colors.success}10`:`transparent`};
  border-radius:  ${({theme:e})=>e.borderRadius.lg};
`,G.span`
  font-weight: 700;
  min-width: 25px;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
`;var r_=G.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  /* background: ${({theme:e,variant:t})=>`${e.colors.primary}10`}; */
`,i_=G.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`,a_=G.input`
  flex: 1;
  padding: ${X.spacing.sm} ${X.spacing.md};
  border: 1px solid ${X.colors.border};
  border-radius: ${X.borderRadius.md};
  font-family: ${X.fonts.body};
  font-size: ${X.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${X.colors.primary};
  }
  
  &::placeholder {
    color: ${X.colors.textLight};
  }
`,o_=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,s_=`activityListSelection`,c_=()=>{if(typeof window>`u`)return null;try{let e=window.sessionStorage.getItem(s_);return e?JSON.parse(e):null}catch{return null}},l_=[(0,J.jsxs)(J.Fragment,{children:[`Customer`,(0,J.jsx)(`br`,{}),`Order Item ID`]}),(0,J.jsxs)(J.Fragment,{children:[`Audit Type`,(0,J.jsx)(`br`,{}),`Store Location`]}),`Planned Date`,`Plan slots`,`Status`,`Actions`];function u_(e={}){let{start_date:t,end_date:n,retainer_list:r=[]}=e;return r.filter(e=>e.a_type===`P`&&e.start_date===t&&e.end_date===n)}var d_=(e=[],t=[])=>{let n=e.reduce((e,t)=>{let n=t.order_item_id;return e[n]||(e[n]={order_item_id:n,order_item_key:t.order_item_key||`--`,product_name:t.product_name||`--`,customer_name:t.customer_name||`--`,store_name:``,audit_type:``,planned_start_date:t.planned_start_date,planned_end_date:t.planned_end_date,total_planned_item:0,grouped_data:[],claims:[]}),e[n].total_planned_item+=1,e[n].store_name+=` ${t.store_name||``}`,e[n].audit_type+=` ${t.audit_type||``}`,t.planned_start_date&&(!e[n].planned_start_date||new Date(t.planned_start_date)<new Date(e[n].planned_start_date))&&(e[n].planned_start_date=t.planned_start_date),t.planned_end_date&&(!e[n].planned_end_date||new Date(t.planned_end_date)>new Date(e[n].planned_end_date))&&(e[n].planned_end_date=t.planned_end_date),t.claims&&Array.isArray(t.claims)&&t.claims.forEach(t=>{e[n].claims.some(e=>e.master_claim_id===t.master_claim_id)||e[n].claims.push(t)}),e[n].grouped_data.push(t),e},{});return Object.values(n).map(e=>{let n=tp(e.grouped_data,t);return{...e,...n}})},f_=()=>{let e=new Date,t=Me(),n=c_(),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(null),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(!1),[h,g]=(0,v.useState)({search:``,status:``}),[_,y]=(0,v.useState)(null),[b,x]=(0,v.useState)([]),[S,C]=(0,v.useState)([]),[w,T]=(0,v.useState)([]),[E,D]=(0,v.useState)(n?.tab||`month`),[O,k]=(0,v.useState)(n?.activeRangeType||`month`),[A,j]=(0,v.useState)(0),M=localStorage.getItem(`cust_emp_id`),[N,P]=(0,v.useState)(()=>{let e=n?.dateRange;return e?.start&&e?.end?e:jf({type:`current`,mode:`month`})}),[F,I]=(0,v.useState)(e.toISOString().split(`T`)[0]),L=()=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`,R=()=>{let t=new Date(e),n=t.getDay()||7;t.setDate(t.getDate()+4-n);let r=new Date(t.getFullYear(),0,1),i=Math.ceil(((t-r)/864e5+1)/7);return`${t.getFullYear()}-W${String(i).padStart(2,`0`)}`},[z,ee]=(0,v.useState)(n?.selectedMonth||L()),[B,V]=(0,v.useState)(n?.selectedWeek||R()),H=(0,v.useCallback)((e,t=w)=>Array.isArray(e)?e.map(e=>{let n=Rf(t,e);return{...e,claims:n,hasClaim:n.length>0}}):[],[w]);(0,v.useEffect)(()=>{typeof window<`u`&&window.sessionStorage.setItem(s_,JSON.stringify({tab:E,activeRangeType:O,selectedMonth:z,selectedWeek:B,dateRange:N}))},[E,O,z,B,N]),(0,v.useEffect)(()=>{M&&U(N.start,N.end)},[M,N.start,N.end]);let te=(0,v.useCallback)(async()=>{if(M)try{let e=(await al({emp_id:M}))?.data?.[0]||{};if(!e.id){T([]);return}let t=(await fl(`GET`,e.id,`CY`))?.data||[];T(t),x(e=>H(e,t))}catch(e){console.error(e),K.error(`Failed to load claims`),T([])}},[M,H]);(0,v.useEffect)(()=>{M&&te()},[M]);let U=async(e,t)=>{let n=localStorage.getItem(`cust_emp_id`),r=e||N.start,a=t||N.end,o=new Date(r);if(new Date(a)<o)return K.info(`End date cannot be earlier than start date`),!1;let s={emp_id:n,start_date:Ef(r),end_date:Ef(a)};i(!0);try{let[e,t]=await Promise.all([ol(s),sl(s)]),n=t?.data||[];C(n),x(H(zf(e?.data||[],n),w))}catch{K.error(`No data found...`),i(!1)}finally{i(!1)}},W=d_(b,S),ne=Kg({data:W,fields:[`customer_name`,`order_item_key`,`product_name`,`store_name`,`audit_type`],search:h.search,extraFilters:{activityStatus:h.status}}),{paginatedData:re,currentPage:ie,itemsPerPage:ae,totalItems:oe,handlePageChange:se}=Hg((0,v.useMemo)(()=>[...ne].sort((e,t)=>{if(e.activityStatus===`NS`&&t.activityStatus!==`NS`)return-1;if(e.activityStatus!==`NS`&&t.activityStatus===`NS`)return 1;let n=new Date(e.planned_start_date);return new Date(t.planned_start_date)-n}),[ne]),10);console.log(`paginatedData`,re);let ce=e=>{y(t=>t===e.order_item_id?null:e.order_item_id)},le=(e,n)=>{n.stopPropagation(),u(e),t(`/resource-list`,{state:{data:e,resourcePlannedList:S}})},ue=()=>{typeof window<`u`&&window.sessionStorage.removeItem(s_);let e=L(),t=jf({type:`current`,mode:`month`});g({search:``,status:`ALL`}),D(`month`),k(`month`),ee(e),V(R()),P(t),U(t.start,t.end)},de=e=>{let t=A+e;j(t);let n=jf({type:`current`,mode:O,offset:t});P(n),fetchEmpActivityAllocations(n.start,n.end)},fe=(e,t)=>e.filter(e=>e.statusDisplay===t).length,pe=fe(W,`Not Planned`),me=fe(W,`Not Started`),he=fe(W,`Actual Submitted`),ge=fe(W,`Plan Approved`),_e=fe(W,`Plan Submitted`),ve=[{icon:(0,J.jsx)(Uu,{}),label:`Total Audit Item`,value:W.length,color:`primary`,onClick:e=>g({...e,status:`ALL`})},{icon:(0,J.jsx)(Ul,{}),label:`Resource Not Planned`,value:pe,color:`error`,onClick:e=>g({...e,status:`NS`})},{icon:(0,J.jsx)(Xl,{}),label:`Resource Planned Submitted`,value:_e,color:`info`,onClick:e=>g({...e,status:`PS`})},{icon:(0,J.jsx)(Ku,{}),label:`Audit Actual Submitted`,value:he,color:`success`,onClick:e=>g({...e,status:`AS`})},{icon:(0,J.jsx)(Du,{}),label:`In Progress`,value:me,color:`info`,onClick:e=>g({...e,status:`P`})},{icon:(0,J.jsx)(Jg,{}),label:`Planned Approved`,value:ge,color:`info`,onClick:e=>g({...e,status:`PA`})}];return console.log(`paginatedData`,re),(0,J.jsxs)(ef,{title:`Audit/OrderItem Allocation List`,children:[(0,J.jsxs)(Xg,{children:[(0,J.jsx)(Yg,{children:`Track and manage your assigned audit tasks`}),(0,J.jsx)(`div`,{children:(0,J.jsxs)(`div`,{style:{marginTop:`0.5rem`,fontWeight:`bold`,fontSize:`1.1rem`,color:`#333`,display:`flex`,alignItems:`center`,gap:`0.8rem`},children:[(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>de(-1),children:`< Prev`}),(0,J.jsx)(`span`,{children:O===`month`?kf(N.start):Of(N.start,N.end)}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>de(1),children:`Next >`})]})})]}),(0,J.jsx)(o_,{children:ve.map(e=>(0,J.jsx)(hf,{icon:e.icon,label:e.label,value:e.value,color:e.color,sections:e?.sections,onClick:()=>{e?.onClick(),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})},onItemClick:t=>{e.onItemClick(t),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}}))}),(0,J.jsxs)(bf,{title:`Audit/Order Item List`,children:[(0,J.jsxs)(Zg,{style:{marginBottom:`1rem`},children:[(0,J.jsx)(a_,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:h.search,onChange:e=>g(t=>({...t,search:e.target.value}))}),(0,J.jsxs)(Qg,{name:`status`,value:h.status,onChange:e=>g(t=>({...t,status:e.target.value})),children:[(0,J.jsx)(`option`,{value:`ALL`,children:`All`}),(0,J.jsx)(`option`,{value:`NS`,children:`Not Planned`}),(0,J.jsx)(`option`,{value:`PS`,children:`Planned Submitted`}),(0,J.jsx)(`option`,{value:`AS`,children:`Actual Submitted`}),(0,J.jsx)(`option`,{value:`P`,children:`In Progress`})]}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,onClick:ue,children:`Clear Filters`})]}),(0,J.jsx)(Cg,{columns:l_,data:[...re],isLoading:r,modifiedId:!0,modifiedIdName:`order_item_id`,expandedRow:_,rowAction:ce,renderRow:e=>{let n=e?.grouped_data?.[0]||{};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)($,{children:[(0,J.jsx)(e_,{children:e.customer_name}),` `,(0,J.jsx)(t_,{children:e?.order_item_key})]}),(0,J.jsxs)($,{children:[e.product_name,(0,J.jsx)(`br`,{}),(0,J.jsx)(n_,{title:n.store_name||`-`,children:n?.store_name||`-`})]}),(0,J.jsx)($,{children:e.planned_start_date===e.planned_end_date?Tf(e.planned_start_date):(0,J.jsxs)(J.Fragment,{children:[Tf(e.planned_start_date),(0,J.jsx)(`br`,{}),Tf(e.planned_end_date)]})}),(0,J.jsx)($,{style:{paddingLeft:`2.5rem`},children:e.total_planned_item||0}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:Bf(e.activityStatus),children:e.statusDisplay})}),(0,J.jsx)($,{children:(0,J.jsxs)($g,{children:[e.total_planned_item===1&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?(0,J.jsxs)(Z,{size:`sm`,variant:`primary`,onClick:t=>{t.stopPropagation(),le(e?.grouped_data?.[0]||{},t)},children:[(0,J.jsx)(Kl,{size:16}),`Assign Resources`]}):(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:t=>{t.stopPropagation(),ce(e)},children:[_===e.order_item_id?(0,J.jsx)(Lu,{size:16}):(0,J.jsx)(Iu,{size:16}),_===e.order_item_id?`Hide Allocations`:`View Allocations`]}),(e.activityStatus===`C`||e.activityStatus===`AP`||e.activityStatus===`AS`)&&(0,J.jsxs)(Z,{size:`sm`,onClick:n=>{n.stopPropagation(),t(`/clamDetails`,{state:{data:{...e,claims:e?.claims||[],mode:`ADD`}}})},children:[(0,J.jsx)(xu,{}),`Claim`]})]})})]})},renderExpandedRow:e=>{let t=e?.grouped_data||[];return(0,J.jsx)(Cg,{columns:[`Sl No.`,`Planned Date`,`Planned Resource`,`Status`,`Action`],data:t,renderRow:e=>{let n=t.findIndex(t=>t===e),r=u_(e?.original_P)?.[0],i=e?.original_A?.resource_list?.length>0,a=e.planned_start_date===e.planned_end_date?Tf(e.planned_start_date):`${Tf(e.planned_start_date)} to ${Tf(e.planned_end_date)}`;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($,{style:{paddingLeft:`1.5rem`},children:n+1}),(0,J.jsx)($,{children:a}),(0,J.jsx)($,{children:(0,J.jsxs)(r_,{children:[(0,J.jsx)(i_,{variant:`primary`,children:r?.tl_count||0}),` `,`TL /`,` `,(0,J.jsx)(i_,{variant:`primary`,children:r?.ex_count||0}),` `,`EX`]})}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:Bf(e.activityStatus),children:e.statusDisplay})}),(0,J.jsx)($,{children:(0,J.jsxs)(Z,{size:`sm`,variant:!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?`primary`:`outline`,onClick:t=>{t.stopPropagation(),le(e,t)},children:[!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?(0,J.jsx)(Kl,{}):(0,J.jsx)(Iu,{}),!i&&(e.activityStatus===`NS`||e.activityStatus===`NP`)?`Assign`:`View`,` `,`Resources`]})})]})}})}}),(0,J.jsx)(Pm,{totalItems:oe,itemsPerPage:ae,currentPage:ie,onPageChange:se,siblingCount:2})]})]})},p_=(0,v.createContext)(null),m_=({children:e})=>{let[t,n]=(0,v.useState)({data:[],loading:!1,error:null}),[r,i]=(0,v.useState)({data:[],loading:!1,error:null}),[a,o]=(0,v.useState)({data:[],loading:!1,error:null}),[s,c]=(0,v.useState)({data:[],loading:!1,error:null}),l=(0,v.useCallback)(async(e={},t=[])=>{n(e=>({...e,loading:!0,error:null}));try{let r=await ol(e),i=Array.isArray(t)&&t.length>0?t:s.data,a=zf(r?.data,i);return n({data:a,loading:!1,error:null}),a}catch(e){throw n({data:[],loading:!1,error:e}),e}},[s.data]),u=(0,v.useCallback)(async(e={})=>{c(e=>({...e,loading:!0,error:null}));try{let t=((await sl(e))?.data||[]).map(e=>({...e,start_date:e.start_date?Q(e.start_date,!0):e.s_date?Q(e.s_date,!0):``,end_date:e.end_date?Q(e.end_date,!0):e.e_date?Q(e.e_date,!0):``}));return c({data:t,loading:!1,error:null}),t}catch(e){throw c({data:[],loading:!1,error:e}),console.error(`Failed to load allocations`,e),e}},[]),d=(0,v.useCallback)(async(e={})=>{o(e=>({...e,loading:!0,error:null}));try{let t=(await al(e))?.data||[];return o({data:t,loading:!1,error:null}),t}catch(e){throw o({data:[],loading:!1,error:e}),e}},[]),f=(0,v.useCallback)(async(e,t,n)=>{i(e=>({...e,loading:!0,error:null}));try{let r=(await fl(e,t,n))?.data||[];return i({data:r,loading:!1,error:null}),r}catch(e){throw i({data:[],loading:!1,error:e}),e}},[]),p=e=>{if(typeof window>`u`)return null;try{let t=window.sessionStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},m=(0,v.useMemo)(()=>({activityState:t,fetchEmpActivityAllocations:l,employeeState:a,fetchEmployees:d,claimState:r,fetchClaims:f,fetchContractAllocations:u,getStoredActivityListSelection:p,resourceAllocationState:s}),[t,a,r,l,d,f,u,s]);return(0,J.jsx)(p_.Provider,{value:m,children:e})},h_=()=>{let e=(0,v.useContext)(p_);if(!e)throw Error(`useActivity must be used inside ActivityProvider`);return e};G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,G.div`
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
`,G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,G.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,G.input`
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
`,G.select`
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
`,G.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,G.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,G.div`
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
`,G.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  /* background: ${({theme:e,variant:t})=>`${e.colors.primary}10`}; */
`,G.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;var g_=G.div`
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
`,__=G.p`
  color: ${({theme:e})=>e.colors.textLight};
`,v_=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,y_=G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,b_=G.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,x_=G.div`
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
`,S_=G.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,C_=G.input`
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
`,w_=G.select`
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
`,T_=()=>{let e=localStorage.getItem(`cust_emp_id`),{activityState:t,fetchEmpActivityAllocations:n,fetchContractAllocations:r,getStoredActivityListSelection:i,fetchClaims:a,fetchEmployees:o}=h_(),{data:s,loading:c,error:l}=t,[u,d]=(0,v.useState)([]),[f,p]=(0,v.useState)([]),[m,h]=(0,v.useState)({search:``,status:``}),[g,_]=(0,v.useState)(()=>jf({type:`month`})),y=async(t,i)=>{let a=t||g.start,o=i||g.end;if(!a||!o)return;let s={emp_id:e,start_date:Ef(a),end_date:Ef(o)};try{let e=await r(s);p(e),await n(s,e)}catch(e){K.error(e?.response?.data?.message||`Failed to fetch activity allocations`)}},b=(0,v.useCallback)(async()=>{if(e)try{let t=(await o({emp_id:e}))?.[0]||{};if(!t.id){d([]);return}d(await a(`GET`,t.id,`CY`)||[])}catch(e){console.error(e),K.error(`Failed to load claims`),d([])}},[e,o,a]);(0,v.useEffect)(()=>{e&&g?.start&&g?.end&&y()},[g,e]),(0,v.useEffect)(()=>{e&&b()},[e,b]);let x=e=>{let t=offset+e;setOffset(t);let n=jf({type:`current`,offset:t});_(n),fetchEmpAllocationData(n.start,n.end)},S=()=>{h({search:``,status:`ALL`})},C=np(s,f).map(e=>{let t=Rf(u,e),n=0,r=0;return t.forEach(e=>{(e.claim_items||[]).forEach(e=>{let t=Number(e.expense_amt??e.claim_amt??e.amount??0),i=Number(e.settlement_amt??0);n+=t,r+=t-i})}),{...e,claims:t,hasClaim:t.length>0,totalOPE:n,totalSettlement:r}}),w=Kg({data:C,fields:[`customer_name`,`order_item_key`,`product_name`,`store_name`,`audit_type`],search:m.search,extraFilters:{activityStatus:m.status}}),{paginatedData:T,currentPage:E,itemsPerPage:D,totalItems:O,handlePageChange:k}=Hg((0,v.useMemo)(()=>[...w].sort((e,t)=>{if(e.activityStatus===`AS`&&t.activityStatus!==`AS`)return-1;if(e.activityStatus!==`AS`&&t.activityStatus===`AS`)return 1;let n=new Date(e.planned_start_date);return new Date(t.planned_start_date)-n}),[w]),10),A=(e=[])=>{let t=0,n=0,r=0,i=0,a=0,o=0,s=0;return e.forEach(e=>{(e.claims||[]).forEach(e=>{(e.claim_items||[]).forEach(o=>{let s=Number(o.expense_amt??o.claim_amt??o.amount??0),c=Number(e.settlement_amt??0),l=String(o.expense_status??``).toUpperCase();t+=s,n+=c,l===`A`?r+=s:l===`N`?i+=s:a+=s})}),(e.resource_planned||[]).forEach(e=>{let t=Number(e.contract_rate??e.contart_rate??0);o+=t,(e.is_approve===!0||e.is_approved===!0)&&(s+=t)})}),{totalClaimAmount:t,totalClaimSettlement:n,totalClaimApproved:r,totalClaimNotSubmitted:i,totalClaimSubmitted:a,totalContractRate:o,totalApprovedContractRate:s}},j=e=>{let t=0,n=0,r=0,i=0;return(e.claims||[]).forEach(e=>{(e.claim_items||[]).forEach(e=>{let r=Number(e.expense_amt??e.claim_amt??e.amount??0),a=Number(e.settlement_amt??0);t+=r,n+=a,status!==`A`&&(i+=r)})}),(e.resource_planned||[]).forEach(e=>{r+=Number(e.contract_rate??e.contart_rate??0)}),{totalClaimAmount:t,totalSettlement:n,totalContractRate:r,totalPending:i}},M=A(C),N=[{label:`Total Order Items`,value:C?.length||0,color:`primary`,icon:(0,J.jsx)(Xu,{})},{label:`Expected Earnings`,value:ip((M.totalContractRate||0)+(M.totalClaimApproved||0)),color:`warning`,icon:(0,J.jsx)(Bl,{}),tooltip:`Approved: ${ip(M.totalClaimApproved)} + Contract Rate: ${ip(M.totalContractRate)}`},{label:`Payment Received`,value:ip(0+(M.totalClaimApproved||0)),color:`warning`,icon:(0,J.jsx)(Bl,{}),tooltip:`Approved: ${ip(M.totalClaimApproved)} + Contract Rate: ${ip(M.totalContractRate)}`},{label:`Total Claims`,value:ip(M.totalClaimAmount||0),color:`success`,icon:(0,J.jsx)(Mu,{})},{label:`Approved Claim Amount`,value:ip(M.totalClaimApproved||0),color:`success`,icon:(0,J.jsx)(Ju,{})},{label:`Total Settlement`,value:ip(M.totalClaimSettlement||0),color:`info`,icon:(0,J.jsx)(ku,{})},{label:`Claim Pending Amount`,value:ip((M.totalClaimAmount||0)-(M.totalClaimSettlement||0)),color:`warning`,icon:(0,J.jsx)(Hu,{})},{label:`Claim Not Submitted`,value:ip(M.totalClaimNotSubmitted||0),color:`error`,icon:(0,J.jsx)(Ru,{})},{label:`Claim Submitted`,value:ip(M.totalClaimSubmitted||0),color:`error`,icon:(0,J.jsx)(Ru,{})},{label:`Contract Rate`,value:ip(M.totalContractRate||0),color:`info`,icon:(0,J.jsx)(Pu,{})},{label:`Approved Contract Rate`,value:ip(M.totalApprovedContractRate||0),color:`success`,icon:(0,J.jsx)(qu,{})}];return(0,J.jsxs)(ef,{title:`Receivables Dashboard`,children:[(0,J.jsxs)(g_,{children:[(0,J.jsx)(__,{children:`Track and manage your clams`}),(0,J.jsx)(`div`,{children:(0,J.jsxs)(`div`,{style:{marginTop:`0.5rem`,fontWeight:`bold`,fontSize:`1.1rem`,color:`#333`,display:`flex`,alignItems:`center`,gap:`0.8rem`},children:[(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>x(-1),children:`< Prev`}),(0,J.jsx)(`span`,{children:kf(g.start)}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>x(1),children:`Next >`})]})})]}),(0,J.jsx)(v_,{children:N.map(e=>(0,J.jsx)(hf,{label:e.label,value:e.value,icon:e.icon,color:e.color}))}),(0,J.jsxs)(bf,{children:[(0,J.jsxs)(S_,{style:{marginBottom:`1rem`},children:[(0,J.jsx)(C_,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:m.search,onChange:e=>h(t=>({...t,search:e.target.value}))}),(0,J.jsxs)(w_,{name:`status`,value:m.status,onChange:e=>h(t=>({...t,status:e.target.value})),children:[(0,J.jsx)(`option`,{value:`ALL`,children:`All`}),(0,J.jsx)(`option`,{value:`NA`,children:`Not Assigned`}),(0,J.jsx)(`option`,{value:`P`,children:`In Progress`}),(0,J.jsx)(`option`,{value:`C`,children:`Completed`}),(0,J.jsx)(`option`,{value:`NS`,children:`Not Started`})]}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,onClick:S,children:`Clear Filters`})]}),(0,J.jsx)(Cg,{columns:D_,data:T,renderRow:e=>{let t=e.claims[0],{variant:n,label:r}=E_(t?.expense_status),{totalClaimAmount:i,totalSettlement:a,totalContractRate:o,totalPending:s}=j(e);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)($,{children:[(0,J.jsx)(y_,{children:e.customer_name}),` `,(0,J.jsx)(b_,{children:e?.order_item_key})]}),(0,J.jsxs)($,{children:[e.product_name,(0,J.jsx)(`br`,{}),(0,J.jsx)(x_,{title:e.store_name||`-`,children:e?.store_name||`-`})]}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:Bf(e.activityStatus),children:e.statusDisplay})}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:n,children:r})}),(0,J.jsxs)($,{style:{textAlign:`right`,paddingRight:`3rem`},children:[ip(o),` `]}),(0,J.jsxs)($,{style:{textAlign:`right`,paddingRight:`3rem`},children:[ip(i),` `]}),(0,J.jsxs)($,{style:{textAlign:`right`,paddingRight:`3rem`},children:[ip(a),` `]}),(0,J.jsxs)($,{style:{textAlign:`right`,paddingRight:`3rem`},children:[ip(s),` `]}),(0,J.jsx)($,{})]})}}),(0,J.jsx)(Pm,{totalItems:O,itemsPerPage:D,currentPage:E,onPageChange:k,siblingCount:2})]})]})},E_=e=>({N:{variant:`warning`,label:`Not Submitted`},S:{variant:`success`,label:`Submitted`},A:{variant:`info`,label:`Approved`},R:{variant:`error`,label:`Rejected`}})[e]||{variant:`warning`,label:`Not Submitted`},D_=[(0,J.jsxs)(J.Fragment,{children:[`Customer`,(0,J.jsx)(`br`,{}),`Order Item ID`]}),(0,J.jsxs)(J.Fragment,{children:[`Audit Type`,(0,J.jsx)(`br`,{}),`Store Location`]}),`Activity status`,`Activity status`,`Resource Rate`,`Claim Amount`,`Settlement`,`Pending`,`Actions`],O_=G.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: ${({theme:e})=>e.spacing?.md||`1rem`};
`,k_=G.div`
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
`,A_=G.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 99px;
  /* background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f5f7`}; */
  background: ${({theme:e,$variant:t})=>t?e.colors?.success:e.colors?.error};
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  font-size: ${({theme:e})=>e.fontSizes?.sm||`0.5rem`};
  color: ${({theme:e})=>e.colors?.card||`#333`};

  svg {
    color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  }

  span {
    color: ${({theme:e})=>e.colors?.card||`#888`};
    margin-right: 0.15rem;
  }
`,j_=G.div`
  position: relative;
  display: inline-block;
  flex: 1;
`,M_=G.input`
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
`,N_=G.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors?.textLight||`#bbb`};
  pointer-events: none;
  display: flex;
  align-items: center;
`,P_=G.select`
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
`,F_=G.select`
  padding: ${({theme:e})=>`${e?.spacing?.sm||`0.35rem`} ${e?.spacing?.md||`0.8rem`}`};
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
`,I_=G.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,L_=G.span`
  font-size: 0.76rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,R_=G.div`
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
`;G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #ef4444;
  margin-left: 0.25rem;
`;var z_=G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,B_=e=>({num:String(e.getDate()).padStart(2,`0`),dow:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`][e.getDay()]}),V_=[`#6C5CE7`,`#0984e3`,`#00b894`,`#e17055`,`#fd79a8`,`#74b9ff`,`#55efc4`],H_=e=>V_[(e||``).charCodeAt(0)%V_.length],U_=e=>(e||``).split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase(),W_=e=>{let t=String(e??``).trim().toUpperCase();return[`2`,`T`].includes(t)?`TL`:`EX`},G_=({employees:e,dayWindow:t,activityData:n,activityDates:r,activityStart:i,activityEnd:a,workingAllocations:o,busyDateMap:s,employeeDateMap:c,handleToggleAllocation:l,handleRoleChange:u,handleAutoAssign:d,handleUndoAutoAssign:f,lastAutoAssign:p})=>{let[m,h]=(0,v.useState)({search:``,roleFilter:`ALL`}),[g,_]=(0,v.useState)({}),y=(0,v.useMemo)(()=>e.map(e=>({...e,role:W_(e.grade_level)})),[e]),[b,x]=(0,v.useState)(0),S=t.length>6,C=(0,v.useMemo)(()=>S?t.slice(b,b+6):t,[t,b,S]),w=b>0,T=b+6<t.length,E=()=>x(e=>Math.max(0,e-6)),D=()=>x(e=>Math.min(t.length-6,e+6)),O=Kg({data:y,fields:[`name`,`emp_id`],search:m.search,extraFilters:m.roleFilter===`ALL`?{}:{role:m.roleFilter}}),{paginatedData:k,currentPage:A,itemsPerPage:j,totalItems:M,handlePageChange:N}=Hg(O,25),P=(n?.original_P?.retainer_list||[]).find(e=>e.a_type===`P`&&e.start_date===n?.original_P?.start_date&&e.end_date===n?.original_P?.end_date),F=P?.tl_count||0,I=P?.ex_count||0;o.filter(e=>e.emp_type===`T`&&e.action!==`DELETE`).length,o.filter(e=>e.emp_type===`E`&&e.action!==`DELETE`).length;let L=(0,v.useMemo)(()=>{let e=[`Resource`];return S&&e.push((0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,J.jsx)(Z,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!w,onClick:E,title:`Previous 7 days`,children:(0,J.jsx)(Gu,{size:11})})})),C.forEach((t,n)=>{let{num:r,dow:i}=B_(t);e.push((0,J.jsx)(`div`,{style:{textAlign:`center`,padding:`0px 0`,margin:`0 0px`,minWidth:`40px`},children:(0,J.jsxs)(`div`,{style:{fontWeight:`bold`},children:[r,` `,i]})},n))}),S&&e.push((0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,J.jsx)(Z,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!T,onClick:D,title:`Next 7 days`,children:(0,J.jsx)(Wu,{size:11})})})),e.push(`Action`),e},[C]),R=(0,v.useMemo)(()=>{let e={};return t.forEach(t=>{let n=Df(t);e[n]={tl:0,ex:0}}),Object.values(c).forEach(t=>{Object.entries(t).forEach(([t,n])=>{!n?.isAssigned||!e[t]||(n.emp_type===`T`?e[t].tl+=1:e[t].ex+=1)})}),e},[c,t]);return(0,v.useMemo)(()=>o.filter(e=>e.emp_type===`T`&&e.action!==`DELETE`).length,[o]),(0,v.useMemo)(()=>o.filter(e=>e.emp_type===`E`&&e.action!==`DELETE`).length,[o]),(0,J.jsxs)(bf,{hoverable:!1,title:`Resource Availability (${Tf(i)} – ${Tf(a)})`,children:[(0,J.jsxs)(O_,{children:[(0,J.jsxs)(k_,{children:[(0,J.jsx)(Yu,{size:10}),(0,J.jsx)(`span`,{children:`Activity:`}),Tf(i),` – `,Tf(a)]}),(0,J.jsxs)(k_,{children:[(0,J.jsx)(Vl,{size:10}),`TL`,(0,J.jsx)(`span`,{style:{fontWeight:600},children:`Planned:`}),` `,F]}),(0,J.jsxs)(k_,{children:[(0,J.jsx)(Hl,{size:10}),`EX`,(0,J.jsx)(`span`,{style:{fontWeight:600},children:`Planned:`}),` `,I]})]}),(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,marginBottom:`0.75rem`},children:[S&&(0,J.jsx)(Z,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!w,onClick:E,title:`Previous 7 days`,children:(0,J.jsx)(Gu,{size:11})}),C.map(e=>{let t=Df(e),{num:n,dow:r}=B_(e),i=R[t]||{tl:0,ex:0};return(0,J.jsxs)(A_,{style:{fontSize:`0.75rem`},$variant:F===i.tl&&I===i.ex,children:[(0,J.jsxs)(`span`,{style:{fontWeight:600},children:[n,` `,r,`:`]}),` TL `,i.tl,` · EX `,i.ex]},t)}),S&&(0,J.jsx)(Z,{size:`sm`,variant:`outline`,iconOnly:!0,disabled:!T,onClick:D,title:`Next 7 days`,children:(0,J.jsx)(Wu,{size:11})})]}),(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`,marginBottom:`1rem`},children:[(0,J.jsxs)(j_,{children:[(0,J.jsx)(N_,{children:(0,J.jsx)(du,{size:11})}),(0,J.jsx)(M_,{placeholder:`Search resources...`,value:m.search,onChange:e=>h(t=>({...t,search:e.target.value}))})]}),(0,J.jsxs)(P_,{value:m.roleFilter,onChange:e=>h(t=>({...t,roleFilter:e.target.value})),children:[(0,J.jsx)(`option`,{value:`ALL`,children:`All Roles`}),(0,J.jsx)(`option`,{value:`TL`,children:`Team Leads (TL)`}),(0,J.jsx)(`option`,{value:`EX`,children:`Executives (EX)`})]})]}),(0,J.jsx)(z_,{children:`**If you want to change the emp type then 1st select the role then select the date.`}),(0,J.jsx)(Cg,{columns:L,data:k,emptyMessage:`No matching employees found`,renderRow:e=>{let t=r.some(t=>{let n=Df(t),r=!!c[e.emp_id]?.[n],i=!!s[e.emp_id]?.[n];return!r&&!i});return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($,{children:(0,J.jsxs)(I_,{children:[(0,J.jsx)(R_,{color:H_(e.name),style:{width:24,height:24,fontSize:`0.55rem`},children:U_(e.name)}),(0,J.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minWidth:0,flex:1},children:[(0,J.jsx)(L_,{children:e.name}),(0,J.jsxs)(`span`,{style:{fontSize:`0.62rem`,color:`#999`},children:[e.emp_id,` • `,(0,J.jsx)(Sf,{variant:e.role===`TL`?`forward`:`info`,children:e.role})]})]})]})}),S&&(0,J.jsx)($,{}),C.map(t=>{let n=Df(t),r=c[e.emp_id]?.[n],i=!!r?.isAssigned,o=Number(e.grade_level)>1?`T`:`E`,d=r?.emp_type||g[`${e.emp_id}|${n}`]||o,f=!!s[e.emp_id]?.[n],p=a?n>Q(a,!0):!1;return(0,J.jsx)($,{style:{textAlign:`center`},children:(0,J.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,alignItems:`center`},children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:i||f,disabled:f,onChange:t=>l(e,n,t.target.checked,d),style:{width:16,height:16,accentColor:`#6C5CE7`,cursor:f?`not-allowed`:`pointer`},title:i?`Already assigned on this date`:f?`Not available on this date`:p?`After activity end date`:`Click to select`}),(0,J.jsxs)(F_,{value:d,disabled:f,onChange:t=>{let r=t.target.value;_(t=>({...t,[`${e.emp_id}|${n}`]:r})),u(e,n,r)},style:{width:`80%`},children:[(0,J.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),(0,J.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`})]})]})},n)}),S&&(0,J.jsx)($,{}),(0,J.jsx)($,{children:(0,J.jsxs)(`div`,{style:{marginLeft:`0.5rem`},children:[t?(0,J.jsx)(Z,{variant:`primary`,iconOnly:!0,onClick:()=>d(e),title:`Click to auto-assign available dates`,children:(0,J.jsx)(Kl,{size:12})}):(0,J.jsx)(Z,{variant:`outline`,iconOnly:!0,disabled:!0,title:`Already assigned / No free dates for this activity`,children:(0,J.jsx)(Ku,{size:11})}),p?.[e.emp_id]?.length>0&&(0,J.jsx)(Z,{variant:`outline`,iconOnly:!0,onClick:()=>f(e),title:`Undo last auto-assign for this resource`,children:(0,J.jsx)(Ql,{size:11})})]})})]})}}),O.length>0&&(0,J.jsx)(Pm,{totalItems:M,itemsPerPage:j,currentPage:A,onPageChange:N})]})},K_=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate())},q_=(e,t)=>{let n=[];Object.entries(e).forEach(([e,t])=>{(t.rows||[]).forEach(t=>{let r=Q(e,!0);n.push({id:t.resource_id??null,emp_id:t.emp_id,emp_type:t.emp_type,remarks:t.remarks||``,contract_rate:Number(t.contract_rate)||0,start_date:r,end_date:r,rowKey:t.rowKey})})});let r=[];t.forEach(e=>{let t=K_(e.s_date),n=K_(e.e_date);if(!t||!n)return;let i=new Date(t);for(;i<=n;){let t=Q(i,!0);r.push({id:e.id,emp_id:e.emp_id,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:Number(e.contract_rate)||0,start_date:t,end_date:t}),i.setDate(i.getDate()+1)}});let i=Xf(n),a=Xf(r),o={};a.forEach(e=>{o[e.id]=e});let s=[],c=[],l=[],u=new Set;return i.forEach(e=>{let t={emp_id:e.emp_id,emp_type:e.emp_type,start_date:Q(e.start_date),end_date:Q(e.end_date),remarks:e.remarks||``,contract_rate:e.contract_rate||0};if(e.id==null){s.push(t);return}u.add(e.id);let n=o[e.id];if(!n){s.push(t);return}e.start_date!==n.start_date||e.end_date!==n.end_date||e.emp_type!==n.emp_type||(e.remarks||``)!==(n.remarks||``)||String(e.contract_rate??``)!==String(n.contract_rate??``)?c.push({...t,id:e.id,is_updated:!0}):l.push({id:e.id,emp_id:e.emp_id,emp_type:e.emp_type})}),{addPayload:s,updatePayload:c,deletePayload:a.filter(e=>!u.has(e.id)).map(e=>({id:e.id,is_deleted:!0,emp_type:e.emp_type})),unchangedPayload:l}},J_=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());let[t,n,r]=String(e).split(`T`)[0].split(`-`).map(Number);return new Date(t,n-1,r)},Y_=e=>{let t=(0,yl.c)(84),{isOpen:n,onClose:r,employees:i,minActualDate:a,maxActualDate:o,isUpdateMode:s,getContractRateByType:c,dateWiseAssignments:l,busyDateMap:u,onSave:d}=e,f;t[0]===l?f=t[1]:(f=l===void 0?{}:l,t[0]=l,t[1]=f);let p=f,m;t[2]===u?m=t[3]:(m=u===void 0?{}:u,t[2]=u,t[3]=m);let h=m,[g,_]=(0,v.useState)(a),[y,b]=(0,v.useState)(o),x;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(x=[],t[4]=x):x=t[4];let[S,C]=(0,v.useState)(x),w;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(w={},t[5]=w):w=t[5];let[T,E]=(0,v.useState)(w);(0,v.useState)(``);let[D,O]=(0,v.useState)(`same`),[k,A]=(0,v.useState)(``),j;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(j={},t[6]=j):j=t[6];let[M,N]=(0,v.useState)(j);if(!n)return null;let P=ev,F;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(F=e=>{C(t=>t.includes(e.emp_id)?t.filter(t=>t!==e.emp_id):[...t,e.emp_id]),E(t=>t[e.emp_id]?t:{...t,[e.emp_id]:P(e)})},t[7]=F):F=t[7];let I=F,L;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(L=(e,t)=>{E(n=>({...n,[e]:t}))},t[8]=L):L=t[8];let R=L,z;t[9]!==p||t[10]!==T||t[11]!==i||t[12]!==y||t[13]!==c||t[14]!==M||t[15]!==d||t[16]!==D||t[17]!==k||t[18]!==S||t[19]!==g?(z=()=>{if(!g||!y){K.error(`Please select start date and end date`);return}if(g>y){K.error(`Start date cannot be after end date`);return}if(S.length===0){K.error(`Please select at least one resource`);return}let e=e=>{let t=J_(g),n=J_(y);for(;t&&n&&t<=n;){let n=(p[Df(t)]||[]).find(t=>t.emp_type===e);if(n?.contract_rate)return n.contract_rate;t.setDate(t.getDate()+1)}for(let t of Object.keys(p)){let n=(p[t]||[]).find(t=>t.emp_type===e&&t.contract_rate);if(n)return n.contract_rate}return c(e)};d(S.map(t=>{let n=i.find(e=>e.emp_id===t),r=T[t]||P(n);return{emp_id:t,employee_name:n?.name||``,emp_type:r,contract_rate:e(r),remarks:D===`same`?k:M[t]||``}}),g,y),C([]),E({}),A(``),N({}),O(`same`)},t[9]=p,t[10]=T,t[11]=i,t[12]=y,t[13]=c,t[14]=M,t[15]=d,t[16]=D,t[17]=k,t[18]=S,t[19]=g,t[20]=z):z=t[20];let ee=z,B;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(B=(e,t)=>{N(n=>({...n,[e]:t}))},t[21]=B):B=t[21];let V=B,H;t[22]!==h||t[23]!==y||t[24]!==g?(H=e=>{if(!g||!y)return!0;let t=J_(g),n=J_(y);if(!t||!n)return!0;for(;t<=n;){let n=Df(t);if(h[e]?.[n])return!1;t.setDate(t.getDate()+1)}return!0},t[22]=h,t[23]=y,t[24]=g,t[25]=H):H=t[25];let te=H,U=s?`Update Actual`:`Add Actual`,W;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(W={display:`flex`,gap:`1rem`},t[26]=W):W=t[26];let ne,re;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(ne={flex:1},re=(0,J.jsx)(Z_,{children:`Start Date`}),t[27]=ne,t[28]=re):(ne=t[27],re=t[28]);let ie;t[29]===y?ie=t[30]:(ie=e=>{let t=e.target.value;_(t),y&&t>y&&b(t)},t[29]=y,t[30]=ie);let ae;t[31]!==o||t[32]!==a||t[33]!==g||t[34]!==ie?(ae=(0,J.jsxs)(X_,{style:ne,children:[re,(0,J.jsx)(Q_,{type:`date`,value:g,min:a,max:o,onChange:ie})]}),t[31]=o,t[32]=a,t[33]=g,t[34]=ie,t[35]=ae):ae=t[35];let oe,se;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(oe={flex:1},se=(0,J.jsx)(Z_,{children:`End Date`}),t[36]=oe,t[37]=se):(oe=t[36],se=t[37]);let ce=g||a,le;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(le=e=>b(e.target.value),t[38]=le):le=t[38];let ue;t[39]!==y||t[40]!==o||t[41]!==ce?(ue=(0,J.jsxs)(X_,{style:oe,children:[se,(0,J.jsx)(Q_,{type:`date`,value:y,min:ce,max:o,onChange:le})]}),t[39]=y,t[40]=o,t[41]=ce,t[42]=ue):ue=t[42];let de;t[43]!==ae||t[44]!==ue?(de=(0,J.jsxs)(`div`,{style:W,children:[ae,ue]}),t[43]=ae,t[44]=ue,t[45]=de):de=t[45];let fe,pe;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(fe=(0,J.jsx)(Z_,{children:`Remarks Mode`}),pe={display:`flex`,gap:`1rem`},t[46]=fe,t[47]=pe):(fe=t[46],pe=t[47]);let me;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(me={display:`flex`,alignItems:`center`,gap:`0.35rem`,fontWeight:400},t[48]=me):me=t[48];let he=D===`same`,ge;t[49]===Symbol.for(`react.memo_cache_sentinel`)?(ge=()=>O(`same`),t[49]=ge):ge=t[49];let _e;t[50]===he?_e=t[51]:(_e=(0,J.jsxs)(Z_,{style:me,children:[(0,J.jsx)(`input`,{type:`radio`,name:`remarkMode`,checked:he,onChange:ge}),`Same remark for all`]}),t[50]=he,t[51]=_e);let ve;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(ve={display:`flex`,alignItems:`center`,gap:`0.35rem`,fontWeight:400},t[52]=ve):ve=t[52];let ye=D===`individual`,be;t[53]===Symbol.for(`react.memo_cache_sentinel`)?(be=()=>O(`individual`),t[53]=be):be=t[53];let xe;t[54]===ye?xe=t[55]:(xe=(0,J.jsxs)(Z_,{style:ve,children:[(0,J.jsx)(`input`,{type:`radio`,name:`remarkMode`,checked:ye,onChange:be}),`Individual remark per resource`]}),t[54]=ye,t[55]=xe);let Se;t[56]!==_e||t[57]!==xe?(Se=(0,J.jsxs)(X_,{children:[fe,(0,J.jsxs)(`div`,{style:pe,children:[_e,xe]})]}),t[56]=_e,t[57]=xe,t[58]=Se):Se=t[58];let Ce,we;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=(0,J.jsx)(Z_,{children:`Select Resources`}),we={maxHeight:220,overflowY:`auto`,border:`1px solid #eee`,borderRadius:6,padding:`0.5rem`},t[59]=Ce,t[60]=we):(Ce=t[59],we=t[60]);let Te;t[61]!==T||t[62]!==i||t[63]!==y||t[64]!==M||t[65]!==te||t[66]!==D||t[67]!==S||t[68]!==g?(Te=!g||g===`NaN-NaN-NaN`||!y?(0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,padding:`2rem 0`,color:`#999`,fontSize:`0.9rem`},children:`⚠️ Please select start and end date`}):(()=>{let e=i.filter(tv).filter(e=>te(e.emp_id));return e.length===0?(0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,padding:`2rem 0`,color:`#999`,fontSize:`0.9rem`},children:`📋 No resources found for the selected date range`}):e.map(e=>{let t=S.includes(e.emp_id);return(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.5rem`,padding:`0.35rem 0`,borderBottom:`1px solid #f5f5f5`},children:[(0,J.jsxs)(Z_,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flex:1},children:[(0,J.jsx)(`input`,{type:`checkbox`,checked:t,onChange:()=>I(e)}),e.name,` (`,e.emp_id,`)`]}),t&&(0,J.jsxs)($_,{value:T[e.emp_id]||P(e),onChange:t=>R(e.emp_id,t.target.value),style:{width:140},children:[(0,J.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),(0,J.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`})]}),D===`individual`&&(0,J.jsx)(Q_,{type:`text`,placeholder:`Remarks`,value:M[e.emp_id]||``,onChange:t=>V(e.emp_id,t.target.value),style:{width:180}})]},e.emp_id)})})(),t[61]=T,t[62]=i,t[63]=y,t[64]=M,t[65]=te,t[66]=D,t[67]=S,t[68]=g,t[69]=Te):Te=t[69];let Ee;t[70]===Te?Ee=t[71]:(Ee=(0,J.jsxs)(X_,{children:[Ce,(0,J.jsx)(`div`,{style:we,children:Te})]}),t[70]=Te,t[71]=Ee);let De;t[72]!==D||t[73]!==k?(De=D===`same`&&(0,J.jsxs)(X_,{children:[(0,J.jsx)(Z_,{children:`Remarks`}),(0,J.jsx)(Q_,{type:`text`,value:k,onChange:e=>A(e.target.value),placeholder:`Remarks`})]}),t[72]=D,t[73]=k,t[74]=De):De=t[74];let Oe;return t[75]!==ee||t[76]!==n||t[77]!==r||t[78]!==U||t[79]!==de||t[80]!==Se||t[81]!==Ee||t[82]!==De?(Oe=(0,J.jsxs)(Pd,{width:`1200px`,isOpen:n,onClose:r,title:U,onSave:ee,saveButtonText:`Continue`,cancelButtonText:`Cancel`,children:[de,Se,Ee,De]}),t[75]=ee,t[76]=n,t[77]=r,t[78]=U,t[79]=de,t[80]=Se,t[81]=Ee,t[82]=De,t[83]=Oe):Oe=t[83],Oe},X_=G.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Z_=G.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
`,Q_=G.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,$_=G.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;G.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;function ev(e){return Number(e?.grade_level)>1?`T`:`E`}function tv(e){return e.is_active!==!1&&e.is_active!==0&&e.is_active!==`false`}var nv=G.div`
  max-height: 800px;
  overflow-y: auto;

  border-radius: 8px;
`,rv=G.div`
  margin-bottom: 1.5rem;
  border: 1px solid ${({theme:e})=>e.colors?.primary||`#e0e0e0`}88;
  border-radius: 8px;
  overflow: hidden;
`,iv=G.div`
  background: #f8f9fa;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,av=G.div`
  font-size: ${({theme:e})=>e.fontSize?.md||`0.95rem`};
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#333`};
`,ov=G.div`
  font-size: 0.8rem;
  color:  ${({theme:e})=>e.colors?.card||`#333`};
  strong { color: ${({theme:e})=>e.colors?.card||`#333`}; }
  background-color: ${({$variant:e})=>e?X.colors.success:X.colors.error};
  padding: ${({theme:e})=>e.spacing.xs||`0.75rem`};
  border-radius: ${({theme:e})=>e.borderRadius.md||`0.25rem`};
`,sv=G.div`
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: none; }
`,cv=G.div`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors?.primary||`#888`};
  margin-bottom: 8px;
`,lv=G.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,uv=G.div`
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,dv=G.div`
  background: ${({$variant:e,theme:t})=>e===`plan`?t.colors?.backgroundAlt||`#f1f5f9`:`#fff7ed`};
  padding: 6px 10px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${({$variant:e})=>e===`plan`?`#334155`:`#9a5b13`};
`,fv=G.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-top: 1px solid #f1f1f1;
  &:first-of-type { border-top: none; }
`,pv=G.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,mv=G.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`,hv=G.div`
  font-size: 0.68rem;
  color: #888;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,gv=G.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,_v=G.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.primary||`#0E7A91`};
  white-space: nowrap;
`,vv=G.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,yv=G.div`
  padding: 14px 10px;
  text-align: center;
  font-size: 0.75rem;
  color: #999;
`,bv=G.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 8px 12px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f9fafb`};
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #333;
`;G.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
`,G.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.8fr;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f1f5f9`};
  padding: 6px 10px;
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #888;
`,G.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.8fr;
  align-items: center;
  padding: 7px 10px;
  border-top: 1px solid #f1f1f1;
  font-size: 0.76rem;
  color: #333;
`,G.a`
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors?.primary||`#0E7A91`};
  text-decoration: underline;
`,G.div`
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
`;var xv=G.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacings?.md||`0.5rem`};
  margin-bottom: ${({theme:e})=>e.spacings?.md||`0.5rem`};
  gap: ${({theme:e})=>e.spacings?.md||`0.5rem`};
`,Sv=G.div`
  font-size: 0.8rem;
  color:  ${({theme:e})=>e.colors?.text||`#333`};
  /* strong { color: ${({theme:e})=>e.colors?.text||`#333`}; } */
  background-color: ${({$variant:e})=>e?X.colors.backgroundAlt:``};
  padding: ${({theme:e})=>e.spacing.xs||`0.75rem`};
  border-radius: ${({theme:e})=>e.borderRadius.md||`0.25rem`};
`,Cv=e=>e===`T`?`TL`:`EX`,wv=e=>[{category:`Travel`,id:`CLM-${e}-01`,amount:1200,file:`#`},{category:`Food`,id:`CLM-${e}-02`,amount:450,file:`#`}],Tv=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());let[t,n,r]=String(e).split(`T`)[0].split(`-`).map(Number);return new Date(t,n-1,r)},Ev=e=>{if(!e)return``;let t=e instanceof Date?e:Tv(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`},Dv={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},Ov=e=>{if(typeof e!=`string`)return null;let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){let[,e,n,r]=t,i=new Date(Number(e),Number(n)-1,Number(r));return isNaN(i.getTime())?null:i}if(t=e.match(/^(\d{2})-(\d{2})-(\d{4})$/),t){let[,e,n,r]=t,i=new Date(Number(r),Number(n)-1,Number(e));return isNaN(i.getTime())?null:i}if(t=e.match(/^(\d{2})-([A-Za-z]{3})-(\d{4})$/),t){let[,e,n,r]=t,i=Dv[n.toLowerCase()];if(i==null)return null;let a=new Date(Number(r),i,Number(e));return isNaN(a.getTime())?null:a}return null},kv=({dateWiseAssignments:e,dayWindow:t,editingId:n,handleEditDate:r,handleDeleteDate:i,handleFieldChange:a,handleConfirmUpdate:o,handleCancelEdit:s,activityStart:c,activityEnd:l,activityData:u,employees:d=[],loadAllData:f,plannedTL:p,plannedEX:m,plannedTLRate:h,plannedEXRate:g,tlContractRate:_,setTlContractRate:y,exContractRate:b,setExContractRate:x,getContractRateByType:S,busyDateMap:C={}})=>{let w=localStorage.getItem(`cust_emp_id`),[T,E]=(0,v.useState)(!1),D=new Date,[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``),[M,N]=(0,v.useState)(u?.allAEntries||[]),[P,F]=(0,v.useState)(!1),[I,L]=(0,v.useState)(``),[R,z]=(0,v.useState)(``),[ee,B]=(0,v.useState)(``),[V,H]=(0,v.useState)(!1),[te,U]=(0,v.useState)({}),[W,ne]=(0,v.useState)(!1),[re,ie]=(0,v.useState)(``),[ae,oe]=(0,v.useState)(``),[se,ce]=(0,v.useState)({isOpen:!1,loading:!1,title:`Confirmation`,message:``,confirmLabel:`Confirm`,onConfirm:null});Me();let[le,ue]=(0,v.useState)(``),[de,fe]=(0,v.useState)(`E`),[pe,me]=(0,v.useState)(``),[he,ge]=(0,v.useState)(()=>new Set),[_e,ve]=(0,v.useState)(()=>new Set),[ye,be]=(0,v.useState)([]);Tv(l);let xe=Q(l)&&Q(D)>Q(l),Se=M.length>0,Ce=u?.original_A?.id||u?.a_id||null,[we,Te]=(0,v.useState)(!!Ce),[Ee,De]=(0,v.useState)(()=>new Set),Oe=Ee.size?[...Ee].map(e=>Q(e,!0)).sort().at(-1):null,ke=(0,v.useMemo)(()=>{let e={};return M.forEach(t=>{t?.start_date&&t?.id&&(e[t.start_date]=t.id)}),e},[M]);(0,v.useEffect)(()=>{M.length&&De(e=>{let t=new Set(e);return M.forEach(e=>{e?.start_date&&t.add(e.start_date)}),t})},[M]),(0,v.useEffect)(()=>{h!=null&&y(h),g!=null&&x(g)},[h,g]);let Ae=async()=>{try{let e=u?.original_P?.id;if(!e){K.error(`Missing p_id, cannot start activity`);return}let t=new Date,n=Q(c),r=t.toTimeString().slice(0,5),i=new FormData;i.append(`emp_id`,w),i.append(`activity_date`,n),i.append(`call_mode`,`ADD`),i.append(`p_id`,e),i.append(`geo_type`,`I`),i.append(`start_time`,r),i.append(`end_time`,``),await ll(i);for(let[e,t]of i.entries())console.log(e,t);await f(),await Ne(),K.success(`Activity started.`)}catch(e){K.error(e?.response?.data?.message||`Failed to start activity`)}},je=async e=>{try{let t=u?.original_P?.id;if(!t){K.error(`Missing p_id, cannot start activity`);return}let n=new Date,r=Q(e),i=n.toTimeString().slice(0,5),a=new FormData;a.append(`emp_id`,w),a.append(`activity_date`,r),a.append(`call_mode`,`ADD`),a.append(`p_id`,t),a.append(`geo_type`,`I`),a.append(`start_time`,i),a.append(`end_time`,``),await ll(a);for(let[e,t]of a.entries())console.log(e,t);await f(),await Ne(),K.success(`Activity started for ${e}.`)}catch(e){K.error(e?.response?.data?.message||`Failed to start activity`)}},Ne=(0,v.useCallback)(async()=>{let e=u?.planned_start_date,t=u?.planned_end_date,n=[...new Set((u?.allAEntries||[]).map(e=>e.id).filter(Boolean))];if(!e||!t||!n.length){be([]);return}try{E(!0),be((await Promise.all(n.map(e=>sl({emp_id:w,allocation_id:e})))).flatMap(e=>Array.isArray(e?.data)?e.data:[]).filter(e=>e?.is_active===!0))}catch(e){console.error(`Failed to fetch resource data:`,e),K.error(`Failed to load resource data`),be([])}finally{E(!1)}},[u,w]);(0,v.useEffect)(()=>{N(u?.allAEntries||[])},[u]),(0,v.useEffect)(()=>{ye.length&&De(e=>{let t=new Set(e);return ye.forEach(e=>{if(!e?.s_date||!e?.e_date)return;let n=Tv(e.s_date),r=Tv(e.e_date);if(!n||!r)return;let i=new Date(n);for(;i<=r;)t.add(Df(i)),i.setDate(i.getDate()+1)}),t})},[ye]),(0,v.useEffect)(()=>{Ne()},[Ne]);let Pe=async()=>{try{let{addPayload:e,updatePayload:t,deletePayload:n,unchangedPayload:r}=q_(te,ye),i=(e=>{let t={};return e.forEach(e=>{let n=ke[e.start_date]||Ce||u?.original_P?.id;t[n]||(t[n]=[]),t[n].push(e)}),t})([...e,...t,...n,...r]);for(let[e,t]of Object.entries(i)){let n=new FormData;n.append(`emp_id`,w),n.append(`p_id`,e);let r=t.some(e=>!e.is_deleted);n.append(`call_mode`,`UPDATE`),n.append(`c_emp_list`,JSON.stringify(t)),await cl(n);for(let[e,t]of n.entries())console.log(e,t);if(r){let t=new FormData;t.append(`emp_id`,w),t.append(`a_id`,e),t.append(`call_mode`,`UPDATE`),t.append(`activity_date`,Q(D)),t.append(`geo_type`,`O`),t.append(`is_complete`,`1`),await ll(t);for(let[e,n]of t.entries())console.log(e,n)}}U({}),await f(),K.success(`Actuals saved successfully`)}catch(e){K.error(e?.response?.data?.message||`Failed to save actuals`)}};(0,v.useEffect)(()=>{ye.length&&U(e=>{let t={...e};return ye.forEach(e=>{if(!e?.s_date||!e?.e_date)return;let n=Tv(e.s_date),r=Tv(e.e_date);if(!n||!r)return;let i=new Date(n);for(;i<=r;){let n=Df(i);t[n]||(t[n]={confirmed:!1,rows:[]});let r=`api-${e.id}-${e.allocation_id}-${n}`;t[n].rows.some(t=>t.source===`api`&&t.resource_id===e.id&&t.allocation_id===e.allocation_id)||(t[n]={...t[n],rows:[...t[n].rows,{rowKey:r,original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:Number(e.contract_rate)||0,resource_id:e.id,allocation_id:e.allocation_id,order_item_id:e.order_item_id,is_approved:!!e.is_approved,is_present:!!e.is_present,is_active:!!e.is_active,a_percent:e.a_percent,ope_amt:e.ope_amt,app_remarks:e.app_remarks||``,approve_date:e.approve_date,s_date:e.s_date,e_date:e.e_date,source:`api`}]}),i.setDate(i.getDate()+1)}}),t})},[ye]);let Fe=e=>{ge(t=>{let n=new Set(t);return n.delete(e),n}),ve(t=>new Set(t).add(e))},Ie=()=>{U(e=>{let t={};return Object.entries(e).forEach(([e,n])=>{n.confirmed&&(t[e]=n)}),t})},Le=Object.values(te).some(e=>!e.confirmed),Re=e=>{U(t=>{let n={...t};return delete n[e],n})},ze=t=>{let n=e[t]||[],r=t=>{let r=n.find(e=>e.emp_type===t&&e.contract_rate);if(r)return r.contract_rate;for(let n of Object.keys(e)){let r=(e[n]||[]).find(e=>e.emp_type===t&&e.contract_rate);if(r)return r.contract_rate}return S(t)};U(e=>{let n=e[t]||{confirmed:!1,rows:[]},i=Number(d[0]?.grade_level)>1?`T`:`E`;return{...e,[t]:{...n,rows:[...n.rows,{rowKey:crypto.randomUUID(),original_emp_id:null,emp_id:d[0]?.emp_id||``,employee_name:d[0]?.name||``,emp_type:i,remarks:``,contract_rate:r(i),start_date:t,end_date:t}]}}})},Be=(e,t)=>{U(n=>({...n,[e]:{confirmed:!1,rows:t.map(t=>({rowKey:crypto.randomUUID(),original_emp_id:t.emp_id,emp_id:t.emp_id,employee_name:t.employee_name,emp_type:t.emp_type,remarks:t.remarks||``,contract_rate:t.contract_rate||S(t.emp_type),start_date:e,end_date:e}))}}))},Ve=()=>{ie(rt),oe(it),ne(!0)},He=()=>{if(!Oe){K.error(`Start the activity for a date before copying actuals`);return}let n=new Date;n.setHours(0,0,0,0),U(r=>{let i={...r};return t.forEach(t=>{let r=Df(t);if(Q(r,!0),new Date(t.getFullYear(),t.getMonth(),t.getDate())>n||i[r]?.rows?.length)return;let a=e[r]||[];a.length!==0&&(i[r]={confirmed:!1,rows:a.map(e=>({rowKey:crypto.randomUUID(),original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:e.contract_rate||S(e.emp_type),start_date:r,end_date:r}))})}),i})},Ue=(e,t,n,r)=>{U(i=>{let a=i[e];return a?{...i,[e]:{...a,rows:a.rows.map(e=>e.rowKey===t?{...e,[n]:r}:e)}}:i})},We=(e,t,n)=>{let r=d.find(e=>e.emp_id===n);U(i=>{let a=i[e];return a?{...i,[e]:{...a,rows:a.rows.map(e=>e.rowKey===t?{...e,emp_id:n,employee_name:r?.name||e.employee_name}:e)}}:i})},Ge=(e,t)=>{U(n=>{let r=n[e];return r?{...n,[e]:{...r,rows:r.rows.filter(e=>e.rowKey!==t)}}:n})},Ke=async e=>{U(t=>({...t,[e]:{...t[e],confirmed:!0}}))},qe=e=>{U(t=>({...t,[e]:{...t[e],confirmed:!1}}))},Je=(e,t,n)=>{ge(e=>{let n=new Set(e);return n.delete(t),n}),n&&U(r=>{let i=r[e];return i?{...r,[e]:{...i,rows:i.rows.map(e=>e.rowKey===t?{...e,emp_id:n.emp_id,employee_name:n.employee_name,emp_type:n.emp_type,remarks:n.remarks,contract_rate:n.contract_rate}:e)}}:r})},Ye=new Set(t.map(e=>Df(e))),Xe=e=>typeof e==`string`&&(/^\d{4}-\d{2}-\d{2}$/.test(e)||/^\d{2}-\d{2}-\d{4}$/.test(e)||/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(e)),Ze=[...new Set([...Object.keys(te).filter(e=>Xe(e)&&(te[e]?.rows||[]).length>0),...ye.flatMap(e=>{let t=Ov(e.s_date)||Tv(e.s_date),n=Ov(e.e_date)||Tv(e.e_date);if(console.log(`r`,e),console.log(`s`,t),console.log(`e`,n),!t||!n)return[];let r=[],i=new Date(t);for(;i<=n;)r.push(Df(i)),i.setDate(i.getDate()+1);return r}).filter(Boolean),...M.map(e=>e.start_date).filter(Xe)])].filter(e=>!Ye.has(e)).map(e=>({d:Ov(e),dStr:e})).filter(e=>e.d),Qe=[...t.filter(t=>{let n=Df(t),r=(e[n]||[]).length>0,i=(te[n]?.rows||[]).length>0;return r||i}).map(e=>({d:e,dStr:Df(e)})),...Ze].sort((e,t)=>e.d-t.d),$e=Kg({data:Qe,fields:[],search:``,extraFilters:{dateRange:{field:`d`,from:O?Tv(O):null,to:A?Tv(A):null}}});(0,v.useEffect)(()=>{if(!Qe.length||O||A)return;let e=Qe.map(({d:e})=>e).filter(e=>e instanceof Date&&!isNaN(e));if(!e.length)return;let t=Tv(Q(c,!0)),n=new Date(Math.min(...e)),r=t&&n<t?n:t||n,i=new Date(Math.max(...e));k(Ev(r)),j(Ev(i))},[Qe]),D.setHours(0,0,0,0);let et=Tv(c),tt=Tv(l),nt=tt&&tt<D?tt:D,rt=et?Ev(et):``,it=Ev(nt),at=Qe.some(({dStr:e})=>!ye.some(t=>{let n=Q(e,!0),r=Q(t.s_date,!0),i=Q(t.e_date,!0);return n&&r&&i&&n>=r&&n<=i})),ot=_e.size>0||Object.values(te).some(e=>(e.rows||[]).some(e=>e.source!==`api`)),st=({title:e=`Confirmation`,message:t,confirmLabel:n=`Confirm`,onConfirm:r,reload:i=!1})=>{ce({isOpen:!0,loading:!1,title:e,message:t,confirmLabel:n,onConfirm:r,reload:i})},ct=()=>{ce(e=>({...e,isOpen:!1,loading:!1,onConfirm:null}))},lt=async()=>{try{ce(e=>({...e,loading:!0})),se.onConfirm&&await se.onConfirm();let e=se.reload;ct(),e&&window.location.reload()}catch{ce(e=>({...e,loading:!1}))}},ut=(e,t,n)=>{U(r=>{let i={...r},a=Tv(t),o=Tv(n);for(;a<=o;){let t=Df(a),n=i[t]||{confirmed:!1,rows:[]};i[t]={...n,confirmed:!1,rows:[...n.rows,...e.map(e=>({rowKey:crypto.randomUUID(),original_emp_id:null,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks,contract_rate:e.contract_rate??S(e.emp_type),start_date:t,end_date:t}))]},a.setDate(a.getDate()+1)}return i}),ne(!1)},dt=Object.values(e||{}).flat().some(e=>e?.is_approved===!0||e?.is_present===!0),ft=Se||dt||h||g,pt=Object.values(e||{}).some(e=>(e||[]).some(e=>e.status===`ORIGINAL`));return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(bf,{title:`Resource Overview`,hoverable:!1,headerAction:Se?xe&&at?(0,J.jsx)(Lv,{activityStarted:we,handleStartActivity:je,handleCopyAllActual:He,handleCancelCopyAllActual:Ie,hasUnconfirmedDrafts:Le,handleOpenActualRangeModal:Ve}):xe?(0,J.jsx)(xv,{children:(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:Ve,children:[(0,J.jsx)(gu,{}),` Add Actual`]})}):null:xe&&pt?(0,J.jsx)(Z,{size:`md`,variant:`primary`,onClick:()=>st({title:`Start Activity`,message:`Are you sure you want to start this activity?`,confirmLabel:`Start`,onConfirm:Ae,reload:!0}),children:`Start Activity`}):null,children:[(0,J.jsxs)(nv,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[$e.length!==0&&(0,J.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,flexWrap:`wrap`,margin:`0.5rem 0`},children:[(0,J.jsxs)(jv,{children:[(0,J.jsx)(Mv,{children:`From`}),(0,J.jsx)(Nv,{type:`date`,value:O,onChange:e=>k(e.target.value)})]}),(0,J.jsxs)(jv,{children:[(0,J.jsx)(Mv,{children:`To`}),(0,J.jsx)(Nv,{type:`date`,value:A,onChange:e=>j(e.target.value)})]}),(O||A)&&(0,J.jsxs)(jv,{children:[(0,J.jsx)(Mv,{children:` `}),(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:()=>{k(``),j(``)},children:`Clear`})]})]}),$e.length!==0&&(0,J.jsxs)(Sv,{$variant:!1,children:[`🟢: `,(0,J.jsx)(`strong`,{children:`Matched With Plan Resource`}),` \xA0\xA0 🔴: `,(0,J.jsx)(`strong`,{children:`Not Matched With Plan Resource`})]})]}),$e.length!==0&&(0,J.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(180px, 240px))`,gap:`1rem`,margin:`0.75rem 0 1rem`},children:[p!==0&&(0,J.jsxs)(jv,{children:[(0,J.jsx)(Mv,{children:`TL Contract Rate`}),(0,J.jsx)(Nv,{type:`number`,min:`0`,value:_,placeholder:`Enter TL contract rate`,disabled:ft,onChange:e=>y(e.target.value)})]}),m!==0&&(0,J.jsxs)(jv,{children:[(0,J.jsx)(Mv,{children:`EX Contract Rate`}),(0,J.jsx)(Nv,{type:`number`,min:`0`,value:b,placeholder:`Enter EX contract rate`,disabled:ft,onChange:e=>x(e.target.value)})]})]}),$e.filter(({d:e})=>e instanceof Date&&!isNaN(e)).length===0?(0,J.jsx)(yv,{style:{fontSize:`1rem`,padding:`2rem`},children:`No resource allocated`}):$e.filter(({d:e})=>e instanceof Date&&!isNaN(e)).map(({d:t,dStr:f})=>{let h=e[f]||[],g=h.filter(e=>e.emp_type===`T`).length,v=h.filter(e=>e.emp_type===`E`).length,y=ye.filter(e=>{if(!e?.s_date||!e?.e_date)return!1;let t=Q(f,!0),n=Q(e.s_date,!0),r=Q(e.e_date,!0);return t&&n&&r&&t>=n&&t<=r}).map(e=>({...e,rowKey:`api-${e.id}-${e.allocation_id}-${f}`,original_emp_id:e.emp_id,emp_id:e.emp_id,employee_name:e.employee_name,emp_type:e.emp_type,remarks:e.remarks||``,contract_rate:e.contract_rate||0,is_approved:!!e.is_approved,is_present:!!e.is_present,is_active:!!e.is_active,allocation_id:e.allocation_id,resource_id:e.id})),x=y.length>0,w=y.some(e=>he.has(e.rowKey)),T=Ee.has(f)||x,E=te[f],D=E?.rows||[],O=new Map(D.map(e=>[e.rowKey,e])),k=x?[...y.map(e=>O.get(e.rowKey)||e),...D.filter(e=>!y.some(t=>t.rowKey===e.rowKey))]:D,A=new Set(h.map(e=>e.emp_id)),j=h.some(e=>e.status===`ORIGINAL`),N=h.reduce((e,t)=>e+(Number(t.contract_rate)||0),0),P=k.reduce((e,t)=>e+(Number(t.contract_rate)||0),0);N+wv(f).reduce((e,t)=>e+(Number(t.amount)||0),0),M.some(e=>e.start_date===f);let F=p===g&&m===v,I=e=>ye.some(t=>{let n=Q(e,!0),r=Q(t.s_date,!0),i=Q(t.e_date,!0);return n&&r&&i&&n>=r&&n<=i}),L=$e.filter(({d:e})=>e instanceof Date&&!isNaN(e)).sort((e,t)=>e.d-t.d),R=L.find(({dStr:e},t)=>Ee.has(e)||I(e)?!1:L.slice(0,t).every(({dStr:e})=>I(e)))?.dStr;return(0,J.jsxs)(rv,{children:[(0,J.jsxs)(iv,{children:[(0,J.jsx)(av,{children:t instanceof Date&&!isNaN(t)?t.toLocaleDateString(`en-US`,{month:`long`,year:`numeric`,day:`numeric`}).toUpperCase():f}),(0,J.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[!F&&(0,J.jsxs)(Sv,{$variant:!0,children:[`Required (TL: `,(0,J.jsx)(`strong`,{children:p}),` \xA0\xA0 EX: `,(0,J.jsx)(`strong`,{children:m}),`)`]}),(0,J.jsxs)(ov,{$variant:F,children:[`Plan (TL: `,(0,J.jsx)(`strong`,{children:g}),` \xA0\xA0 EX: `,(0,J.jsx)(`strong`,{children:v}),`)`]})]})]}),(0,J.jsxs)(sv,{children:[(0,J.jsx)(cv,{children:`Resource Details`}),(0,J.jsxs)(lv,{children:[(0,J.jsxs)(uv,{children:[(0,J.jsxs)(dv,{$variant:`plan`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,J.jsx)(`span`,{children:`Plan`}),!xe&&!T&&j&&f===R&&(0,J.jsx)(Z,{size:`sm`,variant:`primary`,onClick:()=>st({title:`Start Activity`,message:`Are you sure you want to start the activity for ${f}?`,confirmLabel:`Start`,onConfirm:()=>je(f),reload:!0}),children:`Start Activity`}),!xe&&T&&!x&&!E&&!w&&h.length>0&&(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:()=>Be(f,h),children:[(0,J.jsx)(mg,{}),` Copy Actual`]}),T&&E&&!E.confirmed&&(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:()=>Re(f),children:`Cancel Copy Actual`})]}),h.length===0?(0,J.jsx)(yv,{children:`No resources planned`}):h.map(e=>{let t=e.is_approved||u?.allAEntries?.length;return n===e.rowKey?(0,J.jsx)(Fv,{row:e,onChange:a,onConfirm:o,onCancel:s,activityStart:c,activityEnd:l,openConfirmation:st,tlContractRate:_,exContractRate:b},e.rowKey):(0,J.jsxs)(fv,{children:[(0,J.jsxs)(pv,{children:[(0,J.jsxs)(mv,{children:[e.employee_name||e.emp_id,(0,J.jsxs)(`span`,{style:{color:X.colors.textLight},children:[`(`,e.emp_id,`)`]}),e.action===`ADD`&&(0,J.jsx)(Sf,{variant:`warning`,style:{fontSize:`0.58rem`},children:`New`}),e.action===`UPDATE`&&(0,J.jsx)(Sf,{variant:`info`,style:{fontSize:`0.58rem`},children:`Updated`}),e.is_approved&&(0,J.jsx)(Sf,{variant:`success`,style:{fontSize:`0.58rem`},children:`Approved`})]}),(0,J.jsxs)(hv,{children:[(0,J.jsx)(Sf,{variant:e.emp_type===`T`?`forward`:`info`,style:{fontSize:`0.6rem`},children:Cv(e.emp_type)}),(0,J.jsxs)(`span`,{children:[e.start_date||`—`,` to `,e.end_date||`—`]}),e.remarks&&(0,J.jsxs)(`span`,{children:[`· `,e.remarks]})]})]}),(0,J.jsxs)(gv,{children:[(0,J.jsxs)(_v,{children:[`₹`,Number(e.contract_rate)>0?e.contract_rate:e.emp_type===`T`?_||0:b||0]}),(0,J.jsxs)(vv,{onClick:e=>e.stopPropagation(),children:[(0,J.jsx)(Z,{iconOnly:!0,variant:`primary`,title:`Edit`,disabled:t,onClick:()=>r(e,f),children:(0,J.jsx)(Bu,{size:11})}),(0,J.jsx)(Z,{iconOnly:!0,variant:`outlines`,title:`Remove`,disabled:t,onClick:()=>i(e,f),children:(0,J.jsx)($l,{size:11})})]})]})]},e.rowKey)}),k.filter((e,t,n)=>!A.has(e.emp_id)&&n.findIndex(t=>t.emp_id===e.emp_id)===t).map(e=>(0,J.jsx)(fv,{style:{opacity:.6},children:(0,J.jsx)(pv,{children:(0,J.jsxs)(mv,{children:[e.employee_name||e.emp_id,(0,J.jsx)(Sf,{variant:`warning`,style:{fontSize:`0.58rem`},children:`Not planned for this date`})]})})},`extra-${e.rowKey}`)),(0,J.jsx)(bv,{style:{marginTop:10},children:(0,J.jsxs)(`span`,{children:[`Plan Total: ₹`,N]})})]}),(0,J.jsxs)(uv,{children:[(0,J.jsx)(dv,{$variant:`actual`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,J.jsx)(`span`,{children:`Actual`})}),k.length===0&&(0,J.jsx)(yv,{children:`No actual data recorded`}),k.map(t=>{let n=t.is_approved===!0||t.is_present===!0;return(0,J.jsx)(Iv,{row:t,employees:d,busyDateMap:C,dStr:f,onSave:x?()=>Fe(t.rowKey):void 0,onCancel:x?()=>Je(f,t.rowKey,y.find(e=>e.rowKey===t.rowKey)):void 0,readOnly:x?!0:E?.confirmed,isReplaced:x?!A.has(t.emp_id):t.original_emp_id!=null&&t.emp_id!==t.original_emp_id,minActualDate:Q(rt,!0),maxActualDate:Q(it,!0),onFieldChange:(r,i)=>{if(!n&&(Ue(f,t.rowKey,r,i),r===`emp_type`)){let n=null;for(let t of Object.keys(e)){let r=(e[t]||[]).find(e=>e.emp_type===i&&e.contract_rate);if(r){n=r.contract_rate;break}}let r=n||S(i);Ue(f,t.rowKey,`contract_rate`,r)}},disableActualAction:n,onEmployeeChange:e=>{n||We(f,t.rowKey,e)},onToggleEdit:void 0,onRemove:()=>{n||Ge(f,t.rowKey)}},t.rowKey)}),!x&&E&&!E.confirmed&&(0,J.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`,padding:`8px 10px`},children:[(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:()=>ze(f),children:[(0,J.jsx)(Kl,{}),` Add resource`]}),E.rows.length>0&&(0,J.jsxs)(Z,{size:`sm`,variant:`success`,onClick:()=>Ke(f),children:[(0,J.jsx)(Xl,{}),` Confirm`]})]}),!x&&E?.confirmed&&(0,J.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`8px 10px`},children:[(0,J.jsx)(Sf,{variant:`success`,style:{fontSize:`0.6rem`},children:`Confirmed`}),(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:()=>qe(f),children:`Edit`})]}),(0,J.jsx)(bv,{style:{marginTop:10},children:(0,J.jsxs)(`span`,{children:[`Actual Total: ₹`,P]})})]})]})]}),(0,J.jsx)(xv,{})]},f)})]}),Se&&ot&&(0,J.jsx)(xv,{style:{marginTop:`1rem`,justifyContent:`flex-end`},children:(0,J.jsx)(Z,{variant:`primary`,onClick:()=>st({title:`Submit Actuals`,message:`Are you sure you want to submit actual allocations?`,confirmLabel:`Submit`,onConfirm:Pe,reload:!0}),children:`Submit Actuals`})})]}),W&&(0,J.jsx)(Y_,{isOpen:W,onClose:e=>{ne(!1),e.stopPropagation()},employees:d,minActualDate:rt,maxActualDate:it,onSave:ut,isUpdateMode:V,getContractRateByType:S,dateWiseAssignments:e,busyDateMap:C}),(0,J.jsx)(Bd,{isOpen:se.isOpen,onClose:ct,isLoading:se.loading,onConfirm:lt,title:se.title,message:se.message,confirmLabel:se.confirmLabel})]})},Av=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f9f9fa`};
  border-radius: 6px;
  border: 1px dashed ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  margin: 0.5rem 0;
`,jv=G.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,Mv=G.label`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors?.textLight||`#666`};
`,Nv=G.input`
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
`,Pv=G.select`
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
`;G.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,G.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,G.h3`
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
`,G.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,G.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
`,G.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,G.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`,G.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;var Fv=e=>{let t=(0,yl.c)(62),{row:n,onChange:r,onConfirm:i,onCancel:a,activityStart:o,activityEnd:s,openConfirmation:c,tlContractRate:l,exContractRate:u}=e,d;t[0]===o?d=t[1]:(d=o?Q(o,!0):``,t[0]=o,t[1]=d);let f=d,p;t[2]===s?p=t[3]:(p=s?Q(s,!0):``,t[2]=s,t[3]=p);let m=p,h;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,J.jsx)(Mv,{children:`Start Date`}),t[4]=h):h=t[4];let g=n.start_date||``,_;t[5]!==r||t[6]!==n.rowKey?(_=e=>r(n.rowKey,`start_date`,e.target.value),t[5]=r,t[6]=n.rowKey,t[7]=_):_=t[7];let v;t[8]!==m||t[9]!==f||t[10]!==g||t[11]!==_?(v=(0,J.jsxs)(jv,{children:[h,(0,J.jsx)(Nv,{type:`date`,min:f,max:m,value:g,onChange:_})]}),t[8]=m,t[9]=f,t[10]=g,t[11]=_,t[12]=v):v=t[12];let y;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,J.jsx)(Mv,{children:`End Date`}),t[13]=y):y=t[13];let b=n.end_date||``,x;t[14]!==r||t[15]!==n.rowKey?(x=e=>r(n.rowKey,`end_date`,e.target.value),t[14]=r,t[15]=n.rowKey,t[16]=x):x=t[16];let S;t[17]!==m||t[18]!==f||t[19]!==b||t[20]!==x?(S=(0,J.jsxs)(jv,{children:[y,(0,J.jsx)(Nv,{type:`date`,min:f,max:m,value:b,onChange:x})]}),t[17]=m,t[18]=f,t[19]=b,t[20]=x,t[21]=S):S=t[21];let C;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,J.jsx)(Mv,{children:`Employee Type`}),t[22]=C):C=t[22];let w=n.emp_type||`E`,T;t[23]!==u||t[24]!==r||t[25]!==n.rowKey||t[26]!==l?(T=e=>{let t=e.target.value;r(n.rowKey,`emp_type`,t),r(n.rowKey,`contract_rate`,t===`T`?l:u)},t[23]=u,t[24]=r,t[25]=n.rowKey,t[26]=l,t[27]=T):T=t[27];let E,D;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,J.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),D=(0,J.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`}),t[28]=E,t[29]=D):(E=t[28],D=t[29]);let O;t[30]!==w||t[31]!==T?(O=(0,J.jsxs)(jv,{children:[C,(0,J.jsxs)(Pv,{value:w,onChange:T,children:[E,D]})]}),t[30]=w,t[31]=T,t[32]=O):O=t[32];let k;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,J.jsx)(Mv,{children:`Contract Rate`}),t[33]=k):k=t[33];let A=n.emp_type===`T`?l:u,j;t[34]===A?j=t[35]:(j=(0,J.jsxs)(jv,{children:[k,(0,J.jsx)(Nv,{type:`number`,value:A,disabled:!0})]}),t[34]=A,t[35]=j);let M,N;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(M={gridColumn:`span 2`},N=(0,J.jsx)(Mv,{children:`Remarks`}),t[36]=M,t[37]=N):(M=t[36],N=t[37]);let P=n.remarks||``,F;t[38]!==r||t[39]!==n.rowKey?(F=e=>r(n.rowKey,`remarks`,e.target.value),t[38]=r,t[39]=n.rowKey,t[40]=F):F=t[40];let I;t[41]!==P||t[42]!==F?(I=(0,J.jsxs)(jv,{style:M,children:[N,(0,J.jsx)(Nv,{type:`text`,value:P,placeholder:`Remarks`,onChange:F})]}),t[41]=P,t[42]=F,t[43]=I):I=t[43];let L;t[44]===Symbol.for(`react.memo_cache_sentinel`)?(L={display:`flex`,alignItems:`flex-end`,gap:`0.5rem`},t[44]=L):L=t[44];let R;t[45]!==i||t[46]!==c||t[47]!==n.rowKey?(R=(0,J.jsx)(Z,{size:`small`,variant:`successGhost`,onClick:()=>c({title:`Update Resource`,message:`Are you sure you want to update this resource?`,confirmLabel:`Update`,onConfirm:()=>i(n.rowKey)}),children:`Confirm`}),t[45]=i,t[46]=c,t[47]=n.rowKey,t[48]=R):R=t[48];let z;t[49]!==a||t[50]!==n.rowKey?(z=(0,J.jsx)(Z,{size:`small`,variant:`outlines`,onClick:()=>a(n.rowKey),children:`Cancel`}),t[49]=a,t[50]=n.rowKey,t[51]=z):z=t[51];let ee;t[52]!==R||t[53]!==z?(ee=(0,J.jsxs)(`div`,{style:L,children:[R,z]}),t[52]=R,t[53]=z,t[54]=ee):ee=t[54];let B;return t[55]!==S||t[56]!==O||t[57]!==j||t[58]!==I||t[59]!==ee||t[60]!==v?(B=(0,J.jsxs)(Av,{onClick:Rv,children:[v,S,O,j,I,ee]}),t[55]=S,t[56]=O,t[57]=j,t[58]=I,t[59]=ee,t[60]=v,t[61]=B):B=t[61],B},Iv=e=>{let t=(0,yl.c)(113),{row:n,employees:r,readOnly:i,isReplaced:a,onFieldChange:o,onEmployeeChange:s,onRemove:c,disableActualAction:l,onToggleEdit:u,onSave:d,onCancel:f,minActualDate:p,maxActualDate:m,busyDateMap:h,dStr:g}=e,_;t[0]===h?_=t[1]:(_=h===void 0?{}:h,t[0]=h,t[1]=_);let v=_;if(i){let e=n.employee_name||n.emp_id,r;t[2]===a?r=t[3]:(r=a&&(0,J.jsx)(Sf,{variant:`info`,style:{fontSize:`0.58rem`},children:`Add`}),t[2]=a,t[3]=r);let i;t[4]!==e||t[5]!==r?(i=(0,J.jsxs)(mv,{children:[e,r]}),t[4]=e,t[5]=r,t[6]=i):i=t[6];let o=n.emp_type===`T`?`forward`:`info`,s;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(s={fontSize:`0.6rem`},t[7]=s):s=t[7];let c=n.emp_type===`T`?`TL`:`EX`,d;t[8]!==o||t[9]!==c?(d=(0,J.jsx)(Sf,{variant:o,style:s,children:c}),t[8]=o,t[9]=c,t[10]=d):d=t[10];let f=n.start_date||n.s_date||`—`,p=n.end_date||n.e_date||`—`,m;t[11]!==f||t[12]!==p?(m=(0,J.jsxs)(`span`,{children:[f,` to `,p]}),t[11]=f,t[12]=p,t[13]=m):m=t[13];let h;t[14]===n.remarks?h=t[15]:(h=n.remarks&&(0,J.jsxs)(`span`,{children:[`· `,n.remarks]}),t[14]=n.remarks,t[15]=h);let g;t[16]!==m||t[17]!==h||t[18]!==d?(g=(0,J.jsxs)(hv,{children:[d,m,h]}),t[16]=m,t[17]=h,t[18]=d,t[19]=g):g=t[19];let _;t[20]!==g||t[21]!==i?(_=(0,J.jsxs)(pv,{children:[i,g]}),t[20]=g,t[21]=i,t[22]=_):_=t[22];let v=n.contract_rate==null?`—`:`₹${n.contract_rate}`,y;t[23]===v?y=t[24]:(y=(0,J.jsx)(_v,{children:v}),t[23]=v,t[24]=y);let b;t[25]!==l||t[26]!==u?(b=!l&&u&&(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:u,children:`Edit`}),t[25]=l,t[26]=u,t[27]=b):b=t[27];let x;t[28]!==y||t[29]!==b?(x=(0,J.jsxs)(gv,{children:[y,b]}),t[28]=y,t[29]=b,t[30]=x):x=t[30];let S;return t[31]!==_||t[32]!==x?(S=(0,J.jsxs)(fv,{children:[_,x]}),t[31]=_,t[32]=x,t[33]=S):S=t[33],S}let y=zv,b;t[34]===a?b=t[35]:(b=a&&(0,J.jsx)(Sf,{variant:`warning`,style:{fontSize:`0.55rem`},children:`Replaced`}),t[34]=a,t[35]=b);let x;t[36]===b?x=t[37]:(x=(0,J.jsxs)(Mv,{children:[`Resource `,b]}),t[36]=b,t[37]=x);let S;t[38]!==v||t[39]!==g||t[40]!==r||t[41]!==s||t[42]!==o||t[43]!==n.emp_id||t[44]!==n.employee_name||t[45]!==n.s_date||t[46]!==n.start_date?(S=r.length>0?(0,J.jsx)(Pv,{value:n.emp_id,onChange:e=>s(e.target.value),children:r.filter(Bv).filter(e=>e.emp_id===n.emp_id||!v[e.emp_id]?.[Q(n.start_date||n.s_date||g,!0)]).map(Vv)}):(0,J.jsx)(Nv,{type:`text`,value:n.employee_name,onChange:e=>o(`employee_name`,e.target.value)}),t[38]=v,t[39]=g,t[40]=r,t[41]=s,t[42]=o,t[43]=n.emp_id,t[44]=n.employee_name,t[45]=n.s_date,t[46]=n.start_date,t[47]=S):S=t[47];let C;t[48]!==x||t[49]!==S?(C=(0,J.jsxs)(jv,{children:[x,S]}),t[48]=x,t[49]=S,t[50]=C):C=t[50];let w;t[51]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,J.jsx)(Mv,{children:`Employee Type`}),t[51]=w):w=t[51];let T;t[52]===o?T=t[53]:(T=e=>o(`emp_type`,e.target.value),t[52]=o,t[53]=T);let E,D;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,J.jsx)(`option`,{value:`E`,children:`Executive (EX)`}),E=(0,J.jsx)(`option`,{value:`T`,children:`Team Lead (TL)`}),t[54]=E,t[55]=D):(E=t[54],D=t[55]);let O;t[56]!==n.emp_type||t[57]!==T?(O=(0,J.jsxs)(jv,{children:[w,(0,J.jsxs)(Pv,{value:n.emp_type,onChange:T,children:[D,E]})]}),t[56]=n.emp_type,t[57]=T,t[58]=O):O=t[58];let k;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,J.jsx)(Mv,{children:`Start Date`}),t[59]=k):k=t[59];let A=n.start_date||n.s_date||``,j;t[60]===A?j=t[61]:(j=Q(A,!0),t[60]=A,t[61]=j);let M;t[62]!==o||t[63]!==n?(M=e=>o(y(n),e.target.value),t[62]=o,t[63]=n,t[64]=M):M=t[64];let N;t[65]!==m||t[66]!==p||t[67]!==j||t[68]!==M?(N=(0,J.jsxs)(jv,{children:[k,(0,J.jsx)(Nv,{type:`date`,min:p,max:m,value:j,onChange:M})]}),t[65]=m,t[66]=p,t[67]=j,t[68]=M,t[69]=N):N=t[69];let P;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,J.jsx)(Mv,{children:`End Date`}),t[70]=P):P=t[70];let F=n.start_date||p,I=n.end_date||n.e_date||``,L;t[71]===I?L=t[72]:(L=Q(I,!0),t[71]=I,t[72]=L);let R;t[73]!==o||t[74]!==n?(R=e=>o(y(n),e.target.value),t[73]=o,t[74]=n,t[75]=R):R=t[75];let z;t[76]!==m||t[77]!==F||t[78]!==L||t[79]!==R?(z=(0,J.jsxs)(jv,{children:[P,(0,J.jsx)(Nv,{type:`date`,min:F,max:m,value:L,onChange:R})]}),t[76]=m,t[77]=F,t[78]=L,t[79]=R,t[80]=z):z=t[80];let ee;t[81]===Symbol.for(`react.memo_cache_sentinel`)?(ee=(0,J.jsx)(Mv,{children:`Contract Rate`}),t[81]=ee):ee=t[81];let B=n.contract_rate??``,V;t[82]===B?V=t[83]:(V=(0,J.jsxs)(jv,{children:[ee,(0,J.jsx)(Nv,{type:`number`,value:B,disabled:!0})]}),t[82]=B,t[83]=V);let H,te;t[84]===Symbol.for(`react.memo_cache_sentinel`)?(H={gridColumn:`span 2`},te=(0,J.jsx)(Mv,{children:`Remarks`}),t[84]=H,t[85]=te):(H=t[84],te=t[85]);let U;t[86]===o?U=t[87]:(U=e=>o(`remarks`,e.target.value),t[86]=o,t[87]=U);let W;t[88]!==n.remarks||t[89]!==U?(W=(0,J.jsxs)(jv,{style:H,children:[te,(0,J.jsx)(Nv,{type:`text`,value:n.remarks,placeholder:`Remarks`,onChange:U})]}),t[88]=n.remarks,t[89]=U,t[90]=W):W=t[90];let ne;t[91]!==O||t[92]!==N||t[93]!==z||t[94]!==V||t[95]!==W||t[96]!==C?(ne=(0,J.jsxs)(Av,{children:[C,O,N,z,V,W]}),t[91]=O,t[92]=N,t[93]=z,t[94]=V,t[95]=W,t[96]=C,t[97]=ne):ne=t[97];let re;t[98]===Symbol.for(`react.memo_cache_sentinel`)?(re={display:`flex`,alignItems:`flex-end`,gap:`0.5rem`},t[98]=re):re=t[98];let ie;t[99]===d?ie=t[100]:(ie=d&&(0,J.jsx)(Z,{size:`sm`,variant:`success`,onClick:d,children:`Save`}),t[99]=d,t[100]=ie);let ae;t[101]===f?ae=t[102]:(ae=f&&(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:f,children:`Cancel`}),t[101]=f,t[102]=ae);let oe;t[103]===Symbol.for(`react.memo_cache_sentinel`)?(oe=(0,J.jsx)(Gl,{}),t[103]=oe):oe=t[103];let se;t[104]===c?se=t[105]:(se=(0,J.jsxs)(Z,{size:`sm`,variant:`outlines`,onClick:c,children:[` `,oe,` Remove`]}),t[104]=c,t[105]=se);let ce;t[106]!==ie||t[107]!==ae||t[108]!==se?(ce=(0,J.jsxs)(`div`,{style:re,children:[ie,ae,se]}),t[106]=ie,t[107]=ae,t[108]=se,t[109]=ce):ce=t[109];let le;return t[110]!==ne||t[111]!==ce?(le=(0,J.jsxs)(J.Fragment,{children:[ne,ce]}),t[110]=ne,t[111]=ce,t[112]=le):le=t[112],le},Lv=e=>{let t=(0,yl.c)(15),{handleCopyAllActual:n,handleCancelCopyAllActual:r,hasUnconfirmedDrafts:i,handleOpenActualRangeModal:a}=e,o;t[0]!==n||t[1]!==i?(o=!i&&(0,J.jsxs)(Z,{size:`sm`,variant:`primary`,onClick:()=>n(),children:[(0,J.jsx)(hg,{}),` Copy Actual (All Dates)`]}),t[0]=n,t[1]=i,t[2]=o):o=t[2];let s;t[3]!==r||t[4]!==i?(s=i&&(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,onClick:()=>r(),children:`Cancel Copy Actual`}),t[3]=r,t[4]=i,t[5]=s):s=t[5];let c;t[6]===a?c=t[7]:(c=()=>a(),t[6]=a,t[7]=c);let l;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,J.jsx)(gu,{}),t[8]=l):l=t[8];let u;t[9]===c?u=t[10]:(u=(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:c,children:[l,` Add Actual`]}),t[9]=c,t[10]=u);let d;return t[11]!==o||t[12]!==s||t[13]!==u?(d=(0,J.jsxs)(xv,{children:[o,s,u]}),t[11]=o,t[12]=s,t[13]=u,t[14]=d):d=t[14],d};function Rv(e){return e.stopPropagation()}function zv(e){return e.start_date?`start_date`:`s_date`}function Bv(e){return e.is_active!==!1&&e.is_active!==0&&e.is_active!==`false`}function Vv(e){return(0,J.jsx)(`option`,{value:e.emp_id,children:e.name},e.emp_id)}var Hv=G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,Uv=G.div`
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
`;G.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
`,G.div`
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
`;var Wv=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem 1.5rem;
`,Gv=G.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,Kv=G.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#f1f0fe`};
  color: ${({theme:e})=>e.colors?.primary||`#6C5CE7`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,qv=G.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Jv=G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Yv=G.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.text||`#333`};
`,Xv=()=>{let e=Ae(),[t,n]=(0,v.useState)(e.state?.data),r=e.state?.resourcePlannedList,i=localStorage.getItem(`cust_emp_id`),{start:a,end:o}=jf(),[s,c]=(0,v.useState)(null),[l,u]=(0,v.useState)({}),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(!1),[h,g]=(0,v.useState)(!1),[_,y]=(0,v.useState)(`save`),[b,x]=(0,v.useState)(!1),[S,C]=(0,v.useState)([]),[w,T]=(0,v.useState)([]),[E,D]=(0,v.useState)([]),[O,k]=(0,v.useState)([]),[A,j]=(0,v.useState)([]),M=t?.original_P?.start_date||t?.planned_start_date||``,N=t?.original_P?.end_date||t?.planned_end_date||``,P=e=>e.is_approved||!!t?.allAEntries?.length,F=(0,v.useMemo)(()=>qf(E),[E]),{dayWindow:I,dateWiseAssignments:L}=ep({activityStart:M,activityEnd:N,allocations:O,originalById:(0,v.useMemo)(()=>{let e={};return E.forEach(t=>{e[t.id]=t}),e},[E]),getRowStatus:Zf}),R=(0,v.useMemo)(()=>{let e={};return O.forEach(t=>{e[t.emp_id]||(e[t.emp_id]={}),Vf(t.start_date,t.end_date).forEach(n=>{e[t.emp_id][n]={rowKey:t.rowKey,isAssigned:!0,emp_type:t.emp_type}})}),e},[O]),z=(0,v.useMemo)(()=>{let e={};return A.forEach(t=>{e[t.emp_id]||(e[t.emp_id]={}),Vf(t.start_date,t.end_date).forEach(n=>{R[t.emp_id]?.[n]||(e[t.emp_id][n]=!0)})}),e},[A,R]),{addPayload:ee,updatePayload:B,deletePayload:V,unchangedPayload:H}=(0,v.useMemo)(()=>Qf(O,E),[O,E]),te=ee.length+B.length+V.length,U=[ee.length&&`Add ${ee.length}`,B.length&&`Update ${B.length}`,V.length&&`Remove ${V.length}`].filter(Boolean).join(` · `)||`Save Changes`;(0,v.useEffect)(()=>{ie(),re()},[]);let W=async(e={})=>{if(!e)return[];try{return((await sl(e))?.data||[]).map(e=>({...e,start_date:e.start_date?Q(e.start_date,!0):e.s_date?Q(e.s_date,!0):``,end_date:e.end_date?Q(e.end_date,!0):e.e_date?Q(e.e_date,!0):``}))}catch{return K.error(`Failed to load existing allocations`),[]}},ne=async()=>{let e=t?.original_P?.id;if(e)try{let t=zf((await ol({emp_id:i,start_date:Q(a),end_date:Q(o)})).data,r).find(t=>t?.original_P?.id===e);t&&n(t)}catch(e){console.error(`Failed to refresh activity data:`,e)}},re=async()=>{let{id:e}=t?.original_P||{};try{let[n,r]=await Promise.all([W({allocation_id:e,start_date:Q(a),end_date:Q(o)}),W({emp_id:i,start_date:Q(a),end_date:Q(o)})]),s=n.filter(e=>e.is_active===!0);D(s),k(s.filter(e=>e.is_active).map(e=>({...e,rowKey:`existing_${e.id}`}))),j(r.filter(e=>e.allocation_id!==t?.original_P?.id&&e.is_active!==!1)),await ne()}catch{K.error(`Failed to load allocation data`)}},ie=async()=>{try{f(!0),T((await al({rm_emp_id:i}))?.data?.filter(e=>e.is_verified)||[])}catch{K.error(`Failed to fetch employees`)}finally{f(!1)}},ae=e=>e===`T`?we===``?0:Number(we):Ee===``?0:Number(Ee),oe=(e,t,n,r)=>{let i=Q(t,!0);k(t=>{let a=t.filter(t=>t.emp_id!==e.emp_id),o=t.filter(t=>t.emp_id===e.emp_id),s=o.flatMap(e=>Wf(e.start_date,e.end_date)),c=n?[...s,i]:s.filter(e=>e!==i),l=Number(e.grade_level)>1?`T`:`E`,u=n&&r?{[i]:r}:{},d=n&&r?{[i]:ae(r)}:{},f=Jf({empId:e.emp_id,activeDates:c,ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:l,remarks:``,contract_rate:ae(l),is_approved:!1},existingRowsForEmp:o,dateEmpTypes:u,dateEmpRates:d});return Xf([...a,...f])})},[se,ce]=(0,v.useState)({}),le=e=>{let t=I.map(Df).filter(t=>!R[e.emp_id]?.[t]&&!z[e.emp_id]?.[t]);if(!t.length){K.info(`No dates available`);return}let n=t.map(e=>Q(e,!0));k(t=>{let r=t.filter(t=>t.emp_id!==e.emp_id),i=t.filter(t=>t.emp_id===e.emp_id),a=i.flatMap(e=>Wf(e.start_date,e.end_date)),o=Number(e.grade_level)>1?`T`:`E`,s=n.reduce((e,t)=>(e[t]=o,e),{}),c=n.reduce((e,t)=>(e[t]=ae(o),e),{}),l=Jf({empId:e.emp_id,activeDates:[...a,...n],ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:o,remarks:``,contract_rate:ae(o),is_approved:!1},existingRowsForEmp:i,dateEmpTypes:s,dateEmpRates:c});return Xf([...r,...l])}),ce(t=>({...t,[e.emp_id]:n})),K.success(`${t.length} date(s) selected for ${e.name}`)},ue=e=>{let t=se[e.emp_id];if(!t||!t.length){K.info(`Nothing to undo for this resource`);return}let n=new Set(t);k(t=>{let r=t.filter(t=>t.emp_id!==e.emp_id),i=t.filter(t=>t.emp_id===e.emp_id),a=i.flatMap(e=>Wf(e.start_date,e.end_date)).filter(e=>!n.has(e)),o=Number(e.grade_level)>1?`T`:`E`,s=Jf({empId:e.emp_id,activeDates:a,ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:o,remarks:``,contract_rate:ae(o),is_approved:!1},existingRowsForEmp:i});return Xf([...r,...s])}),ce(t=>{let n={...t};return delete n[e.emp_id],n}),K.success(`Undo auto-assign for ${e.name}`)},de=(e,t)=>{if(P(e)){K.info(`Cannot edit approved/actual started allocation`);return}let n=Yf(e,Q(t,!0),`EDIT`),r=n.find(e=>e.__isEditTarget),i=crypto.randomUUID();k(t=>[...t.filter(t=>t.rowKey!==e.rowKey),...n]),u(t=>({...t,[i]:{originalRow:e,segmentKeys:n.map(e=>e.rowKey)}})),c(r?{rowKey:r.rowKey,groupId:i}:null)},fe=(e,t,n)=>{k(r=>r.map(r=>r.rowKey===e?t===`emp_type`?{...r,emp_type:n,contract_rate:ae(n)}:{...r,[t]:n}:r))},pe=(e,t,n)=>{let r=Q(t,!0);k(t=>{let i=t.filter(t=>t.emp_id!==e.emp_id),a=t.filter(t=>t.emp_id===e.emp_id),o=a.flatMap(e=>Wf(e.start_date,e.end_date));if(!o.includes(r))return t;let s={},c={};o.forEach(t=>{let n=a.find(e=>e.start_date<=t&&e.end_date>=t);s[t]=n?.emp_type||emp_type_default(e),c[t]=n?.contract_rate??ae(s[t])}),s[r]=n,c[r]=ae(n);let l=Jf({empId:e.emp_id,activeDates:o,ownershipMap:F,employeeMeta:{employee_name:e.name,emp_type:n,remarks:``,contract_rate:ae(n),is_approved:!1},existingRowsForEmp:a,dateEmpTypes:s,dateEmpRates:c});return Xf([...i,...l])})},me=e=>{let t=O.find(t=>t.rowKey===e);if(!t){c(null);return}if(t.start_date>t.end_date){K.error(`Start date cannot be after end date`);return}let n=Q(M,!0),r=Q(N,!0);if(n&&t.start_date<n||r&&t.end_date>r){K.error(`Dates must fall within the activity's start and end dates`);return}if(O.some(n=>n.rowKey!==e&&n.emp_id===t.emp_id&&t.start_date<=n.end_date&&t.end_date>=n.start_date)){K.error(`This resource already has an allocation overlapping these dates`);return}k(e=>Xf(e)),u(t=>{let n=Object.entries(t).find(([,t])=>t.segmentKeys.includes(e));if(!n)return t;let r={...t};return delete r[n[0]],r}),c(null)},he=e=>{let t=Object.entries(l).find(([,t])=>t.segmentKeys.includes(e));if(!t){c(null);return}let[n,{originalRow:r,segmentKeys:i}]=t;k(e=>[...e.filter(e=>!i.includes(e.rowKey)),r]),u(e=>{let t={...e};return delete t[n],t}),c(null)},ge=(e,t)=>{if(P(e)){K.info(`Cannot delete`);return}k(n=>{let r=Yf(e,Q(t,!0),`DELETE`);return Xf([...n.filter(t=>t.rowKey!==e.rowKey),...r])})},_e=()=>{let e=O.some(e=>e.emp_type===`T`&&e.is_active!==!1),t=O.some(e=>e.emp_type===`E`&&e.is_active!==!1);if(e&&be!==0&&(!we||Number(we)<=0)){K.error(`Please enter TL Contract Rate`);return}if(t&&xe!==0&&(!Ee||Number(Ee)<=0)){K.error(`Please enter EX Contract Rate`);return}let n=new Set(O.flatMap(e=>Wf(e.start_date,e.end_date)));[...n].filter(e=>{let t=O.filter(t=>Wf(t.start_date,t.end_date).includes(e)),n=t.filter(e=>e.emp_type===`T`).length,r=t.filter(e=>e.emp_type===`E`).length;return n<be||r<xe});let r=I.map(e=>Df(e)).filter(e=>!n.has(Q(e,!0)));if(r.length>0){C(r),y(`missingDates`),g(!0);return}y(`save`),g(!0)},ve=async()=>{let e=O.some(e=>e.emp_type===`T`&&e.is_active!==!1),n=O.some(e=>e.emp_type===`E`&&e.is_active!==!1);if(e&&be!==0&&(!we||Number(we)<=0)){K.error(`Please enter TL Contract Rate`);return}if(n&&xe!==0&&(!Ee||Number(Ee)<=0)){K.error(`Please enter EX Contract Rate`);return}try{x(!0);let e=t?.original_P?.id;if(!e)return;let n=(e,t,n,r)=>{let i=t.filter(t=>Wf(t.start_date,t.end_date).includes(e)),a=i.filter(e=>e.emp_type===`T`).length,o=i.filter(e=>e.emp_type===`E`).length,s=[];if(a!==n){let e=a-n;e>0?s.push(`Remove ${e} Team Lead${e>1?`s`:``}`):s.push(`Add ${Math.abs(e)} Team Lead${Math.abs(e)>1?`s`:``}`)}if(o!==r){let e=o-r;e>0?s.push(`Remove ${e} Executive${e>1?`s`:``}`):s.push(`Add ${Math.abs(e)} Executive${Math.abs(e)>1?`s`:``}`)}return s},r=[...new Set(O.flatMap(e=>Wf(e.start_date,e.end_date)))].filter(e=>{let t=O.filter(t=>Wf(t.start_date,t.end_date).includes(e)),n=t.filter(e=>e.emp_type===`T`).length,r=t.filter(e=>e.emp_type===`E`).length;return n!==be||r!==xe});if(r.length>0){let e=``;if(r.length===1){let t=r[0],i=n(t,O,be,xe);e=`Resource requirement not met for ${Tf(t,!0)}\n`,e+=i.join(`
`)}else{e=`Resource requirements not met
`;let t=r.sort().map(e=>{let t=n(e,O,be,xe);return`${Tf(e,!0)}: ${t.join(`, `)}`});e+=t.join(`; `)}K.warning(e);return}let a=O,o=[...ee,...B,...V,...H];if(o.length){let t=new FormData;t.append(`emp_id`,i),t.append(`p_id`,e);let n=O.some(e=>e.id!=null),r=ee.length&&!B.length&&!V.length&&!n?`ADD`:`UPDATE`;t.append(`call_mode`,r),t.append(`c_emp_list`,JSON.stringify(o)),await cl(t);for(let[e,n]of t.entries())console.log(e,n)}if(a.length>0){let t=a.map(e=>`${e.emp_id}^${e.employee_name||``}^${e.emp_type}`).join(`|`),n=new FormData;n.append(`emp_id`,i),n.append(`call_mode`,`RESOURCE_ADD`),n.append(`a_id`,e),n.append(`geo_type`,`O`),n.append(`resource_list`,t),await ll(n);for(let[e,t]of n.entries())console.log(e,t)}K.success(`Saved successfully`),g(!1),re()}catch(e){K.error(e?.response?.data?.message||`Save failed`)}finally{x(!1)}},ye=(t?.original_P?.retainer_list||[]).find(e=>e.a_type===`P`&&e.start_date===t?.original_P?.start_date&&e.end_date===t?.original_P?.end_date),be=ye?.tl_count||0,xe=ye?.ex_count||0,Se=ye?.tl_rate,Ce=ye?.ex_rate;(0,v.useEffect)(()=>{O.length===0&&(Te(Se??0),De(Ce??0))},[O.length,Se,Ce]);let[we,Te]=(0,v.useState)(Se??``),[Ee,De]=(0,v.useState)(Ce??``);return(0,v.useEffect)(()=>{k(e=>e.map(e=>{if(e.is_approved)return e;let t=e.emp_type===`T`?we:Ee;return t===``||t==null?e:{...e,contract_rate:Number(t)}}))},[we,Ee]),(0,J.jsxs)(ef,{title:`Allocation Plan Overview`,children:[(0,J.jsxs)(Uv,{children:[(0,J.jsx)(Hv,{children:`Track and manage your assigned audit tasks`}),(0,J.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:(0,J.jsxs)(Z,{size:`md`,onClick:()=>window.history.back(),children:[(0,J.jsx)($u,{}),`Back`]})})]}),(0,J.jsxs)(bf,{title:`Activity Details`,hoverable:!1,children:[(0,J.jsxs)(Wv,{children:[(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Yu,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Duration`}),(0,J.jsxs)(Yv,{children:[Tf(t.planned_start_date),` – `,Tf(t.planned_end_date)]})]})]}),(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Fu,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Customer`}),(0,J.jsx)(Yv,{children:t.customer_name})]})]}),(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Fu,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Order Item`}),(0,J.jsx)(Yv,{children:t.order_item_key})]})]}),(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Wl,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Required TL`}),(0,J.jsx)(Yv,{children:be??`—`}),Se&&(0,J.jsxs)(Yv,{children:[Se??`—`,`/per day`]})]})]}),(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Hl,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Required EX`}),(0,J.jsx)(Yv,{children:xe??`—`}),Ce&&(0,J.jsxs)(Yv,{children:[Ce??`—`,`/per day`]})]})]}),(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(Su,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Location`}),(0,J.jsx)(Yv,{children:t.store_name||`—`})]})]})]}),t.store_remarks&&(0,J.jsxs)(Gv,{style:{marginTop:`1rem`},children:[(0,J.jsx)(Kv,{children:(0,J.jsx)(id,{size:13})}),(0,J.jsxs)(qv,{children:[(0,J.jsx)(Jv,{children:`Remark`}),(0,J.jsx)(Yv,{children:t.store_remarks||`—`})]})]})]}),(0,J.jsx)(kv,{dateWiseAssignments:L,dayWindow:I,editingId:s?.rowKey,handleEditDate:de,handleDeleteDate:ge,handleFieldChange:fe,handleConfirmUpdate:me,handleCancelEdit:he,activityStart:M,activityEnd:N,activityData:t,isActual:!1,employees:w,loadAllData:re,plannedTL:be,plannedEX:xe,plannedTLRate:Se,plannedEXRate:Ce,tlContractRate:we,setTlContractRate:Te,exContractRate:Ee,setExContractRate:De,getContractRateByType:ae,busyDateMap:z}),te>0&&(0,J.jsx)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,borderRadius:`6px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:(0,J.jsxs)(Z,{onClick:_e,color:`primary`,style:{marginLeft:`auto`},children:[U,` Resources in plan `]})}),![`AA`,`AS`,`C`,`PA`].includes(t.activityStatus)&&!t.a_id&&(0,J.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`1rem`,marginBottom:`1rem`},children:[(0,J.jsx)(Z,{onClick:()=>m(!0),children:`Add Resources`}),p&&(0,J.jsx)(Z,{variant:`outline`,onClick:()=>m(!1),children:`Close`})]}),p&&(0,J.jsx)(G_,{employees:w,dayWindow:I,activityData:t,activityDates:I,activityStart:M,activityEnd:N,busyDateMap:z,employeeDateMap:R,handleToggleAllocation:oe,handleRoleChange:pe,workingAllocations:O,handleAutoAssign:le,handleUndoAutoAssign:ue,lastAutoAssign:se}),(0,J.jsx)(Bd,{isOpen:h,isLoading:b,onConfirm:ve,onClose:()=>g(!1),title:`Confirm Resource Plan`,message:_===`missingDates`?`No resources are planned for: ${S.join(`, `)}. Are you sure you want to save anyway?`:`Are you sure you want to save these resources in the plan?`,confirmLabel:`Yes, Save`})]})},Zv=e=>e?new Date(e).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,Qv=e=>`₹${Number(e||0).toLocaleString(`en-IN`)}`,$v=G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,ey=G.div`
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
`;G.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;var ty=G.div`
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
`;G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({theme:e})=>e.spacing?.sm||`1rem`} ${({theme:e})=>e.spacing?.md||`1rem`};
`,G.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
  margin: 0;
`,G.div`
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 8px;
  margin-bottom: 0.75rem;
  overflow: hidden;
`,G.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#fafafa`};
  border: none;
  cursor: pointer;
  text-align: left;
`,G.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
`,G.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors?.textLight||`#777`};
`,G.div`
  padding: 0.85rem 0.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
`,G.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  cursor: ${({pointer:e})=>e?`pointer`:`default`};
`,G.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,G.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors?.text||`#222`};
`,G.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding: 0.6rem 0.9rem;
  background: ${({theme:e})=>e.colors?.backgroundAlt||`#fafafa`};
  border-top: 1px dashed ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  font-size: 0.75rem;
  font-weight: 600;
`,G.span`
  color: ${({theme:e})=>e.colors?.textLight||`#e5e7eb`};
`,G.div`
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
`,G.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr 1fr 1.4fr 0.7fr;
  border: 1px solid ${({theme:e})=>e.colors?.border||`#e5e7eb`};
  border-radius: 8px;
  overflow: hidden;
`,G.div`
  display: contents;
  > span {
    background: ${({theme:e})=>e.colors?.backgroundAlt||`#f4f4f6`};
    font-size: 0.65rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme:e})=>e.colors?.textLight||`#777`};
    padding: 0.55rem 0.75rem;
  }
`,G.div`
  display: contents;
  > span, > a {
    padding: 0.6rem 0.75rem;
    font-size: 0.75rem;
    border-top: 1px solid ${({theme:e})=>e.colors?.border||`#eee`};
    display: flex;
    align-items: center;
  }
`;var ny=G.a`
  color: ${({theme:e,disabled:t})=>t?`#999`:e.colors?.primary||`#6C5CE7`};
  font-weight: ${({disabled:e})=>e?`400`:`600`};
  text-decoration: none;
  gap: 0.3rem;
  cursor: ${({disabled:e})=>e?`default`:`pointer`};
  pointer-events: ${({disabled:e})=>e?`none`:`auto`};
  &:hover { 
    text-decoration: ${({disabled:e})=>e?`none`:`underline`}; 
  }
`,ry=G.div`
  padding: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors?.textLight||`#999`};
`,iy=G.div`
  font-size: 0.75rem;
  max-width: 150px; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ay=G.div`
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
`,oy=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem 1.5rem;
`,sy=G.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`,cy=G.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f1f0fe;
  color: #6C5CE7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ly=G.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,uy=G.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,dy=G.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
`,fy=()=>{Me();let e=Ae().state?.data,t=localStorage.getItem(`cust_emp_id`),n=e.mode,[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(!1),[d,f]=(0,v.useState)(()=>e?.claims||[]),p=(0,v.useMemo)(()=>{for(let e of d)for(let t of e?.claim_items||[]){let{label:e}=py(t.expense_status);if(e===`Submitted`)return`Submitted`}return``},[d]),[m,h]=(0,v.useState)([]),[g,_]=(0,v.useState)(null),[y,b]=(0,v.useState)(null),[x,S]=(0,v.useState)(null),[C,w]=(0,v.useState)(null),[T,E]=(0,v.useState)(!1),D=(0,v.useCallback)(async()=>{if(!(!t||!e))try{o(!0);let n=(await al({emp_id:t}))?.data?.[0]||{};if(!n.id){f([]);return}f(Rf((await fl(`GET`,n.id,`CY`))?.data||[],e))}catch(e){console.error(e),K.error(`Failed to load claims`),f([])}finally{o(!1)}},[t,e]),O=(0,v.useMemo)(()=>my(m),[m]),k=(0,v.useMemo)(()=>O.reduce((e,t)=>({resource:e.resource+t.tl_amount+t.ex_amount,claim:e.claim+t.claim_amount}),{resource:0,claim:0}),[O]),A=(0,v.useMemo)(()=>d.reduce((e,t)=>(e.totalOPE+=Number(t?.expense_amt||0),e.totalSettlement+=Number(t?.settlement_amt||0),e),{totalOPE:0,totalSettlement:0}),[d]);k.resource+A.totalOPE;let j=(0,v.useCallback)(async()=>{let n=e?.planned_start_date||e.earliestPlannedDate,r=e?.planned_end_date||e.latestPlannedDate,a=[...new Set((e?.grouped_data?.length?e.grouped_data.flatMap(e=>e?.allAEntries||[]):e?.allAEntries||[]).map(e=>e?.id).filter(Boolean))];if(!n||!r||!a.length){h([]);return}try{i(!0),h((await Promise.all(a.map(e=>sl({emp_id:t,allocation_id:e,start_date:Q(n),end_date:Q(r)})))).flatMap(e=>Array.isArray(e?.data)?e.data:[]))}catch(e){console.error(`Failed to fetch resource data:`,e),K.error(`Failed to load resource data`),h([])}finally{i(!1)}},[e,t]);(0,v.useEffect)(()=>{j()},[j]),(0,v.useEffect)(()=>{e?.claims?.length?f(e.claims):D()},[e,D]);let M=e=>{b(e),c(!0)},N=()=>{let t=d?.[0]||null;M({...e,...t&&{master_data:t}})},P=async e=>{try{(await dl({m_claim_id:e,call_mode:`SUBMIT_ALL`})).status===200&&K.success(`All claim items submitted successfully`),await D()}catch(e){K.error(e.data.message||e.data||`Failed to submit the claims. Please try again later !!!`)}finally{S(null),u(!1)}},F=async e=>{try{(await dl({claim_id:e,call_mode:`DELETE`})).status===200&&K.success(`claim item deleted successfully`),await D()}catch(e){K.error(e.data.message||e.data||`Failed to delete the claims. Please try again later !!!`)}finally{w(null),E(!1)}},I=(e?.original_P?.retainer_list||[]).find(t=>t.a_type===`P`&&t.start_date===e?.original_P?.start_date&&t.end_date===e?.original_P?.end_date),L=(0,v.useMemo)(()=>(e?.grouped_data||[]).map(e=>{let t=(e?.original_P?.retainer_list||[]).find(t=>t.a_type===`P`&&t.start_date===e?.original_P?.start_date&&t.end_date===e?.original_P?.end_date);return{allocationId:e?.allocation_id||e?.id||e?.allAEntries?.[0]?.id,start_date:t?.start_date,end_date:t?.end_date,tl_count:t?.tl_count||0,ex_count:t?.ex_count||0}}),[e]),R=I?.tl_count||0,z=I?.ex_count||0;return(0,J.jsxs)(ef,{title:`Clam Details`,children:[(0,J.jsxs)(ey,{children:[(0,J.jsx)($v,{children:`Claim Detailed view`}),(0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,J.jsxs)(Z,{size:`md`,onClick:()=>window.history.back(),children:[(0,J.jsx)($u,{}),`Back`]})})]}),(0,J.jsxs)(bf,{title:`Activity Details`,hoverable:!1,children:[(0,J.jsxs)(oy,{children:[(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Yu,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Duration`}),(0,J.jsxs)(dy,{children:[Zv(e.planned_start_date),` – `,Zv(e.planned_end_date)]})]})]}),(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Fu,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Customer`}),(0,J.jsx)(dy,{children:e.customer_name})]})]}),(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Fu,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Order Item`}),(0,J.jsx)(dy,{children:e.order_item_key})]})]}),L.length===1&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Wl,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Required TL`}),(0,J.jsx)(dy,{children:R??`—`})]})]}),(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Hl,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Required EX`}),(0,J.jsx)(dy,{children:z??`—`})]})]})]}),(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Su,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Location`}),(0,J.jsx)(dy,{children:e.store_name||`—`})]})]})]}),e.store_remarks&&(0,J.jsxs)(sy,{style:{marginTop:`1rem`},children:[(0,J.jsx)(cy,{children:(0,J.jsx)(id,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsx)(uy,{children:`Remark`}),(0,J.jsx)(dy,{children:e.store_remarks||`—`})]})]})]}),L.length>1&&(0,J.jsx)(bf,{title:`Allocation Dates`,children:(0,J.jsx)(oy,{style:{marginTop:`1rem`},children:L.map((e,t)=>(0,J.jsxs)(sy,{children:[(0,J.jsx)(cy,{children:(0,J.jsx)(Wl,{size:13})}),(0,J.jsxs)(ly,{children:[(0,J.jsxs)(uy,{children:[`Allocation `,t+1]}),(0,J.jsxs)(dy,{children:[Zv(e.start_date),` –`,` `,Zv(e.end_date)]}),(0,J.jsxs)(dy,{children:[`TL: `,e.tl_count,` \xA0 | \xA0 EX: `,e.ex_count]})]})]},e.allocationId||t))})}),(0,J.jsxs)(bf,{hoverable:!1,style:{marginTop:`1rem`},title:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Nu,{size:12,style:{marginRight:`0.4rem`}}),`Claims `,d[0]?.claim_items?.length&&`(${d[0]?.claim_items?.length})`]}),headerAction:n!==`VIEW`&&(e?.activityStatus===`C`||e?.activityStatus===`AS`||e?.activityStatus===`AP`)&&p!==`Submitted`&&(0,J.jsxs)(Z,{variant:`primary`,onClick:N,children:[(0,J.jsx)(gu,{size:11,style:{marginRight:`0.35rem`}}),`Add Claim`]}),children:[d.length>0&&(0,J.jsxs)(ty,{style:{marginBottom:`0.8rem`,fontSize:`1rem`},children:[(0,J.jsx)(Nu,{size:12,style:{marginRight:`0.4rem`}}),(0,J.jsx)(`span`,{children:`Master Clam Id:`}),d[0].master_claim_id]}),e.activityStatus!==`AP`&&e.activityStatus!==`AS`&&e.activityStatus!==`C`?(0,J.jsx)(ry,{style:{fontWeight:`600`,fontSize:`0.8rem`},children:`Activity not completed yet`}):d.length===0?(0,J.jsx)(ry,{children:`No claims submitted yet`}):(0,J.jsx)(Cg,{emptyMessage:`No claims submitted yet`,isLoading:a,columns:[`Sl no.`,`Category`,`Date`,`Amount`,`Status`,`Remarks`,`Attachment`,`${n!==`VIEW`&&p!==`Submitted`?`Action`:``}`],data:d.flatMap(e=>(e?.claim_items||[]).map(t=>({...t,master_data:e}))),renderRow:e=>{console.log(e);let{variant:t,label:r}=py(e.expense_status),i=e?.master_data?.claim_items?.findIndex(t=>t.claim_id===e.claim_id);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($,{style:{marginLeft:`1rem`},children:i>=0?i+1:`—`}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:`info`,style:{fontSize:`0.62rem`},children:e.item_name})}),(0,J.jsx)($,{children:e.expense_date}),(0,J.jsx)($,{children:Qv(e.expense_amt)}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:t,children:r})}),(0,J.jsx)($,{children:(0,J.jsx)(iy,{title:e.remarks||`--`,children:e.remarks||`--`})}),(0,J.jsx)($,{children:(0,J.jsx)(ny,{href:e.submitted_file_1,target:`_blank`,rel:`noreferrer`,disabled:!e.submitted_file_1,children:e.submitted_file_1?`View`:`Not Submitted`})}),n!==`VIEW`&&r!==`Submitted`&&(0,J.jsx)($,{children:(0,J.jsx)(Z,{size:`sm`,title:`Update claim`,onClick:()=>M(e),children:(0,J.jsx)(Bu,{})})}),n!==`VIEW`&&r!==`Submitted`&&(0,J.jsx)($,{children:(0,J.jsx)(Z,{size:`sm`,variant:`outlines`,iconOnly:!0,title:`Delete claim`,onClick:()=>{w(e?.claim_id||null),E(!0)},children:(0,J.jsx)($l,{})})})]})}}),(0,J.jsx)(ay,{children:(0,J.jsxs)(`span`,{children:[`Total Claim Amount: `,Qv(A.totalOPE)]})}),d.length>0&&n!==`VIEW`&&p!==`Submitted`&&(0,J.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginTop:`1rem`},children:(0,J.jsx)(Z,{onClick:()=>{S(d?.[0]?.master_claim_id||null),u(!0)},children:`Submit All Claims`})})]}),s&&(0,J.jsx)(Bg,{isOpen:s,onClose:()=>c(!1),claimData:y,onSaved:D}),l&&(0,J.jsx)(Bd,{isOpen:l,title:`Confirmation`,message:`Are you sure you want to submit the claim items?`,onConfirm:()=>P(x),onClose:()=>{u(!1),S(null)},confirmLabel:`Yes`}),T&&(0,J.jsx)(Bd,{isOpen:T,title:`Delete Claim`,message:`Are you sure you want to delete this claim item?`,onConfirm:()=>F(C),onClose:()=>{E(!1),w(null)},confirmLabel:`Delete`})]})},py=e=>({N:{variant:`warning`,label:`Not Submitted`},S:{variant:`success`,label:`Submitted`},A:{variant:`info`,label:`Approved`},R:{variant:`error`,label:`Rejected`}})[e]||{variant:`default`,label:`Unknown`},my=(e=[])=>{let t=e.reduce((e,t)=>{let n=Q(t.s_date,!0),r=Q(t.e_date,!0);if(!n||!r)return e;let i=new Date(`${n}T00:00:00`),a=new Date(`${r}T00:00:00`);for(;i<=a;){let n=[i.getFullYear(),String(i.getMonth()+1).padStart(2,`0`),String(i.getDate()).padStart(2,`0`)].join(`-`);e[n]||(e[n]={date:n,tl_count:0,ex_count:0,tl_amount:0,ex_amount:0,claim_amount:0,resources:[]});let r=Number(t.contract_rate)||0,a=Number(t.ope_amt)||0;t.emp_type===`T`?(e[n].tl_count+=1,e[n].tl_amount+=r):t.emp_type===`E`&&(e[n].ex_count+=1,e[n].ex_amount+=r),e[n].claim_amount+=a,e[n].resources.push(t),i.setDate(i.getDate()+1)}return e},{});return Object.values(t).sort((e,t)=>new Date(`${e.date}T00:00:00`)-new Date(`${t.date}T00:00:00`))},hy=G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,gy=G.div`
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
`,_y=G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${X.spacing.lg};
  margin-bottom: ${X.spacing.xl};

  @media (max-width: ${X.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,vy=G.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;G.div`
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
`,G.div`
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
`;var yy=G.select`
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
`;G.input`
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
`;var by=G.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,xy=G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,Sy=G.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,Cy=G.div`
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
`;G.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e,variant:t})=>t===`primary`?`${e.colors.primary}10`:t===`success`?`${e.colors.success}10`:`transparent`};
  border-radius:  ${({theme:e})=>e.borderRadius.lg};
`,G.span`
  font-weight: 700;
  min-width: 25px;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
`,G.span`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`,G.span`
  font-weight: 600;
  color: ${({theme:e,variant:t})=>t===`primary`?e.colors.primary:t===`success`?e.colors.success:e.colors.primary};
  background: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  min-width: 24px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;var wy=G.input`
  flex: 1;
  padding: ${X.spacing.sm} ${X.spacing.md};
  border: 1px solid ${X.colors.border};
  border-radius: ${X.borderRadius.md};
  font-family: ${X.fonts.body};
  font-size: ${X.fontSizes.sm};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${X.colors.primary};
  }
  
  &::placeholder {
    color: ${X.colors.textLight};
  }
`,Ty=G.span`
  font-weight: 600;
  color: ${({theme:e,value:t})=>t?e.colors.textLight:e.colors.text};
`,Ey=[(0,J.jsxs)(J.Fragment,{children:[`Customer`,(0,J.jsx)(`br`,{}),`Order Item ID`]}),`Audit Type`,`Planned Date`,`Claim Amount`,`Approved/Total Claims`,`Planned slots`,`Claim Status`,`Actions`],Dy=e=>`₹${Number(e||0).toLocaleString(`en-IN`)}`,Oy=()=>{let e=Me(),[t,n]=(0,v.useState)({search:``,status:``}),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)([]),[l,u]=(0,v.useState)([]),[d,f]=(0,v.useState)(`month`),[p,m]=(0,v.useState)(0),h=localStorage.getItem(`cust_emp_id`),[g,_]=(0,v.useState)(()=>jf({type:`current`,mode:`month`}));(0,v.useEffect)(()=>{h&&(y(),b())},[h]);let y=async(e,t)=>{let n=localStorage.getItem(`cust_emp_id`),r=e||g.start,i=t||g.end,a=new Date(r);if(new Date(i)<a)return K.info(`End date cannot be earlier than start date`),!1;let s={emp_id:n,start_date:Ef(r),end_date:Ef(i)};o(!0);try{c(zf((await ol(s)).data))}catch{K.error(`No data found...`),o(!1)}finally{o(!1)}},b=(0,v.useCallback)(async()=>{if(h)try{let e=(await al({emp_id:h}))?.data?.[0]||{};e.id&&u((await fl(`GET`,e.id,`CY`))?.data||[])}catch(e){console.error(e),K.error(`Failed to load profile or claims`),u([])}},[h]),x=(0,v.useMemo)(()=>{if(!Array.isArray(l))return[];let e=g.start,t=g.end;return l.filter(n=>n?.claim_date?n.claim_items.some(n=>{if(!n?.expense_date)return!1;let r=Q(n?.expense_date,!0);return r>=e&&r<=t}):!1)},[l,g.start,g.end]),S=(0,v.useMemo)(()=>Array.isArray(s)?s.map(e=>{let t=Rf(x,e);return{...e,claims:t,hasClaim:t.length>0}}):[],[s,x]),C=(0,v.useMemo)(()=>{let e={};return S.forEach(t=>{let n=t?.original_P?.order_item_key||t?.order_item_key||`UNKNOWN`;e[n]||(e[n]={order_item_key:n,customer_name:t.customer_name,grouped_data:[]}),e[n].grouped_data.push(t)}),Object.values(e).map(e=>{let t=[...e.grouped_data].sort((e,t)=>(e.planned_start_date||``).localeCompare(t.planned_start_date||``)),n=t[0]?.planned_start_date||null,r=t[t.length-1]?.planned_end_date||null,i=t.flatMap(e=>Array.isArray(e.claims)?e.claims:[]),a=new Map;i.forEach(e=>{let t=e?.id||e?.claim_id;t!=null&&!a.has(t)&&a.set(t,e)});let o=Array.from(a.values()),s=Array.from(a.values()).flatMap(e=>Array.isArray(e.claim_items)?e.claim_items:[]),c=o.reduce((e,t)=>e+Number(t?.expense_amt||0),0),l=o.reduce((e,t)=>e+Number(t?.settlement_amt||0),0),u=s.filter(e=>e?.is_approved).length,d=s.length,f=o;return{...e,items:t,grouped_data:t,earliestPlannedDate:n,latestPlannedDate:r,claimsCount:d,totalOPE:c,totalSettlement:l,approvedCount:u,claimsItem:f}}).sort((e,t)=>(e.earliestPlannedDate||``).localeCompare(t.earliestPlannedDate||``))},[S]),w=e=>{f(e),m(0);let t=jf({type:`current`,mode:e,offset:0});_(t),y(t.start,t.end)},T=e=>{let t=p+e;m(t);let n=jf({type:`current`,mode:d,offset:t});_(n),y(n.start,n.end)},E=C,D=(0,v.useMemo)(()=>x.reduce((e,t)=>(e.totalOPE+=Number(t?.expense_amt||0),e.totalSettlement+=Number(t?.settlement_amt||0),e),{totalOPE:0,totalSettlement:0}),[x]),O=D.totalOPE-D.totalSettlement,k=(0,v.useMemo)(()=>[{label:`Total Order Items`,value:C.length,color:`primary`,icon:(0,J.jsx)(Xu,{})},{label:`Total OPE`,value:Dy(D.totalOPE),color:`success`,icon:(0,J.jsx)(Mu,{})},{label:`Total Settlement`,value:Dy(D.totalSettlement),color:`warning`,icon:(0,J.jsx)(Bl,{})},{label:`AMOUNT TO BE PAID`,value:Dy(O),color:`error`,icon:(0,J.jsx)(ku,{})}],[S.length,D.totalSettlement,D.totalOPE,O]),{paginatedData:A,currentPage:j,itemsPerPage:M,totalItems:N,handlePageChange:P}=Hg(Kg({data:E,fields:[`customer_name`,`order_item_key`,`store_name`,`audit_type`],search:t.search,extraFilters:{activityStatus:t.status}}),10);return(0,J.jsxs)(ef,{title:`Clam screen`,children:[(0,J.jsxs)(gy,{children:[(0,J.jsx)(hy,{children:`Track and manage your clams`}),(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,J.jsx)(Z,{variant:d===`month`?`primary`:`outline`,onClick:()=>w(`month`),children:`Month`}),(0,J.jsx)(Z,{variant:d===`week`?`primary`:`outline`,onClick:()=>w(`week`),children:`Week`})]}),(0,J.jsxs)(`div`,{style:{marginTop:`0.5rem`,fontWeight:`bold`,fontSize:`1.1rem`,color:`#333`,display:`flex`,alignItems:`center`,gap:`0.8rem`},children:[(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>T(-1),children:`< Prev`}),(0,J.jsx)(`span`,{children:d===`month`?kf(g.start):Of(g.start,g.end)}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,style:{padding:`0.25rem 0.5rem`},onClick:()=>T(1),children:`Next >`})]})]})]}),(0,J.jsx)(_y,{children:k.map(e=>(0,J.jsx)(hf,{label:e.label,value:e.value,icon:e.icon,color:e.color}))}),(0,J.jsxs)(bf,{children:[(0,J.jsxs)(vy,{children:[(0,J.jsx)(wy,{type:`text`,placeholder:`Search Auditor's name, ID...`,value:t.search,onChange:e=>n(t=>({...t,search:e.target.value}))}),(0,J.jsxs)(yy,{name:`status`,value:t.status,onChange:e=>n(t=>({...t,status:e.target.value})),children:[(0,J.jsx)(`option`,{value:`ALL`,children:`All`}),(0,J.jsx)(`option`,{value:`NA`,children:`Not Assigned`}),(0,J.jsx)(`option`,{value:`P`,children:`In Progress`}),(0,J.jsx)(`option`,{value:`C`,children:`Completed`}),(0,J.jsx)(`option`,{value:`NS`,children:`Not Started`})]}),(0,J.jsx)(Z,{variant:`outline`,size:`sm`,onClick:()=>n({search:``,status:`ALL`}),children:`Clear Filters`})]}),(0,J.jsx)(Cg,{columns:Ey,data:A.reverse(),isLoading:a,rowAction:e=>{i(t=>t===e.order_item_key?null:e.order_item_key)},expandedRow:r,modifiedId:!0,modifiedIdName:`order_item_key`,renderRow:t=>{let n=t.items[0]||{},r=t.items.length,i=()=>t.earliestPlannedDate===t.latestPlannedDate?Tf(t.earliestPlannedDate):(0,J.jsxs)(J.Fragment,{children:[Tf(t.earliestPlannedDate),` `,(0,J.jsx)(`br`,{}),` `,Tf(t.latestPlannedDate)]}),a=t.claimsItem[0],{variant:o,label:s}=ky(a?.expense_status);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)($,{children:[(0,J.jsx)(xy,{children:t.customer_name}),` `,(0,J.jsx)(Sy,{children:t.order_item_key})]}),(0,J.jsx)($,{children:n.audit_type}),(0,J.jsx)($,{children:i()}),(0,J.jsx)($,{children:t.claimsCount>0?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ty,{children:`OPE:`}),` `,(0,J.jsx)(Ty,{value:!0,children:Dy(t.totalOPE)}),(0,J.jsx)(`br`,{}),(0,J.jsx)(Ty,{children:`Settled:`}),` `,(0,J.jsx)(Ty,{value:!0,children:Dy(t.totalSettlement)})]}):`No claims`}),(0,J.jsx)($,{children:(0,J.jsxs)(Sf,{variant:t.approvedCount>0?`success`:`error`,children:[t.approvedCount,`/`,t.claimsCount,` approved`]})}),(0,J.jsx)($,{children:r}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:o,children:s})}),(0,J.jsx)($,{children:[`AA`,`AS`,`C`,`PA`].includes(t.activityStatus)&&(0,J.jsx)(by,{children:t?.claimsItem.length===0?(0,J.jsxs)(Z,{size:`sm`,onClick:()=>e(`/clamDetails`,{state:{data:{...t,mode:`ADD`}}}),children:[(0,J.jsx)(gu,{}),` Add Clam`]}):(0,J.jsxs)(Z,{size:`sm`,variant:`outline`,onClick:()=>e(`/clamDetails`,{state:{data:{...t,mode:`VIEW`}}}),children:[(0,J.jsx)(Iu,{}),` View Clam`]})})})]})},renderExpandedRow:e=>(0,J.jsx)(Cg,{columns:[`Audit Type / Store`,`Planned Date`,`Activity Status`],data:e.items,modifiedId:!0,modifiedIdName:`unique_id`,renderRow:e=>{let t=()=>e?.planned_start_date===e?.planned_end_date?Tf(e?.planned_start_date):(0,J.jsxs)(J.Fragment,{children:[Tf(e?.planned_start_date),` to `,Tf(e?.planned_end_date)]}),n=(Array.isArray(e.claims)?e.claims:[])[0],{variant:r,label:i}=ky(n?.expense_status);return e?.original_P?.is_ope_actual,(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)($,{children:[e.audit_type,(0,J.jsx)(`br`,{}),(0,J.jsx)(Cy,{title:e.original_P?.store_name||`-`,children:e.original_P?.store_name||`-`})]}),(0,J.jsx)($,{children:t()}),(0,J.jsx)($,{children:(0,J.jsx)(Sf,{variant:Bf(e.activityStatus),children:e.statusDisplay})})]})}})}),(0,J.jsx)(Pm,{totalItems:N,itemsPerPage:M,currentPage:j,onPageChange:P,siblingCount:2})]})]})},ky=e=>({N:{variant:`warning`,label:`Not Submitted`},S:{variant:`success`,label:`Submitted`},A:{variant:`info`,label:`Approved`},R:{variant:`error`,label:`Rejected`}})[e]||{variant:`warning`,label:`Not Submitted`};G.p`
 color: ${({theme:e})=>e.colors.textLight};
`,G.div`
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
`,G.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,G.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,G.input`
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
`,G.select`
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
`,G.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing?.sm||`0.5rem`};
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,G.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.3;
`,G.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textLight};
  font-family: monospace;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  display: inline-block;
  width: fit-content;
`,G.div`
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
`,G.span`
  font-weight: 600;
  color: ${({theme:e,value:t})=>t?e.colors.textLight:e.colors.text};
`;function Ay(){let e={username:`ASHUTOSH@PMA_00001`,password:`ashutosh@11`};(0,v.useEffect)(()=>{localStorage.getItem(`apiResponse`)||t()},[]);let t=async()=>{try{let t=await fetch(`https://www.atomwalk.com/rest-auth/login/`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!t.ok)throw Error(`Network response was not ok`);let n=await t.json();localStorage.setItem(`apiResponse`,JSON.stringify(n))}catch(e){console.error(`Error during login:`,e)}};return(0,J.jsx)(_l,{children:(0,J.jsx)(Tl,{children:(0,J.jsxs)(m_,{children:[(0,J.jsx)(mt,{basename:`/retainer`,children:(0,J.jsxs)(it,{children:[(0,J.jsx)(nt,{path:`/login`,element:(0,J.jsx)(sh,{})}),(0,J.jsxs)(nt,{element:(0,J.jsx)(bl,{children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Oi,{}),(0,J.jsx)(tt,{})]})}),children:[(0,J.jsx)(nt,{path:`/dashboard`,element:(0,J.jsx)(Um,{})}),(0,J.jsx)(nt,{path:`/activity`,element:(0,J.jsx)(f_,{})}),(0,J.jsx)(nt,{path:`/profitability-dashboard`,element:(0,J.jsx)(T_,{})}),(0,J.jsx)(nt,{path:`/clam-list`,element:(0,J.jsx)(Oy,{})}),(0,J.jsx)(nt,{path:`/clamDetails`,element:(0,J.jsx)(fy,{})}),(0,J.jsx)(nt,{path:`/resource-list`,element:(0,J.jsx)(Xv,{})}),(0,J.jsx)(nt,{path:`/profile`,element:(0,J.jsx)(ag,{})})]}),(0,J.jsx)(nt,{path:`*`,element:(0,J.jsx)(fg,{})})]})}),(0,J.jsx)(ja,{position:`top-right`,autoClose:3e3})]})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(v.StrictMode,{children:(0,J.jsx)(Ay,{})}));