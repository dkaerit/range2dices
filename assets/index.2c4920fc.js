var j=Object.defineProperty;var F=(i,e,s)=>e in i?j(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var h=(i,e,s)=>(F(i,typeof e!="symbol"?e+"":e,s),s);import{d as k,o as l,c as a,a as r,t as m,n as P,F as y,r as b,b as $,e as d,u as n,f as p,w as M,v as O,i as q,g as T,h as U}from"./vendor.be636790.js";const z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function s(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=s(t);fetch(t.href,c)}};z();var A="/range2dices/assets/d10.02a564c5.png",G="/range2dices/assets/d100.8a5bdde1.png",K="/range2dices/assets/d12.71de8583.png",H="/range2dices/assets/d20.24169536.png",J="/range2dices/assets/d4.fa052c7e.png",Q="/range2dices/assets/d6.7ca1bcb5.png",W="/range2dices/assets/d8.7578e8ac.png";class E{constructor(e,s){h(this,"n");h(this,"faces");this.n=e,this.faces=s}set times(e){this.n=e}increase(){this.n+=1}throw(e,s=this.n){return s==1?[Math.floor(Math.random()*this.faces)+e]:[Math.floor(Math.random()*this.faces)+e,...this.throw(e,s-1)]}}class f extends E{constructor(e,s){super(e,s)}roll(){return super.throw(1)}type(){return`d${this.faces}`}to_interval(){return new L(this.n,this.n*this.faces)}}class N extends E{constructor(e){super(e,2)}roll(){return this.n>0?super.throw(0):[0]}type(){return"coin"}to_interval(){return new L(0,this.faces)}}class g{constructor(e,s,o){h(this,"n");h(this,"dices");h(this,"coinsNum");h(this,"modif");h(this,"diceResults",{});h(this,"coinsResults",[]);h(this,"total",0);this.n=e.reduce((t,c)=>t+c.n,0),this.dices=e,this.coinsNum=s,this.modif=o}roll(){return this.coinsResults=new N(this.coinsNum).roll(),this.dices.map(e=>{var s=e.roll();this.diceResults[e.type()]={array:s,ut:s.reduce((o,t)=>o+t,0)}}),this.total=Object.keys(this.diceResults).map(e=>this.diceResults[e].ut).reduce((e,s)=>e+s,0)+this.coinsResults.reduce((e,s)=>e+s,0)+this.modif,this}}class L{constructor(e,s){h(this,"max");h(this,"min");this.min=e,this.max=s}candidates(e){var s=this.min-e.to_interval().min,o=this.max-e.to_interval().max-s;if(o<0)return null;var t=this.candidates(new f(e.n+1,e.faces));return t||new g([e],o,s)}all_candidates(){return[new f(1,4),new f(1,6),new f(1,8),new f(1,10),new f(1,12),new f(1,20),new f(1,100)].map(e=>this.candidates(e)).filter(e=>e!==null)}optimal_candidate(){return this.all_candidates().length===0?new g([],this.max,0):this.all_candidates().reduce((s,o)=>s instanceof g&&o instanceof g?s.coinsNum<o.coinsNum||s.coinsNum==o.coinsNum&&s.n<o.n?s:o:new g([],1/0,0),new g([],1/0,0))}}const X=["name"],Y=["src"],C=k({props:{scheme:{type:[N,f],required:!0}},setup(i){return(e,s)=>(l(),a("div",{name:i.scheme.n+i.scheme.type()},[r("div",{class:P(["number",i.scheme.type()])},m(i.scheme.n),3),r("img",{src:"src/assets/"+i.scheme.type()+".png",width:"60"},null,8,Y)],8,X))}});const Z={class:"fieldExpr"},ee={key:0,class:"sumSomething"},se={key:0,class:"operator"},te={key:1,class:"sumSomething"},ne=r("div",{class:"operator"},"+",-1),ie={class:"modificador"},re=k({props:{roll:{type:g,required:!0},coins:{type:Number,required:!0}},setup(i){const e=i;function s(){return e.roll?e.roll.dices:[]}return(o,t)=>(l(),a("div",Z,[(l(!0),a(y,null,b(s(),c=>(l(),a("div",{key:c},[$(C,{scheme:c},null,8,["scheme"])]))),128)),i.coins!=0?(l(),a("div",ee,[s().length>0?(l(),a("div",se,"+")):d("",!0),$(C,{scheme:new n(N)(i.coins)},null,8,["scheme"])])):d("",!0),i.roll.modif!=0?(l(),a("div",te,[ne,r("div",ie,m(i.roll.modif),1)])):d("",!0)]))}});const le=r("h1",null,"Range2Dices",-1),ae={class:"menu"},oe={key:0,class:"fieldRollSet"},ce={key:1,class:"fieldRollSet"},ue={class:"result-container"},de={key:0,class:"dice-name"},_e=["src"],he={class:"dice-values"},me=r("div",{class:"dice-equal"},"=",-1),ve={class:"dice-total"},fe={key:0,class:"dice-result"},pe={key:0,class:"dice-name"},ge=["src"],ye={class:"dice-values"},we=r("div",{class:"dice-equal"},"=",-1),Re={class:"dice-total"},be=r("hr",null,null,-1),ke={key:1,class:"lastExper"},xe={class:"dice-value lastResult_dices"},$e={class:"last-operator"},Ne={class:"coins-value lastResult_coins"},Le={class:"last-operator"},Me={class:"dice-value lastResult_modif"},Oe={key:0,class:"total"},qe=k({setup(i){var e=p(0),s=p(0),o=p(!1),t=p(),c=p(),v=p(),x=p();function S(w){return new URL({"/src/assets/d10.png":A,"/src/assets/d100.png":G,"/src/assets/d12.png":K,"/src/assets/d20.png":H,"/src/assets/d4.png":J,"/src/assets/d6.png":Q,"/src/assets/d8.png":W}[`/src/assets/d${dice.faces}.png`],self.location).href}function V(){o.value=!0,t.value=new L(e.value,s.value).optimal_candidate(),c.value=null,v.value=null,x.value=null}function B(){t.value.roll(),c.value=Object.values(t.value.diceResults).reduce((w,_)=>w+_.ut,0),v.value=Object.values(t.value.coinsResults).reduce((w,_)=>w+_,0),x.value=t.value.modif}return(w,_)=>(l(),a(y,null,[le,r("div",ae,[M(r("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>q(e)?e.value=u:e=u),type:"number"},null,512),[[O,n(e)]]),M(r("input",{"onUpdate:modelValue":_[1]||(_[1]=u=>q(s)?s.value=u:s=u),type:"number"},null,512),[[O,n(s)]]),r("button",{onClick:_[2]||(_[2]=u=>V())},"Generar")]),n(o)?(l(),a("div",oe,[$(re,{roll:n(t),coins:n(t).coinsNum},null,8,["roll","coins"]),r("button",{class:"rollExpr",onClick:_[3]||(_[3]=u=>B())},"roll")])):d("",!0),n(o)?(l(),a("div",ce,[r("div",ue,[(l(!0),a(y,null,b(n(t).dices,(u,R)=>(l(),a("div",{class:"dice-result",key:R},[n(t).diceResults[`d${u.faces}`]?(l(),a("div",de,[r("img",{src:S(u.faces),width:"35"},null,8,_e)])):d("",!0),r("div",he,[n(t).diceResults[`d${u.faces}`]?(l(!0),a(y,{key:0},b(n(t).diceResults[`d${u.faces}`].array,(D,I)=>(l(),a("div",{class:"dice-value",key:I},m(D),1))),128)):d("",!0)]),R+1==n(t).dices.length&&n(t).diceResults[`d${u.faces}`]?(l(),a(y,{key:1},[me,r("div",ve,m(n(t).diceResults[`d${u.faces}`].ut),1)],64)):d("",!0)]))),128)),n(t).coinsResults.length>0?(l(),a("div",fe,[n(t).coinsResults?(l(),a("div",pe,[r("img",{src:"@/assets/coin.png",width:"35"},null,8,ge)])):d("",!0),r("div",ye,[n(t).coinsResults?(l(!0),a(y,{key:0},b(n(t).coinsResults,(u,R)=>(l(),a("div",{class:"dice-value",key:R},m(u),1))),128)):d("",!0)]),we,r("div",Re,m(n(v)),1)])):d("",!0),be,n(c)?(l(),a("div",ke,[r("div",xe,m(n(c)),1),r("div",$e,m(n(v)>0?"+":"-"),1),r("div",Ne,m(n(v)),1),r("div",Le,m(n(x)>0?"+":"-"),1),r("div",Me,m(Math.abs(n(t).modif)),1)])):d("",!0)]),n(t).total?(l(),a("div",Oe,m(n(t).total),1)):d("",!0)])):d("",!0)],64))}}),Ce=k({setup(i){return(e,s)=>(l(),T(qe))}});U(Ce).mount("#app");