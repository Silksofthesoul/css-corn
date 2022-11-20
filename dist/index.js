!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CssCorn=t():e.CssCorn=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e.r(t),e.d(t,{CssCorn:()=>g,default:()=>c}),window.$CssCorn=window.$CssCorn||{};const o=e=>t=>{let{[e]:s}=t;return function(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(t,[e].map(r))},l=(e,t)=>typeof e===t;class g{constructor(e){i(this,"_id",void 0),i(this,"_styles",void 0),i(this,"_element",void 0),i(this,"willRender",void 0),e&&e.styles&&(e=o("styles")(e));const t="css-corn",r=n(n({},{}),{},{id:t,styles:{},willRender:!1},e);l(r.id,"string")||(r.id=t),this._id=this.idProcess(r.id),this._styles=r.styles,this.willRender=r.willRender,[...document.querySelectorAll(`#${this.id}`)].forEach((e=>{e.parentNode?.removeChild(e)})),this._element=document.createElement("style"),this._element.id=this.id,this._element.setAttribute("type","text/css"),document.head.appendChild(this._element)}set id(e){const t=this.idProcess(e);l(t,"string")?(this._element&&(this._element.id=t),this._id=t):console.error(this.errorMsg("Wrong property type!","$Css.id: %type%",t,"string"))}get id(){return this._id}set styles(e){this._styles=e}get styles(){return this._styles}idProcess(e){return e.replace(/[\s]/gim,"-").replace(/[\W_]/gim,"-").replace(/[-]{2,}/gim,"-").replace(/^\-/gim,"").replace(/\-$/gim,"")}getWillRender(){return this.willRender}errorMsg(e,t,r,s){const n=(e,t)=>e.replace(/%type%/gim,t).replace(/%.*%/gim,"");return`\n    [ ${e} ]\n\n    [ ${n(t,typeof r)} = ${r} ]\n\n    [ ${n(t,s)} ]\n\n    [ Value must be ${s} ]\n`}parse(e){return e.split(";").map((e=>e.split(":").map((e=>!!e&&e.trim())).filter((e=>e)))).reduce(((e,t)=>(t&&2===t.length&&t[0]&&(e[t[0]]=t[1]),e)),{})}stringify(e){return Object.entries(e).map((e=>[e[0],e[1]].join(":"))).join(";")+";"}getStyle(e){return this.parse(e)}add(e,t,r=this.getWillRender()){if(!l(e,"string")||!l(t,"string")||!l(r,"boolean"))return console.error("Wrong arguments type! $Css.add(string, string, boolean)!"),l(e,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.add(SELECTOR: %type%, ..., ...)",e,"string")),l(t,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.add(..., STYLESTRING: %type%, ...)",t,"string")),l(r,"boolean")||console.error(this.errorMsg("Wrong argument type!","$Css.add(..., ..., WILLRENDER: %type%)",r,"boolean")),this;let s=this.getStyle(t);return this._styles[e]=n(n({},this._styles[e]),s),r&&this.render(),this}del(e,t="",r=this.getWillRender()){return l(e,"string")&&l(t,"string")&&l(r,"boolean")?(t?t.split(/[\s;,\/]/gim).filter((e=>e.trim())).forEach((t=>{this._styles[e]=o(t)(this._styles[e])})):this._styles=o(e)(this._styles),r&&this.render(),this):(console.error("Wrong arguments type! $Css.del(string, string, boolean)!"),l(e,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.del(SELECTOR: %type%, ..., ...)",e,"string")),l(t,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.del(..., PARAMS: %type%, ...)",t,"string")),l(r,"boolean")||console.error(this.errorMsg("Wrong argument type!","$Css.del(..., ..., WILLRENDER: %type%)",r,"boolean")),this)}rename(e,t="",r=this.getWillRender()){return l(e,"string")&&l(t,"string")&&l(r,"boolean")?(this._styles[e]&&(this._styles=(s=e,i=t,g=this._styles,o(s)(((e,t,r)=>n({[e]:t},r))(i,g[s],g)))),r&&this.render(),this):(console.error("Wrong arguments type! $Css.rename(string, string, boolean)!"),l(e,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.rename(SELECTOR: %type%, ..., ...)",e,"string")),l(t,"string")||console.error(this.errorMsg("Wrong argument type!","$Css.rename(..., NEWSELECTOR: %type%, ...)",t,"string")),l(r,"boolean")||console.error(this.errorMsg("Wrong argument type!","$Css.rename(..., ..., WILLRENDER: %type%)",r,"boolean")),this);var s,i,g}render(){if(!this._element)return console.error(`DOM element <style#${this._id}> is not exist`),this;const e=(t=this._styles,Object.entries(t)).map((e=>{return`${t=e[0],t.replace(/\s/gim," ").replace(/\s+/gim," ")}{${this.stringify(e[1])}}`;var t})).join("");var t;return this._element.innerText=e,this}}window.$CssCorn=g;const c=g;return t})()));