(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CssCorn"] = factory();
	else
		root["CssCorn"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: CssCorn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CssCorn\", function() { return CssCorn; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nwindow.CssCorn = window.CssCorn || {};\n\nvar addProperty = function addProperty(key, value, obj) {\n  return _objectSpread(_defineProperty({}, key, value), obj);\n};\n\nvar removeProperty = function removeProperty(prop) {\n  return function (_ref) {\n    var undefined = _ref[prop],\n        obj = _objectWithoutProperties(_ref, [prop].map(_toPropertyKey));\n\n    return obj;\n  };\n};\n\nvar renameProperty = function renameProperty(oldProp, newProp, obj) {\n  return removeProperty(oldProp)(addProperty(newProp, obj[oldProp], obj));\n};\n\n;\n;\n\nvar isType = function isType(val, type) {\n  return _typeof(val) === type;\n};\n\nvar CssCorn =\n/*#__PURE__*/\nfunction () {\n  function CssCorn(_params) {\n    _classCallCheck(this, CssCorn);\n\n    _defineProperty(this, \"_id\", void 0);\n\n    _defineProperty(this, \"_styles\", void 0);\n\n    _defineProperty(this, \"_element\", void 0);\n\n    _defineProperty(this, \"willRender\", void 0);\n\n    if (_params && _params.styles) {\n      _params = removeProperty('styles')(_params);\n    }\n\n    var defaultId = 'css-corn';\n\n    var params = _objectSpread({}, {}, {\n      id: defaultId,\n      styles: {},\n      willRender: false\n    }, _params);\n\n    if (!isType(params.id, 'string')) params.id = defaultId;\n    this._id = this.idProcess(params.id);\n    this._styles = params.styles;\n    this.willRender = params.willRender;\n\n    var old = _toConsumableArray(document.querySelectorAll(\"#\".concat(this.id)));\n\n    old.forEach(function (item) {\n      var parent = item.parentNode;\n      parent === null || parent === void 0 ? void 0 : parent.removeChild(item);\n    });\n    this._element = document.createElement('style');\n    this._element.id = this.id;\n\n    this._element.setAttribute('type', 'text/css');\n\n    document.head.appendChild(this._element);\n  }\n\n  _createClass(CssCorn, [{\n    key: \"idProcess\",\n    value: function idProcess(id) {\n      return id.replace(/[\\s]/igm, '-').replace(/[\\W_]/igm, '-').replace(/[-]{2,}/igm, '-').replace(/^\\-/igm, '').replace(/\\-$/igm, '');\n    }\n  }, {\n    key: \"getWillRender\",\n    value: function getWillRender() {\n      return this.willRender;\n    }\n  }, {\n    key: \"errorMsg\",\n    value: function errorMsg(msg, key, val, type) {\n      var replacer = function replacer(str, t) {\n        return str.replace(/%type%/igm, t).replace(/%.*%/igm, '');\n      };\n\n      return \"\\n    [ \".concat(msg, \" ]\\n\\n    [ \").concat(replacer(key, _typeof(val)), \" = \").concat(val, \" ]\\n\\n    [ \").concat(replacer(key, type), \" ]\\n\\n    [ Value must be \").concat(type, \" ]\\n\");\n    }\n  }, {\n    key: \"parse\",\n    value: function parse(stylesString) {\n      return stylesString.split(';').map(function (item) {\n        return item.split(':').map(function (itm) {\n          return itm ? itm.trim() : false;\n        }).filter(function (itm) {\n          return itm;\n        });\n      }).reduce(function (stl, current) {\n        if (current && current.length === 2 && current[0]) stl[current[0]] = current[1];\n        return stl;\n      }, {});\n    }\n  }, {\n    key: \"stringify\",\n    value: function stringify(obj) {\n      return Object.entries(obj).map(function (item) {\n        return [item[0], item[1]].join(':');\n      }).join(';') + ';';\n    }\n  }, {\n    key: \"getStyle\",\n    value: function getStyle(styleString) {\n      return this.parse(styleString);\n    }\n  }, {\n    key: \"add\",\n    value: function add(selector, styleString) {\n      var willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getWillRender();\n\n      if (!isType(selector, 'string') || !isType(styleString, 'string') || !isType(willRender, 'boolean')) {\n        console.error(\"Wrong arguments type! $Css.add(string, string, boolean)!\");\n\n        if (!isType(selector, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.add(SELECTOR: %type%, ..., ...)', selector, 'string'));\n        }\n\n        if (!isType(styleString, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.add(..., STYLESTRING: %type%, ...)', styleString, 'string'));\n        }\n\n        if (!isType(willRender, 'boolean')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.add(..., ..., WILLRENDER: %type%)', willRender, 'boolean'));\n        }\n\n        return this;\n      }\n\n      var styles = this.getStyle(styleString);\n      this._styles[selector] = _objectSpread({}, this._styles[selector], {}, styles);\n      if (willRender) this.render();\n      return this;\n    }\n  }, {\n    key: \"del\",\n    value: function del(selector) {\n      var _this = this;\n\n      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getWillRender();\n\n      if (!isType(selector, 'string') || !isType(params, 'string') || !isType(willRender, 'boolean')) {\n        console.error(\"Wrong arguments type! $Css.del(string, string, boolean)!\");\n\n        if (!isType(selector, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.del(SELECTOR: %type%, ..., ...)', selector, 'string'));\n        }\n\n        if (!isType(params, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.del(..., PARAMS: %type%, ...)', params, 'string'));\n        }\n\n        if (!isType(willRender, 'boolean')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.del(..., ..., WILLRENDER: %type%)', willRender, 'boolean'));\n        }\n\n        return this;\n      }\n\n      if (!params) {\n        this._styles = removeProperty(selector)(this._styles);\n      } else {\n        var stArr = params.split(/[\\s;,\\/]/igm).filter(function (item) {\n          return item.trim();\n        });\n        stArr.forEach(function (item) {\n          _this._styles[selector] = removeProperty(item)(_this._styles[selector]);\n        });\n      }\n\n      if (willRender) this.render();\n      return this;\n    }\n  }, {\n    key: \"rename\",\n    value: function rename(selector) {\n      var newSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getWillRender();\n\n      if (!isType(selector, 'string') || !isType(newSelector, 'string') || !isType(willRender, 'boolean')) {\n        console.error(\"Wrong arguments type! $Css.rename(string, string, boolean)!\");\n\n        if (!isType(selector, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.rename(SELECTOR: %type%, ..., ...)', selector, 'string'));\n        }\n\n        if (!isType(newSelector, 'string')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.rename(..., NEWSELECTOR: %type%, ...)', newSelector, 'string'));\n        }\n\n        if (!isType(willRender, 'boolean')) {\n          console.error(this.errorMsg('Wrong argument type!', '$Css.rename(..., ..., WILLRENDER: %type%)', willRender, 'boolean'));\n        }\n\n        return this;\n      }\n\n      if (this._styles[selector]) this._styles = renameProperty(selector, newSelector, this._styles);\n      if (willRender) this.render();\n      return this;\n    } // TODO: add destory method\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      if (!this._element) {\n        console.error(\"DOM element <style#\".concat(this._id, \"> is not exist\"));\n        return this;\n      }\n\n      var en = function en(o) {\n        return Object.entries(o);\n      };\n\n      var res = en(this._styles).map(function (item) {\n        return \"\".concat(item[0], \"{\").concat(_this2.stringify(item[1]), \"}\");\n      }).join('');\n      this._element.innerText = res;\n      return this;\n    }\n  }, {\n    key: \"id\",\n    set: function set(id) {\n      var newId = this.idProcess(id);\n\n      if (!isType(newId, 'string')) {\n        console.error(this.errorMsg('Wrong property type!', '$Css.id: %type%', newId, 'string'));\n      } else {\n        if (this._element) this._element.id = newId;\n        this._id = newId;\n      }\n    },\n    get: function get() {\n      return this._id;\n    }\n  }, {\n    key: \"styles\",\n    set: function set(val) {\n      this._styles = val;\n    },\n    get: function get() {\n      return this._styles;\n    }\n  }]);\n\n  return CssCorn;\n}();\n;\nwindow.CssCorn = CssCorn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CssCorn); // export default CssCorn;\n\n//# sourceURL=webpack://CssCorn/./src/index.ts?");

/***/ })

/******/ });
});