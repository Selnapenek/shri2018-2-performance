!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="../",r(r.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){var o=document.querySelector(".modal__value");document.querySelector(".adjust-bar.adjust-bar_theme_temp").oninput=function(){o.innerHTML=0<this.value?"+"+this.value:this.value};var n,r,c=document.querySelector(".devices__paginator .paginator__arrow_left"),l=document.querySelector(".devices__paginator .paginator__arrow_right"),a=document.querySelectorAll(".devices__panel").length,u=document.querySelector(".devices"),i=document.querySelector(".devices__paginator"),d=1;i.classList.toggle("paginator_hide",a<7),l.addEventListener("click",function(){d+=1,c.classList.toggle("paginator__arrow_disabled",1===d),u.scroll({top:0,left:1366,behavior:"smooth"})}),c.addEventListener("click",function(){1<d&&(d-=1,c.classList.toggle("paginator__arrow_disabled",1===d),u.scroll({top:0,left:-1366,behavior:"smooth"}))});var s,_=.42,m=-.42,f=265,g=function(e){return Math.floor(Math.abs(360*e*1.73+f)/53+26)};function p(e){_<e?e=_:e<m&&(e=m),n=g(r=e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+n,document.querySelector(".knob__value").innerHTML="+"+n,document.querySelector(".knob__indicator").style.strokeDasharray=360*r*1.73+f+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*r+"deg)"}function y(e,t){var o,n,r=[(o=t.getBoundingClientRect()).left+(o.right-o.left)/2,o.top+(o.bottom-o.top)/2],c=[e.clientX,e.clientY];return e.targetTouches&&e.targetTouches[0]&&(c=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),n=Math.atan2(c[1]-r[1],c[0]-r[0]),n+=Math.PI/2}var h,v=null,S=null;function b(e){e.preventDefault(),e.stopPropagation();var t=y(e,document.querySelector(".knob_center"));s=!0,v=t,S=r}function q(e){s=!1}function L(e){if(s){var t=v,o=y(e,document.querySelector(".knob_center")),n=o-t;v=o,n<0&&(n+=2*Math.PI),n>Math.PI&&(n-=2*Math.PI);var r=n/Math.PI/2,c=S+r;p(S=c)}}(h=document.querySelector(".knob-container")).addEventListener("mousedown",b),document.addEventListener("mouseup",q),document.addEventListener("mousemove",L),h.addEventListener("touchstart",b),document.addEventListener("touchend",q),document.addEventListener("touchmove",L),p(0),document.querySelectorAll(".modal_close").forEach(function(e){e.onclick=function(){document.querySelectorAll(".modal").forEach(function(e){e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})}});var k={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(function(e){e.onclick=function(){document.querySelector(".adjust-bar_theme_temp").value=k[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=0<k[this.id]?"+"+k[this.id]:k[this.id]}});var E=function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(function(e){e.onclick=function(){E(".modal_temp")}}),document.querySelectorAll(".panel_lamp").forEach(function(e){e.onclick=function(){E(".modal_light")}}),document.querySelectorAll(".panel_floor").forEach(function(e){e.onclick=function(){E(".modal_knob")}});var w=document.querySelector(".scenarios__paginator .paginator__arrow_left"),M=document.querySelector(".scenarios__paginator .paginator__arrow_right"),T=document.querySelectorAll(".scenarios__panel").length,A=document.querySelectorAll(".scenarios__page").length,P=document.querySelector(".scenarios"),j=document.querySelector(".scenarios__paginator"),x=1;j.classList.toggle("paginator_hide",T<=9),M.addEventListener("click",function(){x<A&&(x+=1,M.classList.toggle("paginator__arrow_disabled",x===A),w.classList.toggle("paginator__arrow_disabled",1===x),P.scroll({top:0,left:645,behavior:"smooth"}))}),w.addEventListener("click",function(){1<x&&(x-=1,M.classList.toggle("paginator__arrow_disabled",x===A),w.classList.toggle("paginator__arrow_disabled",1===x),P.scroll({top:0,left:-645,behavior:"smooth"}))});var O=document.querySelector(".filter__select-button"),H=document.querySelector(".filter__select-button .button__text"),I=document.querySelectorAll(".filter__select-item"),D=document.querySelector(".filter__select-popup");O.addEventListener("click",function(){D.classList.toggle("filter__select-popup_open")});var X="";window.addEventListener("scroll",function(){X+=document.querySelectorAll("body")[0].offsetWidth,document.querySelector(".stats").innerHTML=X}),I.forEach(function(e){e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,I.forEach(function(e){return e.classList.toggle("filter__select-item_checked",!1)}),e.target.classList.toggle("filter__select-item_checked",!0),D.classList.toggle("filter__select-popup_open",!1),H.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")})},function(e,t){}]);