/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/ReleasePage/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classPrivateFieldBase; });\nfunction _classPrivateFieldBase(receiver, privateKey) {\n  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {\n    throw new TypeError(\"attempted to use private field on non-instance\");\n  }\n\n  return receiver;\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classPrivateFieldKey; });\nvar id = 0;\nfunction _classPrivateFieldKey(name) {\n  return \"__private_\" + id++ + \"_\" + name;\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createForOfIteratorHelper; });\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n\nfunction _createForOfIteratorHelper(o) {\n  if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {\n    if (Array.isArray(o) || (o = Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o))) {\n      var i = 0;\n\n      var F = function F() {};\n\n      return {\n        s: F,\n        n: function n() {\n          if (i >= o.length) return {\n            done: true\n          };\n          return {\n            done: false,\n            value: o[i++]\n          };\n        },\n        e: function e(_e) {\n          throw _e;\n        },\n        f: F\n      };\n    }\n\n    throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n  }\n\n  var it,\n      normalCompletion = true,\n      didErr = false,\n      err;\n  return {\n    s: function s() {\n      it = o[Symbol.iterator]();\n    },\n    n: function n() {\n      var step = it.next();\n      normalCompletion = step.done;\n      return step;\n    },\n    e: function e(_e2) {\n      didErr = true;\n      err = _e2;\n    },\n    f: function f() {\n      try {\n        if (!normalCompletion && it[\"return\"] != null) it[\"return\"]();\n      } finally {\n        if (didErr) throw err;\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(n);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack:///./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/content/ReleasePage/CommitMessagesToTicketsTransformer.jsx":
/*!************************************************************************!*\
  !*** ./src/content/ReleasePage/CommitMessagesToTicketsTransformer.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js\");\n\n\n\n\n\n\n\nvar _ticketNameExtractor = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"ticketNameExtractor\");\n\nvar CommitMessagesToTicketsTransformer = /*#__PURE__*/function () {\n  function CommitMessagesToTicketsTransformer(ticketNameExtractor) {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CommitMessagesToTicketsTransformer);\n\n    Object.defineProperty(this, _ticketNameExtractor, {\n      writable: true,\n      value: void 0\n    });\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, _ticketNameExtractor)[_ticketNameExtractor] = ticketNameExtractor;\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CommitMessagesToTicketsTransformer, [{\n    key: \"transform\",\n    value: function transform(commitMessages) {\n      var tickets = [];\n\n      var _iterator = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commitMessages),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var commitMessage = _step.value;\n\n          try {\n            tickets.push(Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, _ticketNameExtractor)[_ticketNameExtractor].fromString(commitMessage.title));\n          } catch (error) {}\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(tickets.sort()));\n    }\n  }]);\n\n  return CommitMessagesToTicketsTransformer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommitMessagesToTicketsTransformer);\n\n//# sourceURL=webpack:///./src/content/ReleasePage/CommitMessagesToTicketsTransformer.jsx?");

/***/ }),

/***/ "./src/content/ReleasePage/ReleasePageExecutor.jsx":
/*!*********************************************************!*\
  !*** ./src/content/ReleasePage/ReleasePageExecutor.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js\");\n\n\n\n\n\nvar _OPEN_RELEASE_PULL_REQUEST_URL_PATTERN = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"OPEN_RELEASE_PULL_REQUEST_URL_PATTERN\");\n\nvar _elementFinder = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"elementFinder\");\n\nvar _commitMessagesToTicketsTransformer = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"commitMessagesToTicketsTransformer\");\n\nvar ReleasePageExecutor = /*#__PURE__*/function () {\n  function ReleasePageExecutor(elementFinder, commitMessagesToTicketsTransformer) {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ReleasePageExecutor);\n\n    Object.defineProperty(this, _elementFinder, {\n      writable: true,\n      value: void 0\n    });\n    Object.defineProperty(this, _commitMessagesToTicketsTransformer, {\n      writable: true,\n      value: void 0\n    });\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _elementFinder)[_elementFinder] = elementFinder;\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _commitMessagesToTicketsTransformer)[_commitMessagesToTicketsTransformer] = commitMessagesToTicketsTransformer;\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ReleasePageExecutor, [{\n    key: \"execute\",\n    value: function execute() {\n      var title = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _elementFinder)[_elementFinder].pullRequest().title();\n\n      var body = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _elementFinder)[_elementFinder].pullRequest().body();\n\n      var tickets = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _commitMessagesToTicketsTransformer)[_commitMessagesToTicketsTransformer].transform(Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _elementFinder)[_elementFinder].pullRequest().commitMessages());\n\n      var ticketsString = tickets.join(' ');\n      title.value = ticketsString;\n      body.value = ticketsString.replaceAll(' ', '\\n');\n    }\n  }, {\n    key: \"supports\",\n    value: function supports() {\n      return Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ReleasePageExecutor, _OPEN_RELEASE_PULL_REQUEST_URL_PATTERN)[_OPEN_RELEASE_PULL_REQUEST_URL_PATTERN].test(window.location.href);\n    }\n  }]);\n\n  return ReleasePageExecutor;\n}();\n\nObject.defineProperty(ReleasePageExecutor, _OPEN_RELEASE_PULL_REQUEST_URL_PATTERN, {\n  writable: true,\n  value: /github\\.com\\/[A-z0-9._-]+\\/[A-z0-9._-]+\\/compare\\/master\\.\\.\\.development\\?quick_pull=1$/gi\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReleasePageExecutor);\n\n//# sourceURL=webpack:///./src/content/ReleasePage/ReleasePageExecutor.jsx?");

/***/ }),

/***/ "./src/content/ReleasePage/index.jsx":
/*!*******************************************!*\
  !*** ./src/content/ReleasePage/index.jsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReleasePageExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReleasePageExecutor */ \"./src/content/ReleasePage/ReleasePageExecutor.jsx\");\n/* harmony import */ var _SupportsExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SupportsExecutor */ \"./src/content/SupportsExecutor.jsx\");\n/* harmony import */ var _finder_ElementFinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../finder/ElementFinder */ \"./src/content/finder/ElementFinder.jsx\");\n/* harmony import */ var _CommitMessagesToTicketsTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommitMessagesToTicketsTransformer */ \"./src/content/ReleasePage/CommitMessagesToTicketsTransformer.jsx\");\n/* harmony import */ var _TicketNameExtractor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TicketNameExtractor */ \"./src/content/TicketNameExtractor.jsx\");\n\n\n\n\n\nvar executor = new _SupportsExecutor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _ReleasePageExecutor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _finder_ElementFinder__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new _CommitMessagesToTicketsTransformer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _TicketNameExtractor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]())));\nexecutor.execute();\n\n//# sourceURL=webpack:///./src/content/ReleasePage/index.jsx?");

/***/ }),

/***/ "./src/content/SupportsExecutor.jsx":
/*!******************************************!*\
  !*** ./src/content/SupportsExecutor.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js\");\n\n\n\n\n\nvar _executor = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"executor\");\n\nvar SupportsExecutor = /*#__PURE__*/function () {\n  function SupportsExecutor(executor) {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SupportsExecutor);\n\n    Object.defineProperty(this, _executor, {\n      writable: true,\n      value: void 0\n    });\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _executor)[_executor] = executor;\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SupportsExecutor, [{\n    key: \"execute\",\n    value: function execute() {\n      if (!Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _executor)[_executor].supports()) {\n        return;\n      }\n\n      Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, _executor)[_executor].execute();\n    }\n  }]);\n\n  return SupportsExecutor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SupportsExecutor);\n\n//# sourceURL=webpack:///./src/content/SupportsExecutor.jsx?");

/***/ }),

/***/ "./src/content/TicketNameExtractor.jsx":
/*!*********************************************!*\
  !*** ./src/content/TicketNameExtractor.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js\");\n\n\n\n\n\nvar _TICKET_IN_STRING_PATTERN = Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"TICKET_IN_STRING_PATTERN\");\n\nvar TicketNameExtractor = /*#__PURE__*/function () {\n  function TicketNameExtractor() {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TicketNameExtractor);\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TicketNameExtractor, [{\n    key: \"fromString\",\n    value: function fromString(string) {\n      var ticketNameArray = string.match(Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TicketNameExtractor, _TICKET_IN_STRING_PATTERN)[_TICKET_IN_STRING_PATTERN]);\n\n      if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {\n        throw 'Ticket name not found.';\n      }\n\n      return ticketNameArray[0];\n    }\n  }]);\n\n  return TicketNameExtractor;\n}();\n\nObject.defineProperty(TicketNameExtractor, _TICKET_IN_STRING_PATTERN, {\n  writable: true,\n  value: /CARD-[0-9]+/gi\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketNameExtractor);\n\n//# sourceURL=webpack:///./src/content/TicketNameExtractor.jsx?");

/***/ }),

/***/ "./src/content/finder/ElementFinder.jsx":
/*!**********************************************!*\
  !*** ./src/content/finder/ElementFinder.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _PullRequestElementFinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PullRequestElementFinder */ \"./src/content/finder/PullRequestElementFinder.jsx\");\n/* harmony import */ var _FileNavigationElementFinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileNavigationElementFinder */ \"./src/content/finder/FileNavigationElementFinder.jsx\");\n\n\n\n\n\nvar ElementFinder = /*#__PURE__*/function () {\n  function ElementFinder() {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ElementFinder);\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ElementFinder, [{\n    key: \"pullRequest\",\n    value: function pullRequest() {\n      return new _PullRequestElementFinder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n  }, {\n    key: \"fileNavigation\",\n    value: function fileNavigation() {\n      return new _FileNavigationElementFinder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    }\n  }]);\n\n  return ElementFinder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElementFinder);\n\n//# sourceURL=webpack:///./src/content/finder/ElementFinder.jsx?");

/***/ }),

/***/ "./src/content/finder/FileNavigationElementFinder.jsx":
/*!************************************************************!*\
  !*** ./src/content/finder/FileNavigationElementFinder.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar FileNavigationElementFinder = /*#__PURE__*/function () {\n  function FileNavigationElementFinder() {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, FileNavigationElementFinder);\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(FileNavigationElementFinder, [{\n    key: \"navigation\",\n    value: function navigation() {\n      return document.querySelector('div.file-navigation');\n    }\n  }, {\n    key: \"goToFileButton\",\n    value: function goToFileButton() {\n      return document.querySelector('div.file-navigation > a.btn');\n    }\n  }]);\n\n  return FileNavigationElementFinder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileNavigationElementFinder);\n\n//# sourceURL=webpack:///./src/content/finder/FileNavigationElementFinder.jsx?");

/***/ }),

/***/ "./src/content/finder/PullRequestElementFinder.jsx":
/*!*********************************************************!*\
  !*** ./src/content/finder/PullRequestElementFinder.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar PullRequestElementFinder = /*#__PURE__*/function () {\n  function PullRequestElementFinder() {\n    Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PullRequestElementFinder);\n  }\n\n  Object(_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PullRequestElementFinder, [{\n    key: \"title\",\n    value: function title() {\n      var title = document.querySelector('input[name=\"pull_request[title]\"]');\n\n      if (title === null) {\n        throw 'Pull Request title field not found.';\n      }\n\n      return title;\n    }\n  }, {\n    key: \"body\",\n    value: function body() {\n      var body = document.querySelector('textarea[name=\"pull_request[body]\"]');\n\n      if (body === null) {\n        throw 'Pull Request body field not found.';\n      }\n\n      return body;\n    }\n  }, {\n    key: \"commitMessages\",\n    value: function commitMessages() {\n      return document.querySelectorAll('div.commit-message > code > a:nth-child(1)');\n    }\n  }, {\n    key: \"headBranch\",\n    value: function headBranch() {\n      var branch = document.querySelectorAll('summary.branch span')[1];\n\n      if (branch === null) {\n        throw 'Pull Request head branch not found.';\n      }\n\n      return branch;\n    }\n  }]);\n\n  return PullRequestElementFinder;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PullRequestElementFinder);\n\n//# sourceURL=webpack:///./src/content/finder/PullRequestElementFinder.jsx?");

/***/ })

/******/ });