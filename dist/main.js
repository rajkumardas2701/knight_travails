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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayController = () => {\r\n  // console.log(content);\r\n\r\n  const displayForm = (mainFrame) => {\r\n    // console.log(\"Inside display form\", mainFrame);\r\n    const positionForm = document.createElement(\"div\");\r\n    positionForm.setAttribute('class', 'position-form');\r\n    mainFrame.appendChild(positionForm);\r\n\r\n    const form = document.createElement('form');\r\n    form.setAttribute('class', 'main-form');\r\n    positionForm.appendChild(form);\r\n\r\n\r\n    const firstInput = document.createElement('div');\r\n    firstInput.setAttribute('class', 'input-section');\r\n    firstInput.innerText = \"Enter start point\"\r\n    form.appendChild(firstInput);\r\n\r\n    const input1x = document.createElement('input');\r\n    input1x.setAttribute('class', 'input-text');\r\n    firstInput.appendChild(input1x);\r\n\r\n    const input1y = document.createElement('input');\r\n    input1y.setAttribute('class', 'input-text');\r\n    firstInput.appendChild(input1y);\r\n\r\n\r\n    const secondInput = document.createElement('div');\r\n    secondInput.setAttribute('class', 'input-section');\r\n    secondInput.innerText = \"Enter last point\"\r\n    form.appendChild(secondInput);\r\n\r\n    const input2x = document.createElement('input');\r\n    input2x.setAttribute('class', 'input-text');\r\n    secondInput.appendChild(input2x);\r\n\r\n    const input2y = document.createElement('input');\r\n    input2y.setAttribute('class', 'input-text');\r\n    secondInput.appendChild(input2y);\r\n\r\n\r\n    const calculate = document.createElement('button');\r\n    calculate.setAttribute('class', 'calculate-btn');\r\n    calculate.innerText = \"Calculate Path\";\r\n    form.appendChild(calculate);\r\n\r\n  }\r\n\r\n  const displayChessBoard = (mainFrame) => {\r\n    const chessBoard = document.createElement(\"div\");\r\n    chessBoard.setAttribute('class', 'chessboard');\r\n    mainFrame.appendChild(chessBoard);\r\n  }\r\n\r\n  const displayFrame = () => {\r\n    const content = document.getElementById('content');\r\n\r\n    const mainFrame = document.createElement('div');\r\n    mainFrame.setAttribute('class', 'main-frame');\r\n    content.appendChild(mainFrame);\r\n\r\n    displayForm(mainFrame);\r\n    displayChessBoard(mainFrame);\r\n  }\r\n\r\n  return {\r\n    displayFrame,\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\r\n\r\n// displayController.displayFrame();\r\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().displayFrame();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;