(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{9565:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cash_register",function(){return n(7427)}])},3949:function(t,e,n){"use strict";var r=n(5893),a=n(184),i=n.n(a),o=n(7294);e.Z=function(t){var e=t.setIsOpen,n=t.children,a=(0,o.useRef)(null);return function(t,e){(0,o.useEffect)((function(){var n=function(n){t.current&&!t.current.contains(n.target)&&e(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[t])}(a,e),(0,r.jsx)("div",{ref:a,className:i().modal,children:n})}},5580:function(t,e,n){"use strict";var r=n(5893),a=n(8060),i=n.n(a),o=n(7294),c=n(3949),s=n(1664),u=n.n(s);e.Z=function(t){var e=(0,o.useState)(!1),n=e[0],a=e[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:i().root,children:(0,r.jsxs)("ul",{className:i().NavBar,children:[(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/cash_register",children:"Kassa"})}),(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/stats",children:"Statistieken"})}),(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/sales",children:"Verkopen"})}),(0,r.jsx)("li",{style:{float:"right"},children:(0,r.jsx)("a",{onClick:function(){return a(!0)},children:t.username})})]})}),n&&(0,r.jsx)(c.Z,{setIsOpen:a,children:(0,r.jsxs)("div",{className:i().userbox,children:[(0,r.jsx)("h4",{children:t.username}),(0,r.jsx)("div",{className:i().icon}),(0,r.jsx)("a",{className:i().dramatic,href:"/uitloggen",children:"Uitloggen"})]})})]})}},7427:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return U}});var r=n(4051),a=n.n(r),i=n(5893),o=n(5580),c=n(7294),s=n(493),u=n.n(s);var l=function(t){return(0,i.jsxs)("div",{className:u().wrapper,children:[(0,i.jsx)("ul",{className:u().total,children:t.counted_cart&&t.counted_cart.map((function(e){return(0,i.jsx)("li",{className:u().cartItem,children:(0,i.jsxs)("ul",{className:u().listItem,children:[(0,i.jsx)("li",{children:e.id}),(0,i.jsx)("li",{children:e.name}),(0,i.jsxs)("li",{children:["\u20ac",e.price]}),(0,i.jsxs)("li",{children:[e.count,"x"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{onClick:function(){return t.updateCart(e.id,!1)},children:"+"}),"/",(0,i.jsx)("a",{onClick:function(){return t.updateCart(e.id,!0)},children:"-"})]})]})},e.id)}))}),(0,i.jsx)("div",{className:u().calcWrapper,children:(0,i.jsxs)("div",{className:u().calcTotal,children:[(0,i.jsx)("h5",{id:u().subtotal,children:"Subtotaal:"}),(0,i.jsxs)("p",{children:["\u20ac ",t.total.toFixed(2).toString().replace(".",",")]}),(0,i.jsx)("h5",{id:u().discount,children:"Korting:"}),(0,i.jsxs)("p",{children:["\u20ac ",(0,i.jsx)("input",{placeholder:"0,00",onChange:function(e){return t.updateDiscount(+e.target.value.replace(",","."))}})]}),(0,i.jsx)("h5",{id:u().total,children:"Totaal:"}),(0,i.jsxs)("p",{children:[" \u20ac ",(+t.total-+t.discount).toFixed(2).replace(".",",")]})]})})]})},d=n(9520),f=n.n(d),p=n(8254),h=n.n(p);var _=function(t){return(0,i.jsxs)("button",{onClick:function(){return t.onClick({name:t.name,id:t.i_id,price:t.price})},className:h().item,children:[(0,i.jsx)("h6",{children:t.name}),(0,i.jsxs)("p",{children:["Id: ",t.i_id]}),(0,i.jsx)("p",{children:["\u20ac",(+t.price).toFixed(2).replace(".",",")]})]})},m=n(5811),v=n.n(m);function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return!e||"object"!==w(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var C=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(o,t);var e,n,r,a=g(o);function o(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),a.call(this,t)}return e=o,(n=[{key:"render",value:function(){var t=this;return(0,i.jsxs)("div",{className:v().wrapper,children:[(0,i.jsx)("div",{className:v().searchbar,children:(0,i.jsx)("input",{type:"text",placeholder:"Zoek door planten",onChange:function(e){return t.props.updateSearch(e.target.value)}})}),(0,i.jsx)("div",{style:{filter:"drop-shadow(0 0 0)"},className:v().options,children:this.props.items&&this.props.items.map((function(e){return(0,i.jsx)(_,{name:e.name,i_id:e.id,price:e.price,onClick:t.props.handleAddCart},e.id)}))})]})}}])&&x(e.prototype,n),r&&x(e,r),o}(c.Component);function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t,e,n,r,a,i,o){try{var c=t[i](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){O(i,r,a,o,c,"next",t)}function c(t){O(i,r,a,o,c,"throw",t)}o(void 0)}))}}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return!e||"object"!==P(e)&&"function"!==typeof e?N(t):e}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var P=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var a=T(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return B(this,n)}}var A=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(s,t);var e,n,r,c=E(s);function s(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var n=N(e=c.call(this,t));return I(N(e),"getItems",k(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("http://kweektafel.nybu-nerd.xyz/items").then((function(t){return t.json()})).then((function(t){n.setState({items:t,itemCopy:t})}));case 1:case"end":return t.stop()}}),t)})))),I(N(e),"handleAddCart",(function(t){for(var n=new Array,r=0;r<e.state.cart.length;r++)n.push(e.state.cart[r]);n.push(t),e.setState({cart:n}),e.handleCart(n)})),I(N(e),"updateCart",(function(t,n){for(var r=new Array,a=0;a<e.state.counted_cart.length;a++)r.push(e.state.counted_cart[a]);for(var i=new Array,o=0;o<e.state.cart.length;o++)i.push(e.state.cart[o]);var c=n?-1:1,s=r.find((function(e){return e.id==t})),u=i.find((function(e){return e.id==t})),l=r.indexOf(s),d=i.indexOf(u);s.count+=c,s.count<=0?r.splice(l,1):r[l]=s,n&&i.splice(d,1),e.setState({counted_cart:r,cart:i})})),I(N(e),"handleCart",(function(t){for(var n=new Array,r=0;r<t.length;r++)n.push(t[r].id);var a={};n.map((function(t){a[t]=(a[t]||0)+1}));var i=new Array;t.map((function(t){void 0==i.find((function(e){return e.id==t.id}))&&i.push({id:t.id,name:t.name,price:t.price,count:a[t.id]})})),e.setState({counted_cart:i})})),I(N(e),"updateDiscount",(function(t){e.setState({discount:t})})),I(N(e),"updateSearch",(function(t){e.setState({search:t})})),I(N(e),"handleSave",(function(){var t=N(e);k(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://kweektafel.nybu-nerd.xyz/push_sale",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({products:t.state.counted_cart,price:t.state.subtotal-t.state.discount,discount:t.state.discount}),redirect:"follow"}).then((function(t){t.redirected&&(window.location.href="/cash_register")}));case 2:case"end":return e.stop()}}),e)})))()})),e.state={items:[],itemCopy:[],cart:[],subtotal:0,counted_cart:[],discount:0,search:""},e}return e=s,n=[{key:"componentDidMount",value:function(){this.getItems()}},{key:"componentDidUpdate",value:function(t,e){if(e.counted_cart!==this.state.counted_cart||e.discount!==this.state.discount){var n=0;this.state.counted_cart.map((function(t){var e=+t.price*+t.count;n+=e})),this.setState({subtotal:n,total:n-this.state.discount})}if(e.search!==this.state.search){var r=new Array;if(console.log(this.state.search),this.state.itemCopy){var a=this;this.state.itemCopy.map((function(t){t.name.toUpperCase().includes(a.state.search.toUpperCase())&&r.push(t)})),this.setState({items:r})}}}},{key:"render",value:function(){return(0,i.jsxs)("div",{className:f().wrapper,children:[(0,i.jsx)("div",{className:f().container,children:(0,i.jsxs)("div",{className:f().interface,children:[(0,i.jsx)(l,{counted_cart:this.state.counted_cart,cart:this.state.cart,items:this.state.items,total:this.state.subtotal,discount:this.state.discount,className:f().total,updateCart:this.updateCart,updateDiscount:this.updateDiscount}),(0,i.jsx)(C,{items:this.state.items,updateSearch:this.updateSearch,handleAddCart:this.handleAddCart,className:f().options}),(0,i.jsxs)("div",{className:f().actions,children:[(0,i.jsx)("a",{onClick:this.handleSave,className:f().saveButton,children:"Verkoop Opslaan"}),(0,i.jsx)("a",{onClick:function(){window.location.replace()},className:[f().deleteButton,f().dramatic],children:"Verkoop Verwijderen"})]})]})}),(0,i.jsx)(o.Z,{pageName:"Artikelbeheer",username:"Admin"})]})}}],n&&S(e.prototype,n),r&&S(e,r),s}(c.Component),U=A},9520:function(t){t.exports={wrapper:"CashRegister_wrapper___NFl5",container:"CashRegister_container__ECFWO",interface:"CashRegister_interface__hMXEi",options:"CashRegister_options___vMF_",actions:"CashRegister_actions__n6tGJ",listItem:"CashRegister_listItem__Haf32",itemButton:"CashRegister_itemButton__ZUpsx",total:"CashRegister_total__85rjF"}},8254:function(t){t.exports={item:"Item_item__Zt_z_",changeCartBut:"Item_changeCartBut__dfmGS"}},5811:function(t){t.exports={wrapper:"ItemList_wrapper__yrh_Y",searchbar:"ItemList_searchbar__ADVpx",options:"ItemList_options__a8q8f",listItem:"ItemList_listItem__3hvmd",itemButton:"ItemList_itemButton__rSOf5"}},8060:function(t){t.exports={NavBar:"NavBar_NavBar__uwFII",root:"NavBar_root__AzUeT",userbox:"NavBar_userbox__pPrNJ",dramatic:"NavBar_dramatic__X81aT",icon:"NavBar_icon__9IttW"}},493:function(t){t.exports={actions:"Total_actions__7U_a0",listItem:"Total_listItem__KXsBa",itemButton:"Total_itemButton__g8fyO",total:"Total_total__oATOc",wrapper:"Total_wrapper___TmvQ",calcTotal:"Total_calcTotal__DieU5",calcWrapper:"Total_calcWrapper__HkuLH",cartItem:"Total_cartItem__CQY32"}},184:function(t){t.exports={modal:"UserModal_modal__teMc5"}}},function(t){t.O(0,[664,774,888,179],(function(){return e=9565,t(t.s=e);var e}));var e=t.O();_N_E=e}]);