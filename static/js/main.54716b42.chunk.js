(this["webpackJsonptiles-game"]=this["webpackJsonptiles-game"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),o=(n(16),n(3)),u=n(1),l=n(2);n(17);var s=c.a.memo((function(e){var t=e.text,n=e.isOpened,a=(e.isUnlock,e.onClick);return c.a.createElement("div",{className:"tile"+(n?" tile-flip":""),onClick:a},c.a.createElement("div",{className:"tile__front-side"}),c.a.createElement("div",{className:"tile__back-side"},t))}));n(18);var m=function(e){var t=e.source,n=e.handleOpenTile,a=t.map((function(e,t){var a=e.text,i=e.isOpened,r=e.isUnlock;return c.a.createElement(s,{key:t,text:a,isOpened:i,isUnlock:r,onClick:function(){return n(t)}})}));return c.a.createElement("section",{className:"tile-grid"},a)};n(19);var f=c.a.memo((function(e){var t=e.text,n=e.onClick,a=e.disabled;return c.a.createElement("button",{className:"base-button",onClick:n,disabled:a},t)})),d=n(9),p=n(10),O=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"getRandomInt",value:function(e,t){var n=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-n))+n}},{key:"getSequence",value:function(e){return Array.apply(0,Array(e)).map((function(e,t){return t+1}))}},{key:"shake",value:function(e){for(var t=Object(o.a)(e),n=e.length,a=null,c=null;0!==n;)c=Math.floor(Math.random()*n),a=t[n-=1],t[n]=t[c],t[c]=a;return t}},{key:"getRandomPairedArray",value:function(e){var t=e/2;return this.shake([].concat(Object(o.a)(this.getSequence(t)),Object(o.a)(this.getSequence(t))))}}]),e}();var b=c.a.memo((function(e){var t=e.openings;return c.a.createElement("h1",null,"Openings: ".concat(t))})),v=n(6),j=(n(20),[]),h={text:"",isOpened:!1,isUnlock:!1};var g=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(j),s=Object(l.a)(r,2),d=s[0],p=s[1],g=Object(a.useState)(O.getRandomPairedArray(16)),k=Object(l.a)(g,2),y=k[0],E=k[1],x=Object(a.useState)(Array(16).fill(h).map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{text:y[t]})}))),S=Object(l.a)(x,2),N=S[0],_=S[1],w=Object(a.useState)(!1),A=Object(l.a)(w,2),M=A[0],C=A[1],I=Object(a.useState)(!0),R=Object(l.a)(I,2),T=R[0],U=R[1];return Object(a.useEffect)((function(){2===d.length&&(!function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1],c=N[n],i=N[a];return c.text===i.text}(d)?(C(!0),setTimeout((function(){_((function(e){return e.map((function(e,t){return d.includes(t)?Object(u.a)(Object(u.a)({},e),{},{isOpened:!1}):e}))})),p([]),C(!1)}),1e3)):(C(!0),setTimeout((function(){p([]),C(!1),N.every((function(e){return!0===e.isOpened}))&&alert("WIN")}),1e3)))}),[d]),c.a.createElement("div",{className:"App"},c.a.createElement(v.a.div,{className:"app__info-panel",transition:{duration:.5,ease:"easeInOut"},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1}},c.a.createElement(b,{openings:n})),c.a.createElement(v.a.div,{className:"app__main-section",transition:{duration:.75,ease:"easeInOut"},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1}},c.a.createElement(m,{source:N,handleOpenTile:function(e){N[e].isOpened||3===d.length||M||(i((function(e){return e+1})),_((function(t){return t.map((function(t,n){return n===e?Object(u.a)(Object(u.a)({},t),{},{isOpened:!0}):t}))})),p((function(t){return[].concat(Object(o.a)(t),[e])})))}})),c.a.createElement(v.a.div,{className:"app__controllers-panel",transition:{duration:1,ease:"easeInOut"},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1}},c.a.createElement(f,{text:"Reset",onClick:function(){C(!0),U(!1),i(0),p(j),E(O.getRandomPairedArray(16)),_(Array(16).fill(h).map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isOpened:!1})}))),setTimeout((function(){_((function(e){return e.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{text:y[t].toString()})}))})),C(!1),U(!0)}),500)},disabled:!T||!(n>0)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.54716b42.chunk.js.map