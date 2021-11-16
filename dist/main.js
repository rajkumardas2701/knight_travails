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

/***/ "./src/calculateSteps.js":
/*!*******************************!*\
  !*** ./src/calculateSteps.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\nconst board = [];\nfor (let i = 0; i < 8; i++) {\n  board[i] = [];\n}\n\nconst addMove = (x, y, level) => {\n  if ((x >= 0) && (x <= 7) && (y >= 0) && (y <= 7) && board[x][y] == null) {\n    board[x][y] = level;\n  }\n};\n\nconst addAllMoves = (x, y, level) => {\n  addMove(x + 1, y + 2, level);\n  addMove(x + 2, y + 1, level);\n  addMove(x + 2, y - 1, level);\n  addMove(x + 1, y - 2, level);\n  addMove(x - 1, y - 2, level);\n  addMove(x - 2, y - 1, level);\n  addMove(x - 2, y + 1, level);\n  addMove(x - 1, y + 2, level);\n};\n\nconst addAllPossible = (level) => {\n  for (let i = 0; i < 8; i++) {\n    for (let j = 0; j < 8; j++) {\n      if (board[i][j] === level) {\n        addAllMoves(i, j, level + 1);\n      }\n    }\n  }\n};\n\nconst calculateSteps = (startX, startY, endX, endY) => {\n  addMove(startX, startY, 0);\n  let index = 0;\n  do {\n    addAllPossible(index++);\n  } while (board[endX][endY] == null);\n  return board[endX][endY];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateSteps);\n\n\n//# sourceURL=webpack:///./src/calculateSteps.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _calculateSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateSteps */ \"./src/calculateSteps.js\");\n\n\nconst displayController = () => {\n  // console.log(content);\n  const displayForm = (mainFrame) => {\n    // console.log(\"Inside display form\", mainFrame);\n    const positionForm = document.createElement('div');\n    positionForm.setAttribute('class', 'position-form');\n    mainFrame.appendChild(positionForm);\n\n    const form = document.createElement('form');\n    form.setAttribute('class', 'main-form');\n    positionForm.appendChild(form);\n\n    const firstInput = document.createElement('div');\n    firstInput.setAttribute('class', 'input-section');\n    firstInput.innerText = 'Enter start point';\n    form.appendChild(firstInput);\n\n    const input1x = document.createElement('input');\n    input1x.setAttribute('class', 'input-text');\n    firstInput.appendChild(input1x);\n\n    const input1y = document.createElement('input');\n    input1y.setAttribute('class', 'input-text');\n    firstInput.appendChild(input1y);\n\n    const secondInput = document.createElement('div');\n    secondInput.setAttribute('class', 'input-section');\n    secondInput.innerText = 'Enter end point';\n    form.appendChild(secondInput);\n\n    const input2x = document.createElement('input');\n    input2x.setAttribute('class', 'input-text');\n    secondInput.appendChild(input2x);\n\n    const input2y = document.createElement('input');\n    input2y.setAttribute('class', 'input-text');\n    secondInput.appendChild(input2y);\n\n    const calculate = document.createElement('button');\n    calculate.setAttribute('class', 'calculate-btn');\n    calculate.innerText = 'Calculate Path';\n    form.appendChild(calculate);\n\n    const displayVal = document.createElement('p');\n    displayVal.setAttribute('class', 'display-value');\n    positionForm.appendChild(displayVal);\n\n    form.onsubmit = (event) => {\n      event.preventDefault();\n      // console.log(input1x.value);\n      displayVal.innerText = (0,_calculateSteps__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input1x.value,\n        input1y.value, input2x.value, input2y.value);\n      input1x.value = '';\n      input1y.value = '';\n      input2x.value = '';\n      input2y.value = '';\n    };\n  };\n\n  // const displayChessBoard = (mainFrame) => {\n  //   const chessBoard = document.createElement('div');\n  //   chessBoard.setAttribute('class', 'chessboard');\n  //   mainFrame.appendChild(chessBoard);\n  // };\n\n  const displayFrame = () => {\n    const content = document.getElementById('content');\n\n    const mainFrame = document.createElement('div');\n    mainFrame.setAttribute('class', 'main-frame');\n    content.appendChild(mainFrame);\n\n    displayForm(mainFrame);\n    // displayChessBoard(mainFrame);\n  };\n\n  return {\n    displayFrame,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n// import calculateSteps from './calculateSteps';\n// displayController.displayFrame();\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().displayFrame();\n\n// calculateSteps(3, 3, 2, 1);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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