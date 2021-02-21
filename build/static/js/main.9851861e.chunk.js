(this["webpackJsonpreact-redux-typescript-ecart"]=this["webpackJsonpreact-redux-typescript-ecart"]||[]).push([[0],{56:function(n,e,t){n.exports=t(72)},61:function(n,e,t){},62:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var a=t(2),r=t.n(a),c=t(32),o=t.n(c),i=(t(61),t(62),t(75)),u=t(16),l=t(74),d=Object(u.a)({},l.a,{colors:Object(u.a)({},l.a.colors,{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),f=t(15),s=t(30),m=t(18),E=t(4),h=t(5),p=t(36);function g(){var n=Object(E.a)(["\n  background-color: #6394f8;\n  border-radius: 10px;\n  color: white;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 1;\n  padding: 3px 7px;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"]);return g=function(){return n},n}function b(){var n=Object(E.a)(["\n  width: 20%;\n  float: right;\n  padding: 10px;\n  cursor: pointer;\n"]);return b=function(){return n},n}function v(){var n=Object(E.a)(["\n  width: 20%;\n  float: left;\n  padding: 10px;\n"]);return v=function(){return n},n}function O(){var n=Object(E.a)(["\n  width: 100%;\n  height: 50px;\n  /* position: fixed; */\n  background: #e7e8eb;\n  margin: auto;\n"]);return O=function(){return n},n}var T,C=h.a.div(O()),j=h.a.div(v()),R=h.a.div(b()),_=h.a.span(g()),y=Object(f.c)((function(n){var e=n.cart;return{data:e.data,loading:e.loading,errors:e.errors}}),(function(){}))((function(n){var e=n.data,t=(n.loading,n.errors,n.children);return r.a.createElement("div",null,r.a.createElement(C,null,r.a.createElement(j,null,r.a.createElement(p.a,{to:"/"},"My Cart")),r.a.createElement(R,null,r.a.createElement(p.a,{to:"/cart"},"Cart ",r.a.createElement(_,null,e.items.length)))),t)})),w=t(53);!function(n){n.ADD_TO_CART="@@cart/ADD_TO_CART",n.ADD_TO_CART_FAILURE="@@cart/ADD_TO_CART_FAILURE",n.REMOVE_FROM_CART="@@cart/REMOVE_FROM_CART",n.FETCH_CART_REQUEST="@@cart/FETCH_CART_REQUEST",n.FETCH_CART_SUCCESS="@@cart/FETCH_CART_SUCCESS",n.FETCH_CART_ERROR="@@cart/FETCH_CART_ERROR"}(T||(T={}));function x(){var n=Object(E.a)(["\n  padding: 10px;\n  background-color: blue;\n  color: #ffffff;\n  border-radius: 10px;\n"]);return x=function(){return n},n}function A(){var n=Object(E.a)([""]);return A=function(){return n},n}function S(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return S=function(){return n},n}function F(){var n=Object(E.a)(["\n  height: 76px;\n"]);return F=function(){return n},n}function H(){var n=Object(E.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n"]);return H=function(){return n},n}function I(){var n=Object(E.a)(["\n  width: 230px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return n},n}function U(){var n=Object(E.a)(["\n  background-color: #eeeeee;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 15px;\n  cursor: pointer;\n  flex: 0 0 25%;\n"]);return U=function(){return n},n}var D,k=h.a.div(U()),M=h.a.figure(I()),J=h.a.img(H()),Q=h.a.h1(F()),B=h.a.div(S()),L=h.a.text(A()),Y=h.a.button(x()),z=Object(f.c)((function(){}),(function(n){return{addToCart:function(e){return n(function(n){return function(e){try{return e({type:T.ADD_TO_CART,payload:n})}catch(t){return e({type:T.ADD_TO_CART_FAILURE,payload:null})}}}(e))}}}))((function(n){var e=n.item,t=n.addToCart;return r.a.createElement(k,null,r.a.createElement(M,null,r.a.createElement(J,{src:e.image})),r.a.createElement(Q,null,e.name),r.a.createElement(B,null,r.a.createElement(L,null,e.brand),r.a.createElement(Y,{onClick:function(){return function(n){t(n)}(e)}},"Add To Cart")))}));!function(n){n.FETCH_REQUEST="@@inventory/FETCH_REQUEST",n.FETCH_SUCCESS="@@inventory/FETCH_SUCCESS",n.FETCH_ERROR="@@inventory/FETCH_ERROR"}(D||(D={}));t(67);var K=t(42);K.a.initializeApp({apiKey:"AIzaSyBPF0BWYcm3hBXQrT1KJ_IbIMR5EMlQyY4",authDomain:"regal-station-187104.firebaseapp.com",databaseURL:"https://regal-station-187104-default-rtdb.firebaseio.com",projectId:"regal-station-187104",storageBucket:"regal-station-187104.appspot.com",messagingSenderId:"207271752972",appId:"1:207271752972:web:fef1a8b3a4c7fa14810529",measurementId:"G-K7J1XJ9TYJ"});var V=K.a;function W(){var n=Object(E.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return W=function(){return n},n}function N(){var n=Object(E.a)(["\n  width: 100%;\n  max-width: 1170px;\n  margin: auto;\n"]);return N=function(){return n},n}var P=h.a.div(N()),X=h.a.div(W()),G=Object(f.c)()((function(){var n=r.a.useState([{name:"Levo Tan Lounge Chair",price:"600",image:"./images/products/chair6.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Mahesh",currentInventory:15,id:"994d33fb-7ee3-43a6-ae51-1687f9cd7c15"}]),e=Object(w.a)(n,2),t=e[0],c=e[1],o={};return t.length>0&&(o=t.map((function(n){return r.a.createElement(z,{item:n})}))),Object(a.useEffect)((function(){new Promise((function(n,e){V.database().ref("product").on("value",(function(e){n(e.val())}),(function(n){console.log("Error: ",n)}))})).then((function(n){console.log("fetchdata then",n);var e=JSON.parse(JSON.stringify(n));c(e),console.log("products ---",t)}))}),[]),r.a.createElement(P,null,r.a.createElement(X,null,o))}));function $(){var n=Object(E.a)(["\ntext-align: right;\n"]);return $=function(){return n},n}function q(){var n=Object(E.a)([""]);return q=function(){return n},n}function Z(){var n=Object(E.a)(["\n  width: 100px;\n  height: 100px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(E.a)([""]);return nn=function(){return n},n}function en(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return en=function(){return n},n}function tn(){var n=Object(E.a)(["\nwidth: 25%;\nfloat: left;\ntext-align: right;\n"]);return tn=function(){return n},n}function an(){var n=Object(E.a)(["\nwidth: 75%;\nfloat: left;\ntext-align: center;\n"]);return an=function(){return n},n}function rn(){var n=Object(E.a)(["\nheight: 100%;\nwidth: 100%;\nfloat: left;\nfont-weight: bold;\n"]);return rn=function(){return n},n}function cn(){var n=Object(E.a)(["\n  height: 100%;\n  width: 100%;\n"]);return cn=function(){return n},n}function on(){var n=Object(E.a)(["\n  height: 100%;\n  width: 100%;\n"]);return on=function(){return n},n}function un(){var n=Object(E.a)([""]);return un=function(){return n},n}function ln(){var n=Object(E.a)(["\n  /* height: 100%;\n  width: 100%; */\n  padding: 30px;\n"]);return ln=function(){return n},n}var dn=h.a.div(ln()),fn=h.a.h2(un()),sn=h.a.div(on()),mn=h.a.div(cn()),En=h.a.div(rn()),hn=h.a.div(an()),pn=h.a.div(tn()),gn=h.a.div(en()),bn=h.a.div(nn()),vn=h.a.img(Z()),On=h.a.p(q()),Tn=h.a.p($()),Cn=Object(f.c)((function(n){return{cartItems:n.cart.data}}),(function(){}))((function(n){var e,t=n.cartItems;if(console.log("cartItems",t),console.log(t.items.length),t.items.length>0){var a=0;t.items.forEach((function(n,e){a+=parseInt(n.price)})),e=r.a.createElement(En,null,r.a.createElement(hn,null,"Total:"),r.a.createElement(pn,null,a))}return r.a.createElement(dn,null,r.a.createElement(sn,null,r.a.createElement(fn,null,"Your Cart")),r.a.createElement(mn,null,t.items.map((function(n){return r.a.createElement(gn,null,r.a.createElement(vn,{src:n.image}),r.a.createElement(On,null,n.name),r.a.createElement(Tn,null,n.price))}))),r.a.createElement(bn,null,e))})),jn=function(){return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null,r.a.createElement(G,null))}}),r.a.createElement(m.a,{path:"/cart",render:function(){return r.a.createElement(y,null,r.a.createElement(Cn,null))}})))},Rn=function(n){var e=n.store,t=n.history;return r.a.createElement(f.a,{store:e},r.a.createElement(i.a,{theme:d},r.a.createElement(s.a,{history:t},r.a.createElement(jn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _n=t(14),yn=t(24),wn=t(52),xn=t(45),An={data:[],errors:void 0,loading:!1},Sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:An,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D.FETCH_REQUEST:return Object(u.a)({},n,{loading:!0});case D.FETCH_SUCCESS:return console.log("action payload",e.payload),Object(u.a)({},n,{loading:!1,data:e.payload});case D.FETCH_ERROR:return Object(u.a)({},n,{loading:!1,errors:e.payload});default:return n}},Fn=t(54),Hn={data:{id:0,items:[]},errors:void 0,loading:!1},In=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T.FETCH_CART_REQUEST:return Object(u.a)({},n,{loading:!0});case T.FETCH_CART_SUCCESS:return Object(u.a)({},n,{loading:!1,data:e.payload});case T.FETCH_CART_ERROR:return Object(u.a)({},n,{loading:!1,errors:e.payload});case T.ADD_TO_CART:return{errors:n.errors,loading:n.loading,data:Object(u.a)({},n.data,{id:n.data.id,items:[].concat(Object(Fn.a)(n.data.items),[e.payload])})};case T.REMOVE_FROM_CART:return{errors:n.errors,loading:n.loading,data:Object(u.a)({},n.data,{id:n.data.id,items:n.data.items.filter((function(n){return n!==e.payload.id}))})};default:return n}};var Un,Dn,kn=Object(_n.a)(),Mn=(Un=kn,Dn={},Object(yn.d)(function(n){return Object(yn.c)({cart:In,inventory:Sn,router:Object(s.b)(n)})}(Un),Dn,Object(yn.a)(Object(xn.a)(Un),wn.a)));o.a.render(r.a.createElement(Rn,{store:Mn,history:kn}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.9851861e.chunk.js.map