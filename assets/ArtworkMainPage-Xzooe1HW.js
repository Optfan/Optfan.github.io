import{d as b,o as c,a as g,e as _,u as B,f as C,r as w,k as n,l as e,U as N,V as P,g as k,j as s,x as $}from"./index-CfZboynb.js";import{h as A,_ as I}from"./pixiv-tm8R2AkJ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as R,A as V}from"./ArrowBigRightLines-DOqm7csd.js";import{B as M}from"./Button-DvVEgu6d.js";import{N as D}from"./Icon-Ds0HK4F2.js";import"./light-CQemBRvI.js";import"./fade-in.cssr-LY_rPycB.js";import"./use-compitable-CjwWr4PR.js";const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},O=_("path",{d:"M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55c-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),S=_("circle",{cx:"256",cy:"256",r:"160",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),T=[O,S],U=b({name:"PlanetOutline",render:function(m,a){return c(),g("svg",K,T)}}),j={class:"search-input",style:{}},E={class:"flex-row",style:{"align-items":"center"}},L={__name:"ArtworkMainPage",setup(x){const m=B(),{id:a}=m.params,y=C(),o=w(""),i=w(!1),v=r=>!r||/^\d+$/.test(r),l=async r=>{i.value=!0;const t=parseInt(r),u=await A(t);y.push({name:"artwork-id-total",params:{id:t,total:u}})};return a!=null&&(o.value=a,l(a)),(r,t)=>{const u=R,f=D,d=M,h=I;return c(),g("div",j,[_("div",E,[n(u,{size:"large",round:"",placeholder:"输入Pixiv ID",style:{"margin-right":"0.2rem"},value:e(o),"onUpdate:value":t[0]||(t[0]=p=>N(o)?o.value=p:null),autofocus:!0,type:"text","allow-input":v,onKeyup:t[1]||(t[1]=P(p=>l(e(o)),["enter"])),disabled:e(i)},null,8,["value","disabled"]),e(i)?(c(),k(d,{key:1,type:"primary",size:"large",secondary:"",circle:""},{default:s(()=>[n(h,{size:"small"})]),_:1})):(c(),k(d,{key:0,type:"primary",size:"large",secondary:"",circle:"",onClick:t[2]||(t[2]=p=>l(e(o)))},{icon:s(()=>[n(f,null,{default:s(()=>[n(e(V))]),_:1})]),_:1}))]),n(d,{text:"",style:{"margin-top":"0.5rem"},onClick:t[3]||(t[3]=()=>{o.value="116330556",l("116330556")}),disabled:e(i)},{icon:s(()=>[n(f,null,{default:s(()=>[n(e(U))]),_:1})]),default:s(()=>[$(" 试试 Pixiv ID: 116330556 ")]),_:1},8,["disabled"])])}}},Z=z(L,[["__scopeId","data-v-deb3b160"]]);export{Z as default};
