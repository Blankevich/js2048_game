parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t,e=document.querySelector(".game-score"),r=document.querySelectorAll(".field-cell"),n=document.querySelector(".button"),o=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),c=document.querySelector(".message-start"),i=4,d=4;function s(){t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0,n=0;n<i;n++)for(var o=0;o<d;o++){r[e].id=n.toString()+"-"+o.toString();var a=t[n][o];m(r[e],a),e++}l(),l()}function f(){for(var e=0;e<i;e++)for(var r=0;r<d;r++)if(0===t[e][r])return!0;return!1}function l(){if(f()){for(var e=!1;!e;){var r=Math.floor(Math.random()*i),n=Math.floor(Math.random()*d);if(0===t[r][n]){t[r][n]=Math.random()<.1?4:2;var o=document.getElementById(r.toString()+"-"+n.toString());o.innerText="2",o.classList.add("field-cell--2"),e=!0}}y(),x()}}function u(t){return t.filter(function(t){return 0!==t})}function v(t){for(var r=u(t),n=0;n<r.length;n++)r[n]===r[n+1]&&(r[n]*=2,r[n+1]=0,e.textContent="".concat(+e.textContent+r[n]));for(r=u(r);r.length<d;)r.push(0);return r}function m(t,e){t.innerText="",t.classList.value="",t.classList.add("field-cell"),e>0&&(t.innerText=e,t.classList.add("field-cell--".concat(e)))}function g(){for(var e=0;e<i;e++){var r=t[e];r=v(r),t[e]=r;for(var n=0;n<d;n++){m(document.getElementById(e.toString()+"-"+n.toString()),t[e][n])}}}function S(){for(var e=0;e<i;e++){var r=t[e];r.reverse(),(r=v(r)).reverse(),t[e]=r;for(var n=0;n<d;n++){m(document.getElementById(e.toString()+"-"+n.toString()),t[e][n])}}}function h(){for(var e=0;e<d;e++){var r=[t[0][e],t[1][e],t[2][e],t[3][e]];r=v(r),t[0][e]=r[0],t[1][e]=r[1],t[2][e]=r[2],t[3][e]=r[3];for(var n=0;n<i;n++){m(document.getElementById("".concat(n,"-").concat(e)),t[n][e])}}}function L(){for(var e=0;e<d;e++){var r=[t[0][e],t[1][e],t[2][e],t[3][e]];r.reverse(),(r=v(r)).reverse(),t[0][e]=r[0],t[1][e]=r[1],t[2][e]=r[2],t[3][e]=r[3];for(var n=0;n<i;n++){m(document.getElementById(n.toString()+"-"+e.toString()),t[n][e])}}}function y(){if(!f()){for(var e=0;e<i;e++)for(var r=0;r<d-1;r++)if(t[r][e]===t[r+1][e]||t[e][r]===t[e][r+1])return;a.classList.remove("hidden")}}function x(){for(var e=0;e<i;e++)for(var r=0;r<d;r++)2048===t[e][r]&&o.classList.remove("hidden")}n.addEventListener("click",function(){n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",e.textContent="0",c.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),s()}),document.addEventListener("keyup",function(t){"ArrowLeft"===t.code?(g(),l()):"ArrowRight"===t.code?(S(),l()):"ArrowUp"===t.code?(h(),l()):"ArrowDown"===t.code&&(L(),l())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f07ab114.js.map