/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid lightgray;\r\n\tborder-radius: 5px;\r\n\tflex: 0 1 auto;\r\n\tword-wrap: break-word;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\tword-wrap: break-word;\r\n\ttext-align: center;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 2px solid lightgray;\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;CACC,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,WAAW;CACX,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA,UAAU;AACV;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,OAAO;CACP,QAAQ;;CAER,gBAAgB;CAChB,aAAa;;CAEb,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA,WAAW;AACX;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;;AAGA,uBAAuB;AACvB;CACC,aAAa;CACb,iBAAiB;CACjB,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,OAAO;CACP,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,UAAU;CACV,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,OAAO;CACP,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;AACnB;;;AAGA,eAAe;AACf;CACC,aAAa;CACb,OAAO;CACP,2BAA2B;AAC5B;;;AAGA,WAAW;AACX;CACC,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;AACpB;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,8BAA8B;CAC9B,oCAAoC;CACpC,2BAA2B;CAC3B,kBAAkB;CAClB,cAAc;CACd,qBAAqB;CACrB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,OAAO;CACP,UAAU;CACV,qBAAqB;CACrB,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iCAAiC;AAClC;;AAEA;;;;CAIC,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;;CAEC,oCAAoC;AACrC;;AAEA,cAAc;AACd;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;;CAEf,gBAAgB;CAChB,iBAAiB;;CAEjB,YAAY;CACZ,gBAAgB;AACjB","sourcesContent":["/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid lightgray;\r\n\tborder-radius: 5px;\r\n\tflex: 0 1 auto;\r\n\tword-wrap: break-word;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\tword-wrap: break-word;\r\n\ttext-align: center;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 2px solid lightgray;\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Events = (function() {
  let events = {};

  function on (eventName, fn) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  }

  function off (eventName, fn) {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  function emit(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }

  return {on, off, emit, get list() {return events}};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);


/* People.js

import Events from './events.js';

const People = (function() {
  let people = [];

  function addPeople(array) {
    array.forEach(person => people.push(person));
    Events.emit('peopleChanged', people);
  }

  return {addPeople};
})();

export default People;
*/

/* Stats.js
import Events from './events.js';

const Stats = (function() {
  let stats = {};

  Events.on('peopleChanged', setPeople);

  function setPeople(people) {
    stats.people = people.length;
    console.log(stats);
    console.log(stats.people);
  }
})();

export default Stats;
*/


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ProjectRenderer": () => (/* binding */ ProjectRenderer)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");


/*  
    This module exports a 'Projects' object that keeps 
    track of Projects and their Todos.

    Note:
      Projects.add & Projects.remove return the Projects module itself.
      .addTodo, .removeTodo, and .edit return the project the todo belongs to.

    ~~~~~~~~~~~~~~~~~~~Add, retrive, and remove projects~~~~~~~~~~~~~~~~~~~~~~~~

      Create projects with Project.add('projectName')

      Retrive them with Project.find('projectName')
      or use Projects.list for an array of all projects
      
      You may rename a project by retriving it through one of the above methods:
        Ex: Projects.find('ProjectName').name = 'newName'
      Projects may not have identical names.

      Remove projects with Project.remove('projectName')

    ~~~~~~~~~~~~~~~~~~~Add, retrive, and remove todos~~~~~~~~~~~~~~~~~~~~~~~~~~~

      You may initiate a Project with a todo like so:
        Projects.add('newProject').find('newProject').addTodo('Title', 
                                                              'Description', 
                                                              'DueDate',
                                                              'Priority')
      
      To add todos after creation retrieve an object and use it's addTodo method
        Projects.find('projectName').addTodo(...);

      Retrive todos with .findTodo('todoName') or .listTodos
        Projects.find('projectName').findTodo('todoName')
        Projects.find('projectName').listTodos

      Remove todos with .removeTodo('todoTitle')
        Project.find('projectName').removeTodo('todoTitle');

      You may edit a todo using the edit method on Todo objects. Todos may not 
      have identical titles in the same project:
        Projects.find('ProjectName').findTodo('todoName').edit('title', 'newTitle')
*/


const Projects = (function() {
  const projectsList = [];

  function _saveToLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  };

  function getFromLocalStorage() {
    let storage = JSON.parse(localStorage.getItem('projectsList'));
    if(storage === null) return; //returns if localStorage hasn't been used

    for(let i = 0; i < storage.length; i++) {
      let project = storage[i];
      add(project.name);
      for(let i = 0; i < project.listTodos.length; i++) {
        find(project.name).addTodo(project.listTodos[i].title, 
                                   project.listTodos[i].description, 
                                   project.listTodos[i].duedate, 
                                   project.listTodos[i].priority);
      }
    }
  };

  
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function add(name) {
    if(name === undefined || /^\s*$/.test(name)) { //returns if string is empty or only contains whitespace
      return console.log('Projects must have a name!');
    } else if(find(name) !== undefined) {
      return alert('Projects cannot have identical names');
    }

    const todoList = [];
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addTodo(title, description = '', duedate = '', priority = '') {
      if(title === undefined || title === '') {
        return alert('Todos must have a title!');
      }else if(findTodo(title) !== undefined) {
        return alert('Todos cannot have identical titles');
      }

      const parentProject = this.name;

      function edit(field, change) {
        if(field === undefined || change === undefined) {
          return alert('Missing arguments!');
        } else if (field === 'title') {

          if(title === undefined) {
            return alert('Todos must have a title!');
          }else if(findTodo(change) !== undefined) {
            return alert('Todos cannot have identical titles');
          }
          title = change;

        } else if(field === 'description') {
          description = change;
        } else if(field === 'duedate') {
          duedate = change;
        } else if(field === 'priority') {
          priority = change;
        } else {
          return alert('Field does not exist!');
        }

        _saveToLocalStorage();
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
        return find(parentProject);
      }
      //Todo object
      const todo = Object.freeze({
        get title() {return title}, 
        get description() {return description}, 
        get duedate() {return duedate}, 
        get priority() {return priority},
        get parentProject() {return parentProject},
        edit
      });
      todoList.push(todo);
      _saveToLocalStorage();
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
      return this;
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    //other project crud
    function findTodo(title) {
      if(title === undefined) {
        return alert('Todo not found!');
      } else {
        return todoList.find( todo => todo.title === title );
      }
    };

    function removeTodo(title) {
      const index = todoList.findIndex(todo => todo.title === title);

      if (index === -1) {
        return alert('Todo not found!');
      } else {
        todoList.splice(index , 1);
        _saveToLocalStorage();
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
        return this;
      }
    }

    //Project object
    const project = Object.freeze({ 
      get name() {return name}, 
      set name(newName) {
        if(newName === undefined || /^\s*$/.test(newName)) {
          return alert('Projects must have a name!');
        } else if(find(newName) !== undefined) {
          return alert('Projects cannot have identical names');
        } else {
          name = newName;
          _saveToLocalStorage();
          _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
        }
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });
    projectsList.push(project);
    _saveToLocalStorage();
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
    return this;
  };
  /*~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  //other module crud
  function remove(name) {
    const index = projectsList.findIndex(project => project.name === name);

    if (index === -1) {
      return alert('Project not found!'); //returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index , 1);
      _saveToLocalStorage();
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate');
      return this;
    }
  }

  function find(name) {
    if(name === undefined) {
      return alert('Project not found!');
    } else {
      return projectsList.find( project => project.name === name );
    }
  };

  //Module object
  return {
    get list() {
      return [...projectsList];
    },
    add,
    remove,
    find,
    getFromLocalStorage
  }
})();


/*Renders Projects on the webpage. 
Use ProjectRenderer.init(projectElement, todoElement, editable) to set the areas
to render to, and whether they may be edited. Todos will be rendered when their
respective projects are clicked.
If you'd like to only render project names, you may pass a dummy non-object 
value as the todoElement. It will fail quietly with a console message by
default.

After init, ProjectRenderer will have two methods available to it:
ProjectRenderer.setConfig: Used exactly the same as ProjectRenderer.init
ProjectRenderer.off: resets ProjectRenderer to it's original state and clears 
elements immediately. */


const ProjectRenderer = (function() {
  let projectArea;
  let todoArea;
  let renderEditable;
  let firstInit = true;

  function _appendProjectAdder() {
    const form = document.createElement('form');
    form.classList.add('project-add');
    projectArea.appendChild(form);

    const addLabel = document.createElement('label');
    addLabel.classList.add('project-add-label');
    addLabel.setAttribute('for', 'name');
    addLabel.textContent = "Project Name:";
    form.appendChild(addLabel);

    const addInput = document.createElement('input');;
    addInput.classList.add('project-add-input');
    addInput.setAttribute('name', 'name');
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('placeholder', 'New Project');
    addInput.setAttribute('required', '');
    form.appendChild(addInput);

    const addBtn = document.createElement('button');
    addBtn.classList.add('project-add-button');
    addBtn.setAttribute('type', 'submit');
    addBtn.textContent = 'Add';
    form.appendChild(addBtn);

    const addProject = (e) => Projects.add(addInput.value);
    addBtn.addEventListener('click', addProject);
  }
  
  function _appendProjectEditor(projectElement) {
    const editBtn = document.createElement('button');
    editBtn.classList.add('project-edit');
    editBtn.textContent = '✎';
    projectElement.appendChild(editBtn)

    const editProject = (e) => {
      const projectNameElement = e.target.nextSibling
      const projectName = projectNameElement.textContent
      
      //change element properties
      projectNameElement.setAttribute('contenteditable', 'true');
      projectNameElement.classList.add('editable');
      editBtn.setAttribute('hidden', '')

      //add remove element
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('project-remove');
      removeBtn.textContent = '-';
      projectElement.insertBefore(removeBtn, projectNameElement);
      removeBtn.addEventListener('click', () => Projects.remove(projectName));
      
      //exit editor and apply any name changes
      const exitEditor = (e) => {
        projectNameElement.setAttribute('contenteditable', 'false')
        editBtn.removeAttribute('hidden')
        projectElement.removeChild(removeBtn)
        projectNameElement.classList.remove('editable');
        
        if(projectNameElement.textContent !== projectName) {
          const newName = projectNameElement.textContent;
          Projects.find(projectName).name = newName;

          //checks if old project name exists, and resets textContent if still does
          if(typeof Projects.find(projectName) === 'object') {
            projectNameElement.textContent = projectName;
          }
        }

        //must remove listener, or will continue attempting to remove removeBtn
        projectElement.removeEventListener('mouseleave', exitEditor)
      }

      projectElement.addEventListener('mouseleave', exitEditor);
    }
    //Hides edit button and provides additional options until user moves away
    editBtn.addEventListener('click', editProject)
  }

  function _renderProjects() {
    if(typeof projectArea !== 'object') {
      console.log('ProjectRenderer: projectArea left undefined!');
      return;
    }

    projectArea.innerHTML = '';
    
    if(renderEditable === true) _appendProjectAdder();

    Projects.list.forEach( project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project-element');
      
      if(renderEditable === true) _appendProjectEditor(projectElement);

      const name = document.createElement('span');
      name.classList.add('project-name');
      name.textContent = project.name;
      projectElement.appendChild(name);
      
      //renders todos on project click
      name.addEventListener('click', (e) => {
        if(!name.classList.contains('editable')) { //prevents switching in editor mode
          _renderTodos(e.target.textContent);
        }
      });

      if(renderEditable === true) {
        const projectAdder = document.querySelector('.project-add');
        projectAdder.after(projectElement)
      } else {
        projectArea.prepend(projectElement);
      }
    })
  }

  function _appendTodoAdder(sortBar) {
    const addBtn = document.createElement('button')
    addBtn.classList = 'sort-add'
    addBtn.textContent = '+'
    sortBar.appendChild(addBtn)
  }

  function _appendSortBar() {
    const sortBar = document.createElement('div');
    sortBar.classList.add('sort-bar');

    if(renderEditable === true) _appendTodoAdder(sortBar)

    const sortTitle = document.createElement('span');
    sortTitle.classList.add('sort-title');
    sortTitle.textContent = 'title';
    sortBar.appendChild(sortTitle)

    const sortDescription = document.createElement('span');
    sortDescription.classList.add('sort-description');
    sortDescription.textContent = 'description';
    sortBar.appendChild(sortDescription)

    const sortDuedate = document.createElement('span');
    sortDuedate.classList.add('sort-duedate')
    sortDuedate.textContent = 'duedate';
    sortBar.appendChild(sortDuedate)

    const sortPriority = document.createElement('span');
    sortPriority.classList.add('sort-priority');
    sortPriority.textContent = 'priority';
    sortBar.appendChild(sortPriority)

    todoArea.appendChild(sortBar);
  }

  //this function seems a bit messy
  function _appendTodoEditor(todoElement) {
    const editBtn = document.createElement('button');

    editBtn.classList.add('todo-edit');
    editBtn.textContent = '✎';
    todoElement.appendChild(editBtn);

    editBtn.addEventListener('click', (e) => {
      const titleElement = todoElement.querySelector('.todo-title')
      const descriptionElement = todoElement.querySelector('.todo-description');
      const duedateElement = todoElement.querySelector('.todo-duedate');
      const priorityElement = todoElement.querySelector('.todo-priority');

      const title = titleElement.textContent;
      const description = descriptionElement.textContent;
      const duedate = duedateElement.textContent;
      const priority = duedateElement.textContent;

      const makeTodoEditable = (bool) => {
        titleElement.setAttribute('contentEditable', bool);
        descriptionElement.setAttribute('contentEditable', bool);
      
        let duedateInput = document.createElement('input');
        duedateInput.classList.add('todo-duedate', 'editable');
        duedateInput.setAttribute('for', 'duedate')
        duedateInput.setAttribute('type', 'date')

        let prioritySelect = document.createElement('select');
        prioritySelect.classList.add('todo-duedate', 'editable');
      
        const lowPriority = document.createElement('option')
        lowPriority.textContent = 'low';
        const mediumPriority = document.createElement('option');
        mediumPriority.textContent = 'medium';
        const highPriority = document.createElement('option');
        highPriority.textContent = 'high';
      
        prioritySelect.append(lowPriority, mediumPriority, highPriority)
      
      
        if(bool === true) {
          editBtn.setAttribute('hidden', '')
          titleElement.classList.add('editable')
          descriptionElement.classList.add('editable')
        
          duedateElement.setAttribute('hidden', '')
          todoElement.insertBefore(duedateInput, priorityElement);
        
          priorityElement.setAttribute('hidden', '')
          todoElement.appendChild(prioritySelect)
        } else {
          editBtn.removeAttribute('hidden');
          titleElement.classList.remove('editable')
          descriptionElement.classList.remove('editable')
        
          duedateElement.removeAttribute('hidden')
          priorityElement.removeAttribute('hidden')
        
          //must update elements to remove them?
          duedateInput = todoElement.querySelector('input');
          prioritySelect = todoElement.querySelector('select');
          todoElement.removeChild(duedateInput)
          todoElement.removeChild(prioritySelect);
        
          //important: how to get values
          console.log(duedateInput.value)
          console.log(prioritySelect.options[prioritySelect.selectedIndex].text)
        }
      }

      const exitEditor = (e) => {
        makeTodoEditable(false)
        todoElement.removeChild(submitBtn);

        titleElement.textContent = title;
        descriptionElement.textContent = description;
        duedateElement.textContent = duedate;
        priorityElement.textContent = priority;

        todoElement.removeEventListener('mouseleave', exitEditor)
      }

      const submitChanges = (e) => {
        const duedateInput = todoElement.querySelector('input')
        const duedateValue = duedateInput.value;

        const prioritySelect = todoElement.querySelector('select')
        const priorityOption = prioritySelect.options[prioritySelect.selectedIndex].text

        todoElement.removeChild(submitBtn);
        makeTodoEditable(false)

        //titleElement.textContent = title;
        //descriptionElement.textContent = description;
        duedateElement.textContent = duedateValue;
        priorityElement.textContent = priorityOption;

        todoElement.removeEventListener('mouseleave', exitEditor)
      };
      
      makeTodoEditable(true)

      const submitBtn = document.createElement('button');
      submitBtn.classList.add('todo-submit');
      submitBtn.textContent = '✓';
      todoElement.prepend(submitBtn);
      submitBtn.addEventListener('click', submitChanges);

      todoElement.addEventListener('mouseleave', exitEditor)
    })
  }

  function _renderTodos(projectName) {
    if(typeof todoArea !== 'object') {
      console.log('ProjectRenderer: todoArea left undefined!');
      return;
    }

    todoArea.innerHTML = '';
  
    const todos = Projects.find(projectName).listTodos;

    _appendSortBar();
  
    if(todos.length > 0) {
  
      todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-element');
        
        if(renderEditable === true) _appendTodoEditor(todoElement);

        const title = document.createElement('span');
        title.textContent = todo.title;
        title.classList.add('todo-title');
        todoElement.appendChild(title);

        const description = document.createElement('span');
        description.textContent = todo.description;
        description.classList.add('todo-description');
        todoElement.appendChild(description);
  
        const duedate = document.createElement('span');
        duedate.textContent = todo.duedate;
        duedate.classList.add('todo-duedate');
        todoElement.appendChild(duedate);
  
        const priority = document.createElement('span');
        priority.textContent = todo.priority;
        priority.classList.add('todo-priority');
        todoElement.appendChild(priority);  
        
        todoArea.appendChild(todoElement);
      })
    }
  }

  function off() {
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].off('projectsUpdate', _renderProjects);

    projectArea.innerHTML = '';
    todoArea.innerHTML = '';

    projectArea = undefined;
    todoArea = undefined;
    renderEditable = undefined;
    firstInit = true;
    
    this.init = init;
    delete this.setRenderConfig;
    delete this.off;
  }

  function init(projectElement, todoElement, editable = true) {
    projectArea = projectElement;
    todoArea = todoElement;
    renderEditable = editable;
    _renderProjects();

    if(firstInit === true) {
      /*Putting Events code here allows events to be triggered only after init, 
      at the cost of creating a closure.*/
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].on('projectsUpdate', _renderProjects);

      //reuses this function to set options after init if desired.
      firstInit = false;
      this.setConfig = init;
      this.off = off;
    }
    delete this.init;
  }
  
  return {init}; //after init: {setConfig: init, off};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");




_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectRenderer.init(document.querySelector('.sidebar'), 
                     document.querySelector('.todos'),
                     true)

_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFromLocalStorage();

/*
Projects.find('something').addTodo('1')
Projects.find('something').addTodo('2')
Projects.find('something').addTodo('3')
Projects.find('something').addTodo('4')
Projects.find('something').addTodo('5')
Projects.find('something').addTodo('6')
Projects.find('something').addTodo('7')
Projects.find('something').addTodo('8')
Projects.find('something').addTodo('9')
Projects.find('something').addTodo('10')
Projects.find('something').addTodo('11')
Projects.find('something').addTodo('12')
Projects.find('something').addTodo('13')
Projects.find('something').addTodo('14')
Projects.find('something').addTodo('15')
Projects.find('something').addTodo('16')
Projects.find('something').addTodo('17')
Projects.find('something').addTodo('18')
Projects.find('something').addTodo('19')
Projects.find('something').addTodo('20')
Projects.find('something').addTodo('21')
Projects.find('something').addTodo('22')
Projects.find('something').addTodo('23')
Projects.find('something').addTodo('24')
Projects.find('something').addTodo('25')
Projects.find('something').addTodo('26')
Projects.find('something').addTodo('27')
Projects.find('something').addTodo('28')
Projects.find('something').addTodo('29')
Projects.find('something').addTodo('30')
*/

/* Testing projects:
Projects.add('name').find('name').addTodo('Change my name!', "Click Edit next to my project's name to change it! You may also remove the project, or add a new one from the sidebar while you're at it!", 'never', 'low')
Projects.add('something').find('something').addTodo("somethingTodo", 'this is something to do', 'never', 'low');
Projects.find('something').addTodo('somethingElseTodo', 'This is something else to do', 'never', 'low')
*/
//ToDo objects should have properties such as title, description, duedate, priority.
//Notes and checklist would be nice too.

//Pojects should hold lists of ToDo objects. There should be a default project
//users can add ToDo objects to. Users should be able to create new projects
//and choose which their todos go.

//separate application logic from DOM-Related stuff.

//Users should be able to: view all projects, view all todos in each project,
//expand a todo to see/edit, and delete Todos.

//May want to use date-fns.

//use local storage!
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGVBQWU7QUFDaEMsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN0a0J4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUMyQjs7O0FBR2hFLHNFQUFvQjtBQUNwQjtBQUNBOztBQUVBLGdGQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypHZW5lcmFsIExheW91dCovXFxyXFxuKiB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKnNpZGViYXIqL1xcclxcbi5zaWRlYmFyICB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0Z2FwOiAzcHg7XFxyXFxuXFxyXFxuXFx0bWF4LXdpZHRoOiAyNzVweDtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4O1xcclxcblxcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIzMCwgMjMxKTtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi8qYWRkIGZvcm0qL1xcclxcbi5wcm9qZWN0LWFkZCB7XFxyXFxuXFx0bWFyZ2luOiA1cHggNXB4IDVweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQtYnV0dG9uLCAucHJvamVjdC1hZGQtbGFiZWwge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC1pbnB1dCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypwcm9qZWN0IGxpc3Qgc3R5bGluZyovXFxyXFxuLnByb2plY3QtZWxlbWVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1heC13aWR0aDogMjVweDs7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXJlbW92ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXdlaWdodDogOTAwO1xcclxcblxcdG1heC13aWR0aDogMjVweDs7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUge1xcclxcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMjVweDtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUuZWRpdGFibGUge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyp0b2RvIHNlY3Rpb24qL1xcclxcbi50b2RvcyB7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRmbGV4OiA1O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypzb3J0IGJhciovXFxyXFxuLnNvcnQtYmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtcHJpb3JpdHksIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVsZW1lbnRzKi9cXHJcXG4udG9kby1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1wcmlvcml0eSwgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZS5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24uZWRpdGFibGUsIFxcclxcbi50b2RvLXByaW9yaXR5LmVkaXRhYmxlLCBcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LmVkaXRhYmxlLFxcclxcbi50b2RvLWR1ZWRhdGUuZWRpdGFibGUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIzMCwgMjMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVkaXRvciovXFxyXFxuLnRvZG8tZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXN1Ym1pdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxuXFx0Y29sb3I6IGdyZWVuO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4Qjs7QUFFQSxVQUFVO0FBQ1Y7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixPQUFPO0NBQ1AsUUFBUTs7Q0FFUixnQkFBZ0I7Q0FDaEIsYUFBYTs7Q0FFYixvQ0FBb0M7Q0FDcEMsaUNBQWlDO0FBQ2xDOztBQUVBLFdBQVc7QUFDWDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7OztBQUdBLHVCQUF1QjtBQUN2QjtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixVQUFVO0NBQ1YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7OztBQUdBLGVBQWU7QUFDZjtDQUNDLGFBQWE7Q0FDYixPQUFPO0NBQ1AsMkJBQTJCO0FBQzVCOzs7QUFHQSxXQUFXO0FBQ1g7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0NBQ3BDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Ozs7Q0FJQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLG9DQUFvQztBQUNyQzs7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTs7Q0FFZixnQkFBZ0I7Q0FDaEIsaUJBQWlCOztDQUVqQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qR2VuZXJhbCBMYXlvdXQqL1xcclxcbioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLypzaWRlYmFyKi9cXHJcXG4uc2lkZWJhciAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGdhcDogM3B4O1xcclxcblxcclxcblxcdG1heC13aWR0aDogMjc1cHg7XFxyXFxuXFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4vKmFkZCBmb3JtKi9cXHJcXG4ucHJvamVjdC1hZGQge1xcclxcblxcdG1hcmdpbjogNXB4IDVweCA1cHggMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWJ1dHRvbiwgLnByb2plY3QtYWRkLWxhYmVsIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQtaW5wdXQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qcHJvamVjdCBsaXN0IHN0eWxpbmcqL1xcclxcbi5wcm9qZWN0LWVsZW1lbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lZGl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHRmbGV4OiA1O1xcclxcblxcdG1heC13aWR0aDogMjI1cHg7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLmVkaXRhYmxlIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qdG9kbyBzZWN0aW9uKi9cXHJcXG4udG9kb3Mge1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qc29ydCBiYXIqL1xcclxcbi5zb3J0LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC10aXRsZSwgLnNvcnQtZGVzY3JpcHRpb24sIC5zb3J0LXByaW9yaXR5LCAuc29ydC1kdWVkYXRlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdHdpZHRoOiAyNSU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDNweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC10aXRsZSwgLnNvcnQtZGVzY3JpcHRpb24sIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWFkZCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qVG9kbyBFbGVtZW50cyovXFxyXFxuLnRvZG8tZWxlbWVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tcHJpb3JpdHksIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSwgLnRvZG8tZGVzY3JpcHRpb24sIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUuZWRpdGFibGUsIFxcclxcbi50b2RvLWRlc2NyaXB0aW9uLmVkaXRhYmxlLCBcXHJcXG4udG9kby1wcmlvcml0eS5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tZHVlZGF0ZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS5lZGl0YWJsZSxcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxufVxcclxcblxcclxcbi8qVG9kbyBFZGl0b3IqL1xcclxcbi50b2RvLWVkaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zdWJtaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcclxcblxcdGNvbG9yOiBncmVlbjtcXHJcXG5cXHRmb250LXdlaWdodDogOTAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgZXZlbnRzID0ge307XG5cbiAgZnVuY3Rpb24gb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmIChldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7b24sIG9mZiwgZW1pdCwgZ2V0IGxpc3QoKSB7cmV0dXJuIGV2ZW50c319O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8qIFBlb3BsZS5qc1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgUGVvcGxlID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcGVvcGxlID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGVvcGxlKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwZXJzb24gPT4gcGVvcGxlLnB1c2gocGVyc29uKSk7XG4gICAgRXZlbnRzLmVtaXQoJ3Blb3BsZUNoYW5nZWQnLCBwZW9wbGUpO1xuICB9XG5cbiAgcmV0dXJuIHthZGRQZW9wbGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xuKi9cblxuLyogU3RhdHMuanNcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBTdGF0cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXRzID0ge307XG5cbiAgRXZlbnRzLm9uKCdwZW9wbGVDaGFuZ2VkJywgc2V0UGVvcGxlKTtcblxuICBmdW5jdGlvbiBzZXRQZW9wbGUocGVvcGxlKSB7XG4gICAgc3RhdHMucGVvcGxlID0gcGVvcGxlLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XG4gICAgY29uc29sZS5sb2coc3RhdHMucGVvcGxlKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4qL1xuIiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHMuanNcIjtcblxuLyogIFxuICAgIFRoaXMgbW9kdWxlIGV4cG9ydHMgYSAnUHJvamVjdHMnIG9iamVjdCB0aGF0IGtlZXBzIFxuICAgIHRyYWNrIG9mIFByb2plY3RzIGFuZCB0aGVpciBUb2Rvcy5cblxuICAgIE5vdGU6XG4gICAgICBQcm9qZWN0cy5hZGQgJiBQcm9qZWN0cy5yZW1vdmUgcmV0dXJuIHRoZSBQcm9qZWN0cyBtb2R1bGUgaXRzZWxmLlxuICAgICAgLmFkZFRvZG8sIC5yZW1vdmVUb2RvLCBhbmQgLmVkaXQgcmV0dXJuIHRoZSBwcm9qZWN0IHRoZSB0b2RvIGJlbG9uZ3MgdG8uXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHByb2plY3Rzfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIENyZWF0ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QuYWRkKCdwcm9qZWN0TmFtZScpXG5cbiAgICAgIFJldHJpdmUgdGhlbSB3aXRoIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKVxuICAgICAgb3IgdXNlIFByb2plY3RzLmxpc3QgZm9yIGFuIGFycmF5IG9mIGFsbCBwcm9qZWN0c1xuICAgICAgXG4gICAgICBZb3UgbWF5IHJlbmFtZSBhIHByb2plY3QgYnkgcmV0cml2aW5nIGl0IHRocm91Z2ggb25lIG9mIHRoZSBhYm92ZSBtZXRob2RzOlxuICAgICAgICBFeDogUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5uYW1lID0gJ25ld05hbWUnXG4gICAgICBQcm9qZWN0cyBtYXkgbm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzLlxuXG4gICAgICBSZW1vdmUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LnJlbW92ZSgncHJvamVjdE5hbWUnKVxuXG4gICAgfn5+fn5+fn5+fn5+fn5+fn5+fkFkZCwgcmV0cml2ZSwgYW5kIHJlbW92ZSB0b2Rvc35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4gICAgICBZb3UgbWF5IGluaXRpYXRlIGEgUHJvamVjdCB3aXRoIGEgdG9kbyBsaWtlIHNvOlxuICAgICAgICBQcm9qZWN0cy5hZGQoJ25ld1Byb2plY3QnKS5maW5kKCduZXdQcm9qZWN0JykuYWRkVG9kbygnVGl0bGUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEdWVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JylcbiAgICAgIFxuICAgICAgVG8gYWRkIHRvZG9zIGFmdGVyIGNyZWF0aW9uIHJldHJpZXZlIGFuIG9iamVjdCBhbmQgdXNlIGl0J3MgYWRkVG9kbyBtZXRob2RcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5hZGRUb2RvKC4uLik7XG5cbiAgICAgIFJldHJpdmUgdG9kb3Mgd2l0aCAuZmluZFRvZG8oJ3RvZG9OYW1lJykgb3IgLmxpc3RUb2Rvc1xuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgZWRpdCBhIHRvZG8gdXNpbmcgdGhlIGVkaXQgbWV0aG9kIG9uIFRvZG8gb2JqZWN0cy4gVG9kb3MgbWF5IG5vdCBcbiAgICAgIGhhdmUgaWRlbnRpY2FsIHRpdGxlcyBpbiB0aGUgc2FtZSBwcm9qZWN0OlxuICAgICAgICBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpLmVkaXQoJ3RpdGxlJywgJ25ld1RpdGxlJylcbiovXG5cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSk7XG4gICAgaWYoc3RvcmFnZSA9PT0gbnVsbCkgcmV0dXJuOyAvL3JldHVybnMgaWYgbG9jYWxTdG9yYWdlIGhhc24ndCBiZWVuIHVzZWRcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IHN0b3JhZ2VbaV07XG4gICAgICBhZGQocHJvamVjdC5uYW1lKTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaW5kKHByb2plY3QubmFtZSkuYWRkVG9kbyhwcm9qZWN0Lmxpc3RUb2Rvc1tpXS50aXRsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZHVlZGF0ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLnByaW9yaXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgXG4gIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flByb2plY3QgQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgZnVuY3Rpb24gYWRkKG5hbWUpIHtcbiAgICBpZihuYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuYW1lKSkgeyAvL3JldHVybnMgaWYgc3RyaW5nIGlzIGVtcHR5IG9yIG9ubHkgY29udGFpbnMgd2hpdGVzcGFjZVxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpO1xuICAgIH0gZWxzZSBpZihmaW5kKG5hbWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcbiAgICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICcnKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IHRpdGxlID09PSAnJykge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgfWVsc2UgaWYoZmluZFRvZG8odGl0bGUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSB0aGlzLm5hbWU7XG5cbiAgICAgIGZ1bmN0aW9uIGVkaXQoZmllbGQsIGNoYW5nZSkge1xuICAgICAgICBpZihmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGNoYW5nZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdNaXNzaW5nIGFyZ3VtZW50cyEnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3RpdGxlJykge1xuXG4gICAgICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKTtcbiAgICAgICAgICB9ZWxzZSBpZihmaW5kVG9kbyhjaGFuZ2UpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZSA9IGNoYW5nZTtcblxuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZHVlZGF0ZScpIHtcbiAgICAgICAgICBkdWVkYXRlID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICBwcmlvcml0eSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ0ZpZWxkIGRvZXMgbm90IGV4aXN0IScpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgcmV0dXJuIGZpbmQocGFyZW50UHJvamVjdCk7XG4gICAgICB9XG4gICAgICAvL1RvZG8gb2JqZWN0XG4gICAgICBjb25zdCB0b2RvID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LCBcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sIFxuICAgICAgICBnZXQgZHVlZGF0ZSgpIHtyZXR1cm4gZHVlZGF0ZX0sIFxuICAgICAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHByaW9yaXR5fSxcbiAgICAgICAgZ2V0IHBhcmVudFByb2plY3QoKSB7cmV0dXJuIHBhcmVudFByb2plY3R9LFxuICAgICAgICBlZGl0XG4gICAgICB9KTtcbiAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIFxuICAgIC8vb3RoZXIgcHJvamVjdCBjcnVkXG4gICAgZnVuY3Rpb24gZmluZFRvZG8odGl0bGUpIHtcbiAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdC5maW5kKCB0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8odGl0bGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kbyBub3QgZm91bmQhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9Qcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBPYmplY3QuZnJlZXplKHsgXG4gICAgICBnZXQgbmFtZSgpIHtyZXR1cm4gbmFtZX0sIFxuICAgICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZihuZXdOYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuZXdOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKTtcbiAgICAgICAgfSBlbHNlIGlmKGZpbmQobmV3TmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0IGxpc3RUb2RvcygpIHtyZXR1cm4gWy4uLnRvZG9MaXN0XX0sXG4gICAgICBhZGRUb2RvLFxuICAgICAgZmluZFRvZG8sXG4gICAgICByZW1vdmVUb2RvXG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cblxuICAvL290aGVyIG1vZHVsZSBjcnVkXG4gIGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7IC8vcmV0dXJucyBpZiBmaW5kSW5kZXggZG9lc24ndCBmaW5kIGEgbWF0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKG5hbWUpIHtcbiAgICBpZihuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9qZWN0c0xpc3QuZmluZCggcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgLy9Nb2R1bGUgb2JqZWN0XG4gIHJldHVybiB7XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF07XG4gICAgfSxcbiAgICBhZGQsXG4gICAgcmVtb3ZlLFxuICAgIGZpbmQsXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZVxuICB9XG59KSgpO1xuXG5cbi8qUmVuZGVycyBQcm9qZWN0cyBvbiB0aGUgd2VicGFnZS4gXG5Vc2UgUHJvamVjdFJlbmRlcmVyLmluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSkgdG8gc2V0IHRoZSBhcmVhc1xudG8gcmVuZGVyIHRvLCBhbmQgd2hldGhlciB0aGV5IG1heSBiZSBlZGl0ZWQuIFRvZG9zIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGVpclxucmVzcGVjdGl2ZSBwcm9qZWN0cyBhcmUgY2xpY2tlZC5cbklmIHlvdSdkIGxpa2UgdG8gb25seSByZW5kZXIgcHJvamVjdCBuYW1lcywgeW91IG1heSBwYXNzIGEgZHVtbXkgbm9uLW9iamVjdCBcbnZhbHVlIGFzIHRoZSB0b2RvRWxlbWVudC4gSXQgd2lsbCBmYWlsIHF1aWV0bHkgd2l0aCBhIGNvbnNvbGUgbWVzc2FnZSBieVxuZGVmYXVsdC5cblxuQWZ0ZXIgaW5pdCwgUHJvamVjdFJlbmRlcmVyIHdpbGwgaGF2ZSB0d28gbWV0aG9kcyBhdmFpbGFibGUgdG8gaXQ6XG5Qcm9qZWN0UmVuZGVyZXIuc2V0Q29uZmlnOiBVc2VkIGV4YWN0bHkgdGhlIHNhbWUgYXMgUHJvamVjdFJlbmRlcmVyLmluaXRcblByb2plY3RSZW5kZXJlci5vZmY6IHJlc2V0cyBQcm9qZWN0UmVuZGVyZXIgdG8gaXQncyBvcmlnaW5hbCBzdGF0ZSBhbmQgY2xlYXJzIFxuZWxlbWVudHMgaW1tZWRpYXRlbHkuICovXG5cblxuY29uc3QgUHJvamVjdFJlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdEFyZWE7XG4gIGxldCB0b2RvQXJlYTtcbiAgbGV0IHJlbmRlckVkaXRhYmxlO1xuICBsZXQgZmlyc3RJbml0ID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEFkZGVyKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZCcpO1xuICAgIHByb2plY3RBcmVhLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWxhYmVsJyk7XG4gICAgYWRkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbCk7XG5cbiAgICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7O1xuICAgIGFkZElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWlucHV0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWJ1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiBQcm9qZWN0cy5hZGQoYWRkSW5wdXQudmFsdWUpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdCcpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJztcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnRuKVxuXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gZS50YXJnZXQubmV4dFNpYmxpbmdcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICBcbiAgICAgIC8vY2hhbmdlIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuXG4gICAgICAvL2FkZCByZW1vdmUgZWxlbWVudFxuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUnKTtcbiAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICctJztcbiAgICAgIHByb2plY3RFbGVtZW50Lmluc2VydEJlZm9yZShyZW1vdmVCdG4sIHByb2plY3ROYW1lRWxlbWVudCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBQcm9qZWN0cy5yZW1vdmUocHJvamVjdE5hbWUpKTtcbiAgICAgIFxuICAgICAgLy9leGl0IGVkaXRvciBhbmQgYXBwbHkgYW55IG5hbWUgY2hhbmdlc1xuICAgICAgY29uc3QgZXhpdEVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgICAgIGVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmVCdG4pXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICAgICAgICBcbiAgICAgICAgaWYocHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ICE9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubmFtZSA9IG5ld05hbWU7XG5cbiAgICAgICAgICAvL2NoZWNrcyBpZiBvbGQgcHJvamVjdCBuYW1lIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tdXN0IHJlbW92ZSBsaXN0ZW5lciwgb3Igd2lsbCBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSByZW1vdmVCdG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgICB9XG5cbiAgICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKTtcbiAgICB9XG4gICAgLy9IaWRlcyBlZGl0IGJ1dHRvbiBhbmQgcHJvdmlkZXMgYWRkaXRpb25hbCBvcHRpb25zIHVudGlsIHVzZXIgbW92ZXMgYXdheVxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdClcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJQcm9qZWN0cygpIHtcbiAgICBpZih0eXBlb2YgcHJvamVjdEFyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiBwcm9qZWN0QXJlYSBsZWZ0IHVuZGVmaW5lZCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RBZGRlcigpO1xuXG4gICAgUHJvamVjdHMubGlzdC5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKTtcbiAgICAgIFxuICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KTtcblxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICBcbiAgICAgIC8vcmVuZGVycyB0b2RvcyBvbiBwcm9qZWN0IGNsaWNrXG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoIW5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YWJsZScpKSB7IC8vcHJldmVudHMgc3dpdGNoaW5nIGluIGVkaXRvciBtb2RlXG4gICAgICAgICAgX3JlbmRlclRvZG9zKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpO1xuICAgICAgICBwcm9qZWN0QWRkZXIuYWZ0ZXIocHJvamVjdEVsZW1lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJlYS5wcmVwZW5kKHByb2plY3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9BZGRlcihzb3J0QmFyKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtYWRkJ1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFNvcnRCYXIoKSB7XG4gICAgY29uc3Qgc29ydEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvcnRCYXIuY2xhc3NMaXN0LmFkZCgnc29ydC1iYXInKTtcblxuICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIpXG5cbiAgICBjb25zdCBzb3J0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29ydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtdGl0bGUnKTtcbiAgICBzb3J0VGl0bGUudGV4dENvbnRlbnQgPSAndGl0bGUnO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoc29ydFRpdGxlKVxuXG4gICAgY29uc3Qgc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IHNvcnREdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZHVlZGF0ZScpXG4gICAgc29ydER1ZWRhdGUudGV4dENvbnRlbnQgPSAnZHVlZGF0ZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RHVlZGF0ZSlcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1wcmlvcml0eScpO1xuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpXG5cbiAgICB0b2RvQXJlYS5hcHBlbmRDaGlsZChzb3J0QmFyKTtcbiAgfVxuXG4gIC8vdGhpcyBmdW5jdGlvbiBzZWVtcyBhIGJpdCBtZXNzeVxuICBmdW5jdGlvbiBfYXBwZW5kVG9kb0VkaXRvcih0b2RvRWxlbWVudCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgY29uc3QgZHVlZGF0ZUVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kdWVkYXRlJyk7XG4gICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wcmlvcml0eScpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgZHVlZGF0ZSA9IGR1ZWRhdGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkdWVkYXRlRWxlbWVudC50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgbWFrZVRvZG9FZGl0YWJsZSA9IChib29sKSA9PiB7XG4gICAgICAgIHRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIGJvb2wpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBib29sKTtcbiAgICAgIFxuICAgICAgICBsZXQgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpO1xuICAgICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlZGF0ZScpXG4gICAgICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG5cbiAgICAgICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJztcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcbiAgICAgIFxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpXG4gICAgICBcbiAgICAgIFxuICAgICAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG4gICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJylcbiAgICAgICAgXG4gICAgICAgICAgZHVlZGF0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgICAgICB0b2RvRWxlbWVudC5pbnNlcnRCZWZvcmUoZHVlZGF0ZUlucHV0LCBwcmlvcml0eUVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJylcbiAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKVxuICAgICAgICBcbiAgICAgICAgICBkdWVkYXRlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICAgICAgcHJpb3JpdHlFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgICAgXG4gICAgICAgICAgLy9tdXN0IHVwZGF0ZSBlbGVtZW50cyB0byByZW1vdmUgdGhlbT9cbiAgICAgICAgICBkdWVkYXRlSW5wdXQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIHByaW9yaXR5U2VsZWN0ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgdG9kb0VsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlZGF0ZUlucHV0KVxuICAgICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUNoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICAgICAgXG4gICAgICAgICAgLy9pbXBvcnRhbnQ6IGhvdyB0byBnZXQgdmFsdWVzXG4gICAgICAgICAgY29uc29sZS5sb2coZHVlZGF0ZUlucHV0LnZhbHVlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbcHJpb3JpdHlTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBleGl0RWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgbWFrZVRvZG9FZGl0YWJsZShmYWxzZSlcbiAgICAgICAgdG9kb0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZWRhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZHVlZGF0ZTtcbiAgICAgICAgcHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG5cbiAgICAgICAgdG9kb0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1Ym1pdENoYW5nZXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkdWVkYXRlSW5wdXQgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgIGNvbnN0IGR1ZWRhdGVWYWx1ZSA9IGR1ZWRhdGVJbnB1dC52YWx1ZTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9uc1twcmlvcml0eVNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG5cbiAgICAgICAgdG9kb0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3VibWl0QnRuKTtcbiAgICAgICAgbWFrZVRvZG9FZGl0YWJsZShmYWxzZSlcblxuICAgICAgICAvL3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICAvL2Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGR1ZWRhdGVWYWx1ZTtcbiAgICAgICAgcHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID0gcHJpb3JpdHlPcHRpb247XG5cbiAgICAgICAgdG9kb0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgICB9O1xuICAgICAgXG4gICAgICBtYWtlVG9kb0VkaXRhYmxlKHRydWUpXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIHRvZG9FbGVtZW50LnByZXBlbmQoc3VibWl0QnRuKTtcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdENoYW5nZXMpO1xuXG4gICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbmRlclRvZG9zKHByb2plY3ROYW1lKSB7XG4gICAgaWYodHlwZW9mIHRvZG9BcmVhICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RSZW5kZXJlcjogdG9kb0FyZWEgbGVmdCB1bmRlZmluZWQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubGlzdFRvZG9zO1xuXG4gICAgX2FwcGVuZFNvcnRCYXIoKTtcbiAgXG4gICAgaWYodG9kb3MubGVuZ3RoID4gMCkge1xuICBcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWxlbWVudCcpO1xuICAgICAgICBcbiAgICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZWRhdGU7XG4gICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7ICBcbiAgICAgICAgXG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2ZmKCkge1xuICAgIEV2ZW50cy5vZmYoJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKTtcblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgdG9kb0FyZWEgPSB1bmRlZmluZWQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgZmlyc3RJbml0ID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIGRlbGV0ZSB0aGlzLnNldFJlbmRlckNvbmZpZztcbiAgICBkZWxldGUgdGhpcy5vZmY7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUgPSB0cnVlKSB7XG4gICAgcHJvamVjdEFyZWEgPSBwcm9qZWN0RWxlbWVudDtcbiAgICB0b2RvQXJlYSA9IHRvZG9FbGVtZW50O1xuICAgIHJlbmRlckVkaXRhYmxlID0gZWRpdGFibGU7XG4gICAgX3JlbmRlclByb2plY3RzKCk7XG5cbiAgICBpZihmaXJzdEluaXQgPT09IHRydWUpIHtcbiAgICAgIC8qUHV0dGluZyBFdmVudHMgY29kZSBoZXJlIGFsbG93cyBldmVudHMgdG8gYmUgdHJpZ2dlcmVkIG9ubHkgYWZ0ZXIgaW5pdCwgXG4gICAgICBhdCB0aGUgY29zdCBvZiBjcmVhdGluZyBhIGNsb3N1cmUuKi9cbiAgICAgIEV2ZW50cy5vbigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICAvL3JldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDb25maWcgPSBpbml0O1xuICAgICAgdGhpcy5vZmYgPSBvZmY7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXQ7XG4gIH1cbiAgXG4gIHJldHVybiB7aW5pdH07IC8vYWZ0ZXIgaW5pdDoge3NldENvbmZpZzogaW5pdCwgb2ZmfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuZXhwb3J0IHtQcm9qZWN0UmVuZGVyZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4vc3R5bGVzLmNzcydcbmltcG9ydCBQcm9qZWN0cywge1Byb2plY3RSZW5kZXJlcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzLmpzJztcblxuXG5Qcm9qZWN0UmVuZGVyZXIuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLCBcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLFxuICAgICAgICAgICAgICAgICAgICAgdHJ1ZSlcblxuUHJvamVjdHMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4vKlxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyJylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzMnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnNCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc1JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzYnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnNycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc4JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzknKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTAnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTEnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTInKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTMnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTQnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTUnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTYnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTcnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTgnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMTknKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjAnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjEnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjInKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjMnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjQnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjUnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjYnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjcnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjgnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMjknKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMzAnKVxuKi9cblxuLyogVGVzdGluZyBwcm9qZWN0czpcblByb2plY3RzLmFkZCgnbmFtZScpLmZpbmQoJ25hbWUnKS5hZGRUb2RvKCdDaGFuZ2UgbXkgbmFtZSEnLCBcIkNsaWNrIEVkaXQgbmV4dCB0byBteSBwcm9qZWN0J3MgbmFtZSB0byBjaGFuZ2UgaXQhIFlvdSBtYXkgYWxzbyByZW1vdmUgdGhlIHByb2plY3QsIG9yIGFkZCBhIG5ldyBvbmUgZnJvbSB0aGUgc2lkZWJhciB3aGlsZSB5b3UncmUgYXQgaXQhXCIsICduZXZlcicsICdsb3cnKVxuUHJvamVjdHMuYWRkKCdzb21ldGhpbmcnKS5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKFwic29tZXRoaW5nVG9kb1wiLCAndGhpcyBpcyBzb21ldGhpbmcgdG8gZG8nLCAnbmV2ZXInLCAnbG93Jyk7XG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCdzb21ldGhpbmdFbHNlVG9kbycsICdUaGlzIGlzIHNvbWV0aGluZyBlbHNlIHRvIGRvJywgJ25ldmVyJywgJ2xvdycpXG4qL1xuLy9Ub0RvIG9iamVjdHMgc2hvdWxkIGhhdmUgcHJvcGVydGllcyBzdWNoIGFzIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkuXG4vL05vdGVzIGFuZCBjaGVja2xpc3Qgd291bGQgYmUgbmljZSB0b28uXG5cbi8vUG9qZWN0cyBzaG91bGQgaG9sZCBsaXN0cyBvZiBUb0RvIG9iamVjdHMuIFRoZXJlIHNob3VsZCBiZSBhIGRlZmF1bHQgcHJvamVjdFxuLy91c2VycyBjYW4gYWRkIFRvRG8gb2JqZWN0cyB0by4gVXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuLy9hbmQgY2hvb3NlIHdoaWNoIHRoZWlyIHRvZG9zIGdvLlxuXG4vL3NlcGFyYXRlIGFwcGxpY2F0aW9uIGxvZ2ljIGZyb20gRE9NLVJlbGF0ZWQgc3R1ZmYuXG5cbi8vVXNlcnMgc2hvdWxkIGJlIGFibGUgdG86IHZpZXcgYWxsIHByb2plY3RzLCB2aWV3IGFsbCB0b2RvcyBpbiBlYWNoIHByb2plY3QsXG4vL2V4cGFuZCBhIHRvZG8gdG8gc2VlL2VkaXQsIGFuZCBkZWxldGUgVG9kb3MuXG5cbi8vTWF5IHdhbnQgdG8gdXNlIGRhdGUtZm5zLlxuXG4vL3VzZSBsb2NhbCBzdG9yYWdlISJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==