/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/second/preload.ts":
/*!*******************************!*\
  !*** ./src/second/preload.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\nvar ipcRendererOn = function (chanell, callback) {\n    var newCallBack = function (_, data) { return callback(data); };\n    electron_1.ipcRenderer.on(chanell, newCallBack);\n};\nelectron_1.contextBridge.exposeInMainWorld('secondWinContext', {\n    ipcRendererOn: ipcRendererOn,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Vjb25kL3ByZWxvYWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBc0Q7QUFHdEQsSUFBTSxhQUFhLEdBQUcsVUFBSSxPQUFpQixFQUFFLFFBQTJCO0lBQ3BFLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBNEIsRUFBRSxJQUFPLElBQUssZUFBUSxDQUFDLElBQUksQ0FBQyxFQUFkLENBQWMsQ0FBQztJQUM5RSxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0FBQ3hDLENBQUM7QUFFRCx3QkFBYSxDQUFDLGlCQUFpQixDQUM3QixrQkFBa0IsRUFBRTtJQUNsQixhQUFhO0NBQ2QsQ0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXdlYnBhY2stYXBwLy4vc3JjL3NlY29uZC9wcmVsb2FkLnRzPzRiN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXBjUmVuZGVyZXIsIGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBjaGFubmVscyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgaXBjUmVuZGVyZXJPbiA9IDxUPihjaGFuZWxsOiBjaGFubmVscywgY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FsbEJhY2sgPSAoXzogRWxlY3Ryb24uSXBjUmVuZGVyZXJFdmVudCwgZGF0YTogVCkgPT4gY2FsbGJhY2soZGF0YSk7XG4gICAgaXBjUmVuZGVyZXIub24oY2hhbmVsbCwgbmV3Q2FsbEJhY2spXG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXG4gICdzZWNvbmRXaW5Db250ZXh0Jywge1xuICAgIGlwY1JlbmRlcmVyT24sXG4gIH1cbilcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBzZWNvbmRXaW5Db250ZXh0OiB7XG4gICAgICBpcGNSZW5kZXJlck9uOiB0eXBlb2YgaXBjUmVuZGVyZXJPbixcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/second/preload.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/second/preload.ts");
/******/ 	
/******/ })()
;