import{r as m,s as h,p as $,c as g,d as f,h as a,D as b,t as w}from"./index-SH62CTEf.js";import{j as o,R as p,f as y,i as r,$ as v}from"./light-D_Cq_XeU.js";const C=typeof document<"u"&&typeof window<"u";function k(){const t=m(!1);return h(()=>{t.value=!0}),$(t)}function I(t,e){return g(()=>{for(const i of e)if(t[i]!==void 0)return t[i];return t[e[e.length-1]]})}const _=f({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const i=k();return()=>a(b,{name:"icon-switch-transition",appear:i.value},e)}}),{cubicBezierEaseInOut:B}=p;function d({originalTransform:t="",left:e=0,top:i=0,transition:s=`all .3s ${B} !important`}={}){return[o("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:i,opacity:0}),o("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:i,opacity:1}),o("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:i,transition:s})]}const N=o([o("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),y("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[r("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[d()]),r("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[d({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),r("container",`
 animation: rotator 3s linear infinite both;
 `,[r("icon",`
 height: 1em;
 width: 1em;
 `)])])]),c="1.6s",x={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},S=f({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},x),setup(t){v("-base-loading",N,w(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:i,stroke:s,scale:l}=this,n=e/l;return a("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},a(_,null,{default:()=>this.show?a("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},a("div",{class:`${t}-base-loading__container`},a("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},a("g",null,a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};270 ${n} ${n}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"}),a("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:n,cy:n,r:e-i/2,"stroke-dasharray":5.67*e,"stroke-dashoffset":18.48*e},a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};135 ${n} ${n};450 ${n} ${n}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"}),a("animate",{attributeName:"stroke-dashoffset",values:`${5.67*e};${1.42*e};${5.67*e}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"})))))):a("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:u}=p;function O({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:i="0.2s",enterCubicBezier:s=u,leaveCubicBezier:l=u}={}){return[o(`&.${t}-transition-enter-active`,{transition:`all ${e} ${s}!important`}),o(`&.${t}-transition-leave-active`,{transition:`all ${i} ${l}!important`}),o(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),o(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}export{_ as N,C as a,d as b,S as c,O as f,k as i,I as u};
