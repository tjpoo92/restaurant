/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-us */ \"./src/pages/contact-us.js\");\n\n\n\n\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.homeRender)();\nconst home = document.querySelector(\".home\");\nhome.addEventListener(\"click\", _pages_home__WEBPACK_IMPORTED_MODULE_0__.homeRender);\nconst image = document.querySelector(\"img\");\nimage.addEventListener(\"click\", _pages_home__WEBPACK_IMPORTED_MODULE_0__.homeRender);\n\nconst menu = document.querySelector(\".menu\");\nmenu.addEventListener(\"click\", _pages_menu__WEBPACK_IMPORTED_MODULE_1__.menuRender);\n\nconst contactUs = document.querySelector(\".contact-us\");\ncontactUs.addEventListener(\"click\", _pages_contact_us__WEBPACK_IMPORTED_MODULE_2__.contactUsRender);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact-us.js":
/*!*********************************!*\
  !*** ./src/pages/contact-us.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactUsRender\": () => (/* binding */ contactUsRender)\n/* harmony export */ });\nlet contactUsRender = function () {\n\tconst content = document.querySelector(\"#content\");\n\tconst home = document.querySelector(\".home\");\n\tconst menu = document.querySelector(\".menu\");\n\tconst contactUs = document.querySelector(\".contact-us\");\n\n\thome.classList.remove(\"active\");\n\tmenu.classList.remove(\"active\");\n\tcontactUs.classList.add(\"active\");\n\n\twhile (content.hasChildNodes()) {\n\t\tcontent.removeChild(content.firstChild);\n\t}\n\n\t// DOM/Node Creation\n\tconst h3 = document.createElement(\"h3\");\n\tconst br = document.createElement(\"br\");\n\tconst pName1 = document.createElement(\"p\");\n\tconst pPhone1 = document.createElement(\"p\");\n\tconst pDayTime = document.createElement(\"p\");\n\th3.textContent = \"Manager\";\n\tpName1.textContent = \"John Doe\";\n\tpPhone1.textContent = \"555-123-4567\";\n\tpDayTime.textContent = \"Tues - Sun 10:30 AM - 9:30 PM\";\n\tcontent\n\t\t.appendChild(h3)\n\t\t.insertAdjacentElement(\"afterend\", br)\n\t\t.insertAdjacentElement(\"afterend\", pName1)\n\t\t.insertAdjacentElement(\"afterend\", pPhone1);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/contact-us.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeRender\": () => (/* binding */ homeRender)\n/* harmony export */ });\nlet homeRender = function () {\n\tconst content = document.querySelector(\"#content\");\n\tconst home = document.querySelector(\".home\");\n\tconst menu = document.querySelector(\".menu\");\n\tconst contactUs = document.querySelector(\".contact-us\");\n\n\thome.classList.remove(\"active\");\n\tcontactUs.classList.remove(\"active\");\n\tmenu.classList.remove(\"active\");\n\n\twhile (content.hasChildNodes()) {\n\t\tcontent.removeChild(content.firstChild);\n\t}\n\n\t// DOM/Node Creation\n\tconst h1 = document.createElement(\"h1\");\n\tconst br = document.createElement(\"br\");\n\th1.textContent = \"Dairy Joe's on West O!\";\n\n\tfunction createHomeTags(tagString) {\n\t\tconst createdElement = document.createElement(\"p\");\n\t\tcreatedElement.textContent = tagString;\n\t\treturn createdElement;\n\t}\n\n\tcontent.appendChild(h1).insertAdjacentElement(\"afterend\", br);\n\n\tbr.insertAdjacentElement(\n\t\t\"afterend\",\n\t\tcreateHomeTags(\"Tues - Sun 10:30 AM - 9:30 PM\")\n\t);\n\tbr.insertAdjacentElement(\"afterend\", createHomeTags(\"Open March - October\"));\n\tbr.insertAdjacentElement(\n\t\t\"afterend\",\n\t\tcreateHomeTags(\"Come by for some ice cream and coffee\")\n\t);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuRender\": () => (/* binding */ menuRender)\n/* harmony export */ });\nlet menuRender = function () {\n\tconst content = document.querySelector(\"#content\");\n\tconst home = document.querySelector(\".home\");\n\tconst menu = document.querySelector(\".menu\");\n\tconst contactUs = document.querySelector(\".contact-us\");\n\n\thome.classList.remove(\"active\");\n\tcontactUs.classList.remove(\"active\");\n\tmenu.classList.add(\"active\");\n\n\twhile (content.hasChildNodes()) {\n\t\tcontent.removeChild(content.firstChild);\n\t}\n\n\t// DOM/Node Creation\n\tconst table = document.createElement(\"table\");\n\n\tfunction createHeader(headerText) {\n\t\tconst th = document.createElement(\"th\");\n\t\tth.textContent = headerText;\n\t\treturn th;\n\t}\n\tfunction createRow() {\n\t\tconst tr = document.createElement(\"tr\");\n\t\treturn tr;\n\t}\n\n\tfunction createCell(cellText) {\n\t\tconst td = document.createElement(\"td\");\n\t\ttd.textContent = cellText;\n\t\treturn td;\n\t}\n\n\tcontent\n\t\t.appendChild(table)\n\t\t.appendChild(createRow())\n\t\t.appendChild(createHeader(\"Dairy\"))\n\t\t.insertAdjacentElement(\"afterend\", createHeader(\"Joe\"));\n\n\ttable\n\t\t.appendChild(createRow())\n\t\t.appendChild(createCell(\"$1 Single Scoop\"))\n\t\t.insertAdjacentElement(\"afterend\", createCell(\"$1 Coffee\"));\n\n\ttable\n\t\t.appendChild(createRow())\n\t\t.appendChild(createCell(\"$3 Double Scoop\"))\n\t\t.insertAdjacentElement(\"afterend\", createCell(\"$3 Latte\"));\n\n\ttable\n\t\t.appendChild(createRow())\n\t\t.appendChild(createCell(\"$4 Milkshake\"))\n\t\t.insertAdjacentElement(\"afterend\", createCell(\"$2 Iced Coffee\"));\n\n\ttable\n\t\t.appendChild(createRow())\n\t\t.appendChild(createCell(\"Ice cream flavors change monthly\"))\n\t\t.insertAdjacentElement(\n\t\t\t\"afterend\",\n\t\t\tcreateCell(\"Vanilla, Hazelnut, and more\")\n\t\t);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/menu.js?");

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