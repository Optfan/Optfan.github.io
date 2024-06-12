import{d as C,c as u,r as $,B as _,h as l,D as k,W as h}from"./index-B6c-H0Xn.js";import{e as w,j as f,f as p,h as v,u as T,a as g,k as R,_ as B,c as N}from"./light-B0uqXJRV.js";import{f as I,N as O}from"./fade-in.cssr-9kDs13u7.js";import{u as P}from"./use-compitable-bInOg74I.js";import{a as y}from"./axios-B4uVmeYG.js";const W=i=>{const{opacityDisabled:s,heightTiny:e,heightSmall:t,heightMedium:a,heightLarge:o,heightHuge:c,primaryColor:r,fontSize:n}=i;return{fontSize:n,textColor:r,sizeTiny:e,sizeSmall:t,sizeMedium:a,sizeLarge:o,sizeHuge:c,color:r,opacitySpinning:s}},j={name:"Spin",common:w,self:W},V=f([f("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),p("spin-container",`
 position: relative;
 `,[p("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[I()])]),p("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),p("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[v("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),p("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),p("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[v("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),D={small:20,medium:18,large:16},H=Object.assign(Object.assign({},g.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),A=C({name:"Spin",props:H,setup(i){const{mergedClsPrefixRef:s,inlineThemeDisabled:e}=T(i),t=g("Spin","-spin",V,j,i,s),a=u(()=>{const{size:n}=i,{common:{cubicBezierEaseInOut:d},self:m}=t.value,{opacitySpinning:b,color:z,textColor:S}=m,x=typeof n=="number"?B(n):m[N("size",n)];return{"--n-bezier":d,"--n-opacity-spinning":b,"--n-size":x,"--n-color":z,"--n-text-color":S}}),o=e?R("spin",u(()=>{const{size:n}=i;return typeof n=="number"?String(n):n[0]}),a,i):void 0,c=P(i,["spinning","show"]),r=$(!1);return _(n=>{let d;if(c.value){const{delay:m}=i;if(m){d=window.setTimeout(()=>{r.value=!0},m),n(()=>{clearTimeout(d)});return}}r.value=c.value}),{mergedClsPrefix:s,active:r,mergedStrokeWidth:u(()=>{const{strokeWidth:n}=i;if(n!==void 0)return n;const{size:d}=i;return D[typeof d=="number"?"medium":d]}),cssVars:e?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i,s;const{$slots:e,mergedClsPrefix:t,description:a}=this,o=e.icon&&this.rotate,c=(a||e.description)&&l("div",{class:`${t}-spin-description`},a||((i=e.description)===null||i===void 0?void 0:i.call(e))),r=e.icon?l("div",{class:[`${t}-spin-body`,this.themeClass]},l("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),c):l("div",{class:[`${t}-spin-body`,this.themeClass]},l(O,{clsPrefix:t,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),c);return(s=this.onRender)===null||s===void 0||s.call(this),e.default?l("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`,this.contentClass],style:this.contentStyle},e),l(k,{name:"fade-in-transition"},{default:()=>this.active?r:null})):r}}),F=async i=>{let s,e=2;for(;;)try{await y.head(`${h.pixiv_proxy_baseUrl}/${i}-${e}.png`),s=e,e=2*e}catch{if(e==2)return 1;break}let t,a;for(;s<=e;){t=Math.floor((s+e)/2);try{await y.head(`${h.pixiv_proxy_baseUrl}/${i}-${t}.png`),s=t+1}catch{a=t,e=t-1}}return a-1};export{A as _,F as h};
