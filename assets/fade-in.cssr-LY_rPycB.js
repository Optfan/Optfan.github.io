import{j as s,R as f,f as m,i as r,$ as h}from"./light-CQemBRvI.js";import{r as $,s as g,p as b,d as p,h as a,D as w,t as v}from"./index-CfZboynb.js";const z=typeof document<"u"&&typeof window<"u";function y(){const t=$(!1);return g(()=>{t.value=!0}),b(t)}const k=p({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=y();return()=>a(w,{name:"icon-switch-transition",appear:n.value},e)}}),{cubicBezierEaseInOut:_}=f;function d({originalTransform:t="",left:e=0,top:n=0,transition:o=`all .3s ${_} !important`}={}){return[s("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:e,top:n,opacity:0}),s("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),s("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:o})]}const B=s([s("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),m("base-loading",`
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
 `)])])]),c="1.6s",N={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},I=p({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},N),setup(t){h("-base-loading",B,v(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:o,scale:l}=this,i=e/l;return a("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},a(k,null,{default:()=>this.show?a("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},a("div",{class:`${t}-base-loading__container`},a("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:o}},a("g",null,a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};270 ${i} ${i}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"}),a("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:i,cy:i,r:e-n/2,"stroke-dasharray":5.67*e,"stroke-dashoffset":18.48*e},a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"}),a("animate",{attributeName:"stroke-dashoffset",values:`${5.67*e};${1.42*e};${5.67*e}`,begin:"0s",dur:c,fill:"freeze",repeatCount:"indefinite"})))))):a("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:u}=f;function S({name:t="fade-in",enterDuration:e="0.2s",leaveDuration:n="0.2s",enterCubicBezier:o=u,leaveCubicBezier:l=u}={}){return[s(`&.${t}-transition-enter-active`,{transition:`all ${e} ${o}!important`}),s(`&.${t}-transition-leave-active`,{transition:`all ${n} ${l}!important`}),s(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),s(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}export{I as N,z as a,d as b,k as c,S as f,y as i};
