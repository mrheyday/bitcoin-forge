!function(e){function t(t){for(var r,l,i=t[0],c=t[1],u=t[2],s=0,p=[];s<i.length;s++)l=i[s],a[l]&&p.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=c;o.push([17,1]),n()}({17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),l=n.n(o),i=n(21),c=n(19),u=n(20);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome to Bitcoin Forge"),a.a.createElement("p",null,"This is the forge with different tools to tinker with Bitcoin."))}}])&&s(n.prototype,o),l&&s(n,l),t}(),h=n(1),d=n.n(h),v=function(e){var t=e.label,n=e.text,r=e.type,o=e.id,l=e.value,i=e.handleChange;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:t},n),a.a.createElement("input",{type:r,className:"form-control",id:o,value:l,onChange:i,required:!0}))};v.propTypes={label:d.a.string.isRequired,text:d.a.string.isRequired,type:d.a.string.isRequired,id:d.a.string.isRequired,value:d.a.string,handleChange:d.a.func.isRequired},v.defaultProps={value:""};var g=v;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=w(t).call(this))||"object"!==E(r)&&"function"!=typeof r?S(n):r).state={test:""},e.handleChange=e.handleChange.bind(S(S(e))),e}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["Component"]),n=t,(o=[{key:"handleChange",value:function(e){var t,n,r;this.setState((t={},n=e.target.id,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"render",value:function(){var e=this.state.test;return a.a.createElement("div",null,a.a.createElement("h1",null,"Transaction forge"),a.a.createElement("form",{id:"tx-form"},a.a.createElement(g,{text:"Test",label:"test",type:"text",id:"test",value:e,handleChange:this.handleChange})))}}])&&O(n.prototype,o),l&&O(n,l),t}(),j=function(e){var t=e.text,n=e.id,r=e.btnClass,o=e.onClick;return a.a.createElement("button",{type:"button",className:"btn btn-".concat(r),id:n,onClick:o},t)};j.propTypes={text:d.a.string.isRequired,id:d.a.string,btnClass:d.a.string.isRequired,onClick:d.a.func.isRequired},j.defaultProps={id:null};var x=j;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var q=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=T(t).call(this,e))||"object"!==k(a)&&"function"!=typeof a?R(r):a).state={hexScript:""},n.handleChange=n.handleChange.bind(R(R(n))),n.buttonClick=n.buttonClick.bind(R(R(n))),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["Component"]),n=t,(o=[{key:"handleChange",value:function(e){this.setState({hexScript:e.target.value})}},{key:"buttonClick",value:function(e){var t=this.state.hexScript;console.log("Decompiling: ".concat(t))}},{key:"render",value:function(){var e=this.state.hexScript;return a.a.createElement("div",null,a.a.createElement("h1",null,"Decompile ASM from hexa"),a.a.createElement("form",{id:"script-decompile-asm-form"},a.a.createElement(g,{text:"Hexadecimal script",label:"seo_title",type:"text",id:"hex-script",value:e,handleChange:this.handleChange}),a.a.createElement(x,{text:"Submit",btnClass:"primary",onClick:this.buttonClick})))}}])&&P(n.prototype,o),l&&P(n,l),t}(),M=function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},a.a.createElement(c.a,{className:"navbar-brand",to:"/"},"BF"),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.a,{className:"nav-link",to:"/tx/"},"Transaction")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.a,{className:"nav-link",to:"/script/"},"Script"))))),a.a.createElement("main",{className:"container"},a.a.createElement(u.a,{path:"/",exact:!0,component:function(){return a.a.createElement(y,null)}}),a.a.createElement(u.a,{path:"/tx/",component:function(){return a.a.createElement(_,null)}}),a.a.createElement(u.a,{path:"/script/",component:function(){return a.a.createElement(q,null)}}))))};l.a.render(a.a.createElement(M,null),document.getElementById("app"))}});