(this["webpackJsonpreact-redux-typescript-ecart"]=this["webpackJsonpreact-redux-typescript-ecart"]||[]).push([[0],{44:function(e,a,t){e.exports=t(60)},49:function(e,a,t){},50:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),i=t.n(o),c=(t(49),t(50),t(63)),s=t(9),d=t(62),u=Object(s.a)({},d.a,{colors:Object(s.a)({},d.a.colors,{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),l=t(8),h=t(21),f=t(11),b=t(1),g=t(2),m=t(27);function p(){var e=Object(b.a)(["\n  background-color: #6394f8;\n  border-radius: 10px;\n  color: white;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 1;\n  padding: 3px 7px;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"]);return p=function(){return e},e}function v(){var e=Object(b.a)(["\n  width: 20%;\n  float: right;\n  padding: 10px;\n  cursor: pointer;\n"]);return v=function(){return e},e}function w(){var e=Object(b.a)(["\n  width: 20%;\n  float: left;\n  padding: 10px;\n"]);return w=function(){return e},e}function y(){var e=Object(b.a)(["\n  width: 100%;\n  height: 50px;\n  /* position: fixed; */\n  background: #e7e8eb;\n  margin: auto;\n"]);return y=function(){return e},e}var E,T=g.a.div(y()),k=g.a.div(w()),C=g.a.div(v()),O=g.a.span(p()),j=Object(l.c)((function(e){var a=e.cart;return{data:a.data,loading:a.loading,errors:a.errors}}),(function(){}))((function(e){var a=e.data,t=(e.loading,e.errors,e.children);return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(k,null,r.a.createElement(m.a,{to:"/"},"My Cart")),r.a.createElement(C,null,r.a.createElement(m.a,{to:"/cart"},"Cart ",r.a.createElement(O,null,a.items.length)))),t)}));!function(e){e.ADD_TO_CART="@@cart/ADD_TO_CART",e.ADD_TO_CART_FAILURE="@@cart/ADD_TO_CART_FAILURE",e.REMOVE_FROM_CART="@@cart/REMOVE_FROM_CART",e.FETCH_CART_REQUEST="@@cart/FETCH_CART_REQUEST",e.FETCH_CART_SUCCESS="@@cart/FETCH_CART_SUCCESS",e.FETCH_CART_ERROR="@@cart/FETCH_CART_ERROR"}(E||(E={}));function R(){var e=Object(b.a)(["\n  padding: 10px;\n  background-color: blue;\n  color: #ffffff;\n  border-radius: 10px;\n"]);return R=function(){return e},e}function S(){var e=Object(b.a)([""]);return S=function(){return e},e}function _(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return e},e}function A(){var e=Object(b.a)(["\n  height: 76px;\n"]);return A=function(){return e},e}function x(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n"]);return x=function(){return e},e}function F(){var e=Object(b.a)(["\n  width: 230px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}function I(){var e=Object(b.a)(["\n  background-color: #eeeeee;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 15px;\n  cursor: pointer;\n  flex: 0 0 25%;\n"]);return I=function(){return e},e}var M,D=g.a.div(I()),H=g.a.figure(F()),Y=g.a.img(x()),U=g.a.h1(A()),z=g.a.div(_()),L=g.a.text(S()),J=g.a.button(R()),B=Object(l.c)((function(){}),(function(e){return{addToCart:function(a){return e(function(e){return function(a){try{return a({type:E.ADD_TO_CART,payload:e})}catch(t){return a({type:E.ADD_TO_CART_FAILURE,payload:null})}}}(a))}}}))((function(e){var a=e.item,t=e.addToCart;return r.a.createElement(D,null,r.a.createElement(H,null,r.a.createElement(Y,{src:a.image})),r.a.createElement(U,null,a.name),r.a.createElement(z,null,r.a.createElement(L,null,a.brand),r.a.createElement(J,{onClick:function(){return function(e){t(e)}(a)}},"Add To Cart")))}));!function(e){e.FETCH_REQUEST="@@inventory/FETCH_REQUEST",e.FETCH_SUCCESS="@@inventory/FETCH_SUCCESS",e.FETCH_ERROR="@@inventory/FETCH_ERROR"}(M||(M={}));t(57);var N=[{name:"Timber Gray Sofa",price:"1000",image:"../images/products/couch1.png",description:"This is a Test Description",brand:"Surajit Sadhukhan",currentInventory:4,id:"fb94f208-6d34-425f-a3f8-e5b87794aef1"},{name:"Carmel Brown Sofa",price:"1000",image:"../images/products/couch5.png",description:"This is a test description",brand:"John Doe",currentInventory:2,id:"4c95788a-1fa2-4f5c-ab97-7a98c1862584"},{name:"Mod Leather Sofa",price:"800",image:"../images/products/couch6.png",description:"Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",brand:"Peter Son",currentInventory:8,id:"8338db8c-91c5-4341-81e1-fa350c6baa70"},{name:"Thetis Gray Love Seat",price:"900",image:"../images/products/couch7.png",description:"You know your dad\u2019s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",brand:"Charls Yunn",currentInventory:10,id:"d414f81e-0f34-49ca-8fb6-a4b47f622eb9"},{name:"Sven Tan Matte",price:"1200",image:"./images/products/couch8.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Anthony",currentInventory:7,id:"f193961b-7716-48f9-9c81-8720224dccbf"},{name:"Otis Malt Sofa",price:"500",image:"./images/products/couch9.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jimmy",currentInventory:13,id:"7bbdc630-ff67-4897-ba43-1bcc7919fc6c"},{name:"Ceni Brown 3 Seater",price:"650",image:"../images/products/couch10.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Tim",currentInventory:9,id:"4b7c67b3-0c65-47a4-b7e9-b99f07dfabc2"},{name:"Jameson Jack Lounger",price:"1230",image:"../images/products/couch11.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Bills",currentInventory:24,id:"e31876fe-34fb-4721-a6ac-7fc3938a352e"},{name:"Galaxy Blue Sofa",price:"800",image:"../images/products/couch2.png",description:"Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",brand:"Jason",currentInventory:43,id:"e60a4f85-4899-431d-816d-72134cae07a0"},{name:"Markus Green Love Seat",price:"900",image:"../images/products/couch3.png",description:"You know your dad\u2019s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",brand:"Bourne",currentInventory:2,id:"69cdde2b-17f3-411c-a5af-7c552fc6648e"},{name:"Dabit Matte Black",price:"1200",image:"../images/products/couch4.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",currentInventory:14,id:"0008c6dd-725a-4eac-b13e-795808cfeedc"},{name:"John",price:"300",image:"../images/products/chair1.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:12,id:"8baefb38-6ff4-462d-880a-b192f972d939"},{name:"Nord Lounger",price:"825",image:"./images/products/chair2.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Scott",currentInventory:13,id:"91067165-7135-4310-b5f9-e99eb2b7410e"},{name:"Ceni Matte Oranve",price:"720",image:"./images/products/chair3.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"David",currentInventory:33,id:"ab149e2a-7421-4012-b341-1309f8bdc417"},{name:"Abisko Green Recliner",price:"2000",image:"./images/products/chair4.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Vijay",currentInventory:23,id:"8eac7c82-e095-49a3-b4f7-c2df518ca1d4"},{name:"Denim on Denim Single",price:"1100",image:"./images/products/chair5.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Rajat",currentInventory:13,id:"e2b84bfb-2b60-4b82-b899-fe9483d5d2e8"},{name:"Levo Tan Lounge Chair",price:"600",image:"./images/products/chair6.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Mahesh",currentInventory:15,id:"994d33fb-7ee3-43a6-ae51-1687f9cd7c15"},{name:"Anime Tint Recliner",price:"775",image:"./images/products/chair7.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"John",currentInventory:44,id:"7f390c3f-f59b-4dfd-9d79-03e6f5d3c096"}];function Q(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Q=function(){return e},e}function W(){var e=Object(b.a)(["\n  width: 100%;\n  max-width: 1170px;\n  margin: auto;\n"]);return W=function(){return e},e}var G=g.a.div(W()),V=g.a.div(Q()),q=Object(l.c)((function(e){var a=e.inventory;return{loading:a.loading,errors:a.errors,data:a.data}}),(function(e){return{fetchRequest:function(){e((function(e){try{return console.log("inventory --- ",N),e({type:M.FETCH_SUCCESS,payload:N})}catch(a){return e({type:M.FETCH_ERROR})}}))}}}))((function(e){e.loading,e.errors;var a=e.data,t=e.fetchRequest;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement(G,null,r.a.createElement(V,null,a.map((function(e){return r.a.createElement(B,{item:e})}))))}));function P(){var e=Object(b.a)(["\ntext-align: right;\n"]);return P=function(){return e},e}function $(){var e=Object(b.a)([""]);return $=function(){return e},e}function K(){var e=Object(b.a)(["\n  width: 100px;\n  height: 100px;\n"]);return K=function(){return e},e}function X(){var e=Object(b.a)([""]);return X=function(){return e},e}function Z(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Z=function(){return e},e}function ee(){var e=Object(b.a)(["\nwidth: 25%;\nfloat: left;\ntext-align: right;\n"]);return ee=function(){return e},e}function ae(){var e=Object(b.a)(["\nwidth: 75%;\nfloat: left;\ntext-align: center;\n"]);return ae=function(){return e},e}function te(){var e=Object(b.a)(["\nheight: 100%;\nwidth: 100%;\nfloat: left;\nfont-weight: bold;\n"]);return te=function(){return e},e}function ne(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n"]);return ne=function(){return e},e}function re(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n"]);return re=function(){return e},e}function oe(){var e=Object(b.a)([""]);return oe=function(){return e},e}function ie(){var e=Object(b.a)(["\n  /* height: 100%;\n  width: 100%; */\n  padding: 30px;\n"]);return ie=function(){return e},e}var ce=g.a.div(ie()),se=g.a.h2(oe()),de=g.a.div(re()),ue=g.a.div(ne()),le=g.a.div(te()),he=g.a.div(ae()),fe=g.a.div(ee()),be=g.a.div(Z()),ge=g.a.div(X()),me=g.a.img(K()),pe=g.a.p($()),ve=g.a.p(P()),we=Object(l.c)((function(e){return{cartItems:e.cart.data}}),(function(){}))((function(e){var a,t=e.cartItems;if(console.log("cartItems",t),console.log(t.items.length),t.items.length>0){var n=0;t.items.forEach((function(e,a){n+=parseInt(e.price)})),a=r.a.createElement(le,null,r.a.createElement(he,null,"Total:"),r.a.createElement(fe,null,n))}return r.a.createElement(ce,null,r.a.createElement(de,null,r.a.createElement(se,null,"Your Cart")),r.a.createElement(ue,null,t.items.map((function(e){return r.a.createElement(be,null,r.a.createElement(me,{src:e.image}),r.a.createElement(pe,null,e.name),r.a.createElement(ve,null,e.price))}))),r.a.createElement(ge,null,a))})),ye=function(){return r.a.createElement("div",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null,r.a.createElement(q,null))}}),r.a.createElement(f.a,{path:"/cart",render:function(){return r.a.createElement(j,null,r.a.createElement(we,null))}})))},Ee=function(e){var a=e.store,t=e.history;return r.a.createElement(l.a,{store:a},r.a.createElement(c.a,{theme:u},r.a.createElement(h.a,{history:t},r.a.createElement(ye,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(7),ke=t(16),Ce=t(41),Oe=t(34),je={data:[],errors:void 0,loading:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case M.FETCH_REQUEST:return Object(s.a)({},e,{loading:!0});case M.FETCH_SUCCESS:return console.log("action payload",a.payload),Object(s.a)({},e,{loading:!1,data:a.payload});case M.FETCH_ERROR:return Object(s.a)({},e,{loading:!1,errors:a.payload});default:return e}},Se=t(42),_e={data:{id:0,items:[]},errors:void 0,loading:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E.FETCH_CART_REQUEST:return Object(s.a)({},e,{loading:!0});case E.FETCH_CART_SUCCESS:return Object(s.a)({},e,{loading:!1,data:a.payload});case E.FETCH_CART_ERROR:return Object(s.a)({},e,{loading:!1,errors:a.payload});case E.ADD_TO_CART:return{errors:e.errors,loading:e.loading,data:Object(s.a)({},e.data,{id:e.data.id,items:[].concat(Object(Se.a)(e.data.items),[a.payload])})};case E.REMOVE_FROM_CART:return{errors:e.errors,loading:e.loading,data:Object(s.a)({},e.data,{id:e.data.id,items:e.data.items.filter((function(e){return e!==a.payload.id}))})};default:return e}};var xe,Fe,Ie=Object(Te.a)(),Me=(xe=Ie,Fe={},Object(ke.d)(function(e){return Object(ke.c)({cart:Ae,inventory:Re,router:Object(h.b)(e)})}(xe),Fe,Object(ke.a)(Object(Oe.a)(xe),Ce.a)));i.a.render(r.a.createElement(Ee,{store:Me,history:Ie}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.90b9f0ac.chunk.js.map