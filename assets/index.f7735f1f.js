var K=Object.defineProperty;var H=(i,e,s)=>e in i?K(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var h=(i,e,s)=>(H(i,typeof e!="symbol"?e+"":e,s),s);import{d as k,o as a,c as l,a as r,t as m,n as J,F as w,r as b,b as x,e as u,u as n,f as g,w as V,v as B,i as D,g as Q,h as W}from"./vendor.be636790.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};X();var N="/range2dices/assets/d10.02a564c5.png",L="/range2dices/assets/d100.8a5bdde1.png",M="/range2dices/assets/d12.71de8583.png",O="/range2dices/assets/d20.24169536.png",q="/range2dices/assets/d4.fa052c7e.png",C="/range2dices/assets/d6.7ca1bcb5.png",E="/range2dices/assets/d8.7578e8ac.png",j="/range2dices/assets/coin.21d4a375.png";class F{constructor(e,s){h(this,"n");h(this,"faces");this.n=e,this.faces=s}set times(e){this.n=e}increase(){this.n+=1}throw(e,s=this.n){return s==1?[Math.floor(Math.random()*this.faces)+e]:[Math.floor(Math.random()*this.faces)+e,...this.throw(e,s-1)]}}class f extends F{constructor(e,s){super(e,s)}roll(){return super.throw(1)}type(){return`d${this.faces}`}to_interval(){return new U(this.n,this.n*this.faces)}}class S extends F{constructor(e){super(e,2)}roll(){return this.n>0?super.throw(0):[0]}type(){return"coin"}to_interval(){return new U(0,this.faces)}}class y{constructor(e,s,c){h(this,"n");h(this,"dices");h(this,"coinsNum");h(this,"modif");h(this,"diceResults",{});h(this,"coinsResults",[]);h(this,"total",0);this.n=e.reduce((t,o)=>t+o.n,0),this.dices=e,this.coinsNum=s,this.modif=c}roll(){return this.coinsResults=new S(this.coinsNum).roll(),this.dices.map(e=>{var s=e.roll();this.diceResults[e.type()]={array:s,ut:s.reduce((c,t)=>c+t,0)}}),this.total=Object.keys(this.diceResults).map(e=>this.diceResults[e].ut).reduce((e,s)=>e+s,0)+this.coinsResults.reduce((e,s)=>e+s,0)+this.modif,this}}class U{constructor(e,s){h(this,"max");h(this,"min");this.min=e,this.max=s}candidates(e){var s=this.min-e.to_interval().min,c=this.max-e.to_interval().max-s;if(c<0)return null;var t=this.candidates(new f(e.n+1,e.faces));return t||new y([e],c,s)}all_candidates(){return[new f(1,4),new f(1,6),new f(1,8),new f(1,10),new f(1,12),new f(1,20),new f(1,100)].map(e=>this.candidates(e)).filter(e=>e!==null)}optimal_candidate(){return this.all_candidates().length===0?new y([],this.max,0):this.all_candidates().reduce((s,c)=>s instanceof y&&c instanceof y?s.coinsNum<c.coinsNum||s.coinsNum==c.coinsNum&&s.n<c.n?s:c:new y([],1/0,0),new y([],1/0,0))}}var Y="/range2dices/assets/pattern-dices.bb661ac9.png";const Z=["name"],ee=["src"],I=k({props:{scheme:{type:[S,f],required:!0}},setup(i){function e(s){return new URL({"/src/assets/coin.png":j,"/src/assets/d10.png":N,"/src/assets/d100.png":L,"/src/assets/d12.png":M,"/src/assets/d20.png":O,"/src/assets/d4.png":q,"/src/assets/d6.png":C,"/src/assets/d8.png":E,"/src/assets/pattern-dices.png":Y}[`/src/assets/${s}.png`],self.location).href}return(s,c)=>(a(),l("div",{name:i.scheme.n+i.scheme.type()},[r("div",{class:J(["number",i.scheme.type()])},m(i.scheme.n),3),r("img",{src:e(i.scheme.type()),width:"60"},null,8,ee)],8,Z))}});const se={class:"fieldExpr"},te={key:0,class:"sumSomething"},ne={key:0,class:"operator"},ie={key:1,class:"sumSomething"},re=r("div",{class:"operator"},"+",-1),ae={class:"modificador"},ce=k({props:{roll:{type:y,required:!0},coins:{type:Number,required:!0}},setup(i){const e=i;function s(){return e.roll?e.roll.dices:[]}return(c,t)=>(a(),l("div",se,[(a(!0),l(w,null,b(s(),o=>(a(),l("div",{key:o},[x(I,{scheme:o},null,8,["scheme"])]))),128)),i.coins!=0?(a(),l("div",te,[s().length>0?(a(),l("div",ne,"+")):u("",!0),x(I,{scheme:new n(S)(i.coins)},null,8,["scheme"])])):u("",!0),i.roll.modif!=0?(a(),l("div",ie,[re,r("div",ae,m(i.roll.modif),1)])):u("",!0)]))}});const le=r("h1",null,"Range2Dices",-1),oe={class:"menu"},de={key:0,class:"fieldRollSet"},ue={key:1,class:"fieldRollSet"},_e={class:"result-container"},he={key:0,class:"dice-name"},me=["src"],ve={class:"dice-values"},fe=r("div",{class:"dice-equal"},"=",-1),pe={class:"dice-total"},ge={key:0,class:"dice-result"},ye={key:0,class:"dice-name"},we=r("img",{src:j,width:"35",alt:"image"},null,-1),Re=[we],be={class:"dice-values"},ke=r("div",{class:"dice-equal"},"=",-1),$e={class:"dice-total"},xe=r("hr",null,null,-1),Ne={key:1,class:"lastExper"},Le={class:"dice-value lastResult_dices"},Me={class:"last-operator"},Oe={class:"coins-value lastResult_coins"},qe={class:"last-operator"},Ce={class:"dice-value lastResult_modif"},Ee={key:0,class:"total"},Se=k({setup(i){var e=g(0),s=g(0),c=g(!1),t=g(),o=g(),v=g(),$=g();function P(p){return console.log(new URL({"/src/assets/d10.png":N,"/src/assets/d100.png":L,"/src/assets/d12.png":M,"/src/assets/d20.png":O,"/src/assets/d4.png":q,"/src/assets/d6.png":C,"/src/assets/d8.png":E}[`/src/assets/d${p}.png`],self.location).href),new URL({"/src/assets/d10.png":N,"/src/assets/d100.png":L,"/src/assets/d12.png":M,"/src/assets/d20.png":O,"/src/assets/d4.png":q,"/src/assets/d6.png":C,"/src/assets/d8.png":E}[`/src/assets/d${p}.png`],self.location).href}function T(){c.value=!0,t.value=new U(e.value,s.value).optimal_candidate(),o.value=null,v.value=null,$.value=null}function z(){t.value.roll(),o.value=Object.values(t.value.diceResults).reduce((p,_)=>p+_.ut,0),v.value=Object.values(t.value.coinsResults).reduce((p,_)=>p+_,0),$.value=t.value.modif}return(p,_)=>(a(),l(w,null,[le,r("div",oe,[V(r("input",{"onUpdate:modelValue":_[0]||(_[0]=d=>D(e)?e.value=d:e=d),type:"number"},null,512),[[B,n(e)]]),V(r("input",{"onUpdate:modelValue":_[1]||(_[1]=d=>D(s)?s.value=d:s=d),type:"number"},null,512),[[B,n(s)]]),r("button",{onClick:_[2]||(_[2]=d=>T())},"Generar")]),n(c)?(a(),l("div",de,[x(ce,{roll:n(t),coins:n(t).coinsNum},null,8,["roll","coins"]),r("button",{class:"rollExpr",onClick:_[3]||(_[3]=d=>z())},"roll")])):u("",!0),n(c)?(a(),l("div",ue,[r("div",_e,[(a(!0),l(w,null,b(n(t).dices,(d,R)=>(a(),l("div",{class:"dice-result",key:R},[n(t).diceResults[`d${d.faces}`]?(a(),l("div",he,[r("img",{src:P(d.faces),width:"35",alt:"image"},null,8,me)])):u("",!0),r("div",ve,[n(t).diceResults[`d${d.faces}`]?(a(!0),l(w,{key:0},b(n(t).diceResults[`d${d.faces}`].array,(A,G)=>(a(),l("div",{class:"dice-value",key:G},m(A),1))),128)):u("",!0)]),R+1==n(t).dices.length&&n(t).diceResults[`d${d.faces}`]?(a(),l(w,{key:1},[fe,r("div",pe,m(n(t).diceResults[`d${d.faces}`].ut),1)],64)):u("",!0)]))),128)),n(t).coinsResults.length>0?(a(),l("div",ge,[n(t).coinsResults?(a(),l("div",ye,Re)):u("",!0),r("div",be,[n(t).coinsResults?(a(!0),l(w,{key:0},b(n(t).coinsResults,(d,R)=>(a(),l("div",{class:"dice-value",key:R},m(d),1))),128)):u("",!0)]),ke,r("div",$e,m(n(v)),1)])):u("",!0),xe,n(o)?(a(),l("div",Ne,[r("div",Le,m(n(o)),1),r("div",Me,m(n(v)>0?"+":"-"),1),r("div",Oe,m(n(v)),1),r("div",qe,m(n($)>0?"+":"-"),1),r("div",Ce,m(Math.abs(n(t).modif)),1)])):u("",!0)]),n(t).total?(a(),l("div",Ee,m(n(t).total),1)):u("",!0)])):u("",!0)],64))}}),Ue=k({setup(i){return(e,s)=>(a(),Q(Se))}});W(Ue).mount("#app");