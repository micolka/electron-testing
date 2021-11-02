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

/***/ "./src/main/preload.ts":
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\nvar ipcRendererSend = function (chanell, data) {\n    electron_1.ipcRenderer.send(chanell, data);\n};\nelectron_1.contextBridge.exposeInMainWorld('mainWinContext', {\n    ipcRendererSend: ipcRendererSend,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9wcmVsb2FkLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQXNEO0FBR3RELElBQU0sZUFBZSxHQUFHLFVBQUksT0FBaUIsRUFBRSxJQUFRO0lBQ25ELHNCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FDN0IsZ0JBQWdCLEVBQUU7SUFDaEIsZUFBZTtDQUNoQixDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtd2VicGFjay1hcHAvLi9zcmMvbWFpbi9wcmVsb2FkLnRzPzZkMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXBjUmVuZGVyZXIsIGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBjaGFubmVscyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgaXBjUmVuZGVyZXJTZW5kID0gPFQ+KGNoYW5lbGw6IGNoYW5uZWxzLCBkYXRhPzogVCkgPT4ge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoY2hhbmVsbCwgZGF0YSk7XG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXG4gICdtYWluV2luQ29udGV4dCcsIHtcbiAgICBpcGNSZW5kZXJlclNlbmQsXG4gIH1cbilcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtYWluV2luQ29udGV4dDoge1xuICAgICAgICBpcGNSZW5kZXJlclNlbmQ6IHR5cGVvZiBpcGNSZW5kZXJlclNlbmRcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/preload.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/preload.ts");
/******/ 	
/******/ })()
;