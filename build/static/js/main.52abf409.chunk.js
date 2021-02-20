(this["webpackJsonpreact-redux-typescript-ecart"]=this["webpackJsonpreact-redux-typescript-ecart"]||[]).push([[0],{44:function(e,a,t){e.exports=t(60)},49:function(e,a,t){},50:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(23),i=t.n(o),c=(t(49),t(50),t(63)),s=t(9),d=t(62),u=Object(s.a)({},d.a,{colors:Object(s.a)({},d.a.colors,{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),l=t(8),h=t(21),f=t(11),b=t(3),g=t(4),m=t(27);function p(){var e=Object(b.a)(["\n  background-color: #6394f8;\n  border-radius: 10px;\n  color: white;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 1;\n  padding: 3px 7px;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n"]);return p=function(){return e},e}function v(){var e=Object(b.a)(["\n  width: 20%;\n  float: right;\n  padding: 10px;\n  cursor: pointer;\n"]);return v=function(){return e},e}function w(){var e=Object(b.a)(["\n  width: 20%;\n  float: left;\n  padding: 10px;\n"]);return w=function(){return e},e}function y(){var e=Object(b.a)(["\n  width: 100%;\n  height: 50px;\n  /* position: fixed; */\n  background: #e7e8eb;\n  margin: auto;\n"]);return y=function(){return e},e}var E,T=g.a.div(y()),k=g.a.div(w()),C=g.a.div(v()),O=g.a.span(p()),R=Object(l.c)((function(e){var a=e.cart;return{data:a.data,loading:a.loading,errors:a.errors}}),(function(){}))((function(e){var a=e.data,t=(e.loading,e.errors,e.children);return n.a.createElement("div",null,n.a.createElement(T,null,n.a.createElement(k,null,n.a.createElement(m.a,{to:"/"},"ECart")),n.a.createElement(C,null,n.a.createElement(m.a,{to:"/cart"},"Cart ",n.a.createElement(O,null,a.items.length)))),t)}));!function(e){e.ADD_TO_CART="@@cart/ADD_TO_CART",e.ADD_TO_CART_FAILURE="@@cart/ADD_TO_CART_FAILURE",e.REMOVE_FROM_CART="@@cart/REMOVE_FROM_CART",e.FETCH_CART_REQUEST="@@cart/FETCH_CART_REQUEST",e.FETCH_CART_SUCCESS="@@cart/FETCH_CART_SUCCESS",e.FETCH_CART_ERROR="@@cart/FETCH_CART_ERROR"}(E||(E={}));function S(){var e=Object(b.a)(["\n  padding: 10px;\n  background-color: blue;\n  color: #ffffff;\n  border-radius: 10px;\n"]);return S=function(){return e},e}function j(){var e=Object(b.a)([""]);return j=function(){return e},e}function _(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return e},e}function A(){var e=Object(b.a)(["\n  height: 76px;\n"]);return A=function(){return e},e}function x(){var e=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n"]);return x=function(){return e},e}function B(){var e=Object(b.a)(["\n  width: 230px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return B=function(){return e},e}function I(){var e=Object(b.a)(["\n  background-color: #eeeeee;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin: 15px;\n  cursor: pointer;\n  flex: 0 0 25%;\n"]);return I=function(){return e},e}var M,F=g.a.div(I()),J=g.a.figure(B()),H=g.a.img(x()),Y=g.a.h1(A()),z=g.a.div(_()),D=g.a.text(j()),U=g.a.button(S()),L=Object(l.c)((function(){}),(function(e){return{addToCart:function(a){return e(function(e){return function(a){try{return a({type:E.ADD_TO_CART,payload:e})}catch(t){return a({type:E.ADD_TO_CART_FAILURE,payload:null})}}}(a))}}}))((function(e){var a=e.item,t=e.addToCart;return n.a.createElement(F,null,n.a.createElement(J,null,n.a.createElement(H,{src:a.image})),n.a.createElement(Y,null,a.name),n.a.createElement(z,null,n.a.createElement(D,null,a.brand),n.a.createElement(U,{onClick:function(){return function(e){t(e)}(a)}},"Add To Cart")))}));!function(e){e.FETCH_REQUEST="@@inventory/FETCH_REQUEST",e.FETCH_SUCCESS="@@inventory/FETCH_SUCCESS",e.FETCH_ERROR="@@inventory/FETCH_ERROR"}(M||(M={}));t(57);var N=[{name:"Timber Gray Sofa",price:"1000",image:"../images/products/couch1.png",description:"This is a Test Description",brand:"Jason Bourne",currentInventory:4,id:"fb94f208-6d34-425f-a3f8-e5b87794aef1"},{name:"Carmel Brown Sofa",price:"1000",image:"../images/products/couch5.png",description:"This is a test description",brand:"Jason Bourne",currentInventory:2,id:"4c95788a-1fa2-4f5c-ab97-7a98c1862584"},{name:"Mod Leather Sofa",price:"800",image:"../images/products/couch6.png",description:"Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",brand:"Jason Bourne",currentInventory:8,id:"8338db8c-91c5-4341-81e1-fa350c6baa70"},{name:"Thetis Gray Love Seat",price:"900",image:"../images/products/couch7.png",description:"You know your dad\u2019s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",brand:"Jason Bourne",currentInventory:10,id:"d414f81e-0f34-49ca-8fb6-a4b47f622eb9"},{name:"Sven Tan Matte",price:"1200",image:"./images/products/couch8.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:7,id:"f193961b-7716-48f9-9c81-8720224dccbf"},{name:"Otis Malt Sofa",price:"500",image:"./images/products/couch9.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:13,id:"7bbdc630-ff67-4897-ba43-1bcc7919fc6c"},{name:"Ceni Brown 3 Seater",price:"650",image:"../images/products/couch10.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:9,id:"4b7c67b3-0c65-47a4-b7e9-b99f07dfabc2"},{name:"Jameson Jack Lounger",price:"1230",image:"../images/products/couch11.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:24,id:"e31876fe-34fb-4721-a6ac-7fc3938a352e"},{name:"Galaxy Blue Sofa",price:"800",image:"../images/products/couch2.png",description:"Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",brand:"Jason Bourne",currentInventory:43,id:"e60a4f85-4899-431d-816d-72134cae07a0"},{name:"Markus Green Love Seat",price:"900",image:"../images/products/couch3.png",description:"You know your dad\u2019s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",brand:"Jason Bourne",currentInventory:2,id:"69cdde2b-17f3-411c-a5af-7c552fc6648e"},{name:"Dabit Matte Black",price:"1200",image:"../images/products/couch4.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",currentInventory:14,id:"0008c6dd-725a-4eac-b13e-795808cfeedc"},{name:"Embrace Blue",price:"300",image:"../images/products/chair1.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:12,id:"8baefb38-6ff4-462d-880a-b192f972d939"},{name:"Nord Lounger",price:"825",image:"./images/products/chair2.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:13,id:"91067165-7135-4310-b5f9-e99eb2b7410e"},{name:"Ceni Matte Oranve",price:"720",image:"./images/products/chair3.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:33,id:"ab149e2a-7421-4012-b341-1309f8bdc417"},{name:"Abisko Green Recliner",price:"2000",image:"./images/products/chair4.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:23,id:"8eac7c82-e095-49a3-b4f7-c2df518ca1d4"},{name:"Denim on Denim Single",price:"1100",image:"./images/products/chair5.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:13,id:"e2b84bfb-2b60-4b82-b899-fe9483d5d2e8"},{name:"Levo Tan Lounge Chair",price:"600",image:"./images/products/chair6.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:15,id:"994d33fb-7ee3-43a6-ae51-1687f9cd7c15"},{name:"Anime Tint Recliner",price:"775",image:"./images/products/chair7.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:44,id:"7f390c3f-f59b-4dfd-9d79-03e6f5d3c096"},{name:"Josh Jones Red Chair",price:"1200",image:"./images/products/chair8.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:17,id:"e6995bf1-3a50-4934-8777-22c2043fc3f9"},{name:"Black Sand Lounge",price:"1600",image:"./images/products/chair9.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:28,id:"77b98369-c6e3-4ebf-86a3-8d0e52024631"},{name:"Mint Beige Workchair",price:"550",image:"./images/products/chair10.png",description:"You don\u2019t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",brand:"Jason Bourne",currentInventory:31,id:"af65a773-9243-4e9e-b192-5eb3b22b0571"}];function W(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return W=function(){return e},e}function Q(){var e=Object(b.a)(["\n  width: 100%;\n  max-width: 1170px;\n  margin: auto;\n"]);return Q=function(){return e},e}var G=g.a.div(Q()),V=g.a.div(W()),q=Object(l.c)((function(e){var a=e.inventory;return{loading:a.loading,errors:a.errors,data:a.data}}),(function(e){return{fetchRequest:function(){e((function(e){try{return e({type:M.FETCH_SUCCESS,payload:N})}catch(a){return e({type:M.FETCH_ERROR})}}))}}}))((function(e){e.loading,e.errors;var a=e.data,t=e.fetchRequest;return Object(r.useEffect)((function(){t()}),[]),n.a.createElement(G,null,n.a.createElement(V,null,a.map((function(e){return n.a.createElement(L,{item:e})}))))}));function $(){var e=Object(b.a)([""]);return $=function(){return e},e}function K(){var e=Object(b.a)([""]);return K=function(){return e},e}function P(){var e=Object(b.a)(["\n  width: 100px;\n  height: 100px;\n"]);return P=function(){return e},e}function X(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return X=function(){return e},e}function Z(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n"]);return Z=function(){return e},e}function ee(){var e=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n"]);return ee=function(){return e},e}function ae(){var e=Object(b.a)([""]);return ae=function(){return e},e}function te(){var e=Object(b.a)(["\n  /* height: 100%;\n  width: 100%; */\n  padding: 30px;\n"]);return te=function(){return e},e}var re=g.a.div(te()),ne=g.a.h2(ae()),oe=g.a.div(ee()),ie=g.a.div(Z()),ce=g.a.div(X()),se=g.a.img(P()),de=g.a.p(K()),ue=g.a.p($()),le=Object(l.c)((function(e){return{cartItems:e.cart.data}}),(function(){}))((function(e){var a=e.cartItems;return console.log("cartItems",a),n.a.createElement(re,null,n.a.createElement(oe,null,n.a.createElement(ne,null,"Your Cart")),n.a.createElement(ie,null,a.items.map((function(e){return n.a.createElement(ce,null,n.a.createElement(se,{src:e.image}),n.a.createElement(de,null,e.name),n.a.createElement(ue,null,e.price))}))))})),he=function(){return n.a.createElement("div",null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",render:function(){return n.a.createElement(R,null,n.a.createElement(q,null))}}),n.a.createElement(f.a,{path:"/cart",render:function(){return n.a.createElement(R,null,n.a.createElement(le,null))}})))},fe=function(e){var a=e.store,t=e.history;return n.a.createElement(l.a,{store:a},n.a.createElement(c.a,{theme:u},n.a.createElement(h.a,{history:t},n.a.createElement(he,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=t(7),ge=t(16),me=t(41),pe=t(34),ve={data:[],errors:void 0,loading:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case M.FETCH_REQUEST:return Object(s.a)({},e,{loading:!0});case M.FETCH_SUCCESS:return console.log("action payload",a.payload),Object(s.a)({},e,{loading:!1,data:a.payload});case M.FETCH_ERROR:return Object(s.a)({},e,{loading:!1,errors:a.payload});default:return e}},ye=t(42),Ee={data:{id:0,items:[]},errors:void 0,loading:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E.FETCH_CART_REQUEST:return Object(s.a)({},e,{loading:!0});case E.FETCH_CART_SUCCESS:return Object(s.a)({},e,{loading:!1,data:a.payload});case E.FETCH_CART_ERROR:return Object(s.a)({},e,{loading:!1,errors:a.payload});case E.ADD_TO_CART:return{errors:e.errors,loading:e.loading,data:Object(s.a)({},e.data,{id:e.data.id,items:[].concat(Object(ye.a)(e.data.items),[a.payload])})};case E.REMOVE_FROM_CART:return{errors:e.errors,loading:e.loading,data:Object(s.a)({},e.data,{id:e.data.id,items:e.data.items.filter((function(e){return e!==a.payload.id}))})};default:return e}};var ke,Ce,Oe=Object(be.a)(),Re=(ke=Oe,Ce={},Object(ge.d)(function(e){return Object(ge.c)({cart:Te,inventory:we,router:Object(h.b)(e)})}(ke),Ce,Object(ge.a)(Object(pe.a)(ke),me.a)));i.a.render(n.a.createElement(fe,{store:Re,history:Oe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.52abf409.chunk.js.map