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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fraktaly/./src/scss/style.scss?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Fractal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Fractal */ \"./src/ts/modules/Fractal.ts\");\n/* harmony import */ var _modules_Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tree */ \"./src/ts/modules/Tree.ts\");\n\r\n\r\n\r\ndocument.querySelector(\".nav__hamburger\").addEventListener(\"click\", function () {\r\n    var menu = document.querySelector(\".nav__menu\");\r\n    var hamburger = document.querySelector(\".nav__hamburger\");\r\n    if (menu.classList.contains(\"nav__menu--active\")) {\r\n        menu.classList.remove(\"nav__menu--active\");\r\n        hamburger.setAttribute(\"src\", \"./img/ikony/hamburger.svg\");\r\n    }\r\n    else {\r\n        menu.classList.add(\"nav__menu--active\");\r\n        hamburger.setAttribute(\"src\", \"./img/ikony/zavrit.svg\");\r\n    }\r\n});\r\nnew _modules_Fractal__WEBPACK_IMPORTED_MODULE_0__.Fractal(\"spiral\");\r\nnew _modules_Tree__WEBPACK_IMPORTED_MODULE_1__.Tree(\"tree\");\r\n\n\n//# sourceURL=webpack://fraktaly/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/modules/Fractal.ts":
/*!***********************************!*\
  !*** ./src/ts/modules/Fractal.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fractal\": () => (/* binding */ Fractal)\n/* harmony export */ });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/ts/modules/Point.ts\");\n\r\nvar Fractal = (function () {\r\n    function Fractal(id) {\r\n        this.id = id;\r\n        this.element = document.getElementById(this.id);\r\n        this.canvas = this.element.querySelector(\".fractal__canvas\");\r\n        this.context = this.canvas.getContext(\"2d\");\r\n        this.box = this.element.querySelector(\".fractal__box\");\r\n        this.inpLength = this.element.querySelector(\".fractal__length\");\r\n        this.inpAngle = this.element.querySelector(\".fractal__angle\");\r\n        this.inpRandom = this.element.querySelector(\".fractal__random\");\r\n        this.btnReset = this.element.querySelector(\".fractal__reset\");\r\n        this.init();\r\n        this.draw();\r\n    }\r\n    Fractal.prototype.setCanvasSize = function () {\r\n        this.canvas.width = this.box.clientWidth;\r\n        this.canvas.height = this.box.clientWidth;\r\n    };\r\n    Fractal.prototype.setEvents = function () {\r\n        var _this = this;\r\n        this.inpAngle.addEventListener(\"input\", function () {\r\n            _this.draw();\r\n        });\r\n        this.inpLength.addEventListener(\"input\", function () {\r\n            _this.draw();\r\n        });\r\n        this.inpRandom.addEventListener(\"input\", function () {\r\n            _this.draw();\r\n        });\r\n        window.addEventListener(\"resize\", function () {\r\n            _this.setCanvasSize();\r\n            _this.draw();\r\n        });\r\n        this.btnReset.addEventListener(\"click\", function () {\r\n            _this.setElementParameters();\r\n            _this.draw();\r\n        });\r\n    };\r\n    Fractal.prototype.setElementParameters = function () {\r\n        this.inpAngle.min = \"0\";\r\n        this.inpAngle.max = \"40\";\r\n        this.inpAngle.value = \"10\";\r\n        this.inpLength.min = \"30\";\r\n        this.inpLength.max = \"90\";\r\n        this.inpLength.value = \"80\";\r\n        this.inpRandom.min = \"0\";\r\n        this.inpRandom.max = \"100\";\r\n        this.inpRandom.value = \"0\";\r\n    };\r\n    Fractal.prototype.init = function () {\r\n        this.setCanvasSize();\r\n        this.setElementParameters();\r\n        this.setEvents();\r\n    };\r\n    Fractal.prototype.randomize = function (num) {\r\n        var inp = parseInt(this.inpRandom.value);\r\n        var rnd = 1 + ((Math.random() * (2 * inp)) - inp) / 100;\r\n        return num * rnd;\r\n    };\r\n    Fractal.prototype.draw = function () {\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        var angleActual = 180;\r\n        var angleOfRotation = parseInt(this.inpAngle.value);\r\n        var lengthActual = this.canvas.height / 20;\r\n        var lengthCoef = (parseInt(this.inpLength.value) / 10 + 90) / 100;\r\n        var p1 = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(30, this.canvas.height * 0.6);\r\n        while (lengthActual > 1) {\r\n            var p2 = p1.getPointByAngle(angleActual, -this.randomize(angleOfRotation), this.randomize(lengthActual));\r\n            this.context.beginPath();\r\n            this.context.strokeStyle = \"#fff\";\r\n            this.context.lineWidth = lengthActual / 5;\r\n            this.context.moveTo(p1.x, p1.y);\r\n            this.context.lineTo(p2.x, p2.y);\r\n            this.context.closePath();\r\n            this.context.stroke();\r\n            p1 = p2;\r\n            lengthActual *= lengthCoef;\r\n            angleActual -= angleOfRotation;\r\n        }\r\n    };\r\n    return Fractal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://fraktaly/./src/ts/modules/Fractal.ts?");

/***/ }),

/***/ "./src/ts/modules/Point.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/Point.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Point\": () => (/* binding */ Point)\n/* harmony export */ });\n\r\nvar Point = (function () {\r\n    function Point(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Point.prototype.getPointByAngle = function (startAngle, angle, length) {\r\n        var x = Math.sin((startAngle + angle) * (3.14 / 180)) * length + this.x;\r\n        var y = Math.cos((startAngle + angle) * (3.14 / 180)) * length + this.y;\r\n        return new Point(x, y);\r\n    };\r\n    return Point;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://fraktaly/./src/ts/modules/Point.ts?");

/***/ }),

/***/ "./src/ts/modules/Tree.ts":
/*!********************************!*\
  !*** ./src/ts/modules/Tree.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/ts/modules/Point.ts\");\n/* harmony import */ var _Fractal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fractal */ \"./src/ts/modules/Fractal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Tree = (function (_super) {\r\n    __extends(Tree, _super);\r\n    function Tree(id) {\r\n        return _super.call(this, id) || this;\r\n    }\r\n    Tree.prototype.setElementParameters = function () {\r\n        this.inpAngle.min = \"0\";\r\n        this.inpAngle.max = \"90\";\r\n        this.inpAngle.value = \"30\";\r\n        this.inpLength.min = \"50\";\r\n        this.inpLength.max = \"70\";\r\n        this.inpLength.value = \"65\";\r\n        this.inpRandom.min = \"0\";\r\n        this.inpRandom.max = \"30\";\r\n        this.inpRandom.value = \"20\";\r\n    };\r\n    Tree.prototype.draw = function () {\r\n        var _this = this;\r\n        var line = function (r1, angA, angR, lenA) {\r\n            var r2 = r1.getPointByAngle(angA, angR, lenA);\r\n            _this.context.beginPath();\r\n            _this.context.strokeStyle = \"#fff\";\r\n            _this.context.lineWidth = lenA / 15;\r\n            _this.context.moveTo(r1.x, r1.y);\r\n            _this.context.lineTo(r2.x, r2.y);\r\n            _this.context.stroke();\r\n            if (lenA < 1)\r\n                return;\r\n            else {\r\n                line(r2, angA + angR, _this.randomize(angR), lenA * _this.randomize(lengthCoef));\r\n                line(r2, angA + angR, _this.randomize(-angR), lenA * _this.randomize(lengthCoef));\r\n            }\r\n        };\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        var angleActual = 180;\r\n        var angleOfRotation = parseInt(this.inpAngle.value);\r\n        var lengthActual = this.canvas.height / 6;\r\n        var lengthCoef = (parseInt(this.inpLength.value)) / 100;\r\n        var p1 = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(this.canvas.width / 2, this.canvas.height * 0.9);\r\n        var p2 = p1.getPointByAngle(angleActual, 0, lengthActual);\r\n        this.context.beginPath();\r\n        this.context.strokeStyle = \"#fff\";\r\n        this.context.lineWidth = lengthActual / 15;\r\n        this.context.moveTo(p1.x, p1.y);\r\n        this.context.lineTo(p2.x, p2.y);\r\n        this.context.stroke();\r\n        p1 = p2;\r\n        line(p1, angleActual, this.randomize(angleOfRotation), this.randomize(lengthActual));\r\n        line(p1, angleActual, this.randomize(-angleOfRotation), this.randomize(lengthActual));\r\n    };\r\n    return Tree;\r\n}(_Fractal__WEBPACK_IMPORTED_MODULE_1__.Fractal));\r\n\r\n\n\n//# sourceURL=webpack://fraktaly/./src/ts/modules/Tree.ts?");

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
/******/ 	__webpack_require__("./src/ts/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/style.scss");
/******/ 	
/******/ })()
;