import{h as c,d as C,c as k,i as Z,r as J,t as Q,w as X,o as S,a as j,b as Y,e as g,u as ee,f as te,g as oe,j as d,k as i,l as p,m as $,F as re,n as ne}from"./index-B6c-H0Xn.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as ae,g as le,m as ie,I as ce}from"./IosImage-6yIZtZP5.js";import{u as ue,a as de,r as pe,b as fe,c as R,N as me}from"./Icon-7JMLtt3B.js";import{r as he,u as F,a as M,c as ge,g as xe,d as N,b as be,e as ve,f as I,h as B,i as f,j as w,k as we,N as ye,l as y}from"./light-B0uqXJRV.js";const _e=he("close",c("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},c("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},c("g",{fill:"currentColor","fill-rule":"nonzero"},c("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),ke={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},Ce=()=>ke,Se={name:"Flex",self:Ce},Me=Object.assign(Object.assign({},M.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),Pe=C({name:"Flex",props:Me,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=F(e),u=M("Flex","-flex",void 0,Se,e,t);return{rtlEnabled:ue("Flex",r,t),mergedClsPrefix:t,margin:k(()=>{const{size:o}=e;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[ge("gap",o)]:a}}=u.value,{row:l,col:s}=xe(a);return{horizontal:N(s),vertical:N(l)}})}},render(){const{vertical:e,reverse:t,align:r,inline:u,justify:n,margin:o,wrap:a,mergedClsPrefix:l,rtlEnabled:s}=this,h=ae(le(this),!1);return h.length?c("div",{role:"none",class:[`${l}-flex`,s&&`${l}-flex--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:n,flexWrap:!a||e?"nowrap":"wrap",alignItems:r,gap:`${o.vertical}px ${o.horizontal}px`}},h):null}});Object.assign(Object.assign({},M.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}});const ze=be("n-float-button-group"),je=e=>{const{popoverColor:t,textColor2:r,buttonColor2Hover:u,buttonColor2Pressed:n,primaryColor:o,primaryColorHover:a,primaryColorPressed:l,borderRadius:s}=e;return{color:t,colorHover:u,colorPressed:n,colorPrimary:o,colorPrimaryHover:a,colorPrimaryPressed:l,textColor:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:s}},Le={name:"FloatButton",common:ve,self:je},$e=I("float-button",`
 user-select: none;
 cursor: pointer;
 color: var(--n-text-color);
 background-color: var(--n-color);
 font-size: 18px;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-shadow: var(--n-box-shadow);
 display: flex;
 align-items: stretch;
 box-sizing: border-box;
`,[B("circle-shape",`
 border-radius: 4096px;
 `),B("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),f("fill",`
 position: absolute;
 inset: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),f("body",`
 position: relative;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 border-radius: inherit;
 flex-direction: column;
 box-sizing: border-box;
 padding: 2px 4px;
 gap: 2px;
 transform: scale(1);
 `,[f("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),w("&:hover","box-shadow: var(--n-box-shadow-hover);",[w(">",[f("fill",`
 background-color: var(--n-color-hover);
 `)])]),w("&:active","box-shadow: var(--n-box-shadow-pressed);",[w(">",[f("fill",`
 background-color: var(--n-color-pressed);
 `)])]),B("show-menu",[w(">",[f("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),f("close",`
 transform: scale(1);
 opacity: 1;
 `),f("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),f("close",`
 opacity: 0;
 transform: scale(0.75);
 position: absolute;
 inset: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 `),f("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[w("> *",`
 margin-bottom: 16px;
 `),I("float-button",`
 position: relative !important;
 `)])]),Be=Object.assign(Object.assign({},M.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),Re=C({name:"FloatButton",props:Be,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=F(e),u=M("FloatButton","-float-button",$e,Le,e,t),n=Z(ze,null),o=J(!1),a=Q(e,"showMenu"),l=de(a,o);function s(m){const{onUpdateShowMenu:v,"onUpdate:showMenu":P}=e;o.value=m,v&&R(v,m),P&&R(P,m)}const h=k(()=>{const{self:{color:m,textColor:v,boxShadow:P,boxShadowHover:E,boxShadowPressed:T,colorHover:V,colorPrimary:U,colorPrimaryHover:q,textColorPrimary:A,borderRadiusSquare:D,colorPressed:G,colorPrimaryPressed:K},common:{cubicBezierEaseInOut:W}}=u.value,{type:z}=e;return{"--n-bezier":W,"--n-box-shadow":P,"--n-box-shadow-hover":E,"--n-box-shadow-pressed":T,"--n-color":z==="primary"?U:m,"--n-text-color":z==="primary"?A:v,"--n-color-hover":z==="primary"?q:V,"--n-color-pressed":z==="primary"?K:G,"--n-border-radius-square":D}}),_=k(()=>{const{width:m,height:v}=e;return Object.assign({position:n?void 0:e.position,width:y(m),minHeight:y(v)},n?null:{left:y(e.left),right:y(e.right),top:y(e.top),bottom:y(e.bottom)})}),L=k(()=>n?n.shapeRef.value:e.shape),x=()=>{e.menuTrigger==="hover"&&s(!0)},H=()=>{e.menuTrigger==="hover"&&l.value&&s(!1)},O=m=>{e.menuTrigger==="click"&&s(!l.value)},b=r?we("float-button",k(()=>e.type[0]),h,e):void 0;return{inlineStyle:_,cssVars:r?void 0:h,mergedClsPrefix:t,mergedShape:L,mergedShowMenu:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender,Mouseenter:x,handleMouseleave:H,handleClick:O}},render(){var e;const{mergedClsPrefix:t,cssVars:r,mergedShape:u,type:n,menuTrigger:o,mergedShowMenu:a,themeClass:l,$slots:s,inlineStyle:h,onRender:_}=this,L=[[ie,this.handleMouseleave]];return _==null||_(),X(c("div",{class:[`${t}-float-button`,`${t}-float-button--${u}-shape`,`${t}-float-button--${n}-type`,a&&`${t}-float-button--show-menu`,l],style:[r,h],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},c("div",{class:`${t}-float-button__fill`,"aria-hidden":!0}),c("div",{class:`${t}-float-button__body`},(e=s.default)===null||e===void 0?void 0:e.call(s),fe(s.description,x=>x?c("div",{class:`${t}-float-button__description`},x):null)),o?c("div",{class:`${t}-float-button__close`},c(ye,{clsPrefix:t},{default:()=>c(_e,null)})):null,o?c("div",{onClick:x=>{x.stopPropagation()},"data-float-button-menu":!0,class:`${t}-float-button__menu`},pe(s.menu,()=>[])):null),L)}}),Ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ie=Y('<rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 432h320"></path><circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M480 160a80 80 0 0 1-80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 160a80 80 0 0 0 80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M480 256a80 80 0 0 0-80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 256a80 80 0 0 1 80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',8),Fe=[Ie],He=C({name:"CashOutline",render:function(t,r){return S(),j("svg",Ne,Fe)}}),Oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ee=g("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("circle",{cx:"12",cy:"12",r:"9"}),g("path",{d:"M12 17v.01"}),g("path",{d:"M12 13.5a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"})],-1),Te=[Ee],Ve=C({name:"Help",render:function(t,r){return S(),j("svg",Oe,Te)}}),Ue={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},qe=g("g",null,[g("path",{d:`M457.6,140.2l-82.5-4l-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.5,88.4c-11.8,1-20.3,10.5-19.4,21.7l21.2,235.8\r
		c1,11.3,11.2,19.2,22.9,18.3l15-1.2l-2.4,45.8c-0.6,12.6,9.2,22.8,22.4,23.5L441.3,448c13.2,0.6,24.1-8.6,24.8-21.2L480,163.5\r
		C480.6,151,470.7,140.8,457.6,140.2z M102.7,145.5l-7.1,134.8L78.1,305L62,127c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5c1-5,4.4-9,9.6-9.4\r
		l261-21.4c5.2-0.4,9.7,3,10.5,7.9c0,0.2,0.3,0.2,0.3,0.4c0,0.1,0.3,0.2,0.3,0.4l2.7,30.8l-219-10.5\r
		C114.2,123.8,103.3,133,102.7,145.5z M436.7,382.4l-84.8-99.5l-37.4,34.3l-69.2-80.8L122.6,367.1L133,168c0,0,0-0.3,0-0.4\r
		c1-5.4,6.2-9.3,11.9-9l291.2,14c5.8,0.3,10.3,4.7,10.4,10.2c0,0.2,0.3,0.3,0.3,0.5L436.7,382.4z`}),g("path",{d:"M384,256c17.6,0,32-14.4,32-32s-14.3-32-32-32c-17.6,0-32,14.3-32,32S366.3,256,384,256z"})],-1),Ae=[qe],De=C({name:"MdImages",render:function(t,r){return S(),j("svg",Ue,Ae)}}),Ge={__name:"FloatButton",setup(e){const t=ee(),r=te();return(u,n)=>{const o=me,a=Re,l=Pe;return S(),oe(l,{class:"float-button",style:{}},{default:d(()=>[i(a,{position:"relative",type:"primary","menu-trigger":"hover"},{menu:d(()=>[i(a,{shape:"circle",type:["artwork","artworkMainPage"].includes(p(t).name)?"primary":"default",onClick:n[0]||(n[0]=$(s=>p(r).push({name:"artworkMainPage"}),["stop"]))},{default:d(()=>[i(o,null,{default:d(()=>[i(p(ce))]),_:1})]),_:1},8,["type"]),i(a,{shape:"circle",type:p(t).name==="artworks"?"primary":"default",onClick:n[1]||(n[1]=$(s=>p(r).push({name:"artworks"}),["stop"]))},{default:d(()=>[i(o,null,{default:d(()=>[i(p(De))]),_:1})]),_:1},8,["type"]),i(a,{shape:"circle",type:p(t).name==="usage"?"primary":"default",onClick:n[2]||(n[2]=$(s=>p(r).push({name:"usage"}),["stop"]))},{default:d(()=>[i(o,null,{default:d(()=>[i(p(Ve))]),_:1})]),_:1},8,["type"])]),default:d(()=>[i(o,null,{default:d(()=>[i(p(He))]),_:1})]),_:1})]),_:1})}}},Ke=se(Ge,[["__scopeId","data-v-65912a26"]]),Ye={__name:"Page",setup(e){return(t,r)=>{const u=ne("router-view");return S(),j(re,null,[i(Ke),i(u)],64)}}};export{Ye as default};
