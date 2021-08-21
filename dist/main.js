/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.bottom-border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.219);\n  width: 50%;\n}\n\n.drag-bg {\n  border: rgba(0, 0, 0, 0.137) solid 1px;\n  padding: 0.1em 0.4em 0.1em 0.4em;\n  align-self: center;\n  position: absolute;\n  right: 0;\n}\n\n.edit {\n  border: rgba(0, 0, 0, 0.137) solid 1px;\n  padding: 0.1em 0.4em 0.1em 0.4em;\n  align-self: center;\n  position: absolute;\n  right: 50px;\n}\n\n.editInput {\n  position: absolute;\n  top: 0.6em;\n  left: 1.8em;\n  border: 1px solid black;\n}\n\n.error {\n  position: absolute;\n  top: 0;\n  height: 3em;\n  padding-top: 0.8em;\n  border-radius: 2%;\n}\n\n.success {\n  position: absolute;\n  top: 0;\n  height: 3em;\n  padding-top: 0.8em;\n  border-radius: 2%;\n}\n\n.line-through {\n  text-decoration: line-through;\n}\n\n.dragable {\n  cursor: move;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,6CAA6C;EAC7C,UAAU;AACZ;;AAEA;EACE,sCAAsC;EACtC,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,sCAAsC;EACtC,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.bottom-border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.219);\n  width: 50%;\n}\n\n.drag-bg {\n  border: rgba(0, 0, 0, 0.137) solid 1px;\n  padding: 0.1em 0.4em 0.1em 0.4em;\n  align-self: center;\n  position: absolute;\n  right: 0;\n}\n\n.edit {\n  border: rgba(0, 0, 0, 0.137) solid 1px;\n  padding: 0.1em 0.4em 0.1em 0.4em;\n  align-self: center;\n  position: absolute;\n  right: 50px;\n}\n\n.editInput {\n  position: absolute;\n  top: 0.6em;\n  left: 1.8em;\n  border: 1px solid black;\n}\n\n.error {\n  position: absolute;\n  top: 0;\n  height: 3em;\n  padding-top: 0.8em;\n  border-radius: 2%;\n}\n\n.success {\n  position: absolute;\n  top: 0;\n  height: 3em;\n  padding-top: 0.8em;\n  border-radius: 2%;\n}\n\n.line-through {\n  text-decoration: line-through;\n}\n\n.dragable {\n  cursor: move;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/module/dom.js":
/*!***************************!*\
  !*** ./src/module/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop.js */ "./src/module/dragAndDrop.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/module/localStorage.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./src/module/utilities.js");




const toDoContainer = document.querySelector('ul');
const removeBtn = document.querySelector('#remove-btn');
const defaultTodos = [];

const updateDom = () => {
  // reset container
  toDoContainer.innerHTML = '';
  let index = -1;
  // Check if the storage exists
  if (_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.isEmpty()) {
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.set(defaultTodos);
  }
  // Get Todo's from local storage
  const storage = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.get();
  storage.forEach((elem) => {
    // Reset the indexes starting from 1
    index += 1;
    elem.index = index;

    // Create li, check box and description h5 for every Todo Object
    const newLi = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.createLiTodo)(elem.description, index);
    // Append li on the ul and add classes
    toDoContainer.classList = 'p-0 m-0';
    toDoContainer.append(newLi);
    (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.set(storage);
  });
};

// Remove all selected(completed todo's) button and update the dom after
removeBtn.addEventListener('click', () => {
  let storage = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.get();
  storage = storage.filter((elem) => elem.checked !== true);
  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.default.set(storage);
  updateDom();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDom);

/***/ }),

/***/ "./src/module/dragAndDrop.js":
/*!***********************************!*\
  !*** ./src/module/dragAndDrop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/module/localStorage.js");


const todoContainer = document.querySelector('ul');
let targetedElement;

const dragAndDrop = () => {
  todoContainer.childNodes.forEach((element) => {
    // Add class to track the current dragging element
    element.addEventListener('dragstart', () => {
      element.classList.add('dragging');
    });
    // Add drag over listener for swapping
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      targetedElement = element;
    });
    // Remove the class and stop tracking when element is dropped
    element.addEventListener('dragend', () => {
      element.classList.remove('dragging');
      // Logic for swaping values
      if (element !== targetedElement) {
        // Swap the indexes in local storage
        const localStorage = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();
        const elementA = element.getAttribute('data-id');
        const elementB = targetedElement.getAttribute('data-id');
        // Swap the text values in the h6 element (childNodes[1])
        const { innerText } = element.childNodes[1];
        element.childNodes[1].innerText = targetedElement.childNodes[1].innerText;
        targetedElement.childNodes[1].innerText = innerText;
        // Swap the checkbox values
        const { checked } = element.childNodes[0];
        element.childNodes[0].checked = targetedElement.childNodes[0].checked;
        targetedElement.childNodes[0].checked = checked;
        // Swap classes beween nodes
        const classList = element.childNodes[1].classList.value;
        element.childNodes[1].classList.value = targetedElement.childNodes[1].classList.value;
        targetedElement.childNodes[1].classList.value = classList;
        // Swap all the attributes in local storage
        const helpElem = localStorage[elementA];
        localStorage[elementA] = localStorage[elementB];
        localStorage[elementB] = helpElem;
        _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.set(localStorage);
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragAndDrop);

/***/ }),

/***/ "./src/module/localStorage.js":
/*!************************************!*\
  !*** ./src/module/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
  static set(storage) {
    localStorage.setItem('toDoList', JSON.stringify(storage));
  }

  static get() {
    return JSON.parse(localStorage.getItem('toDoList'));
  }

  static isEmpty() {
    return this.get() === null;
  }
}

/***/ }),

/***/ "./src/module/todo.js":
/*!****************************!*\
  !*** ./src/module/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  constructor(description) {
    this.description = description;
    this.checked = false;
    this.index = null;
  }
}

/***/ }),

/***/ "./src/module/utilities.js":
/*!*********************************!*\
  !*** ./src/module/utilities.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => (/* binding */ success),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "createLiTodo": () => (/* binding */ createLiTodo)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/module/localStorage.js");


// Function for displaying a todo was created
const success = () => {
  const success = document.createElement('div');
  success.innerText = 'To Do created successfully!';
  success.classList += 'bg-success success w-50 text-center';
  const body = document.querySelector('body');
  body.append(success);
  setTimeout(() => success.remove(), 3000);
};

const editSuccess = () => {
  const success = document.createElement('div');
  success.innerText = 'To Do edited successfully!';
  success.classList += 'bg-success success w-50 text-center';
  const body = document.querySelector('body');
  body.append(success);
  setTimeout(() => success.remove(), 3000);
};

// Function to display a todo was not created
const error = () => {
  const error = document.createElement('div');
  error.innerText = 'To Do should be 3-30 characters!';
  error.classList += 'bg-danger error w-50 text-center';
  const body = document.querySelector('body');
  body.append(error);
  setTimeout(() => error.remove(), 3000);
};

// Adding line through if the todo is checked as completed and updating local storage
const checkLi = (e, index) => {
  const todoArray = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();
  if (e.target.checked) {
    todoArray[index].checked = true;
    e.target.parentNode.childNodes[1].classList = 'mx-3 my-auto line-through';
  } else {
    todoArray[index].checked = false;
    e.target.parentNode.childNodes[1].classList = 'mx-3 my-auto';
  }
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.set(todoArray);
};

// Individual remove button added on every todo li
const deleteBtn = (e, index) => {
  e.target.parentNode.remove();
  let storage = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();
  storage = storage.filter((elem) => elem.index !== index);
  _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.set(storage);
};

const editButton = (e) => {
  const descriptionText = e.target.parentNode.childNodes[1];
  const index = e.target.parentNode.getAttribute('data-id');
  const descriptionInput = document.createElement('input');
  descriptionInput.classList = 'editInput';
  e.target.parentNode.append(descriptionInput);
  descriptionInput.value = descriptionText.innerText;
  // Add event listener for pressing enter and changing the todo
  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if ((descriptionInput.value).length > 30 || (descriptionInput.value).length < 3) {
        descriptionInput.remove();
        error();
      } else {
        descriptionText.innerText = descriptionInput.value;
        descriptionInput.remove();
        editSuccess();
        const storage = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();
        storage[index].description = descriptionText.innerText;
        _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.set(storage);
      }
    }
  });
  // Add event listener to stop the editing
  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === '`') {
      e.target.remove();
    }
  });
};

const createLiTodo = (todoDescription, index) => {
  // Create all the elements needed for a todo
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('h6');
  const editBtn = document.createElement('button');
  const deleteOneBtn = document.createElement('button');
  checkbox.type = 'checkbox';
  description.innerText = todoDescription;
  // Add event listener to the checkbox
  checkbox.addEventListener('change', (e) => {
    checkLi(e, index);
  });
  // Add classes, attributes and event listeners
  li.setAttribute('data-id', index);
  li.setAttribute('draggable', 'true');
  li.classList += 'list-unstyled d-flex bottom-border w-50 position-relative dragable';
  checkbox.classList += 'my-3';
  deleteOneBtn.innerText = 'X';
  deleteOneBtn.classList = 'drag-bg my-auto';
  deleteOneBtn.addEventListener('click', (e) => {
    deleteBtn(e, index);
  });
  editBtn.classList = 'my-auto edit';
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', (e) => {
    editButton(e);
  });
  // Check if the checkbox is checked
  const storage = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();
  if (storage[index].checked) {
    description.classList += 'mx-3 my-auto line-through';
    checkbox.checked = true;
  } else {
    description.classList += 'mx-3 my-auto';
  }
  // Append check box, descripton and buttons on li
  li.append(checkbox, description, editBtn, deleteOneBtn);
  return li;
};



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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _module_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/todo.js */ "./src/module/todo.js");
/* harmony import */ var _module_localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/localStorage.js */ "./src/module/localStorage.js");
/* harmony import */ var _module_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/dom.js */ "./src/module/dom.js");
/* harmony import */ var _module_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/utilities.js */ "./src/module/utilities.js");






const input = document.querySelector('#todo-entry');
let storage = [];

window.onload = () => {
  (0,_module_dom_js__WEBPACK_IMPORTED_MODULE_3__.default)();
};

const CreateTodo = (description) => {
  const toDo = new _module_todo_js__WEBPACK_IMPORTED_MODULE_1__.default(description);
  if (!_module_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.default.isEmpty()) {
    storage = _module_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.default.get();
    toDo.index = storage.length + 1;
    storage.push(toDo);
    _module_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.default.set(storage);
  } else {
    _module_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.default.set(storage);
  }
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // Validation to prevent too long inputs
    if ((input.value).length > 30 || (input.value).length < 3) {
      (0,_module_utilities_js__WEBPACK_IMPORTED_MODULE_4__.error)();
      input.value = '';
      // Create new todo if input length is less that 20 characters
    } else {
      (0,_module_utilities_js__WEBPACK_IMPORTED_MODULE_4__.success)();
      CreateTodo(input.value);
      input.value = '';
      (0,_module_dom_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGUvZHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGUvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGUvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm90dG9tLWJvcmRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIxOSk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZHJhZy1iZyB7XFxuICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4xMzcpIHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNGVtIDAuMWVtIDAuNGVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5lZGl0IHtcXG4gIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjEzNykgc29saWQgMXB4O1xcbiAgcGFkZGluZzogMC4xZW0gMC40ZW0gMC4xZW0gMC40ZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTBweDtcXG59XFxuXFxuLmVkaXRJbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNmVtO1xcbiAgbGVmdDogMS44ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmVycm9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogM2VtO1xcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogM2VtO1xcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxufVxcblxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kcmFnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvdHRvbS1ib3JkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMTkpO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmRyYWctYmcge1xcbiAgYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTM3KSBzb2xpZCAxcHg7XFxuICBwYWRkaW5nOiAwLjFlbSAwLjRlbSAwLjFlbSAwLjRlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZWRpdCB7XFxuICBib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4xMzcpIHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNGVtIDAuMWVtIDAuNGVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5lZGl0SW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZlbTtcXG4gIGxlZnQ6IDEuOGVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5lcnJvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZHJhZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkcmFnQW5kRHJvcCBmcm9tICcuL2RyYWdBbmREcm9wLmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUxpVG9kbyB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5jb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLWJ0bicpO1xuY29uc3QgZGVmYXVsdFRvZG9zID0gW107XG5cbmNvbnN0IHVwZGF0ZURvbSA9ICgpID0+IHtcbiAgLy8gcmVzZXQgY29udGFpbmVyXG4gIHRvRG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBpbmRleCA9IC0xO1xuICAvLyBDaGVjayBpZiB0aGUgc3RvcmFnZSBleGlzdHNcbiAgaWYgKFN0b3JhZ2UuaXNFbXB0eSgpKSB7XG4gICAgU3RvcmFnZS5zZXQoZGVmYXVsdFRvZG9zKTtcbiAgfVxuICAvLyBHZXQgVG9kbydzIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXQoKTtcbiAgc3RvcmFnZS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgLy8gUmVzZXQgdGhlIGluZGV4ZXMgc3RhcnRpbmcgZnJvbSAxXG4gICAgaW5kZXggKz0gMTtcbiAgICBlbGVtLmluZGV4ID0gaW5kZXg7XG5cbiAgICAvLyBDcmVhdGUgbGksIGNoZWNrIGJveCBhbmQgZGVzY3JpcHRpb24gaDUgZm9yIGV2ZXJ5IFRvZG8gT2JqZWN0XG4gICAgY29uc3QgbmV3TGkgPSBjcmVhdGVMaVRvZG8oZWxlbS5kZXNjcmlwdGlvbiwgaW5kZXgpO1xuICAgIC8vIEFwcGVuZCBsaSBvbiB0aGUgdWwgYW5kIGFkZCBjbGFzc2VzXG4gICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QgPSAncC0wIG0tMCc7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQobmV3TGkpO1xuICAgIGRyYWdBbmREcm9wKCk7XG4gICAgU3RvcmFnZS5zZXQoc3RvcmFnZSk7XG4gIH0pO1xufTtcblxuLy8gUmVtb3ZlIGFsbCBzZWxlY3RlZChjb21wbGV0ZWQgdG9kbydzKSBidXR0b24gYW5kIHVwZGF0ZSB0aGUgZG9tIGFmdGVyXG5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBzdG9yYWdlID0gU3RvcmFnZS5nZXQoKTtcbiAgc3RvcmFnZSA9IHN0b3JhZ2UuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmNoZWNrZWQgIT09IHRydWUpO1xuICBTdG9yYWdlLnNldChzdG9yYWdlKTtcbiAgdXBkYXRlRG9tKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlRG9tOyIsImltcG9ydCBTdG9yYWdlIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5sZXQgdGFyZ2V0ZWRFbGVtZW50O1xuXG5jb25zdCBkcmFnQW5kRHJvcCA9ICgpID0+IHtcbiAgdG9kb0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBBZGQgY2xhc3MgdG8gdHJhY2sgdGhlIGN1cnJlbnQgZHJhZ2dpbmcgZWxlbWVudFxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIH0pO1xuICAgIC8vIEFkZCBkcmFnIG92ZXIgbGlzdGVuZXIgZm9yIHN3YXBwaW5nXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0YXJnZXRlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0pO1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgYW5kIHN0b3AgdHJhY2tpbmcgd2hlbiBlbGVtZW50IGlzIGRyb3BwZWRcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICAvLyBMb2dpYyBmb3Igc3dhcGluZyB2YWx1ZXNcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0YXJnZXRlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gU3dhcCB0aGUgaW5kZXhlcyBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IFN0b3JhZ2UuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSB0YXJnZXRlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIC8vIFN3YXAgdGhlIHRleHQgdmFsdWVzIGluIHRoZSBoNiBlbGVtZW50IChjaGlsZE5vZGVzWzFdKVxuICAgICAgICBjb25zdCB7IGlubmVyVGV4dCB9ID0gZWxlbWVudC5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0ID0gdGFyZ2V0ZWRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xuICAgICAgICB0YXJnZXRlZEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgICAgIC8vIFN3YXAgdGhlIGNoZWNrYm94IHZhbHVlc1xuICAgICAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLmNoZWNrZWQgPSB0YXJnZXRlZEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGVja2VkO1xuICAgICAgICB0YXJnZXRlZEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgLy8gU3dhcCBjbGFzc2VzIGJld2VlbiBub2Rlc1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnZhbHVlO1xuICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnZhbHVlID0gdGFyZ2V0ZWRFbGVtZW50LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnZhbHVlO1xuICAgICAgICB0YXJnZXRlZEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudmFsdWUgPSBjbGFzc0xpc3Q7XG4gICAgICAgIC8vIFN3YXAgYWxsIHRoZSBhdHRyaWJ1dGVzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgaGVscEVsZW0gPSBsb2NhbFN0b3JhZ2VbZWxlbWVudEFdO1xuICAgICAgICBsb2NhbFN0b3JhZ2VbZWxlbWVudEFdID0gbG9jYWxTdG9yYWdlW2VsZW1lbnRCXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlW2VsZW1lbnRCXSA9IGhlbHBFbGVtO1xuICAgICAgICBTdG9yYWdlLnNldChsb2NhbFN0b3JhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWdBbmREcm9wOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBzdGF0aWMgc2V0KHN0b3JhZ2UpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0KCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpID09PSBudWxsO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kZXggPSBudWxsO1xuICB9XG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG4vLyBGdW5jdGlvbiBmb3IgZGlzcGxheWluZyBhIHRvZG8gd2FzIGNyZWF0ZWRcbmNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VjY2Vzcy5pbm5lclRleHQgPSAnVG8gRG8gY3JlYXRlZCBzdWNjZXNzZnVsbHkhJztcbiAgc3VjY2Vzcy5jbGFzc0xpc3QgKz0gJ2JnLXN1Y2Nlc3Mgc3VjY2VzcyB3LTUwIHRleHQtY2VudGVyJztcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5hcHBlbmQoc3VjY2Vzcyk7XG4gIHNldFRpbWVvdXQoKCkgPT4gc3VjY2Vzcy5yZW1vdmUoKSwgMzAwMCk7XG59O1xuXG5jb25zdCBlZGl0U3VjY2VzcyA9ICgpID0+IHtcbiAgY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdWNjZXNzLmlubmVyVGV4dCA9ICdUbyBEbyBlZGl0ZWQgc3VjY2Vzc2Z1bGx5ISc7XG4gIHN1Y2Nlc3MuY2xhc3NMaXN0ICs9ICdiZy1zdWNjZXNzIHN1Y2Nlc3Mgdy01MCB0ZXh0LWNlbnRlcic7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYXBwZW5kKHN1Y2Nlc3MpO1xuICBzZXRUaW1lb3V0KCgpID0+IHN1Y2Nlc3MucmVtb3ZlKCksIDMwMDApO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBhIHRvZG8gd2FzIG5vdCBjcmVhdGVkXG5jb25zdCBlcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3IuaW5uZXJUZXh0ID0gJ1RvIERvIHNob3VsZCBiZSAzLTMwIGNoYXJhY3RlcnMhJztcbiAgZXJyb3IuY2xhc3NMaXN0ICs9ICdiZy1kYW5nZXIgZXJyb3Igdy01MCB0ZXh0LWNlbnRlcic7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYXBwZW5kKGVycm9yKTtcbiAgc2V0VGltZW91dCgoKSA9PiBlcnJvci5yZW1vdmUoKSwgMzAwMCk7XG59O1xuXG4vLyBBZGRpbmcgbGluZSB0aHJvdWdoIGlmIHRoZSB0b2RvIGlzIGNoZWNrZWQgYXMgY29tcGxldGVkIGFuZCB1cGRhdGluZyBsb2NhbCBzdG9yYWdlXG5jb25zdCBjaGVja0xpID0gKGUsIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRvZG9BcnJheSA9IFN0b3JhZ2UuZ2V0KCk7XG4gIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgdG9kb0FycmF5W2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0ID0gJ214LTMgbXktYXV0byBsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIHRvZG9BcnJheVtpbmRleF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QgPSAnbXgtMyBteS1hdXRvJztcbiAgfVxuICBTdG9yYWdlLnNldCh0b2RvQXJyYXkpO1xufTtcblxuLy8gSW5kaXZpZHVhbCByZW1vdmUgYnV0dG9uIGFkZGVkIG9uIGV2ZXJ5IHRvZG8gbGlcbmNvbnN0IGRlbGV0ZUJ0biA9IChlLCBpbmRleCkgPT4ge1xuICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICBsZXQgc3RvcmFnZSA9IFN0b3JhZ2UuZ2V0KCk7XG4gIHN0b3JhZ2UgPSBzdG9yYWdlLmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pbmRleCAhPT0gaW5kZXgpO1xuICBTdG9yYWdlLnNldChzdG9yYWdlKTtcbn07XG5cbmNvbnN0IGVkaXRCdXR0b24gPSAoZSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV07XG4gIGNvbnN0IGluZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0ID0gJ2VkaXRJbnB1dCc7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb25UZXh0LmlubmVyVGV4dDtcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBwcmVzc2luZyBlbnRlciBhbmQgY2hhbmdpbmcgdGhlIHRvZG9cbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoKGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpLmxlbmd0aCA+IDMwIHx8IChkZXNjcmlwdGlvbklucHV0LnZhbHVlKS5sZW5ndGggPCAzKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIGVycm9yKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgZWRpdFN1Y2Nlc3MoKTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2UuZ2V0KCk7XG4gICAgICAgIHN0b3JhZ2VbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25UZXh0LmlubmVyVGV4dDtcbiAgICAgICAgU3RvcmFnZS5zZXQoc3RvcmFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN0b3AgdGhlIGVkaXRpbmdcbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnYCcpIHtcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVMaVRvZG8gPSAodG9kb0Rlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICAvLyBDcmVhdGUgYWxsIHRoZSBlbGVtZW50cyBuZWVkZWQgZm9yIGEgdG9kb1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZU9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNoZWNrYm94XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgY2hlY2tMaShlLCBpbmRleCk7XG4gIH0pO1xuICAvLyBBZGQgY2xhc3NlcywgYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzXG4gIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGluZGV4KTtcbiAgbGkuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICBsaS5jbGFzc0xpc3QgKz0gJ2xpc3QtdW5zdHlsZWQgZC1mbGV4IGJvdHRvbS1ib3JkZXIgdy01MCBwb3NpdGlvbi1yZWxhdGl2ZSBkcmFnYWJsZSc7XG4gIGNoZWNrYm94LmNsYXNzTGlzdCArPSAnbXktMyc7XG4gIGRlbGV0ZU9uZUJ0bi5pbm5lclRleHQgPSAnWCc7XG4gIGRlbGV0ZU9uZUJ0bi5jbGFzc0xpc3QgPSAnZHJhZy1iZyBteS1hdXRvJztcbiAgZGVsZXRlT25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkZWxldGVCdG4oZSwgaW5kZXgpO1xuICB9KTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QgPSAnbXktYXV0byBlZGl0JztcbiAgZWRpdEJ0bi5pbm5lclRleHQgPSAnRWRpdCc7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGVkaXRCdXR0b24oZSk7XG4gIH0pO1xuICAvLyBDaGVjayBpZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZFxuICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXQoKTtcbiAgaWYgKHN0b3JhZ2VbaW5kZXhdLmNoZWNrZWQpIHtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QgKz0gJ214LTMgbXktYXV0byBsaW5lLXRocm91Z2gnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCArPSAnbXgtMyBteS1hdXRvJztcbiAgfVxuICAvLyBBcHBlbmQgY2hlY2sgYm94LCBkZXNjcmlwdG9uIGFuZCBidXR0b25zIG9uIGxpXG4gIGxpLmFwcGVuZChjaGVja2JveCwgZGVzY3JpcHRpb24sIGVkaXRCdG4sIGRlbGV0ZU9uZUJ0bik7XG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCB7IHN1Y2Nlc3MsIGVycm9yLCBjcmVhdGVMaVRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCBUb0RvIGZyb20gJy4vbW9kdWxlL3RvZG8uanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGUvbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB1cGRhdGVEb20gZnJvbSAnLi9tb2R1bGUvZG9tLmpzJztcbmltcG9ydCB7IHN1Y2Nlc3MsIGVycm9yIH0gZnJvbSAnLi9tb2R1bGUvdXRpbGl0aWVzLmpzJztcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1lbnRyeScpO1xubGV0IHN0b3JhZ2UgPSBbXTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgdXBkYXRlRG9tKCk7XG59O1xuXG5jb25zdCBDcmVhdGVUb2RvID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IHRvRG8gPSBuZXcgVG9EbyhkZXNjcmlwdGlvbik7XG4gIGlmICghU3RvcmFnZS5pc0VtcHR5KCkpIHtcbiAgICBzdG9yYWdlID0gU3RvcmFnZS5nZXQoKTtcbiAgICB0b0RvLmluZGV4ID0gc3RvcmFnZS5sZW5ndGggKyAxO1xuICAgIHN0b3JhZ2UucHVzaCh0b0RvKTtcbiAgICBTdG9yYWdlLnNldChzdG9yYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBTdG9yYWdlLnNldChzdG9yYWdlKTtcbiAgfVxufTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAvLyBWYWxpZGF0aW9uIHRvIHByZXZlbnQgdG9vIGxvbmcgaW5wdXRzXG4gICAgaWYgKChpbnB1dC52YWx1ZSkubGVuZ3RoID4gMzAgfHwgKGlucHV0LnZhbHVlKS5sZW5ndGggPCAzKSB7XG4gICAgICBlcnJvcigpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIC8vIENyZWF0ZSBuZXcgdG9kbyBpZiBpbnB1dCBsZW5ndGggaXMgbGVzcyB0aGF0IDIwIGNoYXJhY3RlcnNcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VzcygpO1xuICAgICAgQ3JlYXRlVG9kbyhpbnB1dC52YWx1ZSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgdXBkYXRlRG9tKCk7XG4gICAgfVxuICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=