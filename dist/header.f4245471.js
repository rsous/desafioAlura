parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cGsR":[function(require,module,exports) {
var e=document.querySelector(".menu"),s=document.querySelector(".header__burger-icon");function t(){e.classList.toggle("show-menu-mobile")}function c(e){e.classList.toggle("bg-pressed")}function o(){e.classList.toggle("hidden")}s.addEventListener("click",function(){c(s),e.classList.contains("show-menu-mobile")?(e.classList.toggle("hide-menu-mobile"),setTimeout(o,400)):t()});var n=document.querySelector(".header__form-small"),i=document.querySelector(".header__search-icon");function l(){n.classList.toggle("show-search-bar")}function a(){n.classList.toggle("hidden")}i.addEventListener("click",function(){c(i),n.classList.contains("show-search-bar")?(n.classList.toggle("hide-search-bar"),setTimeout(a,300)):l()});
},{}]},{},["cGsR"], null)
//# sourceMappingURL=header.f4245471.js.map