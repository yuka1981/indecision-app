/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canDrink: () => (/* binding */ canDrink),
/* harmony export */   "default": () => (/* binding */ isSenior),
/* harmony export */   isAdult: () => (/* binding */ isAdult)
/* harmony export */ });
const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 18;
const isSenior = (age) => age >= 65;




/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _person_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import { square, add } from "./utils.js";
//
// console.log("app.js is running!!!");
// console.log(square(4));
// console.log(add(100, 23));

// person
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false


console.log("age = 18", (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.isAdult)(18));
console.log("age = 16", (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.isAdult)(16));
console.log("age = 21", (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.isAdult)(21));
console.log("age = 18", (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.canDrink)(18));
console.log("age = 64", (0,_person_js__WEBPACK_IMPORTED_MODULE_0__["default"])(64));

// import substract, { square, add } from "./utils.js";
// console.log(square(4));
// console.log(add(100, 23));
// console.log(substract(100, 18));

})();

/******/ })()
;