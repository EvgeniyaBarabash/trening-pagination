parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={loadMoreBtn:document.getElementById("loadMore"),list:document.getElementById("list"),form:document.getElementById("form")};exports.default=e;
},{}],"vHfX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(e,t,r){this.BASE_URL=e,this.ednPoint=t,this.options=r,this._query="",this._page=1,this.perPage=5}get query(){return this._query}set query(e){return this._query=e}get page(){return this._page}set page(e){return this._page+=e}generateMarkup(e){return e.map(e=>{const{photographer:t,src:{tiny:r,original:s}}=e;return`\n    <li>\n      <img src="${r}" data-src="${s}" alt="${t}" />\n    </li>\n    `}).join("")}getFetch(e){let t=`?query=${this._query}&per_page=${this.perPage}&page=${this._page}`,r=this.BASE_URL+this.ednPoint+t;fetch(r,this.options).then(e=>e.json()).then(e=>e.photos).then(t=>{let r=this.generateMarkup(t);e.insertAdjacentHTML("beforeend",r),console.log(r)}).catch(e=>{console.log(e)})}getFetchBySubmit(e,t){e.addEventListener("submit",r=>{r.preventDefault(),console.dir(r.target.elements.input),this.query=r.target.elements.input.value,t.innerHTML="",this.query?this.getFetch(t):(r.target.elements.input.disabled=!0,alert("Enter the search value")),e.reset()})}getFetchByClick(e,t){e.addEventListener("click",()=>{this.page=1,this.getFetch(t)})}}exports.default=e;
},{}],"TTZ9":[function(require,module,exports) {
"use strict";var e=s(require("./refs.js")),t=s(require("./class.js"));function s(e){return e&&e.__esModule?e:{default:e}}const{loadMoreBtn:a,list:r,form:o}=e.default,c="https://api.pexels.com/v1";let l="/search";const u="563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2",i={headers:{Authorization:u}},f=new t.default(c,l,i);console.log(f),f.getFetchBySubmit(o,r),f.getFetchByClick(a,r);
},{"./refs.js":"VyiV","./class.js":"vHfX"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/classicFetch.js"),require("./js/class.js");
},{"./sass/main.scss":"clu1","./js/classicFetch.js":"TTZ9","./js/class.js":"vHfX"}]},{},["Focm"], null)
//# sourceMappingURL=/trening-pagination/src.31b5bf98.js.map