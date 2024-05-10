(function(){"use strict";var n={1593:function(n,r,t){var e=t(5130),o=t(6768),u=t.p+"img/logo.c8070b4a.png";function l(n,r,t,e,l,i){const a=(0,o.g2)("OrdaOrders");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("img",{src:u,alt:"OrdaSys Logo",class:"logo",onMouseover:r[0]||(r[0]=r=>n.hover=!0),onMouseleave:r[1]||(r[1]=r=>n.hover=!1)},null,32),(0,o.bF)(a)],64)}var i=t(4232);const a=n=>((0,o.Qi)("data-v-3f8da180"),n=n(),(0,o.jt)(),n),d={id:"app"},c=a((()=>(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Order ID"),(0,o.Lk)("th",null,"Customer ID"),(0,o.Lk)("th",null,"Items"),(0,o.Lk)("th",null,"Total"),(0,o.Lk)("th",null,"Date"),(0,o.Lk)("th",null,"Status")])],-1)));function s(n,r,t,e,u,l){return(0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("table",null,[c,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.orders,(n=>((0,o.uX)(),(0,o.CE)("tr",{key:n.order_id},[(0,o.Lk)("td",null,(0,i.v_)(n.order_id),1),(0,o.Lk)("td",null,(0,i.v_)(n.customer_id),1),(0,o.Lk)("td",null,[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.items,(n=>((0,o.uX)(),(0,o.CE)("li",{key:n.item_id},(0,i.v_)(n.quantity)+" x "+(0,i.v_)(n.name)+" at $"+(0,i.v_)(n.price),1)))),128))])]),(0,o.Lk)("td",null,"$"+(0,i.v_)(n.total),1),(0,o.Lk)("td",null,(0,i.v_)(n.date),1),(0,o.Lk)("td",null,(0,i.v_)(n.status),1)])))),128))])])])}var f=t(8355),v={name:"OrdaOrders",data(){return{orders:[]}},mounted(){this.fetchOrders()},methods:{fetchOrders(){console.log("Fetching orders from:","https://orda-v10-backend-prod.onrender.com/api/v1/orders"),f.A.get("https://orda-v10-backend-prod.onrender.com/api/v1/orders").then((n=>{this.orders=n.data})).catch((n=>console.error("Error fetching orders:",n)))}}},p=t(1241);const h=(0,p.A)(v,[["render",s],["__scopeId","data-v-3f8da180"]]);var k=h,b={name:"App",components:{OrdaOrders:k}};const m=(0,p.A)(b,[["render",l]]);var g=m;(0,e.Ef)(g).mount("#app")}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}};return n[e].call(u.exports,u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(r,e,o,u){if(!e){var l=1/0;for(c=0;c<n.length;c++){e=n[c][0],o=n[c][1],u=n[c][2];for(var i=!0,a=0;a<e.length;a++)(!1&u||l>=u)&&Object.keys(t.O).every((function(n){return t.O[n](e[a])}))?e.splice(a--,1):(i=!1,u<l&&(l=u));if(i){n.splice(c--,1);var d=o();void 0!==d&&(r=d)}}return r}u=u||0;for(var c=n.length;c>0&&n[c-1][2]>u;c--)n[c]=n[c-1];n[c]=[e,o,u]}}(),function(){t.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(r,{a:r}),r}}(),function(){t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={524:0};t.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,u,l=e[0],i=e[1],a=e[2],d=0;if(l.some((function(r){return 0!==n[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(a)var c=a(t)}for(r&&r(e);d<l.length;d++)u=l[d],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(c)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=t.O(void 0,[504],(function(){return t(1593)}));e=t.O(e)})();
//# sourceMappingURL=app.c6a965c0.js.map