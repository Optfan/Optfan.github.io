import{d as et,c as G,r as tt,B as nt,h as N,D as rt}from"./index-CLlnVNUe.js";import{e as st,j as he,f as B,h as me,u as ot,a as Pe,k as it,_ as at,c as ct}from"./light-DCUREMHF.js";import{f as lt,u as ut,c as ft}from"./fade-in.cssr-AnbvVwqw.js";const dt=e=>{const{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:s,heightLarge:o,heightHuge:i,primaryColor:c,fontSize:u}=e;return{fontSize:u,textColor:c,sizeTiny:n,sizeSmall:r,sizeMedium:s,sizeLarge:o,sizeHuge:i,color:c,opacitySpinning:t}},pt={name:"Spin",common:st,self:dt},ht=he([he("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),B("spin-container",`
 position: relative;
 `,[B("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[lt()])]),B("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),B("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[me("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),B("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),B("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[me("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),mt={small:20,medium:18,large:16},yt=Object.assign(Object.assign({},Pe.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Wn=et({name:"Spin",props:yt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ot(e),r=Pe("Spin","-spin",ht,pt,e,t),s=G(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:f},self:l}=r.value,{opacitySpinning:p,color:b,textColor:y}=l,d=typeof u=="number"?at(u):l[ct("size",u)];return{"--n-bezier":f,"--n-opacity-spinning":p,"--n-size":d,"--n-color":b,"--n-text-color":y}}),o=n?it("spin",G(()=>{const{size:u}=e;return typeof u=="number"?String(u):u[0]}),s,e):void 0,i=ut(e,["spinning","show"]),c=tt(!1);return nt(u=>{let f;if(i.value){const{delay:l}=e;if(l){f=window.setTimeout(()=>{c.value=!0},l),u(()=>{clearTimeout(f)});return}}c.value=i.value}),{mergedClsPrefix:t,active:c,mergedStrokeWidth:G(()=>{const{strokeWidth:u}=e;if(u!==void 0)return u;const{size:f}=e;return mt[typeof f=="number"?"medium":f]}),cssVars:n?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,t;const{$slots:n,mergedClsPrefix:r,description:s}=this,o=n.icon&&this.rotate,i=(s||n.description)&&N("div",{class:`${r}-spin-description`},s||((e=n.description)===null||e===void 0?void 0:e.call(n))),c=n.icon?N("div",{class:[`${r}-spin-body`,this.themeClass]},N("div",{class:[`${r}-spin`,o&&`${r}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),i):N("div",{class:[`${r}-spin-body`,this.themeClass]},N(ft,{clsPrefix:r,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),i);return(t=this.onRender)===null||t===void 0||t.call(this),n.default?N("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},N("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),N(rt,{name:"fade-in-transition"},{default:()=>this.active?c:null})):c}});function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:bt}=Object.prototype,{getPrototypeOf:ce}=Object,J=(e=>t=>{const n=bt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:D}=Array,z=V("undefined");function wt(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=A("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const Et=V("string"),T=V("function"),Fe=V("number"),W=e=>e!==null&&typeof e=="object",St=e=>e===!0||e===!1,H=e=>{if(J(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=A("Date"),Tt=A("File"),Ot=A("Blob"),At=A("FileList"),xt=e=>W(e)&&T(e.pipe),Ct=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=J(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Nt=A("URLSearchParams"),[Pt,_t,Lt,Ft]=["ReadableStream","Request","Response","Headers"].map(A),Bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const De=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ue=e=>!z(e)&&e!==De;function te(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&Be(t,s)||s;H(t[o])&&H(r)?t[o]=te(t[o],r):H(r)?t[o]=te({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&v(arguments[r],n);return t}const Dt=(e,t,n,{allOwnKeys:r}={})=>(v(t,(s,o)=>{n&&T(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),kt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},jt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},It=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Mt=A("HTMLFormElement"),$t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jt=A("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Vt=e=>{ke(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Kt=()=>{},Xt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Q="abcdefghijklmnopqrstuvwxyz",be="0123456789",je={DIGIT:be,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+be},Gt=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Qt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return v(r,(i,c)=>{const u=n(i,s+1);!z(u)&&(o[c]=u)}),t[s]=void 0,o}}return r};return n(e,0)},Yt=A("AsyncFunction"),en=e=>e&&(W(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:D,isArrayBuffer:Le,isBuffer:wt,isFormData:Ct,isArrayBufferView:gt,isString:Et,isNumber:Fe,isBoolean:St,isObject:W,isPlainObject:H,isReadableStream:Pt,isRequest:_t,isResponse:Lt,isHeaders:Ft,isUndefined:z,isDate:Rt,isFile:Tt,isBlob:Ot,isRegExp:Jt,isFunction:T,isStream:xt,isURLSearchParams:Nt,isTypedArray:qt,isFileList:At,forEach:v,merge:te,extend:Dt,trim:Bt,stripBOM:Ut,inherits:kt,toFlatObject:jt,kindOf:J,kindOfTest:A,endsWith:zt,toArray:vt,forEachEntry:Ht,matchAll:It,isHTMLForm:Mt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:ke,freezeMethods:Vt,toObjectSet:Wt,toCamelCase:$t,noop:Kt,toFiniteNumber:Xt,findKey:Be,global:De,isContextDefined:Ue,ALPHABET:je,generateString:Gt,isSpecCompliantForm:Qt,toJSONObject:Zt,isAsyncFn:Yt,isThenable:en};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ze=h.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(h,ve);Object.defineProperty(ze,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(ze);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const tn=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=qe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function nn(e){return a.isArray(e)&&!e.some(ne)}const rn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!a.isUndefined(E[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!u&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,E){let S=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&nn(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(S=a.toArray(d)))return m=qe(m),S.forEach(function(w,k){!(a.isUndefined(w)||w===null)&&t.append(i===!0?we([m],k,o):i===null?m:m+"[]",f(w))}),!1}return ne(d)?!0:(t.append(we(E,m,o),f(d)),!1)}const p=[],b=Object.assign(rn,{defaultVisitor:l,convertValue:f,isVisitable:ne});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,m,b))===!0&&y(S,m?m.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&K(e,this,t)}const He=le.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,ge)}:ge;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||sn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ee{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},on=typeof URLSearchParams<"u"?URLSearchParams:le,an=typeof FormData<"u"?FormData:null,cn=typeof Blob<"u"?Blob:null,ln={isBrowser:!0,classes:{URLSearchParams:on,FormData:an,Blob:cn},protocols:["http","https","file","blob","url","data"]},ue=typeof window<"u"&&typeof document<"u",un=(e=>ue&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),fn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dn=ue&&window.location.href||"http://localhost",pn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ue,hasStandardBrowserEnv:un,hasStandardBrowserWebWorkerEnv:fn,origin:dn},Symbol.toStringTag,{value:"Module"})),O={...pn,...ln};function hn(e,t){return K(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function $e(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),u=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=yn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(mn(r),s,n,0)}),n}return null}function bn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const q={transitional:Me,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return K(c?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),bn(t)):t}],transformResponse:[function(t){const n=this.transitional||q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{q.headers[e]={}});const wn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&wn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function En(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Rn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class R{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,u,f){const l=j(u);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||u]=I(c))}const i=(c,u)=>a.forEach(c,(f,l)=>o(f,l,u));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Sn(t))i(gn(t),n);else if(a.isHeaders(t))for(const[c,u]of t.entries())o(u,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=j(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return En(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=j(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=j(i),i){const c=a.findKey(r,i);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const c=t?Rn(o):String(o).trim();c!==o&&delete n[o],n[c]=I(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=j(i);r[c]||(Tn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(R.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(R);function Y(e,t){const n=this||q,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,h,{__CANCEL__:!0});function Ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function On(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=r[o];i||(i=f),n[s]=u,r[s]=f;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const y=l&&f-l;return y?Math.round(b*1e3/y):void 0}}function xn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const M=(e,t,n=3)=>{let r=0;const s=An(50,250);return xn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,u=i-r,f=s(u),l=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:u,rate:f||void 0,estimated:f&&c&&l?(c-i)/f:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},Cn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Nn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _n(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!Pn(t)?_n(e,t):t}const Re=e=>e instanceof R?{...e}:e;function L(e,t){t=t||{};const n={};function r(f,l,p){return a.isPlainObject(f)&&a.isPlainObject(l)?a.merge.call({caseless:p},f,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(f,l,p){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,l,p)}function o(f,l){if(!a.isUndefined(l))return r(void 0,l)}function i(f,l){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function c(f,l,p){if(p in t)return r(f,l);if(p in e)return r(void 0,f)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,l)=>s(Re(f),Re(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=u[l]||s,b=p(e[l],t[l],l);a.isUndefined(b)&&p!==c||(n[l]=b)}),n}const Ke=e=>{const t=L({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=R.from(i),t.url=Ie(We(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let u;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((u=i.getContentType())!==!1){const[f,...l]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([f||"multipart/form-data",...l].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Cn(t.url))){const f=s&&o&&Nn.read(o);f&&i.set(s,f)}return t},Ln=typeof XMLHttpRequest<"u",Fn=Ln&&function(e){return new Promise(function(n,r){const s=Ke(e);let o=s.data;const i=R.from(s.headers).normalize();let{responseType:c}=s,u;function f(){s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function p(){if(!l)return;const y=R.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Ve(function(S){n(S),f()},function(S){r(S),f()},m),l=null}"onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Me;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(d,m){l.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",M(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",M(s.onUploadProgress)),(s.cancelToken||s.signal)&&(u=y=>{l&&(r(!y||y.type?new U(null,e,l):y),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const b=On(s.url);if(b&&O.protocols.indexOf(b)===-1){r(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Bn=(e,t)=>{let n=new AbortController,r;const s=function(u){if(!r){r=!0,i();const f=u instanceof Error?u:this.reason;n.abort(f instanceof h?f:new U(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",s):u.unsubscribe(s))}),e=null)};e.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},Dn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Un=async function*(e,t,n){for await(const r of e)yield*Dn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Te=(e,t,n,r,s)=>{const o=Un(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:u,value:f}=await o.next();if(u){c.close(),r();return}let l=f.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(f))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Oe=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},X=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xe=X&&typeof ReadableStream=="function",re=X&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),kn=Xe&&(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ae=64*1024,se=Xe&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),$={stream:se&&(e=>e.body)};X&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$[t]&&($[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const jn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await re(e)).byteLength},zn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??jn(t)},vn=X&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:u,responseType:f,headers:l,withCredentials:p="same-origin",fetchOptions:b}=Ke(e);f=f?(f+"").toLowerCase():"text";let[y,d]=s||o||i?Bn([s,o],i):[],m,E;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(u&&kn&&n!=="get"&&n!=="head"&&(x=await zn(l,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),F;a.isFormData(r)&&(F=C.headers.get("content-type"))&&l.setContentType(F),C.body&&(r=Te(C.body,Ae,Oe(x,M(u)),null,re))}a.isString(p)||(p=p?"cors":"omit"),E=new Request(t,{...b,signal:y,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let w=await fetch(E);const k=se&&(f==="stream"||f==="response");if(se&&(c||k)){const C={};["status","statusText","headers"].forEach(pe=>{C[pe]=w[pe]});const F=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(Te(w.body,Ae,c&&Oe(F,M(c,!0)),k&&S,re),C)}f=f||"text";let Ye=await $[a.findKey($,f)||"text"](w,e);return!k&&S(),d&&d(),await new Promise((C,F)=>{Ve(C,F,{data:Ye,headers:R.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:E})})}catch(w){throw S(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,E),{cause:w.cause||w}):h.from(w,w&&w.code,e,E)}}),oe={http:tn,xhr:Fn,fetch:vn};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xe=e=>`- ${e}`,qn=e=>a.isFunction(e)||e===null||e===!1,Ge={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!qn(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(xe).join(`
`):" "+xe(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ce(e){return ee(e),e.headers=R.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||q.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Je(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.2",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ne={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Ne[i]&&(Ne[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Hn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],u=c===void 0||i(c,o,e);if(u!==!0)throw new h("option "+o+" must be "+u,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const ie={assertOptions:Hn,validators:fe},P=ie.validators;class _{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=R.concat(i,o);const c=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,p=0,b;if(!u){const d=[Ce.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,f),b=d.length,l=Promise.resolve(n);p<b;)l=l.then(d[p++],d[p++]);return l}b=c.length;let y=n;for(p=0;p<b;){const d=c[p++],m=c[p++];try{y=d(y)}catch(E){m.call(this,E);break}}try{l=Ce.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=f.length;p<b;)l=l.then(f[p++],f[p++]);return l}getUri(t){t=L(this.defaults,t);const n=We(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){_.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(L(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}_.prototype[t]=n(),_.prototype[t+"Form"]=n(!0)});class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new U(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}function In(e){return function(n){return e.apply(null,n)}}function Mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});function Ze(e){const t=new _(e),n=_e(_.prototype.request,t);return a.extend(n,_.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ze(L(e,s))},n}const g=Ze(q);g.Axios=_;g.CanceledError=U;g.CancelToken=de;g.isCancel=Je;g.VERSION=Qe;g.toFormData=K;g.AxiosError=h;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=In;g.isAxiosError=Mn;g.mergeConfig=L;g.AxiosHeaders=R;g.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Ge.getAdapter;g.HttpStatusCode=ae;g.default=g;export{Wn as _,g as a};
