/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-us */ \"./src/pages/contact-us.js\");\n/* harmony import */ var _pages_contact_us__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_contact_us__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst home = document.querySelector(\".home\");\nhome.addEventListener(\"click\", _pages_home__WEBPACK_IMPORTED_MODULE_0__.homeRender);\n\nconst menu = document.querySelector(\".menu\");\nmenu.addEventListener(\"click\", _pages_menu__WEBPACK_IMPORTED_MODULE_1__.menuRender);\n\n// contactUsRender(content);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact-us.js":
/*!*********************************!*\
  !*** ./src/pages/contact-us.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant/./src/pages/contact-us.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeRender\": () => (/* binding */ homeRender)\n/* harmony export */ });\nlet homeRender = (function () {\n\tconst content = document.querySelector(\"#content\");\n\n\t// while (content.hasChildNodes()) {\n\t// \tcontent.removeChild(content.firstChild);\n\t// }\n\n\t//DOM/Node Creation\n\tconst h1 = document.createElement(\"h1\");\n\tconst br = document.createElement(\"br\");\n\tconst pTag = document.createElement(\"p\");\n\tconst pMonths = document.createElement(\"p\");\n\tconst pDayTime = document.createElement(\"p\");\n\n\th1.textContent = \"Dairy Joe's on West O!\";\n\tpTag.textContent = \"Come by for some ice cream and coffee\";\n\tpMonths.textContent = \"Open March - October\";\n\tpDayTime.textContent = \"Tues - Sun 10:30 AM - 9:30 PM\";\n\n\tcontent\n\t\t.appendChild(h1)\n\t\t.insertAdjacentElement(\"afterend\", br)\n\t\t.insertAdjacentElement(\"afterend\", pTag)\n\t\t.insertAdjacentElement(\"afterend\", br)\n\t\t.insertAdjacentElement(\"afterend\", pMonths)\n\t\t.insertAdjacentElement(\"afterend\", pDayTime);\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuRender\": () => (/* binding */ menuRender)\n/* harmony export */ });\nlet menuRender = (function () {\n\tconst content = document.querySelector(\"#content\");\n\n\t// while (content.hasChildNodes()) {\n\t// \tcontent.removeChild(content.firstChild);\n\t// }\n\tconsole.log(\"I'm a menu!\");\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;