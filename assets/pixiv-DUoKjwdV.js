import{a as o}from"./axios-WvFoFazB.js";import{W as l}from"./index-DfBtx3oA.js";const c=async t=>{let r,a=2;for(;;)try{await o.head(`${l.pixiv_proxy_baseUrl}/${t}-${a}.png`),r=a,a=2*a}catch{if(a==2)return 1;break}let e,i;for(;r<=a;){e=Math.floor((r+a)/2);try{await o.head(`${l.pixiv_proxy_baseUrl}/${t}-${e}.png`),r=e+1}catch{i=e,a=e-1}}return i-1};export{c as h};