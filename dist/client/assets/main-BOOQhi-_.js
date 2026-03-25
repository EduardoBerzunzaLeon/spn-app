const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/forte-DJXpVECK.js","assets/jsx-runtime-D-oznMWL.js","assets/Match-CJQl35Qn.js","assets/matchContext-DRy2KXJz.js","assets/useStore-BHosyYw4.js","assets/_auth-DdULM07j.js","assets/signin-BDmCOLNP.js","assets/useAppForm-BdRgclOU.js","assets/dist-CTKPeYl_.js","assets/_auth-BflN74rD.js","assets/EmptySearch-DoZVZn_v.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./jsx-runtime-D-oznMWL.js";import{d as r,i,l as a,n as o,o as s,r as c,t as l,u}from"./useStore-BHosyYw4.js";import{$t as d,A as f,At as p,Bt as m,C as h,Ct as g,Dt as _,Et as v,F as y,G as b,Gt as x,H as S,Ht as C,I as w,J as T,Jt as E,K as ee,Kt as D,L as O,M as te,Mt as ne,N as re,Nt as ie,O as k,Ot as A,P as ae,Pt as oe,Q as se,S as ce,St as le,T as ue,Tt as j,U as M,W as de,Wt as fe,Xt as pe,Yt as me,Z as he,_ as ge,an as _e,at as ve,b as ye,bt as be,cn as xe,ct as Se,dn as Ce,dt as we,en as Te,f as Ee,fn as De,ft as Oe,gn as ke,hn as Ae,ht as je,jt as Me,kt as Ne,l as Pe,m as Fe,mn as Ie,nn as Le,nt as Re,ot as ze,pn as Be,pt as Ve,q as He,qt as Ue,r as We,st as Ge,tn as Ke,u as qe,ut as Je,vt as Ye,w as Xe,wt as Ze,x as Qe,xt as $e,y as et,z as tt,zt as nt}from"./dist-CTKPeYl_.js";import{E as rt,F as it,O as at,a as ot,h as st,i as ct,n as lt,w as ut}from"./matchContext-DRy2KXJz.js";import{a as dt,c as ft,d as pt,i as mt,n as ht,o as gt,r as _t,s as vt,t as yt}from"./Match-CJQl35Qn.js";import{$ as bt,A as xt,B as St,C as Ct,Ct as wt,D as Tt,F as Et,G as Dt,H as Ot,I as kt,J as At,K as jt,L as Mt,M as Nt,N as Pt,O as Ft,Ot as It,P as Lt,Q as Rt,R as zt,S as Bt,St as Vt,T as Ht,Tt as Ut,U as Wt,V as Gt,W as Kt,X as qt,Y as Jt,Z as Yt,_ as Xt,_t as Zt,b as Qt,bt as $t,ct as en,dt as tn,et as nn,ft as rn,g as an,gt as on,h as sn,ht as cn,it as ln,k as un,kt as dn,l as fn,lt as pn,m as mn,mt as hn,n as gn,nt as _n,o as vn,ot as yn,pt as bn,q as xn,r as Sn,st as Cn,t as wn,tt as Tn,u as En,ut as Dn,v as On,vt as kn,w as An,wt as jn,x as Mn,xt as Nn,y as Pn,z as Fn}from"./EmptySearch-DoZVZn_v.js";var In=t((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=ee,D=function(){te.postMessage(null)}}else D=function(){_(ee,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Ln=t(((e,t)=>{t.exports=In()})),Rn=t((e=>{var t=Ln(),n=r(),i=ke();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function d(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var c=!1,l=i.child;l;){if(l===n){c=!0,n=i,r=o;break}if(l===r){c=!0,r=i,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=i;break}if(l===r){c=!0,r=o,n=i;break}l=l.sibling}if(!c)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),D=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function ue(e,t){se++,oe[se]=e.current,e.current=t}var j=ce(null),M=ce(null),de=ce(null),fe=ce(null);function pe(e,t){switch(ue(de,t),ue(M,e),ue(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qd(t),e=Jd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(j),ue(j,e)}function me(){le(j),le(M),le(de)}function he(e){e.memoizedState!==null&&ue(fe,e);var t=j.current,n=Jd(t,e.type);t!==n&&(ue(M,e),ue(j,n))}function ge(e){M.current===e&&(le(j),le(M)),fe.current===e&&(le(fe),np._currentValue=ae)}var _e,ve;function ye(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:vp(e.type)):e}function lt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_f(e);e!==null;){if(n=e[dt])return n;e=_f(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return we.call(jt,e)?!0:we.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(ie(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Qt(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ft]||null;if(!i)throw Error(a(90));Wt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(Ou(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=p({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=p({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(p({},Mn,{dataTransfer:0})),Fn=wn(p({},Dn,{relatedTarget:0})),In=wn(p({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=wn(p({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=wn(p({},Tn,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=wn(p({},Dn,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=wn(p({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=wn(p({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=wn(p({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=wn(p({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=wn(p({},Tn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=mn&&`CompositionEvent`in window,$n=null;mn&&`documentMode`in document&&($n=document.documentMode);var er=mn&&`TextEvent`in window&&!$n,tr=mn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,N=!1;function P(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(N=!0,nr):null;case`textInput`:return e=t.data,e===nr&&N?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Qn&&P(e,t)?(e=bn(),yn=vn=_n=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Md(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){Td(e,0)}function pr(e){if(Bt(St(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(mn){var gr;if(mn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,sn(e)),fn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=mn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Vt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Md(Fr,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};mn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Dt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<bu)throw bu=0,xu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,i,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=qf(e,n,j.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=fi(31,n,t,i),e.elementType=ee,e.lanes=o,e;case _:return _i(n.children,i,o,t);case v:s=8,i|=24;break;case y:return e=fi(12,n,t,i|2),e.elementType=y,e.lanes=o,e;case C:return e=fi(13,n,t,i),e.elementType=C,e.lanes=o,e;case w:return e=fi(19,n,t,i),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-He(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,Ri=null,F=!1,zi=null,Bi=!1,Vi=Error(a(519));function Hi(e){throw Ji(Si(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:K(`cancel`,t),K(`close`,t);break;case`iframe`:case`object`:case`embed`:K(`load`,t);break;case`video`:case`audio`:for(n=0;n<Cd.length;n++)K(Cd[n],t);break;case`source`:K(`error`,t);break;case`img`:case`image`:case`link`:K(`error`,t),K(`load`,t);break;case`details`:K(`toggle`,t);break;case`input`:K(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:K(`invalid`,t);break;case`textarea`:K(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Rd(t.textContent,n)?(r.popover!=null&&(K(`beforetoggle`,t),K(`toggle`,t)),r.onScroll!=null&&K(`scroll`,t),r.onScrollEnd!=null&&K(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Li=Li.return}}function Gi(e){if(e!==Li)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Yd(e.type,e.memoizedProps)),n=!n),n&&Ri&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Ri=gf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Ri=gf(e)}else t===27?(t=Ri,rf(e.type)?(e=hf,hf=null,Ri=e):Ri=t):Ri=Li?mf(e.stateNode.nextSibling):null;return!0}function Ki(){Ri=Li=null,F=!1}function qi(){var e=zi;return e!==null&&(su===null?su=e:su.push.apply(su,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=ce(null),Xi=null,Zi=null;function Qi(e,t,n){ue(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,le(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function na(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;Er(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===fe.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[np]:e.push(np))}i=i.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,da={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=_d(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=k.S;k.S=function(e,t){lu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=ce(null);function Ca(){var e=Sa.current;return e===null?R.pooledCache:e}function wa(e,t){t===null?ue(Sa,Sa.current):ue(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:da._currentValue,pool:e}}var Ea=Error(a(460)),Da=Error(a(474)),Oa=Error(a(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=R,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(a(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(a(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===m?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===E&&Ma(a)===t.type)?(t=i(t,n.props),za(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=_i(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=gi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case g:return t=bi(t,e.mode,n),t.return=e,t;case E:return t=Ma(t),f(e,t,n)}if(ie(t)||te(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===x)return f(e,oa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return n=Ma(n),p(e,t,n,r)}if(ie(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===x)return p(e,t,oa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ma(r),m(e,t,n,r,i)}if(ie(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===x)return m(e,t,n,oa(t,r),i);Ba(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Mi(i,h),l}function y(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),F&&Mi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Mi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),F&&Mi(i,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ma(l)===r.type){n(e,r.sibling),c=i(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ma(o),b(e,r,o,c)}if(ie(o))return v(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===x)return b(e,r,oa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(B&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),tu|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=ce(null),ro=ce(0);function io(e,t){e=$l,ue(ro,e),ue(no,t),$l=e|t.baseLanes}function ao(){ue(ro,$l),ue(no,no.current)}function oo(){$l=ro.current,le(no),le(ro)}var so=ce(null),co=null;function lo(e){var t=e.alternate;ue(ho,ho.current&1),ue(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){ue(ho,ho.current),ue(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(ue(ho,ho.current),ue(so,e),co===null&&(co=e)):po(e)}function po(){ue(ho,ho.current),ue(so,so.current)}function mo(e){le(so),co===e&&(co=null),le(ho)}var ho=ce(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||df(n)||ff(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,vo=null,yo=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function Do(){throw Error(a(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Ks:qs,So=!1,a=n(r,i),So=!1,xo&&(a=jo(t,n,r,i)),Ao(e),a}function Ao(e){k.H=Gs;var t=vo!==null&&vo.next!==null;if(_o=0,yo=vo=I=null,bo=!1,wo=0,To=null,t)throw Error(a(300));e===null||uc||(e=e.dependencies,e!==null&&ra(e)&&(uc=!0))}function jo(e,t,n,r){I=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(a(301));if(i+=1,yo=vo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Js,o=t(n,r)}while(xo);return o}function Mo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?zo(t):t,e=e.useState()[0],(vo===null?null:vo.memoizedState)!==e&&(I.flags|=1024),t}function No(){var e=Co!==0;return Co=0,e}function Po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}_o=0,yo=vo=I=null,xo=!1,wo=Co=0,To=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yo===null?I.memoizedState=yo=e:yo=yo.next=e,yo}function Lo(){if(vo===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=vo.next;var t=yo===null?I.memoizedState:yo.next;if(t!==null)yo=t,vo=e;else{if(e===null)throw I.alternate===null?Error(a(467)):Error(a(310));vo=e,e={memoizedState:vo.memoizedState,baseState:vo.baseState,baseQueue:vo.baseQueue,queue:vo.queue,next:null},yo===null?I.memoizedState=yo=e:yo=yo.next=e}return yo}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=ja(To,e,t),t=I,(yo===null?t.memoizedState:yo.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Ks:qs),e}function Bo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return zo(e);if(e.$$typeof===x)return aa(e)}throw Error(a(438,String(e)))}function Vo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ro(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=D;return t.index++,n}function Ho(e,t){return typeof t==`function`?t(e):t}function Uo(e){return Wo(Lo(),vo,e)}function Wo(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(B&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((_o&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,tu|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,tu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(uc=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Lo(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Er(o,t.memoizedState)||(uc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ko(e,t,n){var r=I,i=Lo(),o=F;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!Er((vo||i).memoizedState,n);if(s&&(i.memoizedState=n,uc=!0),i=i.queue,_s(Yo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||yo!==null&&yo.memoizedState.tag&1){if(r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,i,n,t),null),R===null)throw Error(a(349));o||_o&127||qo(r,t,n)}return n}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Ro(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jo(e,t,n,r){t.value=n,t.getSnapshot=r,Xo(t)&&Zo(e)}function Yo(e,t,n){return n(function(){Xo(t)&&Zo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Zo(e){var t=si(e,2);t!==null&&wu(t,e,2)}function Qo(e){var t=Io();if(typeof e==`function`){var n=e;if(e=n(),So){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function $o(e,t,n,r){return e.baseState=n,Wo(e,vo,typeof r==`function`?r:Ho)}function es(e,t,n,r,i){if(Hs(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),ns(e,t,s)}catch(n){is(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),ns(e,t,a)}catch(n){is(e,t,n)}}function ns(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){rs(e,t,n)},function(n){return is(e,t,n)}):rs(e,t,n)}function rs(e,t,n){t.status=`fulfilled`,t.value=n,as(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ts(e,n)))}function is(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,as(t),t=t.next;while(t!==r)}e.action=null}function as(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function ss(e,t){if(F){var n=R.formState;if(n!==null){a:{var r=I;if(F){if(Ri){b:{for(var i=Ri,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=mf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ri=mf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=Io(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},n.queue=r,n=zs.bind(null,I,r),r.dispatch=n,r=Qo(!1),a=Vs.bind(null,I,!1,r.queue),r=Io(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=es.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function cs(e){return ls(Lo(),vo,e)}function ls(e,t,n){if(t=Wo(e,t,os)[0],e=Uo(Ho)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=zo(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=Lo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,fs(9,{destroy:void 0},us.bind(null,i,n),null)),[r,a,e]}function us(e,t){e.action=t}function ds(e){var t=Lo(),n=vo;if(n!==null)return ls(t,n,e);Lo(),t=t.memoizedState,n=Lo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Ro(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ps(){return Lo().memoizedState}function ms(e,t,n,r){var i=Io();I.flags|=e,i.memoizedState=fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function hs(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=i.memoizedState.inst;vo!==null&&r!==null&&Oo(r,vo.memoizedState.deps)?i.memoizedState=fs(t,a,n,r):(I.flags|=e,i.memoizedState=fs(1|t,a,n,r))}function gs(e,t){ms(8390656,8,e,t)}function _s(e,t){hs(2048,8,e,t)}function vs(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Ro(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ys(e){var t=Lo().memoizedState;return vs({ref:t,nextImpl:e}),function(){if(L&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function bs(e,t){return hs(4,2,e,t)}function xs(e,t){return hs(4,4,e,t)}function Ss(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){n=n==null?null:n.concat([e]),hs(4,4,Ss.bind(null,t,e),n)}function ws(){}function Ts(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Es(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),So){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function Ds(e,t,n){return n===void 0||_o&1073741824&&!(B&261930)?e.memoizedState=t:(e.memoizedState=n,e=Cu(),I.lanes|=e,tu|=e,n)}function Os(e,t,n,r){return Er(n,t)?n:no.current===null?!(_o&42)||_o&1073741824&&!(B&261930)?(uc=!0,e.memoizedState=n):(e=Cu(),I.lanes|=e,tu|=e,t):(e=Ds(e,n,r),Er(e,t)||(uc=!0),e)}function ks(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Vs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Bs(e,t,ba(c,r),Su(e)):Bs(e,t,r,Su(e))}catch(n){Bs(e,t,{then:function(){},status:`rejected`,reason:n},Su())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function As(){}function js(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=Ms(e).queue;ks(e,i,t,ae,n===null?As:function(){return Ns(e),n(r)})}function Ms(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ns(e){var t=Ms(e);t.next===null&&(t=e.alternate.memoizedState),Bs(e,t.next.queue,{},Su())}function Ps(){return aa(np)}function Fs(){return Lo().memoizedState}function Is(){return Lo().memoizedState}function Ls(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Su();e=qa(n);var r=Ja(t,e,n);r!==null&&(wu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Rs(e,t,n){var r=Su();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hs(e)?Us(t,n):(n=oi(e,t,n,r),n!==null&&(wu(n,e,r),Ws(n,t,r)))}function zs(e,t,n){Bs(e,t,n,Su())}function Bs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hs(e))Us(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ai(e,t,i,0),R===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return wu(n,e,r),Ws(n,t,r),!0}return!1}function Vs(e,t,n,r){if(r={lane:2,revertLane:_d(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hs(e)){if(t)throw Error(a(479))}else t=oi(e,n,r,2),t!==null&&wu(t,e,2)}function Hs(e){var t=e.alternate;return e===I||t!==null&&t===I}function Us(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ws(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Gs={readContext:aa,use:Bo,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useLayoutEffect:Do,useInsertionEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useSyncExternalStore:Do,useId:Do,useHostTransitionStatus:Do,useFormState:Do,useActionState:Do,useOptimistic:Do,useMemoCache:Do,useCacheRefresh:Do};Gs.useEffectEvent=Do;var Ks={readContext:aa,use:Bo,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:gs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ms(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){ms(4,2,e,t)},useMemo:function(e,t){var n=Io();t=t===void 0?null:t;var r=e();if(So){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(n!==void 0){var i=n(t);if(So){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Rs.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,n=zs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ws,useDeferredValue:function(e,t){return Ds(Io(),e,t)},useTransition:function(){var e=Qo(!1);return e=ks.bind(null,I,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,i=Io();if(F){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),R===null)throw Error(a(349));B&127||qo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gs(Yo.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,o,n,t),null),n},useId:function(){var e=Io(),t=R.identifierPrefix;if(F){var n=ji,r=Ai;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ps,useFormState:ss,useActionState:ss,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vs.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Io().memoizedState=Ls.bind(null,I)},useEffectEvent:function(e){var t=Io(),n={impl:e};return t.memoizedState=n,function(){if(L&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},qs={readContext:aa,use:Bo,useCallback:Ts,useContext:aa,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Uo,useRef:ps,useState:function(){return Uo(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){return Os(Lo(),vo.memoizedState,e,t)},useTransition:function(){var e=Uo(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){return $o(Lo(),vo,e,t)},useMemoCache:Vo,useCacheRefresh:Is};qs.useEffectEvent=ys;var Js={readContext:aa,use:Bo,useCallback:Ts,useContext:aa,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Go,useRef:ps,useState:function(){return Go(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){var n=Lo();return vo===null?Ds(n,e,t):Os(n,vo.memoizedState,e,t)},useTransition:function(){var e=Go(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var n=Lo();return vo===null?(n.baseState=e,[e,n.queue.dispatch]):$o(n,vo,e,t)},useMemoCache:Vo,useCacheRefresh:Is};Js.useEffectEvent=ys;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Su(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(wu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Su(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(wu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Su(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(wu(t,e,n),Ya(t,e,n))}};function Zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function $s(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function ec(e){ei(e)}function tc(e){console.error(e)}function nc(e){ei(e)}function rc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ic(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ac(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){rc(e,t)},n}function oc(e){return e=qa(e),e.tag=3,e}function sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ic(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ic(t,n,r),typeof i!=`function`&&(fu===null?fu=new Set([this]):fu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function cc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,i,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Fu():n.alternate===null&&eu===0&&(eu=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ed(e,r,i)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ed(e,r,i)),!1}throw Error(a(435,n.tag))}return ed(e,r,i),Fu(),!1}if(F)return t=so.current,t===null?(r!==Vi&&(t=Error(a(423),{cause:r}),Ji(Si(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Si(r,n),i=ac(e.stateNode,r,i),Xa(e,i),eu!==4&&(eu=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Vi&&(e=Error(a(422),{cause:r}),Ji(Si(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=Si(o,n),ou===null?ou=[o]:ou.push(o),eu!==4&&(eu=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ac(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(fu===null||!fu.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=oc(i),sc(i,e,n,r),Xa(n,i),!1}n=n.return}while(n!==null);return!1}var lc=Error(a(461)),uc=!1;function dc(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=ko(e,t,n,o,a,i),s=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(F&&s&&Pi(t),t.flags|=1,dc(e,t,r,i),t.child)}function pc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,mc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Lc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ic(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(uc=!1,t.pendingProps=r=a,Lc(e,i))e.flags&131072&&(uc=!0);else return t.lanes=e.lanes,Ic(e,t,i)}return Sc(e,t,n,r,i)}function hc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return _c(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,_c(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return dc(e,t,i,n),t.child}function gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _c(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function vc(e,t){return t=jc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yc(e,t,n){return Ha(t,e.child,null,n),e=vc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function bc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=vc(t,r),t.lanes=536870912,gc(null,e);if(uo(t),(e=Ri)?(e=uf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),i)if(t.flags&256)t.flags&=-257,t=yc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(uc||na(e,t,n,!1),i=(n&e.childLanes)!==0,uc||i){if(r=R,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),wu(r,e,s),lc;Fu(),t=yc(e,t,n)}else e=o.treeContext,Ri=mf(s.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=vc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sc(e,t,n,r,i){return ia(t),n=ko(e,t,n,r,void 0,i),r=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(F&&r&&Pi(t),t.flags|=1,dc(e,t,n,i),t.child)}function Cc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=jo(t,r,n,i),Ao(e),r=No(),e!==null&&!uc?(Po(e,t,a),Ic(e,t,a)):(F&&r&&Pi(t),t.flags|=1,dc(e,t,n,a),t.child)}function wc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Xs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ys(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Xs.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=$s(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Qs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Ys(t,n,d,r),l=t.memoizedState),(c=Wa||Zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=$s(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Qs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Ys(t,n,s,r),p=t.memoizedState),(u=Wa||Zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,xc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ic(e,t,i),e}function Tc(e,t,n,r){return Ki(),t.flags|=256,dc(e,t,n,r),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(e){return{baseLanes:e,cachePool:Ta()}}function Oc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=iu),e}function kc(e,t,n){var r=t.pendingProps,i=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ho.current&2)!=0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(i?lo(t):po(t),(e=Ri)?(e=uf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return ff(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(po(t),i=t.mode,c=jc({mode:`hidden`,children:c},i),r=_i(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(null,r)):(lo(t),Ac(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Mc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,i=t.mode,r=jc({mode:`visible`,children:r.children},i),c=_i(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,t=gc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),ff(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(a(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Mc(e,t,n)}else if(uc||na(e,t,n,!1),s=(n&e.childLanes)!==0,uc||s){if(s=R,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),wu(s,e,r),lc;df(c)||Fu(),t=Mc(e,t,n)}else df(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ri=mf(c.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=Ac(t,r.children),t.flags|=4096);return t}return i?(po(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,i,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,gc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Dc(n):(i=c.cachePool,i===null?i=Ta():(l=da._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ac(e,t){return t=jc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function jc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Mc(e,t,n){return Ha(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Pc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Fc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ho.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,ue(ho,o),dc(e,t,r,n),r=F?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nc(e,n,t);else if(e.tag===19)Nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pc(t,!0,n,null,a,r);break;case`together`:Pc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ic(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Rc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),Qi(t,da,e.memoizedState.cache),Ki();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Ic(e,t,n),e===null?null:e.sibling):kc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Fc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ho,ho.current),r)break;return null;case 22:return t.lanes=0,hc(e,t,n,t.pendingProps);case 24:Qi(t,da,e.memoizedState.cache)}return Ic(e,t,n)}function zc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)uc=!0;else{if(!Lc(e,n)&&!(t.flags&128))return uc=!1,Rc(e,t,n);uc=!!(e.flags&131072)}else uc=!1,F&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=$s(e,r),t.tag=1,t=wc(null,t,e,r,n)):(t.tag=0,t=Sc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=fc(null,t,e,r,n);break a}else if(i===T){t.tag=14,t=pc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(a(306,t,``))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=$s(r,t.pendingProps),wc(e,t,r,i,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,da,r),r!==o.cache&&ta(t,[da],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Tc(e,t,r,n);break a}else if(r!==i){i=Si(Error(a(424)),t),Ji(i),t=Tc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ri=mf(e.firstChild),Li=t,F=!0,zi=null,Bi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===i){t=Ic(e,t,n);break a}dc(e,t,r,n)}t=t.child}return t;case 26:return xc(e,t),e===null?(n=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Kd(de.current).createElement(n),r[dt]=t,r[ft]=e,Bd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&F&&(r=t.stateNode=vf(t.type,t.pendingProps,de.current),Li=t,Bi=!0,i=Ri,rf(t.type)?(hf=i,Ri=mf(r.firstChild)):Ri=i),dc(e,t,t.pendingProps.children,n),xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((i=r=Ri)&&(r=cf(r,t.type,t.pendingProps,Bi),r===null?i=!1:(t.stateNode=r,Li=t,Ri=mf(r.firstChild),Bi=!1,i=!0)),i||Hi(t)),he(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Yd(i,o)?r=null:s!==null&&Yd(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=ko(e,t,Mo,null,null,n),np._currentValue=i),xc(e,t),dc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=Ri)&&(n=lf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Li=t,Ri=null,e=!0)),e||Hi(t)),null;case 13:return kc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):dc(e,t,r,n),t.child;case 11:return fc(e,t,t.type,t.pendingProps,n);case 7:return dc(e,t,t.pendingProps,n),t.child;case 8:return dc(e,t,t.pendingProps.children,n),t.child;case 12:return dc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),dc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ia(t),i=aa(i),r=r(i),t.flags|=1,dc(e,t,r,n),t.child;case 14:return pc(e,t,t.type,t.pendingProps,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 19:return Fc(e,t,n);case 31:return bc(e,t,n);case 22:return hc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(da),e===null?(i=Ca(),i===null&&(i=R,o=fa(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Ga(t),Qi(t,da,i)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,Qi(t,da,r),r!==i.cache&&ta(t,[da],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Qi(t,da,r))),dc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Bc(e){e.flags|=4}function Vc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Mu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Hc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(Mu())e.flags|=8192;else throw Na=ka,Da}function Uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,au|=t)}function Wc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gc(t),null;case 1:return Gc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(da),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Bc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),Gc(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Bc(t),o===null?(Gc(t),Vc(t,i,null,r,n)):(Gc(t),Hc(t,o))):o?o===e.memoizedState?(Gc(t),t.flags&=-16777217):(Bc(t),Gc(t),Hc(t,o)):(e=e.memoizedProps,e!==r&&Bc(t),Gc(t),Vc(t,i,e,r,n)),null;case 27:if(ge(t),n=de.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Gc(t),null}e=j.current,Gi(t)?Ui(t,e):(e=vf(i,r,n),t.stateNode=e,Bc(t))}return Gc(t),null;case 5:if(ge(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Gc(t),null}if(o=j.current,Gi(t))Ui(t,o);else{var s=Kd(de.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Bd(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Bc(t)}}return Gc(t),Vc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=de.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Li,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Rd(e.nodeValue,n)),e||Hi(t,!0)}else e=Kd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return Gc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[dt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Gc(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(a(558))}return Gc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[dt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Gc(t),i=!1}else i=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Uc(t,t.updateQueue),Gc(t),null);case 4:return me(),e===null&&Od(t.stateNode.containerInfo),Gc(t),null;case 10:return $i(t.type),Gc(t),null;case 19:if(le(ho),r=t.memoizedState,r===null)return Gc(t),null;if(i=(t.flags&128)!=0,o=r.rendering,o===null)if(i)Wc(r,!1);else{if(eu!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,Wc(r,!1),e=o.updateQueue,t.updateQueue=e,Uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return ue(ho,ho.current&1|2),F&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>uu&&(t.flags|=128,i=!0,Wc(r,!1),t.lanes=4194304)}else{if(!i)if(e=go(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Uc(t,e),Wc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return Gc(t),null}else 2*Ae()-r.renderingStartTime>uu&&n!==536870912&&(t.flags|=128,i=!0,Wc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Gc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=ho.current,ue(ho,i?n&1|2:n&1),F&&Mi(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Gc(t),t.subtreeFlags&6&&(t.flags|=8192)):Gc(t),n=t.updateQueue,n!==null&&Uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(da),Gc(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function qc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(da),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(a(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ho),null;case 4:return me(),null;case 10:return $i(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&le(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(da),null;case 25:return null;default:return null}}function Jc(e,t){switch(Fi(t),t.tag){case 3:$i(da),me();break;case 26:case 27:case 5:ge(t);break;case 4:me();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:le(ho);break;case 10:$i(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&le(Sa);break;case 24:$i(da)}}function Yc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){$u(t,t.return,e)}}function Xc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){$u(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){$u(t,t.return,e)}}function Zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){$u(e,e.return,t)}}}function Qc(e,t,n){n.props=$s(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){$u(e,t,n)}}function $c(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){$u(e,t,n)}}function el(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){$u(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){$u(e,t,n)}else n.current=null}function tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){$u(e,e.return,t)}}function nl(e,t,n){try{var r=e.stateNode;Vd(r,e.type,n,t),r[ft]=t}catch(t){$u(e,e.return,t)}}function rl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rf(e.type)||e.tag===4}function il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||rl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&rf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&rf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}function sl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Bd(t,r,n),t[dt]=e,t[ft]=n}catch(t){$u(e,e.return,t)}}var cl=!1,ll=!1,ul=!1,dl=typeof WeakSet==`function`?WeakSet:Set,fl=null;function pl(e,t){if(e=e.containerInfo,Wd=dp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Gd={focusedElem:e,selectionRange:n},dp=!1,fl=t;fl!==null;)if(t=fl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,fl=e;else for(;fl!==null;){switch(t=fl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=$s(n.type,i);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){$u(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:sf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,fl=e;break}fl=t.return}}function ml(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:kl(e,n),r&4&&Yc(5,n);break;case 1:if(kl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){$u(n,n.return,e)}else{var i=$s(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){$u(n,n.return,e)}}r&64&&Zc(n),r&512&&$c(n,n.return);break;case 3:if(kl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){$u(n,n.return,e)}}break;case 27:t===null&&r&4&&sl(n);case 26:case 5:kl(e,n),t===null&&r&4&&tl(n),r&512&&$c(n,n.return);break;case 12:kl(e,n);break;case 31:kl(e,n),r&4&&bl(e,n);break;case 13:kl(e,n),r&4&&xl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rd.bind(null,n),pf(e,n))));break;case 22:if(r=n.memoizedState!==null||cl,!r){t=t!==null&&t.memoizedState!==null||ll,i=cl;var a=ll;cl=r,(ll=t)&&!a?jl(e,n,(n.subtreeFlags&8772)!=0):kl(e,n),cl=i,ll=a}break;case 30:break;default:kl(e,n)}}function hl(e){var t=e.alternate;t!==null&&(e.alternate=null,hl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gl=null,_l=!1;function vl(e,t,n){for(n=n.child;n!==null;)yl(e,t,n),n=n.sibling}function yl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:ll||el(n,t),vl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ll||el(n,t);var r=gl,i=_l;rf(n.type)&&(gl=n.stateNode,_l=!1),vl(e,t,n),yf(n.stateNode),gl=r,_l=i;break;case 5:ll||el(n,t);case 6:if(r=gl,i=_l,gl=null,vl(e,t,n),gl=r,_l=i,gl!==null)if(_l)try{(gl.nodeType===9?gl.body:gl.nodeName===`HTML`?gl.ownerDocument.body:gl).removeChild(n.stateNode)}catch(e){$u(n,t,e)}else try{gl.removeChild(n.stateNode)}catch(e){$u(n,t,e)}break;case 18:gl!==null&&(_l?(e=gl,af(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Ip(e)):af(gl,n.stateNode));break;case 4:r=gl,i=_l,gl=n.stateNode.containerInfo,_l=!0,vl(e,t,n),gl=r,_l=i;break;case 0:case 11:case 14:case 15:Xc(2,n,t),ll||Xc(4,n,t),vl(e,t,n);break;case 1:ll||(el(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Qc(n,t,r)),vl(e,t,n);break;case 21:vl(e,t,n);break;case 22:ll=(r=ll)||n.memoizedState!==null,vl(e,t,n),ll=r;break;default:vl(e,t,n)}}function bl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ip(e)}catch(e){$u(t,t.return,e)}}}function xl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ip(e)}catch(e){$u(t,t.return,e)}}function Sl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dl),t;default:throw Error(a(435,e.tag))}}function Cl(e,t){var n=Sl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=id.bind(null,e,t);t.then(r,r)}})}function wl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(rf(c.type)){gl=c.stateNode,_l=!1;break a}break;case 5:gl=c.stateNode,_l=!1;break a;case 3:case 4:gl=c.stateNode.containerInfo,_l=!0;break a}c=c.return}if(gl===null)throw Error(a(160));yl(o,s,i),gl=null,_l=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)El(t,e),t=t.sibling}var Tl=null;function El(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wl(t,e),Dl(e),r&4&&(Xc(3,e,e.return),Yc(3,e),Xc(5,e,e.return));break;case 1:wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),r&64&&cl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=Tl;if(wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:o=i.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector(`head > title`))),Bd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Gf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=i.createElement(r),Bd(o,r,n),i.head.appendChild(o);break;case`meta`:if(s=Gf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=i.createElement(r),Bd(o,r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Kf(i,e.type,e.stateNode);else e.stateNode=Y(i,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&nl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Kf(i,e.type,e.stateNode):Y(i,r,e.memoizedProps))}break;case 27:wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),n!==null&&r&4&&nl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),e.flags&32){i=e.stateNode;try{Xt(i,``)}catch(t){$u(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,nl(e,i,n===null?i:n.memoizedProps)),r&1024&&(ul=!0);break;case 6:if(wl(t,e),Dl(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){$u(e,e.return,t)}}break;case 3:if(Wf=null,i=Tl,Tl=Sf(t.containerInfo),wl(t,e),Tl=i,Dl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ip(t.containerInfo)}catch(t){$u(e,e.return,t)}ul&&(ul=!1,Ol(e));break;case 4:r=Tl,Tl=Sf(e.stateNode.containerInfo),wl(t,e),Dl(e),Tl=r;break;case 12:wl(t,e),Dl(e);break;case 31:wl(t,e),Dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 13:wl(t,e),Dl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(cu=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=cl,d=ll;if(cl=u||i,ll=d||l,wl(t,e),ll=d,cl=u,Dl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||cl||ll||Al(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,i)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){$u(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){$u(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?of(m,!0):of(l.stateNode,!1)}catch(e){$u(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Cl(e,n))));break;case 19:wl(t,e),Dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 30:break;case 21:break;default:wl(t,e),Dl(e)}}function Dl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(rl(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;ol(e,il(e),i);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),ol(e,il(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;al(e,il(e),s);break;default:throw Error(a(161))}}catch(t){$u(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ol(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ol(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ml(e,t.alternate,t),t=t.sibling}function Al(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xc(4,t,t.return),Al(t);break;case 1:el(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Qc(t,t.return,n),Al(t);break;case 27:yf(t.stateNode);case 26:case 5:el(t,t.return),Al(t);break;case 22:t.memoizedState===null&&Al(t);break;case 30:Al(t);break;default:Al(t)}e=e.sibling}}function jl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:jl(i,a,n),Yc(4,a);break;case 1:if(jl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){$u(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){$u(r,r.return,e)}}n&&o&64&&Zc(a),$c(a,a.return);break;case 27:sl(a);case 26:case 5:jl(i,a,n),n&&r===null&&o&4&&tl(a),$c(a,a.return);break;case 12:jl(i,a,n);break;case 31:jl(i,a,n),n&&o&4&&bl(i,a);break;case 13:jl(i,a,n),n&&o&4&&xl(i,a);break;case 22:a.memoizedState===null&&jl(i,a,n),$c(a,a.return);break;case 30:break;default:jl(i,a,n)}t=t.sibling}}function Ml(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Nl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function Pl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fl(e,t,n,r),t=t.sibling}function Fl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pl(e,t,n,r),i&2048&&Yc(9,t);break;case 1:Pl(e,t,n,r);break;case 3:Pl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){Pl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){$u(t,t.return,e)}}else Pl(e,t,n,r);break;case 31:Pl(e,t,n,r);break;case 13:Pl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Pl(e,t,n,r):(a._visibility|=2,Il(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Pl(e,t,n,r):Ll(e,t),i&2048&&Ml(o,t);break;case 24:Pl(e,t,n,r),i&2048&&Nl(t.alternate,t);break;default:Pl(e,t,n,r)}}function Il(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Il(a,o,s,c,i),Yc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Il(a,o,s,c,i)):u._visibility&2?Il(a,o,s,c,i):Ll(a,o),i&&l&2048&&Ml(o.alternate,o);break;case 24:Il(a,o,s,c,i),i&&l&2048&&Nl(o.alternate,o);break;default:Il(a,o,s,c,i)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ll(n,r),i&2048&&Ml(r.alternate,r);break;case 24:Ll(n,r),i&2048&&Nl(r.alternate,r);break;default:Ll(n,r)}t=t.sibling}}var Rl=8192;function zl(e,t,n){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)Bl(e,t,n),e=e.sibling}function Bl(e,t,n){switch(e.tag){case 26:zl(e,t,n),e.flags&Rl&&e.memoizedState!==null&&Yf(n,Tl,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,n);break;case 3:case 4:var r=Tl;Tl=Sf(e.stateNode.containerInfo),zl(e,t,n),Tl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Rl,Rl=16777216,zl(e,t,n),Rl=r):zl(e,t,n));break;default:zl(e,t,n)}}function Vl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fl=r,Gl(r,e)}Vl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ul(e),e=e.sibling}function Ul(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Xc(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wl(e)):Hl(e);break;default:Hl(e)}}function Wl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fl=r,Gl(r,e)}Vl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xc(8,t,t.return),Wl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wl(t));break;default:Wl(t)}e=e.sibling}}function Gl(e,t){for(;fl!==null;){var n=fl;switch(n.tag){case 0:case 11:case 15:Xc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,fl=r;else a:for(n=e;fl!==null;){r=fl;var i=r.sibling,a=r.return;if(hl(r),r===n){fl=null;break a}if(i!==null){i.return=a,fl=i;break a}fl=a}}}var Kl={getCacheForType:function(e){var t=aa(da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(da).controller.signal}},ql=typeof WeakMap==`function`?WeakMap:Map,L=0,R=null,z=null,B=0,Jl=0,Yl=null,Xl=!1,Zl=!1,Ql=!1,$l=0,eu=0,tu=0,nu=0,ru=0,iu=0,au=0,ou=null,su=null,V=!1,cu=0,lu=0,uu=1/0,du=null,fu=null,pu=0,mu=null,hu=null,gu=0,_u=0,vu=null,yu=null,bu=0,xu=null;function Su(){return L&2&&B!==0?B&-B:k.T===null?ct():_d()}function Cu(){if(iu===0)if(!(B&536870912)||F){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),iu=e}else iu=536870912;return e=so.current,e!==null&&(e.flags|=32),iu}function wu(e,t,n){(e===R&&(Jl===2||Jl===9)||e.cancelPendingCommit!==null)&&(Au(e,0),Du(e,B,iu,!1)),tt(e,n),(!(L&2)||e!==R)&&(e===R&&(!(L&2)&&(nu|=n),eu===4&&Du(e,B,iu,!1)),dd(e))}function Tu(e,t,n){if(L&6)throw Error(a(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),i=r?Ru(e,t):Iu(e,t,!0),o=r;do{if(i===0){Zl&&!r&&Du(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!H(n)){i=Iu(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=ou;var l=c.current.memoizedState.isDehydrated;if(l&&(Au(c,s).flags|=256),s=Iu(c,s,!1),s!==2){if(Ql&&!l){c.errorRecoveryDisabledLanes|=o,nu|=o,i=4;break a}o=su,su=i,o!==null&&(su===null?su=o:su.push.apply(su,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Au(e,0),Du(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:Du(r,t,iu,!Xl);break a;case 2:su=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=cu+300-Ae(),10<i)){if(Du(r,t,iu,!Xl),Xe(r,0,!0)!==0)break a;gu=t,r.timeoutHandle=Qd(Eu.bind(null,r,n,su,du,V,t,iu,nu,au,Xl,o,`Throttled`,-0,0),i);break a}Eu(r,n,su,du,V,t,iu,nu,au,Xl,o,null,-0,0)}}break}while(1);dd(e)}function Eu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Bl(t,a,d);var m=(a&62914560)===a?cu-Ae():(a&4194048)===a?lu-Ae():0;if(m=Zf(d,m),m!==null){gu=a,e.cancelPendingCommit=m(Gu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Du(e,a,o,!l);return}}Gu(e,t,a,n,r,i,o,s,c)}function H(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Du(e,t,n,r){t&=~ru,t&=~nu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function Ou(){return L&6?!0:(W(0,!1),!1)}function ku(){if(z!==null){if(Jl===0)var e=z.return;else e=z,Zi=Xi=null,Fo(e),Ia=null,La=0,e=z;for(;e!==null;)Jc(e.alternate,e),e=e.return;z=null}}function Au(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$d(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),gu=0,ku(),R=e,z=n=mi(e.current,null),B=t,Jl=0,Yl=null,Xl=!1,Zl=Ze(e,t),Ql=!1,au=iu=ru=nu=tu=eu=0,su=ou=null,V=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return $l=t,ii(),n}function ju(e,t){I=null,k.H=Gs,t===Ea||t===Oa?(t=Pa(),Jl=3):t===Da?(t=Pa(),Jl=4):Jl=t===lc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Yl=t,z===null&&(eu=1,rc(e,Si(t,e.current)))}function Mu(){var e=so.current;return e===null?!0:(B&4194048)===B?co===null:(B&62914560)===B||B&536870912?e===co:!1}function Nu(){var e=k.H;return k.H=Gs,e===null?Gs:e}function Pu(){var e=k.A;return k.A=Kl,e}function Fu(){eu=4,Xl||(B&4194048)!==B&&so.current!==null||(Zl=!0),!(tu&134217727)&&!(nu&134217727)||R===null||Du(R,B,iu,!1)}function Iu(e,t,n){var r=L;L|=2;var i=Nu(),a=Pu();(R!==e||B!==t)&&(du=null,Au(e,t)),t=!1;var o=eu;a:do try{if(Jl!==0&&z!==null){var s=z,c=Yl;switch(Jl){case 8:ku(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Jl;if(Jl=0,Yl=null,Hu(e,s,c,l),n&&Zl){o=0;break a}break;default:l=Jl,Jl=0,Yl=null,Hu(e,s,c,l)}}Lu(),o=eu;break}catch(t){ju(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,L=r,k.H=i,k.A=a,z===null&&(R=null,B=0,ii()),o}function Lu(){for(;z!==null;)Bu(z)}function Ru(e,t){var n=L;L|=2;var r=Nu(),i=Pu();R!==e||B!==t?(du=null,uu=Ae()+500,Au(e,t)):Zl=Ze(e,t);a:do try{if(Jl!==0&&z!==null){t=z;var o=Yl;b:switch(Jl){case 1:Jl=0,Yl=null,Hu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Jl=0,Yl=null,Vu(t);break}t=function(){Jl!==2&&Jl!==9||R!==e||(Jl=7),dd(e)},o.then(t,t);break a;case 3:Jl=7;break a;case 4:Jl=5;break a;case 7:Aa(o)?(Jl=0,Yl=null,Vu(t)):(Jl=0,Yl=null,Hu(e,t,o,7));break;case 5:var s=null;switch(z.tag){case 26:s=z.memoizedState;case 5:case 27:var c=z;if(s?Jf(s):c.stateNode.complete){Jl=0,Yl=null;var l=c.sibling;if(l!==null)z=l;else{var u=c.return;u===null?z=null:(z=u,Uu(u))}break b}}Jl=0,Yl=null,Hu(e,t,o,5);break;case 6:Jl=0,Yl=null,Hu(e,t,o,6);break;case 8:ku(),eu=6;break a;default:throw Error(a(462))}}zu();break}catch(t){ju(e,t)}while(1);return Zi=Xi=null,k.H=r,k.A=i,L=n,z===null?(R=null,B=0,ii(),eu):0}function zu(){for(;z!==null&&!De();)Bu(z)}function Bu(e){var t=zc(e.alternate,e,$l);e.memoizedProps=e.pendingProps,t===null?Uu(e):z=t}function Vu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cc(n,t,t.pendingProps,t.type,void 0,B);break;case 11:t=Cc(n,t,t.pendingProps,t.type.render,t.ref,B);break;case 5:Fo(t);default:Jc(n,t),t=z=hi(t,$l),t=zc(n,t,$l)}e.memoizedProps=e.pendingProps,t===null?Uu(e):z=t}function Hu(e,t,n,r){Zi=Xi=null,Fo(t),Ia=null,La=0;var i=t.return;try{if(cc(e,i,t,n,B)){eu=1,rc(e,Si(n,e.current)),z=null;return}}catch(t){if(i!==null)throw z=i,t;eu=1,rc(e,Si(n,e.current)),z=null;return}t.flags&32768?(F||r===1?e=!0:Zl||B&536870912?e=!1:(Xl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wu(t,e)):Uu(t)}function Uu(e){var t=e;do{if(t.flags&32768){Wu(t,Xl);return}e=t.return;var n=Kc(t.alternate,t,$l);if(n!==null){z=n;return}if(t=t.sibling,t!==null){z=t;return}z=t=e}while(t!==null);eu===0&&(eu=5)}function Wu(e,t){do{var n=qc(e.alternate,e);if(n!==null){n.flags&=32767,z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){z=e;return}z=e=n}while(e!==null);eu=6,z=null}function Gu(e,t,n,r,i,o,s,c,l){e.cancelPendingCommit=null;do Xu();while(pu!==0);if(L&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,o|=ri,nt(e,n,o,s,c,l),e===R&&(z=R=null,B=0),hu=t,mu=e,gu=n,_u=o,vu=i,yu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ad(Pe,function(){return Zu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,i=A.p,A.p=2,s=L,L|=4;try{pl(e,t,n)}finally{L=s,A.p=i,k.T=r}}pu=1,Ku(),qu(),Ju()}}function Ku(){if(pu===1){pu=0;var e=mu,t=hu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=L;L|=4;try{El(t,e);var a=Gd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}dp=!!Wd,Gd=Wd=null}finally{L=i,A.p=r,k.T=n}}e.current=t,pu=2}}function qu(){if(pu===2){pu=0;var e=mu,t=hu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=L;L|=4;try{ml(e,t.alternate,t)}finally{L=i,A.p=r,k.T=n}}pu=3}}function Ju(){if(pu===4||pu===3){pu=0,Oe();var e=mu,t=hu,n=gu,r=yu;t.subtreeFlags&10256||t.flags&10256?pu=5:(pu=0,hu=mu=null,Yu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(fu=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}gu&3&&Xu(),dd(e),i=e.pendingLanes,n&261930&&i&42?e===xu?bu++:(bu=0,xu=e):bu=0,W(0,!1)}}function Yu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Xu(){return Ku(),qu(),Ju(),Zu()}function Zu(){if(pu!==5)return!1;var e=mu,t=_u;_u=0;var n=st(gu),r=k.T,i=A.p;try{A.p=32>n?32:n,k.T=null,n=vu,vu=null;var o=mu,s=gu;if(pu=0,hu=mu=null,gu=0,L&6)throw Error(a(331));var c=L;if(L|=4,Ul(o.current),Fl(o,o.current,s,n),L=c,W(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{A.p=i,k.T=r,Yu(e,t)}}function Qu(e,t,n){t=Si(n,t),t=ac(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(tt(e,2),dd(e))}function $u(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(fu===null||!fu.has(r))){e=Si(n,e),n=oc(2),r=Ja(t,n,2),r!==null&&(sc(n,r,t,e),tt(r,2),dd(r));break}}t=t.return}}function ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ql;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ql=!0,i.add(n),e=td.bind(null,e,t,n),t.then(e,e))}function td(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,R===e&&(B&n)===n&&(eu===4||eu===3&&(B&62914560)===B&&300>Ae()-cu?!(L&2)&&Au(e,0):ru|=n,au===B&&(au=0)),dd(e)}function nd(e,t){t===0&&(t=$e()),e=si(e,t),e!==null&&(tt(e,t),dd(e))}function rd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nd(e,n)}function id(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),nd(e,n)}function ad(e,t){return Te(e,t)}var od=null,sd=null,cd=!1,ld=!1,ud=!1,U=0;function dd(e){e!==sd&&e.next===null&&(sd===null?od=sd=e:sd=sd.next=e),ld=!0,cd||(cd=!0,gd())}function W(e,t){if(!ud&&ld){ud=!0;do for(var n=!1,r=od;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,hd(r,a))}else a=B,a=Xe(r,r===R?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,hd(r,a));r=r.next}while(n);ud=!1}}function fd(){G()}function G(){ld=cd=!1;var e=0;U!==0&&Zd()&&(e=U);for(var t=Ae(),n=null,r=od;r!==null;){var i=r.next,a=pd(r,t);a===0?(r.next=null,n===null?od=i:n.next=i,i===null&&(sd=n)):(n=r,(e!==0||a&3)&&(ld=!0)),r=i}pu!==0&&pu!==5||W(e,!1),U!==0&&(U=0)}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=R,n=B,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Jl===2||Jl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=md.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function md(e,t){if(pu!==0&&pu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xu()&&e.callbackNode!==n)return null;var r=B;return r=Xe(e,e===R?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Tu(e,r,t),pd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?md.bind(null,e):null)}function hd(e,t){if(Xu())return null;Tu(e,t,!0)}function gd(){tf(function(){L&6?Te(Me,fd):G()})}function _d(){if(U===0){var e=ga;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),U=e}return U}function vd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function yd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=vd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?vd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(U!==0){var e=o?yd(i,o):new FormData(i);js(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?yd(i,o):new FormData(i),js(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var xd=0;xd<Qr.length;xd++){var Sd=Qr[xd];$r(Sd.toLowerCase(),`on`+(Sd[0].toUpperCase()+Sd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Cd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),wd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Cd));function Td(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function K(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(kd(t,e,2,!1),n.add(r))}function Ed(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var Dd=`_reactListening`+Math.random().toString(36).slice(2);function Od(e){if(!e[Dd]){e[Dd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(wd.has(t)||Ed(t,!1,e),Ed(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dd]||(t[Dd]=!0,Ed(`selectionchange`,!1,t))}}function kd(e,t,n,r){switch(vp(t)){case 2:var i=fp;break;case 8:i=pp;break;default:i=mp}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ad(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=bt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),o=[];a:{var c=Zr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Wr:case Gr:case Kr:l=In;break;case Xr:l=Jn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(jd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=s(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Nd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Pd(o,c,l,d,!1),u!==null&&f!==null&&Pd(o,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){lr(o,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(o,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(o,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ir?P(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(ir||x!==`onCompositionStart`?x===`onCompositionEnd`&&ir&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ir=!0)),y=Md(r,x),0<y.length&&(x=new zn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=rr(n),b!==null&&(x.data=b)))),(b=er?ar(e,n):or(e,n))&&(x=Md(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),bd(o,e,r,n,i)}Td(o,t)})}function jd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Md(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(jd(e,i,a)),i=pn(e,t),i!=null&&r.push(jd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Nd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(jd(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(jd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Fd=/\r\n?/g,Id=/\u0000|\uFFFD/g;function Ld(e){return(typeof e==`string`?e:``+e).replace(Fd,`
`).replace(Id,``)}function Rd(e,t){return t=Ld(t),Ld(e)===t}function q(e,t,n,r,i,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&q(e,t,`name`,i.name,i,null),q(e,t,`formEncType`,i.formEncType,i,null),q(e,t,`formMethod`,i.formMethod,i,null),q(e,t,`formTarget`,i.formTarget,i,null)):(q(e,t,`encType`,i.encType,i,null),q(e,t,`method`,i.method,i,null),q(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:K(`beforetoggle`,e),K(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function zd(e,t,n,r,i,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&K(`scroll`,e);break;case`onScrollEnd`:r!=null&&K(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,i),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Bd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:K(`error`,e),K(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:q(e,t,o,s,n,null)}}i&&q(e,t,`srcSet`,n.srcSet,n,null),r&&q(e,t,`src`,n.src,n,null);return;case`input`:K(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:q(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,i,!1);return;case`select`:for(i in K(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:q(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in K(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:q(e,t,s,c,n,null)}Yt(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:q(e,t,l,r,n,null)}return;case`dialog`:K(`beforetoggle`,e),K(`toggle`,e),K(`cancel`,e),K(`close`,e);break;case`iframe`:case`object`:K(`load`,e);break;case`video`:case`audio`:for(r=0;r<Cd.length;r++)K(Cd[r],e);break;case`image`:K(`error`,e),K(`load`,e);break;case`details`:K(`toggle`,e);break;case`embed`:case`source`:case`link`:K(`error`,e),K(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:q(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&zd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&q(e,t,c,r,n,null))}function Vd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&q(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||q(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&q(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:q(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&q(e,t,s,i,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:q(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&zd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||zd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||q(e,t,f,p,r,m)}function Hd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ud(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Hd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Hd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Wd=null,Gd=null;function Kd(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Jd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Yd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xd=null;function Zd(){var e=window.event;return e&&e.type===`popstate`?e===Xd?!1:(Xd=e,!0):(Xd=null,!1)}var Qd=typeof setTimeout==`function`?setTimeout:void 0,$d=typeof clearTimeout==`function`?clearTimeout:void 0,ef=typeof Promise==`function`?Promise:void 0,tf=typeof queueMicrotask==`function`?queueMicrotask:ef===void 0?Qd:function(e){return ef.resolve(null).then(e).catch(nf)};function nf(e){setTimeout(function(){throw e})}function rf(e){return e===`head`}function af(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Ip(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)yf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,yf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&yf(e.ownerDocument.body);n=i}while(n);Ip(t)}function of(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:sf(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function cf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=mf(e.nextSibling),e===null)break}return null}function lf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=mf(e.nextSibling),e===null))return null;return e}function uf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=mf(e.nextSibling),e===null))return null;return e}function df(e){return e.data===`$?`||e.data===`$~`}function ff(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function pf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function mf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var hf=null;function gf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return mf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function _f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function vf(e,t,n){switch(t=Kd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function yf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var bf=new Map,xf=new Set;function Sf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cf=A.d;A.d={f:wf,r:Tf,D:Of,C:kf,L:Af,m:J,X:Mf,S:jf,M:Nf};function wf(){var e=Cf.f(),t=Ou();return e||t}function Tf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ns(t):Cf.r(e)}var Ef=typeof document>`u`?null:document;function Df(e,t,n){var r=Ef;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xf.has(i)||(xf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Bd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Of(e){Cf.D(e),Df(`dns-prefetch`,e,null)}function kf(e,t){Cf.C(e,t),Df(`preconnect`,e,t)}function Af(e,t,n){Cf.L(e,t,n);var r=Ef;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Ff(e);break;case`script`:a=zf(e)}bf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(If(a))||t===`script`&&r.querySelector(Bf(a))||(t=r.createElement(`link`),Bd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function J(e,t){Cf.m(e,t);var n=Ef;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zf(e)}if(!bf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),bf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bf(a)))return}r=n.createElement(`link`),Bd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function jf(e,t,n){Cf.S(e,t,n);var r=Ef;if(r&&e){var i=Ct(r).hoistableStyles,a=Ff(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(If(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bf.get(a))&&Hf(e,n);var c=o=r.createElement(`link`);wt(c),Bd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mf(e,t){Cf.X(e,t);var n=Ef;if(n&&e){var r=Ct(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=p({src:e,async:!0},t),(t=bf.get(i))&&Uf(e,t),a=n.createElement(`script`),wt(a),Bd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t){Cf.M(e,t);var n=Ef;if(n&&e){var r=Ct(n).hoistableScripts,i=zf(e),a=r.get(i);a||(a=n.querySelector(Bf(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=bf.get(i))&&Uf(e,t),a=n.createElement(`script`),wt(a),Bd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pf(e,t,n,r){var i=(i=de.current)?Sf(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Ff(n.href),n=Ct(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Ff(n.href);var o=Ct(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(If(e)))&&!o._p&&(s.instance=o,s.state.loading=5),bf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bf.set(e,n),o||Rf(i,e,n,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=zf(n),n=Ct(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ff(e){return`href="`+Ut(e)+`"`}function If(e){return`link[rel="stylesheet"][`+e+`]`}function Lf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Rf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Bd(t,`link`,n),wt(t),e.head.appendChild(t))}function zf(e){return`[src="`+Ut(e)+`"]`}function Bf(e){return`script[async]`+e}function Y(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Bd(r,`style`,i),Vf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Ff(n.href);var o=e.querySelector(If(i));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Lf(n),(i=bf.get(i))&&Hf(r,i),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Bd(o,`link`,r),t.state.loading|=4,Vf(o,n.precedence,e),t.instance=o;case`script`:return o=zf(n.src),(i=e.querySelector(Bf(o)))?(t.instance=i,wt(i),i):(r=n,(i=bf.get(o))&&(r=p({},n),Uf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),wt(i),Bd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vf(r,n.precedence,e));return t.instance}function Vf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wf=null;function Gf(e,t,n){if(Wf===null){var r=new Map,i=Wf=new Map;i.set(n,r)}else i=Wf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Kf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Ff(r.href),a=t.querySelector(If(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Lf(r),(i=bf.get(i))&&Hf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Bd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Ud());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function ep(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(tp,e),$f=null,Qf.call(e))}function tp(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var np={$$typeof:x,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function rp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ip(e,t,n,r,i,a,o,s,c,l,u,d){return e=new rp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function ap(e){return e?(e=ui,e):ui}function op(e,t,n,r,i,a){i=ap(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(wu(n,e,t),Ya(n,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&wu(t,e,67108864),cp(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=Su();t=ot(t);var n=si(e,t);n!==null&&wu(n,e,t),cp(e,t)}}var dp=!0;function fp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,mp(e,t,n,r)}finally{A.p=a,k.T=i}}function pp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,mp(e,t,n,r)}finally{A.p=a,k.T=i}}function mp(e,t,n,r){if(dp){var i=hp(r);if(i===null)Ad(e,t,r,gp,n),Dp(e,r);else if(Op(i,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<Ep.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}dd(a),!(L&6)&&(uu=Ae()+500,W(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&wu(s,a,2),Ou(),cp(a,2)}if(a=hp(r),a===null&&Ad(e,t,r,gp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ad(e,t,r,null,n)}}function hp(e){return e=sn(e),_p(e)}var gp=null;function _p(e){if(gp=null,e=bt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gp=e,null}function vp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var yp=!1,bp=null,xp=null,Sp=null,Cp=new Map,wp=new Map,Tp=[],Ep=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Dp(e,t){switch(e){case`focusin`:case`focusout`:bp=null;break;case`dragenter`:case`dragleave`:xp=null;break;case`mouseover`:case`mouseout`:Sp=null;break;case`pointerover`:case`pointerout`:Cp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:wp.delete(t.pointerId)}}function X(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,n,r,i){switch(t){case`focusin`:return bp=X(bp,e,t,n,r,i),!0;case`dragenter`:return xp=X(xp,e,t,n,r,i),!0;case`mouseover`:return Sp=X(Sp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Cp.set(a,X(Cp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,wp.set(a,X(wp.get(a)||null,e,t,n,r,i)),!0}return!1}function kp(e){var t=bt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){up(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,lt(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ap(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&lp(t),e.blockedOn=n,!1;t.shift()}return!0}function jp(e,t,n){Ap(e)&&n.delete(t)}function Mp(){yp=!1,bp!==null&&Ap(bp)&&(bp=null),xp!==null&&Ap(xp)&&(xp=null),Sp!==null&&Ap(Sp)&&(Sp=null),Cp.forEach(jp),wp.forEach(jp)}function Np(e,n){e.blockedOn===n&&(e.blockedOn=null,yp||(yp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Mp)))}var Pp=null;function Fp(e){Pp!==e&&(Pp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Pp===e&&(Pp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(_p(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,js(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Ip(e){function t(t){return Np(t,e)}bp!==null&&Np(bp,e),xp!==null&&Np(xp,e),Sp!==null&&Np(Sp,e),Cp.forEach(t),wp.forEach(t);for(var n=0;n<Tp.length;n++){var r=Tp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Tp.length&&(n=Tp[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&Tp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Fp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(_p(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Fp(n)}}}function Lp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Rp(e){this._internalRoot=e}zp.prototype.render=Rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;op(n,Su(),e,t,null,null)},zp.prototype.unmount=Rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;op(e.current,2,null,e,null,null),Ou(),t[pt]=null}};function zp(e){this._internalRoot=e}zp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tp.length&&t!==0&&t<Tp[n].priority;n++);Tp.splice(n,0,e),n===0&&kp(e)}};var Bp=n.version;if(Bp!==`19.2.4`)throw Error(a(527,Bp,`19.2.4`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Vp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Z=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Z.isDisabled&&Z.supportsFiber)try{ze=Z.inject(Vp),Be=Z}catch{}}e.hydrateRoot=function(e,t,n){if(!o(e))throw Error(a(299));var r=!1,i=``,s=ec,c=tc,l=nc,u=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=ip(e,1,!0,t,n??null,r,i,u,s,c,l,Lp),t.context=ap(null),n=t.current,r=Su(),r=ot(r),i=qa(r),i.callback=null,Ja(n,i,r),n=r,t.current.lanes=n,tt(t,n),dd(t),e[pt]=t.current,Od(e),new zp(t)}})),zn=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Rn()})),Bn=Symbol.for(`TSR_DEFERRED_PROMISE`);function Vn(e,t){let n=e;return n[Bn]?n:(n[Bn]={status:`pending`},n.then(e=>{n[Bn].status=`success`,n[Bn].data=e}).catch(e=>{n[Bn].status=`error`,n[Bn].error={data:(t?.serializeError??vt)(e),__isServerError:!0}}),n)}function Hn(e,t){if(e)return typeof e==`string`?e:e[t]}function Un(e){return typeof e==`string`?{href:e,crossOrigin:void 0}:e}var Wn=Ie({key:`$TSS/serverfn`,test:e=>typeof e!=`function`||!(Ae in e)?!1:!!e[Ae],toSerializable:({serverFnMeta:e})=>({functionId:e.id}),fromSerializable:({functionId:e})=>Be(e)});function Gn(e){return e.replaceAll(`\0`,`/`).replaceAll(`�`,`/`)}function Kn(e,t){e.id=t.i,e.__beforeLoadContext=t.b,e.loaderData=t.l,e.status=t.s,e.ssr=t.ssr,e.updatedAt=t.u,e.error=t.e,t.g!==void 0&&(e.globalNotFound=t.g)}async function qn(e){window.$_TSR||u();let t=e.options.serializationAdapters;if(t?.length){let e=new Map;t.forEach(t=>{e.set(t.key,t.fromSerializable)}),window.$_TSR.t=e,window.$_TSR.buffer.forEach(e=>e())}window.$_TSR.initialized=!0,window.$_TSR.router||u();let n=window.$_TSR.router;n.matches.forEach(e=>{e.i=Gn(e.i)}),n.lastMatchId&&=Gn(n.lastMatchId);let{manifest:r,dehydratedData:i,lastMatchId:o}=n;e.ssr={manifest:r};let s=document.querySelector(`meta[property="csp-nonce"]`)?.content;e.options.ssr={nonce:s};let c=e.matchRoutes(e.stores.location.state),l=Promise.all(c.map(t=>e.loadRouteChunk(e.looseRoutesById[t.routeId])));function d(t){let n=e.looseRoutesById[t.routeId].options.pendingMinMs??e.options.defaultPendingMinMs;if(n){let r=ut();t._nonReactive.minPendingPromise=r,t._forcePending=!0,setTimeout(()=>{r.resolve(),e.updateMatch(t.id,e=>(e._nonReactive.minPendingPromise=void 0,{...e,_forcePending:void 0}))},n)}}function f(t){let n=e.looseRoutesById[t.routeId];n&&(n.options.ssr=t.ssr)}let p;c.forEach(e=>{let t=n.matches.find(t=>t.i===e.id);if(!t){e._nonReactive.dehydrated=!1,e.ssr=!1,f(e);return}Kn(e,t),f(e),e._nonReactive.dehydrated=e.ssr!==!1,(e.ssr===`data-only`||e.ssr===!1)&&p===void 0&&(p=e.index,d(e))}),e.stores.setActiveMatches(c),await e.options.hydrate?.(i);let m=e.stores.activeMatchesSnapshot.state,h=e.stores.location.state;await Promise.all(m.map(async t=>{try{let n=e.looseRoutesById[t.routeId],r=m[t.index-1]?.context??e.options.context;if(n.options.context){let i={deps:t.loaderDeps,params:t.params,context:r??{},location:h,navigate:t=>e.navigate({...t,_fromLocation:h}),buildLocation:e.buildLocation,cause:t.cause,abortController:t.abortController,preload:!1,matches:c,routeId:n.id};t.__routeContext=n.options.context(i)??void 0}t.context={...r,...t.__routeContext,...t.__beforeLoadContext};let i={ssr:e.options.ssr,matches:m,match:t,params:t.params,loaderData:t.loaderData},a=await n.options.head?.(i),o=await n.options.scripts?.(i);t.meta=a?.meta,t.links=a?.links,t.headScripts=a?.scripts,t.styles=a?.styles,t.scripts=o}catch(e){if(a(e))t.error={isNotFound:!0},console.error(`NotFound error during hydration for routeId: ${t.routeId}`,e);else throw t.error=e,console.error(`Error during hydration for route ${t.routeId}:`,e),e}}));let g=c[c.length-1].id!==o;if(!c.some(e=>e.ssr===!1)&&!g)return c.forEach(e=>{e._nonReactive.dehydrated=void 0}),l;let _=Promise.resolve().then(()=>e.load()).catch(e=>{console.error(`Error during router hydration:`,e)});if(g){let t=c[1];t||u(),d(t),t._displayPending=!0,t._nonReactive.displayPendingPromise=_,_.then(()=>{e.batch(()=>{e.stores.status.state===`pending`&&e.batch(()=>{e.stores.status.setState(()=>`idle`),e.stores.resolvedLocation.setState(()=>e.stores.location.state)}),e.updateMatch(t.id,e=>({...e,_displayPending:void 0,displayPendingPromise:void 0}))})})}return l}function Jn(e){return e}function Yn(e,t,n){if(typeof t!=`object`||!t)return;let r=e.getMutationCache(),i=e.getQueryCache(),a=n?.defaultOptions?.deserializeData??e.getDefaultOptions().hydrate?.deserializeData??Jn,o=t.mutations||[],s=t.queries||[];o.forEach(({state:t,...i})=>{r.build(e,{...e.getDefaultOptions().hydrate?.mutations,...n?.defaultOptions?.mutations,...i},t)}),s.forEach(({queryKey:t,state:r,queryHash:o,meta:s,promise:c,dehydratedAt:l})=>{let u=c?C(c):void 0,d=r.data===void 0?u?.data:r.data,f=d===void 0?d:a(d),p=i.get(o),m=p?.state.status===`pending`,h=p?.state.fetchStatus===`fetching`;if(p){let e=u&&l!==void 0&&l>p.state.dataUpdatedAt;if(r.dataUpdatedAt>p.state.dataUpdatedAt||e){let{fetchStatus:e,...t}=r;p.setState({...t,data:f})}}else p=i.build(e,{...e.getDefaultOptions().hydrate?.queries,...n?.defaultOptions?.queries,queryKey:t,queryHash:o,meta:s},{...r,data:f,fetchStatus:`idle`,status:f===void 0?r.status:`success`});c&&!m&&!h&&(l===void 0||l>p.state.dataUpdatedAt)&&p.fetch(void 0,{initialPromise:Promise.resolve(c).then(a)}).catch(Ke)})}function Xn(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{fe(e,()=>t.signal,()=>n=!0)},u=Ue(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject();if(r==null&&e.pages.length)return Promise.resolve(e);let a=await u((()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})()),{maxPages:o}=t.options,s=i?D:x;return{pages:s(e.pages,a,o),pageParams:s(e.pageParams,r,o)}};if(i&&a.length){let e=i===`backward`,t=e?Qn:Zn,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:Zn(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}function Zn(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Qn(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var $n=class extends De{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new oe({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=er(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=er(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=er(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}else return!0}runNext(e){let t=er(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){m.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>d(t,e))}findAll(e={}){return this.getAll().filter(t=>d(e,t))}notify(e){m.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return m.batch(()=>Promise.all(e.map(e=>e.continue().catch(Ke))))}};function er(e){return e.options.scope?.id}var tr=class extends De{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??pe(r,t),a=this.get(i);return a||(a=new It({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){m.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>Te(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>Te(e,t)):t}notify(e){m.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){m.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){m.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},nr=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new tr,this.#t=e.mutationCache||new $n,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=Ce.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=nt.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(_e(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=E(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return m.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;m.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return m.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=m.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(Ke).catch(Ke)}invalidateQueries(e,t={}){return m.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=m.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(Ke)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(Ke)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(_e(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Ke).catch(Ke)}fetchInfiniteQuery(e){return e.behavior=Xn(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Ke).catch(Ke)}ensureInfiniteQueryData(e){return e.behavior=Xn(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return nt.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(me(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{Le(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(me(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{Le(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=pe(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===xe&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},N=e(r(),1),P=n();function rr({promise:e}){if(Nn)return Nn(e);let t=Vn(e);if(t[Bn].status===`pending`)throw t;if(t[Bn].status===`error`)throw t[Bn].error;return t[Bn].data}function ir(e){let t=(0,P.jsx)(ar,{...e});return e.fallback?(0,P.jsx)(N.Suspense,{fallback:e.fallback,children:t}):t}function ar(e){let t=rr(e);return e.children(t)}var or=class{constructor(e){this.atom=Ne(e)}setState(e){this.atom.set(e)}get state(){return this.atom.get()}get(){return this.state}subscribe(e){return this.atom.subscribe(p(e))}},sr=class{constructor(e){this.atom=Ne(e)}get state(){return this.atom.get()}get(){return this.state}subscribe(e){return this.atom.subscribe(p(e))}};function cr(e){return typeof e==`function`?new sr(e):new or(e)}function lr(){let e=o(),t=N.useRef({router:e,mounted:!1}),[n,r]=N.useState(!1),i=l(e.stores.isLoading,e=>e),a=l(e.stores.hasPendingMatches,e=>e),s=wt(i),c=i||n||a,u=wt(c),d=i||a,f=wt(d);return e.startTransition=e=>{r(!0),N.startTransition(()=>{e(),r(!1)})},N.useEffect(()=>{let t=e.history.subscribe(e.load),n=e.buildLocation({to:e.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return st(e.latestLocation.publicHref)!==st(n.publicHref)&&e.commitLocation({...n,replace:!0}),()=>{t()}},[e,e.history]),Vt(()=>{typeof window<`u`&&e.ssr||t.current.router===e&&t.current.mounted||(t.current={router:e,mounted:!0},(async()=>{try{await e.load()}catch(e){console.error(e)}})())},[e]),Vt(()=>{s&&!i&&e.emit({type:`onLoad`,...ft(e.stores.location.state,e.stores.resolvedLocation.state)})},[s,e,i]),Vt(()=>{f&&!d&&e.emit({type:`onBeforeRouteMount`,...ft(e.stores.location.state,e.stores.resolvedLocation.state)})},[d,f,e]),Vt(()=>{if(u&&!c){let t=ft(e.stores.location.state,e.stores.resolvedLocation.state);e.emit({type:`onResolved`,...t}),A(()=>{e.stores.status.setState(()=>`idle`),e.stores.resolvedLocation.setState(()=>e.stores.location.state)}),t.hrefChanged&&pt(e)}},[c,u,e]),null}function ur(){let e=o(),t=e.routesById.__root__.options.pendingComponent??e.options.defaultPendingComponent,n=t?(0,P.jsx)(t,{}):null,r=(0,P.jsxs)(typeof document<`u`&&e.ssr?_t:N.Suspense,{fallback:n,children:[(0,P.jsx)(lr,{}),(0,P.jsx)(dr,{})]});return e.options.InnerWrap?(0,P.jsx)(e.options.InnerWrap,{children:r}):r}function dr(){let e=o(),t=l(e.stores.firstMatchId,e=>e),n=l(e.stores.loadedAt,e=>e),r=t?(0,P.jsx)(yt,{matchId:t}):null;return(0,P.jsx)(lt.Provider,{value:t,children:e.options.disableGlobalCatchBoundary?r:(0,P.jsx)(mt,{getResetKey:()=>n,errorComponent:dt,onCatch:void 0,children:r})})}function fr(e){let t=o(),n=N.useRef(void 0);return l(t.stores.activeMatchesSnapshot,r=>{let i=e?.select?e.select(r):r;if(e?.structuralSharing??t.options.defaultStructuralSharing){let e=it(n.current,i);return n.current=e,e}return i})}function pr(e){let t=N.useContext(lt);return fr({select:n=>(n=n.slice(n.findIndex(e=>e.id===t)+1),e?.select?e.select(n):n),structuralSharing:e?.structuralSharing})}var mr=e=>({createMutableStore:cr,createReadonlyStore:cr,batch:A}),hr=e=>new gr(e),gr=class extends gt{constructor(e){super(e,mr)}};typeof globalThis<`u`?(globalThis.createFileRoute=rn,globalThis.createLazyFileRoute=bn):typeof window<`u`&&(window.createFileRoute=rn,window.createLazyFileRoute=bn);function _r({router:e,children:t,...n}){Object.keys(n).length>0&&e.update({...e.options,...n,context:{...e.options.context,...n.context}});let r=(0,P.jsx)(c.Provider,{value:e,children:t});return e.options.Wrap?(0,P.jsx)(e.options.Wrap,{children:r}):r}function vr({router:e,...t}){return(0,P.jsx)(_r,{router:e,...t,children:(0,P.jsx)(ur,{})})}function yr({tag:e,attrs:t,children:n,nonce:r}){switch(e){case`title`:return(0,P.jsx)(`title`,{...t,suppressHydrationWarning:!0,children:n});case`meta`:return(0,P.jsx)(`meta`,{...t,suppressHydrationWarning:!0});case`link`:return(0,P.jsx)(`link`,{...t,nonce:r,suppressHydrationWarning:!0});case`style`:return(0,P.jsx)(`style`,{...t,dangerouslySetInnerHTML:{__html:n},nonce:r});case`script`:return(0,P.jsx)(br,{attrs:t,children:n});default:return null}}function br({attrs:e,children:t}){o();let n=ct(),r=typeof e?.type==`string`&&e.type!==``&&e.type!==`text/javascript`&&e.type!==`module`;if(N.useEffect(()=>{if(!r){if(e?.src){let t=(()=>{try{let t=document.baseURI||window.location.href;return new URL(e.src,t).href}catch{return e.src}})();if(Array.from(document.querySelectorAll(`script[src]`)).find(e=>e.src===t))return;let n=document.createElement(`script`);for(let[t,r]of Object.entries(e))t!==`suppressHydrationWarning`&&r!==void 0&&r!==!1&&n.setAttribute(t,typeof r==`boolean`?``:String(r));return document.head.appendChild(n),()=>{n.parentNode&&n.parentNode.removeChild(n)}}if(typeof t==`string`){let n=typeof e?.type==`string`?e.type:`text/javascript`,r=typeof e?.nonce==`string`?e.nonce:void 0;if(Array.from(document.querySelectorAll(`script:not([src])`)).find(e=>{if(!(e instanceof HTMLScriptElement))return!1;let i=e.getAttribute(`type`)??`text/javascript`,a=e.getAttribute(`nonce`)??void 0;return e.textContent===t&&i===n&&a===r}))return;let i=document.createElement(`script`);if(i.textContent=t,e)for(let[t,n]of Object.entries(e))t!==`suppressHydrationWarning`&&n!==void 0&&n!==!1&&i.setAttribute(t,typeof n==`boolean`?``:String(n));return document.head.appendChild(i),()=>{i.parentNode&&i.parentNode.removeChild(i)}}}},[e,t,r]),r&&typeof t==`string`)return(0,P.jsx)(`script`,{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}});if(!n){if(e?.src)return(0,P.jsx)(`script`,{...e,suppressHydrationWarning:!0});if(typeof t==`string`)return(0,P.jsx)(`script`,{...e,dangerouslySetInnerHTML:{__html:t},suppressHydrationWarning:!0})}return null}var xr=e=>{let t=o(),n=t.options.ssr?.nonce,r=l(t.stores.activeMatchesSnapshot,e=>e.map(e=>e.meta).filter(Boolean),rt),i=N.useMemo(()=>{let e=[],t={},i;for(let a=r.length-1;a>=0;a--){let o=r[a];for(let r=o.length-1;r>=0;r--){let a=o[r];if(a)if(a.title)i||={tag:`title`,children:a.title};else if(`script:ld+json`in a)try{let t=JSON.stringify(a[`script:ld+json`]);e.push({tag:`script`,attrs:{type:`application/ld+json`},children:at(t)})}catch{}else{let r=a.name??a.property;if(r){if(t[r])continue;t[r]=!0}e.push({tag:`meta`,attrs:{...a,nonce:n}})}}}return i&&e.push(i),n&&e.push({tag:`meta`,attrs:{property:`csp-nonce`,content:n}}),e.reverse(),e},[r,n]),a=l(t.stores.activeMatchesSnapshot,r=>{let i=r.map(e=>e.links).filter(Boolean).flat(1).map(e=>({tag:`link`,attrs:{...e,nonce:n}})),a=t.ssr?.manifest,o=r.map(e=>a?.routes[e.routeId]?.assets??[]).filter(Boolean).flat(1).filter(e=>e.tag===`link`).map(t=>({tag:`link`,attrs:{...t.attrs,crossOrigin:Hn(e,`stylesheet`)??t.attrs?.crossOrigin,suppressHydrationWarning:!0,nonce:n}}));return[...i,...o]},rt),s=l(t.stores.activeMatchesSnapshot,r=>{let i=[];return r.map(e=>t.looseRoutesById[e.routeId]).forEach(r=>t.ssr?.manifest?.routes[r.id]?.preloads?.filter(Boolean).forEach(t=>{let r=Un(t);i.push({tag:`link`,attrs:{rel:`modulepreload`,href:r.href,crossOrigin:Hn(e,`modulepreload`)??r.crossOrigin,nonce:n}})})),i},rt),c=l(t.stores.activeMatchesSnapshot,e=>e.map(e=>e.styles).flat(1).filter(Boolean).map(({children:e,...t})=>({tag:`style`,attrs:{...t,nonce:n},children:e})),rt),u=l(t.stores.activeMatchesSnapshot,e=>e.map(e=>e.headScripts).flat(1).filter(Boolean).map(({children:e,...t})=>({tag:`script`,attrs:{...t,nonce:n},children:e})),rt);return Sr([...i,...s,...a,...c,...u],e=>JSON.stringify(e))};function Sr(e,t){let n=new Set;return e.filter(e=>{let r=t(e);return n.has(r)?!1:(n.add(r),!0)})}function Cr(e){let t=xr(e.assetCrossOrigin),n=o().options.ssr?.nonce;return(0,P.jsx)(P.Fragment,{children:t.map(e=>(0,N.createElement)(yr,{...e,key:`tsr-meta-${JSON.stringify(e)}`,nonce:n}))})}var wr=()=>{let e=o(),t=e.options.ssr?.nonce,n=n=>{let r=[],i=e.ssr?.manifest;return i?(n.map(t=>e.looseRoutesById[t.routeId]).forEach(e=>i.routes[e.id]?.assets?.filter(e=>e.tag===`script`).forEach(e=>{r.push({tag:`script`,attrs:{...e.attrs,nonce:t},children:e.children})})),r):[]},r=e=>e.map(e=>e.scripts).flat(1).filter(Boolean).map(({children:e,...n})=>({tag:`script`,attrs:{...n,suppressHydrationWarning:!0,nonce:t},children:e})),i=l(e.stores.activeMatchesSnapshot,n,rt);return Tr(e,l(e.stores.activeMatchesSnapshot,r,rt),i)};function Tr(e,t,n){let r;e.serverSsr&&(r=e.serverSsr.takeBufferedScripts());let i=[...t,...n];return r&&i.unshift(r),(0,P.jsx)(P.Fragment,{children:i.map((e,t)=>(0,N.createElement)(yr,{...e,key:`tsr-scripts-${e.tag}-${t}`}))})}var Er=function(){return null},Dr=e(ke(),1);function Or(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}var kr=e=>{switch(e){case`success`:return Mr;case`info`:return Pr;case`warning`:return Nr;case`error`:return Fr;default:return null}},Ar=Array(12).fill(0),jr=({visible:e,className:t})=>N.createElement(`div`,{className:[`sonner-loading-wrapper`,t].filter(Boolean).join(` `),"data-visible":e},N.createElement(`div`,{className:`sonner-spinner`},Ar.map((e,t)=>N.createElement(`div`,{className:`sonner-loading-bar`,key:`spinner-bar-${t}`})))),Mr=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,clipRule:`evenodd`})),Nr=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,clipRule:`evenodd`})),Pr=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,clipRule:`evenodd`})),Fr=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,clipRule:`evenodd`})),Ir=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`},N.createElement(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),N.createElement(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})),Lr=()=>{let[e,t]=N.useState(document.hidden);return N.useEffect(()=>{let e=()=>{t(document.hidden)};return document.addEventListener(`visibilitychange`,e),()=>window.removeEventListener(`visibilitychange`,e)},[]),e},Rr=1,zr=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{let{message:t,...n}=e,r=typeof e?.id==`number`||e.id?.length>0?e.id:Rr++,i=this.toasts.find(e=>e.id===r),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),i?this.toasts=this.toasts.map(n=>n.id===r?(this.publish({...n,...e,id:r,title:t}),{...n,...e,id:r,dismissible:a,title:t}):n):this.addToast({title:t,...n,dismissible:a,id:r}),r},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(e=>{this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:`error`}),this.success=(e,t)=>this.create({...t,type:`success`,message:e}),this.info=(e,t)=>this.create({...t,type:`info`,message:e}),this.warning=(e,t)=>this.create({...t,type:`warning`,message:e}),this.loading=(e,t)=>this.create({...t,type:`loading`,message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:`loading`,message:t.loading,description:typeof t.description==`function`?void 0:t.description}));let r=Promise.resolve(e instanceof Function?e():e),i=n!==void 0,a,o=r.then(async e=>{if(a=[`resolve`,e],N.isValidElement(e))i=!1,this.create({id:n,type:`default`,message:e});else if(Vr(e)&&!e.ok){i=!1;let r=typeof t.error==`function`?await t.error(`HTTP error! status: ${e.status}`):t.error,a=typeof t.description==`function`?await t.description(`HTTP error! status: ${e.status}`):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(e instanceof Error){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(t.success!==void 0){i=!1;let r=typeof t.success==`function`?await t.success(e):t.success,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`success`,description:a,...o})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}}).finally(()=>{i&&(this.dismiss(n),n=void 0),t.finally==null||t.finally.call(t)}),s=()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t));return typeof n!=`string`&&typeof n!=`number`?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=t?.id||Rr++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Br=(e,t)=>{let n=t?.id||Rr++;return zr.addToast({title:e,...t,id:n}),n},Vr=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`,Hr=Object.assign(Br,{success:zr.success,info:zr.info,warning:zr.warning,error:zr.error,custom:zr.custom,message:zr.message,promise:zr.promise,dismiss:zr.dismiss,loading:zr.loading},{getHistory:()=>zr.toasts,getToasts:()=>zr.getActiveToasts()});Or(`[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`);function Ur(e){return e.label!==void 0}var Wr=3,Gr=`24px`,Kr=`16px`,qr=4e3,Jr=356,Yr=14,Xr=45,Zr=200;function Qr(...e){return e.filter(Boolean).join(` `)}function $r(e){let[t,n]=e.split(`-`),r=[];return t&&r.push(t),n&&r.push(n),r}var ei=e=>{let{invert:t,toast:n,unstyled:r,interacting:i,setHeights:a,visibleToasts:o,heights:s,index:c,toasts:l,expanded:u,removeToast:d,defaultRichColors:f,closeButton:p,style:m,cancelButtonStyle:h,actionButtonStyle:g,className:_=``,descriptionClassName:v=``,duration:y,position:b,gap:x,expandByDefault:S,classNames:C,icons:w,closeButtonAriaLabel:T=`Close toast`}=e,[E,ee]=N.useState(null),[D,O]=N.useState(null),[te,ne]=N.useState(!1),[re,ie]=N.useState(!1),[k,A]=N.useState(!1),[ae,oe]=N.useState(!1),[se,ce]=N.useState(!1),[le,ue]=N.useState(0),[j,M]=N.useState(0),de=N.useRef(n.duration||y||qr),fe=N.useRef(null),pe=N.useRef(null),me=c===0,he=c+1<=o,ge=n.type,_e=n.dismissible!==!1,ve=n.className||``,ye=n.descriptionClassName||``,be=N.useMemo(()=>s.findIndex(e=>e.toastId===n.id)||0,[s,n.id]),xe=N.useMemo(()=>n.closeButton??p,[n.closeButton,p]),Se=N.useMemo(()=>n.duration||y||qr,[n.duration,y]),Ce=N.useRef(0),we=N.useRef(0),Te=N.useRef(0),Ee=N.useRef(null),[De,Oe]=b.split(`-`),ke=N.useMemo(()=>s.reduce((e,t,n)=>n>=be?e:e+t.height,0),[s,be]),Ae=Lr(),je=n.invert||t,Me=ge===`loading`;we.current=N.useMemo(()=>be*x+ke,[be,ke]),N.useEffect(()=>{de.current=Se},[Se]),N.useEffect(()=>{ne(!0)},[]),N.useEffect(()=>{let e=pe.current;if(e){let t=e.getBoundingClientRect().height;return M(t),a(e=>[{toastId:n.id,height:t,position:n.position},...e]),()=>a(e=>e.filter(e=>e.toastId!==n.id))}},[a,n.id]),N.useLayoutEffect(()=>{if(!te)return;let e=pe.current,t=e.style.height;e.style.height=`auto`;let r=e.getBoundingClientRect().height;e.style.height=t,M(r),a(e=>e.find(e=>e.toastId===n.id)?e.map(e=>e.toastId===n.id?{...e,height:r}:e):[{toastId:n.id,height:r,position:n.position},...e])},[te,n.title,n.description,a,n.id,n.jsx,n.action,n.cancel]);let Ne=N.useCallback(()=>{ie(!0),ue(we.current),a(e=>e.filter(e=>e.toastId!==n.id)),setTimeout(()=>{d(n)},Zr)},[n,d,a,we]);N.useEffect(()=>{if(n.promise&&ge===`loading`||n.duration===1/0||n.type===`loading`)return;let e;return u||i||Ae?(()=>{if(Te.current<Ce.current){let e=new Date().getTime()-Ce.current;de.current-=e}Te.current=new Date().getTime()})():de.current!==1/0&&(Ce.current=new Date().getTime(),e=setTimeout(()=>{n.onAutoClose==null||n.onAutoClose.call(n,n),Ne()},de.current)),()=>clearTimeout(e)},[u,i,n,ge,Ae,Ne]),N.useEffect(()=>{n.delete&&(Ne(),n.onDismiss==null||n.onDismiss.call(n,n))},[Ne,n.delete]);function Pe(){return w?.loading?N.createElement(`div`,{className:Qr(C?.loader,n?.classNames?.loader,`sonner-loader`),"data-visible":ge===`loading`},w.loading):N.createElement(jr,{className:Qr(C?.loader,n?.classNames?.loader),visible:ge===`loading`})}let Fe=n.icon||w?.[ge]||kr(ge);return N.createElement(`li`,{tabIndex:0,ref:pe,className:Qr(_,ve,C?.toast,n?.classNames?.toast,C?.default,C?.[ge],n?.classNames?.[ge]),"data-sonner-toast":``,"data-rich-colors":n.richColors??f,"data-styled":!(n.jsx||n.unstyled||r),"data-mounted":te,"data-promise":!!n.promise,"data-swiped":se,"data-removed":re,"data-visible":he,"data-y-position":De,"data-x-position":Oe,"data-index":c,"data-front":me,"data-swiping":k,"data-dismissible":_e,"data-type":ge,"data-invert":je,"data-swipe-out":ae,"data-swipe-direction":D,"data-expanded":!!(u||S&&te),"data-testid":n.testId,style:{"--index":c,"--toasts-before":c,"--z-index":l.length-c,"--offset":`${re?le:we.current}px`,"--initial-height":S?`auto`:`${j}px`,...m,...n.style},onDragEnd:()=>{A(!1),ee(null),Ee.current=null},onPointerDown:e=>{e.button!==2&&(Me||!_e||(fe.current=new Date,ue(we.current),e.target.setPointerCapture(e.pointerId),e.target.tagName!==`BUTTON`&&(A(!0),Ee.current={x:e.clientX,y:e.clientY})))},onPointerUp:()=>{if(ae||!_e)return;Ee.current=null;let e=Number(pe.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`,``)||0),t=Number(pe.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`,``)||0),r=new Date().getTime()-fe.current?.getTime(),i=E===`x`?e:t,a=Math.abs(i)/r;if(Math.abs(i)>=Xr||a>.11){ue(we.current),n.onDismiss==null||n.onDismiss.call(n,n),O(E===`x`?e>0?`right`:`left`:t>0?`down`:`up`),Ne(),oe(!0);return}else{var o,s;(o=pe.current)==null||o.style.setProperty(`--swipe-amount-x`,`0px`),(s=pe.current)==null||s.style.setProperty(`--swipe-amount-y`,`0px`)}ce(!1),A(!1),ee(null)},onPointerMove:t=>{var n,r;if(!Ee.current||!_e||window.getSelection()?.toString().length>0)return;let i=t.clientY-Ee.current.y,a=t.clientX-Ee.current.x,o=e.swipeDirections??$r(b);!E&&(Math.abs(a)>1||Math.abs(i)>1)&&ee(Math.abs(a)>Math.abs(i)?`x`:`y`);let s={x:0,y:0},c=e=>1/(1.5+Math.abs(e)/20);if(E===`y`){if(o.includes(`top`)||o.includes(`bottom`))if(o.includes(`top`)&&i<0||o.includes(`bottom`)&&i>0)s.y=i;else{let e=i*c(i);s.y=Math.abs(e)<Math.abs(i)?e:i}}else if(E===`x`&&(o.includes(`left`)||o.includes(`right`)))if(o.includes(`left`)&&a<0||o.includes(`right`)&&a>0)s.x=a;else{let e=a*c(a);s.x=Math.abs(e)<Math.abs(a)?e:a}(Math.abs(s.x)>0||Math.abs(s.y)>0)&&ce(!0),(n=pe.current)==null||n.style.setProperty(`--swipe-amount-x`,`${s.x}px`),(r=pe.current)==null||r.style.setProperty(`--swipe-amount-y`,`${s.y}px`)}},xe&&!n.jsx&&ge!==`loading`?N.createElement(`button`,{"aria-label":T,"data-disabled":Me,"data-close-button":!0,onClick:Me||!_e?()=>{}:()=>{Ne(),n.onDismiss==null||n.onDismiss.call(n,n)},className:Qr(C?.closeButton,n?.classNames?.closeButton)},w?.close??Ir):null,(ge||n.icon||n.promise)&&n.icon!==null&&(w?.[ge]!==null||n.icon)?N.createElement(`div`,{"data-icon":``,className:Qr(C?.icon,n?.classNames?.icon)},n.promise||n.type===`loading`&&!n.icon?n.icon||Pe():null,n.type===`loading`?null:Fe):null,N.createElement(`div`,{"data-content":``,className:Qr(C?.content,n?.classNames?.content)},N.createElement(`div`,{"data-title":``,className:Qr(C?.title,n?.classNames?.title)},n.jsx?n.jsx:typeof n.title==`function`?n.title():n.title),n.description?N.createElement(`div`,{"data-description":``,className:Qr(v,ye,C?.description,n?.classNames?.description)},typeof n.description==`function`?n.description():n.description):null),N.isValidElement(n.cancel)?n.cancel:n.cancel&&Ur(n.cancel)?N.createElement(`button`,{"data-button":!0,"data-cancel":!0,style:n.cancelButtonStyle||h,onClick:e=>{Ur(n.cancel)&&_e&&(n.cancel.onClick==null||n.cancel.onClick.call(n.cancel,e),Ne())},className:Qr(C?.cancelButton,n?.classNames?.cancelButton)},n.cancel.label):null,N.isValidElement(n.action)?n.action:n.action&&Ur(n.action)?N.createElement(`button`,{"data-button":!0,"data-action":!0,style:n.actionButtonStyle||g,onClick:e=>{Ur(n.action)&&(n.action.onClick==null||n.action.onClick.call(n.action,e),!e.defaultPrevented&&Ne())},className:Qr(C?.actionButton,n?.classNames?.actionButton)},n.action.label):null)};function ti(){if(typeof window>`u`||typeof document>`u`)return`ltr`;let e=document.documentElement.getAttribute(`dir`);return e===`auto`||!e?window.getComputedStyle(document.documentElement).direction:e}function ni(e,t){let n={};return[e,t].forEach((e,t)=>{let r=t===1,i=r?`--mobile-offset`:`--offset`,a=r?Kr:Gr;function o(e){[`top`,`right`,`bottom`,`left`].forEach(t=>{n[`${i}-${t}`]=typeof e==`number`?`${e}px`:e})}typeof e==`number`||typeof e==`string`?o(e):typeof e==`object`?[`top`,`right`,`bottom`,`left`].forEach(t=>{e[t]===void 0?n[`${i}-${t}`]=a:n[`${i}-${t}`]=typeof e[t]==`number`?`${e[t]}px`:e[t]}):o(a)}),n}var ri=N.forwardRef(function(e,t){let{id:n,invert:r,position:i=`bottom-right`,hotkey:a=[`altKey`,`KeyT`],expand:o,closeButton:s,className:c,offset:l,mobileOffset:u,theme:d=`light`,richColors:f,duration:p,style:m,visibleToasts:h=Wr,toastOptions:g,dir:_=ti(),gap:v=Yr,icons:y,containerAriaLabel:b=`Notifications`}=e,[x,S]=N.useState([]),C=N.useMemo(()=>n?x.filter(e=>e.toasterId===n):x.filter(e=>!e.toasterId),[x,n]),w=N.useMemo(()=>Array.from(new Set([i].concat(C.filter(e=>e.position).map(e=>e.position)))),[C,i]),[T,E]=N.useState([]),[ee,D]=N.useState(!1),[O,te]=N.useState(!1),[ne,re]=N.useState(d===`system`?typeof window<`u`&&window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:d),ie=N.useRef(null),k=a.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),A=N.useRef(null),ae=N.useRef(!1),oe=N.useCallback(e=>{S(t=>(t.find(t=>t.id===e.id)?.delete||zr.dismiss(e.id),t.filter(({id:t})=>t!==e.id)))},[]);return N.useEffect(()=>zr.subscribe(e=>{if(e.dismiss){requestAnimationFrame(()=>{S(t=>t.map(t=>t.id===e.id?{...t,delete:!0}:t))});return}setTimeout(()=>{Dr.flushSync(()=>{S(t=>{let n=t.findIndex(t=>t.id===e.id);return n===-1?[e,...t]:[...t.slice(0,n),{...t[n],...e},...t.slice(n+1)]})})})}),[x]),N.useEffect(()=>{if(d!==`system`){re(d);return}if(d===`system`&&(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?re(`dark`):re(`light`)),typeof window>`u`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);try{e.addEventListener(`change`,({matches:e})=>{re(e?`dark`:`light`)})}catch{e.addListener(({matches:e})=>{try{re(e?`dark`:`light`)}catch(e){console.error(e)}})}},[d]),N.useEffect(()=>{x.length<=1&&D(!1)},[x]),N.useEffect(()=>{let e=e=>{if(a.every(t=>e[t]||e.code===t)){var t;D(!0),(t=ie.current)==null||t.focus()}e.code===`Escape`&&(document.activeElement===ie.current||ie.current?.contains(document.activeElement))&&D(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a]),N.useEffect(()=>{if(ie.current)return()=>{A.current&&(A.current.focus({preventScroll:!0}),A.current=null,ae.current=!1)}},[ie.current]),N.createElement(`section`,{ref:t,"aria-label":`${b} ${k}`,tabIndex:-1,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,suppressHydrationWarning:!0},w.map((t,n)=>{let[i,a]=t.split(`-`);return C.length?N.createElement(`ol`,{key:t,dir:_===`auto`?ti():_,tabIndex:-1,ref:ie,className:c,"data-sonner-toaster":!0,"data-sonner-theme":ne,"data-y-position":i,"data-x-position":a,style:{"--front-toast-height":`${T[0]?.height||0}px`,"--width":`${Jr}px`,"--gap":`${v}px`,...m,...ni(l,u)},onBlur:e=>{ae.current&&!e.currentTarget.contains(e.relatedTarget)&&(ae.current=!1,A.current&&=(A.current.focus({preventScroll:!0}),null))},onFocus:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||ae.current||(ae.current=!0,A.current=e.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{O||D(!1)},onDragEnd:()=>D(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||te(!0)},onPointerUp:()=>te(!1)},C.filter(e=>!e.position&&n===0||e.position===t).map((n,i)=>N.createElement(ei,{key:n.id,icons:y,index:i,toast:n,defaultRichColors:f,duration:g?.duration??p,className:g?.className,descriptionClassName:g?.descriptionClassName,invert:r,visibleToasts:h,closeButton:g?.closeButton??s,interacting:O,position:t,style:g?.style,unstyled:g?.unstyled,classNames:g?.classNames,cancelButtonStyle:g?.cancelButtonStyle,actionButtonStyle:g?.actionButtonStyle,closeButtonAriaLabel:g?.closeButtonAriaLabel,removeToast:oe,toasts:C.filter(e=>e.position==n.position),heights:T.filter(e=>e.position==n.position),setHeights:E,expandByDefault:o,gap:v,expanded:ee,swipeDirections:e.swipeDirections}))):null}))});function ii(e,t){let n=e;for(;(n=n.parentElement)&&!n.matches(t););return n}function ai(e,t,n){for(let n=e-1;n>=0;--n)if(!t[n].disabled)return n;if(n){for(let e=t.length-1;e>-1;--e)if(!t[e].disabled)return e}return e}function oi(e,t,n){for(let n=e+1;n<t.length;n+=1)if(!t[n].disabled)return n;if(n){for(let e=0;e<t.length;e+=1)if(!t[e].disabled)return e}return e}function si(e,t,n){return ii(e,n)===ii(t,n)}function ci({parentSelector:e,siblingSelector:t,onKeyDown:n,loop:r=!0,activateOnFocus:i=!1,dir:a=`rtl`,orientation:o}){return s=>{n?.(s);let c=Array.from(ii(s.currentTarget,e)?.querySelectorAll(t)||[]).filter(t=>si(s.currentTarget,t,e)),l=c.findIndex(e=>s.currentTarget===e),u=oi(l,c,r),d=ai(l,c,r),f=a===`rtl`?d:u,p=a===`rtl`?u:d;switch(s.key){case`ArrowRight`:o===`horizontal`&&(s.stopPropagation(),s.preventDefault(),c[f].focus(),i&&c[f].click());break;case`ArrowLeft`:o===`horizontal`&&(s.stopPropagation(),s.preventDefault(),c[p].focus(),i&&c[p].click());break;case`ArrowUp`:o===`vertical`&&(s.stopPropagation(),s.preventDefault(),c[d].focus(),i&&c[d].click());break;case`ArrowDown`:o===`vertical`&&(s.stopPropagation(),s.preventDefault(),c[u].focus(),i&&c[u].click());break;case`Home`:s.stopPropagation(),s.preventDefault(),!c[0].disabled&&c[0].focus();break;case`End`:{s.stopPropagation(),s.preventDefault();let e=c.length-1;!c[e].disabled&&c[e].focus();break}}}}function li(e,t){return n=>{e?.(n),t?.(n)}}function ui(e,t){return e in t?v(t[e]):v(e)}function di(e,t){let n=e.map(e=>({value:e,px:ui(e,t)}));return n.sort((e,t)=>e.px-t.px),n}function fi(e){return typeof e==`object`&&e?`base`in e?e.base:void 0:e}function pi(e,t,n){return n?Array.from(ii(n,t)?.querySelectorAll(e)||[]).findIndex(e=>e===n):null}var mi={" ":`space`,ArrowLeft:`arrowleft`,ArrowRight:`arrowright`,ArrowUp:`arrowup`,ArrowDown:`arrowdown`,Escape:`escape`,Esc:`escape`,esc:`escape`,Enter:`enter`,Tab:`tab`,Backspace:`backspace`,Delete:`delete`,Insert:`insert`,Home:`home`,End:`end`,PageUp:`pageup`,PageDown:`pagedown`,"+":`plus`,"-":`minus`,"*":`asterisk`,"/":`slash`};function hi(e){let t=e.replace(`Key`,``).toLowerCase();return mi[e]||t}function gi(e){let t=e.toLowerCase().split(`+`).map(e=>e.trim()),n={alt:t.includes(`alt`),ctrl:t.includes(`ctrl`),meta:t.includes(`meta`),mod:t.includes(`mod`),shift:t.includes(`shift`),plus:t.includes(`[plus]`)},r=[`alt`,`ctrl`,`meta`,`shift`,`mod`],i=t.find(e=>!r.includes(e));return{...n,key:i===`[plus]`?`+`:i}}function _i(e,t,n){let{alt:r,ctrl:i,meta:a,mod:o,shift:s,key:c}=e,{altKey:l,ctrlKey:u,metaKey:d,shiftKey:f,key:p,code:m}=t;if(r!==l)return!1;if(o){if(!u&&!d)return!1}else if(i!==u||a!==d)return!1;return s===f?!!(c&&(n?hi(m)===hi(c):hi(p??m)===hi(c))):!1}function vi(e,t){return n=>_i(gi(e),n,t)}function yi(e,t,n=!1){return e.target instanceof HTMLElement?(n||!e.target.isContentEditable)&&!t.includes(e.target.tagName):!0}function bi(e,t=[`INPUT`,`TEXTAREA`,`SELECT`],n=!1){(0,N.useEffect)(()=>{let r=r=>{e.forEach(([e,i,a={preventDefault:!0,usePhysicalKeys:!1}])=>{vi(e,a.usePhysicalKeys)(r)&&yi(r,t,n)&&(a.preventDefault&&r.preventDefault(),i(r))})};return document.documentElement.addEventListener(`keydown`,r),()=>document.documentElement.removeEventListener(`keydown`,r)},[e])}function xi(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}function Si(e){function t(t){let n=Object.keys(t).reduce((n,r)=>(n[`${e}:${r}`]=e=>t[r](e.detail),n),{});Ve(()=>(Object.keys(n).forEach(e=>{window.removeEventListener(e,n[e]),window.addEventListener(e,n[e])}),()=>Object.keys(n).forEach(e=>{window.removeEventListener(e,n[e])})),[n])}function n(t){return(...n)=>xi(`${e}:${String(t)}`,n[0])}return[t,n]}function Ci(e,t){return typeof e==`boolean`?e:t.autoContrast}var wi=({defaultColorScheme:e,localStorageKey:t,forceColorScheme:n})=>n?`document.documentElement.setAttribute("data-mantine-color-scheme", '${n}');`:`try {
  var _colorScheme = window.localStorage.getItem("${t}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${e}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;function Ti({defaultColorScheme:e=`light`,localStorageKey:t=`mantine-color-scheme-value`,forceColorScheme:n,...r}){let i=[`light`,`dark`,`auto`].includes(e)?e:`light`;return(0,P.jsx)(`script`,{...r,"data-mantine-script":!0,dangerouslySetInnerHTML:{__html:wi({defaultColorScheme:i,localStorageKey:t,forceColorScheme:n})}})}function Ei(e){return e}var Di={suppressHydrationWarning:!0,"data-mantine-color-scheme":`light`};function Oi({open:e,close:t,openDelay:n,closeDelay:r}){let i=(0,N.useRef)(-1),a=(0,N.useRef)(-1),o=()=>{window.clearTimeout(i.current),window.clearTimeout(a.current)};return(0,N.useEffect)(()=>o,[]),{openDropdown:()=>{o(),n===0||n===void 0?e():i.current=window.setTimeout(e,n)},closeDropdown:()=>{o(),r===0||r===void 0?t():a.current=window.setTimeout(t,r)}}}function ki({style:e,size:t=16,...n}){return(0,P.jsx)(`svg`,{viewBox:`0 0 15 15`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{...e,width:j(t),height:j(t),display:`block`},...n,children:(0,P.jsx)(`path`,{d:`M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z`,fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`})})}ki.displayName=`@mantine/core/AccordionChevron`;var Ai={root:`m_849cf0da`},ji={underline:`hover`},Mi=ae((e,t)=>{let{underline:n,className:r,unstyled:i,mod:a,...o}=M(`Anchor`,ji,e);return(0,P.jsx)(Tt,{component:`a`,ref:t,className:Ge({[Ai.root]:!i},r),...o,mod:[{underline:n},a],__staticSelector:`Anchor`,unstyled:i})});Mi.classes=Ai,Mi.displayName=`@mantine/core/Anchor`;var[Ni,Pi]=Cn(`AppShell was not found in tree`),Fi={root:`m_89ab340`,navbar:`m_45252eee`,aside:`m_9cdde9a`,header:`m_3b16f56b`,main:`m_8983817`,footer:`m_3840c879`,section:`m_6dcfc7c7`},Ii=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,unstyled:o,vars:s,withBorder:c,zIndex:l,mod:u,...d}=M(`AppShellAside`,null,e),f=Pi();return f.disabled?null:(0,P.jsx)(O,{component:`aside`,ref:t,mod:[{"with-border":c??f.withBorder},u],...f.getStyles(`aside`,{className:Ge({[pn.classNames.zeroRight]:f.offsetScrollbars},r),classNames:n,styles:a,style:i}),...d,__vars:{"--app-shell-aside-z-index":`calc(${l??f.zIndex} + 1)`}})});Ii.classes=Fi,Ii.displayName=`@mantine/core/AppShellAside`;var Li=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,unstyled:o,vars:s,withBorder:c,zIndex:l,mod:u,...d}=M(`AppShellFooter`,null,e),f=Pi();return f.disabled?null:(0,P.jsx)(O,{component:`footer`,ref:t,mod:[{"with-border":c??f.withBorder},u],...f.getStyles(`footer`,{className:Ge({[pn.classNames.zeroRight]:f.offsetScrollbars},r),classNames:n,styles:a,style:i}),...d,__vars:{"--app-shell-footer-z-index":(l??f.zIndex)?.toString()}})});Li.classes=Fi,Li.displayName=`@mantine/core/AppShellFooter`;var Ri=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,unstyled:o,vars:s,withBorder:c,zIndex:l,mod:u,...d}=M(`AppShellHeader`,null,e),f=Pi();return f.disabled?null:(0,P.jsx)(O,{component:`header`,ref:t,mod:[{"with-border":c??f.withBorder},u],...f.getStyles(`header`,{className:Ge({[pn.classNames.zeroRight]:f.offsetScrollbars},r),classNames:n,styles:a,style:i}),...d,__vars:{"--app-shell-header-z-index":(l??f.zIndex)?.toString()}})});Ri.classes=Fi,Ri.displayName=`@mantine/core/AppShellHeader`;var F=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,...s}=M(`AppShellMain`,null,e);return(0,P.jsx)(O,{component:`main`,ref:t,...Pi().getStyles(`main`,{className:r,style:i,classNames:n,styles:a}),...s})});F.classes=Fi,F.displayName=`@mantine/core/AppShellMain`;function zi(e){return typeof e==`object`?e.base:e}function Bi(e){let t=typeof e==`object`&&!!e&&e.base!==void 0&&Object.keys(e).length===1;return typeof e==`number`||typeof e==`string`||t}function Vi(e){return!(typeof e!=`object`||!e||Object.keys(e).length===1&&`base`in e)}function Hi({baseStyles:e,minMediaStyles:t,maxMediaStyles:n,aside:r,theme:i,mode:a}){let o=r?.width,s=`translateX(var(--app-shell-aside-width))`,c=`translateX(calc(var(--app-shell-aside-width) * -1))`;if(r?.breakpoint&&!r?.collapsed?.mobile&&(n[r?.breakpoint]=n[r?.breakpoint]||{},a===`fixed`?(n[r?.breakpoint][`--app-shell-aside-width`]=`100%`,n[r?.breakpoint][`--app-shell-aside-offset`]=`0px`):(n[r?.breakpoint][`--app-shell-aside-width`]=`0px`,n[r?.breakpoint][`--app-shell-aside-offset`]=`0px`)),Bi(o)){let t=j(zi(o));e[`--app-shell-aside-width`]=t,e[`--app-shell-aside-offset`]=t}if(Vi(o)&&(o.base!==void 0&&(e[`--app-shell-aside-width`]=j(o.base),e[`--app-shell-aside-offset`]=j(o.base)),_(o).forEach(e=>{e!==`base`&&(t[e]=t[e]||{},t[e][`--app-shell-aside-width`]=j(o[e]),t[e][`--app-shell-aside-offset`]=j(o[e]))})),r?.breakpoint&&a===`static`&&(t[r.breakpoint]=t[r.breakpoint]||{},t[r.breakpoint][`--app-shell-aside-position`]=`sticky`,t[r.breakpoint][`--app-shell-aside-grid-row`]=`2`,t[r.breakpoint][`--app-shell-aside-grid-column`]=`3`,t[r.breakpoint][`--app-shell-main-column-end`]=`3`),r?.collapsed?.desktop){let e=r.breakpoint;t[e]=t[e]||{},t[e][`--app-shell-aside-transform`]=s,t[e][`--app-shell-aside-transform-rtl`]=c,a===`fixed`?t[e][`--app-shell-aside-offset`]=`0px !important`:(t[e][`--app-shell-aside-width`]=`0px`,t[e][`--app-shell-aside-display`]=`none`,t[e][`--app-shell-main-column-end`]=`-1`),t[e][`--app-shell-aside-scroll-locked-visibility`]=`hidden`}if(r?.collapsed?.mobile){let e=ui(r.breakpoint,i.breakpoints)-.1;n[e]=n[e]||{},a===`fixed`?(n[e][`--app-shell-aside-width`]=`100%`,n[e][`--app-shell-aside-offset`]=`0px`):n[e][`--app-shell-aside-width`]=`0px`,n[e][`--app-shell-aside-transform`]=s,n[e][`--app-shell-aside-transform-rtl`]=c,n[e][`--app-shell-aside-scroll-locked-visibility`]=`hidden`}}function Ui({baseStyles:e,minMediaStyles:t,footer:n,mode:r}){let i=n?.height,a=r===`static`?!0:n?.offset??!0;if(r===`static`&&n&&(e[`--app-shell-footer-position`]=`sticky`,e[`--app-shell-footer-grid-column`]=`1 / -1`,e[`--app-shell-footer-grid-row`]=`3`),Bi(i)){let t=j(zi(i));e[`--app-shell-footer-height`]=t,a&&(e[`--app-shell-footer-offset`]=t)}Vi(i)&&(i.base!==void 0&&(e[`--app-shell-footer-height`]=j(i.base),a&&(e[`--app-shell-footer-offset`]=j(i.base))),_(i).forEach(e=>{e!==`base`&&(t[e]=t[e]||{},t[e][`--app-shell-footer-height`]=j(i[e]),a&&(t[e][`--app-shell-footer-offset`]=j(i[e])))})),n?.collapsed&&(e[`--app-shell-footer-transform`]=`translateY(var(--app-shell-footer-height))`,r===`fixed`&&(e[`--app-shell-footer-offset`]=`0px !important`))}function Wi({baseStyles:e,minMediaStyles:t,header:n,mode:r}){let i=n?.height,a=r===`static`?!0:n?.offset??!0;if(r===`static`&&n&&(e[`--app-shell-header-position`]=`sticky`,e[`--app-shell-header-grid-column`]=`1 / -1`,e[`--app-shell-header-grid-row`]=`1`),Bi(i)){let t=j(zi(i));e[`--app-shell-header-height`]=t,a&&(e[`--app-shell-header-offset`]=t)}Vi(i)&&(i.base!==void 0&&(e[`--app-shell-header-height`]=j(i.base),a&&(e[`--app-shell-header-offset`]=j(i.base))),_(i).forEach(e=>{e!==`base`&&(t[e]=t[e]||{},t[e][`--app-shell-header-height`]=j(i[e]),a&&(t[e][`--app-shell-header-offset`]=j(i[e])))})),n?.collapsed&&(e[`--app-shell-header-transform`]=`translateY(calc(var(--app-shell-header-height) * -1))`,r===`fixed`&&(e[`--app-shell-header-offset`]=`0px !important`))}function Gi({baseStyles:e,minMediaStyles:t,maxMediaStyles:n,navbar:r,theme:i,mode:a}){let o=r?.width,s=`translateX(calc(var(--app-shell-navbar-width) * -1))`,c=`translateX(var(--app-shell-navbar-width))`;if(r?.breakpoint&&!r?.collapsed?.mobile&&(n[r?.breakpoint]=n[r?.breakpoint]||{},n[r?.breakpoint][`--app-shell-navbar-offset`]=`0px`,n[r?.breakpoint][`--app-shell-navbar-width`]=`100%`,a===`static`&&(n[r?.breakpoint][`--app-shell-navbar-grid-width`]=`0px`)),Bi(o)){let t=j(zi(o));e[`--app-shell-navbar-width`]=t,e[`--app-shell-navbar-offset`]=t,a===`static`&&(e[`--app-shell-navbar-grid-width`]=t)}if(Vi(o)&&(o.base!==void 0&&(e[`--app-shell-navbar-width`]=j(o.base),e[`--app-shell-navbar-offset`]=j(o.base),a===`static`&&(e[`--app-shell-navbar-grid-width`]=j(o.base))),_(o).forEach(e=>{e!==`base`&&(t[e]=t[e]||{},t[e][`--app-shell-navbar-width`]=j(o[e]),t[e][`--app-shell-navbar-offset`]=j(o[e]),a===`static`&&(t[e][`--app-shell-navbar-grid-width`]=j(o[e])))})),r?.breakpoint&&a===`static`&&(t[r.breakpoint]=t[r.breakpoint]||{},t[r.breakpoint][`--app-shell-navbar-position`]=`sticky`,t[r.breakpoint][`--app-shell-navbar-grid-row`]=`2`,t[r.breakpoint][`--app-shell-navbar-grid-column`]=`1`,t[r.breakpoint][`--app-shell-main-column-start`]=`2`),r?.collapsed?.desktop){let e=r.breakpoint;t[e]=t[e]||{},t[e][`--app-shell-navbar-transform`]=s,t[e][`--app-shell-navbar-transform-rtl`]=c,a===`fixed`?t[e][`--app-shell-navbar-offset`]=`0px !important`:(t[e][`--app-shell-navbar-width`]=`0px`,t[e][`--app-shell-navbar-display`]=`none`,t[e][`--app-shell-main-column-start`]=`1`)}if(r?.collapsed?.mobile){let e=ui(r.breakpoint,i.breakpoints)-.1;n[e]=n[e]||{},n[e][`--app-shell-navbar-width`]=`100%`,n[e][`--app-shell-navbar-offset`]=`0px`,a===`static`&&(n[e][`--app-shell-navbar-grid-width`]=`0px`),n[e][`--app-shell-navbar-transform`]=s,n[e][`--app-shell-navbar-transform-rtl`]=c}}function Ki(e){return Number(e)===0?`0px`:$e(e)}function qi({padding:e,baseStyles:t,minMediaStyles:n}){Bi(e)&&(t[`--app-shell-padding`]=Ki(zi(e))),Vi(e)&&(e.base&&(t[`--app-shell-padding`]=Ki(e.base)),_(e).forEach(t=>{t!==`base`&&(n[t]=n[t]||{},n[t][`--app-shell-padding`]=Ki(e[t]))}))}function Ji({navbar:e,header:t,footer:n,aside:r,padding:i,theme:a,mode:o}){let s={},c={},l={};o===`static`&&(l[`--app-shell-main-grid-column`]=`1 / -1`,l[`--app-shell-main-grid-row`]=`2`),Gi({baseStyles:l,minMediaStyles:s,maxMediaStyles:c,navbar:e,theme:a,mode:o}),Hi({baseStyles:l,minMediaStyles:s,maxMediaStyles:c,aside:r,theme:a,mode:o}),Wi({baseStyles:l,minMediaStyles:s,header:t,mode:o}),Ui({baseStyles:l,minMediaStyles:s,footer:n,mode:o}),qi({baseStyles:l,minMediaStyles:s,padding:i});let u=di(_(s),a.breakpoints).map(e=>({query:`(min-width: ${Ze(e.px)})`,styles:s[e.value]})),d=di(_(c),a.breakpoints).map(e=>({query:`(max-width: ${Ze(e.px)})`,styles:c[e.value]}));return{baseStyles:l,media:[...u,...d]}}function Yi({navbar:e,header:t,aside:n,footer:r,padding:i,mode:a,selector:o}){let s=T(),c=Re(),{media:l,baseStyles:u}=Ji({navbar:e,header:t,footer:r,aside:n,padding:i,theme:s,mode:a});return(0,P.jsx)(S,{media:l,styles:u,selector:o||c.cssVariablesSelector})}var Xi=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,unstyled:o,vars:s,withBorder:c,zIndex:l,mod:u,...d}=M(`AppShellNavbar`,null,e),f=Pi();return f.disabled?null:(0,P.jsx)(O,{component:`nav`,ref:t,mod:[{"with-border":c??f.withBorder},u],...f.getStyles(`navbar`,{className:r,classNames:n,styles:a,style:i}),...d,__vars:{"--app-shell-navbar-z-index":`calc(${l??f.zIndex} + 1)`}})});Xi.classes=Fi,Xi.displayName=`@mantine/core/AppShellNavbar`;var Zi=ae((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,grow:s,mod:c,...l}=M(`AppShellSection`,null,e),u=Pi();return(0,P.jsx)(O,{ref:t,mod:[{grow:s},c],...u.getStyles(`section`,{className:r,style:i,classNames:n,styles:a}),...l})});Zi.classes=Fi,Zi.displayName=`@mantine/core/AppShellSection`;function Qi({transitionDuration:e,disabled:t}){let[n,r]=(0,N.useState)(!0),i=(0,N.useRef)(-1),a=(0,N.useRef)(-1);return _n(`resize`,()=>{r(!0),clearTimeout(i.current),i.current=window.setTimeout(()=>(0,N.startTransition)(()=>{r(!1)}),200)}),Ve(()=>{r(!0),clearTimeout(a.current),a.current=window.setTimeout(()=>(0,N.startTransition)(()=>{r(!1)}),e||0)},[t,e]),n}var $i={withBorder:!0,padding:0,transitionDuration:200,transitionTimingFunction:`ease`,zIndex:yn(`app`),mode:`fixed`},ea=Se((e,{transitionDuration:t,transitionTimingFunction:n})=>({root:{"--app-shell-transition-duration":`${t}ms`,"--app-shell-transition-timing-function":n}})),ta=y((e,t)=>{let n=M(`AppShell`,$i,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,navbar:l,withBorder:u,padding:d,transitionDuration:f,transitionTimingFunction:p,header:m,zIndex:h,layout:g,disabled:_,aside:v,footer:y,offsetScrollbars:b=!0,mode:x,mod:S,attributes:C,id:w,...T}=n,E=de({name:`AppShell`,classes:Fi,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:C,vars:c,varsResolver:ea}),ee=Qi({disabled:_,transitionDuration:f}),D=we(w);return(0,P.jsxs)(Ni,{value:{getStyles:E,withBorder:u,zIndex:h,disabled:_,offsetScrollbars:b,mode:x},children:[(0,P.jsx)(Yi,{navbar:l,header:m,aside:v,footer:y,padding:d,mode:x,selector:x===`static`?`#${D}`:void 0}),(0,P.jsx)(O,{ref:t,...E(`root`),mod:[{resizing:ee,layout:g,disabled:_,mode:x},S],id:D,...T})]})});ta.classes=Fi,ta.displayName=`@mantine/core/AppShell`,ta.Navbar=Xi,ta.Header=Ri,ta.Main=F,ta.Aside=Ii,ta.Footer=Li,ta.Section=Zi;var na={root:`m_fea6bf1a`,burger:`m_d4fb9cad`},ra=Se((e,{color:t,size:n,lineSize:r,transitionDuration:i,transitionTimingFunction:a})=>({root:{"--burger-color":t?he(t,e):void 0,"--burger-size":be(n,`burger-size`),"--burger-line-size":r?j(r):void 0,"--burger-transition-duration":i===void 0?void 0:`${i}ms`,"--burger-transition-timing-function":a}})),ia=y((e,t)=>{let n=M(`Burger`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,opened:l,children:u,transitionDuration:d,transitionTimingFunction:f,lineSize:p,attributes:m,...h}=n,g=de({name:`Burger`,classes:na,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:m,vars:c,varsResolver:ra});return(0,P.jsxs)(te,{...g(`root`),ref:t,...h,children:[(0,P.jsx)(O,{mod:[`reduce-motion`,{opened:l}],...g(`burger`)}),u]})});ia.classes=na,ia.displayName=`@mantine/core/Burger`;var aa={root:`m_7485cace`},oa=Se((e,{size:t,fluid:n})=>({root:{"--container-size":n?void 0:be(t,`container-size`)}})),sa=y((e,t)=>{let n=M(`Container`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,fluid:l,mod:u,attributes:d,strategy:f,...p}=n,m=de({name:`Container`,classes:aa,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:d,vars:c,varsResolver:oa});return(0,P.jsx)(O,{ref:t,mod:[{fluid:l,strategy:f||`block`},u],...m(`root`),...p})});sa.classes=aa,sa.displayName=`@mantine/core/Container`;var[ca,la]=Cn(`HoverCard component was not found in the tree`),ua=(0,N.createContext)(!1),da=ua.Provider,fa=()=>(0,N.useContext)(ua);function pa(e){let{children:t,onMouseEnter:n,onMouseLeave:r,...i}=M(`HoverCardDropdown`,null,e),a=la();if(fa()&&a.getFloatingProps&&a.floating){let e=a.getFloatingProps();return(0,P.jsx)(un.Dropdown,{ref:a.floating,...e,onMouseEnter:li(n,e.onMouseEnter),onMouseLeave:li(r,e.onMouseLeave),...i,children:t})}let o=li(n,a.openDropdown),s=li(r,a.closeDropdown);return(0,P.jsx)(un.Dropdown,{onMouseEnter:o,onMouseLeave:s,...i,children:t})}pa.displayName=`@mantine/core/HoverCardDropdown`;var ma={openDelay:0,closeDelay:0};function ha(e){let{openDelay:t,closeDelay:n,children:r}=M(`HoverCardGroup`,ma,e);return(0,P.jsx)(da,{value:!0,children:(0,P.jsx)(Et,{delay:{open:t,close:n},children:r})})}ha.displayName=`@mantine/core/HoverCardGroup`,ha.extend=e=>e;var ga={refProp:`ref`},_a=(0,N.forwardRef)((e,t)=>{let{children:n,refProp:r,eventPropsWrapperName:i,...a}=M(`HoverCardTarget`,ga,e),o=Rt(n);if(!o)throw Error(`HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported`);let s=la();if(fa()&&s.getReferenceProps&&s.reference){let e=s.getReferenceProps();return(0,P.jsx)(un.Target,{refProp:r,ref:t,...a,children:(0,N.cloneElement)(o,i?{[i]:{...e,ref:s.reference}}:{...e,ref:s.reference})})}let c={onMouseEnter:li(o.props.onMouseEnter,s.openDropdown),onMouseLeave:li(o.props.onMouseLeave,s.closeDropdown)};return(0,P.jsx)(un.Target,{refProp:r,ref:t,...a,children:(0,N.cloneElement)(o,i?{[i]:c}:c)})});_a.displayName=`@mantine/core/HoverCardTarget`;function va(e){let[t,n]=(0,N.useState)(e.defaultOpened),r=typeof e.opened==`boolean`?e.opened:t,i=fa(),a=we(),o=(0,N.useRef)(-1),s=(0,N.useRef)(-1),c=(0,N.useCallback)(()=>{window.clearTimeout(o.current),window.clearTimeout(s.current)},[]),l=(0,N.useCallback)(t=>{n(t),t?(p(a),e.onOpen?.()):e.onClose?.()},[a,e.onOpen,e.onClose]),{context:u,refs:d}=zt({open:r,onOpenChange:l}),{delay:f,setCurrentId:p}=kt(u,{id:a}),{getReferenceProps:m,getFloatingProps:h}=Gt([St(u,{enabled:!0,delay:i?f:{open:e.openDelay,close:e.closeDelay}}),Ot(u,{role:`dialog`}),Mt(u,{enabled:i})]),g=(0,N.useCallback)(()=>{i||(c(),e.openDelay===0||e.openDelay===void 0?l(!0):o.current=window.setTimeout(()=>l(!0),e.openDelay))},[i,c,e.openDelay,l]),_=(0,N.useCallback)(()=>{i||(c(),e.closeDelay===0||e.closeDelay===void 0?l(!1):s.current=window.setTimeout(()=>l(!1),e.closeDelay))},[i,c,e.closeDelay,l]);return(0,N.useEffect)(()=>()=>c(),[c]),{opened:r,reference:d.setReference,floating:d.setFloating,getReferenceProps:m,getFloatingProps:h,openDropdown:g,closeDropdown:_}}var ya={openDelay:0,closeDelay:150,initiallyOpened:!1};function ba(e){let{children:t,onOpen:n,onClose:r,openDelay:i,closeDelay:a,initiallyOpened:o,...s}=M(`HoverCard`,ya,e),c=va({openDelay:i,closeDelay:a,defaultOpened:o,onOpen:n,onClose:r});return(0,P.jsx)(ca,{value:{openDropdown:c.openDropdown,closeDropdown:c.closeDropdown,getReferenceProps:c.getReferenceProps,getFloatingProps:c.getFloatingProps,reference:c.reference,floating:c.floating},children:(0,P.jsx)(un,{...s,opened:c.opened,__staticSelector:`HoverCard`,children:t})})}ba.displayName=`@mantine/core/HoverCard`,ba.Target=_a,ba.Dropdown=pa,ba.Group=ha,ba.extend=e=>e;var xa={root:`m_9e117634`},Sa=Se((e,{radius:t,fit:n})=>({root:{"--image-radius":t===void 0?void 0:Ye(t),"--image-object-fit":n}})),Ca=ae((e,t)=>{let n=M(`Image`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,onError:l,src:u,radius:d,fit:f,fallbackSrc:p,mod:m,attributes:h,...g}=n,[_,v]=(0,N.useState)(!u);(0,N.useEffect)(()=>v(!u),[u]);let y=de({name:`Image`,classes:xa,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:h,vars:c,varsResolver:Sa});return _&&p?(0,P.jsx)(O,{component:`img`,ref:t,src:p,...y(`root`),onError:l,mod:[`fallback`,m],...g}):(0,P.jsx)(O,{component:`img`,ref:t,...y(`root`),src:u,onError:e=>{l?.(e),v(!0)},mod:m,...g})});Ca.classes=xa,Ca.displayName=`@mantine/core/Image`;var wa={root:`m_dc6f14e2`},Ta=Se((e,{size:t})=>({root:{"--kbd-fz":be(t,`kbd-fz`)}})),Ea=y((e,t)=>{let n=M(`Kbd`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,attributes:l,...u}=n;return(0,P.jsx)(O,{component:`kbd`,ref:t,...de({name:`Kbd`,classes:wa,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:l,vars:c,varsResolver:Ta})(`root`),...u})});Ea.classes=wa,Ea.displayName=`@mantine/core/Kbd`;var[Da,Oa]=Cn(`Menu component was not found in the tree`),ka={dropdown:`m_dc9b7c9f`,label:`m_9bfac126`,divider:`m_efdf90cb`,item:`m_99ac2aa1`,itemLabel:`m_5476e0d3`,itemSection:`m_8b75e504`,chevron:`m_b85b0bed`},Aa=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,...s}=M(`MenuDivider`,null,e);return(0,P.jsx)(O,{ref:t,...Oa().getStyles(`divider`,{className:r,style:i,styles:a,classNames:n}),...s})});Aa.classes=ka,Aa.displayName=`@mantine/core/MenuDivider`;var ja=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,onMouseEnter:s,onMouseLeave:c,onKeyDown:l,children:u,...d}=M(`MenuDropdown`,null,e),f=(0,N.useRef)(null),p=Oa(),m=li(l,e=>{(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),f.current?.querySelectorAll(`[data-menu-item]:not(:disabled)`)[0]?.focus())}),h=li(s,()=>(p.trigger===`hover`||p.trigger===`click-hover`)&&p.openDropdown()),g=li(c,()=>(p.trigger===`hover`||p.trigger===`click-hover`)&&p.closeDropdown());return(0,P.jsxs)(un.Dropdown,{...d,onMouseEnter:h,onMouseLeave:g,role:`menu`,"aria-orientation":`vertical`,ref:Tn(t,f),...p.getStyles(`dropdown`,{className:r,style:i,styles:a,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:m,children:[p.withInitialFocusPlaceholder&&(0,P.jsx)(`div`,{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),u]})});ja.classes=ka,ja.displayName=`@mantine/core/MenuDropdown`;var[Ma,Na]=le(),Pa=ae((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,color:s,closeMenuOnClick:c,leftSection:l,rightSection:u,children:d,disabled:f,"data-disabled":p,...m}=M(`MenuItem`,null,e),h=Oa(),g=Na(),_=T(),{dir:v}=re(),y=(0,N.useRef)(null),b=m,x=li(b.onClick,()=>{p||(typeof c==`boolean`?c&&h.closeDropdownImmediately():h.closeOnItemClick&&h.closeDropdownImmediately())}),S=s?_.variantColorResolver({color:s,theme:_,variant:`light`}):void 0,C=s?se({color:s,theme:_}):null,w=li(b.onKeyDown,e=>{e.key===`ArrowLeft`&&g&&(g.close(),g.focusParentItem())});return(0,P.jsxs)(te,{onMouseDown:e=>e.preventDefault(),...m,unstyled:h.unstyled,tabIndex:h.menuItemTabIndex,...h.getStyles(`item`,{className:r,style:i,styles:a,classNames:n}),ref:Tn(y,t),role:`menuitem`,disabled:f,"data-menu-item":!0,"data-disabled":f||p||void 0,"data-mantine-stop-propagation":!0,onClick:x,onKeyDown:ci({siblingSelector:`[data-menu-item]:not([data-disabled])`,parentSelector:`[data-menu-dropdown]`,activateOnFocus:!1,loop:h.loop,dir:v,orientation:`vertical`,onKeyDown:w}),__vars:{"--menu-item-color":C?.isThemeColor&&C?.shade===void 0?`var(--mantine-color-${C.color}-6)`:S?.color,"--menu-item-hover":S?.hover},children:[l&&(0,P.jsx)(`div`,{...h.getStyles(`itemSection`,{styles:a,classNames:n}),"data-position":`left`,children:l}),d&&(0,P.jsx)(`div`,{...h.getStyles(`itemLabel`,{styles:a,classNames:n}),children:d}),u&&(0,P.jsx)(`div`,{...h.getStyles(`itemSection`,{styles:a,classNames:n}),"data-position":`right`,children:u})]})});Pa.classes=ka,Pa.displayName=`@mantine/core/MenuItem`;var Fa=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,...s}=M(`MenuLabel`,null,e);return(0,P.jsx)(O,{ref:t,...Oa().getStyles(`label`,{className:r,style:i,styles:a,classNames:n}),...s})});Fa.classes=ka,Fa.displayName=`@mantine/core/MenuLabel`;var Ia=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,onMouseEnter:s,onMouseLeave:c,onKeyDown:l,children:u,...d}=M(`MenuSubDropdown`,null,e),f=(0,N.useRef)(null),p=Oa(),m=Na(),h=li(s,m?.open),g=li(c,m?.close);return(0,P.jsx)(un.Dropdown,{...d,onMouseEnter:h,onMouseLeave:g,role:`menu`,"aria-orientation":`vertical`,ref:Tn(t,f),...p.getStyles(`dropdown`,{className:r,style:i,styles:a,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:u})});Ia.classes=ka,Ia.displayName=`@mantine/core/MenuSubDropdown`;var La=ae((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,color:s,leftSection:c,rightSection:l,children:u,disabled:d,"data-disabled":f,closeMenuOnClick:p,...m}=M(`MenuSubItem`,null,e),h=Oa(),g=Na(),_=T(),{dir:v}=re(),y=(0,N.useRef)(null),b=m,x=s?_.variantColorResolver({color:s,theme:_,variant:`light`}):void 0,S=s?se({color:s,theme:_}):null,C=li(b.onKeyDown,e=>{e.key===`ArrowRight`&&(g?.open(),g?.focusFirstItem()),e.key===`ArrowLeft`&&g?.parentContext&&(g.parentContext.close(),g.parentContext.focusParentItem())}),w=li(b.onClick,()=>{!f&&p&&h.closeDropdownImmediately()}),E=li(b.onMouseEnter,g?.open),ee=li(b.onMouseLeave,g?.close);return(0,P.jsxs)(te,{onMouseDown:e=>e.preventDefault(),...m,unstyled:h.unstyled,tabIndex:h.menuItemTabIndex,...h.getStyles(`item`,{className:r,style:i,styles:a,classNames:n}),ref:Tn(y,t),role:`menuitem`,disabled:d,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":d||f||void 0,"data-mantine-stop-propagation":!0,onMouseEnter:E,onMouseLeave:ee,onClick:w,onKeyDown:ci({siblingSelector:`[data-menu-item]:not([data-disabled])`,parentSelector:`[data-menu-dropdown]`,activateOnFocus:!1,loop:h.loop,dir:v,orientation:`vertical`,onKeyDown:C}),__vars:{"--menu-item-color":S?.isThemeColor&&S?.shade===void 0?`var(--mantine-color-${S.color}-6)`:x?.color,"--menu-item-hover":x?.hover},children:[c&&(0,P.jsx)(`div`,{...h.getStyles(`itemSection`,{styles:a,classNames:n}),"data-position":`left`,children:c}),u&&(0,P.jsx)(`div`,{...h.getStyles(`itemLabel`,{styles:a,classNames:n}),children:u}),(0,P.jsx)(`div`,{...h.getStyles(`itemSection`,{styles:a,classNames:n}),"data-position":`right`,children:l||(0,P.jsx)(ki,{...h.getStyles(`chevron`),size:14})})]})});La.classes=ka,La.displayName=`@mantine/core/MenuSubItem`;function Ra({children:e,refProp:t}){if(!en(e))throw Error(`Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported`);return Oa(),(0,P.jsx)(un.Target,{refProp:t,popupType:`menu`,children:e})}Ra.displayName=`@mantine/core/MenuSubTarget`;var za={offset:0,position:`right-start`,transitionProps:{duration:0},openDelay:0,middlewares:{shift:{crossAxis:!0}}};function Ba(e){let{children:t,closeDelay:n,openDelay:r,...i}=M(`MenuSub`,za,e),a=we(),[o,{open:s,close:c}]=nn(!1),l=Na(),{openDropdown:u,closeDropdown:d}=Oi({open:s,close:c,closeDelay:n,openDelay:r});return(0,P.jsx)(Ma,{value:{opened:o,close:d,open:u,focusFirstItem:()=>window.setTimeout(()=>{document.getElementById(`${a}-dropdown`)?.querySelectorAll(`[data-menu-item]:not([data-disabled])`)[0]?.focus()},16),focusParentItem:()=>window.setTimeout(()=>{document.getElementById(`${a}-target`)?.focus()},16),parentContext:l},children:(0,P.jsx)(un,{opened:o,withinPortal:!1,withArrow:!1,id:a,...i,children:t})})}Ba.extend=e=>e,Ba.displayName=`@mantine/core/MenuSub`,Ba.Target=Ra,Ba.Dropdown=Ia,Ba.Item=La;var Va={refProp:`ref`},Ha=(0,N.forwardRef)((e,t)=>{let{children:n,refProp:r,...i}=M(`MenuTarget`,Va,e),a=Rt(n);if(!a)throw Error(`Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported`);let o=Oa(),s=a.props,c=li(s.onClick,()=>{o.trigger===`click`?o.toggleDropdown():o.trigger===`click-hover`&&(o.setOpenedViaClick(!0),o.opened||o.openDropdown())}),l=li(s.onMouseEnter,()=>(o.trigger===`hover`||o.trigger===`click-hover`)&&o.openDropdown()),u=li(s.onMouseLeave,()=>{(o.trigger===`hover`||o.trigger===`click-hover`&&!o.openedViaClick)&&o.closeDropdown()});return(0,P.jsx)(un.Target,{refProp:r,popupType:`menu`,ref:t,...i,children:(0,N.cloneElement)(a,{onClick:c,onMouseEnter:l,onMouseLeave:u,"data-expanded":o.opened?!0:void 0})})});Ha.displayName=`@mantine/core/MenuTarget`;var Ua={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:[`mousedown`,`touchstart`,`keydown`],loop:!0,trigger:`click`,openDelay:0,closeDelay:100,menuItemTabIndex:-1};function Wa(e){let t=M(`Menu`,Ua,e),{children:n,onOpen:r,onClose:i,opened:a,defaultOpened:o,trapFocus:s,onChange:c,closeOnItemClick:l,loop:u,closeOnEscape:d,trigger:f,openDelay:p,closeDelay:m,classNames:h,styles:g,unstyled:_,variant:v,vars:y,menuItemTabIndex:x,keepMounted:S,withInitialFocusPlaceholder:C,attributes:w,...T}=t,E=de({name:`Menu`,classes:ka,props:t,classNames:h,styles:g,unstyled:_,attributes:w}),[ee,D]=Je({value:a,defaultValue:o,finalValue:!1,onChange:c}),[O,te]=(0,N.useState)(!1),ne=()=>{D(!1),te(!1),ee&&i?.()},re=()=>{D(!0),!ee&&r?.()},ie=()=>{ee?ne():re()},{openDropdown:k,closeDropdown:A}=Oi({open:re,close:ne,closeDelay:m,openDelay:p}),ae=e=>pi(`[data-menu-item]`,`[data-menu-dropdown]`,e),{resolvedClassNames:oe,resolvedStyles:se}=b({classNames:h,styles:g,props:t});return(0,P.jsx)(Da,{value:{getStyles:E,opened:ee,toggleDropdown:ie,getItemIndex:ae,openedViaClick:O,setOpenedViaClick:te,closeOnItemClick:l,closeDropdown:f===`click`?ne:A,openDropdown:f===`click`?re:k,closeDropdownImmediately:ne,loop:u,trigger:f,unstyled:_,menuItemTabIndex:x,withInitialFocusPlaceholder:C},children:(0,P.jsx)(un,{returnFocus:!0,...T,opened:ee,onChange:ie,defaultOpened:o,trapFocus:S?!1:s,closeOnEscape:d,__staticSelector:`Menu`,classNames:oe,styles:se,unstyled:_,variant:v,keepMounted:S,children:n})})}Wa.extend=e=>e,Wa.withProps=w(Wa),Wa.classes=ka,Wa.displayName=`@mantine/core/Menu`,Wa.Item=Pa,Wa.Label=Fa,Wa.Dropdown=ja,Wa.Target=Ha,Wa.Divider=Aa,Wa.Sub=Ba;var Ga={root:`m_db6d6462`,section:`m_2242eb65`,"stripes-animation":`m_81a374bd`,"stripes-animation-vertical":`m_e0fb7a86`,label:`m_91e40b74`},[Ka,qa]=Cn(`Progress.Root component was not found in tree`),Ja=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,...s}=M(`ProgressLabel`,null,e);return(0,P.jsx)(O,{ref:t,...qa().getStyles(`label`,{className:r,style:i,classNames:n,styles:a}),...s})});Ja.classes=Ga,Ja.displayName=`@mantine/core/ProgressLabel`;var Ya=Se((e,{size:t,radius:n,transitionDuration:r})=>({root:{"--progress-size":be(t,`progress-size`),"--progress-radius":n===void 0?void 0:Ye(n),"--progress-transition-duration":typeof r==`number`?`${r}ms`:void 0}})),Xa=y((e,t)=>{let n=M(`ProgressRoot`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,autoContrast:l,transitionDuration:u,orientation:d,attributes:f,mod:p,...m}=n,h=de({name:`Progress`,classes:Ga,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:f,vars:c,varsResolver:Ya});return(0,P.jsx)(Ka,{value:{getStyles:h,autoContrast:l},children:(0,P.jsx)(O,{ref:t,mod:[{orientation:d},p],...h(`root`),...m})})});Xa.classes=Ga,Xa.displayName=`@mantine/core/ProgressRoot`;var Za={withAria:!0},Qa=y((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,value:s,withAria:c,color:l,striped:u,animated:d,mod:f,...p}=M(`ProgressSection`,Za,e),m=qa(),h=T(),g=c?{role:`progressbar`,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,"aria-valuetext":`${s}%`}:{};return(0,P.jsx)(O,{ref:t,...m.getStyles(`section`,{className:r,classNames:n,styles:a,style:i}),...p,...g,mod:[{striped:u||d,animated:d},f],__vars:{"--progress-section-size":`${s}%`,"--progress-section-color":he(l,h),"--progress-label-color":Ci(m.autoContrast,h)?He({color:l,theme:h,autoContrast:m.autoContrast}):void 0}})});Qa.classes=Ga,Qa.displayName=`@mantine/core/ProgressSection`;var $a=y((e,t)=>{let n=M(`Progress`,null,e),{value:r,classNames:i,styles:a,vars:o,color:s,striped:c,animated:l,"aria-label":u,...d}=n,{resolvedClassNames:f,resolvedStyles:p}=b({classNames:i,styles:a,props:n});return(0,P.jsx)(Xa,{ref:t,classNames:f,styles:p,vars:o,...d,children:(0,P.jsx)(Qa,{value:r,color:s,striped:c,animated:l,"aria-label":u})})});$a.classes=Ga,$a.displayName=`@mantine/core/Progress`,$a.Section=Qa,$a.Root=Xa,$a.Label=Ja;var eo={duration:100,transition:`fade`};function to(e,t){return{...eo,...t,...e}}var no={tooltip:`m_1b3c8819`,arrow:`m_f898399f`};function ro({offset:e,position:t,defaultOpened:n}){let[r,i]=(0,N.useState)(n),a=(0,N.useRef)(null),{x:o,y:s,elements:c,refs:l,update:u,placement:d}=zt({placement:t,middleware:[xn({crossAxis:!0,padding:5,rootBoundary:`document`})]}),f=d.includes(`right`)?e:t.includes(`left`)?e*-1:0,p=d.includes(`bottom`)?e:t.includes(`top`)?e*-1:0,m=(0,N.useCallback)(({clientX:e,clientY:t})=>{l.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:e,y:t,left:e+f,top:t+p,right:e,bottom:t}}})},[c.reference]);return(0,N.useEffect)(()=>{if(l.floating.current){let e=a.current;e.addEventListener(`mousemove`,m);let t=Jt(l.floating.current);return t.forEach(e=>{e.addEventListener(`scroll`,u)}),()=>{e.removeEventListener(`mousemove`,m),t.forEach(e=>{e.removeEventListener(`scroll`,u)})}}},[c.reference,l.floating.current,u,m,r]),{handleMouseMove:m,x:o,y:s,opened:r,setOpened:i,boundaryRef:a,floating:l.setFloating}}var io={refProp:`ref`,withinPortal:!0,offset:10,position:`right`,zIndex:yn(`popover`)},ao=Se((e,{radius:t,color:n})=>({tooltip:{"--tooltip-radius":t===void 0?void 0:Ye(t),"--tooltip-bg":n?he(n,e):void 0,"--tooltip-color":n?`var(--mantine-color-white)`:void 0}})),oo=y((e,t)=>{let n=M(`TooltipFloating`,io,e),{children:r,refProp:i,withinPortal:a,style:o,className:s,classNames:c,styles:l,unstyled:u,radius:d,color:f,label:p,offset:m,position:h,multiline:g,zIndex:_,disabled:v,defaultOpened:y,variant:b,vars:x,portalProps:S,attributes:C,...w}=n,E=T(),ee=de({name:`TooltipFloating`,props:n,classes:no,className:s,style:o,classNames:c,styles:l,unstyled:u,attributes:C,rootSelector:`tooltip`,vars:x,varsResolver:ao}),{handleMouseMove:D,x:te,y:ne,opened:re,boundaryRef:ie,floating:k,setOpened:A}=ro({offset:m,position:h,defaultOpened:y}),ae=Rt(r);if(!ae)throw Error(`[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported`);let oe=Tn(ie,bt(ae),t),se=ae.props,ce=e=>{se.onMouseEnter?.(e),D(e),A(!0)},le=e=>{se.onMouseLeave?.(e),A(!1)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(xt,{...S,withinPortal:a,children:(0,P.jsx)(O,{...w,...ee(`tooltip`,{style:{...Yt(o,E),zIndex:_,display:!v&&re?`block`:`none`,top:(ne&&Math.round(ne))??``,left:(te&&Math.round(te))??``}}),variant:b,ref:k,mod:{multiline:g},children:p})}),(0,N.cloneElement)(ae,{...se,[i]:oe,onMouseEnter:ce,onMouseLeave:le})]})});oo.classes=no,oo.displayName=`@mantine/core/TooltipFloating`;var so=(0,N.createContext)(!1),co=so.Provider,lo=()=>(0,N.useContext)(so),uo={openDelay:0,closeDelay:0};function fo(e){let{openDelay:t,closeDelay:n,children:r}=M(`TooltipGroup`,uo,e);return(0,P.jsx)(co,{value:!0,children:(0,P.jsx)(Et,{delay:{open:t,close:n},children:r})})}fo.displayName=`@mantine/core/TooltipGroup`,fo.extend=e=>e;function po(e){if(e===void 0)return{shift:!0,flip:!0};let t={...e};return e.shift===void 0&&(t.shift=!0),e.flip===void 0&&(t.flip=!0),t}function mo(e){let t=po(e.middlewares),n=[jt(e.offset)];return t.shift&&n.push(xn(typeof t.shift==`boolean`?{padding:8}:{padding:8,...t.shift})),t.flip&&n.push(typeof t.flip==`boolean`?Kt():Kt(t.flip)),n.push(Wt({element:e.arrowRef,padding:e.arrowOffset})),t.inline?n.push(typeof t.inline==`boolean`?Dt():Dt(t.inline)):e.inline&&n.push(Dt()),n}function ho(e){let[t,n]=(0,N.useState)(e.defaultOpened),r=typeof e.opened==`boolean`?e.opened:t,i=lo(),a=we(),o=(0,N.useCallback)(e=>{n(e),e&&g(a)},[a]),{x:s,y:c,context:l,refs:u,placement:d,middlewareData:{arrow:{x:f,y:p}={}}}=zt({strategy:e.strategy,placement:e.position,open:r,onOpenChange:o,middleware:mo(e),whileElementsMounted:At}),{delay:m,currentId:h,setCurrentId:g}=kt(l,{id:a}),{getReferenceProps:_,getFloatingProps:v}=Gt([St(l,{enabled:e.events?.hover,delay:i?m:{open:e.openDelay,close:e.closeDelay},mouseOnly:!e.events?.touch}),Fn(l,{enabled:e.events?.focus,visibleOnly:!0}),Ot(l,{role:`tooltip`}),Mt(l,{enabled:e.opened===void 0})]);Oe(()=>{e.onPositionChange?.(d)},[d]);let y=r&&h&&h!==a;return{x:s,y:c,arrowX:f,arrowY:p,reference:u.setReference,floating:u.setFloating,getFloatingProps:v,getReferenceProps:_,isGroupPhase:y,opened:r,placement:d}}var go={position:`top`,refProp:`ref`,withinPortal:!0,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:`side`,offset:5,transitionProps:{duration:100,transition:`fade`},events:{hover:!0,focus:!1,touch:!1},zIndex:yn(`popover`),positionDependencies:[],middlewares:{flip:!0,shift:!0,inline:!1}},_o=Se((e,{radius:t,color:n,variant:r,autoContrast:i})=>{let a=e.variantColorResolver({theme:e,color:n||e.primaryColor,autoContrast:i,variant:r||`filled`});return{tooltip:{"--tooltip-radius":t===void 0?void 0:Ye(t),"--tooltip-bg":n?a.background:void 0,"--tooltip-color":n?a.color:void 0}}}),I=y((e,t)=>{let n=M(`Tooltip`,go,e),{children:r,position:i,refProp:a,label:o,openDelay:s,closeDelay:c,onPositionChange:l,opened:u,defaultOpened:d,withinPortal:p,radius:m,color:h,classNames:g,styles:_,unstyled:v,style:y,className:b,withArrow:x,arrowSize:S,arrowOffset:C,arrowRadius:w,arrowPosition:T,offset:E,transitionProps:ee,multiline:D,events:te,zIndex:ne,disabled:ie,positionDependencies:k,onClick:A,onMouseEnter:ae,onMouseLeave:oe,inline:se,variant:ce,keepMounted:le,vars:ue,portalProps:j,mod:fe,floatingStrategy:pe,middlewares:me,autoContrast:he,attributes:ge,target:_e,...ve}=M(`Tooltip`,go,n),{dir:ye}=re(),be=(0,N.useRef)(null),xe=ho({position:Nt(ye,i),closeDelay:c,openDelay:s,onPositionChange:l,opened:u,defaultOpened:d,events:te,arrowRef:be,arrowOffset:C,offset:typeof E==`number`?E+(x?S/2:0):E,positionDependencies:[...k,_e??r],inline:se,strategy:pe,middlewares:me});(0,N.useEffect)(()=>{let e=_e instanceof HTMLElement?_e:typeof _e==`string`?document.querySelector(_e):_e?.current||null;e&&xe.reference(e)},[_e,xe]);let Se=de({name:`Tooltip`,props:n,classes:no,className:b,style:y,classNames:g,styles:_,unstyled:v,attributes:ge,rootSelector:`tooltip`,vars:ue,varsResolver:_o}),Ce=Rt(r);if(!_e&&!Ce)throw Error(`[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported`);if(_e){let e=to(ee,{duration:100,transition:`fade`});return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(xt,{...j,withinPortal:p,children:(0,P.jsx)(f,{...e,keepMounted:le,mounted:!ie&&!!xe.opened,duration:xe.isGroupPhase?10:e.duration,children:e=>(0,P.jsxs)(O,{...ve,"data-fixed":pe===`fixed`||void 0,variant:ce,mod:[{multiline:D},fe],...xe.getFloatingProps({ref:xe.floating,className:Se(`tooltip`).className,style:{...Se(`tooltip`).style,...e,zIndex:ne,top:xe.y??0,left:xe.x??0}}),children:[o,(0,P.jsx)(Pt,{ref:be,arrowX:xe.arrowX,arrowY:xe.arrowY,visible:x,position:xe.placement,arrowSize:S,arrowOffset:C,arrowRadius:w,arrowPosition:T,...Se(`arrow`)})]})})})})}let we=Ce.props,Te=Tn(xe.reference,bt(Ce),t),Ee=to(ee,{duration:100,transition:`fade`});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(xt,{...j,withinPortal:p,children:(0,P.jsx)(f,{...Ee,keepMounted:le,mounted:!ie&&!!xe.opened,duration:xe.isGroupPhase?10:Ee.duration,children:e=>(0,P.jsxs)(O,{...ve,"data-fixed":pe===`fixed`||void 0,variant:ce,mod:[{multiline:D},fe],...xe.getFloatingProps({ref:xe.floating,className:Se(`tooltip`).className,style:{...Se(`tooltip`).style,...e,zIndex:ne,top:xe.y??0,left:xe.x??0}}),children:[o,(0,P.jsx)(Pt,{ref:be,arrowX:xe.arrowX,arrowY:xe.arrowY,visible:x,position:xe.placement,arrowSize:S,arrowOffset:C,arrowRadius:w,arrowPosition:T,...Se(`arrow`)})]})})}),(0,N.cloneElement)(Ce,xe.getReferenceProps({onClick:A,onMouseEnter:ae,onMouseLeave:oe,onMouseMove:n.onMouseMove,onPointerDown:n.onPointerDown,onPointerEnter:n.onPointerEnter,...we,className:Ge(b,we.className),[a]:Te}))]})});I.classes=no,I.displayName=`@mantine/core/Tooltip`,I.Floating=oo,I.Group=fo;var vo={container:`m_925c2d2c`,root:`m_2415a157`};function yo({spacing:e,verticalSpacing:t,cols:n,selector:r}){let i=T(),a=t===void 0?e:t,o=g({"--sg-spacing-x":$e(fi(e)),"--sg-spacing-y":$e(fi(a)),"--sg-cols":fi(n)?.toString()}),s=_(i.breakpoints).reduce((t,r)=>(t[r]||(t[r]={}),typeof e==`object`&&e[r]!==void 0&&(t[r][`--sg-spacing-x`]=$e(e[r])),typeof a==`object`&&a[r]!==void 0&&(t[r][`--sg-spacing-y`]=$e(a[r])),typeof n==`object`&&n[r]!==void 0&&(t[r][`--sg-cols`]=n[r]),t),{});return(0,P.jsx)(S,{styles:o,media:di(_(s),i.breakpoints).filter(e=>_(s[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:s[e.value]})),selector:r})}function bo(e){return typeof e==`object`&&e?_(e):[]}function xo(e){return e.sort((e,t)=>v(e)-v(t))}function So({spacing:e,verticalSpacing:t,cols:n}){return xo(Array.from(new Set([...bo(e),...bo(t),...bo(n)])))}function Co({spacing:e,verticalSpacing:t,cols:n,selector:r}){let i=t===void 0?e:t,a=g({"--sg-spacing-x":$e(fi(e)),"--sg-spacing-y":$e(fi(i)),"--sg-cols":fi(n)?.toString()}),o=So({spacing:e,verticalSpacing:t,cols:n}),s=o.reduce((t,r)=>(t[r]||(t[r]={}),typeof e==`object`&&e[r]!==void 0&&(t[r][`--sg-spacing-x`]=$e(e[r])),typeof i==`object`&&i[r]!==void 0&&(t[r][`--sg-spacing-y`]=$e(i[r])),typeof n==`object`&&n[r]!==void 0&&(t[r][`--sg-cols`]=n[r]),t),{});return(0,P.jsx)(S,{styles:a,container:o.map(e=>({query:`simple-grid (min-width: ${e})`,styles:s[e]})),selector:r})}var wo={cols:1,spacing:`md`,type:`media`},To=y((e,t)=>{let n=M(`SimpleGrid`,wo,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,cols:l,verticalSpacing:u,spacing:d,type:f,attributes:p,...m}=n,h=de({name:`SimpleGrid`,classes:vo,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:p,vars:c}),g=tt();return f===`container`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Co,{...n,selector:`.${g}`}),(0,P.jsx)(`div`,{...h(`container`),children:(0,P.jsx)(O,{ref:t,...h(`root`,{className:g}),...m})})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(yo,{...n,selector:`.${g}`}),(0,P.jsx)(O,{ref:t,...h(`root`,{className:g}),...m})]})});To.classes=vo,To.displayName=`@mantine/core/SimpleGrid`;var Eo=(0,N.createContext)(null);Eo.displayName=`@mantine/modals/ModalsContext`;function Do(){let e=(0,N.useContext)(Eo);if(!e)throw Error(`[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component`);return e}function Oo({id:e,cancelProps:t,confirmProps:n,labels:r={cancel:``,confirm:``},closeOnConfirm:i=!0,closeOnCancel:a=!0,groupProps:o,onCancel:s,onConfirm:c,children:l}){let{cancel:u,confirm:d}=r,f=Do(),p=n=>{typeof t?.onClick==`function`&&t?.onClick(n),typeof s==`function`&&s(),a&&f.closeModal(e)},m=t=>{typeof n?.onClick==`function`&&n?.onClick(t),typeof c==`function`&&c(),i&&f.closeModal(e)};return(0,P.jsxs)(P.Fragment,{children:[l&&(0,P.jsx)(O,{mb:`md`,children:l}),(0,P.jsxs)(Ft,{mt:l?0:`md`,justify:`flex-end`,...o,children:[(0,P.jsx)(Xe,{variant:`default`,...t,onClick:p,children:t?.children||u}),(0,P.jsx)(Xe,{...n,onClick:m,children:n?.children||d})]})]})}var[ko,Ao]=Si(`mantine-modals`),jo={open:e=>{let t=e.modalId||je();return Ao(`openModal`)({...e,modalId:t}),t},close:Ao(`closeModal`),closeAll:Ao(`closeAllModals`),openConfirmModal:e=>{let t=e.modalId||je();return Ao(`openConfirmModal`)({...e,modalId:t}),t},openContextModal:e=>{let t=e.modalId||je();return Ao(`openContextModal`)({...e,modalId:t}),t},updateModal:e=>Ao(`updateModal`)(e),updateContextModal:e=>Ao(`updateContextModal`)(e)};function Mo(e,t){t&&e.type===`confirm`&&e.props.onCancel?.(),e.props.onClose?.()}function No(e,t){switch(t.type){case`OPEN`:return{current:t.modal,modals:[...e.modals,t.modal]};case`CLOSE`:{if(!e.modals.find(e=>e.id===t.modalId))return e;let n=e.modals.filter(e=>e.id!==t.modalId);return{current:n[n.length-1]||e.current,modals:n}}case`CLOSE_ALL`:return e.modals.length?{current:e.current,modals:[]}:e;case`UPDATE`:{let{modalId:n,newProps:r}=t,i=e.modals.map(e=>e.id===n?e.type===`content`||e.type===`confirm`?{...e,props:{...e.props,...r}}:e.type===`context`?{...e,props:{...e.props,...r,innerProps:{...e.props.innerProps,...r.innerProps}}}:e:e),a=e.current?.id===n&&i.find(e=>e.id===n)||e.current;return{...e,modals:i,current:a}}default:return e}}function Po(e){if(!e)return{confirmProps:{},modalProps:{}};let{id:t,children:n,onCancel:r,onConfirm:i,closeOnConfirm:a,closeOnCancel:o,cancelProps:s,confirmProps:c,groupProps:l,labels:u,...d}=e;return{confirmProps:{id:t,children:n,onCancel:r,onConfirm:i,closeOnConfirm:a,closeOnCancel:o,cancelProps:s,confirmProps:c,groupProps:l,labels:u},modalProps:{id:t,...d}}}function Fo({children:e,modalProps:t,labels:n,modals:r}){let[i,a]=(0,N.useReducer)(No,{modals:[],current:null}),o=(0,N.useRef)(i);o.current=i;let s=(0,N.useCallback)(e=>{o.current.modals.concat().reverse().forEach(t=>{Mo(t,e)}),a({type:`CLOSE_ALL`,canceled:e})},[o,a]),c=(0,N.useCallback)(({modalId:e,...t})=>{let n=e||je();return a({type:`OPEN`,modal:{id:n,type:`content`,props:t}}),n},[a]),l=(0,N.useCallback)(({modalId:e,...t})=>{let n=e||je();return a({type:`OPEN`,modal:{id:n,type:`confirm`,props:t}}),n},[a]),u=(0,N.useCallback)((e,{modalId:t,...n})=>{let r=t||je();return a({type:`OPEN`,modal:{id:r,type:`context`,props:n,ctx:e}}),r},[a]),d=(0,N.useCallback)((e,t)=>{let n=o.current.modals.find(t=>t.id===e);n&&Mo(n,t),a({type:`CLOSE`,modalId:e,canceled:t})},[o,a]),f=(0,N.useCallback)(({modalId:e,...t})=>{a({type:`UPDATE`,modalId:e,newProps:t})},[a]),p=(0,N.useCallback)(({modalId:e,...t})=>{a({type:`UPDATE`,modalId:e,newProps:t})},[a]);ko({openModal:c,openConfirmModal:l,openContextModal:({modal:e,...t})=>u(e,t),closeModal:d,closeContextModal:d,closeAllModals:s,updateModal:f,updateContextModal:p});let m={modalProps:t||{},modals:i.modals,openModal:c,openConfirmModal:l,openContextModal:u,closeModal:d,closeContextModal:d,closeAll:s,updateModal:f,updateContextModal:p},{modalProps:h,content:g}=(()=>{let e=o.current.current;switch(e?.type){case`context`:{let{innerProps:t,...n}=e.props,i=r[e.ctx];return{modalProps:n,content:(0,P.jsx)(i,{innerProps:t,context:m,id:e.id})}}case`confirm`:{let{modalProps:t,confirmProps:r}=Po(e.props);return{modalProps:t,content:(0,P.jsx)(Oo,{...r,id:e.id,labels:e.props.labels||n})}}case`content`:{let{children:t,...n}=e.props;return{modalProps:n,content:t}}default:return{modalProps:{},content:null}}})();return(0,P.jsxs)(Eo.Provider,{value:m,children:[(0,P.jsx)(Ct,{zIndex:yn(`modal`)+1,...t,...h,opened:i.modals.length>0,onClose:()=>d(i.current?.id),children:g}),e]})}var Io=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var x=`$isDayjsObject`,S=function(e){return e instanceof E||!(!e||!e[x])},C=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},w=function(e,t){if(S(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new E(n)},T=v;T.l=C,T.i=S,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return T},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!T.u(t)||t,u=T.p(e),p=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return T.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=T.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[T.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=T.p(u),h=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return T.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=T.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return T.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return T.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return T.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return T.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return T.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return T.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return T.s(t.$s,2,`0`);case`SSS`:return T.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=T.p(f),_=w(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return T.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:T.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return T.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),ee=E.prototype;return w.prototype=ee,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){ee[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||=(e(t,E,w),!0),w},w.locale=C,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}))})),Lo=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(Io()):typeof define==`function`&&define.amd?define([`dayjs`],r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_locale_es=r(n.dayjs)})(e,(function(e){function t(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var n=t(e),r={name:`es`,monthsShort:`ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic`.split(`_`),weekdays:`domingo_lunes_martes_miércoles_jueves_viernes_sábado`.split(`_`),weekdaysShort:`dom._lun._mar._mié._jue._vie._sáb.`.split(`_`),weekdaysMin:`do_lu_ma_mi_ju_vi_sá`.split(`_`),months:`enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre`.split(`_`),weekStart:1,formats:{LT:`H:mm`,LTS:`H:mm:ss`,L:`DD/MM/YYYY`,LL:`D [de] MMMM [de] YYYY`,LLL:`D [de] MMMM [de] YYYY H:mm`,LLLL:`dddd, D [de] MMMM [de] YYYY H:mm`},relativeTime:{future:`en %s`,past:`hace %s`,s:`unos segundos`,m:`un minuto`,mm:`%d minutos`,h:`una hora`,hh:`%d horas`,d:`un día`,dd:`%d días`,M:`un mes`,MM:`%d meses`,y:`un año`,yy:`%d años`},ordinal:function(e){return e+`º`}};return n.default.locale(r,null,!0),r}))})),Ro=function(){return null},zo=`/assets/styles-QkxHWnru.css`,Bo=`/assets/styles-hRceUWu8.css`,Vo=`/assets/styles-Dk4DEkv-.css`,Ho={root:`m_8f2832ae`,section:`m_7a0fe999`};function Uo(e){let t=e,n=!1,r=new Set;return{getState(){return t},updateState(e){t=typeof e==`function`?e(t):e},setState(e){this.updateState(e),r.forEach(e=>e(t))},initialize(e){n||=(t=e,!0)},subscribe(e){return r.add(e),()=>r.delete(e)}}}function Wo(e){return(0,N.useSyncExternalStore)(e.subscribe,()=>e.getState(),()=>e.getState())}function Go(e){let t=.5;return e>=0&&e<=20?t=10:e>=20&&e<=50?t=4:e>=50&&e<=80?t=2:e>=80&&e<=99?t=1:e>=99&&e<=100&&(t=0),e+t}var Ko=()=>Uo({mounted:!1,progress:0,interval:0,step:1,stepInterval:100,timeouts:[]}),qo=e=>Wo(e);function Jo(e,t){let n=t.getState();t.setState({...n,...e(t.getState())})}function Yo(e){Jo(e=>({progress:Math.max(e.progress-e.step,0)}),e)}function Xo(e,t){Jo(()=>({progress:ln(e,0,100),mounted:!0}),t)}function Zo(e){Jo(e=>(window.clearInterval(e.interval),e.timeouts.forEach(e=>window.clearTimeout(e)),{timeouts:[]}),e)}function Qo(e){Zo(e),Jo(t=>({progress:100,timeouts:[window.setTimeout(()=>{Jo(()=>({mounted:!1}),e)},50),window.setTimeout(()=>{Jo(()=>({progress:0}),e)},t.stepInterval+50)]}),e)}function $o(e){Jo(e=>({progress:Go(e.progress),mounted:!0}),e),Jo(t=>(window.clearInterval(t.interval),{interval:window.setInterval(()=>{Jo(e=>({progress:Go(e.progress),mounted:!0}),e)},t.stepInterval),mounted:!0}),e)}function es(e){Jo(e=>(window.clearInterval(e.interval),{interval:-1}),e)}function ts(e){Zo(e),es(e),Jo(()=>({progress:0,mounted:!1}),e)}function ns(e){Jo(t=>{let n=Math.min(t.progress+t.step,100),r=n!==100&&n!==0;if(!r){let i=window.setTimeout(()=>ts(e),t.stepInterval+50);return{progress:n,mounted:r,timeouts:[...t.timeouts,i]}}return{progress:n,mounted:r}},e)}function rs(){let e=Ko();return[e,{start:()=>$o(e),stop:()=>es(e),reset:()=>ts(e),set:t=>Xo(t,e),increment:()=>ns(e),decrement:()=>Yo(e),complete:()=>Qo(e),cleanup:()=>Zo(e)}]}var[is,as]=rs(),{start:os,stop:ss,reset:cs,set:ls,increment:us,decrement:ds,complete:fs,cleanup:ps}=as;function ms({initialProgress:e=0,color:t,size:n=3,stepInterval:r=500,withinPortal:i=!0,portalProps:a,zIndex:o=yn(`max`),store:s=is,...c}){s.initialize({mounted:!1,progress:e,interval:-1,step:1,stepInterval:r,timeouts:[]});let l=qo(s);return(0,N.useEffect)(()=>()=>ts(s),[s]),(0,P.jsx)(xt,{...a,withinPortal:i,children:(0,P.jsx)($a,{radius:0,value:l.progress,size:n,color:t,classNames:Ho,"data-mounted":l.mounted||void 0,__vars:{"--nprogress-z-index":o?.toString()},...c})})}ms.displayName=`@mantine/nprogress/NavigationProgress`;var hs=`/assets/styles-b9PXqAFV.css`,gs=`/assets/styles-E1S1lSLL.css`,_s=Pn(`outline`,`arrow-loop-left`,`ArrowLoopLeft`,[[`path`,{d:`M13 21v-13a4 4 0 1 1 4 4h-13`,key:`svg-0`}],[`path`,{d:`M8 16l-4 -4l4 -4`,key:`svg-1`}]]),vs=Pn(`outline`,`calendar-dollar`,`CalendarDollar`,[[`path`,{d:`M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3`,key:`svg-0`}],[`path`,{d:`M16 3v4`,key:`svg-1`}],[`path`,{d:`M8 3v4`,key:`svg-2`}],[`path`,{d:`M4 11h12.5`,key:`svg-3`}],[`path`,{d:`M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5`,key:`svg-4`}],[`path`,{d:`M19 21v1m0 -8v1`,key:`svg-5`}]]),ys=Pn(`outline`,`gauge`,`Gauge`,[[`path`,{d:`M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0`,key:`svg-0`}],[`path`,{d:`M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0`,key:`svg-1`}],[`path`,{d:`M13.41 10.59l2.59 -2.59`,key:`svg-2`}],[`path`,{d:`M7 12a5 5 0 0 1 5 -5`,key:`svg-3`}]]),bs=Pn(`outline`,`home`,`Home`,[[`path`,{d:`M5 12l-2 0l9 -9l9 9l-2 0`,key:`svg-0`}],[`path`,{d:`M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7`,key:`svg-1`}],[`path`,{d:`M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6`,key:`svg-2`}]]),xs=Pn(`outline`,`logout`,`Logout`,[[`path`,{d:`M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2`,key:`svg-0`}],[`path`,{d:`M9 12h12l-3 -3`,key:`svg-1`}],[`path`,{d:`M18 15l3 -3`,key:`svg-2`}]]),Ss=Pn(`outline`,`notes`,`Notes`,[[`path`,{d:`M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14`,key:`svg-0`}],[`path`,{d:`M9 7l6 0`,key:`svg-1`}],[`path`,{d:`M9 11l6 0`,key:`svg-2`}],[`path`,{d:`M9 15l4 0`,key:`svg-3`}]]),Cs=Pn(`outline`,`server-off`,`ServerOff`,[[`path`,{d:`M12 12h-6a3 3 0 0 1 -3 -3v-2c0 -1.083 .574 -2.033 1.435 -2.56m3.565 -.44h10a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2`,key:`svg-0`}],[`path`,{d:`M16 12h2a3 3 0 0 1 3 3v2m-1.448 2.568a2.986 2.986 0 0 1 -1.552 .432h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h6`,key:`svg-1`}],[`path`,{d:`M7 8v.01`,key:`svg-2`}],[`path`,{d:`M7 16v.01`,key:`svg-3`}],[`path`,{d:`M3 3l18 18`,key:`svg-4`}]]),ws=Pn(`outline`,`server`,`Server`,[[`path`,{d:`M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3`,key:`svg-0`}],[`path`,{d:`M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2`,key:`svg-1`}],[`path`,{d:`M7 8l0 .01`,key:`svg-2`}],[`path`,{d:`M7 16l0 .01`,key:`svg-3`}]]);function Ts(e,t){for(let n=0,r=t.length;n<r;n++){let r=t[n];e.has(r)||(e.add(r),r.extends&&Ts(e,r.extends))}}var Es=e=>({getOptions:async()=>{let t=await e();if(t.serializationAdapters){let e=new Set;Ts(e,t.serializationAdapters),t.serializationAdapters=Array.from(e)}return t},createMiddleware:Qe}),Ds=Qe(),Os={all:[`auth`]},ks={user:()=>jn({queryKey:Os.all,queryFn:et.auth.getUser})},As=()=>{let e=o(),t=ie();return Me({mutationFn:ce(et.auth.signOut),onSuccess:async()=>{t.resetQueries({queryKey:Os.all}),await e.invalidate({sync:!0})}})},js=()=>{let e=As(),t=kn();return(0,P.jsxs)(`a`,{href:`#`,className:`link`,onClick:n=>{as.start(),n.preventDefault(),e.mutate({},{onSuccess:()=>t({to:`/signin`}),onError:()=>as.complete()})},children:[(0,P.jsx)(xs,{className:`linkIcon`,stroke:1.5}),(0,P.jsx)(`span`,{children:`Logout`})]})},Ms=Pe({redirectTo:qe(We(Ee(Fe(),ge()),`/`),`/`)});function Ns({error:e}){let t=o(),n=$t({strict:!1,select:e=>e.id===ot});return(0,P.jsxs)(`div`,{className:`min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6`,children:[(0,P.jsx)(dt,{error:e}),(0,P.jsxs)(`div`,{className:`flex gap-2 items-center flex-wrap`,children:[(0,P.jsx)(`button`,{type:`button`,onClick:()=>{t.invalidate()},className:`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,children:`Try Again`}),n?(0,P.jsx)(cn,{to:`/`,className:`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,children:`Home`}):(0,P.jsx)(cn,{to:`/`,className:`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,onClick:e=>{e.preventDefault(),window.history.back()},children:`Go Back`})]})]})}var Ps=`/Ghost-big.png`,Fs=on(N.forwardRef((e,t)=>(0,P.jsx)(Mi,{ref:t,...e}))),Is=e=>(0,P.jsx)(Fs,{preload:`intent`,...e}),Ls=()=>Uo({opened:!1,empty:!1,selected:-1,listId:``,query:``,registeredActions:new Set}),Rs=e=>Wo(e);function zs(e,t){let n=t.getState();t.setState({...n,...e(t.getState())})}function Bs(e){zs(()=>({opened:!0,selected:-1}),e)}function Vs(e){zs(()=>({opened:!1}),e)}function Hs(e){zs(e=>({opened:!e.opened,selected:e.opened?e.selected:-1}),e)}function Us(e,t){t.updateState(t=>({...t,selected:e}))}function Ws(e,t){t.updateState(t=>({...t,listId:e}))}function Gs(e,t=document){let n=t.querySelector(e);if(n)return n;let r=t instanceof ShadowRoot?t.host.children:t.children;for(let t=0;t<r.length;t+=1){let n=r[t];if(n.shadowRoot){let t=Gs(e,n.shadowRoot);if(t)return t}let i=Gs(e,n);if(i)return i}return null}function Ks(e,t){let n=t.getState(),r=n.listId?Gs(`#${n.listId}`):null,i=r?.querySelector(`[data-selected]`),a=r?.querySelectorAll(`[data-action]`)??[],o=ln(e===-1?a.length-1:e===a.length?0:e,0,a.length-1);return i?.removeAttribute(`data-selected`),a[o]?.scrollIntoView({block:`nearest`}),a[o]?.setAttribute(`data-selected`,`true`),Us(o,t),o}function qs(e){return Ks(e.getState().selected+1,e)}function Js(e){return Ks(e.getState().selected-1,e)}function Ys(e){Gs(`#${e.getState().listId} [data-selected]`)?.click()}function Xs(e,t){let n=t.getState();return n.registeredActions.add(e),()=>{n.registeredActions.delete(e)}}function Zs(e,t){zs(()=>({query:e}),t),Promise.resolve().then(()=>{Ks(0,t),zs(e=>({empty:e.query.trim().length>0&&e.registeredActions.size===0||!1}),t)})}function Qs({clearQuery:e},t){t.updateState(t=>({...t,selected:-1,query:e?``:t.query,empty:e?!1:t.empty}))}var $s={open:Bs,close:Vs,toggle:Hs,updateState:zs,setSelectedAction:Us,setListId:Ws,selectAction:Ks,selectNextAction:qs,selectPreviousAction:Js,triggerSelectedAction:Ys,registerAction:Xs,setQuery:Zs,clearSpotlightState:Qs};function ec(){let e=Ls();return[e,{open:()=>Bs(e),close:()=>Vs(e),toggle:()=>Hs(e)}]}var[tc,nc]=ec(),{open:rc,close:ic,toggle:ac}=nc;function oc(e){let t=e;return t.group!==void 0&&Array.isArray(t.actions)}function sc(e){return Array.isArray(e)?e.map(e=>e.trim()).join(`,`).toLowerCase().trim():typeof e==`string`?e.toLowerCase().trim():``}function cc(e){return e.reduce((e,t)=>`actions`in t?[...e,...t.actions.map(e=>({...e,group:t.group}))]:[...e,t],[])}function lc(e){let t={},n=[];return e.forEach(e=>{e.group?(t[e.group]||(t[e.group]={pushed:!1,data:{group:e.group,actions:[]}}),t[e.group].data.actions.push(e),t[e.group].pushed||(t[e.group].pushed=!0,n.push(t[e.group].data))):n.push(e)}),n}var uc=(e,t)=>{let n=e.trim().toLowerCase(),r=[[],[]];return cc(t).forEach(e=>{e.label?.toLowerCase().includes(n)?r[0].push(e):(e.description?.toLowerCase().includes(n)||sc(e.keywords).includes(n))&&r[1].push(e)}),lc(r.flat())};function dc(e,t){if(!Array.isArray(e))return[];let n=0;return e.reduce((e,r)=>{if(n>=t)return e;if(oc(r)){let i=dc(r.actions,t-n);e.push({group:r.group,actions:i}),n+=i.length}else e.push(r),n+=1;return e},[])}var fc={root:`m_d2b315db`,content:`m_3cd250e0`,body:`m_d2abce9b`,search:`m_f366a061`,actionsList:`m_6e463822`,action:`m_d49bb8ef`,actionBody:`m_3d475731`,actionSection:`m_832642f6`,actionLabel:`m_6c2a1345`,actionDescription:`m_a6d9d78d`,empty:`m_82f78f74`,footer:`m_ddcaf054`,actionsGroup:`m_5a3e5f7b`},[pc,mc]=Cn(`Spotlight component was not found in tree`),hc={dimmedSections:!0,highlightQuery:!1},gc=y((e,t)=>{let{className:n,style:r,classNames:i,styles:a,id:o,description:s,label:c,leftSection:l,rightSection:u,children:d,dimmedSections:f,highlightQuery:p,highlightColor:m,closeSpotlightOnTrigger:h,onClick:g,onMouseDown:_,keywords:v,vars:y,...b}=M(`SpotlightAction`,hc,e),x=mc(),S={classNames:i,styles:a},C=p&&typeof c==`string`?(0,P.jsx)(Ht,{component:`span`,highlight:x.query,color:m,...x.getStyles(`actionLabel`,S),children:c}):(0,P.jsx)(`span`,{...x.getStyles(`actionLabel`,S),children:c});return(0,P.jsx)(te,{ref:t,"data-action":!0,...x.getStyles(`action`,{className:n,style:r,...S}),...b,onMouseDown:e=>{e.preventDefault(),_?.(e)},onClick:e=>{g?.(e),(h??x.closeOnActionTrigger)&&$s.close(x.store)},tabIndex:-1,children:d||(0,P.jsxs)(P.Fragment,{children:[l&&(0,P.jsx)(O,{component:`span`,mod:{position:`left`,dimmed:f},...x.getStyles(`actionSection`,S),children:l}),(0,P.jsxs)(`span`,{...x.getStyles(`actionBody`,S),children:[C,(0,P.jsx)(`span`,{...x.getStyles(`actionDescription`,S),children:s})]}),u&&(0,P.jsx)(O,{component:`span`,mod:{position:`right`,dimmed:f},...x.getStyles(`actionSection`,S),children:u})]})})});gc.classes=fc,gc.displayName=`@mantine/spotlight/SpotlightAction`;var _c=y((e,t)=>{let{className:n,style:r,styles:i,classNames:a,label:o,children:s,...c}=M(`SpotlightActionsGroup`,null,e);return(0,P.jsx)(O,{...mc().getStyles(`actionsGroup`,{className:n,style:r,classNames:a,styles:i}),ref:t,...c,__vars:{"--spotlight-label":`'${o?.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}'`},children:s})});_c.classes=fc,_c.displayName=`@mantine/core/SpotlightActionsGroup`;var vc=y((e,t)=>{let{className:n,style:r,id:i,children:a,vars:o,classNames:s,styles:c,...l}=M(`SpotlightActionsList`,null,e),u=mc(),d=`mantine-${(0,N.useId)().replace(/:/g,``)}`,f=i||d;return(0,N.useEffect)(()=>($s.setListId(f,u.store),()=>$s.setListId(``,u.store)),[]),(0,P.jsx)(Lt.Autosize,{...u.getStyles(`actionsList`,{className:n,style:r,classNames:s,styles:c}),ref:t,type:`scroll`,scrollbarSize:`var(--spotlight-actions-list-padding)`,offsetScrollbars:`y`,id:f,...l,children:a})});vc.classes=fc,vc.displayName=`@mantine/spotlight/SpotlightActionsList`;var yc=y((e,t)=>{let{className:n,style:r,classNames:i,styles:a,...o}=M(`SpotlightEmpty`,null,e);return(0,P.jsx)(O,{ref:t,...mc().getStyles(`empty`,{classNames:i,styles:a,className:n,style:r}),...o})});yc.classes=fc,yc.displayName=`@mantine/spotlight/SpotlightEmpty`;var bc=y((e,t)=>{let{className:n,style:r,classNames:i,styles:a,...o}=M(`SpotlightFooter`,null,e);return(0,P.jsx)(O,{ref:t,...mc().getStyles(`footer`,{className:n,classNames:i,style:r,styles:a}),...o})});bc.classes=fc,bc.displayName=`@mantine/spotlight/SpotlightFooter`;function xc(e,t){if(!e)return[];let n=()=>$s.open(t);return Array.isArray(e)?e.map(e=>[e,n]):[[e,n]]}var Sc={size:600,yOffset:80,zIndex:yn(`max`),overlayProps:{backgroundOpacity:.35,blur:7},transitionProps:{duration:200,transition:`pop`},store:tc,clearQueryOnClose:!0,closeOnActionTrigger:!0,shortcut:`mod + K`,maxHeight:400},Cc=y((e,t)=>{let n=M(`SpotlightRoot`,Sc,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,store:l,children:u,query:d,onQueryChange:f,transitionProps:p,clearQueryOnClose:m,shortcut:h,tagsToIgnore:g,triggerOnContentEditable:_,disabled:v,onSpotlightOpen:y,onSpotlightClose:b,forceOpened:x,closeOnActionTrigger:S,maxHeight:C,scrollable:w,attributes:E,...ee}=n,D=T(),{opened:O,query:te}=Rs(l),ne=typeof d==`string`?d:te,re=e=>{f?.(e),$s.setQuery(e,l)},ie=de({name:`Spotlight`,classes:fc,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:E});return bi(xc(h,l),g,_),Oe(()=>{O?y?.():b?.()},[O]),v?null:(0,P.jsx)(pc,{value:{getStyles:ie,query:ne,setQuery:re,store:l,closeOnActionTrigger:S},children:(0,P.jsx)(Ct,{ref:t,...ee,withCloseButton:!1,opened:O||!!x,padding:0,onClose:()=>$s.close(l),className:i,style:a,classNames:ze({theme:D,classNames:[fc,r],props:n,stylesCtx:void 0}),styles:ve({theme:D,styles:o,props:n,stylesCtx:void 0}),transitionProps:{...p,onExited:()=>{m&&re(``),$s.clearSpotlightState({clearQuery:m},l),p?.onExited?.()}},__vars:{"--spotlight-max-height":w?j(C):void 0},__staticSelector:`Spotlight`,"data-scrollable":w||void 0,children:u})})});Cc.classes=fc,Cc.displayName=`@mantine/spotlight/SpotlightRoot`;var wc={size:`lg`},Tc=y((e,t)=>{let{classNames:n,styles:r,onKeyDown:i,onChange:a,vars:o,value:s,...c}=M(`SpotlightSearch`,wc,e),l=mc(),u=l.getStyles(`search`),[d,f]=(0,N.useState)(!1),p=e=>{i?.(e),!d&&(e.nativeEvent.code===`ArrowDown`&&(e.preventDefault(),$s.selectNextAction(l.store)),e.nativeEvent.code===`ArrowUp`&&(e.preventDefault(),$s.selectPreviousAction(l.store)),(e.nativeEvent.code===`Enter`||e.nativeEvent.code===`NumpadEnter`)&&(e.preventDefault(),$s.triggerSelectedAction(l.store)))};return(0,P.jsx)(ue,{ref:t,classNames:[{input:u.className},n],styles:[{input:u.style},r],...c,value:s??l.query,onChange:e=>{l.setQuery(e.currentTarget.value),a?.(e)},onKeyDown:p,onCompositionStart:()=>f(!0),onCompositionEnd:()=>f(!1)})});Tc.classes=fc,Tc.displayName=`@mantine/spotlight/SpotlightSearch`;var Ec={size:600,yOffset:80,limit:1/0,zIndex:yn(`max`),overlayProps:{backgroundOpacity:.35,blur:7},transitionProps:{duration:200,transition:`pop`},store:tc,filter:uc,clearQueryOnClose:!0,closeOnActionTrigger:!0,shortcut:`mod + K`},Dc=y((e,t)=>{let{searchProps:n,filter:r,query:i,onQueryChange:a,actions:o,nothingFound:s,highlightQuery:c,limit:l,scrollAreaProps:u,...d}=M(`Spotlight`,Ec,e),[f,p]=Je({value:i,defaultValue:``,finalValue:``,onChange:a}),m=dc(r(f,o),l).map(e=>{if(oc(e)){let t=e.actions.map(({id:e,...t})=>(0,P.jsx)(gc,{highlightQuery:c,...t},e));return(0,P.jsx)(_c,{label:e.group,children:t},e.group)}return(0,P.jsx)(gc,{highlightQuery:c,...e},e.id)});return(0,P.jsxs)(Cc,{...d,query:f,onQueryChange:p,ref:t,children:[(0,P.jsx)(Tc,{...n}),m.length>0&&(0,P.jsx)(vc,{...u,children:m}),m.length===0&&s&&(0,P.jsx)(yc,{children:s})]})});Dc.classes=fc,Dc.displayName=`@mantine/spotlight/Spotlight`,Dc.Search=Tc,Dc.ActionsList=vc,Dc.Action=gc,Dc.Empty=yc,Dc.ActionsGroup=_c,Dc.Footer=bc,Dc.Root=Cc,Dc.open=nc.open,Dc.close=nc.close,Dc.toggle=nc.toggle;var Oc=on((0,N.forwardRef)((e,t)=>(0,P.jsx)(Dc.Action,{...e,ref:t,component:`a`}))),kc=e=>(0,P.jsx)(Oc,{preload:`intent`,...e}),Ac=({icon:e,label:t,className:n})=>(0,P.jsxs)(O,{style:{display:`flex`,alignItems:`center`},children:[(0,P.jsx)(Qt,{variant:`light`,size:30,children:(0,P.jsx)(e,{size:18})}),(0,P.jsx)(O,{ml:`md`,className:n,children:t})]}),jc=({link:e,children:t,matchRoute:n})=>{let r=pr(),i=(0,N.useMemo)(()=>e||!n?!1:r.some(e=>e.routeId.includes(n)),[n,r]);return e?(0,P.jsx)(Is,{to:e,underline:`never`,activeOptions:{exact:!0},children:({isActive:e})=>mn(t)?t({isActive:e}):t}):mn(t)?t({isActive:i}):t},Mc=(0,N.memo)(function({icon:e,label:t,initiallyOpened:n,links:r,link:i,matchRoute:a}){let o=Array.isArray(r),[s,c]=(0,N.useState)(n||!1),l=(o?r:[]).map(e=>(0,P.jsx)(Is,{className:`menu-link`,to:e.link,underline:`never`,activeProps:{style:{fontWeight:`bold`}},children:e.label},e.label));return(0,P.jsx)(jc,{link:i,matchRoute:a,children:({isActive:n})=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(te,{onClick:()=>c(e=>!e),className:`control`,children:(0,P.jsxs)(Ft,{justify:`space-between`,gap:0,children:[(0,P.jsx)(Ac,{icon:e,label:t,className:n?`font-bold`:``}),o&&(0,P.jsx)(On,{className:`chevron`,stroke:1.5,style:{transform:s?`rotate(-90deg)`:`none`}})]})})}),o?(0,P.jsx)(qt,{in:s,children:l}):null]})})}),Nc=e=>(0,P.jsx)(En,{type:`success`,size:`lg`,leftSection:(0,P.jsx)(ws,{size:19}),styles:{root:{cursor:`pointer`}},...e}),Pc=fn(Cs),Fc=fn(bs),Ic=fn(vs),Lc=fn(an),Rc=fn(_s),zc=({isFetching:e,refetch:t,label:n})=>(0,P.jsx)(En,{type:`error`,leftSection:(0,P.jsx)(Pc,{}),size:`lg`,rightSection:(0,P.jsx)(k,{variant:`transparent`,"aria-label":`Settings`,size:`sm`,color:`red`,loading:e,onClick:()=>t(),children:(0,P.jsx)(Xt,{})}),children:n}),Bc={error:e=>Hr.error(`Error`,{description:e}),success:e=>Hr.success(`Operación exitosa`,{description:e}),warning:e=>Hr.warning(`Advertencia`,{description:e}),info:e=>Hr.warning(`Información`,{description:e})},Vc=rn(`/_auth/(concepts)/forte/`)({component:tn(()=>Dn(()=>import(`./forte-DJXpVECK.js`),__vite__mapDeps([0,1,2,3,4])),`component`),beforeLoad:()=>({crumb:`Forte`,iconName:`concept`}),head:()=>({meta:[{title:`Forte | SPN`}]})}),Hc={locale:`en`,firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:`–`,consistentWeeks:!1},Uc=(0,N.createContext)(Hc);function Wc({settings:e,children:t}){return(0,P.jsx)(Uc.Provider,{value:{...Hc,...e},children:t})}var Gc=({title:e,fortnight:t,status:n,consecutive:r,error:i})=>{let a=i?`error`:`success`,o=t>0?`${t} - ${n}`:`Error`,s=(0,N.useMemo)(()=>r<0?`Invalido`:r===0?`Ordinaria`:`Complementaria ${r}`,[r]),c=(0,N.useMemo)(()=>i?(0,P.jsx)(vn,{type:`error`}):(0,P.jsx)(vn,{type:`success`}),[i]);return(0,P.jsx)(Ft,{justify:`center`,children:(0,P.jsxs)(un,{width:280,children:[(0,P.jsx)(un.Target,{children:(0,P.jsx)(Nc,{type:a,children:o})}),(0,P.jsx)(un.Dropdown,{children:(0,P.jsxs)(Mn,{align:`flex-start`,justify:`center`,gap:`md`,children:[(0,P.jsx)(h,{order:4,children:e}),(0,P.jsxs)(An,{spacing:`xs`,size:`sm`,center:!0,icon:c,children:[(0,P.jsxs)(An.Item,{children:[`Quincena: `,(0,P.jsx)(`span`,{className:`font-bold`,children:t})]}),(0,P.jsxs)(An.Item,{children:[`Estatus: `,(0,P.jsx)(`span`,{className:`font-bold`,children:n})]}),(0,P.jsxs)(An.Item,{children:[`Consecutivo: `,(0,P.jsx)(`span`,{className:`font-bold`,children:s})]}),i&&(0,P.jsxs)(An.Item,{children:[`Error: `,i]})]})]})})]})})},Kc=()=>{let{data:e,refetch:t,isFetching:n}=Ut(Sn.fortnight());return e.error||!e?.online?(0,P.jsx)(zc,{isFetching:n,refetch:t,label:`SIAPSEP Offline`}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Gc,{...e.ordinaryFortnight,consecutive:0,title:`Ultima Nomina Ordinaria del Control Proceso - SIAPSEP`}),(0,P.jsx)(Gc,{...e.currentFortnight,title:`Nomina Actual de Control Proceso - SIAPSEP`})]})},qc=rn(`/_auth/`)({component:tn(()=>Dn(()=>import(`./_auth-DdULM07j.js`),__vite__mapDeps([5,1])),`component`)}),Jc=()=>[{label:`Dashboard`,icon:ys,link:qc.to},{label:`Conceptos`,icon:Ss,initiallyOpened:!1,matchRoute:gn?.id?.replace(gn.path,``)??``,links:[{label:`Reintegros`,link:gn.to},{label:`Forte`,link:Vc.to}]}],Yc=({title:e,description:t,keywords:n,image:r})=>[{title:e},{name:`description`,content:t},{name:`keywords`,content:n},{name:`twitter:title`,content:e},{name:`twitter:description`,content:t},{name:`twitter:creator`,content:`@tannerlinsley`},{name:`twitter:site`,content:`@tannerlinsley`},{name:`og:type`,content:`website`},{name:`og:title`,content:e},{name:`og:description`,content:t},...r?[{name:`twitter:image`,content:r},{name:`twitter:card`,content:`summary_large_image`},{name:`og:image`,content:r}]:[]],Xc=()=>{let e=(0,N.useMemo)(()=>Jc(),[]),t=pr();return(0,P.jsx)(P.Fragment,{children:(0,N.useMemo)(()=>{let n=t.length>0?t[0].routeId:``;return e.map(e=>(0,N.createElement)(Mc,{...e,key:e.label,initiallyOpened:e?.matchRoute?n.includes(e.matchRoute):!1}))},[])})},Zc=[{id:`home`,label:`Dashboard`,description:`Ver informacion completa acerca del estado actual del sistema`,to:`/`,leftSection:(0,P.jsx)(Fc,{size:24,stroke:1.5}),group:`home`},{id:`refund`,label:`Reintegros`,description:`Ver el estado de los reintegros (concepto 19)`,to:`/refund`,leftSection:(0,P.jsx)(Ic,{size:24,stroke:1.5}),group:`conceptos`},{id:`forte`,label:`Forte`,description:`Ver el estado del forte (concepto 21)`,to:`/forte`,leftSection:(0,P.jsx)(Ic,{size:24,stroke:1.5}),group:`conceptos`}];function Qc(){let[e,t]=(0,N.useState)(``),n=(0,N.useMemo)(()=>{let t=Zc.filter(t=>t.label?.toLowerCase().includes(e.toLowerCase().trim())||t.description?.toLowerCase().includes(e.toLowerCase().trim())).slice(0,5).reduce((e,t)=>(e[t.group]||(e[t.group]=[]),e[t.group].push(t),e),{});return Object.keys(t).map(e=>(0,P.jsx)(Dc.ActionsGroup,{label:e.trim().toUpperCase(),children:t[e].map(e=>(0,P.jsx)(kc,{label:e.label,description:e.description,leftSection:e.leftSection,highlightQuery:!0,to:e.to},e.id))},e))},[e]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Xe,{variant:`default`,visibleFrom:`sm`,onClick:nc.open,leftSection:(0,P.jsx)(Lc,{size:14,stroke:1.5}),rightSection:(0,P.jsx)(Ea,{size:`xs`,mr:`4`,children:`Ctrl + K`}),children:`Buscar`}),(0,P.jsx)(Xe,{variant:`default`,onClick:nc.open,hiddenFrom:`sm`,children:(0,P.jsx)(Lc,{size:14,stroke:1.5})}),(0,P.jsxs)(Dc.Root,{query:e,onQueryChange:t,children:[(0,P.jsx)(Dc.Search,{placeholder:`Buscar...`,leftSection:(0,P.jsx)(Lc,{stroke:1.5}),rightSection:(0,P.jsx)(Ea,{size:`xs`,mr:`4`,children:`esc`})}),(0,P.jsx)(Dc.ActionsList,{children:n.length>0?n:(0,P.jsx)(Dc.Empty,{children:(0,P.jsx)(wn,{query:e})})})]})]})}var $c=e=>(0,P.jsx)(Bt,{...e});function el({quantity:e=1}){return(0,P.jsx)(P.Fragment,{children:Array.from({length:e}).map((e,t)=>(0,P.jsx)($c,{height:20,radius:`xl`,width:100},t))})}var tl=({className:e,children:t})=>{let[n,{toggle:r}]=nn(),[i,{toggle:a}]=nn(!1);return(0,P.jsxs)(ta,{header:{height:{base:60,md:70,lg:80}},navbar:{width:{base:250},breakpoint:`sm`,collapsed:{mobile:!n,desktop:!i}},padding:`md`,children:[(0,P.jsx)(ta.Header,{children:(0,P.jsxs)(Ft,{h:`100%`,px:`md`,justify:`space-between`,children:[(0,P.jsx)(ia,{opened:n,onClick:r,hiddenFrom:`sm`,size:`sm`}),(0,P.jsx)(ia,{opened:i,onClick:a,visibleFrom:`sm`,size:`sm`}),(0,P.jsx)(Ft,{visibleFrom:`sm`,children:(0,P.jsx)(cl,{})}),(0,P.jsx)(Qc,{})]})}),(0,P.jsxs)(ta.Navbar,{p:`md`,children:[(0,P.jsx)(ta.Section,{hiddenFrom:`sm`,className:`flex flex-row flex-wrap gap-2 justify-start items-center`,children:(0,P.jsx)(cl,{})}),(0,P.jsx)(ta.Section,{grow:!0,my:`md`,component:Lt,children:(0,P.jsx)(Xc,{})}),(0,P.jsx)(ta.Section,{children:(0,P.jsx)(js,{})})]}),(0,P.jsx)(ta.Main,{className:e,children:t})]})};function nl(){let{user:e}=Zt({from:`__root__`});return e?(0,P.jsx)(tl,{className:`flex align-center justify-center`,children:(0,P.jsx)(rl,{className:`flex align-center justify-center`})}):(0,P.jsx)(rl,{className:`h-screen w-screen flex align-center justify-center`})}var rl=({className:e})=>{let t=kn();return(0,P.jsx)(sa,{className:e,mt:10,children:(0,P.jsxs)(To,{spacing:{base:40,sm:80},cols:{base:1,sm:2},children:[(0,P.jsx)(Mn,{hiddenFrom:`sm`,align:`center`,justify:`center`,children:(0,P.jsx)(Ca,{alt:`not found error`,src:Ps,h:200,w:`auto`,fit:`contain`})}),(0,P.jsxs)(Mn,{align:`center`,justify:`center`,children:[(0,P.jsx)(h,{children:`¡Buuu!`}),(0,P.jsx)(Tt,{c:`dimmed`,size:`lg`,children:`La página que desea acceder, no existe.`}),(0,P.jsxs)(Ft,{justify:`center`,children:[(0,P.jsx)(Xe,{leftSection:(0,P.jsx)(Fc,{}),size:`md`,mt:`xl`,onClick:()=>{t({to:`/`})},color:`gray`,children:`Ir al Inicio`}),(0,P.jsx)(Xe,{leftSection:(0,P.jsx)(Rc,{}),size:`md`,mt:`xl`,onClick:()=>{window.history.back()},children:`Regresar`})]})]}),(0,P.jsx)(Mn,{align:`center`,justify:`center`,children:(0,P.jsx)(Ca,{alt:`not found error`,src:Ps,visibleFrom:`sm`,w:`auto`,fit:`contain`,mah:300})})]})})},il={all:[`sicon_status`]},al={fortnight:()=>jn({queryKey:il.all,queryFn:et.controlSicon.getFortnight})},ol=({status:e,name:t,fortnight:n})=>(0,P.jsxs)(un,{width:280,children:[(0,P.jsx)(un.Target,{children:(0,P.jsxs)(Nc,{children:[n,` - SICON`]})}),(0,P.jsx)(un.Dropdown,{children:(0,P.jsxs)(Mn,{align:`flex-start`,justify:`center`,gap:`md`,children:[(0,P.jsx)(h,{order:4,children:`Quincena en Cargar tablas - SICON`}),(0,P.jsxs)(An,{spacing:`xs`,size:`sm`,center:!0,icon:(0,P.jsx)(vn,{type:`success`}),children:[(0,P.jsxs)(An.Item,{children:[`Quincena: `,(0,P.jsx)(`span`,{className:`font-bold`,children:n})]}),(0,P.jsxs)(An.Item,{children:[`Estatus: `,(0,P.jsx)(`span`,{className:`font-bold`,children:e})]}),(0,P.jsxs)(An.Item,{children:[`Nombre: `,(0,P.jsx)(`span`,{className:`font-bold`,children:t})]})]})]})})]}),sl=()=>{let{data:e,refetch:t,isFetching:n}=Ut(al.fortnight());return e.error||!e?.online||!e?.module?(0,P.jsx)(zc,{isFetching:n,refetch:t,label:`SICON Offline`}):(0,P.jsx)(ol,{...e.module})},cl=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(N.Suspense,{fallback:(0,P.jsx)(el,{quantity:1}),children:(0,P.jsx)(Kc,{})}),(0,P.jsx)(N.Suspense,{fallback:(0,P.jsx)(el,{quantity:1}),children:(0,P.jsx)(sl,{})})]}),ll=`/assets/app-D8OqMyWa.css`,ul=`/assets/links-groups-ClquSZxo.css`,dl=`/assets/sidebar-DwA_6InG.css`,fl=`bippy-0.3.34`,pl=Object.defineProperty,ml=Object.prototype.hasOwnProperty,hl=()=>{},gl=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},_l=(e=El())=>`getFiberRoots`in e,vl=!1,yl=void 0,bl=(e=El())=>vl?!0:(typeof e.inject==`function`&&(yl=e.inject.toString()),!!yl?.includes(`(injected)`)),xl=new Set,Sl=new Set,Cl=e=>{let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:fl,checkDCE:gl,hasUnsupportedRendererAttached:!1,inject(e){let i=++n;return t.set(i,e),Sl.add(e),r._instrumentationIsActive||(r._instrumentationIsActive=!0,xl.forEach(e=>e())),i},on:hl,onCommitFiberRoot:hl,onCommitFiberUnmount:hl,onPostCommitFiberRoot:hl,renderers:t,supportsFiber:!0,supportsFlight:!0};try{pl(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return r},set(t){if(t&&typeof t==`object`){let n=r.renderers;r=t,n.size>0&&(n.forEach((e,n)=>{Sl.add(e),t.renderers.set(n,e)}),wl(e))}}});let t=window.hasOwnProperty,n=!1;pl(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!n&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,n=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{wl(e)}return r},wl=e=>{e&&xl.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){let e=_l();if(t.checkDCE=gl,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=fl,t._instrumentationIsActive=!1,e||(t.on=hl),t.renderers.size){t._instrumentationIsActive=!0,xl.forEach(e=>e());return}let n=t.inject;bl(t)&&!e&&(vl=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let r=n(e);return Sl.add(e),t._instrumentationIsActive=!0,xl.forEach(e=>e()),r}}(t.renderers.size||t._instrumentationIsActive||bl())&&e?.()}catch{}},Tl=()=>ml.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),El=e=>Tl()?(wl(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Cl(e),Dl=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`)),Ol=()=>{try{Dl()&&El()}catch{}},kl=60111,Al=`Symbol(react.concurrent_mode)`,jl=`Symbol(react.async_mode)`,Ml=1,Nl=8,Pl=13366,Fl=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return typeof e.type==`string`}},Il=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},Ll=(e,t)=>{try{let n=e.dependencies,r=e.alternate?.dependencies;if(!n||!r||typeof n!=`object`||!(`firstContext`in n)||typeof r!=`object`||!(`firstContext`in r))return!1;let i=n.firstContext,a=r.firstContext;for(;i&&typeof i==`object`&&`memoizedValue`in i||a&&typeof a==`object`&&`memoizedValue`in a;){if(t(i,a)===!0)return!0;i=i?.next,a=a?.next}}catch{}return!1},Rl=(e,t)=>{try{let n=e.memoizedProps,r=e.alternate?.memoizedProps||{},i=new Set([...Object.keys(n),...Object.keys(r)]);for(let e of i){let i=r?.[e],a=n?.[e];if(t(e,a,i)===!0)return!0}}catch{}return!1},zl=e=>{let t=e.memoizedProps,n=e.alternate?.memoizedProps||{},r=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(r&Ml)===Ml;default:return e.alternate?n!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Bl=e=>(e.flags&(Pl|Nl))!==0||(e.subtreeFlags&(Pl|Nl))!==0,Vl=e=>{let t=[],n=[e];for(;n.length;){let e=n.pop();e&&(Fl(e)&&Bl(e)&&zl(e)&&t.push(e),e.child&&n.push(e.child),e.sibling&&n.push(e.sibling))}return t},Hl=e=>{switch(e.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t=typeof e.type==`object`&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t==`symbol`?t.toString():t){case kl:case Al:case jl:return!0;default:return!1}}}},Ul=e=>{let t=[],n=[];for(Fl(e)?t.push(e):e.child&&n.push(e.child);n.length;){let e=n.pop();if(!e)break;Fl(e)?t.push(e):e.child&&n.push(e.child),e.sibling&&n.push(e.sibling)}return t};function Wl(e,t,n=!1){return e&&t(e)instanceof Promise?Kl(e,t,n):Gl(e,t,n)}var Gl=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=Gl(r,t,n);if(e)return e;r=n?null:r.sibling}return null},Kl=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await Kl(r,t,n);if(e)return e;r=n?null:r.sibling}return null},ql=e=>{let t=e?.actualDuration??0,n=t,r=e?.child??null;for(;t>0&&r!=null;)n-=r.actualDuration??0,r=r.sibling;return{selfTime:n,totalTime:t}},L=e=>!!e.updateQueue?.memoCache,R=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?R(t.type||t.render):null},z=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=R(t);return r&&(r.displayName||r.name)||null},B=e=>{try{if(typeof e.version==`string`&&e.bundleType>0)return`development`}catch{}return`production`},Jl=()=>!!El()._instrumentationIsActive||_l()||bl(),Yl=0,Xl=new WeakMap,Zl=(e,t=Yl++)=>{Xl.set(e,t)},Ql=e=>{let t=Xl.get(e);return!t&&e.alternate&&(t=Xl.get(e.alternate)),t||(t=Yl++,Zl(e,t)),t},$l=(e,t,n)=>{let r=t;for(;r!=null;){if(Xl.has(r)||Ql(r),!Hl(r)&&zl(r)&&e(r,`mount`),r.tag===13)if(r.memoizedState!==null){let t=r.child,n=t?t.sibling:null;if(n){let t=n.child;t!==null&&$l(e,t,!1)}}else{let t=null;r.child!==null&&(t=r.child.child),t!==null&&$l(e,t,!1)}else r.child!=null&&$l(e,r.child,!0);r=n?r.sibling:null}},eu=(e,t,n,r)=>{if(Xl.has(t)||Ql(t),!n)return;Xl.has(n)||Ql(n);let i=t.tag===13,a=!Hl(t);a&&zl(t)&&e(t,`update`);let o=i&&n.memoizedState!==null,s=i&&t.memoizedState!==null;if(o&&s){let r=t.child?.sibling??null,i=n.child?.sibling??null;r!==null&&i!==null&&eu(e,r,i,t)}else if(o&&!s){let n=t.child;n!==null&&$l(e,n,!0)}else if(!o&&s){nu(e,n);let r=t.child?.sibling??null;r!==null&&$l(e,r,!0)}else if(t.child!==n.child){let n=t.child;for(;n;){if(n.alternate){let i=n.alternate;eu(e,n,i,a?t:r)}else $l(e,n,!1);n=n.sibling}}},tu=(e,t)=>{(t.tag===3||!Hl(t))&&e(t,`unmount`)},nu=(e,t)=>{let n=t.tag===13&&t.memoizedState!==null,r=t.child;for(n&&(r=(t.child?.sibling??null)?.child??null);r!==null;)r.return!==null&&(tu(e,r),nu(e,r)),r=r.sibling},ru=0,iu=new WeakMap,au=(e,t)=>{let n=`current`in e?e.current:e,r=iu.get(e);r||(r={id:ru++,prevFiber:null},iu.set(e,r));let{prevFiber:i}=r;if(!n)tu(t,n);else if(i!==null){let e=i&&i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0,r=n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0;!e&&r?$l(t,n,!1):e&&r?eu(t,n,n.alternate,null):e&&!r&&tu(t,n)}else $l(t,n,!0);r.prevFiber=n},ou=e=>{let t=El(e.onActive);t._instrumentationSource=e.name??fl;let n=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let r=(i,a,o)=>{t.onCommitFiberRoot===r&&(n?.(i,a,o),e.onCommitFiberRoot?.(i,a,o))};t.onCommitFiberRoot=r}let r=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let n=(i,a)=>{t.onCommitFiberUnmount===n&&(r?.(i,a),e.onCommitFiberUnmount?.(i,a))};t.onCommitFiberUnmount=n}let i=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let n=(r,a)=>{t.onPostCommitFiberRoot===n&&(i?.(r,a),e.onPostCommitFiberRoot?.(r,a))};t.onPostCommitFiberRoot=n}return t};Ol();var su,V,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu={},bu=[],xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Su=Array.isArray;function Cu(e,t){for(var n in t)e[n]=t[n];return e}function wu(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Tu(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?su.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Eu(e,o,r,i,null)}function Eu(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++cu,__i:-1,__u:0};return i==null&&V.vnode!=null&&V.vnode(a),a}function H(e){return e.children}function Du(e,t){this.props=e,this.context=t}function Ou(e,t){if(t==null)return e.__?Ou(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Ou(e):null}function ku(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Cu({},t);a.__v=t.__v+1,V.vnode&&V.vnode(a),Vu(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Ou(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Uu(r,a,i),t.__e=t.__=null,a.__e!=n&&Au(a)}}function Au(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Au(e)}function ju(e){(!e.__d&&(e.__d=!0)&&uu.push(e)&&!Mu.__r++||du!=V.debounceRendering)&&((du=V.debounceRendering)||fu)(Mu)}function Mu(){try{for(var e,t=1;uu.length;)uu.length>t&&uu.sort(pu),e=uu.shift(),t=uu.length,ku(e)}finally{uu.length=Mu.__r=0}}function Nu(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v=r&&r.__k||bu,y=t.length;for(c=Pu(n,t,v,c,y),d=0;d<y;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&v[p.__i]||yu,p.__i=d,g=Vu(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&Ku(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),(_=!!(4&p.__u))||f.__k===p.__k?c=Fu(p,c,e,_):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function Pu(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=Eu(null,o,null,null,null):Su(o)?o=e.__k[a]=Eu(H,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=Eu(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=Lu(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Ou(s)),qu(s,s));return r}function Fu(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Fu(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ou(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Iu(e,t){return t||=[],e==null||typeof e==`boolean`||(Su(e)?e.some(function(e){Iu(e,t)}):t.push(e)),t}function Lu(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>(u?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function Ru(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||xu.test(t)?n:n+`px`}function zu(e,t,n,r,i){var a,o;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||Ru(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||Ru(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(mu,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n.u=r.u:(n.u=hu,e.addEventListener(t,a?_u:gu,a)):e.removeEventListener(t,a?_u:gu,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function Bu(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=hu++;else if(t.t<n.u)return;return n(V.event?V.event(t):t)}}}function Vu(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=V.__b)&&u(t);n:if(typeof T==`function`)try{if(_=t.props,v=T.prototype&&T.prototype.render,y=(u=T.contextType)&&r[u.__c],b=u?y?y.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:(v?t.__c=d=new T(_,b):(t.__c=d=new Du(_,b),d.constructor=T,d.render=Ju),y&&y.sub(d),d.state||={},d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),v&&d.__s==null&&(d.__s=d.state),v&&T.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Cu({},d.__s)),Cu(d.__s,T.getDerivedStateFromProps(_,d.__s))),p=d.props,m=d.state,d.__v=t,f)v&&T.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),v&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(v&&T.getDerivedStateFromProps==null&&_!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,b),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&!1===d.shouldComponentUpdate(_,d.__s,b)){t.__v!=n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),bu.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d);break n}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,b),v&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,m,h)})}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,x=V.__r,S=0,v)d.state=d.__s,d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),bu.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++S<25);d.state=d.__s,d.getChildContext!=null&&(r=Cu(Cu({},r),d.getChildContext())),v&&!f&&d.getSnapshotBeforeUpdate!=null&&(h=d.getSnapshotBeforeUpdate(p,m)),C=u!=null&&u.type===H&&u.key==null?Wu(u.props.children):u,s=Nu(e,Su(C)?C:[C],t,n,r,i,a,o,s,c,l),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),g&&(d.__E=d.__=null)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else{for(w=a.length;w--;)wu(a[w]);Hu(t)}else t.__e=n.__e,t.__k=n.__k,e.then||Hu(t);V.__e(e,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Gu(n.__e,t,n,r,i,a,o,c,l);return(u=V.diffed)&&u(t),128&t.__u?void 0:s}function Hu(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Hu))}function Uu(e,t,n){for(var r=0;r<n.length;r++)Ku(n[r],n[++r],n[++r]);V.__c&&V.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){V.__e(e,t.__v)}})}function Wu(e){return typeof e!=`object`||!e||e.__b>0?e:Su(e)?e.map(Wu):Cu({},e)}function Gu(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props||yu,_=t.props,v=t.type;if(v==`svg`?i=`http://www.w3.org/2000/svg`:v==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(i,v,_.is&&_),s&&=(V.__m&&V.__m(t,a),!1),a=null}if(v==null)g===_||s&&e.data==_||(e.data=_);else{if(a&&=su.call(e.childNodes),!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`dangerouslySetInnerHTML`?d=p:l==`children`||l in _||l==`value`&&`defaultValue`in _||l==`checked`&&`defaultChecked`in _||zu(e,l,null,p,i);for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:s&&typeof p!=`function`||g[l]===p||zu(e,l,p,g[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),Nu(t.type==`template`?e.content:e,Su(f)?f:[f],t,n,r,v==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Ou(n,0),s,c),a!=null)for(l=a.length;l--;)wu(a[l]);s||(l=`value`,v==`progress`&&m==null?e.removeAttribute(`value`):m!=null&&(m!==e[l]||v==`progress`&&!m||v==`option`&&m!=g[l])&&zu(e,l,m,g[l],i),l=`checked`,h!=null&&h!=e[l]&&zu(e,l,h,g[l],i))}return e}function Ku(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){V.__e(e,n)}}function qu(e,t,n){var r,i;if(V.unmount&&V.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Ku(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){V.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&qu(r[i],t,n||typeof e.type!=`function`);n||wu(e.__e),e.__c=e.__=e.__e=void 0}function Ju(e,t,n){return this.constructor(e,n)}function Yu(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),V.__&&V.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],Vu(t,e=(!r&&n||t).__k=Tu(H,null,[e]),i||yu,yu,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?su.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),Uu(a,e,o)}function Xu(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,ju(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+ vu++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}su=bu.slice,V={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},cu=0,lu=function(e){return e!=null&&e.constructor===void 0},Du.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Cu({},this.state);typeof e==`function`&&(e=e(Cu({},n),this.props)),e&&Cu(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ju(this))},Du.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ju(this))},Du.prototype.render=H,uu=[],fu=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pu=function(e,t){return e.__v.__b-t.__v.__b},Mu.__r=0,mu=/(PointerCapture)$|Capture$/i,hu=0,gu=Bu(!1),_u=Bu(!0),vu=0;var Zu,Qu,$u,ed,td=0,nd=[],rd=V,id=rd.__b,ad=rd.__r,od=rd.diffed,sd=rd.__c,cd=rd.unmount,ld=rd.__;function ud(e,t){rd.__h&&rd.__h(Qu,e,td||t),td=0;var n=Qu.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function U(e){return td=1,dd(Sd,e)}function dd(e,t,n){var r=ud(Zu++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Sd(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Qu,!Qu.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a&&a.call(this,e,t,n)||o};Qu.__f=!0;var a=Qu.shouldComponentUpdate,o=Qu.componentWillUpdate;Qu.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Qu.shouldComponentUpdate=i}return r.__N||r.__}function W(e,t){var n=ud(Zu++,3);!rd.__s&&xd(n.__H,t)&&(n.__=e,n.u=t,Qu.__H.__h.push(n))}function fd(e,t){var n=ud(Zu++,4);!rd.__s&&xd(n.__H,t)&&(n.__=e,n.u=t,Qu.__h.push(n))}function G(e){return td=5,pd(function(){return{current:e}},[])}function pd(e,t){var n=ud(Zu++,7);return xd(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function md(e,t){return td=8,pd(function(){return e},t)}function hd(e){var t=Qu.context[e.__c],n=ud(Zu++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(Qu)),t.props.value):e.__}function gd(){for(var e;e=nd.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(yd),t.__h.some(bd),t.__h=[]}catch(n){t.__h=[],rd.__e(n,e.__v)}}}rd.__b=function(e){Qu=null,id&&id(e)},rd.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ld&&ld(e,t)},rd.__r=function(e){ad&&ad(e),Zu=0;var t=(Qu=e.__c).__H;t&&($u===Qu?(t.__h=[],Qu.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(yd),t.__h.some(bd),t.__h=[],Zu=0)),$u=Qu},rd.diffed=function(e){od&&od(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(nd.push(t)!==1&&ed===rd.requestAnimationFrame||((ed=rd.requestAnimationFrame)||vd)(gd)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),$u=Qu=null},rd.__c=function(e,t){t.some(function(e){try{e.__h.some(yd),e.__h=e.__h.filter(function(e){return!e.__||bd(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],rd.__e(n,e.__v)}}),sd&&sd(e,t)},rd.unmount=function(e){cd&&cd(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{yd(e)}catch(e){t=e}}),n.__H=void 0,t&&rd.__e(t,n.__v))};var _d=typeof requestAnimationFrame==`function`;function vd(e){var t,n=function(){clearTimeout(r),_d&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);_d&&(t=requestAnimationFrame(n))}function yd(e){var t=Qu,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Qu=t}function bd(e){var t=Qu;e.__c=e.__(),Qu=t}function xd(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function Sd(e,t){return typeof t==`function`?t(e):t}var Cd=Symbol.for(`preact-signals`);function wd(){if(Od>1)Od--;else{var e,t=!1;for((function(){var e=jd;for(jd=void 0;e!==void 0;)e.S.v===e.v&&(e.S.i=e.i),e=e.o})();Dd!==void 0;){var n=Dd;for(Dd=void 0,kd++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&Id(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(kd=0,Od--,t)throw e}}var Td=void 0;function K(e){var t=Td;Td=void 0;try{return e()}finally{Td=t}}var Ed,Dd=void 0,Od=0,kd=0,Ad=0,jd=void 0,Md=0;function Nd(e){if(Td!==void 0){var t=e.n;if(t===void 0||t.t!==Td)return t={i:0,S:e,p:Td.s,n:void 0,t:Td,e:void 0,x:void 0,r:t},Td.s!==void 0&&(Td.s.n=t),Td.s=t,e.n=t,32&Td.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Td.s,t.n=void 0,Td.s.n=t,Td.s=t),t}}function Pd(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Pd.prototype.brand=Cd,Pd.prototype.h=function(){return!0},Pd.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?K(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},Pd.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&K(function(){var e;(e=t.Z)==null||e.call(t)}))}},Pd.prototype.subscribe=function(e){var t=this;return Wd(function(){var n=t.value,r=Td;Td=void 0;try{e(n)}finally{Td=r}},{name:`sub`})},Pd.prototype.valueOf=function(){return this.value},Pd.prototype.toString=function(){return this.value+``},Pd.prototype.toJSON=function(){return this.value},Pd.prototype.peek=function(){var e=Td;Td=void 0;try{return this.value}finally{Td=e}},Object.defineProperty(Pd.prototype,`value`,{get:function(){var e=Nd(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(kd>100)throw Error(`Cycle detected`);(function(e){Od!==0&&kd===0&&e.l!==Ad&&(e.l=Ad,jd={S:e,v:e.v,i:e.i,o:jd})})(this),this.v=e,this.i++,Md++,Od++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{wd()}}}});function Fd(e,t){return new Pd(e,t)}function Id(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ld(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Rd(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function q(e,t){Pd.call(this,void 0),this.x=e,this.s=void 0,this.g=Md-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}q.prototype=new Pd,q.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Md))return!0;if(this.g=Md,this.f|=1,this.i>0&&!Id(this))return this.f&=-2,!0;var e=Td;try{Ld(this),Td=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return Td=e,Rd(this),this.f&=-2,!0},q.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Pd.prototype.S.call(this,e)},q.prototype.U=function(e){if(this.t!==void 0&&(Pd.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},q.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(q.prototype,`value`,{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=Nd(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function zd(e,t){return new q(e,t)}function Bd(e){var t=e.m;if(e.m=void 0,typeof t==`function`){Od++;var n=Td;Td=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Vd(e),t}finally{Td=n,wd()}}}function Vd(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Bd(e)}function Hd(e){if(Td!==this)throw Error(`Out-of-order effect`);Rd(this),Td=e,this.f&=-2,8&this.f&&Vd(this),wd()}function Ud(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Ed&&Ed.push(this)}Ud.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},Ud.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,Bd(this),Ld(this),Od++;var e=Td;return Td=this,Hd.bind(this,e)},Ud.prototype.N=function(){2&this.f||(this.f|=2,this.u=Dd,Dd=this)},Ud.prototype.d=function(){this.f|=8,1&this.f||Vd(this)},Ud.prototype.dispose=function(){this.d()};function Wd(e,t){var n=new Ud(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var Gd;function Kd(e,t){V[e]=t.bind(null,V[e]||function(){})}function qd(e){if(Gd){var t=Gd;Gd=void 0,t()}Gd=e&&e.S()}function Jd(e){var t=this,n=e.data,r=Xd(n);r.value=n;var i=pd(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}return t.__$u.c=function(){var e=t.__$u.S(),n=i.value;e(),lu(n)||t.base?.nodeType!==3?(t.__$f|=1,t.setState({})):t.base.data=n},zd(function(){var e=r.value.value;return e===0?0:!0===e?``:e||``})},[]);return i.value}Jd.displayName=`_st`,Object.defineProperties(Pd.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Jd},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Kd(`__b`,function(e,t){if(typeof t.type==`string`){var n,r=t.props;for(var i in r)if(i!==`children`){var a=r[i];a instanceof Pd&&(n||(t.__np=n={}),n[i]=a,r[i]=a.peek())}}e(t)}),Kd(`__r`,function(e,t){e(t),qd();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e){var t;return Wd(function(){t=this}),t.c=function(){r.__$f|=1,r.setState({})},t}())),qd(n)}),Kd(`__e`,function(e,t,n,r){qd(),e(t,n,r)}),Kd(`diffed`,function(e,t){qd();var n;if(typeof t.type==`string`&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var a=n.U;if(a)for(var o in a){var s=a[o];s!==void 0&&!(o in r)&&(s.d(),a[o]=void 0)}else n.U=a={};for(var c in r){var l=a[c],u=r[c];l===void 0?(l=Yd(n,c,u,i),a[c]=l):l.o(u,i)}}}e(t)});function Yd(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,a=Fd(n);return{o:function(e,t){a.value=e,r=t},d:Wd(function(){var n=a.value.value;r[t]!==n&&(r[t]=n,i?e[t]=n:n?e.setAttribute(t,n):e.removeAttribute(t))})}}Kd(`unmount`,function(e,t){if(typeof t.type==`string`){var n=t.__e;if(n){var r=n.U;if(r)for(var i in n.U=void 0,r){var a=r[i];a&&a.d()}}}else{var o=t.__c;if(o){var s=o.__$u;s&&(o.__$u=void 0,s.d())}}e(t)}),Kd(`__h`,function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)}),Du.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var n=this.__$u,r=n&&n.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u==`boolean`&&!0===this.u){if(!(r||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var a in e)if(a!==`__source`&&e[a]!==this.props[a])return!0;for(var o in this.props)if(!(o in e))return!0;return!1};function Xd(e){return pd(function(){return Fd(e)},[])}function Zd(e){var t=G(e);t.current=e,W(function(){return Wd(function(){return t.current()})},[])}function Qd(e,t){for(var n in t)e[n]=t[n];return e}function $d(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function ef(e,t){var n=t(),r=U({t:{__:n,u:t}}),i=r[0].t,a=r[1];return fd(function(){i.__=n,i.u=t,tf(i)&&a({t:i})},[e,n,t]),W(function(){return tf(i)&&a({t:i}),e(function(){tf(i)&&a({t:i})})},[e]),n}function tf(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function nf(e,t){this.props=e,this.context=t}function rf(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:$d(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Tu(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.__f=r.prototype.isReactComponent=!0,r.type=e,r}(nf.prototype=new Du).isPureReactComponent=!0,nf.prototype.shouldComponentUpdate=function(e,t){return $d(this.props,e)||$d(this.state,t)};var af=V.__b;V.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),af&&af(e)};var of=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911;function sf(e){function t(t){var n=Qd({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=of,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}var cf=V.__e;V.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}cf(e,t,n,r)};var lf=V.unmount;function uf(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=Qd({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return uf(e,t,n)})),e}function df(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return df(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ff(){this.__u=0,this.o=null,this.__b=null}function pf(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function mf(){this.i=null,this.l=null}V.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),lf&&lf(e)},(ff.prototype=new Du).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=pf(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=df(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},ff.prototype.componentWillUnmount=function(){this.o=[]},ff.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=uf(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&Tu(H,null,e.fallback);return i&&(i.__u&=-33),[Tu(H,null,t.__a?null:e.children),i]};var hf=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function gf(e){return this.getChildContext=function(){return e.context},e.children}function _f(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){Yu(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}Yu(Tu(gf,{context:t.context},e.__v),t.v)}function vf(e,t){var n=Tu(_f,{__v:e,h:t});return n.containerInfo=t,n}(mf.prototype=new Du).__a=function(e){var t=this,n=pf(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),hf(t,e,r)):i()};n?n(a):a()}},mf.prototype.render=function(e){this.i=null,this.l=new Map;var t=Iu(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},mf.prototype.componentDidUpdate=mf.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){hf(e,n,t)})};var yf=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,bf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xf=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Sf=/[A-Z0-9]/g,Cf=typeof document<`u`,wf=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)};Du.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(Du.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Tf=V.event;V.event=function(e){return Tf&&(e=Tf(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Ef={configurable:!0,get:function(){return this.class}},Df=V.vnode;V.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||Cf&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||wf(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:xf.test(a)&&(a=s):s=a=`oninput`:i&&bf.test(a)?a=a.replace(Sf,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=Iu(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=Iu(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,`className`,Ef)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=yf,Df&&Df(e)};var Of=V.__r;V.__r=function(e){Of&&Of(e),e.__c};var kf=V.diffed;V.diffed=function(e){kf&&kf(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value)};var Af=0;Array.isArray;function J(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Af,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return V.vnode&&V.vnode(l),l}Array.prototype.toSorted||Object.defineProperty(Array.prototype,`toSorted`,{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function jf(e,t){return t-e}function Mf(e){let t=e[0].name,n=e.length,r=Math.min(4,n);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}function Nf(e){let t=e[0].time;for(let n=1,r=e.length;n<r;n++)t+=e[n].time;return t}function Pf(e){for(let t=0,n=e.length;t<n;t++)if(e[t].forget)return!0;return!1}var Ff=e=>{let t=``,n=new Map;for(let t of e){let{forget:e,time:r,aggregatedCount:i,name:a}=t;n.has(i)||n.set(i,[]);let o=n.get(i);o&&o.push({name:a,forget:e,time:r??0})}let r=Array.from(n.keys()).sort(jf),i=[],a=0;for(let e of r){let t=n.get(e);if(!t)continue;let r=Mf(t),o=Nf(t),s=Pf(t);a+=o,t.length>4&&(r+=`…`),e>1&&(r+=` \xD7 ${e}`),s&&(r=`\u2728${r}`),i.push(r)}return t=i.join(`, `),t.length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null};function If(e,t){return e===t||e!==e&&t!==t}var Lf=e=>{let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination);let r={type:`sine`,freq:[392,600],duration:.3,gain:.12},i=r.freq,a=r.duration/i.length;i.forEach((n,r)=>{t.frequency.setValueAtTime(n,e.currentTime+r*a)}),t.type=r.type,n.gain.setValueAtTime(r.gain,e.currentTime),n.gain.setTargetAtTime(0,e.currentTime+r.duration*.7,.05),t.start(),t.stop(e.currentTime+r.duration)},Rf=e=>new Promise(t=>{let n=new Map,r=new IntersectionObserver(e=>{for(let t of e){let e=t.target,r=t.boundingClientRect;n.set(e,r)}r.disconnect(),t(n)});for(let t of e)r.observe(t)}),zf={mount:1,update:2,unmount:4},Bf=sf(({size:e=15,name:t,fill:n=`currentColor`,stroke:r=`currentColor`,className:i,externalURL:a=``,style:o},s)=>{let c=Array.isArray(e)?e[0]:e,l=Array.isArray(e)?e[1]||e[0]:e,u=`${a}#${t}`;return J(`svg`,{ref:s,width:`${c}px`,height:`${l}px`,fill:n,stroke:r,className:i,style:{...o,minWidth:`${c}px`,maxWidth:`${c}px`,minHeight:`${l}px`,maxHeight:`${l}px`},children:[J(`title`,{children:t}),J(`use`,{href:u})]})}),Y=24,Vf={width:550,height:350,initialHeight:400},Hf=240,Uf=`react-scan-widget-settings-v2`,Wf=typeof window<`u`;function Gf(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Gf(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Kf(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Gf(e))&&(r&&(r+=` `),r+=t);return r}var qf=`-`,Jf=e=>{let t=Qf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{let n=e.split(qf);return n[0]===``&&n.length!==1&&n.shift(),Yf(n,t)||Zf(e)},getConflictingClassGroupIds:(e,t)=>{let i=n[e]||[];return t&&r[e]?[...i,...r[e]]:i}}},Yf=(e,t)=>{if(e.length===0)return t.classGroupId;let n=e[0],r=t.nextPart.get(n),i=r?Yf(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;let a=e.join(qf);return t.validators.find(({validator:e})=>e(a))?.classGroupId},Xf=/^\[(.+)\]$/,Zf=e=>{if(Xf.test(e)){let t=Xf.exec(e)[1],n=t?.substring(0,t.indexOf(`:`));if(n)return`arbitrary..`+n}},Qf=e=>{let{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return np(Object.entries(e.classGroups),n).forEach(([e,n])=>{$f(n,r,e,t)}),r},$f=(e,t,n,r)=>{e.forEach(e=>{if(typeof e==`string`){let r=e===``?t:ep(t,e);r.classGroupId=n;return}if(typeof e==`function`){if(tp(e)){$f(e(r),t,n,r);return}t.validators.push({validator:e,classGroupId:n});return}Object.entries(e).forEach(([e,i])=>{$f(i,ep(t,e),n,r)})})},ep=(e,t)=>{let n=e;return t.split(qf).forEach(e=>{n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n},tp=e=>e.isThemeGetter,np=(e,t)=>t?e.map(([e,n])=>[e,n.map(e=>typeof e==`string`?t+e:typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,n])=>[t+e,n])):e)]):e,rp=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=new Map,r=new Map,i=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(e){let t=n.get(e);if(t!==void 0)return t;if((t=r.get(e))!==void 0)return i(e,t),t},set(e,t){n.has(e)?n.set(e,t):i(e,t)}}},ip=`!`,ap=e=>{let{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,o=e=>{let n=[],o=0,s=0,c;for(let l=0;l<e.length;l++){let u=e[l];if(o===0){if(u===i&&(r||e.slice(l,l+a)===t)){n.push(e.slice(s,l)),s=l+a;continue}if(u===`/`){c=l;continue}}u===`[`?o++:u===`]`&&o--}let l=n.length===0?e:e.substring(s),u=l.startsWith(ip);return{modifiers:n,hasImportantModifier:u,baseClassName:u?l.substring(1):l,maybePostfixModifierPosition:c&&c>s?c-s:void 0}};return n?e=>n({className:e,parseClassName:o}):o},op=e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(e=>{e[0]===`[`?(t.push(...n.sort(),e),n=[]):n.push(e)}),t.push(...n.sort()),t},sp=e=>({cache:rp(e.cacheSize),parseClassName:ap(e),...Jf(e)}),cp=/\s+/,lp=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],o=e.trim().split(cp),s=``;for(let e=o.length-1;e>=0;--e){let t=o[e],{modifiers:c,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:d}=n(t),f=!!d,p=r(f?u.substring(0,d):u);if(!p){if(!f){s=t+(s.length>0?` `+s:s);continue}if(p=r(u),!p){s=t+(s.length>0?` `+s:s);continue}f=!1}let m=op(c).join(`:`),h=l?m+ip:m,g=h+p;if(a.includes(g))continue;a.push(g);let _=i(p,f);for(let e=0;e<_.length;++e){let t=_[e];a.push(h+t)}s=t+(s.length>0?` `+s:s)}return s};function up(){let e=0,t,n,r=``;for(;e<arguments.length;)(t=arguments[e++])&&(n=dp(t))&&(r&&(r+=` `),r+=n);return r}var dp=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=dp(e[r]))&&(n&&(n+=` `),n+=t);return n};function fp(e,...t){let n,r,i,a=o;function o(o){return n=sp(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)}function s(e){let t=r(e);if(t)return t;let a=lp(e,n);return i(e,a),a}return function(){return a(up.apply(null,arguments))}}var pp=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},mp=/^\[(?:([a-z-]+):)?(.+)\]$/i,hp=/^\d+\/\d+$/,gp=new Set([`px`,`full`,`screen`]),_p=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yp=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,bp=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Sp=e=>wp(e)||gp.has(e)||hp.test(e),Cp=e=>Ip(e,`length`,Lp),wp=e=>!!e&&!Number.isNaN(Number(e)),Tp=e=>Ip(e,`number`,wp),Ep=e=>!!e&&Number.isInteger(Number(e)),Dp=e=>e.endsWith(`%`)&&wp(e.slice(0,-1)),X=e=>mp.test(e),Op=e=>_p.test(e),kp=new Set([`length`,`size`,`percentage`]),Ap=e=>Ip(e,kp,Rp),jp=e=>Ip(e,`position`,Rp),Mp=new Set([`image`,`url`]),Np=e=>Ip(e,Mp,Bp),Pp=e=>Ip(e,``,zp),Fp=()=>!0,Ip=(e,t,n)=>{let r=mp.exec(e);return r?r[1]?typeof t==`string`?r[1]===t:t.has(r[1]):n(r[2]):!1},Lp=e=>vp.test(e)&&!yp.test(e),Rp=()=>!1,zp=e=>bp.test(e),Bp=e=>xp.test(e),Vp=fp(()=>{let e=pp(`colors`),t=pp(`spacing`),n=pp(`blur`),r=pp(`brightness`),i=pp(`borderColor`),a=pp(`borderRadius`),o=pp(`borderSpacing`),s=pp(`borderWidth`),c=pp(`contrast`),l=pp(`grayscale`),u=pp(`hueRotate`),d=pp(`invert`),f=pp(`gap`),p=pp(`gradientColorStops`),m=pp(`gradientColorStopPositions`),h=pp(`inset`),g=pp(`margin`),_=pp(`opacity`),v=pp(`padding`),y=pp(`saturate`),b=pp(`scale`),x=pp(`sepia`),S=pp(`skew`),C=pp(`space`),w=pp(`translate`),T=()=>[`auto`,`contain`,`none`],E=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],ee=()=>[`auto`,X,t],D=()=>[X,t],O=()=>[``,Sp,Cp],te=()=>[`auto`,wp,X],ne=()=>[`bottom`,`center`,`left`,`left-bottom`,`left-top`,`right`,`right-bottom`,`right-top`,`top`],re=()=>[`solid`,`dashed`,`dotted`,`double`,`none`],ie=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],k=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`],A=()=>[``,`0`,X],ae=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],oe=()=>[wp,X];return{cacheSize:500,separator:`:`,theme:{colors:[Fp],spacing:[Sp,Cp],blur:[`none`,``,Op,X],brightness:oe(),borderColor:[e],borderRadius:[`none`,``,`full`,Op,X],borderSpacing:D(),borderWidth:O(),contrast:oe(),grayscale:A(),hueRotate:oe(),invert:A(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[Dp,Cp],inset:ee(),margin:ee(),opacity:oe(),padding:D(),saturate:oe(),scale:oe(),sepia:A(),skew:oe(),space:D(),translate:D()},classGroups:{aspect:[{aspect:[`auto`,`square`,`video`,X]}],container:[`container`],columns:[{columns:[Op]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:[...ne(),X]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[`auto`,Ep,X]}],basis:[{basis:ee()}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`wrap`,`wrap-reverse`,`nowrap`]}],flex:[{flex:[`1`,`auto`,`initial`,`none`,X]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:[`first`,`last`,`none`,Ep,X]}],"grid-cols":[{"grid-cols":[Fp]}],"col-start-end":[{col:[`auto`,{span:[`full`,Ep,X]},X]}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":[Fp]}],"row-start-end":[{row:[`auto`,{span:[Ep,X]},X]}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":[`auto`,`min`,`max`,`fr`,X]}],"auto-rows":[{"auto-rows":[`auto`,`min`,`max`,`fr`,X]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:[`normal`,...k()]}],"justify-items":[{"justify-items":[`start`,`end`,`center`,`stretch`]}],"justify-self":[{"justify-self":[`auto`,`start`,`end`,`center`,`stretch`]}],"align-content":[{content:[`normal`,...k(),`baseline`]}],"align-items":[{items:[`start`,`end`,`center`,`baseline`,`stretch`]}],"align-self":[{self:[`auto`,`start`,`end`,`center`,`stretch`,`baseline`]}],"place-content":[{"place-content":[...k(),`baseline`]}],"place-items":[{"place-items":[`start`,`end`,`center`,`baseline`,`stretch`]}],"place-self":[{"place-self":[`auto`,`start`,`end`,`center`,`stretch`]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":[C]}],"space-y-reverse":[`space-y-reverse`],w:[{w:[`auto`,`min`,`max`,`fit`,`svw`,`lvw`,`dvw`,X,t]}],"min-w":[{"min-w":[X,t,`min`,`max`,`fit`]}],"max-w":[{"max-w":[X,t,`none`,`full`,`min`,`max`,`fit`,`prose`,{screen:[Op]},Op]}],h:[{h:[X,t,`auto`,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],"min-h":[{"min-h":[X,t,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],"max-h":[{"max-h":[X,t,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],size:[{size:[X,t,`auto`,`min`,`max`,`fit`]}],"font-size":[{text:[`base`,Op,Cp]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`,Tp]}],"font-family":[{font:[Fp]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`,X]}],"line-clamp":[{"line-clamp":[`none`,wp,Tp]}],leading:[{leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`,Sp,X]}],"list-image":[{"list-image":[`none`,X]}],"list-style-type":[{list:[`none`,`disc`,`decimal`,X]}],"list-style-position":[{list:[`inside`,`outside`]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...re(),`wavy`]}],"text-decoration-thickness":[{decoration:[`auto`,`from-font`,Sp,Cp]}],"underline-offset":[{"underline-offset":[`auto`,Sp,X]}],"text-decoration-color":[{decoration:[e]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:D()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,X]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,X]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:[...ne(),jp]}],"bg-repeat":[{bg:[`no-repeat`,{repeat:[``,`x`,`y`,`round`,`space`]}]}],"bg-size":[{bg:[`auto`,`cover`,`contain`,Ap]}],"bg-image":[{bg:[`none`,{"gradient-to":[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Np]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...re(),`hidden`]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":[`divide-y-reverse`],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:re()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[``,...re()]}],"outline-offset":[{"outline-offset":[Sp,X]}],"outline-w":[{outline:[Sp,Cp]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:O()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[Sp,Cp]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:[``,`inner`,`none`,Op,Pp]}],"shadow-color":[{shadow:[Fp]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...ie(),`plus-lighter`,`plus-darker`]}],"bg-blend":[{"bg-blend":ie()}],filter:[{filter:[``,`none`]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":[``,`none`,Op,X]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":[``,`none`]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[`none`,`all`,``,`colors`,`opacity`,`shadow`,`transform`,X]}],duration:[{duration:oe()}],ease:[{ease:[`linear`,`in`,`out`,`in-out`,X]}],delay:[{delay:oe()}],animate:[{animate:[`none`,`spin`,`ping`,`pulse`,`bounce`,X]}],transform:[{transform:[``,`gpu`,`none`]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Ep,X]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:[`center`,`top`,`top-right`,`right`,`bottom-right`,`bottom`,`bottom-left`,`left`,`top-left`,X]}],accent:[{accent:[`auto`,e]}],appearance:[{appearance:[`none`,`auto`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,X]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":[`none`,`auto`]}],resize:[{resize:[`none`,`y`,`x`,``]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,X]}],fill:[{fill:[e,`none`]}],"stroke-w":[{stroke:[Sp,Cp,Tp]}],stroke:[{stroke:[e,`none`]}],sr:[`sr-only`,`not-sr-only`],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-s`,`border-w-e`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-s`,`border-color-e`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]}}}),Z=(...e)=>Vp(Kf(e));typeof navigator<`u`&&navigator.userAgent.includes(`Firefox`);var Hp=(e,t)=>{let n=0;return r=>{let i=Date.now();if(i-n>=t)return n=i,e(r)}},Up=e=>{if(!Wf)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Wp=(e,t)=>{if(Wf)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Gp=24,Kp=12,qp=e=>{if(!e)return{name:`Unknown`,wrappers:[],wrapperTypes:[]};let{tag:t,type:n,elementType:r}=e,i=z(n),a=[],o=[];if(L(e)||t===15||t===14||n?.$$typeof===Symbol.for(`react.memo`)||r?.$$typeof===Symbol.for(`react.memo`)){let t=L(e);o.push({type:`memo`,title:t?`This component has been auto-memoized by the React Compiler.`:`Memoized component that skips re-renders if props are the same`,compiler:t})}if(t===Gp&&o.push({type:`lazy`,title:`Lazily loaded component that supports code splitting`}),t===13&&o.push({type:`suspense`,title:`Component that can suspend while content is loading`}),t===Kp&&o.push({type:`profiler`,title:`Component that measures rendering performance`}),typeof i==`string`){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let n=t.match(e);if(n?.[1]&&n?.[2])a.unshift(n[1]),t=n[2];else break}i=t}return{name:i||`Unknown`,wrappers:a,wrapperTypes:o}},Jp=Fd(!1),Yp=Fd(null),Xp={corner:`bottom-right`,dimensions:{isFullWidth:!1,isFullHeight:!1,width:Vf.width,height:Vf.height,position:{x:Y,y:Y}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:Vf.width,height:Vf.height,position:{x:Y,y:Y}},componentsTree:{width:Hf}},Q=Fd((()=>{let e=Up(Uf);return e?{corner:e.corner??Xp.corner,dimensions:{isFullWidth:!1,isFullHeight:!1,width:Vf.width,height:Vf.height,position:e.dimensions.position??Xp.dimensions.position},lastDimensions:e.dimensions??Xp.dimensions,componentsTree:e.componentsTree??Xp.componentsTree}:(Wp(Uf,{corner:Xp.corner,dimensions:Xp.dimensions,lastDimensions:Xp.lastDimensions,componentsTree:Xp.componentsTree}),Xp)})()),Zp=()=>{if(!Wf)return;let{dimensions:e}=Q.value,{width:t,height:n,position:r}=e;Q.value={...Q.value,dimensions:{isFullWidth:t>=window.innerWidth-Y*2,isFullHeight:n>=window.innerHeight-Y*2,width:t,height:n,position:r}}},Qp=Fd({view:`none`});function $p(){return!1}function em(e){function t(t){return this.shouldComponentUpdate=$p,Tu(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var tm=e=>{let{count:t,getScrollElement:n,estimateSize:r,overscan:i=5}=e,[a,o]=U(0),[s,c]=U(0),l=G(),u=G(null),d=G(null),f=r(),p=md(e=>{u.current&&c(e?.[0]?.contentRect.height??u.current.getBoundingClientRect().height)},[]),m=md(()=>{d.current!==null&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{p(),d.current=null})},[p]);W(()=>{let e=n();if(!e)return;u.current=e;let t=()=>{u.current&&o(u.current.scrollTop)};p(),l.current||=new ResizeObserver(()=>{m()}),l.current.observe(e),e.addEventListener(`scroll`,t,{passive:!0});let r=new MutationObserver(m);return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener(`scroll`,t),l.current&&l.current.disconnect(),r.disconnect(),d.current!==null&&cancelAnimationFrame(d.current)}},[n,p,m]);let h=pd(()=>{let e=Math.floor(a/f),n=Math.ceil(s/f);return{start:Math.max(0,e-i),end:Math.min(t,e+n+i)}},[a,f,s,t,i]);return{virtualItems:pd(()=>{let e=[];for(let t=h.start;t<h.end;t++)e.push({key:t,index:t,start:t*f});return e},[h,f]),totalSize:t*f,scrollTop:a,containerHeight:s}};Up(`react-scann-pinned`);var nm=e=>{let t=[],n=e;for(;n;){let e=n.elementType,r=typeof e==`function`?e.displayName||e.name:typeof e==`string`?e:`Unknown`,i=n.index===void 0?``:`[${n.index}]`;t.unshift(`${r}${i}`),n=n.return??null}return t.join(`::`)},rm=new WeakMap,im=(e,t)=>{let n=t.bind(null,e);return document.addEventListener(`scroll`,n,{passive:!0,capture:!0}),()=>{document.removeEventListener(`scroll`,n,{capture:!0})}},am={activeFlashes:new Map,create(e){let t=e.querySelector(`.react-scan-flash-overlay`),n=t instanceof HTMLElement?t:(()=>{let t=document.createElement(`div`);t.className=`react-scan-flash-overlay`,e.appendChild(t);let n=im(e,()=>{e.querySelector(`.react-scan-flash-overlay`)&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t})(),r=rm.get(n);r&&(clearTimeout(r),rm.delete(n)),requestAnimationFrame(()=>{n.style.transition=`none`,n.style.opacity=`0.9`;let t=setTimeout(()=>{n.style.transition=`opacity 150ms ease-out`,n.style.opacity=`0`;let t=setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);let t=this.activeFlashes.get(e);t?.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e),rm.delete(n)},150);rm.set(n,t)},300);rm.set(n,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let n=rm.get(t.overlay);n&&(clearTimeout(n),rm.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},om=1e3,sm={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},cm=Fd(sm),lm=Fd(0),um=[],dm=null,fm=()=>{if(um.length===0)return;let e=[...um],{updates:t,totalUpdates:n,currentIndex:r,isViewingHistory:i}=cm.value,a=[...t],o=n;for(let{update:t}of e)a.length>=om&&a.shift(),a.push(t),o++;let s=Math.max(0,o-om),c;c=i?r===n-1?a.length-1:r===0?0:s===0?r:r-1:a.length-1;let l=e[e.length-1];cm.value={...cm.value,latestFiber:l.fiber,updates:a,totalUpdates:o,windowOffset:s,currentIndex:c,isViewingHistory:i},um=um.slice(e.length)},pm={showTimeline:()=>{cm.value={...cm.value,isVisible:!0}},hideTimeline:()=>{cm.value={...cm.value,isVisible:!1,currentIndex:cm.value.updates.length-1}},updateFrame:(e,t)=>{cm.value={...cm.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{cm.value={...cm.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(um.push({update:e,fiber:t}),!dm){let e=()=>{fm(),dm=null,um.length>0&&(dm=setTimeout(e,96))};dm=setTimeout(e,96)}},reset:()=>{dm&&=(clearTimeout(dm),null),um=[],cm.value=sm}},mm=Fd({query:``,matches:[],currentMatchIndex:-1}),hm=Fd(!1),gm=(e,t=0,n=null)=>e.reduce((e,r,i)=>{let a=r.element?nm(r.fiber):`${n}-${i}`,o=r.fiber?.type?fg(r.fiber):void 0,s={...r,depth:t,nodeId:a,parentId:n,fiber:r.fiber,renderData:o};return e.push(s),r.children?.length&&e.push(...gm(r.children,t+1,a)),e},[]),_m=e=>e.reduce((e,t)=>Math.max(e,t.depth),0),vm=(e,t)=>{if(t<=0)return 24;let n=Math.max(0,e-Hf);if(n<24)return 0;let r=Math.min(n*.3,t*24)/t;return Math.max(0,Math.min(24,r))},ym=[`memo`,`forwardRef`,`lazy`,`suspense`],bm=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let n=[],r=t[1].split(`,`);for(let e of r){let t=e.trim().toLowerCase();t&&n.push(t)}return n},xm=e=>{if(e.length===0)return!1;for(let t of e){let e=!1;for(let n of ym)if(n.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0},Sm=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(let n of e){let e=!1;for(let r of t)if(r.type.toLowerCase().includes(n)){e=!0;break}if(!e)return!1}return!0},Cm=(e,t)=>pd(()=>{let{query:n,matches:r}=t,i=r.some(t=>t.nodeId===e.nodeId),a=bm(n)||[],o=n?n.replace(/\[.*?\]/,``).trim():``;if(!n||!i)return{highlightedText:J(`span`,{className:`truncate`,children:e.label}),typeHighlight:!1};let s=!0;if(a.length>0)if(!e.fiber)s=!1;else{let{wrapperTypes:t}=qp(e.fiber);s=Sm(a,t)}let c=J(`span`,{className:`truncate`,children:e.label});if(o)try{if(o.startsWith(`/`)&&o.endsWith(`/`)){let t=o.slice(1,-1),n=RegExp(`(${t})`,`i`),r=e.label.split(n);c=J(`span`,{className:`tree-node-search-highlight`,children:r.map((t,i)=>n.test(t)?J(`span`,{className:Z(`regex`,{start:n.test(t)&&i===0,middle:n.test(t)&&i%2==1,end:n.test(t)&&i===r.length-1,"!ml-0":i===1}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),n=o.toLowerCase(),r=t.indexOf(n);r>=0&&(c=J(`span`,{className:`tree-node-search-highlight`,children:[e.label.slice(0,r),J(`span`,{className:`single`,children:e.label.slice(r,r+o.length)}),e.label.slice(r+o.length)]}))}}catch{}return{highlightedText:c,typeHighlight:s&&a.length>0}},[e.label,e.nodeId,e.fiber,t]),wm=e=>e>0?e<.1-2**-52?`< 0.1`:e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:`0`,Tm=({node:e,nodeIndex:t,hasChildren:n,isCollapsed:r,handleTreeNodeClick:i,handleTreeNodeToggle:a,searchValue:o})=>{let s=G(null),c=G(e.renderData?.renderCount??0),{highlightedText:l,typeHighlight:u}=Cm(e,o);W(()=>{let t=e.renderData?.renderCount,n=s.current;!n||!c.current||!t||c.current===t||(n.classList.remove(`count-flash`),n.offsetWidth,n.classList.add(`count-flash`),c.current=t)},[e.renderData?.renderCount]);let d=pd(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:n,renderCount:r}=e.renderData;return r?J(`span`,{className:Z(`flex items-center gap-x-0.5 ml-1.5`,`text-[10px] text-neutral-400`),children:J(`span`,{ref:s,title:`Self time: ${wm(t)}ms
Total time: ${wm(n)}ms`,className:`count-badge`,children:[`×`,r]})}):null},[e.renderData]),f=pd(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=qp(e.fiber),n=t[0];return J(`span`,{className:Z(`flex items-center gap-x-1`,`text-[10px] text-neutral-400 tracking-wide`,`overflow-hidden`),children:[n&&J(H,{children:[J(`span`,{title:n?.title,className:Z(`rounded py-[1px] px-1`,`bg-neutral-700 text-neutral-300`,`truncate`,n.type===`memo`&&`bg-[#8e61e3] text-white`,u&&`bg-yellow-300 text-black`),children:n.type},n.type),n.compiler&&J(`span`,{className:`text-yellow-300 ml-1`,children:`✨`})]}),t.length>1&&`\xD7${t.length}`,d]})},[e.fiber,u,d]);return J(`button`,{type:`button`,title:e.title,"data-index":t,className:Z(`flex items-center gap-x-1`,`pl-1 pr-2`,`w-full h-7`,`text-left`,`rounded`,`cursor-pointer select-none`),onClick:i,children:[J(`button`,{type:`button`,"data-index":t,onClick:a,className:Z(`w-6 h-6 flex items-center justify-center`,`text-left`),children:n&&J(Bf,{name:`icon-chevron-right`,size:12,className:Z(`transition-transform`,!r&&`rotate-90`)})}),l,f]})},Em=()=>{let e=G(null),t=G(null),n=G(null),r=G(null),i=G(null),a=G(0),o=G(!1),s=G(!1),c=G(null),[l,u]=U([]),[d,f]=U(new Set),[p,m]=U(void 0),[h,g]=U(mm.value),_=pd(()=>{let e=[],t=l,n=new Map(t.map(e=>[e.nodeId,e]));for(let r of t){let t=!0,i=r;for(;i.parentId;){let e=n.get(i.parentId);if(!e)break;if(d.has(e.nodeId)){t=!1;break}i=e}t&&e.push(r)}return e},[d,l]),{virtualItems:v,totalSize:y}=tm({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),b=md(t=>{o.current=!0,r.current?.blur(),hm.value=!0;let{parentCompositeFiber:n}=ch(t);if(!n)return;$.inspectState.value={kind:`focused`,focusedDomElement:t,fiber:n};let i=_.findIndex(e=>e.element===t);if(i!==-1){m(i);let t=i*28,n=e.current;if(n){let e=n.clientHeight,r=n.scrollTop;(t<r||t+28>r+e)&&n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),x=md(e=>{let t=e.currentTarget,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].element;r&&b(r)},[_,b]),S=md(e=>{f(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),C=md(e=>{e.stopPropagation();let t=e.target,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].nodeId;S(r)},[_,S]),w=md(t=>{n.current?.classList.remove(`!border-red-500`);let r=[];if(!t){mm.value={query:t,matches:r,currentMatchIndex:-1};return}if(t.includes(`[`)&&!t.includes(`]`)&&t.length>t.indexOf(`[`)+1){n.current?.classList.add(`!border-red-500`);return}let i=bm(t)||[];if(t.includes(`[`)&&!xm(i)){n.current?.classList.add(`!border-red-500`);return}let a=t.replace(/\[.*?\]/,``).trim(),o=/^\/.*\/$/.test(a),s=e=>!1;if(a.startsWith(`/`)&&!o&&a.length>1){n.current?.classList.add(`!border-red-500`);return}if(o)try{let e=a.slice(1,-1),t=new RegExp(e,`i`);s=e=>t.test(e)}catch{n.current?.classList.add(`!border-red-500`);return}else if(a){let e=a.toLowerCase();s=t=>t.toLowerCase().includes(e)}for(let e of l){let t=!0;if(a&&(t=s(e.label)),t&&i.length>0)if(!e.fiber)t=!1;else{let{wrapperTypes:n}=qp(e.fiber);t=Sm(i,n)}t&&r.push(e)}if(mm.value={query:t,matches:r,currentMatchIndex:r.length>0?0:-1},r.length>0){let t=r[0],n=_.findIndex(e=>e.nodeId===t.nodeId);if(n!==-1){let t=n*28,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}}},[l,_]),T=md(e=>{let t=e.currentTarget;t&&w(t.value)},[w]),E=md(t=>{let{matches:n,currentMatchIndex:r}=mm.value;if(n.length===0)return;let i=t===`next`?(r+1)%n.length:(r-1+n.length)%n.length;mm.value={...mm.value,currentMatchIndex:i};let a=n[i],o=_.findIndex(e=>e.nodeId===a.nodeId);if(o!==-1){m(o);let t=o*28,n=e.current;if(n){let e=n.clientHeight;n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),ee=md(n=>{if(t.current&&(t.current.style.width=`${n}px`),e.current){e.current.style.width=`${n}px`;let t=vm(n,a.current);e.current.style.setProperty(`--indentation-size`,`${t}px`)}},[]),D=md(e=>{if(!c.current)return;let t=Q.value.dimensions.width,n=Math.floor(t-Hf/2);c.current.classList.remove(`cursor-ew-resize`,`cursor-w-resize`,`cursor-e-resize`),e<=Hf?c.current.classList.add(`cursor-w-resize`):e>=n?c.current.classList.add(`cursor-e-resize`):c.current.classList.add(`cursor-ew-resize`)},[]),O=md(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty(`pointer-events`,`none`),s.current=!0;let n=t.clientX,r=e.current.offsetWidth,i=Q.value.dimensions.width,a=Math.floor(i-Hf/2);D(r);let o=e=>{let t=r+(n-e.clientX);D(t),ee(Math.min(a,Math.max(Hf,t)))},c=()=>{e.current&&(e.current.style.removeProperty(`pointer-events`),document.removeEventListener(`pointermove`,o),document.removeEventListener(`pointerup`,c),Q.value={...Q.value,componentsTree:{...Q.value.componentsTree,width:e.current.offsetWidth}},Wp(Uf,Q.value),s.current=!1)};document.addEventListener(`pointermove`,o),document.addEventListener(`pointerup`,c)},[ee,D]);W(()=>{if(!e.current)return;let t=e.current.offsetWidth;return D(t),Q.subscribe(()=>{e.current&&D(e.current.offsetWidth)})},[D]);let te=md(()=>{o.current=!1},[]);return W(()=>{let t=!0,n=e=>{let t=new Map,n=[];for(let{element:n,name:r,fiber:i}of e){if(!n)continue;let e=r,{name:a,wrappers:o}=qp(i);a&&(e=o.length>0?`${o.join(`(`)}(${a})${`)`.repeat(o.length)}`:a),t.set(n,{label:a||r,title:e,children:[],element:n,fiber:i})}for(let{element:r,depth:i}of e){if(!r)continue;let e=t.get(r);if(e)if(i===0)n.push(e);else{let n=r.parentElement;for(;n;){let r=t.get(n);if(r){r.children=r.children||[],r.children.push(e);break}n=n.parentElement}}}return n},r=()=>{let r=i.current;if(!r)return;let o=n(ph());if(o.length>0){let n=gm(o);if(a.current=_m(n),ee(Q.value.componentsTree.width),u(n),t){t=!1;let i=n.findIndex(e=>e.element===r);if(i!==-1){let t=i*28,n=e.current;n&&setTimeout(()=>{n.scrollTo({top:t,behavior:`instant`})},96)}}}},o=$.inspectState.subscribe(e=>{if(e.kind===`focused`){if(hm.value)return;w(``),i.current=e.focusedDomElement,r()}}),c=0,l=lm.subscribe(()=>{if($.inspectState.value.kind===`focused`){if(cancelAnimationFrame(c),s.current)return;c=requestAnimationFrame(()=>{hm.value=!1,r()})}});return()=>{o(),l(),mm.value={query:``,matches:[],currentMatchIndex:-1}}},[]),W(()=>{let e=e=>{if(o.current&&p)switch(e.key){case`ArrowUp`:if(e.preventDefault(),e.stopPropagation(),p>0){let e=_[p-1];e?.element&&b(e.element)}return;case`ArrowDown`:if(e.preventDefault(),e.stopPropagation(),p<_.length-1){let e=_[p+1];e?.element&&b(e.element)}return;case`ArrowLeft`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}case`ArrowRight`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}}};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p,_,b,S]),W(()=>mm.subscribe(g),[]),W(()=>Q.subscribe(e=>{t.current?.style.setProperty(`transition`,`width 0.1s`),ee(e.componentsTree.width),setTimeout(()=>{t.current?.style.removeProperty(`transition`)},500)}),[]),J(`div`,{className:`react-scan-components-tree flex`,children:[J(`div`,{ref:c,onPointerDown:O,className:`relative resize-v-line`,children:J(`span`,{children:J(Bf,{name:`icon-ellipsis`,size:18})})}),J(`div`,{ref:t,className:`flex flex-col h-full`,children:[J(`div`,{className:`p-2 border-b border-[#1e1e1e]`,children:J(`div`,{ref:n,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:Z(`relative`,`flex items-center gap-x-1 px-2`,`rounded`,`border border-transparent`,`focus-within:border-[#454545]`,`bg-[#1e1e1e] text-neutral-300`,`transition-colors`,`whitespace-nowrap`,`overflow-hidden`),children:[J(Bf,{name:`icon-search`,size:12,className:` text-neutral-500`}),J(`div`,{className:`relative flex-1 h-7 overflow-hidden`,children:J(`input`,{ref:r,type:`text`,value:mm.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{e.key===`Escape`&&e.currentTarget.blur(),mm.value.matches.length&&(e.key===`Enter`&&e.shiftKey?E(`prev`):e.key===`Enter`&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),b(mm.value.matches[mm.value.currentMatchIndex].element),e.currentTarget.focus()):E(`next`)))},onChange:T,className:`absolute inset-y-0 inset-x-1`,placeholder:`Component name, /regex/, or [type]`})}),mm.value.query?J(H,{children:[J(`span`,{className:`flex items-center gap-x-0.5 text-xs text-neutral-500`,children:[mm.value.currentMatchIndex+1,`|`,mm.value.matches.length]}),!!mm.value.matches.length&&J(H,{children:[J(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),E(`prev`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:J(Bf,{name:`icon-chevron-right`,className:`-rotate-90`,size:12})}),J(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),E(`next`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:J(Bf,{name:`icon-chevron-right`,className:`rotate-90`,size:12})})]}),J(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),w(``)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:J(Bf,{name:`icon-close`,size:12})})]}):!!l.length&&J(`span`,{className:`text-xs text-neutral-500`,children:l.length})]})}),J(`div`,{className:`flex-1 overflow-hidden`,children:J(`div`,{ref:e,onPointerLeave:te,className:`tree h-full overflow-auto will-change-transform`,children:J(`div`,{className:`relative w-full`,style:{height:y},children:v.map(e=>{let t=_[e.index];if(!t)return null;let n=$.inspectState.value.kind===`focused`&&t.element===$.inspectState.value.focusedDomElement,r=e.index===p;return J(`div`,{className:Z(`absolute left-0 w-full overflow-hidden`,`text-neutral-400 hover:text-neutral-300`,`bg-transparent hover:bg-[#5f3f9a]/20`,(n||r)&&`text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40`),style:{top:e.start,height:28},children:J(`div`,{className:`w-full h-full`,style:{paddingLeft:`calc(${t.depth} * var(--indentation-size))`},children:J(Tm,{node:t,nodeIndex:e.index,hasChildren:!!t.children?.length,isCollapsed:d.has(t.nodeId),handleTreeNodeClick:x,handleTreeNodeToggle:C,searchValue:h})})},t.nodeId)})})})})]})]})},Dm=rf(({text:e,children:t,onCopy:n,className:r,iconSize:i=14})=>{let[a,o]=U(!1);W(()=>{if(a){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[a]);let s=md(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),n?.(!0,e)},()=>{n?.(!1,e)})},[e,n]),c=J(`button`,{onClick:s,type:`button`,className:Z(`z-10`,`flex items-center justify-center`,`hover:text-dev-pink-400`,`transition-colors duration-200 ease-in-out`,`cursor-pointer`,`size-[${i}px]`,r),children:J(Bf,{name:`icon-${a?`check`:`copy`}`,size:[i],className:Z(a&&`text-green-500`)})});return t?t({ClipboardIcon:c,onClick:s}):c}),Om=({length:e,expanded:t,onToggle:n,isNegative:r})=>J(`div`,{className:`flex items-center gap-1`,children:[J(`button`,{type:`button`,onClick:n,className:`flex items-center p-0 opacity-50`,children:J(Bf,{name:`icon-chevron-right`,size:12,className:Z(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),J(`span`,{children:[`Array(`,e,`)`]})]}),km=({value:e,path:t,isNegative:n})=>{let[r,i]=U(!1);if(!(typeof e==`object`&&e&&!(e instanceof Date)))return J(`div`,{className:`flex items-center gap-1`,children:[J(`span`,{className:`text-gray-500`,children:[t,`:`]}),J(`span`,{className:`truncate`,children:bh(e)})]});let a=Object.entries(e);return J(`div`,{className:`flex flex-col`,children:[J(`div`,{className:`flex items-center gap-1`,children:[J(`button`,{type:`button`,onClick:()=>i(!r),className:`flex items-center p-0 opacity-50`,children:J(Bf,{name:`icon-chevron-right`,size:12,className:Z(`transition-[color,transform]`,n?`text-[#f87171]`:`text-[#4ade80]`,r&&`rotate-90`)})}),J(`span`,{className:`text-gray-500`,children:[t,`:`]}),!r&&J(`span`,{className:`truncate`,children:e instanceof Date?bh(e):`{${Object.keys(e).join(`, `)}}`})]}),r&&J(`div`,{className:`pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:a.map(([e,t])=>J(km,{value:t,path:e,isNegative:n},e))})]})},Am=({value:e,expanded:t,onToggle:n,isNegative:r})=>{let{value:i,error:a}=xh(e);return a?J(`span`,{className:`text-gray-500 font-italic`,children:a}):typeof i==`object`&&i&&!(i instanceof Promise)?Array.isArray(i)?J(`div`,{className:`flex flex-col gap-1 relative`,children:[J(Om,{length:i.length,expanded:t,onToggle:n,isNegative:r}),t&&J(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:i.map((e,t)=>J(km,{value:e,path:t.toString(),isNegative:r},t.toString()))}),J(Dm,{text:mh(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>J(H,{children:e})})]}):J(`div`,{className:`flex items-start gap-1 relative`,children:[J(`button`,{type:`button`,onClick:n,className:Z(`flex items-center`,`p-0 mt-0.5 mr-1`,`opacity-50`),children:J(Bf,{name:`icon-chevron-right`,size:12,className:Z(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),J(`div`,{className:`flex-1`,children:t?J(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:Object.entries(i).map(([e,t])=>J(km,{value:t,path:e,isNegative:r},e))}):J(`span`,{children:bh(i)})}),J(Dm,{text:mh(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>J(H,{children:e})})]}):J(`span`,{children:bh(i)})},jm=50;Fd({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Mm=e=>{switch(e.kind){case`initialized`:return e.changes.currentValue;case`partially-initialized`:return e.value}},Nm=(e,t)=>{for(let n of e){let e=t.get(n.name);if(e){t.set(e.name,{count:e.count+1,currentValue:n.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:n.prevValue});continue}t.set(n.name,{count:1,currentValue:n.value,id:n.name,lastUpdated:Date.now(),name:n.name,previousValue:n.prevValue})}},Pm=(e,t)=>{for(let n of e){let e=t.contextChanges.get(n.contextType);if(e){if(If(Mm(e),n.value))continue;if(e.kind===`partially-initialized`){t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.value}});continue}t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.changes.currentValue}});continue}t.contextChanges.set(n.contextType,{kind:`partially-initialized`,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,value:n.value})}},Fm=e=>{let t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(e=>{Pm(e.contextChanges,t),Nm(e.stateChanges,t.stateChanges),Nm(e.propsChanges,t.propsChanges)}),t},Im=(e,t)=>{let n=new Map;return e.forEach((e,t)=>{n.set(t,e)}),t.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}n.set(t,{count:r.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue})}),n},Lm=(e,t)=>{let n=new Map;return e.contextChanges.forEach((e,t)=>{n.set(t,e)}),t.contextChanges.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}if(Mm(e)!==Mm(r))switch(r.kind){case`initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}});return}case`partially-initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}});return}}}),n},Rm=(e,t)=>({contextChanges:Lm(e,t),propsChanges:Im(e.propsChanges,t.propsChanges),stateChanges:Im(e.stateChanges,t.stateChanges)}),zm=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>e.kind===`initialized`).reduce((e,t)=>e+t.changes.count,0),Bm=e=>{let t=G({queue:[]}),[n,r]=U({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i=$.inspectState.value.kind===`focused`?$.inspectState.value.fiber:null,a=i?Ql(i):null;return W(()=>{let n=setInterval(()=>{t.current.queue.length!==0&&(r(n=>{let r=Rm(n,Fm(t.current.queue)),i=zm(n),a=zm(r)-i;return e?.onChangeUpdate?.(a),r}),t.current.queue=[])},jm);return()=>{clearInterval(n)}},[i]),W(()=>{if(!a)return;let e=e=>{t.current?.queue.push(e)},n=$.changesListeners.get(a);return n||(n=[],$.changesListeners.set(a,n)),n.push(e),()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],$.changesListeners.set(a,$.changesListeners.get(a)?.filter(t=>t!==e)??[])}},[a]),W(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[a]),n},Vm=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(Sh(e))return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},Hm=rf(()=>{let[e,t]=U(!0),n=Bm(),[r,i]=U(!1),a=zm(n)>0;W(()=>{if(!r&&a){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[r,a]);let o=new Map(Array.from(n.contextChanges.entries()).filter(([,e])=>e.kind===`initialized`).map(([e,t])=>[e,t.kind===`partially-initialized`?null:t.changes])),s=$.inspectState.value.kind===`focused`?$.inspectState.value.fiber:null;if(s)return J(H,{children:[J(Wm,{}),J(`div`,{className:`overflow-hidden h-full flex flex-col gap-y-2`,children:[J(`div`,{className:`flex flex-col gap-2 px-3 pt-2`,children:[J(`span`,{className:`text-sm font-medium text-[#888]`,children:[`Why did`,` `,J(`span`,{className:`text-[#A855F7]`,children:z(s)}),` `,`render?`]}),!a&&J(`div`,{className:`text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4`,children:[J(`div`,{children:`No changes detected since selecting`}),J(`div`,{children:`The props, state, and context changes within your component will be reported here`})]})]}),J(`div`,{className:Z(`flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full`),children:[J(Km,{changes:n.propsChanges,title:`Changed Props`,isExpanded:e}),J(Km,{renderName:e=>Um(e,z(R(s))??`Unknown Component`),changes:n.stateChanges,title:`Changed State`,isExpanded:e}),J(Km,{changes:o,title:`Changed Context`,isExpanded:e})]})]})]})}),Um=(e,t)=>{if(Number.isNaN(Number(e)))return e;let n=Number.parseInt(e);return J(`span`,{className:`truncate`,children:[J(`span`,{className:`text-white`,children:[n,(e=>{let t=e%10,n=e%100;if(n>=11&&n<=13)return`th`;switch(t){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}})(n),` hook`,` `]}),J(`span`,{style:{color:`#666`},children:[`called in `,J(`i`,{className:`text-[#A855F7] truncate`,children:t})]})]})},Wm=rf(()=>{let e=G(null),t=G(null),n=G(null),r=G({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return W(()=>{let i=Hp(()=>{let r=[];e.current?.dataset.flash===`true`&&r.push(e.current),t.current?.dataset.flash===`true`&&r.push(t.current),n.current?.dataset.flash===`true`&&r.push(n.current);for(let e of r)e.classList.remove(`count-flash-white`),e.offsetWidth,e.classList.add(`count-flash-white`)},400);return cm.subscribe(a=>{if(!e.current||!t.current||!n.current)return;let{currentIndex:o,updates:s}=a,c=s[o];!c||o===0||(i(),r.current={isPropsChanged:(c.props?.changes?.size??0)>0,isStateChanged:(c.state?.changes?.size??0)>0,isContextChanged:(c.context?.changes?.size??0)>0},e.current.dataset.flash!==`true`&&(e.current.dataset.flash=r.current.isPropsChanged.toString()),t.current.dataset.flash!==`true`&&(t.current.dataset.flash=r.current.isStateChanged.toString()),n.current.dataset.flash!==`true`&&(n.current.dataset.flash=r.current.isContextChanged.toString()))})},[]),J(`button`,{type:`button`,className:Z(`react-section-header`,`overflow-hidden`,`max-h-0`,`transition-[max-height]`),children:J(`div`,{className:Z(`flex-1 react-scan-expandable`),children:J(`div`,{className:`overflow-hidden`,children:J(`div`,{className:`flex items-center whitespace-nowrap`,children:[J(`div`,{className:`flex items-center gap-x-2`,children:`What changed?`}),J(`div`,{className:Z(`ml-auto`,`change-scope`,`transition-opacity duration-300 delay-150`),children:[J(`div`,{ref:e,children:`props`}),J(`div`,{ref:t,children:`state`}),J(`div`,{ref:n,children:`context`})]})]})})})})}),Gm=e=>e,Km=rf(({title:e,changes:t,renderName:n=Gm})=>{let[r,i]=U(new Set),[a,o]=U(new Set),s=Array.from(t.entries());return t.size===0?null:J(`div`,{children:[J(`div`,{className:`text-xs text-[#888] mb-1.5`,children:e}),J(`div`,{className:`flex flex-col gap-2`,children:s.map(([t,s])=>{let c=a.has(String(t)),{value:l,error:u}=Vm(s.previousValue),{value:d,error:f}=Vm(s.currentValue),p=gh(l,d);return J(`div`,{children:[J(`button`,{onClick:()=>{o(e=>{let n=new Set(e);return n.has(String(t))?n.delete(String(t)):n.add(String(t)),n})},className:`flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs`,children:J(`div`,{className:`flex items-center gap-1.5 flex-1`,children:[J(Bf,{name:`icon-chevron-right`,size:12,className:Z(`text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,{"rotate-90":c})}),J(`div`,{className:`whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5`,children:[n(s.name),J(Xm,{count:s.count,isFunction:typeof s.currentValue==`function`,showWarning:p.changes.length===0,forceFlash:!0})]})]})}),J(`div`,{className:Z(`react-scan-expandable`,{"react-scan-expanded":c}),children:J(`div`,{className:`pl-3 text-xs font-mono border-l-1 border-[#333]`,children:J(`div`,{className:`flex flex-col gap-0.5`,children:u||f?J(qm,{currError:f,prevError:u}):p.changes.length>0?J(Jm,{change:s,diff:p,expandedFns:r,renderName:n,setExpandedFns:i,title:e}):J(Ym,{currValue:d,entryKey:t,expandedFns:r,prevValue:l,setExpandedFns:i})})})})]},t)})})]})}),qm=({prevError:e,currError:t})=>J(H,{children:[e&&J(`div`,{className:`text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic`,children:e}),t&&J(`div`,{className:`text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5`,children:t})]}),Jm=({diff:e,title:t,renderName:n,change:r,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,s)=>{let{value:c,error:l}=Vm(o.prevValue),{value:u,error:d}=Vm(o.currentValue),f=typeof c==`function`||typeof u==`function`,p;return t===`Props`&&(p=o.path.length>0?`${n(String(r.name))}.${_h(o.path)}`:void 0),t===`State`&&o.path.length>0&&(p=`state.${_h(o.path)}`),p||=_h(o.path),J(`div`,{className:Z(`flex flex-col gap-y-1`,s<e.changes.length-1&&`mb-4`),children:[p&&J(`div`,{className:`text-[#666] text-[10px]`,children:p}),J(`button`,{type:`button`,className:Z(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#f87171] bg-[#2a1515]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${_h(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[J(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),J(`span`,{className:`flex-1 whitespace-nowrap font-mono`,children:l?J(`span`,{className:`italic text-[#f87171]`,children:l}):f?J(`div`,{className:`flex gap-1 items-start flex-col`,children:[J(`div`,{className:`flex gap-1 items-start w-full`,children:[J(`span`,{className:`flex-1 max-h-40`,children:yh(c,i.has(`${_h(o.path)}-prev`))}),typeof c==`function`&&J(Dm,{text:c.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>J(H,{children:e})})]}),c?.toString()===u?.toString()&&J(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):J(Am,{value:c,expanded:i.has(`${_h(o.path)}-prev`),onToggle:()=>{let e=`${_h(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),J(`button`,{type:`button`,className:Z(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#4ade80] bg-[#1a2a1a]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${_h(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[J(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),J(`span`,{className:`flex-1 whitespace-pre-wrap font-mono`,children:d?J(`span`,{className:`italic text-[#4ade80]`,children:d}):f?J(`div`,{className:`flex gap-1 items-start flex-col`,children:[J(`div`,{className:`flex gap-1 items-start w-full`,children:[J(`span`,{className:`flex-1`,children:yh(u,i.has(`${_h(o.path)}-current`))}),typeof u==`function`&&J(Dm,{text:u.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>J(H,{children:e})})]}),c?.toString()===u?.toString()&&J(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):J(Am,{value:u,expanded:i.has(`${_h(o.path)}-current`),onToggle:()=>{let e=`${_h(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]})]},`${p}-${r.name}-${s}`)}),Ym=({prevValue:e,currValue:t,entryKey:n,expandedFns:r,setExpandedFns:i})=>J(H,{children:[J(`div`,{className:`group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded`,children:[J(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),J(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:J(Am,{value:e,expanded:r.has(`${String(n)}-prev`),onToggle:()=>{let e=`${String(n)}-prev`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),J(`div`,{className:`group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5`,children:[J(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),J(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:J(Am,{value:t,expanded:r.has(`${String(n)}-current`),onToggle:()=>{let e=`${String(n)}-current`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]}),typeof t==`object`&&!!t&&J(`div`,{className:`text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1`,children:[J(Bf,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),J(`span`,{children:`Reference changed but objects are structurally the same`})]})]}),Xm=({count:e,forceFlash:t,isFunction:n,showWarning:r})=>{let i=G(!0),a=G(null),o=G(e);return W(()=>{let t=a.current;!t||o.current===e||(t.classList.remove(`count-flash`),t.offsetWidth,t.classList.add(`count-flash`),o.current=e)},[e]),W(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{a.current?.classList.add(`count-flash-white`),e=setTimeout(()=>{a.current?.classList.remove(`count-flash-white`)},300)},500);return()=>{clearTimeout(e)}}},[t]),J(`div`,{ref:a,className:`count-badge`,children:[r&&J(Bf,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),n&&J(Bf,{name:`icon-function`,className:`text-[#A855F7] mb-px`,size:14}),`x`,e]})},Zm={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Zm.lastRendered.clear(),Zm.expandedPaths.clear(),am.cleanupAll(),Ah(),pm.reset()}},Qm=class extends Du{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Zm.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?J(`div`,{className:`p-4 bg-red-950/50 h-screen backdrop-blur-sm`,children:[J(`div`,{className:`flex items-center gap-2 mb-3 text-red-400 font-medium`,children:[J(Bf,{name:`icon-flame`,className:`text-red-500`,size:16}),`Something went wrong in the inspector`]}),J(`div`,{className:`p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),J(`button`,{type:`button`,onClick:this.handleReset,className:`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2`,children:`Reset Inspector`})]}):this.props.children}},$m=zd(()=>Z(`react-scan-inspector`,`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,!Jp.value&&`opacity-100 delay-300 pointer-events-auto`)),eh=em(()=>{let e=G(null),t=t=>{if(!t)return;e.current=t;let{data:n,shouldUpdate:r}=Lh(t);if(r){let e={timestamp:Date.now(),fiberInfo:Ch(t),props:n.fiberProps,state:n.fiberState,context:n.fiberContext,stateNames:kh(t)};pm.addUpdate(e,t)}};return Zd(()=>{let n=$.inspectState.value;K(()=>{if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Zm.cleanup();return}n.kind===`focused`&&(Jp.value=!1);let{parentCompositeFiber:r}=lh(n.focusedDomElement,n.fiber);if(!r){$.inspectState.value={kind:`inspect-off`},Qp.value={view:`none`};return}e.current?.type!==r.type&&(e.current=r,Zm.cleanup(),t(r))})}),Zd(()=>{lm.value,K(()=>{let n=$.inspectState.value;if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Zm.cleanup();return}let{parentCompositeFiber:r}=lh(n.focusedDomElement,n.fiber);if(!r){$.inspectState.value={kind:`inspect-off`},Qp.value={view:`none`};return}t(r),n.focusedDomElement.isConnected||(e.current=null,Zm.cleanup(),$.inspectState.value={kind:`inspecting`,hoveredDomElement:null})})}),W(()=>()=>{Zm.cleanup()},[]),J(Qm,{children:J(`div`,{className:$m,children:J(`div`,{className:`w-full h-full`,children:J(Hm,{})})})})}),th=em(()=>$.inspectState.value.kind===`focused`?J(Qm,{children:[J(eh,{}),J(Em,{})]}):null),nh=e=>{if(`__REACT_DEVTOOLS_GLOBAL_HOOK__`in window){let t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(let[,n]of Array.from(t.renderers))try{let t=n.findFiberByHostInstance?.(e);if(t)return t}catch{}}if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(let t in e)if(t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t];return null},rh=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},ih=e=>{if(!e)return null;try{let t=nh(e);if(!t)return null;let n=ah(t);return n?n[0]:null}catch{return null}},ah=e=>{let t=e,n=null;for(;t;){if(Il(t))return[t,n];Fl(t)&&!n&&(n=t),t=t.return}return null},oh=(e,t)=>!!Wl(t,t=>t===e),sh=async e=>{let t=ih(e);if(!t)return null;let n=rh(t);return n&&(await Rf([n])).get(n)||null},ch=e=>{let t=ih(e);if(!t||!rh(t))return{};let n=ah(t);if(!n)return{};let[r]=n;return{parentCompositeFiber:r}},lh=(e,t)=>{if(!e.isConnected)return{};let n=t??ih(e);if(!n)return{};let r=n,i=null,a=null;for(;r;){if(!r.stateNode){r=r.return;continue}if(ob.instrumentation?.fiberRoots.has(r.stateNode)){i=r,a=r.stateNode.current;break}r=r.return}if(!i||!a||(n=oh(n,a)?n:n.alternate??n,!n)||!rh(n))return{};let o=ah(n)?.[0];return o?{parentCompositeFiber:oh(o,a)?o:o.alternate??o}:{}},uh=e=>{let t=e.memoizedProps??{},n=e.alternate?.memoizedProps??{},r=[];for(let e in t){if(e===`children`)continue;let i=t[e],a=n[e];If(i,a)||r.push({name:e,value:i,prevValue:a,type:1})}return r},dh=new Set([`HTML`,`HEAD`,`META`,`TITLE`,`BASE`,`SCRIPT`,`SCRIPT`,`STYLE`,`LINK`,`NOSCRIPT`,`SOURCE`,`TRACK`,`EMBED`,`OBJECT`,`PARAM`,`TEMPLATE`,`PORTAL`,`SLOT`,`AREA`,`XML`,`DOCTYPE`,`COMMENT`]),fh=(e,t=!0)=>{if(e.stateNode&&`nodeType`in e.stateNode){let n=e.stateNode;return t&&n.tagName&&dh.has(n.tagName.toLowerCase())?null:n}let n=e.child;for(;n;){let e=fh(n,t);if(e)return e;n=n.sibling}return null},ph=(e=document.body)=>{let t=[],n=e=>{if(!e)return null;let{parentCompositeFiber:t}=ch(e);return t&&fh(t)===e?e:null},r=(e,i=0)=>{let a=n(e);if(a){let{parentCompositeFiber:e}=ch(a);if(!e)return;t.push({element:a,depth:i,name:z(e.type)??`Unknown`,fiber:e})}for(let t of Array.from(e.children))r(t,a?i+1:i)};return r(e),t},mh=e=>{try{if(e===null)return`null`;if(e===void 0)return`undefined`;if(Sh(e))return`Promise`;if(typeof e==`function`){let t=e.toString();try{return t.replace(/\s+/g,` `).replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,`(`).replace(/\s+\)/g,`)`).replace(/,\s+/g,`, `)}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&`length`in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e==`object`:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},hh=(e,t)=>{try{return typeof e!=`function`||typeof t!=`function`?!1:e.toString()===t.toString()}catch{return!1}},gh=(e,t,n=[],r=new WeakSet)=>{if(e===t)return{type:`primitive`,changes:[],hasDeepChanges:!1};if(typeof e==`function`&&typeof t==`function`){let r=hh(e,t);return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t,sameFunction:r}],hasDeepChanges:!r}}if(e===null||t===null||e===void 0||t===void 0||typeof e!=`object`||typeof t!=`object`)return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(r.has(e)||r.has(t))return{type:`object`,changes:[{path:n,prevValue:`[Circular]`,currentValue:`[Circular]`}],hasDeepChanges:!1};r.add(e),r.add(t);let i=e,a=t,o=new Set([...Object.keys(i),...Object.keys(a)]),s=[],c=!1;for(let e of o){let t=i[e],o=a[e];if(t!==o)if(typeof t==`object`&&typeof o==`object`&&t!==null&&o!==null){let i=gh(t,o,[...n,e],r);s.push(...i.changes),i.hasDeepChanges&&(c=!0)}else s.push({path:[...n,e],prevValue:t,currentValue:o}),c=!0}return{type:`object`,changes:s,hasDeepChanges:c}},_h=e=>e.length===0?``:e.reduce((e,t,n)=>/^\d+$/.test(t)?`${e}[${t}]`:n===0?t:`${e}.${t}`,``);function vh(e){let t=e.replace(/\s+/g,` `).trim(),n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];if(i===`=`&&t[e+1]===`>`){r.trim()&&n.push(r.trim()),n.push(`=>`),r=``,e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(r.trim()&&n.push(r.trim()),n.push(i),r=``):/\s/.test(i)?(r.trim()&&n.push(r.trim()),r=``):r+=i}r.trim()&&n.push(r.trim());let i=[];for(let e=0;e<n.length;e++){let t=n[e],r=n[e+1];t===`(`&&r===`)`||t===`[`&&r===`]`||t===`{`&&r===`}`||t===`<`&&r===`>`?(i.push(t+r),e++):i.push(t)}let a=new Set,o=new Set;function s(e,t,n){let r=0;for(let a=n;a<i.length;a++){let n=i[a];if(n===e)r++;else if(n===t&&(r--,r===0))return a}return-1}for(let e=0;e<i.length;e++)if(i[e]===`(`){let t=s(`(`,`)`,e);if(t!==-1&&i[t+1]===`=>`)for(let n=e;n<=t;n++)a.add(n)}for(let e=1;e<i.length;e++){let t=i[e-1],n=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&n===`<`){let t=s(`<`,`>`,e);if(t!==-1)for(let n=e;n<=t;n++)o.add(n)}}let c=0,l=[],u=``;function d(){u.trim()&&l.push(u.replace(/\s+$/,``)),u=``}function f(){d(),u=`  `.repeat(c)}let p=[];function m(){return p.length?p[p.length-1]:null}function h(e,t=!1){u.trim()?t||/^[),;:\].}>]$/.test(e)?u+=e:u+=` ${e}`:u+=e}for(let e=0;e<i.length;e++){let t=i[e],n=i[e+1]||``;if([`(`,`{`,`[`,`<`].includes(t))h(t),p.push(t),t===`{`?(c++,f()):(t===`(`||t===`[`||t===`<`)&&(a.has(e)&&t===`(`||o.has(e)&&t===`<`||n!=={"(":`)`,"[":`]`,"<":`>`}[t]&&n!==`()`&&n!==`[]`&&n!==`<>`&&(c++,f()));else if([`)`,`}`,`]`,`>`].includes(t)){let n=m();t===`)`&&n===`(`||t===`]`&&n===`[`||t===`>`&&n===`<`?!(a.has(e)&&t===`)`)&&!(o.has(e)&&t===`>`)&&(c=Math.max(c-1,0),f()):t===`}`&&n===`{`&&(c=Math.max(c-1,0),f()),p.pop(),h(t),t===`}`&&f()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))h(t);else if(t===`=>`)h(t);else if(t===`;`)h(t,!0),f();else if(t===`,`){h(t,!0);let n=m();!(a.has(e)&&n===`(`)&&!(o.has(e)&&n===`<`)&&n&&[`{`,`[`,`(`,`<`].includes(n)&&f()}else h(t)}return d(),l.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var yh=(e,t=!1)=>{try{let n=e.toString(),r=n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!r)return`ƒ`;let i=(r[1]||r[2]||``).replace(/\s+/g,``);return t?vh(n):`\u0192 (${i}) => ...`}catch{return`ƒ`}},bh=e=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`function`)return yh(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e==`object`){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(`, `)}, ...`:t.join(`, `)}}`}return String(e)},xh=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(e instanceof Promise)return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},Sh=e=>!!e&&(e instanceof Promise||typeof e==`object`&&`then`in e),Ch=e=>{let t=ql(e);return{displayName:z(e)||`Unknown`,type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},wh=new Map,Th=new Map,Eh=new Map,Dh=null,Oh=/\[(?<name>\w+),\s*set\w+\]/g,kh=e=>{let t=e.type?.toString?.()||``;return t?Array.from(t.matchAll(Oh),e=>e.groups?.name??``):[]},Ah=()=>{wh.clear(),Th.clear(),Eh.clear(),Dh=null},jh=e=>{let t=e.type!==Dh;return Dh=e.type,t},Mh=(e,t,n,r)=>{let i=e.get(t),a=e===wh||e===Eh,o=!If(n,r);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:n,previousValue:r,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:a?0:1};if(!If(i.currentValue,n)){let r=i.count+1;return e.set(t,{count:r,currentValue:n,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:r}}return{hasChanged:!1,count:i.count}},Nh=e=>{if(!e)return{};if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let t=e.memoizedState,n={},r=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(n[r]=t.memoizedState),t=t.next,r++;return n}return e.tag===1&&e.memoizedState||{}},Ph=e=>{let t=e.memoizedProps||{},n=e.alternate?.memoizedProps||{},r={},i={},a=Object.keys(t);for(let e of a)e in t&&(r[e]=t[e],i[e]=n[e]);return{current:r,prev:i,changes:uh(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},Fh=e=>{let t=Nh(e),n=e.alternate?Nh(e.alternate):{},r=[];for(let[i,a]of Object.entries(t)){let t=e.tag===1?i:Number(i);e.alternate&&!If(n[i],a)&&r.push({name:t,value:a,prevValue:n[i]})}return{current:t,prev:n,changes:r}},Ih=e=>{let t=zh(e),n=e.alternate?zh(e.alternate):new Map,r={},i={},a=[],o=new Set;for(let[e,s]of t){let t=s.displayName,c=e;if(o.has(c))continue;o.add(c),r[t]=s.value;let l=n.get(e);l&&(i[t]=l.value,If(l.value,s.value)||a.push({name:t,value:s.value,prevValue:l.value,contextType:e}))}return{current:r,prev:i,changes:a}},Lh=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let n=!1,r=jh(e),i=t();if(e.memoizedProps){let{current:t,changes:r}=Ph(e);for(let[e,n]of Object.entries(t))i.current.push({name:e,value:Sh(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of r){let{hasChanged:t,count:r}=Mh(wh,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let a=t(),{current:o,changes:s}=Fh(e);for(let[t,n]of Object.entries(o)){let r=e.tag===1?t:Number(t);a.current.push({name:r,value:n})}for(let e of s){let{hasChanged:t,count:r}=Mh(Th,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=t(),{current:l,changes:u}=Ih(e);for(let[e,t]of Object.entries(l))c.current.push({name:e,value:t});if(!r)for(let e of u){let{hasChanged:t,count:r}=Mh(Eh,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return!n&&!r&&(i.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:a,fiberContext:c},shouldUpdate:n||r}},Rh=new WeakMap,zh=e=>{if(!e)return new Map;let t=Rh.get(e);if(t)return t;let n=new Map,r=e;for(;r;){let e=r.dependencies;if(e?.firstContext){let t=e.firstContext;for(;t;){let e=t.memoizedValue,r=t.context?.displayName;if(n.has(e)||n.set(t.context,{value:e,displayName:r??`UnnamedContext`,contextType:null}),t===t.next)break;t=t.next}}r=r.return}return Rh.set(e,n),n},Bh=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let n=t();if(e.memoizedProps){let{current:t,changes:r}=Ph(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:Sh(r)?{type:`promise`,displayValue:`Promise`}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let r=t();if(e.memoizedState){let{current:t,changes:n}=Fh(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:Sh(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=Ih(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:Sh(t)?{type:`promise`,displayValue:`Promise`}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:n,fiberState:r,fiberContext:i}},Vh=0,Hh=performance.now(),Uh=0,Wh=!1,Gh=()=>{Uh++;let e=performance.now();e-Hh>=1e3&&(Vh=Uh,Uh=0,Hh=e),requestAnimationFrame(Gh)},Kh=()=>(Wh||(Wh=!0,Gh(),Vh=60),Vh),qh=(e,t)=>Xh(e)===Xh(t)&&Jh.includes(typeof e)&&Jh.includes(typeof t),Jh=[`function`,`object`],Yh=new WeakMap;function Xh(e,t=0){if(t<0)return`…`;switch(typeof e){case`function`:return e.toString();case`string`:return e;case`number`:case`boolean`:case`undefined`:return String(e);case`object`:break;default:return String(e)}if(e===null)return`null`;if(Yh.has(e)){let t=Yh.get(e);if(t!==void 0)return t}if(Array.isArray(e)){let t=e.length?`[${e.length}]`:`[]`;return Yh.set(e,t),t}if(lu(e)){let t=`<${z(e.type)??``} ${e.props?Object.keys(e.props).length:0}>`;return Yh.set(e,t),t}if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e),n=t.length?`{${t.length}}`:`{}`;return Yh.set(e,n),n}let n=e&&typeof e==`object`?e.constructor:void 0;if(n&&typeof n==`function`&&n.name){let t=`${n.name}{\u2026}`;return Yh.set(e,t),t}let r=`${Object.prototype.toString.call(e).slice(8,-1)}{\u2026}`;return Yh.set(e,r),r}var Zh=e=>{if(!e)return[];let t=[];if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let n=e.memoizedState,r=e.alternate?.memoizedState,i=0;for(;n;){if(n.queue&&n.memoizedState!==void 0){let e={type:2,name:i.toString(),value:n.memoizedState,prevValue:r?.memoizedState};If(e.prevValue,e.value)||t.push(e)}n=n.next,r=r?.next,i++}return t}if(e.tag===1){let n={type:3,name:`state`,value:e.memoizedState,prevValue:e.alternate?.memoizedState};return If(n.prevValue,n.value)||t.push(n),t}return t},Qh=0,$h=new WeakMap,eg=e=>$h.get(e)||(Qh++,$h.set(e,Qh),Qh);function tg(e,t){if(!e||!t)return;let n=e.memoizedValue,r={type:4,name:e.context.displayName??`Context.Provider`,value:n,contextType:eg(e.context)};this.push(r)}var ng=e=>{let t=[];return Ll(e,tg.bind(t)),t},rg=new Map,ig=!1,ag=()=>Array.from(rg.values());function og(e,t,n){!If(t,n)&&!qh(t,n)&&(this.isRequiredChange=!0)}var sg=e=>{if(!Bl(e))return!0;let t=Vl(e);for(let e of t){let t={isRequiredChange:!1};if(Rl(e,og.bind(t)),t.isRequiredChange)return!1}return!0},cg=!1,lg=16,ug=new WeakMap;function dg(e){return String(Ql(e))}function fg(e){let t=dg(e),n=ug.get(R(e));if(n)return n.get(t)}function pg(e,t){let n=R(e.type),r=dg(e),i=ug.get(n);i||(i=new Map,ug.set(n,i)),i.set(r,t)}var mg=(e,t,n,r,i)=>{let a=Date.now(),o=fg(e);if((r||i)&&(!o||a-(o.lastRenderTimestamp||0)>lg)){let r=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};r.renderCount=(r.renderCount||0)+1,r.selfTime=t||0,r.totalTime=n||0,r.lastRenderTimestamp=a,pg(e,{...r})}},hg=(e,t)=>{let n={isPaused:Fd(!ob.options.value.enabled),fiberRoots:new WeakSet};return rg.set(e,{key:e,config:t,instrumentation:n}),ig||(ig=!0,ou({name:`react-scan`,onActive:t.onActive,onCommitFiberRoot(e,t){n.fiberRoots.add(t);let r=ag();for(let e of r)e.config.onCommitStart();au(t.current,(e,t)=>{let n=R(e.type);if(!n)return null;let r=ag(),i=[];for(let t=0,n=r.length;t<n;t++)r[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let a=[];if(r.some(e=>e.config.trackChanges)){let t=Ph(e).changes,n=Fh(e).changes,r=Ih(e).changes;a.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value})));for(let t of n)e.tag===1?a.push({type:3,name:t.name.toString(),value:t.value}):a.push({type:2,name:t.name.toString(),value:t.value});a.push.apply(null,r.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:s}=ql(e),c=Kh(),l={phase:zf[t],componentName:z(n),count:1,changes:a,time:o,forget:L(e),unnecessary:cg?sg(e):null,didCommit:Bl(e),fps:c},u=a.length>0,d=Vl(e).length>0;t===`update`&&mg(e,o,s,u,d);for(let t=0,n=i.length;t<n;t++)r[i[t]].config.onRender(e,[l])});for(let e of r)e.config.onCommitFinish()},onPostCommitFiberRoot(){let e=ag();for(let t of e)t.config.onPostCommitFiberRoot()}})),n},gg=e=>{let t=new Map;for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.componentName)continue;let i=t.get(r.componentName)??[],a=Ff([{aggregatedCount:1,computedKey:null,name:r.componentName,frame:null,...r,changes:{type:r.changes.reduce((e,t)=>e|t.type,0),unstable:r.changes.some(e=>e.unstable)},phase:r.phase,computedCurrent:null}]);if(!a)continue;let o=null,s=null;if(r.changes)for(let e=0,t=r.changes.length;e<t;e++){let{name:t,prevValue:n,nextValue:a,unstable:c,type:l}=r.changes[e];l===1?(o??={},s??={},o[`${c?`⚠️`:``}${t} (prev)`]=n,s[`${c?`⚠️`:``}${t} (next)`]=a):i.push({prev:n,next:a,type:l===4?`context`:`state`,unstable:c??!1})}o&&s&&i.push({prev:o,next:s,type:`props`,unstable:!1}),t.set(a,i)}for(let[e,n]of Array.from(t.entries())){console.group(`%c${e}`,`background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;`);for(let{type:e,prev:t,next:r,unstable:i}of n)console.log(`${e}:`,i?`⚠️`:``,t,`!==`,r);console.groupEnd()}},_g=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log(`%c[·] %cReact Scan`,`font-weight:bold;color:#7a68e8;font-size:20px;`,`font-weight:bold;font-size:14px;`),console.log(`Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring`)},vg=7,yg=`Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace`,bg=.1,xg=(e,t)=>Math.floor(e+(t-e)*bg),Sg=4,Cg=40,wg=45,Tg=`115,97,230`;function Eg(e,t){return t[0]-e[0]}function Dg(e){return[...e.entries()].sort(Eg)}function Og([e,t]){let n=`${t.slice(0,Sg).join(`, `)} \xD7${e}`;return n.length>Cg&&(n=`${n.slice(0,Cg)}\u2026`),n}var kg=e=>{let t=new Map;for(let{name:n,count:r}of e)t.set(n,(t.get(n)||0)+r);let n=new Map;for(let[e,r]of t){let t=n.get(r);t?t.push(e):n.set(r,[e])}let r=Dg(n),i=Og(r[0]);for(let e=1,t=r.length;e<t;e++)i+=`, `+Og(r[e]);return i.length>Cg?`${i.slice(0,Cg)}\u2026`:i},Ag=e=>{let t=0;for(let n of e)t+=n.width*n.height;return t},jg=(e,t)=>{for(let{id:n,name:r,count:i,x:a,y:o,width:s,height:c,didCommit:l}of t){let t={id:n,name:r,count:i,x:a,y:o,width:s,height:c,frame:0,targetX:a,targetY:o,targetWidth:s,targetHeight:c,didCommit:l},u=String(t.id),d=e.get(u);d?(d.count++,d.frame=0,d.targetX=a,d.targetY=o,d.targetWidth=s,d.targetHeight=c,d.didCommit=l):e.set(u,t)}},Mg=(e,t,n)=>{for(let r of e.values()){let e=r.x-t,i=r.y-n;r.targetX=e,r.targetY=i}},Ng=(e,t)=>{let n=e.getContext(`2d`,{alpha:!0});return n&&n.scale(t,t),n},Pg=(e,t,n,r)=>{e.clearRect(0,0,t.width/n,t.height/n);let i=new Map,a=new Map;for(let e of r.values()){let{x:t,y:n,width:r,height:o,targetX:s,targetY:c,targetWidth:l,targetHeight:u,frame:d}=e;s!==t&&(e.x=xg(t,s)),c!==n&&(e.y=xg(n,c)),l!==r&&(e.width=xg(r,l)),u!==o&&(e.height=xg(o,u));let f=`${s??t},${c??n}`,p=`${f},${l??r},${u??o}`,m=i.get(f);m?m.push(e):i.set(f,[e]);let h=1-d/wg;e.frame++;let g=a.get(p)||{x:t,y:n,width:r,height:o,alpha:h};h>g.alpha&&(g.alpha=h),a.set(p,g)}for(let{x:t,y:n,width:r,height:i,alpha:o}of a.values())e.strokeStyle=`rgba(${Tg},${o})`,e.lineWidth=1,e.beginPath(),e.rect(t,n,r,i),e.stroke(),e.fillStyle=`rgba(${Tg},${o*.1})`,e.fill();e.font=`11px ${yg}`;let o=new Map;e.textRendering=`optimizeSpeed`;for(let t of i.values()){let{x:n,y:i,frame:a}=t[0],s=1-a/wg,c=kg(t),{width:l}=e.measureText(c);o.set(`${n},${i},${l},${c}`,{text:c,width:l,height:11,alpha:s,x:n,y:i,outlines:t});let u=i-11-4;if(u<0&&(u=0),a>wg)for(let e of t)r.delete(String(e.id))}let s=Array.from(o.entries()).sort(([e,t],[n,r])=>Ag(r.outlines)-Ag(t.outlines));for(let[t,n]of s)if(o.has(t))for(let[r,i]of o.entries()){if(t===r)continue;let{x:a,y:s,width:c,height:l}=n,{x:u,y:d,width:f,height:p}=i;a+c>u&&u+f>a&&s+l>d&&d+p>s&&(n.text=kg(n.outlines.concat(i.outlines)),n.width=e.measureText(n.text).width,o.delete(r))}for(let t of o.values()){let{x:n,y:r,alpha:i,width:a,height:o,text:s}=t,c=r-o-4;c<0&&(c=0),e.fillStyle=`rgba(${Tg},${i})`,e.fillRect(n,c,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(s,n+2,c+o)}return r.size>0},Fg='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',Ig=null,Lg=null,Rg=null,zg=1,Bg=null,Vg=new Map,Hg=new Map,Ug=new Set,Wg=e=>{if(!Il(e))return;let t=typeof e.type==`string`?e.type:z(e);if(!t)return;let n=Hg.get(e),r=Ul(e),i=Bl(e);n?n.count++:(Hg.set(e,{name:t,count:1,elements:r.map(e=>e.stateNode),didCommit:i?1:0}),Ug.add(e))},Gg=e=>{let t=e[0];if(e.length===1)return t;let n,r,i,a;for(let t=0,o=e.length;t<o;t++){let o=e[t];n=n==null?o.x:Math.min(n,o.x),r=r==null?o.y:Math.min(r,o.y),i=i==null?o.x+o.width:Math.max(i,o.x+o.width),a=a==null?o.y+o.height:Math.max(a,o.y+o.height)}return n==null||r==null||i==null||a==null?e[0]:new DOMRect(n,r,i-n,a-r)};function Kg(e,t){let n=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),n.push(t))}n.length>0&&this.resolveNext&&(this.resolveNext(n),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var qg=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},n=new IntersectionObserver(Kg.bind(t));for(let e of t.uniqueElements)n.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},Jg=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:ArrayBuffer,Yg=async()=>{let e=[];for(let t of Ug){let n=Hg.get(t);if(n)for(let t=0;t<n.elements.length;t++)n.elements[t]instanceof Element&&e.push(n.elements[t])}let t=new Map;for await(let n of qg(e)){for(let e of n){let n=e.target,r=e.intersectionRect;e.isIntersecting&&r.width&&r.height&&t.set(n,r)}let e=[],r=[],i=[];for(let n of Ug){let a=Hg.get(n);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let n=a.elements[e],r=t.get(n);r&&o.push(r)}o.length&&(e.push(a),r.push(Gg(o)),i.push(Ql(n)))}if(e.length>0){let t=new Jg(e.length*vg*4),n=new Float32Array(t),a=Array(e.length),o;for(let t=0,s=e.length;t<s;t++){let s=e[t],c=i[t],{x:l,y:u,width:d,height:f}=r[t],{count:p,name:m,didCommit:h}=s;if(Ig){let e=t*vg;n[e]=c,n[e+1]=p,n[e+2]=l,n[e+3]=u,n[e+4]=d,n[e+5]=f,n[e+6]=h,a[t]=m}else o||=Array(e.length),o[t]={id:c,name:m,count:p,x:l,y:u,width:d,height:f,didCommit:h}}Ig?Ig.postMessage({type:`draw-outlines`,data:t,names:a}):Lg&&Rg&&o&&(jg(Vg,o),Bg||=requestAnimationFrame(Xg))}}for(let e of Ug)Hg.delete(e),Ug.delete(e)},Xg=()=>{!Rg||!Lg||(Bg=Pg(Rg,Lg,zg,Vg)?requestAnimationFrame(Xg):null)},Zg=typeof OffscreenCanvas<`u`&&typeof Worker<`u`,Qg=()=>Math.min(window.devicePixelRatio||1,2),$g=()=>{t_();let e=document.createElement(`div`);e.setAttribute(`data-react-scan`,`true`);let t=e.attachShadow({mode:`open`}),n=document.createElement(`canvas`);if(n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.style.pointerEvents=`none`,n.style.zIndex=`2147483646`,n.setAttribute(`aria-hidden`,`true`),t.appendChild(n),!n)return null;zg=Qg(),Lg=n;let{innerWidth:r,innerHeight:i}=window;n.style.width=`${r}px`,n.style.height=`${i}px`;let a=r*zg,o=i*zg;if(n.width=a,n.height=o,Zg&&!window.__REACT_SCAN_EXTENSION__)try{Ig=new Worker(URL.createObjectURL(new Blob([Fg],{type:`application/javascript`})));let e=n.transferControlToOffscreen();Ig?.postMessage({type:`init`,canvas:e,width:n.width,height:n.height,dpr:zg},[e])}catch(e){console.warn(`Failed to initialize OffscreenCanvas worker:`,e)}Ig||(Rg=Ng(n,zg));let s=!1;window.addEventListener(`resize`,()=>{s||(s=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;zg=Qg(),n.style.width=`${e}px`,n.style.height=`${t}px`,Ig?Ig.postMessage({type:`resize`,width:e,height:t,dpr:zg}):(n.width=e*zg,n.height=t*zg,Rg&&(Rg.resetTransform(),Rg.scale(zg,zg)),Xg()),s=!1}))});let c=window.scrollX,l=window.scrollY,u=!1;return window.addEventListener(`scroll`,()=>{u||(u=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,n=e-c,r=t-l;c=e,l=t,Ig?Ig.postMessage({type:`scroll`,deltaX:n,deltaY:r}):requestAnimationFrame(Mg.bind(null,Vg,n,r)),u=!1},32))}),setInterval(()=>{Ug.size&&requestAnimationFrame(Yg)},32),t.appendChild(n),e},e_=()=>globalThis.__REACT_SCAN_STOP__,t_=()=>{let e=document.querySelector(`[data-react-scan]`);e&&e.remove()},n_=e=>{if(Il(e)&&ob.options.value.showToolbar!==!1&&$.inspectState.value.kind===`focused`){let t=e,{selfTime:n}=ql(e),r=z(e.type),i=Ql(t),a=$.reportData.get(i),o=a?.count??0,s=a?.time??0,c=[],l=$.changesListeners.get(Ql(e));if(l?.length){let t=uh(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=Zh(e),r=ng(e).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));l.forEach(e=>{e({propsChanges:t,stateChanges:n,contextChanges:r})})}let u={count:o+1,time:s+n||0,renders:[],displayName:r,type:R(e.type)||null,changes:c};$.reportData.set(i,u),r_=!0}},r_=!1,i_,a_=()=>{clearInterval(i_),i_=setInterval(()=>{r_&&=($.lastReportTime.value=Date.now(),!1)},50)},o_=e=>!vb.has(e.memoizedProps),s_=e=>{if(e_())return;let t,n=!1,r=()=>{n||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{n=!0;let t=$g();t&&document.documentElement.appendChild(t),e()}))};ob.instrumentation=hg(`react-scan-devtools-0.1.0`,{onCommitStart:()=>{ob.options.value.onCommitStart?.()},onActive:()=>{e_()||(r(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:ob}),a_(),_g())},onError:()=>{},isValidFiber:o_,onRender:(e,t)=>{Il(e)&&$.interactionListeningForRenders?.(e,t);let n=ob.instrumentation?.isPaused.value,r=$.inspectState.value.kind===`inspect-off`||$.inspectState.value.kind===`uninitialized`;n&&r||(n||Wg(e),ob.options.value.log&&gg(t),$.inspectState.value.kind===`focused`&&(lm.value=Date.now()),r||n_(e),ob.options.value.onRender?.(e,t))},onCommitFinish:()=>{r(),ob.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){r()},trackChanges:!1})},c_=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, .4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}


button:hover {
  background-image: none;
}


button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(0, 0, 0);      /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden;          /* Prevents blurry text during transforms */
  perspective: 1000;                    /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: '';
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent);
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  >div {
    display: flex;
  }

  >div {
    align-items: center;
  }

  >div {
    justify-content: space-between;
  }

  >div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  >div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    +div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    +div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  >div {
    position: absolute;
  }

  >div {
    inset: 4px;
  }

  >div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  >div {
    border-radius: 9999px;
  }

  >div {
    pointer-events: none;
  }

  >div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  >div {
    transition-duration: 300ms;
  }

  >div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}


.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}


.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active) .tree {
  overflow: hidden;
}



.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}



.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}



.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}



.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}



.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}



.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}



.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}



.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}



@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}



.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}



.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}



.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}



.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}



.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}



.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}



.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}



.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}



.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}



.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}



.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}



.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}



.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}



.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}



.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}



.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}



.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}



.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}



.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}



.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}



.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}



.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}



.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}



.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}



.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}



.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}



.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}



.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}



.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,l_=(e,t,n=t)=>{let[r,i]=U(e);return W(()=>{if(e===r)return;let a=setTimeout(()=>i(e),e?t:n);return()=>clearTimeout(a)},[e,t,n]),r},u_=zd(()=>Z(`absolute inset-0 flex items-center gap-x-2`,`translate-y-0`,`transition-transform duration-300`,Jp.value&&`-translate-y-[200%]`)),d_=()=>{let e=G(null),t=G(null),[n,r]=U(null);return Zd(()=>{let e=$.inspectState.value;e.kind===`focused`&&r(e.fiber)}),Zd(()=>{let n=cm.value;K(()=>{if($.inspectState.value.kind!==`focused`||!e.current||!t.current)return;let{totalUpdates:r,currentIndex:i,updates:a,isVisible:o,windowOffset:s}=n,c=Math.max(0,r-1),l=o?`#${s+i} Re-render`:c>0?`\xD7${c}`:``,u;if(c>0&&i>=0&&i<a.length){let e=a[i]?.fiberInfo?.selfTime;u=e>0?e<.1-2**-52?`< 0.1ms`:`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=l?` \u2022 ${l}`:``,t.current.dataset.text=u?` \u2022 ${u}`:``})}),J(`div`,{className:u_,children:[pd(()=>{if(!n)return null;let{name:e,wrappers:t,wrapperTypes:r}=qp(n),i=t.length?`${t.join(`(`)}(${e})${`)`.repeat(t.length)}`:e??``,a=r[0];return J(`span`,{title:i,className:`flex items-center gap-x-1`,children:[e??`Unknown`,J(`span`,{title:a?.title,className:`flex items-center gap-x-1 text-[10px] text-purple-400`,children:!!a&&J(H,{children:[J(`span`,{className:Z(`rounded py-[1px] px-1`,`truncate`,a.compiler&&`bg-purple-800 text-neutral-400`,!a.compiler&&`bg-neutral-700 text-neutral-300`,a.type===`memo`&&`bg-[#5f3f9a] text-white`),children:a.type},a.type),a.compiler&&J(`span`,{className:`text-yellow-300`,children:`✨`})]})}),r.length>1&&J(`span`,{className:`text-[10px] text-neutral-400`,children:[`×`,r.length-1]})]})},[n]),J(`div`,{className:`flex items-center gap-x-2 mr-auto text-xs text-[#888]`,children:[J(`span`,{ref:e,className:`with-data-text cursor-pointer !overflow-visible`,title:`Click to toggle between rerenders and total renders`}),J(`span`,{ref:t,className:`with-data-text !overflow-visible`})]})]})},f_=()=>{let e=l_($.inspectState.value.kind===`focused`,150,0),t=()=>{Qp.value={view:`none`},$.inspectState.value={kind:`inspect-off`}};if(Qp.value.view!==`notifications`)return J(`div`,{className:`react-scan-header`,children:[J(`div`,{className:`relative flex-1 h-full`,children:J(`div`,{className:Z(`react-scan-header-item is-visible`,!e&&`!duration-0`),children:J(d_,{})})}),J(`button`,{type:`button`,title:`Close`,className:`react-scan-close-button`,onClick:t,children:J(Bf,{name:`icon-close`})})]})},p_=({className:e,...t})=>J(`div`,{className:Z(`react-scan-toggle`,e),children:[J(`input`,{type:`checkbox`,...t}),J(`div`,{})]}),m_=({fps:e})=>J(`div`,{className:Z(`flex items-center gap-x-1 px-2 w-full`,`h-6`,`rounded-md`,`font-mono leading-none`,`bg-[#141414]`,`ring-1 ring-white/[0.08]`),children:[J(`div`,{style:{color:(e=>e<30?`#EF4444`:e<50?`#F59E0B`:`rgb(214,132,245)`)(e)},className:`text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center`,children:e}),J(`span`,{className:`text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit`,children:`FPS`})]}),h_=()=>{let[e,t]=U(null);return W(()=>{let e=setInterval(()=>{t(Kh())},200);return()=>clearInterval(e)},[]),J(`div`,{className:Z(`flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]`,`whitespace-nowrap text-sm text-white`),children:e===null?J(H,{children:`️`}):J(m_,{fps:e})})};Wf&&(window.Cypress||navigator.webdriver);var g_=()=>Wf?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):`0`,__=!1,v_=e=>{if(__)throw Error(e)},y_=e=>e(),b_=class e extends Array{constructor(e=25){super(),this.capacity=e}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,n){let r=new e(n);return r.push(...t),r}},x_=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},S_=150,C_=new x_(new b_(S_)),w_=50,T_=new class{constructor(){this.channels={}}publish(e,t,n=!0){let r=this.channels[t];if(!r){if(!n)return;this.channels[t]={callbacks:new b_(w_),state:new b_(w_)},this.channels[t].state.push(e);return}r.state.push(e),r.callbacks.forEach(t=>t(e))}getAvailableChannels(){return b_.fromArray(Object.keys(this.channels),w_)}subscribe(e,t,n=!1){let r=()=>(n||this.channels[e].state.forEach(e=>{t(e)}),()=>{let n=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=b_.fromArray(n,w_)}),i=this.channels[e];return i?(i.callbacks.push(t),r()):(this.channels[e]={callbacks:new b_(w_),state:new b_(w_)},this.channels[e].callbacks.push(t),r())}updateChannelState(e,t,n=!0){let r=this.channels[e];if(!r){if(!n)return;let r=new b_(w_),i={callbacks:new b_(w_),state:r};this.channels[e]=i,i.state=t(r);return}r.state=t(r.state)}getChannelState(e){return this.channels[e].state??new b_(w_)}},E_={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},D_={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},O_=(e,t=E_)=>{let n=[];return t.skipProviders&&n.push(...D_.providers),t.skipHocs&&n.push(...D_.hocs),t.skipContainers&&n.push(...D_.containers),t.skipUtilities&&n.push(...D_.utilities),t.skipBoundaries&&n.push(...D_.boundaries),!n.some(t=>t.test(e))},k_=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],A_=e=>{for(let t=0;t<k_.length;t++)if(k_[t].test(e))return!0;let t=!/[aeiou]/i.test(e),n=(e.match(/\d/g)?.length??0)>e.length/2,r=/^[a-z]+$/.test(e),i=/[$_]{2,}/.test(e);return Number(t)+Number(n)+Number(r)+Number(i)>=2},j_=(e,t=E_)=>{if(!e||!z(e.type))return[];let n=[],r=e;for(;r.return;){let e=M_(r.type);e&&!A_(e)&&O_(e,t)&&e.toLowerCase()!==e&&n.push(e),r=r.return}let i=Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[n.length-e-1];return i},M_=e=>{let t=z(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,`$<inner>`):``},N_=(e,t=()=>!0)=>{let n=e;for(;n;){let e=z(n.type);if(e&&t(e))return e;n=n.return}return null},P_,F_=`never-hidden`,I_=()=>{P_?.();let e=()=>{document.hidden&&(F_=Date.now())};document.addEventListener(`visibilitychange`,e),P_=()=>{document.removeEventListener(`visibilitychange`,e)}},L_=e=>[`pointerup`,`click`].includes(e)?`pointer`:(e.includes(`key`),[`keydown`,`keyup`].includes(e)?`keyboard`:null),R_=null,z_=e=>{I_();let t=new Map,n=new Map,r=r=>{if(!r.interactionId)return;if(r.interactionId&&r.target&&!n.has(r.interactionId)&&n.set(r.interactionId,r.target),r.target){let e=r.target;for(;e;){if(e.id===`react-scan-toolbar-root`||e.id===`react-scan-root`)return;e=e.parentElement}}let i=t.get(r.interactionId);if(i)r.duration>i.latency?(i.entries=[r],i.latency=r.duration):r.duration===i.latency&&r.startTime===i.entries[0].startTime&&i.entries.push(r);else{let n=L_(r.name);if(!n)return;let i={id:r.interactionId,latency:r.duration,entries:[r],target:r.target,type:n,startTime:r.startTime,endTime:Date.now(),processingStart:r.processingStart,processingEnd:r.processingEnd,duration:r.duration,inputDelay:r.processingStart-r.startTime,processingDuration:r.processingEnd-r.processingStart,presentationDelay:r.duration-(r.processingEnd-r.startTime),timestamp:Date.now(),timeSinceTabInactive:F_===`never-hidden`?`never-hidden`:Date.now()-F_,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(i.id,i),R_||=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(i.id)),R_=null})})}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,n=t.length;e<n;e++){let n=t[e];r(n)}});try{i.observe({type:`event`,buffered:!0,durationThreshold:16}),i.observe({type:`first-input`,buffered:!0})}catch{}return()=>i.disconnect()},B_=()=>z_(e=>{T_.publish({kind:`entry-received`,entry:e},`recording`)}),V_=25,H_=new b_(V_),U_=(e,t)=>{let n=null;for(let r of t){if(r.type!==e.type)continue;if(n===null){n=r;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(r,e)<t(n,e)&&(n=r)}return n},W_=e=>T_.subscribe(`recording`,t=>{let n=t.kind===`auto-complete-race`?H_.find(e=>e.interactionUUID===t.interactionUUID):U_(t.entry,H_);n&&e(n.completeInteraction(t))}),G_=({onMicroTask:e,onRAF:t,onTimeout:n,abort:r})=>{queueMicrotask(()=>{r?.()!==!0&&e()&&requestAnimationFrame(()=>{r?.()!==!0&&t()&&setTimeout(()=>{r?.()!==!0&&n()},0)})})},K_=e=>{let t=nh(e);if(!t)return;let n=t?z(t?.type):`N/A`;if(n||=N_(t,e=>e.length>2)??`N/A`,n)return{componentPath:j_(t),childrenTree:{},componentName:n,elementFiber:t}},q_=(e,t)=>{let n=null,r=t=>{switch(e){case`pointer`:return t.phase===`start`?`pointerup`:t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement?`change`:`click`;case`keyboard`:return t.phase===`start`?`keydown`:`change`}},i={current:{kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e}},a=n=>{if(n.composedPath().some(e=>e instanceof Element&&e.id===`react-scan-toolbar-root`)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e}),i.current.kind!==`uninitialized-stage`))return;let a=performance.now();t?.onStart?.(i.current.interactionUUID);let s=K_(n.target);if(!s){t?.onError?.(i.current.interactionUUID);return}let c={},l=X_(c);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:s.childrenTree,componentName:s.componentName,componentPath:s.componentPath,fiberRenders:c,kind:`interaction-start`,interactionStartDetail:a,stopListeningForRenders:l};let u=r({phase:`end`,target:n.target});document.addEventListener(u,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(u,o)})};document.addEventListener(r({phase:`start`}),a,{capture:!0});let o=(r,a,o)=>{if(i.current.kind!==`interaction-start`&&a===n){if(e===`pointer`&&r.target instanceof HTMLSelectElement){i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e};return}t?.onError?.(i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e},v_(`pointer -> click`);return}n=a,G_({abort:o,onMicroTask:()=>i.current.kind===`uninitialized-stage`?!1:(i.current={...i.current,kind:`js-end-stage`,jsEndDetail:performance.now()},!0),onRAF:()=>i.current.kind!==`js-end-stage`&&i.current.kind!==`raf-stage`?(t?.onError?.(i.current.interactionUUID),v_(`bad transition to raf`),i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:`raf-stage`,rafStart:performance.now()},!0),onTimeout:()=>{if(i.current.kind!==`raf-stage`){t?.onError?.(i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:Date.now(),interactionType:e},v_(`raf->timeout`);return}let n=Date.now(),r=Object.freeze({...i.current,kind:`timeout-stage`,blockingTimeEnd:n,commitEnd:performance.now()});i.current={kind:`uninitialized-stage`,interactionUUID:g_(),stageStart:n,interactionType:e};let a=!1,o=e=>{a=!0;let n={detailedTiming:r,latency:e.kind===`auto-complete-race`?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};t?.onComplete?.(r.interactionUUID,n,e);let i=H_.filter(e=>e.interactionUUID!==r.interactionUUID);return H_=b_.fromArray(i,V_),n},s={completeInteraction:o,endDateTime:Date.now(),startDateTime:r.blockingTimeStart,type:e,interactionUUID:r.interactionUUID};if(H_.push(s),Y_())setTimeout(()=>{if(a)return;o({kind:`auto-complete-race`,detailedTiming:r,interactionUUID:r.interactionUUID});let e=H_.filter(e=>e.interactionUUID!==r.interactionUUID);H_=b_.fromArray(e,V_)},1e3);else{let e=H_.filter(e=>e.interactionUUID!==r.interactionUUID);H_=b_.fromArray(e,V_),o({kind:`auto-complete-race`,detailedTiming:r,interactionUUID:r.interactionUUID})}}})},s=e=>{let t=g_();o(e,t,()=>t!==n)};return e===`keyboard`&&document.addEventListener(`keypress`,s),()=>{document.removeEventListener(r({phase:`start`}),a,{capture:!0}),document.removeEventListener(`keypress`,s)}},J_=e=>Wl(e,e=>{if(Fl(e))return!0})?.stateNode,Y_=()=>`PerformanceEventTiming`in globalThis,X_=e=>{let t=t=>{let n=z(t.type);if(!n)return;let r=e[n];if(!r){let r=new Set,i=t.return&&ah(t.return),a=i&&z(i[0]);a&&r.add(a);let{selfTime:o,totalTime:s}=ql(t),c=Bh(t),l={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:c.fiberProps||l,fiberState:c.fiberState||l,fiberContext:c.fiberContext||l};e[n]={renderCount:1,hasMemoCache:L(t),wasFiberRenderMount:Q_(t),parents:r,selfTime:o,totalTime:s,nodeInfo:[{element:J_(t),name:z(t.type)??`Unknown`,selfTime:ql(t).selfTime}],changes:u};return}if(ah(t)?.[0]?.type){let e=t.return&&ah(t.return),n=e&&z(e[0]);n&&r.parents.add(n)}let{selfTime:i,totalTime:a}=ql(t),o=Bh(t);if(!o)return;let s={current:[],changes:new Set,changesCounts:new Map};r.wasFiberRenderMount=r.wasFiberRenderMount||Q_(t),r.hasMemoCache=r.hasMemoCache||L(t),r.changes={fiberProps:Z_(r.changes?.fiberProps||s,o.fiberProps||s),fiberState:Z_(r.changes?.fiberState||s,o.fiberState||s),fiberContext:Z_(r.changes?.fiberContext||s,o.fiberContext||s)},r.renderCount+=1,r.selfTime+=i,r.totalTime+=a,r.nodeInfo.push({element:J_(t),name:z(t.type)??`Unknown`,selfTime:ql(t).selfTime})};return $.interactionListeningForRenders=t,()=>{$.interactionListeningForRenders===t&&($.interactionListeningForRenders=null)}},Z_=(e,t)=>{let n={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)n.current.some(t=>t.name===e.name)||n.current.push(e);for(let r of t.changes)if(typeof r==`string`||typeof r==`number`){n.changes.add(r);let i=e.changesCounts.get(r)||0,a=t.changesCounts.get(r)||0;n.changesCounts.set(r,i+a)}return n},Q_=e=>{if(!e.alternate)return!0;let t=e.alternate,n=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,r=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!n&&r},$_=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:(e,r)=>{let i,a;r?(i=e,a=r):a=e;let o=i?i(t):void 0,s=(e,t)=>{if(i){let n=i(e),r=i(t);Object.is(o,n)||(o=n,a(n,r))}else a(e,t)};return n.add(s),()=>n.delete(s)}},o=t=e(r,i,a);return a},ev=e=>e?$_(e):$_,tv=null;ev()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var nv=ev()((e,t)=>{let n=new Set;return{state:{events:[]},actions:{addEvent:r=>{n.forEach(e=>e(r));let i=[...t().state.events,r],a=(e,t)=>{let n=i.find(t=>{if(t.kind!==`long-render`&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0});n&&t(n)},o=new Set;i.forEach(e=>{e.kind!==`interaction`&&a(e,()=>{o.add(e.id)})});let s=i.filter(e=>!o.has(e.id));e(()=>({state:{events:s}}))},addListener:e=>(n.add(e),()=>{n.delete(e)}),clear:()=>{e({state:{events:[]}})}}}}),rv=()=>ef(nv.subscribe,nv.getState),iv=null,av=null,ov=null,sv,cv=()=>{let e=e=>{sv=e.composedPath().map(e=>e.id).filter(Boolean).includes(`react-scan-toolbar`)};return document.addEventListener(`mouseover`,e),ov=e,()=>{ov&&document.removeEventListener(`mouseover`,ov)}},lv=()=>{let e=()=>{iv=performance.now(),av=performance.timeOrigin};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},uv=150,dv=[];function fv(){let e,t;function n(){let r=null;tv=null,tv={},r=X_(tv);let i=performance.timeOrigin,a=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{let e=performance.now(),t=e-a,o=performance.timeOrigin;dv.push(e+o);let s=dv.filter(t=>e+o-t<=1e3),c=s.length;dv=s;let l=iv!==null&&av!==null?e+o-(av+iv)<100:null,u=sv!==null&&sv;if(t>uv&&!l&&document.visibilityState===`visible`&&!u){let n=o+e,r=a+i;nv.getState().actions.addEvent({kind:`long-render`,id:g_(),data:{endAt:n,startAt:r,meta:{fiberRenders:tv,latency:t,fps:c}}})}iv=null,av=null,r?.(),n()},0)}),r}let r=n();return()=>{r(),cancelAnimationFrame(e),clearTimeout(t)}}var pv=()=>{let e=B_(),t=cv(),n=lv(),r=fv(),i=async(e,t,n)=>{nv.getState().actions.addEvent({kind:`interaction`,id:g_(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:n.kind}}});let r=T_.getChannelState(`recording`);t.detailedTiming.stopListeningForRenders(),r.length&&T_.updateChannelState(`recording`,()=>new b_(w_))},a=q_(`pointer`,{onComplete:i}),o=q_(`keyboard`,{onComplete:i}),s=W_(e=>{C_.setState(b_.fromArray(C_.getCurrentState().concat(e),S_))});return()=>{t(),n(),r(),e(),a(),s(),o()}},mv=e=>{let t=e.filter(e=>e.length>2);return t.length===0?e.at(-1)??`Unknown`:t.at(-1)},hv=e=>{switch(e.kind){case`interaction`:{let{renderTime:t,otherJSTime:n,framePreparation:r,frameConstruction:i,frameDraw:a}=e;return t+n+r+i+(a??0)}case`dropped-frames`:return e.otherTime+e.renderTime}},gv=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,_v=e=>{let t=hv(e.timing);switch(e.kind){case`interaction`:return t<200?`low`:t<500?`needs-improvement`:`high`;case`dropped-frames`:return t<50?`low`:t<uv?`needs-improvement`:`high`}},vv=()=>hd(yv),yv=Xu(null),bv=({size:e=24,className:t})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:Z([`lucide lucide-chevron-right`,t]),children:J(`path`,{d:`m9 18 6-6-6-6`})}),xv=({className:e=``,size:t=24,events:n=[]})=>{let r=n.includes(!0),i=n.filter(e=>e).length,a=i>99?`>99`:i,o=r?Math.max(t*.6,14):Math.max(t*.4,6);return J(`div`,{className:`relative`,children:[J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:`lucide lucide-bell ${e}`,children:[J(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}),J(`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})]}),n.length>0&&i>0&&ob.options.value.showNotificationCount&&J(`div`,{className:Z([`absolute`,r?`-top-2.5 -right-2.5`:`-top-1 -right-1`,`rounded-full`,`flex items-center justify-center`,`text-[8px] font-medium text-white`,`aspect-square`,r?`bg-red-500/90`:`bg-purple-500/90`]),style:{width:`${o}px`,height:`${o}px`,padding:r?`0.5px`:`0`},children:r&&a})]})},Sv=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[J(`path`,{d:`M18 6 6 18`}),J(`path`,{d:`m6 6 12 12`})]}),Cv=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[J(`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`}),J(`path`,{d:`M16 9a5 5 0 0 1 0 6`}),J(`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`})]}),wv=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[J(`path`,{d:`M16 9a5 5 0 0 1 .95 2.293`}),J(`path`,{d:`M19.364 5.636a9 9 0 0 1 1.889 9.96`}),J(`path`,{d:`m2 2 20 20`}),J(`path`,{d:`m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11`}),J(`path`,{d:`M9.828 4.172A.686.686 0 0 1 11 4.657v.686`})]}),Tv=({size:e=24,className:t})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:Z([`lucide lucide-arrow-left`,t]),children:[J(`path`,{d:`m12 19-7-7 7-7`}),J(`path`,{d:`M19 12H5`})]}),Ev=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[J(`path`,{d:`M14 4.1 12 6`}),J(`path`,{d:`m5.1 8-2.9-.8`}),J(`path`,{d:`m6 12-1.9 2`}),J(`path`,{d:`M7.2 2.2 8 5.1`}),J(`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`})]}),Dv=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[J(`path`,{d:`M10 8h.01`}),J(`path`,{d:`M12 12h.01`}),J(`path`,{d:`M14 8h.01`}),J(`path`,{d:`M16 12h.01`}),J(`path`,{d:`M18 8h.01`}),J(`path`,{d:`M6 8h.01`}),J(`path`,{d:`M7 16h10`}),J(`path`,{d:`M8 12h.01`}),J(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`})]}),Ov=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,style:{transform:`rotate(180deg)`},children:[J(`circle`,{cx:`12`,cy:`12`,r:`10`}),J(`path`,{d:`m4.9 4.9 14.2 14.2`})]}),kv=({className:e=``,size:t=24})=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[J(`polyline`,{points:`22 17 13.5 8.5 8.5 13.5 2 7`}),J(`polyline`,{points:`16 17 22 17 22 11`})]}),Av=({children:e,triggerContent:t,wrapperProps:n})=>{let[r,i]=U(`closed`),[a,o]=U(null),[s,c]=U({width:window.innerWidth,height:window.innerHeight}),l=G(null),u=G(null),d=hd(Qy),f=G(!1);W(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),p()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let p=()=>{if(l.current&&d){let e=l.current.getBoundingClientRect(),t=d.getBoundingClientRect(),n=e.left+e.width/2,r=e.top;o(new DOMRect(n-t.left,r-t.top,e.width,e.height))}};W(()=>{p()},[l.current]),W(()=>{if(r===`opening`){let e=setTimeout(()=>i(`open`),120);return()=>clearTimeout(e)}else if(r===`closing`){let e=setTimeout(()=>i(`closed`),120);return()=>clearTimeout(e)}},[r]),W(()=>{let e=setInterval(()=>{!f.current&&r!==`closed`&&i(`closing`)},1e3);return()=>clearInterval(e)},[r]);let m=()=>{f.current=!0,p(),i(`opening`)},h=()=>{f.current=!1,p(),i(`closing`)},g=()=>{if(!a||!d)return{top:0,left:0};let e=d.getBoundingClientRect(),t=u.current?.offsetHeight||40,n=a.x+e.left,r=a.y+e.top,i=n,o=r-4;return i-175/2<5?i=92.5:i+175/2>s.width-5&&(i=s.width-5-175/2),o-t<5&&(o=r+a.height+4),{top:o-e.top,left:i-e.left}};return J(H,{children:[d&&a&&r!==`closed`&&vf(J(`div`,{ref:u,className:Z([`absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg`,`transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]`,`after:content-[""] after:absolute after:top-[100%]`,`after:left-1/2 after:-translate-x-1/2`,`after:w-[10px] after:h-[6px]`,`after:border-l-[5px] after:border-l-transparent`,`after:border-r-[5px] after:border-r-transparent`,`after:border-t-[6px] after:border-t-white`,`pointer-events-none`,r===`opening`||r===`closing`?`opacity-0 translate-y-1`:`opacity-100 translate-y-0`]),style:{top:g().top+`px`,left:g().left+`px`,transform:`translate(-50%, -100%)`,minWidth:`175px`},children:e}),d),J(`div`,{ref:l,onMouseEnter:m,onMouseLeave:h,...n,children:t})]})},jv=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:n,setRoute:r}=vv();return J(`div`,{className:Z([`flex w-full justify-between items-center px-3 py-2 text-xs`]),children:[J(`div`,{className:Z([`bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm`]),children:[J(`button`,{onClick:()=>{r({route:`render-visualization`,routeMessage:null})},className:Z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`render-visualization`||t.route===`render-explanation`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Ranked`}),J(`button`,{onClick:()=>{r({route:`other-visualization`,routeMessage:null})},className:Z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`other-visualization`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Overview`}),J(`button`,{onClick:()=>{r({route:`optimize`,routeMessage:null})},className:Z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`optimize`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:J(`span`,{children:`Prompts`})})]}),J(Av,{triggerContent:J(`button`,{onClick:()=>{n(e=>{e.audioNotificationsOptions.enabled&&e.audioNotificationsOptions.audioContext.state!==`closed`&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem(`react-scan-notifications-audio`,String(!t));let n=new AudioContext;return e.audioNotificationsOptions.enabled||Lf(n),t&&n.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:n,enabled:!0}}})},className:`ml-auto`,children:J(`div`,{className:Z([`flex gap-x-2 justify-center items-center text-[#6E6E77]`]),children:[J(`span`,{children:`Alerts`}),t.audioNotificationsOptions.enabled?J(Cv,{size:16,className:`text-[#6E6E77]`}):J(wv,{size:16,className:`text-[#6E6E77]`})]})}),children:J(H,{children:`Play a chime when a slowdown is recorded`})})]})},Mv=e=>{let t=``;return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let n=``;n+=`Component Name:`,n+=e.name,n+=`
`,n+=`Rendered: ${e.count} times
`,n+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(n+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{n+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(n+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{n+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(n+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{n+=`${e.name}:${e.count}x
`})),t+=n,t+=`
`}),t},Nv=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:n,commitTime:r,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${i===null?``:`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`,Pv=({interactionType:e,name:t,componentPath:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:s,framePresentTime:c,formattedReactData:l})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?``:`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,Fv=({renderTime:e,otherTime:t,formattedReactData:n})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,Iv=({renderTime:e,otherTime:t,formattedReactData:n})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Lv=({renderTime:e,otherTime:t,formattedReactData:n})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${n}`,Rv=({interactionType:e,name:t,time:n,renderTime:r,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:s,formattedReactData:c})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${r.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?``:`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,zv=(e,t)=>y_(()=>{switch(e){case`data`:switch(t.kind){case`dropped-frames`:return Lv({formattedReactData:Mv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Nv({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Mv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case`explanation`:switch(t.kind){case`dropped-frames`:return Iv({formattedReactData:Mv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Rv({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Mv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:mv(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:hv(t.timing),toRafTime:t.timing.framePreparation})}case`fix`:switch(t.kind){case`dropped-frames`:return Fv({formattedReactData:Mv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Pv({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(`>`),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Mv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:mv(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:hv(t.timing),toRafTime:t.timing.framePreparation})}}}),Bv=({selectedEvent:e})=>{let[t,n]=U(`fix`),[r,i]=U(!1);return J(`div`,{className:Z([`w-full h-full`]),children:[J(`div`,{className:Z([`border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden`]),children:[J(`div`,{className:Z([`bg-[#18181B] p-1 rounded-t-sm`]),children:J(`div`,{className:Z([`flex items-center gap-x-1`]),children:[J(`button`,{onClick:()=>n(`fix`),className:Z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`fix`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Fix`}),J(`button`,{onClick:()=>n(`explanation`),className:Z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`explanation`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Explanation`}),J(`button`,{onClick:()=>n(`data`),className:Z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`data`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Data`})]})}),J(`div`,{className:Z([`overflow-y-auto h-full`]),children:J(`pre`,{className:Z([`p-2 h-full`,`whitespace-pre-wrap break-words`,`text-gray-300 font-mono `]),children:zv(t,e)})})]}),J(`button`,{onClick:async()=>{let n=zv(t,e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),1e3)},className:Z([`mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm`,`hover:text-white transition-colors duration-200`,`flex items-center justify-center gap-x-2 text-xs`]),children:[J(`span`,{children:r?`Copied!`:`Copy Prompt`}),J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:Z([`transition-transform duration-200`,r&&`scale-110`]),children:r?J(`path`,{d:`M20 6L9 17l-5-5`}):J(H,{children:[J(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),J(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})]})},Vv=(e,t)=>{switch(e.kind){case`dropped-frames`:return[...t?[{name:`Total Processing Time`,time:hv(e.timing),color:`bg-red-500`,kind:`total-processing-time`}]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`},{name:`JavaScript, DOM updates, Draw Frame`,time:e.timing.otherTime,color:`bg-[#4b4b4b]`,kind:`other-frame-drop`}]];case`interaction`:return[...t?[]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`}],{name:t?`React Renders, Hooks, Other JavaScript`:`JavaScript/React Hooks `,time:e.timing.otherJSTime,color:`bg-[#EFD81A]`,kind:`other-javascript`},{name:`Update DOM and Draw New Frame`,time:hv(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:`bg-[#1D3A66]`,kind:`other-not-javascript`}]}},Hv=({selectedEvent:e})=>{let[t]=U(pb()??!1),{notificationState:n}=vv(),[r,i]=U(n.routeMessage?.name?[n.routeMessage.name]:[]),a=Vv(e,t),o=hd(Qy);W(()=>{if(n.routeMessage?.name){let e=o?.querySelector(`#overview-scroll-container`),t=o?.querySelector(`#react-scan-overview-bar-${n.routeMessage.name}`);if(e&&t){let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top;e.scrollTop+=n}}},[n.route]),W(()=>{n.route===`other-visualization`&&i(e=>n.routeMessage?.name?[n.routeMessage.name]:e)},[n.route]);let s=a.reduce((e,t)=>e+t.time,0);return J(`div`,{className:`rounded-sm border border-zinc-800 text-xs`,children:[J(`div`,{className:`p-2 border-b border-zinc-800 bg-zinc-900/50`,children:J(`div`,{className:`flex items-center justify-between`,children:[J(`h3`,{className:`text-xs font-medium`,children:`What was time spent on?`}),J(`span`,{className:`text-xs text-zinc-400`,children:[`Total: `,s.toFixed(0),`ms`]})]})}),J(`div`,{className:`divide-y divide-zinc-800`,children:a.map(t=>{let n=r.includes(t.kind);return J(`div`,{id:`react-scan-overview-bar-${t.kind}`,children:[J(`button`,{onClick:()=>i(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:`w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors`,children:J(`div`,{className:`flex-1`,children:[J(`div`,{className:`flex items-center justify-between mb-2`,children:[J(`div`,{className:`flex items-center gap-0.5`,children:[J(`svg`,{className:`h-4 w-4 text-zinc-400 transition-transform ${n?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:J(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),J(`span`,{className:`font-medium flex items-center text-left`,children:t.name})]}),J(`span`,{className:` text-zinc-400`,children:[t.time.toFixed(0),`ms`]})]}),J(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:J(`div`,{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/s*100}%`}})})]})}),n&&J(`div`,{className:`bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3`,children:J(`p`,{className:` text-zinc-400 mb-4 text-xs`,children:y_(()=>{switch(e.kind){case`interaction`:switch(t.kind){case`render`:return J(qv,{input:Gv(e)});case`other-javascript`:return J(qv,{input:Kv(e)});case`other-not-javascript`:return J(qv,{input:Uv(e)})}case`dropped-frames`:switch(t.kind){case`total-processing-time`:return J(qv,{input:{kind:`total-processing`,data:{time:hv(e.timing)}}});case`render`:return J(H,{children:J(qv,{input:{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/hv(e.timing)}))}}})});case`other-frame-drop`:return J(qv,{input:{kind:`other`}})}}})})})]},t.kind)})})]})},Uv=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),n=e.timing.renderTime/hv(e.timing)*100;return t>100?{kind:`high-render-count-update-dom-draw-frame`,data:{count:t,percentageOfTotal:n,copyButton:J(Wv,{})}}:{kind:`update-dom-draw-frame`,data:{copyButton:J(Wv,{})}}},Wv=()=>{let[e,t]=U(!1),{notificationState:n}=vv();return J(`button`,{onClick:async()=>{n.selectedEvent&&(await navigator.clipboard.writeText(zv(`explanation`,n.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:`bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3`,children:[J(`span`,{children:e?`Copied!`:`Copy Prompt`}),J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:Z([`transition-transform duration-200`,e&&`scale-110`]),children:e?J(`path`,{d:`M20 6L9 17l-5-5`}):J(H,{children:[J(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),J(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})},Gv=e=>e.timing.renderTime/hv(e.timing)>.3?{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/hv(e.timing),name:t.name}))}}:{kind:`other`},Kv=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/hv(e.timing)<.2?{kind:`js-explanation-base`}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:`high-render-count-high-js`,data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/hv(e.timing)>.3?e.timing.renderTime>.2?{kind:`js-explanation-base`}:{kind:`low-render-count-high-js`,data:{renderCount:t}}:{kind:`js-explanation-base`}},qv=({input:e})=>{switch(e.kind){case`total-processing`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:[`This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be `,`<=16ms`]}),J(`p`,{children:`To debug the issue, check the "Ranked" tab to see if there are significant component renders`}),J(`p`,{children:`On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build`}),J(`p`,{children:[`To understand precisely what caused the slowdown while in production, use the `,J(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]}),J(`p`,{})]});case`render`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`This is the time it took React to run components, and internal logic to handle the output of your component.`}),J(`div`,{className:Z([`flex flex-col`]),children:[J(`p`,{children:`The slowest components for this time period were:`}),e.data.topByTime.map(e=>J(`div`,{children:[J(`strong`,{children:e.name}),`:`,` `,(e.percentage*100).toFixed(0),`% of total`]},e.name))]}),J(`p`,{children:`To view the render times of all your components, and what caused them to render, go to the "Ranked" tab`}),J(`p`,{children:`The "Ranked" tab shows the render times of every component.`}),J(`p`,{children:`The render times of the same components are grouped together into one bar.`}),J(`p`,{children:`Clicking the component will show you what props, state, or context caused the component to re-render.`})]});case`js-explanation-base`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),J(`p`,{children:[`The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of `,J(`code`,{children:`useEffect`}),`'s or a large number of useEffect's called, but this can also be JavaScript event handlers (`,J(`code`,{children:`'onclick'`}),`, `,J(`code`,{children:`'onchange'`}),`) that performed expensive computation.`]}),J(`p`,{children:`If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.`}),J(`p`,{children:[`You should profile your app using the`,` `,J(`strong`,{children:`Chrome DevTools profiler`}),` to learn exactly which functions took the longest to execute.`]})]});case`high-render-count-high-js`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),e.data.renderCount===0?J(H,{children:[J(`p`,{children:`There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API`}),J(`p`,{children:[`You should try to reproduce the slowdown while profiling your website with the`,J(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]}):J(H,{children:[` `,J(`p`,{children:[`There were `,J(`strong`,{children:e.data.renderCount}),` renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like `,J(`code`,{children:`useEffects`}),`.`]}),J(`div`,{className:Z([`flex flex-col`]),children:[J(`p`,{children:`You should try optimizing the renders of:`}),e.data.topByCount.map(e=>J(`div`,{children:[`- `,J(`strong`,{children:e.name}),` (rendered `,e.count,`x)`]},e.name))]}),`and then checking if the problem still exists.`,J(`p`,{children:[`You can also try profiling your app using the`,` `,J(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]})]});case`low-render-count-high-js`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),J(`p`,{children:[`There were only `,J(`strong`,{children:e.data.renderCount}),` renders detected, which means either you had very expensive hooks like`,` `,J(`code`,{children:`useEffect`}),`/`,J(`code`,{children:`useLayoutEffect`}),`, or there is other JavaScript running during this interaction that took up the majority of the time.`]}),J(`p`,{children:[`To understand precisely what caused the slowdown, use the`,` `,J(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]})]});case`high-render-count-update-dom-draw-frame`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),J(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),J(`p`,{children:[`During this interaction, there were`,` `,J(`strong`,{children:e.data.count}),` renders, which was`,` `,J(`strong`,{children:[e.data.percentageOfTotal.toFixed(0),`%`]}),` of the time spent processing`]}),J(`p`,{children:`The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.`}),J(`p`,{children:`You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.`}),J(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),J(`p`,{children:e.data.copyButton}),J(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),J(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`update-dom-draw-frame`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),J(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),J(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),J(`p`,{children:e.data.copyButton}),J(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),J(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`other`:return J(`div`,{className:Z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[J(`p`,{children:[`This is the time it took to run everything other than React renders. This can be hooks like `,J(`code`,{children:`useEffect`}),`, other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.`]}),J(`p`,{children:[`To get a better picture of what happened, profile your app using the`,` `,J(`strong`,{children:`Chrome profiler`}),` when the performance problem arises.`]})]})}},Jv=null,Yv=null,Xv=null,Zv=Fd({kind:`idle`,current:null}),Qv=null,$v=()=>{Qv&&cancelAnimationFrame(Qv),Qv=requestAnimationFrame(()=>{if(!Jv||!Yv)return;Yv.clearRect(0,0,Jv.width,Jv.height);let e=`hsl(271, 76%, 53%)`,t=Zv.value,{alpha:n,current:r}=y_(()=>{switch(t.kind){case`transition`:{let e=t.current?.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:e?e.alpha:0,current:e}}case`move-out`:return{alpha:t.current?.alpha??0,current:t.current};case`idle`:return{alpha:1,current:t.current}}});switch(r?.rects.forEach(t=>{Yv&&(Yv.shadowColor=e,Yv.shadowBlur=6,Yv.strokeStyle=e,Yv.lineWidth=2,Yv.globalAlpha=n,Yv.beginPath(),Yv.rect(t.left,t.top,t.width,t.height),Yv.stroke(),Yv.shadowBlur=0,Yv.beginPath(),Yv.rect(t.left,t.top,t.width,t.height),Yv.stroke())}),t.kind){case`move-out`:if(t.current.alpha===0){Zv.value={kind:`idle`,current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),$v();return;case`transition`:if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),$v();return}if(t.transitionTo.alpha===1){Zv.value={kind:`idle`,current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),$v();case`idle`:return}})},ey=null,ty=e=>{if(Jv=document.createElement(`canvas`),Yv=Jv.getContext(`2d`,{alpha:!0}),!Yv)return null;let t=window.devicePixelRatio||1,{innerWidth:n,innerHeight:r}=window;Jv.style.width=`${n}px`,Jv.style.height=`${r}px`,Jv.width=n*t,Jv.height=r*t,Jv.style.position=`fixed`,Jv.style.left=`0`,Jv.style.top=`0`,Jv.style.pointerEvents=`none`,Jv.style.zIndex=`2147483600`,Yv.scale(t,t),e.appendChild(Jv),ey&&window.removeEventListener(`resize`,ey);let i=()=>{if(!Jv||!Yv)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:n}=window;Jv.style.width=`${t}px`,Jv.style.height=`${n}px`,Jv.width=t*e,Jv.height=n*e,Yv.scale(e,e),$v()};return ey=i,window.addEventListener(`resize`,i),Zv.subscribe(()=>{requestAnimationFrame(()=>{$v()})}),ny};function ny(){Xv&&=(cancelAnimationFrame(Xv),null),Jv?.parentNode&&Jv.parentNode.removeChild(Jv),Jv=null,Yv=null}var ry=()=>{let e=Zv.value.current?Zv.value.current:Zv.value.kind===`transition`?Zv.value.transitionTo:null;if(e){if(Zv.value.kind===`transition`){Zv.value={kind:`move-out`,current:Zv.value.current?.alpha===0?Zv.value.transitionTo:Zv.value.current??Zv.value.transitionTo};return}Zv.value={kind:`move-out`,current:{alpha:0,...e}}}},iy=({selectedEvent:e})=>{let t=hv(e.timing),n=t-e.timing.renderTime,[r]=U(pb()),i=e.groupedFiberRenders.map(e=>({event:e,kind:`render`,totalTime:r?e.count:e.totalTime})),a=y_(()=>{switch(e.kind){case`dropped-frames`:return e.timing.renderTime/t<.1;case`interaction`:return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind===`interaction`&&!r&&i.push({kind:`other-javascript`,totalTime:e.timing.otherJSTime}),a&&!r&&(e.kind===`interaction`?i.push({kind:`other-not-javascript`,totalTime:hv(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:`other-frame-drop`,totalTime:n}));let o=G({lastCallAt:null,timer:null}),s=i.reduce((e,t)=>e+t.totalTime,0);return J(`div`,{className:Z([`flex flex-col h-full w-full gap-y-1`]),children:[y_(()=>{if(r&&i.length===0)return J(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[J(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No data available`}),J(`p`,{className:`text-x w-full text-lefts`,children:`No data was collected during this period`})]});if(i.length===0)return J(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[J(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No renders collected`}),J(`p`,{className:`text-x w-full text-lefts`,children:`There were no renders during this period`})]})}),i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>J(oy,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:s,isProduction:r},e.kind===`render`?e.event.id:e.kind))]})},ay=e=>e.current&&e.current.alpha>0?`fading-out`:`fading-in`,oy=({bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i,depth:a=0})=>{let{setNotificationState:o,setRoute:s}=vv(),[c,l]=U(!1),u=e.kind===`render`?e.event.parents.size===0:!0,d=i.filter(t=>t.kind===`render`&&e.kind===`render`?e.event.parents.has(t.event.name)&&t.event.name!==e.event.name:!1),f=e.kind===`render`?Array.from(e.event.parents).filter(e=>!i.some(t=>t.kind===`render`&&t.event.name===e)):[];return J(`div`,{className:`w-full`,children:[J(`div`,{className:Z([`w-full flex items-center relative text-xs min-w-0`]),children:[J(`button`,{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),ry()},onMouseEnter:async()=>{let n=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!==`render`){let e=Zv.value.current?Zv.value.current:Zv.value.kind===`transition`?Zv.value.transitionTo:null;if(!e){Zv.value={kind:`idle`,current:null};return}Zv.value={kind:`move-out`,current:{alpha:0,...e}};return}let n=Zv.value,r=y_(()=>{switch(n.kind){case`transition`:return n.transitionTo;case`idle`:case`move-out`:return n.current}}),i=[];if(n.kind===`transition`){let t=ay(n);y_(()=>{switch(t){case`fading-in`:Zv.value={kind:`transition`,current:n.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case`fading-out`:Zv.value={kind:`transition`,current:Zv.value.current?{alpha:0,...Zv.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})}else Zv.value={kind:`transition`,transitionTo:{rects:i,alpha:0,name:e.event.name},current:r?{alpha:0,...r}:null};let a=e.event.elements.filter(e=>e instanceof Element);for await(let e of qg(a))e.forEach(({boundingClientRect:e})=>{i.push(e)}),$v()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{n()},200);return}n()},onClick:()=>{e.kind===`render`?(o(t=>({...t,selectedFiber:e.event})),s({route:`render-explanation`,routeMessage:null})):s({route:`other-visualization`,routeMessage:{kind:`auto-open-overview-accordion`,name:e.kind}})},className:Z([`h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative`]),children:[J(`div`,{style:{minWidth:`fit-content`,width:`${e.totalTime/n*100}%`},className:Z([`flex items-center rounded-sm text-white text-xs h-[28px] shrink-0`,e.kind===`render`&&`bg-[#412162] group-hover:bg-[#5b2d89]`,e.kind===`other-frame-drop`&&`bg-[#44444a] group-hover:bg-[#6a6a6a]`,e.kind===`other-javascript`&&`bg-[#efd81a6b] group-hover:bg-[#efda1a2f]`,e.kind===`other-not-javascript`&&`bg-[#214379d4] group-hover:bg-[#21437982]`])}),J(`div`,{className:Z([`absolute inset-0 flex items-center px-2`,`min-w-0`]),children:J(`div`,{className:`flex items-center gap-x-2 min-w-0 w-full`,children:[J(`span`,{className:Z([`truncate`]),children:y_(()=>{switch(e.kind){case`other-frame-drop`:return`JavaScript, DOM updates, Draw Frame`;case`other-javascript`:return`JavaScript/React Hooks`;case`other-not-javascript`:return`Update DOM and Draw New Frame`;case`render`:return e.event.name}})}),e.kind===`render`&&gv(e.event)&&J(`div`,{style:{lineHeight:`10px`},className:Z([`px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0`]),children:`Memoizable`})]})})]}),J(`button`,{onClick:()=>e.kind===`render`&&!u&&l(!c),className:Z([`flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]`,!u&&`hover:bg-[#0f0f0f]`,e.kind===`render`&&!u?`cursor-pointer`:`cursor-default`]),children:[J(`div`,{className:`w-[20px] flex items-center justify-center`,children:e.kind===`render`&&!u&&J(bv,{className:Z(`transition-transform`,c&&`rotate-90`),size:16})}),J(`div`,{style:{minWidth:u?`fit-content`:r?`30px`:`60px`},className:`flex items-center justify-end gap-x-1`,children:[e.kind===`render`&&J(`span`,{className:Z([`text-[10px]`]),children:[`x`,e.event.count]}),(e.kind!==`render`||!r)&&J(`span`,{className:`text-[10px] text-[#7346a0] pr-1`,children:[e.totalTime<1?`<1`:e.totalTime.toFixed(0),`ms`]})]})]}),a===0&&J(`div`,{className:Z([`absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16`,`pointer-events-none`]),children:`Click to learn more`})]}),c&&(d.length>0||f.length>0)&&J(`div`,{className:`pl-3 flex flex-col gap-y-1 mt-1`,children:[d.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>J(oy,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i},o)),f.map(e=>J(`div`,{className:`w-full`,children:J(`div`,{className:`w-full flex items-center relative text-xs`,children:J(`div`,{className:`h-full w-full flex items-center relative`,children:[J(`div`,{className:`flex items-center rounded-sm text-white text-xs h-[28px] w-full`}),J(`div`,{className:`absolute inset-0 flex items-center px-2`,children:J(`span`,{className:`truncate whitespace-nowrap text-white/70 w-full`,children:e})})]})})},e))]})]})},sy=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:n}=vv(),[r,i]=U(!0),[a]=U(pb());fd(()=>{let e=localStorage.getItem(`react-scan-tip-shown`),t=e===`true`?!0:e===`false`?!1:null;if(t===null){i(!0),localStorage.setItem(`react-scan-tip-is-shown`,`true`);return}t||i(!1)},[]);let o=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return J(`div`,{className:Z([`w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm`]),children:[J(`div`,{className:Z([`flex items-start gap-x-4 `]),children:[J(`button`,{onClick:()=>{n({route:`render-visualization`,routeMessage:null})},className:Z([`text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]`]),children:[J(Tv,{size:14}),` `,J(`span`,{children:`Overview`})]}),J(`div`,{className:Z([`flex flex-col gap-y-1`]),children:[J(`div`,{className:Z([`text-sm font-bold text-white overflow-x-hidden`]),children:J(`div`,{className:`flex items-center gap-x-2 truncate`,children:t.name})}),J(`div`,{className:Z([`flex gap-x-2`]),children:[!a&&J(H,{children:J(`div`,{className:Z([`text-xs text-gray-400`]),children:[`• Render time: `,t.totalTime.toFixed(0),`ms`]})}),J(`div`,{className:Z([`text-xs text-gray-400 mb-4`]),children:[`• Renders: `,t.count,`x`]})]})]})]}),r&&!o&&J(`div`,{className:Z([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative`]),children:[J(`button`,{onClick:()=>{i(!1),localStorage.setItem(`react-scan-tip-shown`,`false`)},className:Z([`absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]`]),children:J(Sv,{size:12})}),J(`div`,{className:Z([`w-1 bg-[#d36cff]`])}),J(`div`,{className:Z([`flex-1`]),children:[J(`div`,{className:Z([`px-3 py-2 text-gray-100 text-xs font-semibold`]),children:`How to stop renders`}),J(`div`,{className:Z([`px-3 pb-2 text-gray-400 text-[10px]`]),children:`Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already`})]})]}),o&&J(`div`,{className:Z([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex`]),children:[J(`div`,{className:Z([`w-1 bg-[#d36cff]`])}),J(`div`,{className:Z([`flex-1`]),children:[J(`div`,{className:Z([`px-3 py-2 text-gray-100 text-sm font-semibold`]),children:`No changes detected`}),J(`div`,{className:Z([`px-3 pb-2 text-gray-400 text-xs`]),children:`This component would not of rendered if it was memoized`})]})]}),J(`div`,{className:Z([`flex w-full`]),children:[J(`div`,{className:Z([`flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3`]),children:[J(`div`,{className:Z([`text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Props`}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>J(`div`,{className:Z([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[J(`span`,{className:Z([`text-white `]),children:e.name}),J(`div`,{className:Z([` text-[8px]  text-[#d36cff] pl-1 py-1 `]),children:[e.count,`/`,t.count,`x`]})]},e.name)):J(`div`,{className:Z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),J(`div`,{className:Z([`flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3`]),children:[J(`div`,{className:Z([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed State`}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>J(`div`,{className:Z([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[J(`span`,{className:Z([`text-white `]),children:[`index `,e.index]}),J(`div`,{className:Z([`rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]`]),children:[e.count,`/`,t.count,`x`]})]},e.index)):J(`div`,{className:Z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),J(`div`,{className:Z([`flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3`]),children:[J(`div`,{className:Z([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Context`}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>J(`div`,{className:Z([`flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto`]),children:[J(`span`,{className:Z([`text-white `]),children:e.name}),J(`div`,{className:Z([`rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap`]),children:[e.count,`/`,t.count,`x`]})]},e.name)):J(`div`,{className:Z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2`]),children:`No changes`})]})]})]})},cy=()=>{let{notificationState:e,setNotificationState:t}=vv(),[n,r]=U(`...`),i=G(null);if(W(()=>{let e=setInterval(()=>{r(e=>e===`...`?``:e+`.`)},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return J(`div`,{ref:i,className:Z([`h-full w-full flex flex-col items-center justify-center relative py-2 px-4`]),children:[J(`div`,{className:Z([`p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0`]),children:J(`button`,{onClick:()=>{Qp.value={view:`none`}},children:J(Sv,{size:18,className:`text-[#6F6F78]`})})}),J(`div`,{className:Z([`flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md`,` shadow-lg`]),children:J(`div`,{className:Z([`flex flex-col items-start gap-y-4`]),children:[J(`div`,{className:Z([`flex items-center`]),children:J(`span`,{className:Z([`text-zinc-400 font-medium text-[17px]`]),children:[`Scanning for slowdowns`,n]})}),e.events.length!==0&&J(`p`,{className:Z([`text-xs`]),children:[`Click on an item in the`,` `,J(`span`,{className:Z([`text-purple-400`]),children:`History`}),` list to get started`]}),J(`p`,{className:Z([`text-zinc-600 text-xs`]),children:`You don't need to keep this panel open for React Scan to record slowdowns`}),J(`p`,{className:Z([`text-zinc-600 text-xs`]),children:`Enable audio alerts to hear a delightful ding every time a large slowdown is recorded`}),J(`button`,{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(e=>(e.audioNotificationsOptions.audioContext?.state!==`closed`&&e.audioNotificationsOptions.audioContext?.close(),localStorage.setItem(`react-scan-notifications-audio`,`false`),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem(`react-scan-notifications-audio`,`true`);let n=new AudioContext;Lf(n),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:n}}))},className:Z([`px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full`,` text-sm flex items-center gap-x-2 justify-center`]),children:e.audioNotificationsOptions.enabled?J(H,{children:J(`span`,{className:`flex items-center gap-x-1`,children:`Disable audio alerts`})}):J(H,{children:J(`span`,{className:`flex items-center gap-x-1`,children:`Enable audio alerts`})})})]})})]});switch(e.route){case`render-visualization`:return J(ly,{children:J(iy,{selectedEvent:e.selectedEvent})});case`render-explanation`:if(!e.selectedFiber)throw Error(`Invariant: must have selected fiber when viewing render explanation`);return J(ly,{children:J(sy,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case`other-visualization`:return J(ly,{children:J(`div`,{className:Z([`flex w-full h-full flex-col overflow-y-auto`]),id:`overview-scroll-container`,children:J(Hv,{selectedEvent:e.selectedEvent})})});case`optimize`:return J(ly,{children:J(Bv,{selectedEvent:e.selectedEvent})})}e.route},ly=({children:e})=>{let{notificationState:t}=vv();if(!t.selectedEvent)throw Error(`Invariant: d must have selected event when viewing render explanation`);return J(`div`,{className:Z([`w-full h-full flex flex-col gap-y-2`]),children:[J(`div`,{className:Z([`h-[50px] w-full`]),children:J(jv,{selectedEvent:t.selectedEvent})}),J(`div`,{className:Z([`h-calc(100%-50px) flex flex-col overflow-y-auto px-3`]),children:e})]})},uy=({selectedEvent:e})=>{let t=_v(e);switch(e.kind){case`interaction`:return J(`div`,{className:Z([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:J(`div`,{className:Z([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[J(`div`,{className:Z([`flex items-center gap-x-2 `]),children:[J(`span`,{className:Z([`text-[#5a5a5a] mr-0.5`]),children:e.type===`click`?`Clicked `:`Typed in `}),J(`span`,{children:mv(e.componentPath)}),J(`div`,{className:Z([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[hv(e.timing).toFixed(0),`ms processing time`]})]}),J(`div`,{className:Z([`flex items-center gap-x-2  justify-end ml-auto`]),children:J(`div`,{className:Z([`p-2 flex justify-center items-center border-[#27272A]`]),children:J(`button`,{onClick:()=>{Qp.value={view:`none`}},title:`Close`,children:J(Sv,{size:18,className:`text-[#6F6F78]`})})})})]})});case`dropped-frames`:return J(`div`,{className:Z([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:J(`div`,{className:Z([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[J(`div`,{className:Z([`flex items-center gap-x-2 `]),children:[`FPS Drop`,J(`div`,{className:Z([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[`dropped to `,e.fps,` FPS`]})]}),J(`div`,{className:Z([`flex items-center gap-x-2 w-2/4 justify-end ml-auto`]),children:J(`div`,{className:Z([`p-2 flex justify-center items-center border-[#27272A]`]),children:J(`button`,{onClick:()=>{Qp.value={view:`none`}},children:J(Sv,{size:18,className:`text-[#6F6F78]`})})})})]})})}},dy=({flashingItemsCount:e,totalEvents:t})=>{let[n,r]=U(!1),i=G(0),a=G(0);return W(()=>{if(i.current>=t)return;let e=Date.now()-a.current;if(e>=250){r(!1);let e=setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50);return()=>clearTimeout(e)}else{let n=250-e,o=setTimeout(()=>{r(!1),setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50)},n);return()=>clearTimeout(o)}},[e]),n},fy=({item:e,shouldFlash:t})=>{let[n,r]=U(!1),i=e.events.map(_v).reduce((e,t)=>{switch(t){case`high`:return`high`;case`needs-improvement`:return e===`high`?`high`:`needs-improvement`;case`low`:return e}},`low`),a=dy({flashingItemsCount:e.events.reduce((e,n)=>t(n.id)?e+1:e,0),totalEvents:e.events.length});return J(`div`,{className:Z([`flex flex-col gap-y-0.5`]),children:[J(`button`,{onClick:()=>r(e=>!e),className:Z([`pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,a&&!n&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[J(`div`,{className:Z([`w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5`]),children:[J(`span`,{className:Z([`min-w-fit`]),children:J(bv,{className:Z([`text-[#A1A1AA] transition-transform`,n?`rotate-90`:``]),size:14},`chevron-${e.timestamp}`)}),J(`span`,{className:Z([`text-xs`]),children:e.kind===`collapsed-frame-drops`?`FPS Drops`:mv(e.events.at(0)?.componentPath??[])})]}),J(`div`,{className:Z([`ml-auto min-w-fit flex justify-end items-center`]),children:J(`div`,{style:{lineHeight:`10px`},className:Z([`w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[`x`,e.events.length]})})]}),n&&J(py,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>J(gy,{event:e,shouldFlash:t(e.id)}))})]})},py=({children:e})=>J(`div`,{className:`relative pl-6 flex flex-col gap-y-1`,children:[J(`div`,{className:`absolute left-3 top-0 bottom-0 w-px bg-[#27272A]`}),e]}),my=e=>{let t=G([]),[n,r]=U(new Set),i=G(!0);return W(()=>{if(i.current){i.current=!1,t.current=e;return}let n=new Set(e.map(e=>e.id)),a=new Set(t.current.map(e=>e.id)),o=new Set;n.forEach(e=>{a.has(e)||o.add(e)}),o.size>0&&(r(o),setTimeout(()=>{r(new Set)},2e3)),t.current=e},[e]),e=>n.has(e)},hy=({shouldFlash:e})=>{let[t,n]=U(e);return W(()=>{if(e){n(!0);let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)}},[e]),t},gy=({event:e,shouldFlash:t})=>{let{notificationState:n,setNotificationState:r}=vv(),i=_v(e),a=hy({shouldFlash:t});switch(e.kind){case`interaction`:return J(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:Z([`pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[J(`div`,{className:Z([`w-4/5 flex items-center justify-start h-full gap-x-1.5`]),children:[J(`span`,{className:Z([`min-w-fit text-xs`]),children:y_(()=>{switch(e.type){case`click`:return J(Ev,{size:14});case`keyboard`:return J(Dv,{size:14})}})}),J(`span`,{className:Z([`text-xs pr-1 truncate`]),children:mv(e.componentPath)})]}),J(`div`,{className:Z([` min-w-fit flex justify-end items-center ml-auto`]),children:J(`div`,{style:{lineHeight:`10px`},className:Z([`gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]`,i===`low`&&`bg-green-500/50`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:J(`div`,{style:{lineHeight:`10px`},className:Z([`text-[10px] text-white flex items-end`]),children:[hv(e.timing).toFixed(0),`ms`]})})})]});case`dropped-frames`:return J(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:Z([`pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[J(`div`,{className:Z([`w-4/5 flex items-center justify-start h-full text-xs truncate`]),children:[J(kv,{size:14,className:`mr-1.5`}),` FPS Drop`]}),J(`div`,{className:Z([` min-w-fit flex justify-end items-center ml-auto`]),children:J(`div`,{style:{lineHeight:`10px`},className:Z([`w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[e.fps,` FPS`]})})]})}},_y=e=>e.reduce((e,t)=>{let n=e.at(-1);if(!n)return[{kind:`single`,event:t,timestamp:t.timestamp}];switch(n.kind){case`collapsed-keyboard`:return t.kind===`interaction`&&t.type===`keyboard`&&t.componentPath.join(`-`)===n.events[0].componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`single`:return n.event.kind===`interaction`&&n.event.type===`keyboard`&&t.kind===`interaction`&&t.type===`keyboard`&&n.event.componentPath.join(`-`)===t.componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:n.event.kind===`dropped-frames`&&t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`collapsed-frame-drops`:return t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}]}},[]),vy=(e=150)=>{let{notificationState:t}=vv(),[n,r]=U(t.events);return W(()=>{setTimeout(()=>{r(t.events)},e)},[t.events]),[n,r]},yy=()=>{let{notificationState:e,setNotificationState:t}=vv(),n=my(e.events),[r,i]=vy(),a=_y(r).toSorted((e,t)=>t.timestamp-e.timestamp);return J(`div`,{className:Z([`w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto`]),children:[J(`div`,{className:Z([`text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between`]),children:[J(`span`,{children:`History`}),J(Av,{wrapperProps:{className:`h-full flex items-center justify-center ml-auto`},triggerContent:J(`button`,{className:Z([`hover:bg-[#18181B] rounded-full p-2`]),title:`Clear all events`,onClick:()=>{nv.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:e.route===`other-visualization`?`other-visualization`:`render-visualization`})),i([])},children:J(Ov,{className:Z([``]),size:16})}),children:J(`div`,{className:Z([`w-full flex justify-center`]),children:`Clear all events`})})]}),J(`div`,{className:Z([`flex flex-col px-1 gap-y-1`]),children:[a.length===0&&J(`div`,{className:Z([`flex items-center justify-center text-zinc-500 text-sm py-4`]),children:`No Events`}),a.map(e=>y_(()=>{switch(e.kind){case`collapsed-keyboard`:return J(fy,{shouldFlash:n,item:e});case`single`:return J(gy,{event:e.event,shouldFlash:n(e.event.id)},e.event.id);case`collapsed-frame-drops`:return J(fy,{shouldFlash:n,item:e})}}))]})]})},by=e=>Object.values(e).map(e=>({id:g_(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberContext.changesCounts.get(t.name)??0})),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberProps.changesCounts.get(t.name)??0})),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>({index:t.name,count:e.changes.fiberState.changesCounts.get(Number(t.name))??0}))}})),xy=e=>{W(()=>{let t=setInterval(()=>{e.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||e.elements.length===0){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),e.elements.length===0&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(t)}},[e])},Sy=()=>{let e=rv(),t=[];return xy(t),e.state.events.forEach(e=>{let n=by(e.kind===`interaction`?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders),r=n.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case`interaction`:{let{commitEnd:i,jsEndDetail:a,interactionStartDetail:o,rafStart:s}=e.data.meta.detailedTiming;a-o-r<0&&v_(`js time must be longer than render time`);let c=Math.max(0,a-o-r),l=Math.max(e.data.meta.latency-(i-o),0);t.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:n,id:e.id,kind:`interaction`,memory:null,timestamp:e.data.startAt,type:e.data.meta.detailedTiming.interactionType===`keyboard`?`keyboard`:`click`,timing:{renderTime:r,kind:`interaction`,otherJSTime:c,framePreparation:s-a,frameConstruction:i-s,frameDraw:l}});return}case`long-render`:t.push({kind:`dropped-frames`,id:e.id,memory:null,timing:{kind:`dropped-frames`,renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:n,timestamp:e.data.startAt,fps:e.data.meta.fps});return}}),t},Cy=1e3,wy=()=>{let{notificationState:e,setNotificationState:t}=vv(),n=G(null),r=G(null),i=G(0),[a]=vy(),o=a.filter(e=>_v(e)===`high`).length;return W(()=>{let e=localStorage.getItem(`react-scan-notifications-audio`);if(e!==`false`&&e!==`true`){localStorage.setItem(`react-scan-notifications-audio`,`false`);return}if(e!==`false`){t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),W(()=>{let{audioNotificationsOptions:t}=e;if(!t.enabled||o===0||n.current&&n.current>=o)return;r.current&&clearTimeout(r.current);let a=Date.now()-i.current,s=Math.max(0,Cy-a);r.current=setTimeout(()=>{Lf(t.audioContext),n.current=o,i.current=Date.now(),r.current=null},s)},[o]),W(()=>{o===0&&(n.current=null)},[o]),W(()=>()=>{r.current&&clearTimeout(r.current)},[]),null},Ty=sf((e,t)=>{let n=Sy(),[r,i]=U({detailsExpanded:!1,events:n,filterBy:`latest`,moreInfoExpanded:!1,route:`render-visualization`,selectedEvent:n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return r.events=n,J(yv.Provider,{value:{notificationState:r,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(n=>{let r={...n,route:e,routeMessage:t};switch(e){case`render-visualization`:return ry(),{...r,selectedFiber:null};case`optimize`:return ry(),{...r,selectedFiber:null};case`other-visualization`:return ry(),{...r,selectedFiber:null};case`render-explanation`:return ry(),r}})}},children:[J(wy,{}),J(Ey,{ref:t})]})}),Ey=sf((e,t)=>{let{notificationState:n}=vv();return J(`div`,{ref:t,className:Z([`h-full w-full flex flex-col`]),children:[n.selectedEvent&&J(`div`,{className:Z([`w-full h-[48px] flex flex-col`,n.moreInfoExpanded&&`h-[235px]`,n.moreInfoExpanded&&n.selectedEvent.kind===`dropped-frames`&&`h-[150px]`]),children:[J(uy,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&J(Dy,{})]}),J(`div`,{className:Z([`flex `,n.selectedEvent?`h-[calc(100%-48px)]`:`h-full`,n.moreInfoExpanded&&`h-[calc(100%-200px)]`,n.moreInfoExpanded&&n.selectedEvent?.kind===`dropped-frames`&&`h-[calc(100%-150px)]`]),children:[J(`div`,{className:Z([`h-full min-w-[200px]`]),children:J(yy,{})}),J(`div`,{className:Z([`w-[calc(100%-200px)] h-full overflow-y-auto`]),children:J(cy,{})})]})]})}),Dy=()=>{let{notificationState:e}=vv();if(!e.selectedEvent)throw Error(`Invariant must have selected event for more info`);let t=e.selectedEvent;return J(`div`,{className:Z([`px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]`,t.kind===`dropped-frames`&&`h-[calc(100%-25px)]`]),children:J(`div`,{className:Z([`flex flex-col gap-y-4 h-full`]),children:y_(()=>{switch(t.kind){case`interaction`:return J(H,{children:[J(`div`,{className:Z([`flex items-center gap-x-3`]),children:[J(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:t.type===`click`?`Clicked component location`:`Typed in component location`}),J(`div`,{className:`font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto`,children:t.componentPath.toReversed().map((e,n)=>J(H,{children:[J(`span`,{style:{lineHeight:`14px`},className:`text-[10px] whitespace-nowrap`,children:e},e),n<t.componentPath.length-1&&J(`span`,{className:`text-[#6F6F78] mx-0.5`,children:`‹`})]}))})]}),J(`div`,{className:Z([`flex items-center gap-x-3`]),children:[J(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),J(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[hv(t.timing).toFixed(0),`ms`]})]}),J(`div`,{className:Z([`flex items-center gap-x-3`]),children:[J(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),J(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case`dropped-frames`:return J(H,{children:[J(`div`,{className:Z([`flex items-center gap-x-3`]),children:[J(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),J(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[hv(t.timing).toFixed(0),`ms`]})]}),J(`div`,{className:Z([`flex items-center gap-x-3`]),children:[J(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),J(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},Oy=em(()=>{let e=Sy(),[t,n]=U(e);W(()=>{let t=setTimeout(()=>{n(e)},600);return()=>{clearTimeout(t)}},[e]);let r=$.inspectState,i=r.value.kind===`inspecting`,a=r.value.kind===`focused`,[o,s]=U([]),c=md(()=>{switch($.inspectState.value.kind){case`inspecting`:Qp.value={view:`none`},$.inspectState.value={kind:`inspect-off`};return;case`focused`:Qp.value={view:`inspector`},$.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`inspect-off`:Qp.value={view:`none`},$.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`uninitialized`:return}},[]),l=md(e=>{if(e.preventDefault(),e.stopPropagation(),!ob.instrumentation)return;let t=!ob.instrumentation.isPaused.value;ob.instrumentation.isPaused.value=t,Wp(`react-scan-options`,{...Up(`react-scan-options`),enabled:!t})},[]);Zd(()=>{$.inspectState.value.kind===`uninitialized`&&($.inspectState.value={kind:`inspect-off`})});let u=null,d=`#999`;return i?(u=J(Bf,{name:`icon-inspect`}),d=`#8e61e3`):a?(u=J(Bf,{name:`icon-focus`}),d=`#8e61e3`):(u=J(Bf,{name:`icon-inspect`}),d=`#999`),fd(()=>{Qp.value.view===`notifications`&&s([...new Set(e.map(e=>e.id)).values()])},[e.length,Qp.value.view]),J(`div`,{className:`flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden`,children:[J(`div`,{className:`h-full flex items-center min-w-fit`,children:J(`button`,{type:`button`,id:`react-scan-inspect-element`,title:`Inspect element`,onClick:c,className:`button flex items-center justify-center h-full w-full pl-3 pr-2.5`,style:{color:d},children:u})}),J(`div`,{className:`h-full flex items-center justify-center`,children:J(`button`,{type:`button`,id:`react-scan-notifications`,title:`Notifications`,onClick:()=>{switch($.inspectState.value.kind!==`inspect-off`&&($.inspectState.value={kind:`inspect-off`}),Qp.value.view){case`inspector`:$.inspectState.value={kind:`inspect-off`},s([...new Set(e.map(e=>e.id)).values()]),Qp.value={view:`notifications`};return;case`notifications`:Qp.value={view:`none`};return;case`none`:s([...new Set(e.map(e=>e.id)).values()]),Qp.value={view:`notifications`};return}},className:`button flex items-center justify-center h-full pl-2.5 pr-2.5`,style:{color:d},children:J(xv,{events:t.filter(e=>!o.includes(e.id)).map(e=>_v(e)===`high`),size:16,className:Z([`text-[#999]`,Qp.value.view===`notifications`&&`text-[#8E61E3]`])})})}),J(p_,{checked:!ob.instrumentation?.isPaused.value,onChange:l,className:`place-self-center`,title:`Outline Re-renders`}),ob.options.value.showFPS&&J(h_,{})]})}),ky=zd(()=>$.inspectState.value.kind===`inspecting`),Ay=zd(()=>Z(`relative`,`flex-1`,`flex flex-col`,`rounded-t-lg`,`overflow-hidden`,`opacity-100`,`transition-[opacity]`,ky.value&&`opacity-0 duration-0 delay-0`)),jy=zd(()=>Qp.value.view===`inspector`),My=zd(()=>Qp.value.view===`notifications`),Ny=()=>J(`div`,{className:Z(`flex flex-1 flex-col`,`overflow-hidden z-10`,`rounded-lg`,`bg-black`,`opacity-100`,`transition-[border-radius]`,`peer-hover/left:rounded-l-none`,`peer-hover/right:rounded-r-none`,`peer-hover/top:rounded-t-none`,`peer-hover/bottom:rounded-b-none`),children:[J(`div`,{className:Ay,children:[J(f_,{}),J(`div`,{className:Z(`relative`,`flex-1 flex`,`text-white`,`bg-[#0A0A0A]`,`transition-opacity delay-150`,`overflow-hidden`,`border-b border-[#222]`),children:[J(Py,{isOpen:jy,children:J(th,{})}),J(Py,{isOpen:My,children:J(Ty,{})})]})]}),J(Oy,{})]}),Py=({isOpen:e,children:t})=>J(`div`,{className:Z(`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,e.value&&`opacity-100 delay-150 pointer-events-auto`),children:J(`div`,{className:`absolute inset-0 flex`,children:t})}),Fy=(e,t,n)=>e+(t-e)*n,Iy={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Ly=Wf&&window.devicePixelRatio||1,Ry=()=>{let e=G(null),t=G(null),n=G(null),r=G(null),i=G(null),a=G(0),o=G(),s=G(new Map),c=G(!1),l=G(0),u=(e,t,n,r)=>{e.save(),e.strokeStyle=`white`,e.fillStyle=`white`,e.lineWidth=1.5;let i=r*.6,a=r*.5,o=t+(r-i)/2,s=n;e.beginPath(),e.arc(o+i/2,s+a/2,i/2,Math.PI,0,!1),e.stroke();let c=r*.8,l=r*.5,u=t+(r-c)/2,d=n+a/2;e.fillRect(u,d,c,l),e.restore()},d=(e,t,n,i)=>{if(!i)return;let a=(i?.type&&z(i.type))??`Unknown`;e.save(),e.font=`12px system-ui, -apple-system, sans-serif`;let o=e.measureText(a).width,s=n===`locked`?14:0,c=n===`locked`?6:0,l=o+16+s+c,d=t.left,f=t.top-24-4;if(e.fillStyle=`rgb(37, 37, 38, .75)`,e.beginPath(),e.roundRect(d,f,l,24,3),e.fill(),n===`locked`){let t=d+8,n=f+(24-s)/2+2;u(e,t,n,s),r.current={x:t,y:n,width:s,height:s}}else r.current=null;e.fillStyle=`white`,e.textBaseline=`middle`;let p=d+8+(n===`locked`?s+c:0);e.fillText(a,p,f+24/2),e.restore()},f=(e,t,r,i)=>{if(!n.current)return;let a=n.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle=`rgba(142, 97, 227, 0.5)`,t.fillStyle=`rgba(173, 97, 230, 0.10)`,r===`locked`?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),d(t,a,r,i)},p=(e,t,r,i,s,c)=>{let u=ob.options.value.animationSpeed,d=Iy.speeds[u]??Iy.speeds.off,p=o=>{if(o-l.current<Iy.frameInterval){a.current=requestAnimationFrame(p);return}if(l.current=o,!n.current){cancelAnimationFrame(a.current);return}n.current={left:Fy(n.current.left,r.left,d),top:Fy(n.current.top,r.top,d),width:Fy(n.current.width,r.width,d),height:Fy(n.current.height,r.height,d)},f(e,t,i,s),Math.abs(n.current.left-r.left)>.1||Math.abs(n.current.top-r.top)>.1||Math.abs(n.current.width-r.width)>.1||Math.abs(n.current.height-r.height)>.1?a.current=requestAnimationFrame(p):(n.current=r,f(e,t,i,s),cancelAnimationFrame(a.current),t.restore(),c?.())};cancelAnimationFrame(a.current),clearTimeout(o.current),a.current=requestAnimationFrame(p),o.current=setTimeout(()=>{cancelAnimationFrame(a.current),n.current=r,f(e,t,i,s),t.restore(),c?.()},1e3)},m=(e,t,r,i,a)=>{if(t.save(),!n.current){n.current=r,f(e,t,i,a),t.restore();return}p(e,t,r,i,a)},h=async(e,t,n,r)=>{if(!e||!t||!n)return;let{parentCompositeFiber:i}=ch(e),a=await sh(e);!i||!a||m(t,n,a,r,i)},g=()=>{for(let e of s.current.values())e?.()},_=e=>{let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height),n.current=null,r.current=null,i.current=null,e.classList.remove(`fade-in`),c.current=!1},v=t=>{if(!e.current||c.current)return;let n=r=>{!e.current||r.propertyName!==`opacity`||!c.current||(e.current.removeEventListener(`transitionend`,n),_(e.current),t?.())},r=s.current.get(`fade-out`);r&&(r(),s.current.delete(`fade-out`)),e.current.addEventListener(`transitionend`,n),s.current.set(`fade-out`,()=>{e.current?.removeEventListener(`transitionend`,n)}),c.current=!0,e.current.classList.remove(`fade-in`),requestAnimationFrame(()=>{e.current?.classList.add(`fade-out`)})},y=()=>{e.current&&(c.current=!1,e.current.classList.remove(`fade-out`),requestAnimationFrame(()=>{e.current?.classList.add(`fade-in`)}))},b=e=>{e!==i.current&&(i.current=e,dh.has(e.tagName)?v():y(),$.inspectState.value={kind:`inspecting`,hoveredDomElement:e})},x=()=>{!n.current||!e.current||c.current||v()},S=Hp(n=>{if($.inspectState.peek().kind!==`inspecting`||!t.current)return;t.current.style.pointerEvents=`none`;let r=document.elementFromPoint(n?.clientX??0,n?.clientY??0);if(t.current.style.removeProperty(`pointer-events`),clearTimeout(o.current),r&&r!==e.current){let{parentCompositeFiber:e}=ch(r);if(e){let t=fh(e);if(t){b(t);return}}}x()},32),C=(e,t)=>{let n=r.current;if(!n)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,s=(e.clientX-i.left)*a,c=(e.clientY-i.top)*o,l=s/Ly,u=c/Ly;return l>=n.x&&l<=n.x+n.width&&u>=n.y&&u<=n.y+n.height},w=e=>{e.kind===`focused`&&($.inspectState.value={kind:`inspecting`,hoveredDomElement:e.focusedDomElement})},T=e=>{let t=[`react-scan-inspect-element`,`react-scan-power`];if(e.target instanceof HTMLElement&&t.includes(e.target.id))return;let n=i.current?.tagName;if(n&&dh.has(n))return;e.preventDefault(),e.stopPropagation();let r=i.current??document.elementFromPoint(e.clientX,e.clientY);if(!r)return;let a=e.composedPath().at(0);if(a instanceof HTMLElement&&t.includes(a.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,a.dispatchEvent(t);return}let{parentCompositeFiber:o}=ch(r);if(!o)return;let s=fh(o);if(!s){i.current=null,$.inspectState.value={kind:`inspect-off`};return}$.inspectState.value={kind:`focused`,focusedDomElement:s,fiber:o}},E=n=>{if(n.__reactScanSyntheticEvent)return;let r=$.inspectState.peek(),i=e.current;if(!(!i||!t.current)){if(C(n,i)){n.preventDefault(),n.stopPropagation(),w(r);return}r.kind===`inspecting`&&T(n)}},ee=t=>{if(t.key!==`Escape`)return;let r=$.inspectState.peek();if(e.current&&document.activeElement?.id!==`react-scan-root`&&(Qp.value={view:`none`},r.kind===`focused`||r.kind===`inspecting`))switch(t.preventDefault(),t.stopPropagation(),r.kind){case`focused`:y(),n.current=null,i.current=r.focusedDomElement,$.inspectState.value={kind:`inspecting`,hoveredDomElement:r.focusedDomElement};break;case`inspecting`:v(()=>{Jp.value=!1,$.inspectState.value={kind:`inspect-off`}});break}},D=(e,r,o)=>{s.current.get(e.kind)?.(),t.current&&e.kind!==`inspecting`&&(t.current.style.pointerEvents=`none`),a.current&&cancelAnimationFrame(a.current);let c;switch(e.kind){case`inspect-off`:v();return;case`inspecting`:h(e.hoveredDomElement,r,o,`inspecting`);break;case`focused`:if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),Qp.value={view:`inspector`},h(e.focusedDomElement,r,o,`locked`),c=$.lastReportTime.subscribe(()=>{if(a.current&&n.current){let{parentCompositeFiber:t}=ch(e.focusedDomElement);t&&h(e.focusedDomElement,r,o,`locked`)}}),c&&s.current.set(e.kind,c);break}},O=(e,t)=>{let n=e.getBoundingClientRect();e.width=n.width*Ly,e.height=n.height*Ly,t.scale(Ly,Ly),t.save()},te=()=>{let t=$.inspectState.peek(),r=e.current;if(!r)return;let i=r?.getContext(`2d`);i&&(cancelAnimationFrame(a.current),clearTimeout(o.current),O(r,i),n.current=null,t.kind===`focused`&&t.focusedDomElement?h(t.focusedDomElement,r,i,`locked`):t.kind===`inspecting`&&t.hoveredDomElement&&h(t.hoveredDomElement,r,i,`inspecting`))},ne=t=>{let n=$.inspectState.peek(),r=e.current;r&&(n.kind===`inspecting`||C(t,r))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return W(()=>{let t=e.current;if(!t)return;let n=t?.getContext(`2d`);if(!n)return;O(t,n);let r=$.inspectState.subscribe(e=>{D(e,t,n)});return window.addEventListener(`scroll`,te,{passive:!0}),window.addEventListener(`resize`,te,{passive:!0}),document.addEventListener(`pointermove`,S,{passive:!0,capture:!0}),document.addEventListener(`pointerdown`,ne,{capture:!0}),document.addEventListener(`click`,E,{capture:!0}),document.addEventListener(`keydown`,ee,{capture:!0}),()=>{g(),r(),window.removeEventListener(`scroll`,te),window.removeEventListener(`resize`,te),document.removeEventListener(`pointermove`,S,{capture:!0}),document.removeEventListener(`click`,E,{capture:!0}),document.removeEventListener(`pointerdown`,ne,{capture:!0}),document.removeEventListener(`keydown`,ee,{capture:!0}),a.current&&cancelAnimationFrame(a.current),clearTimeout(o.current)}},[]),J(H,{children:[J(`div`,{ref:t,className:Z(`fixed top-0 left-0 w-screen h-screen`,`z-[214748365]`),style:{pointerEvents:`none`}}),J(`canvas`,{ref:e,dir:`ltr`,className:Z(`react-scan-inspector-overlay`,`fixed top-0 left-0 w-screen h-screen`,`pointer-events-none`,`z-[214748367]`)})]})},zy=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-Y*2,this.maxHeight=t-Y*2}rightEdge(e){return this.width-e-Y}bottomEdge(e){return this.height-e-Y}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},By,Vy=()=>{let e=window.innerWidth,t=window.innerHeight;return By&&By.width===e&&By.height===t||(By=new zy(e,t)),By},Hy=(e,t,n,r,i)=>{if(n){if(e===`top-left`)return`bottom-right`;if(e===`top-right`)return`bottom-left`;if(e===`bottom-left`)return`top-right`;if(e===`bottom-right`)return`top-left`;let[n,r]=t.split(`-`);if(e===`left`)return`${n}-right`;if(e===`right`)return`${n}-left`;if(e===`top`)return`bottom-${r}`;if(e===`bottom`)return`top-${r}`}if(r){if(e===`left`)return`${t.split(`-`)[0]}-right`;if(e===`right`)return`${t.split(`-`)[0]}-left`}if(i){if(e===`top`)return`bottom-${t.split(`-`)[1]}`;if(e===`bottom`)return`top-${t.split(`-`)[1]}`}return t},Uy=(e,t,n)=>{let r=getComputedStyle(document.body).direction===`rtl`,i=window.innerWidth,a=window.innerHeight,o=t===Vf.width,s=o?t:Math.min(t,i-Y*2),c=o?n:Math.min(n,a-Y*2),l,u,d=Y,f=i-s-Y,p=Y,m=a-c-Y;switch(e){case`top-right`:l=r?-d:f,u=p;break;case`bottom-right`:l=r?-d:f,u=m;break;case`bottom-left`:l=r?-f:d,u=m;break;case`top-left`:l=r?-f:d,u=p;break;default:l=d,u=p;break}return o&&(l=r?Math.min(-d,Math.max(l,-f)):Math.max(d,Math.min(l,f)),u=Math.max(p,Math.min(u,m))),{x:l,y:u}},Wy=(e,t)=>{let[n,r]=t.split(`-`);return e!==n&&e!==r},Gy=(e,t,n,r)=>n&&r?!0:!n&&!r?Wy(e,t):n?e!==t.split(`-`)[0]:r?e!==t.split(`-`)[1]:!1,Ky=(e,t,n)=>{let r=n?Vf.width:Vf.initialHeight,i=n?Vy().maxWidth:Vy().maxHeight,a=e+t;return Math.min(Math.max(r,a),i)},qy=(e,t,n,r,i)=>{let a=getComputedStyle(document.body).direction===`rtl`,o=window.innerWidth-Y*2,s=window.innerHeight-Y*2,c=t.width,l=t.height,u=n.x,d=n.y;if(a&&e.includes(`right`)){let e=-n.x+t.width-Y,i=Math.min(t.width+r,e);c=Math.min(o,Math.max(Vf.width,i)),u=n.x+(c-t.width)}if(a&&e.includes(`left`)){let e=window.innerWidth-n.x-Y,i=Math.min(t.width-r,e);c=Math.min(o,Math.max(Vf.width,i))}if(!a&&e.includes(`right`)){let e=window.innerWidth-n.x-Y,i=Math.min(t.width+r,e);c=Math.min(o,Math.max(Vf.width,i))}if(!a&&e.includes(`left`)){let e=n.x+t.width-Y,i=Math.min(t.width-r,e);c=Math.min(o,Math.max(Vf.width,i)),u=n.x-(c-t.width)}if(e.includes(`bottom`)){let e=window.innerHeight-n.y-Y,r=Math.min(t.height+i,e);l=Math.min(s,Math.max(Vf.initialHeight,r))}if(e.includes(`top`)){let e=n.y+t.height-Y,r=Math.min(t.height-i,e);l=Math.min(s,Math.max(Vf.initialHeight,r)),d=n.y-(l-t.height)}let f=Y,p=window.innerWidth-Y-c,m=Y,h=window.innerHeight-Y-l;return u=a?Math.min(-f,Math.max(u,-p)):Math.max(f,Math.min(u,p)),d=Math.max(m,Math.min(d,h)),{newSize:{width:c,height:l},newPosition:{x:u,y:d}}},Jy=e=>{let t=Vy(),n={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},r=`top-left`;for(let e in n)n[e]<n[r]&&(r=e);return r},Yy=(e,t,n,r,i=100)=>{let a=n===void 0?0:e-n,o=r===void 0?0:t-r,s=window.innerWidth/2,c=window.innerHeight/2,l=a>i,u=a<-i,d=o>i,f=o<-i;if(l||u){let e=t>c;return l?e?`bottom-right`:`top-right`:e?`bottom-left`:`top-left`}if(d||f){let t=e>s;return d?t?`bottom-right`:`bottom-left`:t?`top-right`:`top-left`}return e>s?t>c?`bottom-right`:`top-right`:t>c?`bottom-left`:`top-left`},Xy=({position:e})=>{let t=G(null),n=G(null),r=G(null),i=G(null);return W(()=>{let a=t.current;if(!a)return;let o=()=>{a.classList.remove(`pointer-events-none`);let t=$.inspectState.value.kind===`focused`,n=Qp.value.view!==`none`;(t||n)&&Gy(e,Q.value.corner,Q.value.dimensions.isFullWidth,Q.value.dimensions.isFullHeight)?a.classList.remove(`hidden`,`pointer-events-none`,`opacity-0`):a.classList.add(`hidden`,`pointer-events-none`,`opacity-0`)},s=Q.subscribe(e=>{n.current!==null&&r.current!==null&&i.current!==null&&e.dimensions.width===n.current&&e.dimensions.height===r.current&&e.corner===i.current||(o(),n.current=e.dimensions.width,r.current=e.dimensions.height,i.current=e.corner)}),c=$.inspectState.subscribe(()=>{o()});return()=>{s(),c(),n.current=null,r.current=null,i.current=null}},[]),J(`div`,{ref:t,onPointerDown:md(t=>{t.preventDefault(),t.stopPropagation();let n=Yp.value;if(!n)return;let r=n.style,{dimensions:i}=Q.value,a=t.clientX,o=t.clientY,s=i.width,c=i.height,l=i.position;Q.value={...Q.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:s,height:c,position:l}};let u=null,d=t=>{u||=(r.transition=`none`,requestAnimationFrame(()=>{let{newSize:n,newPosition:i}=qy(e,{width:s,height:c},l,t.clientX-a,t.clientY-o);r.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,r.width=`${n.width}px`,r.height=`${n.height}px`;let d=Math.floor(n.width-Hf/2),f=Q.value.componentsTree.width,p=Math.min(d,Math.max(Hf,f));Q.value={...Q.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.width,height:n.height,position:i},componentsTree:{...Q.value.componentsTree,width:p}},u=null}))},f=()=>{u&&=(cancelAnimationFrame(u),null),document.removeEventListener(`pointermove`,d),document.removeEventListener(`pointerup`,f);let{dimensions:e,corner:t}=Q.value,i=Vy(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),s=a&&o,c=t;(s||a||o)&&(c=Jy(e.position));let l=Uy(c,e.width,e.height),p=()=>{n.removeEventListener(`transitionend`,p)};n.addEventListener(`transitionend`,p),r.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,Q.value={...Q.value,corner:c,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l}},Wp(Uf,{corner:c,dimensions:Q.value.dimensions,lastDimensions:Q.value.lastDimensions,componentsTree:Q.value.componentsTree})};document.addEventListener(`pointermove`,d,{passive:!0}),document.addEventListener(`pointerup`,f)},[]),onDblClick:md(t=>{t.preventDefault(),t.stopPropagation();let n=Yp.value;if(!n)return;let r=n.style,{dimensions:i,corner:a}=Q.value,o=Vy(),s=o.isFullWidth(i.width),c=o.isFullHeight(i.height),l=s&&c,u=(s||c)&&!l,d=i.width,f=i.height,p=Hy(e,a,l,s,c);e===`left`||e===`right`?(d=s?i.width:o.maxWidth,u&&(d=s?Vf.width:o.maxWidth)):(f=c?i.height:o.maxHeight,u&&(f=c?Vf.initialHeight:o.maxHeight)),l&&(e===`left`||e===`right`?d=Vf.width:f=Vf.initialHeight);let m=Uy(p,d,f),h={isFullWidth:o.isFullWidth(d),isFullHeight:o.isFullHeight(f),width:d,height:f,position:m},g=Math.floor(d-Vf.width/2),_=Q.value.componentsTree.width,v=Math.floor(d*.3),y=s?Hf:(e===`left`||e===`right`)&&!s?Math.min(g,Math.max(Hf,v)):Math.min(g,Math.max(Hf,_));requestAnimationFrame(()=>{Q.value={corner:p,dimensions:h,lastDimensions:i,componentsTree:{...Q.value.componentsTree,width:y}},r.transition=`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,r.width=`${d}px`,r.height=`${f}px`,r.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),Wp(Uf,{corner:p,dimensions:h,lastDimensions:i,componentsTree:{...Q.value.componentsTree,width:y}})},[]),className:Z(`absolute z-50`,`flex items-center justify-center`,`group`,`transition-colors select-none`,`peer`,{"resize-left peer/left":e===`left`,"resize-right peer/right z-10":e===`right`,"resize-top peer/top":e===`top`,"resize-bottom peer/bottom":e===`bottom`}),children:J(`span`,{className:`resize-line-wrapper`,children:J(`span`,{className:`resize-line`,children:J(Bf,{name:`icon-ellipsis`,size:18,className:Z(`text-neutral-400`,(e===`left`||e===`right`)&&`rotate-90`)})})})})},Zy=()=>{let e=G(null),t=G(!1),n=G(0),r=G(0),i=md((i=!0)=>{if(!e.current)return;let{corner:a}=Q.value,o,s;if(t.current){let e=Q.value.lastDimensions;o=Ky(e.width,0,!0),s=Ky(e.height,0,!1)}else{let e=Q.value.dimensions;e.width>n.current&&(Q.value={...Q.value,lastDimensions:{isFullWidth:e.isFullWidth,isFullHeight:e.isFullHeight,width:e.width,height:e.height,position:e.position}}),o=n.current,s=r.current}let c=Uy(a,o,s),l=o<Vf.width||s<Vf.initialHeight,u=i&&!l,d=e.current,f=d.style,p=null,m=()=>{Zp(),d.removeEventListener(`transitionend`,m),p&&=(cancelAnimationFrame(p),null)};d.addEventListener(`transitionend`,m),f.transition=`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,p=requestAnimationFrame(()=>{f.width=`${o}px`,f.height=`${s}px`,f.transform=`translate3d(${c.x}px, ${c.y}px, 0)`,p=null});let h={isFullWidth:o>=window.innerWidth-Y*2,isFullHeight:s>=window.innerHeight-Y*2,width:o,height:s,position:c};Q.value={corner:a,dimensions:h,lastDimensions:t?Q.value.lastDimensions:o>n.current?h:Q.value.lastDimensions,componentsTree:Q.value.componentsTree},u&&Wp(Uf,{corner:Q.value.corner,dimensions:Q.value.dimensions,lastDimensions:Q.value.lastDimensions,componentsTree:Q.value.componentsTree}),Zp()},[]),a=md(t=>{if(t.preventDefault(),!e.current||t.target.closest(`button`))return;let n=e.current,r=n.style,{dimensions:i}=Q.value,a=t.clientX,o=t.clientY,s=i.position.x,c=i.position.y,l=s,u=c,d=null,f=!1,p=a,m=o,h=e=>{d||=(f=!0,p=e.clientX,m=e.clientY,requestAnimationFrame(()=>{let e=p-a,t=m-o;l=Number(s)+e,u=Number(c)+t,r.transition=`none`,r.transform=`translate3d(${l}px, ${u}px, 0)`,d=null}))},g=()=>{if(!n)return;d&&=(cancelAnimationFrame(d),null),document.removeEventListener(`pointermove`,h),document.removeEventListener(`pointerup`,g);let e=Math.abs(p-a),t=Math.abs(m-o),_=Math.sqrt(e*e+t*t);if(!f||_<60)return;let v=Yy(p,m,a,o,$.inspectState.value.kind===`focused`?80:40);if(v===Q.value.corner){r.transition=`transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`;let e=Q.value.dimensions.position;requestAnimationFrame(()=>{r.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let y=Uy(v,i.width,i.height);if(l===s&&u===c)return;let b=()=>{r.transition=`none`,Zp(),n.removeEventListener(`transitionend`,b),d&&=(cancelAnimationFrame(d),null)};n.addEventListener(`transitionend`,b),r.transition=`transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,requestAnimationFrame(()=>{r.transform=`translate3d(${y.x}px, ${y.y}px, 0)`}),Q.value={corner:v,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:y},lastDimensions:Q.value.lastDimensions,componentsTree:Q.value.componentsTree},Wp(Uf,{corner:v,dimensions:Q.value.dimensions,lastDimensions:Q.value.lastDimensions,componentsTree:Q.value.componentsTree})};document.addEventListener(`pointermove`,h),document.addEventListener(`pointerup`,g)},[]);W(()=>{if(!e.current)return;e.current.style.width=`min-content`,r.current=36,n.current=e.current.offsetWidth,e.current.style.maxWidth=`calc(100vw - ${Y*2}px)`,e.current.style.maxHeight=`calc(100vh - ${Y*2}px)`,$.inspectState.value.kind!==`focused`&&(Q.value={...Q.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.current,height:r.current,position:Q.value.dimensions.position}}),Yp.value=e.current;let a=Q.subscribe(t=>{if(!e.current)return;let{x:n,y:r}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${n}px, ${r}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),o=Qp.subscribe(e=>{t.current=e.view!==`none`,i()}),s=$.inspectState.subscribe(e=>{t.current=e.kind===`focused`,i()}),c=()=>{i(!0)};return window.addEventListener(`resize`,c,{passive:!0}),()=>{window.removeEventListener(`resize`,c),o(),s(),a(),Wp(Uf,{...Xp,corner:Q.value.corner})}},[]);let[o,s]=U(!1);return W(()=>{s(!0)},[]),J(H,{children:[J(Ry,{}),J(Qy.Provider,{value:e.current,children:J(`div`,{id:`react-scan-toolbar`,dir:`ltr`,ref:e,onPointerDown:a,className:Z(`fixed inset-0 rounded-lg shadow-lg`,`flex flex-col`,`font-mono text-[13px]`,`user-select-none`,`opacity-0`,`cursor-move`,`z-[124124124124]`,`animate-fade-in animation-duration-300 animation-delay-300`,`will-change-transform`,`[touch-action:none]`),children:[J(Xy,{position:`top`}),J(Xy,{position:`bottom`}),J(Xy,{position:`left`}),J(Xy,{position:`right`}),J(Ny,{})]})})]})},Qy=Xu(null),$y=()=>J(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:`display: none;`,children:[J(`title`,{children:`React Scan Icons`}),J(`symbol`,{id:`icon-inspect`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),J(`path`,{d:`M5 3a2 2 0 0 0-2 2`}),J(`path`,{d:`M19 3a2 2 0 0 1 2 2`}),J(`path`,{d:`M5 21a2 2 0 0 1-2-2`}),J(`path`,{d:`M9 3h1`}),J(`path`,{d:`M9 21h2`}),J(`path`,{d:`M14 3h1`}),J(`path`,{d:`M3 9v1`}),J(`path`,{d:`M21 9v2`}),J(`path`,{d:`M3 14v1`})]}),J(`symbol`,{id:`icon-focus`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),J(`path`,{d:`M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6`})]}),J(`symbol`,{id:`icon-next`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:J(`path`,{d:`M6 9h6V5l7 7-7 7v-4H6V9z`})}),J(`symbol`,{id:`icon-previous`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:J(`path`,{d:`M18 15h-6v4l-7-7 7-7v4h6v6z`})}),J(`symbol`,{id:`icon-close`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),J(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),J(`symbol`,{id:`icon-replay`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}),J(`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}),J(`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}),J(`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}),J(`circle`,{cx:`12`,cy:`12`,r:`1`}),J(`path`,{d:`M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0`})]}),J(`symbol`,{id:`icon-ellipsis`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`circle`,{cx:`12`,cy:`12`,r:`1`}),J(`circle`,{cx:`19`,cy:`12`,r:`1`}),J(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),J(`symbol`,{id:`icon-copy`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),J(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),J(`symbol`,{id:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:J(`path`,{d:`M20 6 9 17l-5-5`})}),J(`symbol`,{id:`icon-chevron-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:J(`path`,{d:`m9 18 6-6-6-6`})}),J(`symbol`,{id:`icon-settings`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),J(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),J(`symbol`,{id:`icon-flame`,viewBox:`0 0 24 24`,children:J(`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`})}),J(`symbol`,{id:`icon-function`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}),J(`path`,{d:`M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3`}),J(`path`,{d:`M9 11.2h5.7`})]}),J(`symbol`,{id:`icon-triangle-alert`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`}),J(`path`,{d:`M12 9v4`}),J(`path`,{d:`M12 17h.01`})]}),J(`symbol`,{id:`icon-gallery-horizontal-end`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M2 7v10`}),J(`path`,{d:`M6 5v14`}),J(`rect`,{width:`12`,height:`18`,x:`10`,y:`3`,rx:`2`})]}),J(`symbol`,{id:`icon-search`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`circle`,{cx:`11`,cy:`11`,r:`8`}),J(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),J(`symbol`,{id:`icon-lock`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),J(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),J(`symbol`,{id:`icon-lock-open`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),J(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),J(`symbol`,{id:`icon-sanil`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[J(`path`,{d:`M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0`}),J(`circle`,{cx:`10`,cy:`13`,r:`8`}),J(`path`,{d:`M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6`}),J(`path`,{d:`M18 3 19.1 5.2`})]})]}),eb=class extends Du{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?J(`div`,{className:`fixed bottom-4 right-4 z-[124124124124]`,children:J(`div`,{className:`p-3 bg-black rounded-lg shadow-lg w-80`,children:[J(`div`,{className:`flex items-center gap-2 mb-2 text-red-400 text-sm font-medium`,children:[J(Bf,{name:`icon-flame`,className:`text-red-500`,size:14}),`React Scan ran into a problem`]}),J(`div`,{className:`p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),J(`button`,{type:`button`,onClick:this.handleReset,className:`px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5`,children:`Restart`})]})}):this.props.children}},tb=e=>{let t=document.createElement(`div`);t.id=`react-scan-toolbar-root`,window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Yu(J(eb,{children:J(H,{children:[J($y,{}),J(Zy,{})]})}),t);let n=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Yu(null,t),Yu(null,t)),n()},t},nb={name:`react-scan`,version:`0.3.6`,description:`Scan your React app for renders`,keywords:[`react`,`react-scan`,`react scan`,`render`,`performance`],homepage:`https://react-scan.million.dev`,bugs:{url:`https://github.com/aidenybai/react-scan/issues`},repository:{type:`git`,url:`git+https://github.com/aidenybai/react-scan.git`},license:`MIT`,author:{name:`Aiden Bai`,email:`aiden@million.dev`,url:`https://million.dev`},scripts:{"dev:kitchen":`node dist/cli.js http://localhost:5173`,build:`npm run build:css && NODE_ENV=production tsup`,postbuild:`pnpm copy-astro && node ../../scripts/version-warning.mjs`,"build:copy":`npm run build:css && NODE_ENV=production tsup && cat dist/auto.global.js | pbcopy`,"copy-astro":`cp -R src/core/monitor/params/astro dist/core/monitor/params`,"dev:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css --watch`,"dev:tsup":`NODE_ENV=development tsup --watch`,dev:`pnpm copy-astro && npm-run-all --parallel dev:css dev:tsup`,"build:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css`,pack:`npm version patch && pnpm build && npm pack`,"pack:bump":`bun scripts/bump-version.js && nr pack && echo $(pwd)/react-scan-$(node -p "require('./package.json').version").tgz | pbcopy`,prettier:`prettier --config .prettierrc.mjs -w src`,publint:`publint`,test:`vitest`,lint:`biome lint src && pnpm typecheck`,format:`biome format . --write`,check:`biome check . --write`,typecheck:`tsc --noEmit`},exports:{"./package.json":`./package.json`,"./monitoring":{types:`./dist/core/monitor/index.d.ts`,import:`./dist/core/monitor/index.mjs`,require:`./dist/core/monitor/index.js`},"./monitoring/next":{types:`./dist/core/monitor/params/next.d.ts`,import:`./dist/core/monitor/params/next.mjs`,require:`./dist/core/monitor/params/next.js`},"./monitoring/react-router-legacy":{types:`./dist/core/monitor/params/react-router-v5.d.ts`,import:`./dist/core/monitor/params/react-router-v5.mjs`,require:`./dist/core/monitor/params/react-router-v5.js`},"./monitoring/react-router":{types:`./dist/core/monitor/params/react-router-v6.d.ts`,import:`./dist/core/monitor/params/react-router-v6.mjs`,require:`./dist/core/monitor/params/react-router-v6.js`},"./monitoring/remix":{types:`./dist/core/monitor/params/remix.d.ts`,import:`./dist/core/monitor/params/remix.mjs`,require:`./dist/core/monitor/params/remix.js`},"./monitoring/astro":{import:`./dist/core/monitor/params/astro/index.ts`},".":{production:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.mjs`}},development:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}},default:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}}},"./all-environments":{types:`./dist/core/all-environments.d.ts`,import:`./dist/core/all-environments.mjs`,require:`./dist/core/all-environments.js`},"./install-hook":{types:`./dist/install-hook.d.ts`,import:`./dist/install-hook.mjs`,require:`./dist/install-hook.js`},"./auto":{production:{import:{types:`./dist/rsc-shim.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/rsc-shim.mjs`},require:{types:`./dist/rsc-shim.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/rsc-shim.js`}},development:{import:{types:`./dist/auto.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/auto.mjs`},require:{types:`./dist/auto.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/auto.js`}}},"./dist/*":`./dist/*.js`,"./dist/*.js":`./dist/*.js`,"./dist/*.mjs":`./dist/*.mjs`,"./react-component-name/vite":{types:`./dist/react-component-name/vite.d.ts`,import:`./dist/react-component-name/vite.mjs`,require:`./dist/react-component-name/vite.js`},"./react-component-name/webpack":{types:`./dist/react-component-name/webpack.d.ts`,import:`./dist/react-component-name/webpack.mjs`,require:`./dist/react-component-name/webpack.js`},"./react-component-name/esbuild":{types:`./dist/react-component-name/esbuild.d.ts`,import:`./dist/react-component-name/esbuild.mjs`,require:`./dist/react-component-name/esbuild.js`},"./react-component-name/rspack":{types:`./dist/react-component-name/rspack.d.ts`,import:`./dist/react-component-name/rspack.mjs`,require:`./dist/react-component-name/rspack.js`},"./react-component-name/rolldown":{types:`./dist/react-component-name/rolldown.d.ts`,import:`./dist/react-component-name/rolldown.mjs`,require:`./dist/react-component-name/rolldown.js`},"./react-component-name/rollup":{types:`./dist/react-component-name/rollup.d.ts`,import:`./dist/react-component-name/rollup.mjs`,require:`./dist/react-component-name/rollup.js`},"./react-component-name/astro":{types:`./dist/react-component-name/astro.d.ts`,import:`./dist/react-component-name/astro.mjs`,require:`./dist/react-component-name/astro.js`},"./react-component-name/loader":{types:`./dist/react-component-name/loader.d.ts`,import:`./dist/react-component-name/loader.mjs`,require:`./dist/react-component-name/loader.js`}},main:`dist/index.js`,module:`dist/index.mjs`,browser:`dist/auto.global.js`,types:`dist/index.d.ts`,typesVersions:{"*":{monitoring:[`./dist/core/monitor/index.d.ts`],"monitoring/next":[`./dist/core/monitor/params/next.d.ts`],"monitoring/react-router-legacy":[`./dist/core/monitor/params/react-router-v5.d.ts`],"monitoring/react-router":[`./dist/core/monitor/params/react-router-v6.d.ts`],"monitoring/remix":[`./dist/core/monitor/params/remix.d.ts`],"monitoring/astro":[`./dist/core/monitor/params/astro/index.ts`],"react-component-name/vite":[`./dist/react-component-name/vite.d.ts`],"react-component-name/webpack":[`./dist/react-component-name/webpack.d.ts`],"react-component-name/esbuild":[`./dist/react-component-name/esbuild.d.ts`],"react-component-name/rspack":[`./dist/react-component-name/rspack.d.ts`],"react-component-name/rolldown":[`./dist/react-component-name/rolldown.d.ts`],"react-component-name/rollup":[`./dist/react-component-name/rollup.d.ts`],"react-component-name/astro":[`./dist/react-component-name/astro.d.ts`],"react-component-name/loader":[`./dist/react-component-name/loader.d.ts`]}},bin:`bin/cli.js`,files:[`dist`,`bin`,`package.json`,`README.md`,`LICENSE`,`auto.d.ts`],dependencies:{"@babel/core":`^7.26.0`,"@babel/generator":`^7.26.2`,"@babel/types":`^7.26.0`,"@clack/core":`^0.3.5`,"@clack/prompts":`^0.8.2`,"@pivanov/utils":`0.0.2`,"@preact/signals":`^1.3.1`,"@rollup/pluginutils":`^5.1.3`,"@types/node":`^20.17.9`,bippy:`^0.3.8`,esbuild:`^0.25.0`,"estree-walker":`^3.0.3`,kleur:`^4.1.5`,mri:`^1.2.0`,playwright:`^1.49.0`,preact:`^10.25.1`,tsx:`^4.19.3`},devDependencies:{"@esbuild-plugins/tsconfig-paths":`^0.1.2`,"@remix-run/react":`*`,"@types/babel__core":`^7.20.5`,"@types/react":`^18.0.0`,"@types/react-router":`^5.1.0`,"@vercel/style-guide":`^6.0.0`,clsx:`^2.1.1`,"es-module-lexer":`^1.5.4`,next:`*`,"npm-run-all":`^4.1.5`,"postcss-cli":`^11.0.0`,prettier:`^3.3.3`,publint:`^0.2.12`,react:`*`,"react-dom":`*`,"react-router":`^5.0.0`,"react-router-dom":`^5.0.0 || ^6.0.0 || ^7.0.0`,"tailwind-merge":`^2.5.5`,terser:`^5.36.0`,tsup:`^8.0.0`,vitest:`^1.0.0`},peerDependencies:{"@remix-run/react":`>=1.0.0`,next:`>=13.0.0`,react:`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-dom":`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-router":`^5.0.0 || ^6.0.0 || ^7.0.0`,"react-router-dom":`^5.0.0 || ^6.0.0 || ^7.0.0`},peerDependenciesMeta:{"@remix-run/react":{optional:!0},next:{optional:!0},"react-router":{optional:!0},"react-router-dom":{optional:!0}},optionalDependencies:{unplugin:`2.1.0`},publishConfig:{access:`public`}},rb=null,ib=null,ab=()=>{if(rb&&ib)return{rootContainer:rb,shadowRoot:ib};rb=document.createElement(`div`),rb.id=`react-scan-root`,ib=rb.attachShadow({mode:`open`});let e=document.createElement(`style`);return e.textContent=c_,ib.appendChild(e),document.documentElement.appendChild(rb),{rootContainer:rb,shadowRoot:ib}},$={wasDetailsOpen:Fd(!0),isInIframe:Fd(Wf&&window.self!==window.top),inspectState:Fd({kind:`uninitialized`}),monitor:Fd(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:Fd(0),interactionListeningForRenders:null,changesListeners:new Map},ob={instrumentation:null,componentAllowList:null,options:Fd({enabled:!0,log:!1,showToolbar:!0,animationSpeed:`fast`,dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:$,version:nb.version};Wf&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=ob.version);function sb(e){return e in ob.options.value}var cb=e=>{let t=[],n={};for(let r in e){if(!sb(r))continue;let i=e[r];switch(r){case`enabled`:case`log`:case`showToolbar`:case`showNotificationCount`:case`dangerouslyForceRunInProduction`:case`showFPS`:case`allowInIframe`:typeof i==`boolean`?n[r]=i:t.push(`- ${r} must be a boolean. Got "${i}"`);break;case`animationSpeed`:[`slow`,`fast`,`off`].includes(i)?n[r]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case`onCommitStart`:typeof i==`function`?n.onCommitStart=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onCommitFinish`:typeof i==`function`?n.onCommitFinish=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onRender`:typeof i==`function`?n.onRender=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onPaintStart`:case`onPaintFinish`:typeof i==`function`?n[r]=i:t.push(`- ${r} must be a function. Got "${i}"`);break;default:t.push(`- Unknown option "${r}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),n},lb=e=>{try{let t=cb(e);if(Object.keys(t).length===0)return;let n=`showToolbar`in t&&t.showToolbar!==void 0,r={...ob.options.value,...t},{instrumentation:i}=ob;i&&`enabled`in t&&(i.isPaused.value=t.enabled===!1),ob.options.value=r;try{let e=Up(`react-scan-options`)?.enabled;typeof e==`boolean`&&(r.enabled=e)}catch(e){ob.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}return Wp(`react-scan-options`,r),n&&hb(!!r.showToolbar),r}catch(e){ob.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},ub=()=>ob.options,db=null,fb,pb=()=>{if(db!==null)return db;fb??=El();for(let e of fb.renderers.values())B(e)===`production`&&(db=!0);return db},mb=()=>{try{if(!Wf||!ob.runInAllEnvironments&&pb()&&!ob.options.value.dangerouslyForceRunInProduction)return;let e=Up(`react-scan-options`);if(e){let t=cb(e);Object.keys(t).length>0&&(ob.options.value={...ob.options.value,...t})}let t=ub();s_(()=>{hb(!!t.value.showToolbar)}),!$.monitor.value&&Wf&&setTimeout(()=>{Jl()||console.error(`[React Scan] Failed to load. Must import React Scan before React runs.`)},5e3)}catch(e){ob.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},hb=e=>{window.reactScanCleanupListeners?.();let t=pv(),n=gb();window.reactScanCleanupListeners=()=>{t(),n?.()};let r=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){r?.remove();return}r?.remove();let{shadowRoot:i}=ab();tb(i)},gb=()=>{try{let e=document.documentElement;return ty(e)}catch(e){ob.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},_b=(e={})=>{lb(e),!($.isInIframe.value&&!ob.options.value.allowInIframe&&!ob.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||mb())},vb=new WeakSet;_b({enabled:!0});function yb({children:e}){let t=o();return(0,N.useEffect)(()=>{let e=t.subscribe(`onBeforeLoad`,({fromLocation:e,pathChanged:t})=>e&&t&&as.start()),n=t.subscribe(`onLoad`,()=>as.complete());return()=>{e(),n()}},[t]),(0,P.jsx)(P.Fragment,{children:e})}Lo();var bb=hn()({beforeLoad:async({context:e})=>({user:await e.queryClient.ensureQueryData(ks.user())}),head:()=>({meta:[{charSet:`utf-8`},{name:`viewport`,content:`width=device-width, initial-scale=1`},...Yc({title:`SPN | SEDUC`,description:`Sistema de Productos de Nomina`})],links:[{rel:`stylesheet`,href:Bo},{rel:`stylesheet`,href:hs},{rel:`stylesheet`,href:dl},{rel:`stylesheet`,href:ul},{rel:`stylesheet`,href:gs},{rel:`stylesheet`,href:zo},{rel:`stylesheet`,href:Vo},{rel:`stylesheet`,href:ll},{rel:`apple-touch-icon`,sizes:`180x180`,href:`/apple-touch-icon.png`},{rel:`icon`,type:`image/png`,sizes:`32x32`,href:`/favicon-32x32.png`},{rel:`icon`,type:`image/png`,sizes:`16x16`,href:`/favicon-16x16.png`},{rel:`manifest`,href:`/site.webmanifest`,color:`#fffff`},{rel:`icon`,href:`/favicon.ico`}]}),errorComponent:e=>(0,P.jsx)(Cb,{children:(0,P.jsx)(Ns,{...e})}),notFoundComponent:()=>(0,P.jsx)(nl,{}),component:xb});function xb(){return(0,P.jsx)(Cb,{children:(0,P.jsx)(yb,{children:(0,P.jsx)(ht,{})})})}var Sb=Ei({defaultRadius:`md`,cursorType:`pointer`,components:{HoverCard:ba.extend({defaultProps:{shadow:`md`,withArrow:!0,arrowSize:10}}),Popover:un.extend({defaultProps:{shadow:`md`,withArrow:!0,arrowSize:10}}),Menu:Wa.extend({defaultProps:{shadow:`md`,withArrow:!0,arrowSize:10,arrowPosition:`center`}}),Tooltip:I.extend({defaultProps:{withArrow:!0,arrowSize:10,color:`#2E2E2E`}}),Button:Xe.extend({defaultProps:{variant:`light`,loaderProps:{type:`dots`}}})}});function Cb({children:e}){return(0,P.jsxs)(`html`,{lang:`es`,...Di,children:[(0,P.jsxs)(`head`,{children:[(0,P.jsx)(Cr,{}),(0,P.jsx)(Ti,{nonce:`8IBTHwOdqNKAWeKl7plt8g==`,defaultColorScheme:`dark`})]}),(0,P.jsxs)(`body`,{children:[(0,P.jsxs)(ee,{defaultColorScheme:`dark`,theme:Sb,children:[(0,P.jsx)(ms,{}),(0,P.jsxs)(Fo,{children:[(0,P.jsx)(ri,{theme:`dark`}),(0,P.jsx)(Wc,{settings:{locale:`es`,firstDayOfWeek:0,weekendDays:[0]},children:e})]})]}),(0,P.jsx)(Ro,{position:`bottom-right`}),(0,P.jsx)(Er,{buttonPosition:`bottom-left`}),(0,P.jsx)(wr,{})]})]})}var wb=rn(`/signin`)({component:tn(()=>Dn(()=>import(`./signin-BDmCOLNP.js`),__vite__mapDeps([6,1,7,8,4])),`component`),validateSearch:Ms,beforeLoad:async({context:e,search:t})=>{let{redirectTo:n}=t;if(e.user)throw s({href:n})},search:{middlewares:[dn({redirectTo:`/`})]}}),Tb=rn(`/_auth`)({component:tn(()=>Dn(()=>import(`./_auth-BflN74rD.js`),__vite__mapDeps([9,1,10,8,4,3,2])),`component`),beforeLoad:async({context:e,location:t})=>{if(!e.user)throw s({to:`/signin`,search:{redirectTo:t.href}});return e.queryClient.prefetchQuery(Sn.fortnight()),e.queryClient.prefetchQuery(al.fortnight()),{crumb:`Dashboard`,iconName:`home`}},head:()=>({meta:[{title:`Dashboard | SPN`}]})}),Eb=wb.update({id:`/signin`,path:`/signin`,getParentRoute:()=>bb}),Db=Tb.update({id:`/_auth`,getParentRoute:()=>bb}),Ob=qc.update({id:`/`,path:`/`,getParentRoute:()=>Db}),kb=gn.update({id:`/(concepts)/refund/`,path:`/refund/`,getParentRoute:()=>Db}),Ab={AuthIndexRoute:Ob,AuthconceptsForteIndexRoute:Vc.update({id:`/(concepts)/forte/`,path:`/forte/`,getParentRoute:()=>Db}),AuthconceptsRefundIndexRoute:kb},jb={AuthRoute:Db._addFileChildren(Ab),SigninRoute:Eb},Mb=bb._addFileChildren(jb);function Nb({router:e,queryClient:t,handleRedirects:n=!0}){let r=e.options.hydrate;if(e.options.dehydrate,e.options.hydrate=async e=>{await r?.(e),e.dehydratedQueryClient&&Yn(t,e.dehydratedQueryClient);let n=e.queryStream.getReader();n.read().then(async function e({done:r,value:i}){if(Yn(t,i),!r)return e(await n.read())}).catch(e=>{console.error(`Error reading query stream:`,e)})},n){let n=t.getMutationCache().config;t.getMutationCache().config={...n,onError:(t,...r)=>i(t)?(t.options._fromLocation=e.stores.location.state,e.navigate(e.resolveRedirect(t).options)):n.onError?.(t,...r)};let r=t.getQueryCache().config;t.getQueryCache().config={...r,onError:(t,...n)=>i(t)?(t.options._fromLocation=e.stores.location.state,e.navigate(e.resolveRedirect(t).options)):r.onError?.(t,...n)}}}function Pb(e){if(Nb(e),e.wrapQueryClient===!1)return;let t=e.router.options.Wrap||N.Fragment;e.router.options.Wrap=({children:n})=>(0,P.jsx)(ne,{client:e.queryClient,children:(0,P.jsx)(t,{children:n})})}var Fb=e=>e?e.length>100?`Error demasiado largo, favor de verificar los logs`:e:`Error inmanegable, favor de verificar los logs`;function Ib(){let e=new nr({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:1e3*60,retry:0}},mutationCache:new $n({onError:e=>{console.log({errorMutation:e});let t=Fb(e.message);return Bc.error(t)},onSuccess:e=>{let t=sn(e)&&typeof e?.message==`string`?e.message:``;if(t)return Bc.success(t)}})}),t=hr({routeTree:Mb,context:{queryClient:e,crumb:null,iconName:null},defaultPreload:`intent`,defaultPreloadStaleTime:0,defaultErrorComponent:Ns,defaultNotFoundComponent:()=>(0,P.jsx)(nl,{}),scrollRestoration:!0,defaultStructuralSharing:!0,notFoundMode:`fuzzy`});return Pb({router:t,queryClient:e}),t}var Lb=Es(()=>({requestMiddleware:[Ds,ye]}));async function Rb(){let e=await Ib(),t;if(Lb){let n=await Lb.getOptions();n.serializationAdapters=n.serializationAdapters??[],window.__TSS_START_OPTIONS__=n,t=n.serializationAdapters,e.options.defaultSsr=n.defaultSsr}else t=[],window.__TSS_START_OPTIONS__={serializationAdapters:t};return t.push(Wn),e.options.serializationAdapters&&t.push(...e.options.serializationAdapters),e.update({basepath:``,serializationAdapters:t}),e.stores.matchesId.state.length||await qn(e),e}async function zb(){let e=await Rb();return window.$_TSR?.h(),e}var Bb;function Vb(){return Bb||=zb(),(0,P.jsx)(ir,{promise:Bb,children:e=>(0,P.jsx)(vr,{router:e})})}var Hb=zn();(0,N.startTransition)(()=>{(0,Hb.hydrateRoot)(document,(0,P.jsx)(N.StrictMode,{children:(0,P.jsx)(Vb,{})}))});export{Fc as a,I as c,sa as d,ki as f,cr as g,fr as h,Ic as i,$a as l,li as m,Uc as n,Io as o,Ci as p,Bc as r,jo as s,tl as t,Wa as u};