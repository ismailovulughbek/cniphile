import{u as k,r as l,d as B,e as m,o as e,c as r,f as o,b as c,t as C,F as _,g as M,h as v,i as y}from"./index-10a2018a.js";const x={key:0,class:"media"},F={class:"container"},N={class:"media__title"},P={class:"media__list"},b={__name:"Content",props:["type"],setup(s){const i=s,n=k();let u=l(1),t=l([]),a=l(!1);const h=async()=>{if(!a.value){a.value=!0,await n.getPopular(i.type,u.value);let p=i.type=="movie"?n.popularMovie:n.popularTv;t.value.push(...p),a.value=!1,u.value++}};return B(()=>{h()}),(p,S)=>{const g=m("media-item"),f=m("loader");return e(),r(_,null,[o(t).length>0?(e(),r("section",x,[c("div",F,[c("h2",N,C(s.type=="movie"?"Все фильмы":"Все сериалы"),1),c("div",P,[(e(!0),r(_,null,M(o(t),d=>(e(),v(g,{key:d.id,content:d,type:s.type},null,8,["content","type"]))),128))])])])):y("",!0),o(t).length==0||o(a)?(e(),v(f,{key:1})):y("",!0)],64)}}};export{b as _};
