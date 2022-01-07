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
___CSS_LOADER_EXPORT___.push([module.id, "/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(253, 80, 80);\r\n}\r\n\r\n.todo-element.removeable:hover .todo-title,\r\n.todo-element.removeable:hover .todo-description,\r\n.todo-element.removeable:hover .todo-duedate {\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid rgb(175, 175, 175);\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;CACC,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,WAAW;CACX,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA,UAAU;AACV;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,OAAO;CACP,QAAQ;CACR,gBAAgB;CAChB,aAAa;CACb,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA,WAAW;AACX;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;;AAGA,uBAAuB;AACvB;CACC,aAAa;CACb,iBAAiB;CACjB,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,OAAO;CACP,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,UAAU;CACV,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,OAAO;CACP,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;AACnB;;;AAGA,eAAe;AACf;CACC,aAAa;CACb,OAAO;CACP,2BAA2B;AAC5B;;;AAGA,WAAW;AACX;CACC,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,UAAU;AACX;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,8BAA8B;CAC9B,oCAAoC;CACpC,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;;;CAGC,6BAA6B;AAC9B;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,0CAA0C;AAC3C;;AAEA;;;;CAIC,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;;CAEC,oCAAoC;AACrC;;AAEA,cAAc;AACd;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;;CAEf,gBAAgB;CAChB,iBAAiB;;CAEjB,YAAY;CACZ,gBAAgB;AACjB","sourcesContent":["/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(253, 80, 80);\r\n}\r\n\r\n.todo-element.removeable:hover .todo-title,\r\n.todo-element.removeable:hover .todo-description,\r\n.todo-element.removeable:hover .todo-duedate {\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid rgb(175, 175, 175);\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}"],"sourceRoot":""}]);
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
      if(title === undefined || /^\s*$/.test(title)) {
        return alert('Todos must have a title!');
      }else if(findTodo(title) !== undefined) {
        return alert('Todos cannot have identical titles');
      }

      const parentProject = this.name;

      function edit(field, change) {
        if(field === undefined || change === undefined) {
          return alert('Missing arguments!');
        } else if (field === 'title') {
          if(title === undefined || /^\s*$/.test(title)) {
            return alert('Todos must have a title!');
          }else if(findTodo(change) !== undefined && change !== title) {
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
        } else if(find(newName) !== undefined && newName !== name) {
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
    form.setAttribute('autocomplete', 'off')
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

  function _appendTodoRemover(sortBar) {
    const removeBtn = document.createElement('button')
    removeBtn.classList = 'sort-remove'
    removeBtn.textContent = '-'
    sortBar.appendChild(removeBtn)

    const removeElement = (e) => {
      const parentElement = e.target.parentElement
      const parentProject = parentElement.getAttribute('data-project')
      const todoTitle = parentElement.querySelector('.todo-title').textContent;
      console.log(parentProject, todoTitle)

      Projects.find(parentProject).removeTodo(todoTitle);
      parentElement.remove();
      console.log('removed!')
    }

    const startRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element');
      todoElements.forEach(element => {
        element.addEventListener('click', removeElement)
        element.classList.add('removeable');
      });

      removeBtn.classList.add('active');
      removeBtn.addEventListener('click', exitRemoveEditor, {once: true})
    }

    const exitRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element');
      todoElements.forEach(element => {
        element.removeEventListener('click', removeElement)
        element.classList.remove('removeable');
        
      });

      removeBtn.classList.remove('active');
      removeBtn.addEventListener('click', startRemoveEditor, {once: true})
    }

    removeBtn.addEventListener('click', startRemoveEditor, {once: true})
  }

  function _appendSortBar() {
    const sortBar = document.createElement('div');
    sortBar.classList.add('sort-bar');

    if(renderEditable === true) {
      _appendTodoAdder(sortBar)
      _appendTodoRemover(sortBar)
    }

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

  function _makeTodoEditable(Todo, bool) {
    Todo.title.element.setAttribute('contentEditable', bool);
    Todo.description.element.setAttribute('contentEditable', bool);

    let duedateInput = document.createElement('input');
    duedateInput.classList.add('todo-duedate', 'editable');
    duedateInput.setAttribute('for', 'duedate')
    duedateInput.setAttribute('type', 'date')
    duedateInput.setAttribute('value', Todo.duedate.text)
    
    let prioritySelect = document.createElement('select');
    prioritySelect.classList.add('todo-duedate', 'editable');

    const lowPriority = document.createElement('option')
    lowPriority.textContent = 'low';
    const mediumPriority = document.createElement('option');
    mediumPriority.textContent = 'medium';
    const highPriority = document.createElement('option');
    highPriority.textContent = 'high';

    //sets default selection to be the same as current value
    [lowPriority, mediumPriority, highPriority].forEach(element => {
      if(element.textContent === Todo.priority.text) {
        element.setAttribute('selected', '');
      }
    })

    prioritySelect.append(lowPriority, mediumPriority, highPriority)


    if(bool === true) {
      Todo.editBtn.setAttribute('hidden', '')
      Todo.title.element.classList.add('editable')
      Todo.description.element.classList.add('editable')

      Todo.duedate.element.setAttribute('hidden', '')
      Todo.element.insertBefore(duedateInput, Todo.priority.element);

      Todo.priority.element.setAttribute('hidden', '')
      Todo.element.appendChild(prioritySelect)
    } else {
      Todo.editBtn.removeAttribute('hidden');
      Todo.title.element.classList.remove('editable')
      Todo.description.element.classList.remove('editable')

      Todo.duedate.element.removeAttribute('hidden')
      Todo.priority.element.removeAttribute('hidden')

      //must update elements to remove them?
      duedateInput = Todo.element.querySelector('input');
      prioritySelect = Todo.element.querySelector('select');
      Todo.element.removeChild(duedateInput)
      Todo.element.removeChild(prioritySelect);
    }
  }

  function _abortTodoEdit(Todo) {
    _makeTodoEditable(Todo, false)
    Todo.element.removeChild(Todo.submitBtn);

    Todo.title.element.textContent = Todo.title.text;
    Todo.description.element.textContent = Todo.description.text;
    Todo.duedate.element.textContent = Todo.duedate.text;
    Todo.priority.element.textContent = Todo.priority.text;
  }

  function _submitTodoChanges(Todo) {
    const duedateInput = Todo.element.querySelector('input')
    const duedateValue = duedateInput.value;

    const prioritySelect = Todo.element.querySelector('select')
    const priorityOption = prioritySelect.options[prioritySelect.selectedIndex].text

    //compares current text to text when edit was initiated
    if( Todo.title.text === Todo.title.element.textContent &&
        Todo.description.text === Todo.description.element.textContent &&
        Todo.duedate.text === duedateValue &&
        Todo.priority.text === priorityOption
      ) {
      _abortTodoEdit(Todo);
    } else {
      const parentProject = Todo.element.getAttribute('data-project')
      const title = Todo.title.text;
      const newTitle = Todo.title.element.textContent;
      const newDescription = Todo.description.element.textContent;
      const newDuedate = duedateValue;
      const newPriority = priorityOption;
      let titleChanged

      if(Todo.title.element.textContent !== Todo.title.text) {
        Projects.find(parentProject).findTodo(title).edit('title', newTitle);
        //checks if old todo title exists, and resets textContent if still does
        if(typeof Projects.find(parentProject).findTodo(title) === 'object') {
          Todo.title.element.textContent = Todo.title.text;
          titleChanged = false;
        } else {
          titleChanged = true;
        }
      }

      const todoObj = (titleChanged) ? 
                       Projects.find(parentProject).findTodo(newTitle) : 
                       Projects.find(parentProject).findTodo(title);

      todoObj.edit('description', newDescription)
      todoObj.edit('duedate', newDuedate)
      todoObj.edit('priority', newPriority)
      
      Todo.element.removeChild(Todo.submitBtn);
      _makeTodoEditable(Todo, false)

      Todo.duedate.element.textContent = newDuedate;
      Todo.priority.element.textContent = newPriority;
      console.log(todoObj);
    }
  };

  //this function seems a bit messy
  function _appendTodoEditor(todoElement) {
    const editBtn = document.createElement('button');
    editBtn.classList.add('todo-edit');
    editBtn.textContent = '✎';
    todoElement.appendChild(editBtn);

    editBtn.addEventListener('click', (e) => {
      //Makes the entire list of elements easier to pass around to other functions
      const Todo = {
        element: e.target.parentElement, //the entire todo parent element
        editBtn: e.target,
        title: {
          element: e.target.nextSibling, 
          text: e.target.nextSibling.textContent
        },
        description: {
          element: e.target.parentElement.children[2], 
          text: e.target.parentElement.children[2].textContent
        },
        duedate: {
          element: e.target.parentElement.children[3], 
          text: e.target.parentElement.children[3].textContent
        },
        priority: {
          element: e.target.parentElement.children[4], 
          text: e.target.parentElement.children[4].textContent
        }
      }
      
      _makeTodoEditable(Todo, true)

      Todo.submitBtn = document.createElement('button');
      Todo.submitBtn.classList.add('todo-submit');
      Todo.submitBtn.textContent = '✓';
      Todo.element.prepend(Todo.submitBtn);

      const submitHandler = () => _submitTodoChanges(Todo);
      Todo.submitBtn.addEventListener('click', submitHandler, {once: true});
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
        todoElement.setAttribute('data-project', todo.parentProject)
        
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

if(localStorage.getItem('projectsList') === '[]') {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].add('New Project').find('New Project').addTodo(
    'Start making your todo lists!', 
    `Open the sidebar to the left by hovering over it.\n` + 
    `Add new projects by typing their name and pressing enter.\n` +
    `Use the pencil icons to edit projects and todos!`, 
    'never', 
    'low'
  )
} else {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFromLocalStorage();
}

//finds and clicks the first project in the project list to render it's todos
document.querySelector('.project-name').dispatchEvent(
  new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSx1REFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHVEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDhEQUE4RCxXQUFXO0FBQ3pFOztBQUVBLDREQUE0RCxXQUFXO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsV0FBVztBQUMxRSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGVBQWU7QUFDaEMsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNucUJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUMyQjs7O0FBR2hFLHNFQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnRUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsZ0ZBQTRCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKkdlbmVyYWwgTGF5b3V0Ki9cXHJcXG4qIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qc2lkZWJhciovXFxyXFxuLnNpZGViYXIgIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDNweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI3NXB4O1xcclxcblxcdHBhZGRpbmc6IDE1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLyphZGQgZm9ybSovXFxyXFxuLnByb2plY3QtYWRkIHtcXHJcXG5cXHRtYXJnaW46IDVweCA1cHggNXB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC1idXR0b24sIC5wcm9qZWN0LWFkZC1sYWJlbCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWlucHV0IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnByb2plY3QgbGlzdCBzdHlsaW5nKi9cXHJcXG4ucHJvamVjdC1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogbm93cmFwO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIyNXB4O1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnRvZG8gc2VjdGlvbiovXFxyXFxuLnRvZG9zIHtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnNvcnQgYmFyKi9cXHJcXG4uc29ydC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtcHJpb3JpdHksIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtcmVtb3ZlLmFjdGl2ZSB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVsZW1lbnRzKi9cXHJcXG4udG9kby1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDVweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcblxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgODAsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWxlbWVudC5yZW1vdmVhYmxlOmhvdmVyIC50b2RvLXRpdGxlLFxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciAudG9kby1kZXNjcmlwdGlvbixcXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tcHJpb3JpdHksIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDE3NSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLmVkaXRhYmxlLCBcXHJcXG4udG9kby1kZXNjcmlwdGlvbi5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsIFxcclxcbi50b2RvLWR1ZWRhdGUuZWRpdGFibGUge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsXFxyXFxuLnRvZG8tZHVlZGF0ZS5lZGl0YWJsZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvZG8gRWRpdG9yKi9cXHJcXG4udG9kby1lZGl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc3VibWl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG5cXHRjb2xvcjogZ3JlZW47XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCO0FBQ2pCO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsdUJBQXVCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixvQ0FBb0M7Q0FDcEMsaUNBQWlDO0FBQ2xDOztBQUVBLFdBQVc7QUFDWDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7OztBQUdBLHVCQUF1QjtBQUN2QjtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixVQUFVO0NBQ1YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixPQUFPO0NBQ1AsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7OztBQUdBLGVBQWU7QUFDZjtDQUNDLGFBQWE7Q0FDYixPQUFPO0NBQ1AsMkJBQTJCO0FBQzVCOzs7QUFHQSxXQUFXO0FBQ1g7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG9DQUFvQztDQUNwQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFFQTs7O0NBR0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsMENBQTBDO0FBQzNDOztBQUVBOzs7O0NBSUMsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxvQ0FBb0M7QUFDckM7O0FBRUEsY0FBYztBQUNkO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7O0NBRWYsZ0JBQWdCO0NBQ2hCLGlCQUFpQjs7Q0FFakIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkdlbmVyYWwgTGF5b3V0Ki9cXHJcXG4qIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qc2lkZWJhciovXFxyXFxuLnNpZGViYXIgIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDNweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI3NXB4O1xcclxcblxcdHBhZGRpbmc6IDE1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLyphZGQgZm9ybSovXFxyXFxuLnByb2plY3QtYWRkIHtcXHJcXG5cXHRtYXJnaW46IDVweCA1cHggNXB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC1idXR0b24sIC5wcm9qZWN0LWFkZC1sYWJlbCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWlucHV0IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnByb2plY3QgbGlzdCBzdHlsaW5nKi9cXHJcXG4ucHJvamVjdC1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogbm93cmFwO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIyNXB4O1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnRvZG8gc2VjdGlvbiovXFxyXFxuLnRvZG9zIHtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnNvcnQgYmFyKi9cXHJcXG4uc29ydC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtcHJpb3JpdHksIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtcmVtb3ZlLmFjdGl2ZSB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVsZW1lbnRzKi9cXHJcXG4udG9kby1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDVweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcblxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgODAsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWxlbWVudC5yZW1vdmVhYmxlOmhvdmVyIC50b2RvLXRpdGxlLFxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciAudG9kby1kZXNjcmlwdGlvbixcXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tcHJpb3JpdHksIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDE3NSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLmVkaXRhYmxlLCBcXHJcXG4udG9kby1kZXNjcmlwdGlvbi5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsIFxcclxcbi50b2RvLWR1ZWRhdGUuZWRpdGFibGUge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsXFxyXFxuLnRvZG8tZHVlZGF0ZS5lZGl0YWJsZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvZG8gRWRpdG9yKi9cXHJcXG4udG9kby1lZGl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc3VibWl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG5cXHRjb2xvcjogZ3JlZW47XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IGV2ZW50cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge29uLCBvZmYsIGVtaXQsIGdldCBsaXN0KCkge3JldHVybiBldmVudHN9fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcblxuXG4vKiBQZW9wbGUuanNcblxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFBlb3BsZSA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHBlb3BsZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFBlb3BsZShhcnJheSkge1xuICAgIGFycmF5LmZvckVhY2gocGVyc29uID0+IHBlb3BsZS5wdXNoKHBlcnNvbikpO1xuICAgIEV2ZW50cy5lbWl0KCdwZW9wbGVDaGFuZ2VkJywgcGVvcGxlKTtcbiAgfVxuXG4gIHJldHVybiB7YWRkUGVvcGxlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcbiovXG5cbi8qIFN0YXRzLmpzXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgU3RhdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0cyA9IHt9O1xuXG4gIEV2ZW50cy5vbigncGVvcGxlQ2hhbmdlZCcsIHNldFBlb3BsZSk7XG5cbiAgZnVuY3Rpb24gc2V0UGVvcGxlKHBlb3BsZSkge1xuICAgIHN0YXRzLnBlb3BsZSA9IHBlb3BsZS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coc3RhdHMpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzLnBlb3BsZSk7XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuKi9cbiIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzLmpzXCI7XG5cbi8qICBcbiAgICBUaGlzIG1vZHVsZSBleHBvcnRzIGEgJ1Byb2plY3RzJyBvYmplY3QgdGhhdCBrZWVwcyBcbiAgICB0cmFjayBvZiBQcm9qZWN0cyBhbmQgdGhlaXIgVG9kb3MuXG5cbiAgICBOb3RlOlxuICAgICAgUHJvamVjdHMuYWRkICYgUHJvamVjdHMucmVtb3ZlIHJldHVybiB0aGUgUHJvamVjdHMgbW9kdWxlIGl0c2VsZi5cbiAgICAgIC5hZGRUb2RvLCAucmVtb3ZlVG9kbywgYW5kIC5lZGl0IHJldHVybiB0aGUgcHJvamVjdCB0aGUgdG9kbyBiZWxvbmdzIHRvLlxuXG4gICAgfn5+fn5+fn5+fn5+fn5+fn5+fkFkZCwgcmV0cml2ZSwgYW5kIHJlbW92ZSBwcm9qZWN0c35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4gICAgICBDcmVhdGUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LmFkZCgncHJvamVjdE5hbWUnKVxuXG4gICAgICBSZXRyaXZlIHRoZW0gd2l0aCBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJylcbiAgICAgIG9yIHVzZSBQcm9qZWN0cy5saXN0IGZvciBhbiBhcnJheSBvZiBhbGwgcHJvamVjdHNcbiAgICAgIFxuICAgICAgWW91IG1heSByZW5hbWUgYSBwcm9qZWN0IGJ5IHJldHJpdmluZyBpdCB0aHJvdWdoIG9uZSBvZiB0aGUgYWJvdmUgbWV0aG9kczpcbiAgICAgICAgRXg6IFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykubmFtZSA9ICduZXdOYW1lJ1xuICAgICAgUHJvamVjdHMgbWF5IG5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcy5cblxuICAgICAgUmVtb3ZlIHByb2plY3RzIHdpdGggUHJvamVjdC5yZW1vdmUoJ3Byb2plY3ROYW1lJylcblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgdG9kb3N+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgWW91IG1heSBpbml0aWF0ZSBhIFByb2plY3Qgd2l0aCBhIHRvZG8gbGlrZSBzbzpcbiAgICAgICAgUHJvamVjdHMuYWRkKCduZXdQcm9qZWN0JykuZmluZCgnbmV3UHJvamVjdCcpLmFkZFRvZG8oJ1RpdGxlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRHVlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmlvcml0eScpXG4gICAgICBcbiAgICAgIFRvIGFkZCB0b2RvcyBhZnRlciBjcmVhdGlvbiByZXRyaWV2ZSBhbiBvYmplY3QgYW5kIHVzZSBpdCdzIGFkZFRvZG8gbWV0aG9kXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuYWRkVG9kbyguLi4pO1xuXG4gICAgICBSZXRyaXZlIHRvZG9zIHdpdGggLmZpbmRUb2RvKCd0b2RvTmFtZScpIG9yIC5saXN0VG9kb3NcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKVxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmxpc3RUb2Rvc1xuXG4gICAgICBSZW1vdmUgdG9kb3Mgd2l0aCAucmVtb3ZlVG9kbygndG9kb1RpdGxlJylcbiAgICAgICAgUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpO1xuXG4gICAgICBZb3UgbWF5IGVkaXQgYSB0b2RvIHVzaW5nIHRoZSBlZGl0IG1ldGhvZCBvbiBUb2RvIG9iamVjdHMuIFRvZG9zIG1heSBub3QgXG4gICAgICBoYXZlIGlkZW50aWNhbCB0aXRsZXMgaW4gdGhlIHNhbWUgcHJvamVjdDpcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKS5lZGl0KCd0aXRsZScsICduZXdUaXRsZScpXG4qL1xuXG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBfc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNMaXN0JykpO1xuICAgIGlmKHN0b3JhZ2UgPT09IG51bGwpIHJldHVybjsgLy9yZXR1cm5zIGlmIGxvY2FsU3RvcmFnZSBoYXNuJ3QgYmVlbiB1c2VkXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb2plY3QgPSBzdG9yYWdlW2ldO1xuICAgICAgYWRkKHByb2plY3QubmFtZSk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0VG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmluZChwcm9qZWN0Lm5hbWUpLmFkZFRvZG8ocHJvamVjdC5saXN0VG9kb3NbaV0udGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmR1ZWRhdGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5wcmlvcml0eSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFxuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Qcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gIGZ1bmN0aW9uIGFkZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHsgLy9yZXR1cm5zIGlmIHN0cmluZyBpcyBlbXB0eSBvciBvbmx5IGNvbnRhaW5zIHdoaXRlc3BhY2VcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKTtcbiAgICB9IGVsc2UgaWYoZmluZChuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KHRpdGxlKSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgfWVsc2UgaWYoZmluZFRvZG8odGl0bGUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSB0aGlzLm5hbWU7XG5cbiAgICAgIGZ1bmN0aW9uIGVkaXQoZmllbGQsIGNoYW5nZSkge1xuICAgICAgICBpZihmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGNoYW5nZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdNaXNzaW5nIGFyZ3VtZW50cyEnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhJyk7XG4gICAgICAgICAgfWVsc2UgaWYoZmluZFRvZG8oY2hhbmdlKSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZSAhPT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2R1ZWRhdGUnKSB7XG4gICAgICAgICAgZHVlZGF0ZSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgcHJpb3JpdHkgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpO1xuICAgICAgfVxuICAgICAgLy9Ub2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZWRhdGUoKSB7cmV0dXJuIGR1ZWRhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0KCkge3JldHVybiBwYXJlbnRQcm9qZWN0fSxcbiAgICAgICAgZWRpdFxuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBUb2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBcbiAgICAvL290aGVyIHByb2plY3QgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvKHRpdGxlKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kbyBub3QgZm91bmQhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3QuZmluZCggdG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRpdGxlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vUHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gT2JqZWN0LmZyZWV6ZSh7IFxuICAgICAgZ2V0IG5hbWUoKSB7cmV0dXJuIG5hbWV9LCBcbiAgICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgICAgaWYobmV3TmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmV3TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgICAgIH0gZWxzZSBpZihmaW5kKG5ld05hbWUpICE9PSB1bmRlZmluZWQgJiYgbmV3TmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0IGxpc3RUb2RvcygpIHtyZXR1cm4gWy4uLnRvZG9MaXN0XX0sXG4gICAgICBhZGRUb2RvLFxuICAgICAgZmluZFRvZG8sXG4gICAgICByZW1vdmVUb2RvXG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cblxuICAvL290aGVyIG1vZHVsZSBjcnVkXG4gIGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7IC8vcmV0dXJucyBpZiBmaW5kSW5kZXggZG9lc24ndCBmaW5kIGEgbWF0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKG5hbWUpIHtcbiAgICBpZihuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9qZWN0c0xpc3QuZmluZCggcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgLy9Nb2R1bGUgb2JqZWN0XG4gIHJldHVybiB7XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF07XG4gICAgfSxcbiAgICBhZGQsXG4gICAgcmVtb3ZlLFxuICAgIGZpbmQsXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZVxuICB9XG59KSgpO1xuXG5cbi8qUmVuZGVycyBQcm9qZWN0cyBvbiB0aGUgd2VicGFnZS4gXG5Vc2UgUHJvamVjdFJlbmRlcmVyLmluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSkgdG8gc2V0IHRoZSBhcmVhc1xudG8gcmVuZGVyIHRvLCBhbmQgd2hldGhlciB0aGV5IG1heSBiZSBlZGl0ZWQuIFRvZG9zIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGVpclxucmVzcGVjdGl2ZSBwcm9qZWN0cyBhcmUgY2xpY2tlZC5cbklmIHlvdSdkIGxpa2UgdG8gb25seSByZW5kZXIgcHJvamVjdCBuYW1lcywgeW91IG1heSBwYXNzIGEgZHVtbXkgbm9uLW9iamVjdCBcbnZhbHVlIGFzIHRoZSB0b2RvRWxlbWVudC4gSXQgd2lsbCBmYWlsIHF1aWV0bHkgd2l0aCBhIGNvbnNvbGUgbWVzc2FnZSBieVxuZGVmYXVsdC5cblxuQWZ0ZXIgaW5pdCwgUHJvamVjdFJlbmRlcmVyIHdpbGwgaGF2ZSB0d28gbWV0aG9kcyBhdmFpbGFibGUgdG8gaXQ6XG5Qcm9qZWN0UmVuZGVyZXIuc2V0Q29uZmlnOiBVc2VkIGV4YWN0bHkgdGhlIHNhbWUgYXMgUHJvamVjdFJlbmRlcmVyLmluaXRcblByb2plY3RSZW5kZXJlci5vZmY6IHJlc2V0cyBQcm9qZWN0UmVuZGVyZXIgdG8gaXQncyBvcmlnaW5hbCBzdGF0ZSBhbmQgY2xlYXJzIFxuZWxlbWVudHMgaW1tZWRpYXRlbHkuICovXG5cblxuY29uc3QgUHJvamVjdFJlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdEFyZWE7XG4gIGxldCB0b2RvQXJlYTtcbiAgbGV0IHJlbmRlckVkaXRhYmxlO1xuICBsZXQgZmlyc3RJbml0ID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEFkZGVyKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZCcpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1sYWJlbCcpO1xuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOztcbiAgICBhZGRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1pbnB1dCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBQcm9qZWN0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZElucHV0KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1idXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQnKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ+Kcjic7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgXG4gICAgICAvL2NoYW5nZSBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcblxuICAgICAgLy9hZGQgcmVtb3ZlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcmVtb3ZlJyk7XG4gICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlQnRuLCBwcm9qZWN0TmFtZUVsZW1lbnQpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gUHJvamVjdHMucmVtb3ZlKHByb2plY3ROYW1lKSk7XG4gICAgICBcbiAgICAgIC8vZXhpdCBlZGl0b3IgYW5kIGFwcGx5IGFueSBuYW1lIGNoYW5nZXNcbiAgICAgIGNvbnN0IGV4aXRFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuICAgICAgICBlZGl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLm5hbWUgPSBuZXdOYW1lO1xuXG4gICAgICAgICAgLy9jaGVja3MgaWYgb2xkIHByb2plY3QgbmFtZSBleGlzdHMsIGFuZCByZXNldHMgdGV4dENvbnRlbnQgaWYgc3RpbGwgZG9lc1xuICAgICAgICAgIGlmKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbXVzdCByZW1vdmUgbGlzdGVuZXIsIG9yIHdpbGwgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgcmVtb3ZlQnRuXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcik7XG4gICAgfVxuICAgIC8vSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgaWYodHlwZW9mIHByb2plY3RBcmVhICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RSZW5kZXJlcjogcHJvamVjdEFyZWEgbGVmdCB1bmRlZmluZWQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0QWRkZXIoKTtcblxuICAgIFByb2plY3RzLmxpc3QuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtZW50Jyk7XG4gICAgICBcbiAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgXG4gICAgICAvL3JlbmRlcnMgdG9kb3Mgb24gcHJvamVjdCBjbGlja1xuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucygnZWRpdGFibGUnKSkgeyAvL3ByZXZlbnRzIHN3aXRjaGluZyBpbiBlZGl0b3IgbW9kZVxuICAgICAgICAgIF9yZW5kZXJUb2RvcyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hZGQnKTtcbiAgICAgICAgcHJvamVjdEFkZGVyLmFmdGVyKHByb2plY3RFbGVtZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEFyZWEucHJlcGVuZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhcikge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkQnRuLmNsYXNzTGlzdCA9ICdzb3J0LWFkZCdcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnKydcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvUmVtb3Zlcihzb3J0QmFyKSB7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtcmVtb3ZlJ1xuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKVxuXG4gICAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgICAgY29uc3QgdG9kb1RpdGxlID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpLnRleHRDb250ZW50O1xuICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdCwgdG9kb1RpdGxlKVxuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCEnKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0UmVtb3ZlRWRpdG9yID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWVsZW1lbnQnKTtcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVhYmxlJyk7XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlbW92ZUVkaXRvciwge29uY2U6IHRydWV9KVxuICAgIH1cblxuICAgIGNvbnN0IGV4aXRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWxlbWVudCcpO1xuICAgICAgdG9kb0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50KVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWFibGUnKTtcbiAgICAgICAgXG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRSZW1vdmVFZGl0b3IsIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFJlbW92ZUVkaXRvciwge29uY2U6IHRydWV9KVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFNvcnRCYXIoKSB7XG4gICAgY29uc3Qgc29ydEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvcnRCYXIuY2xhc3NMaXN0LmFkZCgnc29ydC1iYXInKTtcblxuICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIpXG4gICAgICBfYXBwZW5kVG9kb1JlbW92ZXIoc29ydEJhcilcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29ydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtdGl0bGUnKTtcbiAgICBzb3J0VGl0bGUudGV4dENvbnRlbnQgPSAndGl0bGUnO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoc29ydFRpdGxlKVxuXG4gICAgY29uc3Qgc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IHNvcnREdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZHVlZGF0ZScpXG4gICAgc29ydER1ZWRhdGUudGV4dENvbnRlbnQgPSAnZHVlZGF0ZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RHVlZGF0ZSlcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1wcmlvcml0eScpO1xuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpXG5cbiAgICB0b2RvQXJlYS5hcHBlbmRDaGlsZChzb3J0QmFyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGJvb2wpIHtcbiAgICBUb2RvLnRpdGxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBib29sKTtcbiAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBib29sKTtcblxuICAgIGxldCBkdWVkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlZGF0ZScpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFRvZG8uZHVlZGF0ZS50ZXh0KVxuICAgIFxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpO1xuXG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2xvdyc7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcblxuICAgIC8vc2V0cyBkZWZhdWx0IHNlbGVjdGlvbiB0byBiZSB0aGUgc2FtZSBhcyBjdXJyZW50IHZhbHVlXG4gICAgW2xvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5XS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gVG9kby5wcmlvcml0eS50ZXh0KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKGxvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5KVxuXG5cbiAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG4gICAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgVG9kby5lbGVtZW50Lmluc2VydEJlZm9yZShkdWVkYXRlSW5wdXQsIFRvZG8ucHJpb3JpdHkuZWxlbWVudCk7XG5cbiAgICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgVG9kby5lbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBUb2RvLmVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpXG4gICAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAvL211c3QgdXBkYXRlIGVsZW1lbnRzIHRvIHJlbW92ZSB0aGVtP1xuICAgICAgZHVlZGF0ZUlucHV0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBwcmlvcml0eVNlbGVjdCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChkdWVkYXRlSW5wdXQpXG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hYm9ydFRvZG9FZGl0KFRvZG8pIHtcbiAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBmYWxzZSlcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby50aXRsZS50ZXh0O1xuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZGVzY3JpcHRpb24udGV4dDtcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0O1xuICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8ucHJpb3JpdHkudGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdWJtaXRUb2RvQ2hhbmdlcyhUb2RvKSB7XG4gICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICBjb25zdCBkdWVkYXRlVmFsdWUgPSBkdWVkYXRlSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9uc1twcmlvcml0eVNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG5cbiAgICAvL2NvbXBhcmVzIGN1cnJlbnQgdGV4dCB0byB0ZXh0IHdoZW4gZWRpdCB3YXMgaW5pdGlhdGVkXG4gICAgaWYoIFRvZG8udGl0bGUudGV4dCA9PT0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZGVzY3JpcHRpb24udGV4dCA9PT0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZHVlZGF0ZS50ZXh0ID09PSBkdWVkYXRlVmFsdWUgJiZcbiAgICAgICAgVG9kby5wcmlvcml0eS50ZXh0ID09PSBwcmlvcml0eU9wdGlvblxuICAgICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IFRvZG8uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgICBjb25zdCB0aXRsZSA9IFRvZG8udGl0bGUudGV4dDtcbiAgICAgIGNvbnN0IG5ld1RpdGxlID0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBuZXdEdWVkYXRlID0gZHVlZGF0ZVZhbHVlO1xuICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eU9wdGlvbjtcbiAgICAgIGxldCB0aXRsZUNoYW5nZWRcblxuICAgICAgaWYoVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICE9PSBUb2RvLnRpdGxlLnRleHQpIHtcbiAgICAgICAgUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyh0aXRsZSkuZWRpdCgndGl0bGUnLCBuZXdUaXRsZSk7XG4gICAgICAgIC8vY2hlY2tzIGlmIG9sZCB0b2RvIHRpdGxlIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgIGlmKHR5cGVvZiBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLnRpdGxlLnRleHQ7XG4gICAgICAgICAgdGl0bGVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2RvT2JqID0gKHRpdGxlQ2hhbmdlZCkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyhuZXdUaXRsZSkgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyh0aXRsZSk7XG5cbiAgICAgIHRvZG9PYmouZWRpdCgnZGVzY3JpcHRpb24nLCBuZXdEZXNjcmlwdGlvbilcbiAgICAgIHRvZG9PYmouZWRpdCgnZHVlZGF0ZScsIG5ld0R1ZWRhdGUpXG4gICAgICB0b2RvT2JqLmVkaXQoJ3ByaW9yaXR5JywgbmV3UHJpb3JpdHkpXG4gICAgICBcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChUb2RvLnN1Ym1pdEJ0bik7XG4gICAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBmYWxzZSlcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdEdWVkYXRlO1xuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvT2JqKTtcbiAgICB9XG4gIH07XG5cbiAgLy90aGlzIGZ1bmN0aW9uIHNlZW1zIGEgYml0IG1lc3N5XG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvL01ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvL3RoZSBlbnRpcmUgdG9kbyBwYXJlbnQgZWxlbWVudFxuICAgICAgICBlZGl0QnRuOiBlLnRhcmdldCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5uZXh0U2libGluZywgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIGR1ZWRhdGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XSwgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIHRydWUpXG5cbiAgICAgIFRvZG8uc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBUb2RvLnN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLXN1Ym1pdCcpO1xuICAgICAgVG9kby5zdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIFRvZG8uZWxlbWVudC5wcmVwZW5kKFRvZG8uc3VibWl0QnRuKTtcblxuICAgICAgY29uc3Qgc3VibWl0SGFuZGxlciA9ICgpID0+IF9zdWJtaXRUb2RvQ2hhbmdlcyhUb2RvKTtcbiAgICAgIFRvZG8uc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0SGFuZGxlciwge29uY2U6IHRydWV9KTtcbiAgICB9KVxuXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyVG9kb3MocHJvamVjdE5hbWUpIHtcbiAgICBpZih0eXBlb2YgdG9kb0FyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiB0b2RvQXJlYSBsZWZ0IHVuZGVmaW5lZCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5saXN0VG9kb3M7XG5cbiAgICBfYXBwZW5kU29ydEJhcigpO1xuICBcbiAgICBpZih0b2Rvcy5sZW5ndGggPiAwKSB7XG4gIFxuICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1lbGVtZW50Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgdG9kby5wYXJlbnRQcm9qZWN0KVxuICAgICAgICBcbiAgICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZWRhdGU7XG4gICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7ICBcbiAgICAgICAgXG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2ZmKCkge1xuICAgIEV2ZW50cy5vZmYoJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKTtcblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgdG9kb0FyZWEgPSB1bmRlZmluZWQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgZmlyc3RJbml0ID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIGRlbGV0ZSB0aGlzLnNldFJlbmRlckNvbmZpZztcbiAgICBkZWxldGUgdGhpcy5vZmY7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUgPSB0cnVlKSB7XG4gICAgcHJvamVjdEFyZWEgPSBwcm9qZWN0RWxlbWVudDtcbiAgICB0b2RvQXJlYSA9IHRvZG9FbGVtZW50O1xuICAgIHJlbmRlckVkaXRhYmxlID0gZWRpdGFibGU7XG4gICAgX3JlbmRlclByb2plY3RzKCk7XG5cbiAgICBpZihmaXJzdEluaXQgPT09IHRydWUpIHtcbiAgICAgIC8qUHV0dGluZyBFdmVudHMgY29kZSBoZXJlIGFsbG93cyBldmVudHMgdG8gYmUgdHJpZ2dlcmVkIG9ubHkgYWZ0ZXIgaW5pdCwgXG4gICAgICBhdCB0aGUgY29zdCBvZiBjcmVhdGluZyBhIGNsb3N1cmUuKi9cbiAgICAgIEV2ZW50cy5vbigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICAvL3JldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDb25maWcgPSBpbml0O1xuICAgICAgdGhpcy5vZmYgPSBvZmY7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXQ7XG4gIH1cbiAgXG4gIHJldHVybiB7aW5pdH07IC8vYWZ0ZXIgaW5pdDoge3NldENvbmZpZzogaW5pdCwgb2ZmfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuZXhwb3J0IHtQcm9qZWN0UmVuZGVyZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4vc3R5bGVzLmNzcydcbmltcG9ydCBQcm9qZWN0cywge1Byb2plY3RSZW5kZXJlcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzLmpzJztcblxuXG5Qcm9qZWN0UmVuZGVyZXIuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLCBcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLFxuICAgICAgICAgICAgICAgICAgICAgdHJ1ZSlcblxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpID09PSAnW10nKSB7XG4gIFByb2plY3RzLmFkZCgnTmV3IFByb2plY3QnKS5maW5kKCdOZXcgUHJvamVjdCcpLmFkZFRvZG8oXG4gICAgJ1N0YXJ0IG1ha2luZyB5b3VyIHRvZG8gbGlzdHMhJywgXG4gICAgYE9wZW4gdGhlIHNpZGViYXIgdG8gdGhlIGxlZnQgYnkgaG92ZXJpbmcgb3ZlciBpdC5cXG5gICsgXG4gICAgYEFkZCBuZXcgcHJvamVjdHMgYnkgdHlwaW5nIHRoZWlyIG5hbWUgYW5kIHByZXNzaW5nIGVudGVyLlxcbmAgK1xuICAgIGBVc2UgdGhlIHBlbmNpbCBpY29ucyB0byBlZGl0IHByb2plY3RzIGFuZCB0b2RvcyFgLCBcbiAgICAnbmV2ZXInLCBcbiAgICAnbG93J1xuICApXG59IGVsc2Uge1xuICBQcm9qZWN0cy5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG59XG5cbi8vZmluZHMgYW5kIGNsaWNrcyB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgcHJvamVjdCBsaXN0IHRvIHJlbmRlciBpdCdzIHRvZG9zXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykuZGlzcGF0Y2hFdmVudChcbiAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgIHZpZXc6IHdpbmRvdyxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSlcbik7XG5cbi8qXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxJylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzInKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc0JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzUnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc3JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzgnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxOCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyOCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCczMCcpXG4qL1xuXG4vKiBUZXN0aW5nIHByb2plY3RzOlxuUHJvamVjdHMuYWRkKCduYW1lJykuZmluZCgnbmFtZScpLmFkZFRvZG8oJ0NoYW5nZSBteSBuYW1lIScsIFwiQ2xpY2sgRWRpdCBuZXh0IHRvIG15IHByb2plY3QncyBuYW1lIHRvIGNoYW5nZSBpdCEgWW91IG1heSBhbHNvIHJlbW92ZSB0aGUgcHJvamVjdCwgb3IgYWRkIGEgbmV3IG9uZSBmcm9tIHRoZSBzaWRlYmFyIHdoaWxlIHlvdSdyZSBhdCBpdCFcIiwgJ25ldmVyJywgJ2xvdycpXG5Qcm9qZWN0cy5hZGQoJ3NvbWV0aGluZycpLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oXCJzb21ldGhpbmdUb2RvXCIsICd0aGlzIGlzIHNvbWV0aGluZyB0byBkbycsICduZXZlcicsICdsb3cnKTtcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJ3NvbWV0aGluZ0Vsc2VUb2RvJywgJ1RoaXMgaXMgc29tZXRoaW5nIGVsc2UgdG8gZG8nLCAnbmV2ZXInLCAnbG93JylcbiovXG4vL1RvRG8gb2JqZWN0cyBzaG91bGQgaGF2ZSBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eS5cbi8vTm90ZXMgYW5kIGNoZWNrbGlzdCB3b3VsZCBiZSBuaWNlIHRvby5cblxuLy9Qb2plY3RzIHNob3VsZCBob2xkIGxpc3RzIG9mIFRvRG8gb2JqZWN0cy4gVGhlcmUgc2hvdWxkIGJlIGEgZGVmYXVsdCBwcm9qZWN0XG4vL3VzZXJzIGNhbiBhZGQgVG9EbyBvYmplY3RzIHRvLiBVc2VycyBzaG91bGQgYmUgYWJsZSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4vL2FuZCBjaG9vc2Ugd2hpY2ggdGhlaXIgdG9kb3MgZ28uXG5cbi8vc2VwYXJhdGUgYXBwbGljYXRpb24gbG9naWMgZnJvbSBET00tUmVsYXRlZCBzdHVmZi5cblxuLy9Vc2VycyBzaG91bGQgYmUgYWJsZSB0bzogdmlldyBhbGwgcHJvamVjdHMsIHZpZXcgYWxsIHRvZG9zIGluIGVhY2ggcHJvamVjdCxcbi8vZXhwYW5kIGEgdG9kbyB0byBzZWUvZWRpdCwgYW5kIGRlbGV0ZSBUb2Rvcy5cblxuLy9NYXkgd2FudCB0byB1c2UgZGF0ZS1mbnMuXG5cbi8vdXNlIGxvY2FsIHN0b3JhZ2UhIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9