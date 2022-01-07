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
___CSS_LOADER_EXPORT___.push([module.id, "/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n}\r\n\r\n.sort-add.active {\r\n\tcolor: green;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(253, 80, 80);\r\n}\r\n\r\n.todo-element.removeable:hover .todo-title,\r\n.todo-element.removeable:hover .todo-description,\r\n.todo-element.removeable:hover .todo-duedate {\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid rgb(175, 175, 175);\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;CACC,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,WAAW;CACX,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA,UAAU;AACV;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,OAAO;CACP,QAAQ;CACR,gBAAgB;CAChB,aAAa;CACb,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA,WAAW;AACX;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;;AAGA,uBAAuB;AACvB;CACC,aAAa;CACb,iBAAiB;CACjB,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,OAAO;CACP,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,UAAU;CACV,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,OAAO;CACP,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;AACnB;;;AAGA,eAAe;AACf;CACC,aAAa;CACb,OAAO;CACP,2BAA2B;AAC5B;;;AAGA,WAAW;AACX;CACC,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,UAAU;AACX;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,8BAA8B;CAC9B,oCAAoC;CACpC,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;;;CAGC,6BAA6B;AAC9B;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,0CAA0C;AAC3C;;AAEA;;;;CAIC,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;;CAEC,oCAAoC;AACrC;;AAEA,cAAc;AACd;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;;CAEf,gBAAgB;CAChB,iBAAiB;;CAEjB,YAAY;CACZ,gBAAgB;AACjB","sourcesContent":["/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder-right: 1px solid lightgray;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: lightgray;\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n}\r\n\r\n.sort-add.active {\r\n\tcolor: green;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(229, 230, 231);\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(253, 80, 80);\r\n}\r\n\r\n.todo-element.removeable:hover .todo-title,\r\n.todo-element.removeable:hover .todo-description,\r\n.todo-element.removeable:hover .todo-duedate {\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid rgb(175, 175, 175);\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(229, 230, 231);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}"],"sourceRoot":""}]);
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

  function _appendTodoAdder(sortBar, projectName) {
    const addBtn = document.createElement('button');
    addBtn.classList = 'sort-add';
    addBtn.textContent = '+';
    sortBar.appendChild(addBtn);

    const exitTodoAdder = () => {
      const addForm = document.querySelector('.todo-addForm')
      const projectName = addForm.getAttribute('data-project');
      if(addForm !== null) {
        addForm.remove();
      }

      const projectNameElements = document.querySelectorAll('.project-name');
      projectNameElements.forEach(element => {
        if(element.textContent === projectName) {
          element.dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true
            })
          );
        }
      })

      addBtn.classList.remove('active');
      addBtn.addEventListener('click', createAddForm, {once: true});
    }

    const addNewTodo = (e, addForm) => {
      const parentProject = addForm.getAttribute('data-project')
      const newTodo = addForm.querySelector('.todo-title').textContent
      const description = addForm.querySelector('.todo-description').textContent
      const duedate = addForm.querySelector('.todo-duedate').value
      const priorityElement = addForm.querySelector('.todo-priority')
      const priority = priorityElement.options[priorityElement.selectedIndex].text;

      Projects.find(parentProject).addTodo(newTodo, description, duedate, priority);

      exitTodoAdder()

      console.log(priority)
    }

    const createAddForm = (e) => {
      const addForm = document.createElement('div');
      addForm.classList.add('todo-element', 'todo-addForm');
      addForm.setAttribute('data-project', projectName)

      const submitBtn = document.createElement('button');
      submitBtn.classList.add('todo-submit');
      submitBtn.textContent = '✓';
      addForm.append(submitBtn);
       
      const title = document.createElement('span');
      title.textContent = 'New Todo';
      title.classList.add('todo-title');
      title.setAttribute('contentEditable', true)
      addForm.appendChild(title)  

      const description = document.createElement('span');
      description.classList.add('todo-description');
      description.setAttribute('contentEditable', true)
      addForm.appendChild(description); 

      const duedateInput = document.createElement('input');
      duedateInput.classList.add('todo-duedate', 'editable');
      duedateInput.setAttribute('for', 'duedate');
      duedateInput.setAttribute('type', 'date');
      addForm.appendChild(duedateInput);

      const prioritySelect = document.createElement('select');
      prioritySelect.classList.add('todo-priority', 'editable');

      const lowPriority = document.createElement('option');
      lowPriority.textContent = 'low';
      const mediumPriority = document.createElement('option');
      mediumPriority.textContent = 'medium';
      const highPriority = document.createElement('option');
      highPriority.textContent = 'high'; 

      prioritySelect.append(lowPriority, mediumPriority, highPriority)
      addForm.appendChild(prioritySelect)

      todoArea.insertBefore(addForm, document.querySelector('.todo-element'));
      addBtn.classList.add('active');

      const submitHandler = (e) => addNewTodo(e, addForm)
      submitBtn.addEventListener('click', submitHandler, {once: true})
      addBtn.addEventListener('click', exitTodoAdder, {once: true})
    }

    addBtn.addEventListener('click', createAddForm, {once: true});
  }

  function _appendTodoRemover(sortBar) {
    const removeBtn = document.createElement('button');
    removeBtn.classList = 'sort-remove';
    removeBtn.textContent = '-';
    sortBar.appendChild(removeBtn);

    const removeElement = (e) => {
      const parentElement = e.target.parentElement;
      const parentProject = parentElement.getAttribute('data-project');
      const todoTitle = parentElement.querySelector('.todo-title').textContent;
      console.log(parentProject, todoTitle);

      Projects.find(parentProject).removeTodo(todoTitle);
      parentElement.remove();
      console.log('removed!');
    };

    const startRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element');
      todoElements.forEach(element => {
        element.addEventListener('click', removeElement);
        element.classList.add('removeable');
      });

      removeBtn.classList.add('active');
      removeBtn.addEventListener('click', exitRemoveEditor, {once: true});
    }

    const exitRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element');
      todoElements.forEach(element => {
        element.removeEventListener('click', removeElement);
        element.classList.remove('removeable');
      });

      removeBtn.classList.remove('active');
      removeBtn.addEventListener('click', startRemoveEditor, {once: true});
    }

    removeBtn.addEventListener('click', startRemoveEditor, {once: true});
  }

  function _appendSortBar(projectName) {
    const sortBar = document.createElement('div');
    sortBar.classList.add('sort-bar');

    if(renderEditable === true) {
      _appendTodoAdder(sortBar, projectName);
      _appendTodoRemover(sortBar);
    }

    const sortTitle = document.createElement('span');
    sortTitle.classList.add('sort-title');
    sortTitle.textContent = 'title';
    sortBar.appendChild(sortTitle);

    const sortDescription = document.createElement('span');
    sortDescription.classList.add('sort-description');
    sortDescription.textContent = 'description';
    sortBar.appendChild(sortDescription);

    const sortDuedate = document.createElement('span');
    sortDuedate.classList.add('sort-duedate');
    sortDuedate.textContent = 'duedate';
    sortBar.appendChild(sortDuedate);

    const sortPriority = document.createElement('span');
    sortPriority.classList.add('sort-priority');
    sortPriority.textContent = 'priority';
    sortBar.appendChild(sortPriority);

    todoArea.appendChild(sortBar);
  }

  function _makeTodoEditable(Todo, bool) {
    Todo.title.element.setAttribute('contentEditable', bool);
    Todo.description.element.setAttribute('contentEditable', bool);

    let duedateInput = document.createElement('input');
    duedateInput.classList.add('todo-duedate', 'editable');
    duedateInput.setAttribute('for', 'duedate');
    duedateInput.setAttribute('type', 'date');
    duedateInput.setAttribute('value', Todo.duedate.text);
    
    let prioritySelect = document.createElement('select');
    prioritySelect.classList.add('todo-duedate', 'editable');

    const lowPriority = document.createElement('option');
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

    prioritySelect.append(lowPriority, mediumPriority, highPriority);


    if(bool === true) {
      Todo.editBtn.setAttribute('hidden', '');
      Todo.title.element.classList.add('editable');
      Todo.description.element.classList.add('editable');

      Todo.duedate.element.setAttribute('hidden', '');
      Todo.element.insertBefore(duedateInput, Todo.priority.element);

      Todo.priority.element.setAttribute('hidden', '');
      Todo.element.appendChild(prioritySelect);
    } else {
      Todo.editBtn.removeAttribute('hidden');
      Todo.title.element.classList.remove('editable');
      Todo.description.element.classList.remove('editable');

      Todo.duedate.element.removeAttribute('hidden');
      Todo.priority.element.removeAttribute('hidden');

      //must update elements to remove them?
      duedateInput = Todo.element.querySelector('input');
      prioritySelect = Todo.element.querySelector('select');
      Todo.element.removeChild(duedateInput);
      Todo.element.removeChild(prioritySelect);
    }
  }

  function _abortTodoEdit(Todo) {
    _makeTodoEditable(Todo, false);
    Todo.element.removeChild(Todo.submitBtn);

    Todo.title.element.textContent = Todo.title.text;
    Todo.description.element.textContent = Todo.description.text;
    Todo.duedate.element.textContent = Todo.duedate.text;
    Todo.priority.element.textContent = Todo.priority.text;
  }

  function _submitTodoChanges(Todo) {
    const duedateInput = Todo.element.querySelector('input');
    const duedateValue = duedateInput.value;

    const prioritySelect = Todo.element.querySelector('select');
    const priorityOption = prioritySelect.options[prioritySelect.selectedIndex].text;

    //compares current text to text when edit was initiated
    if( Todo.title.text === Todo.title.element.textContent &&
        Todo.description.text === Todo.description.element.textContent &&
        Todo.duedate.text === duedateValue &&
        Todo.priority.text === priorityOption
      ) {
      _abortTodoEdit(Todo);
    } else {
      const parentProject = Todo.element.getAttribute('data-project');
      const title = Todo.title.text;
      const newTitle = Todo.title.element.textContent;
      const newDescription = Todo.description.element.textContent;
      const newDuedate = duedateValue;
      const newPriority = priorityOption;
      let titleChanged;

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

      todoObj.edit('description', newDescription);
      todoObj.edit('duedate', newDuedate);
      todoObj.edit('priority', newPriority);
      
      Todo.element.removeChild(Todo.submitBtn);
      _makeTodoEditable(Todo, false);

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
      };
      
      _makeTodoEditable(Todo, true);

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

    _appendSortBar(projectName);
  
    if(todos.length > 0) {
  
      todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-element');
        todoElement.setAttribute('data-project', todo.parentProject);
        
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
        
        todoArea.insertBefore(todoElement, document.querySelector('.todo-element'));
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

if(localStorage.getItem('projectsList') === '[]' || localStorage.length === 0) {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].add('New Project').find('New Project').addTodo(
    'Start making your todo lists!', 
    `Add new projects by typing their name in the sidebar and pressing enter.\n`,
    '', 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtRUFBbUUsNkJBQTZCLEtBQUssY0FBYyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixLQUFLLGNBQWMsb0JBQW9CLGtCQUFrQix3QkFBd0IsOEJBQThCLEtBQUssa0NBQWtDLG9CQUFvQiw2QkFBNkIsOEJBQThCLGNBQWMsZUFBZSx1QkFBdUIsb0JBQW9CLDJDQUEyQyx3Q0FBd0MsS0FBSyxzQ0FBc0MsK0JBQStCLEtBQUssaURBQWlELG9CQUFvQixLQUFLLDRCQUE0Qix5QkFBeUIsbUJBQW1CLEtBQUssMERBQTBELG9CQUFvQix3QkFBd0IsNEJBQTRCLGtCQUFrQixLQUFLLHVCQUF1QixjQUFjLHVCQUF1QixtQkFBbUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsS0FBSyx5QkFBeUIsY0FBYyxzQkFBc0IsaUJBQWlCLHVCQUF1QixtQkFBbUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsS0FBSyx1QkFBdUIsMkJBQTJCLGNBQWMsdUJBQXVCLDRCQUE0QixLQUFLLGdDQUFnQyw4QkFBOEIseUJBQXlCLEtBQUssd0NBQXdDLG9CQUFvQixjQUFjLGtDQUFrQyxLQUFLLHVDQUF1QyxvQkFBb0IscUNBQXFDLGtDQUFrQyw2QkFBNkIseUJBQXlCLGtCQUFrQiw0QkFBNEIscUJBQXFCLDBCQUEwQix1QkFBdUIsMEJBQTBCLEtBQUssdUVBQXVFLGNBQWMsaUJBQWlCLHlCQUF5QixtQkFBbUIsdUJBQXVCLHdCQUF3QixLQUFLLHVEQUF1RCxtQ0FBbUMsS0FBSyxtQkFBbUIsY0FBYyxzQkFBc0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLHlCQUF5QixLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyxzQkFBc0IsY0FBYyxzQkFBc0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsS0FBSyw2QkFBNkIsaUJBQWlCLEtBQUssNENBQTRDLG9CQUFvQixxQ0FBcUMsMkNBQTJDLDZCQUE2Qix5QkFBeUIsa0JBQWtCLDRCQUE0QixxQkFBcUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIsNkJBQTZCLEtBQUssd0NBQXdDLHlDQUF5QyxLQUFLLDBKQUEwSixvQ0FBb0MsS0FBSyx1RUFBdUUsY0FBYyxpQkFBaUIseUJBQXlCLG1CQUFtQix1QkFBdUIsd0JBQXdCLEtBQUssMkJBQTJCLHVCQUF1Qiw0QkFBNEIsS0FBSyx1REFBdUQsaURBQWlELEtBQUssdUhBQXVILDhCQUE4Qix5QkFBeUIsS0FBSyw0REFBNEQsMkNBQTJDLEtBQUssdUNBQXVDLGNBQWMsc0JBQXNCLHVCQUF1QixtQkFBbUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEtBQUssc0JBQXNCLGNBQWMsc0JBQXNCLHVCQUF1QixtQkFBbUIsaUJBQWlCLHNCQUFzQiwyQkFBMkIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsS0FBSyxPQUFPLHdGQUF3RixNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLG1EQUFtRCw2QkFBNkIsS0FBSyxjQUFjLGdCQUFnQixpQkFBaUIsc0JBQXNCLEtBQUssY0FBYyxvQkFBb0Isa0JBQWtCLHdCQUF3Qiw4QkFBOEIsS0FBSyxrQ0FBa0Msb0JBQW9CLDZCQUE2Qiw4QkFBOEIsY0FBYyxlQUFlLHVCQUF1QixvQkFBb0IsMkNBQTJDLHdDQUF3QyxLQUFLLHNDQUFzQywrQkFBK0IsS0FBSyxpREFBaUQsb0JBQW9CLEtBQUssNEJBQTRCLHlCQUF5QixtQkFBbUIsS0FBSywwREFBMEQsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLEtBQUssdUJBQXVCLGNBQWMsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLHVCQUF1QixLQUFLLHlCQUF5QixjQUFjLHNCQUFzQixpQkFBaUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsdUJBQXVCLHVCQUF1QixLQUFLLHVCQUF1QiwyQkFBMkIsY0FBYyx1QkFBdUIsNEJBQTRCLEtBQUssZ0NBQWdDLDhCQUE4Qix5QkFBeUIsS0FBSyx3Q0FBd0Msb0JBQW9CLGNBQWMsa0NBQWtDLEtBQUssdUNBQXVDLG9CQUFvQixxQ0FBcUMsa0NBQWtDLDZCQUE2Qix5QkFBeUIsa0JBQWtCLDRCQUE0QixxQkFBcUIsMEJBQTBCLHVCQUF1QiwwQkFBMEIsS0FBSyx1RUFBdUUsY0FBYyxpQkFBaUIseUJBQXlCLG1CQUFtQix1QkFBdUIsd0JBQXdCLEtBQUssdURBQXVELG1DQUFtQyxLQUFLLG1CQUFtQixjQUFjLHNCQUFzQix1QkFBdUIsbUJBQW1CLGlCQUFpQixzQkFBc0IseUJBQXlCLEtBQUssMEJBQTBCLG1CQUFtQixLQUFLLHNCQUFzQixjQUFjLHNCQUFzQix1QkFBdUIsbUJBQW1CLGlCQUFpQixzQkFBc0IseUJBQXlCLDBCQUEwQixLQUFLLDZCQUE2QixpQkFBaUIsS0FBSyw0Q0FBNEMsb0JBQW9CLHFDQUFxQywyQ0FBMkMsNkJBQTZCLHlCQUF5QixrQkFBa0IsNEJBQTRCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsS0FBSyx3Q0FBd0MseUNBQXlDLEtBQUssMEpBQTBKLG9DQUFvQyxLQUFLLHVFQUF1RSxjQUFjLGlCQUFpQix5QkFBeUIsbUJBQW1CLHVCQUF1Qix3QkFBd0IsS0FBSywyQkFBMkIsdUJBQXVCLDRCQUE0QixLQUFLLHVEQUF1RCxpREFBaUQsS0FBSyx1SEFBdUgsOEJBQThCLHlCQUF5QixLQUFLLDREQUE0RCwyQ0FBMkMsS0FBSyx1Q0FBdUMsY0FBYyxzQkFBc0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsS0FBSyxzQkFBc0IsY0FBYyxzQkFBc0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLDJCQUEyQix3QkFBd0IsdUJBQXVCLHVCQUF1QixLQUFLLG1CQUFtQjtBQUNqcFY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsVUFBVSwyQkFBMkI7QUFDckMsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEVBQUM7OztBQUd0Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakMsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEMsMkJBQTJCLG1CQUFtQjtBQUM5Qyx1QkFBdUIsZUFBZTtBQUN0Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRLHVEQUFXO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVLHVEQUFXO0FBQ3JCO0FBQ0EsT0FBTztBQUNQLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLHVEQUFXO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQyxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSx1REFBdUQsV0FBVztBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELFdBQVc7QUFDckUsdURBQXVELFdBQVc7QUFDbEU7O0FBRUEscURBQXFELFdBQVc7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw4REFBOEQsV0FBVztBQUN6RTs7QUFFQSw0REFBNEQsV0FBVztBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFdBQVc7QUFDMUUsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTyxlQUFlO0FBQ2hDLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDM3ZCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDMkI7OztBQUdoRSxzRUFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLEVBQUUsZ0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsZ0ZBQTRCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKkdlbmVyYWwgTGF5b3V0Ki9cXHJcXG4qIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qc2lkZWJhciovXFxyXFxuLnNpZGViYXIgIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDNweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI3NXB4O1xcclxcblxcdHBhZGRpbmc6IDE1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLyphZGQgZm9ybSovXFxyXFxuLnByb2plY3QtYWRkIHtcXHJcXG5cXHRtYXJnaW46IDVweCA1cHggNXB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC1idXR0b24sIC5wcm9qZWN0LWFkZC1sYWJlbCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWlucHV0IHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnByb2plY3QgbGlzdCBzdHlsaW5nKi9cXHJcXG4ucHJvamVjdC1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogbm93cmFwO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIyNXB4O1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnRvZG8gc2VjdGlvbiovXFxyXFxuLnRvZG9zIHtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnNvcnQgYmFyKi9cXHJcXG4uc29ydC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtcHJpb3JpdHksIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1hZGQuYWN0aXZlIHtcXHJcXG5cXHRjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXJlbW92ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiAzLjVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDMuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1yZW1vdmUuYWN0aXZlIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvZG8gRWxlbWVudHMqL1xcclxcbi50b2RvLWVsZW1lbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIzMCwgMjMxKTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogNXB4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuXFx0d29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZWxlbWVudC5yZW1vdmVhYmxlOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCA4MCwgODApO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIgLnRvZG8tdGl0bGUsXFxyXFxuLnRvZG8tZWxlbWVudC5yZW1vdmVhYmxlOmhvdmVyIC50b2RvLWRlc2NyaXB0aW9uLFxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciAudG9kby1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1wcmlvcml0eSwgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAzcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSwgLnRvZG8tZGVzY3JpcHRpb24sIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNzUsIDE3NSwgMTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUuZWRpdGFibGUsIFxcclxcbi50b2RvLWRlc2NyaXB0aW9uLmVkaXRhYmxlLCBcXHJcXG4udG9kby1wcmlvcml0eS5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tZHVlZGF0ZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS5lZGl0YWJsZSxcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxufVxcclxcblxcclxcbi8qVG9kbyBFZGl0b3IqL1xcclxcbi50b2RvLWVkaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zdWJtaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcclxcblxcdGNvbG9yOiBncmVlbjtcXHJcXG5cXHRmb250LXdlaWdodDogOTAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGlCQUFpQjtDQUNqQix1QkFBdUI7QUFDeEI7O0FBRUEsVUFBVTtBQUNWO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsT0FBTztDQUNQLFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG9DQUFvQztDQUNwQyxpQ0FBaUM7QUFDbEM7O0FBRUEsV0FBVztBQUNYO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7O0FBR0EsdUJBQXVCO0FBQ3ZCO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsV0FBVztBQUNaOztBQUVBO0NBQ0MsT0FBTztDQUNQLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLFVBQVU7Q0FDVixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtBQUNuQjs7O0FBR0EsZUFBZTtBQUNmO0NBQ0MsYUFBYTtDQUNiLE9BQU87Q0FDUCwyQkFBMkI7QUFDNUI7OztBQUdBLFdBQVc7QUFDWDtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsb0NBQW9DO0NBQ3BDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DOztBQUVBOzs7Q0FHQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywwQ0FBMEM7QUFDM0M7O0FBRUE7Ozs7Q0FJQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLG9DQUFvQztBQUNyQzs7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTs7Q0FFZixnQkFBZ0I7Q0FDaEIsaUJBQWlCOztDQUVqQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qR2VuZXJhbCBMYXlvdXQqL1xcclxcbioge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLypzaWRlYmFyKi9cXHJcXG4uc2lkZWJhciAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGdhcDogM3B4O1xcclxcblxcdG1heC13aWR0aDogMjc1cHg7XFxyXFxuXFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzAsIDIzMSk7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4vKmFkZCBmb3JtKi9cXHJcXG4ucHJvamVjdC1hZGQge1xcclxcblxcdG1hcmdpbjogNXB4IDVweCA1cHggMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWJ1dHRvbiwgLnByb2plY3QtYWRkLWxhYmVsIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQtaW5wdXQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qcHJvamVjdCBsaXN0IHN0eWxpbmcqL1xcclxcbi5wcm9qZWN0LWVsZW1lbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lZGl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHRmbGV4OiA1O1xcclxcblxcdG1heC13aWR0aDogMjI1cHg7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLmVkaXRhYmxlIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qdG9kbyBzZWN0aW9uKi9cXHJcXG4udG9kb3Mge1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qc29ydCBiYXIqL1xcclxcbi5zb3J0LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtdGl0bGUsIC5zb3J0LWRlc2NyaXB0aW9uLCAuc29ydC1wcmlvcml0eSwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAzcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtdGl0bGUsIC5zb3J0LWRlc2NyaXB0aW9uLCAuc29ydC1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1hZGQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWFkZC5hY3RpdmUge1xcclxcblxcdGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogMy41cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXJlbW92ZS5hY3RpdmUge1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qVG9kbyBFbGVtZW50cyovXFxyXFxuLnRvZG8tZWxlbWVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMwLCAyMzEpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXHJcXG5cXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDgwLCA4MCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciAudG9kby10aXRsZSxcXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIgLnRvZG8tZGVzY3JpcHRpb24sXFxyXFxuLnRvZG8tZWxlbWVudC5yZW1vdmVhYmxlOmhvdmVyIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSwgLnRvZG8tZGVzY3JpcHRpb24sIC50b2RvLXByaW9yaXR5LCAudG9kby1kdWVkYXRlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdHdpZHRoOiAyNSU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDNweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZS5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24uZWRpdGFibGUsIFxcclxcbi50b2RvLXByaW9yaXR5LmVkaXRhYmxlLCBcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LmVkaXRhYmxlLFxcclxcbi50b2RvLWR1ZWRhdGUuZWRpdGFibGUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIzMCwgMjMxKTtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVkaXRvciovXFxyXFxuLnRvZG8tZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXN1Ym1pdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxuXFx0Y29sb3I6IGdyZWVuO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBldmVudHMgPSB7fTtcblxuICBmdW5jdGlvbiBvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtvbiwgb2ZmLCBlbWl0LCBnZXQgbGlzdCgpIHtyZXR1cm4gZXZlbnRzfX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLyogUGVvcGxlLmpzXG5cbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBQZW9wbGUgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwZW9wbGUgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQZW9wbGUoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKHBlcnNvbiA9PiBwZW9wbGUucHVzaChwZXJzb24pKTtcbiAgICBFdmVudHMuZW1pdCgncGVvcGxlQ2hhbmdlZCcsIHBlb3BsZSk7XG4gIH1cblxuICByZXR1cm4ge2FkZFBlb3BsZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGU7XG4qL1xuXG4vKiBTdGF0cy5qc1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFN0YXRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHMgPSB7fTtcblxuICBFdmVudHMub24oJ3Blb3BsZUNoYW5nZWQnLCBzZXRQZW9wbGUpO1xuXG4gIGZ1bmN0aW9uIHNldFBlb3BsZShwZW9wbGUpIHtcbiAgICBzdGF0cy5wZW9wbGUgPSBwZW9wbGUubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0cy5wZW9wbGUpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiovXG4iLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50cy5qc1wiO1xuXG4vKiAgXG4gICAgVGhpcyBtb2R1bGUgZXhwb3J0cyBhICdQcm9qZWN0cycgb2JqZWN0IHRoYXQga2VlcHMgXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG4gICAgICBcbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0R1ZURhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpb3JpdHknKVxuICAgICAgXG4gICAgICBUbyBhZGQgdG9kb3MgYWZ0ZXIgY3JlYXRpb24gcmV0cmlldmUgYW4gb2JqZWN0IGFuZCB1c2UgaXQncyBhZGRUb2RvIG1ldGhvZFxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmFkZFRvZG8oLi4uKTtcblxuICAgICAgUmV0cml2ZSB0b2RvcyB3aXRoIC5maW5kVG9kbygndG9kb05hbWUnKSBvciAubGlzdFRvZG9zXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJylcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5saXN0VG9kb3NcblxuICAgICAgUmVtb3ZlIHRvZG9zIHdpdGggLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpXG4gICAgICAgIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKS5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKTtcblxuICAgICAgWW91IG1heSBlZGl0IGEgdG9kbyB1c2luZyB0aGUgZWRpdCBtZXRob2Qgb24gVG9kbyBvYmplY3RzLiBUb2RvcyBtYXkgbm90IFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuXG5jb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgZnVuY3Rpb24gX3NhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpKTtcbiAgICBpZihzdG9yYWdlID09PSBudWxsKSByZXR1cm47IC8vcmV0dXJucyBpZiBsb2NhbFN0b3JhZ2UgaGFzbid0IGJlZW4gdXNlZFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gc3RvcmFnZVtpXTtcbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kdWVkYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+UHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5hbWUpKSB7IC8vcmV0dXJucyBpZiBzdHJpbmcgaXMgZW1wdHkgb3Igb25seSBjb250YWlucyB3aGl0ZXNwYWNlXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgfSBlbHNlIGlmKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+VG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVkYXRlID0gJycsIHByaW9yaXR5ID0gJycpIHtcbiAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKTtcbiAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gdGhpcy5uYW1lO1xuXG4gICAgICBmdW5jdGlvbiBlZGl0KGZpZWxkLCBjaGFuZ2UpIHtcbiAgICAgICAgaWYoZmllbGQgPT09IHVuZGVmaW5lZCB8fCBjaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnTWlzc2luZyBhcmd1bWVudHMhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QodGl0bGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKGNoYW5nZSkgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2UgIT09IHRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnRmllbGQgZG9lcyBub3QgZXhpc3QhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gZmluZChwYXJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICAgIC8vVG9kbyBvYmplY3RcbiAgICAgIGNvbnN0IHRvZG8gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sIFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSwgXG4gICAgICAgIGdldCBkdWVkYXRlKCkge3JldHVybiBkdWVkYXRlfSwgXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgICAgICBnZXQgcGFyZW50UHJvamVjdCgpIHtyZXR1cm4gcGFyZW50UHJvamVjdH0sXG4gICAgICAgIGVkaXRcbiAgICAgIH0pO1xuICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgVG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gICAgXG4gICAgLy9vdGhlciBwcm9qZWN0IGNydWRcbiAgICBmdW5jdGlvbiBmaW5kVG9kbyh0aXRsZSkge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQoIHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0aXRsZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1Byb2plY3Qgb2JqZWN0XG4gICAgY29uc3QgcHJvamVjdCA9IE9iamVjdC5mcmVlemUoeyBcbiAgICAgIGdldCBuYW1lKCkge3JldHVybiBuYW1lfSwgXG4gICAgICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgICAgIGlmKG5ld05hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5ld05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpO1xuICAgICAgICB9IGVsc2UgaWYoZmluZChuZXdOYW1lKSAhPT0gdW5kZWZpbmVkICYmIG5ld05hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldCBsaXN0VG9kb3MoKSB7cmV0dXJuIFsuLi50b2RvTGlzdF19LFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGZpbmRUb2RvLFxuICAgICAgcmVtb3ZlVG9kb1xuICAgIH0pO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgUHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG5cbiAgLy9vdGhlciBtb2R1bGUgY3J1ZFxuICBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpOyAvL3JldHVybnMgaWYgZmluZEluZGV4IGRvZXNuJ3QgZmluZCBhIG1hdGNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lICk7XG4gICAgfVxuICB9O1xuXG4gIC8vTW9kdWxlIG9iamVjdFxuICByZXR1cm4ge1xuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIFsuLi5wcm9qZWN0c0xpc3RdO1xuICAgIH0sXG4gICAgYWRkLFxuICAgIHJlbW92ZSxcbiAgICBmaW5kLFxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2VcbiAgfVxufSkoKTtcblxuXG4vKlJlbmRlcnMgUHJvamVjdHMgb24gdGhlIHdlYnBhZ2UuIFxuVXNlIFByb2plY3RSZW5kZXJlci5pbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUpIHRvIHNldCB0aGUgYXJlYXNcbnRvIHJlbmRlciB0bywgYW5kIHdoZXRoZXIgdGhleSBtYXkgYmUgZWRpdGVkLiBUb2RvcyB3aWxsIGJlIHJlbmRlcmVkIHdoZW4gdGhlaXJcbnJlc3BlY3RpdmUgcHJvamVjdHMgYXJlIGNsaWNrZWQuXG5JZiB5b3UnZCBsaWtlIHRvIG9ubHkgcmVuZGVyIHByb2plY3QgbmFtZXMsIHlvdSBtYXkgcGFzcyBhIGR1bW15IG5vbi1vYmplY3QgXG52YWx1ZSBhcyB0aGUgdG9kb0VsZW1lbnQuIEl0IHdpbGwgZmFpbCBxdWlldGx5IHdpdGggYSBjb25zb2xlIG1lc3NhZ2UgYnlcbmRlZmF1bHQuXG5cbkFmdGVyIGluaXQsIFByb2plY3RSZW5kZXJlciB3aWxsIGhhdmUgdHdvIG1ldGhvZHMgYXZhaWxhYmxlIHRvIGl0OlxuUHJvamVjdFJlbmRlcmVyLnNldENvbmZpZzogVXNlZCBleGFjdGx5IHRoZSBzYW1lIGFzIFByb2plY3RSZW5kZXJlci5pbml0XG5Qcm9qZWN0UmVuZGVyZXIub2ZmOiByZXNldHMgUHJvamVjdFJlbmRlcmVyIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUgYW5kIGNsZWFycyBcbmVsZW1lbnRzIGltbWVkaWF0ZWx5LiAqL1xuXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHByb2plY3RBcmVhO1xuICBsZXQgdG9kb0FyZWE7XG4gIGxldCByZW5kZXJFZGl0YWJsZTtcbiAgbGV0IGZpcnN0SW5pdCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpXG4gICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYWRkTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtbGFiZWwnKTtcbiAgICBhZGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZExhYmVsKTtcblxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTs7XG4gICAgYWRkSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtaW5wdXQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRJbnB1dCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGUpID0+IFByb2plY3RzLmFkZChhZGRJbnB1dC52YWx1ZSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBlLnRhcmdldC5uZXh0U2libGluZ1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgIFxuICAgICAgLy9jaGFuZ2UgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJyk7XG4gICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG5cbiAgICAgIC8vYWRkIHJlbW92ZSBlbGVtZW50XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXJlbW92ZScpO1xuICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJy0nO1xuICAgICAgcHJvamVjdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJlbW92ZUJ0biwgcHJvamVjdE5hbWVFbGVtZW50KTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFByb2plY3RzLnJlbW92ZShwcm9qZWN0TmFtZSkpO1xuICAgICAgXG4gICAgICAvL2V4aXQgZWRpdG9yIGFuZCBhcHBseSBhbnkgbmFtZSBjaGFuZ2VzXG4gICAgICBjb25zdCBleGl0RWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcbiAgICAgICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZUJ0bilcbiAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG4gICAgICAgIFxuICAgICAgICBpZihwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgIT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5uYW1lID0gbmV3TmFtZTtcblxuICAgICAgICAgIC8vY2hlY2tzIGlmIG9sZCBwcm9qZWN0IG5hbWUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgICBpZih0eXBlb2YgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL211c3QgcmVtb3ZlIGxpc3RlbmVyLCBvciB3aWxsIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIHJlbW92ZUJ0blxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcilcbiAgICAgIH1cblxuICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpO1xuICAgIH1cbiAgICAvL0hpZGVzIGVkaXQgYnV0dG9uIGFuZCBwcm92aWRlcyBhZGRpdGlvbmFsIG9wdGlvbnMgdW50aWwgdXNlciBtb3ZlcyBhd2F5XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbmRlclByb2plY3RzKCkge1xuICAgIGlmKHR5cGVvZiBwcm9qZWN0QXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHByb2plY3RBcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEFkZGVyKCk7XG5cbiAgICBQcm9qZWN0cy5saXN0LmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudCcpO1xuICAgICAgXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIFxuICAgICAgLy9yZW5kZXJzIHRvZG9zIG9uIHByb2plY3QgY2xpY2tcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZighbmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRhYmxlJykpIHsgLy9wcmV2ZW50cyBzd2l0Y2hpbmcgaW4gZWRpdG9yIG1vZGVcbiAgICAgICAgICBfcmVuZGVyVG9kb3MoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYWRkJyk7XG4gICAgICAgIHByb2plY3RBZGRlci5hZnRlcihwcm9qZWN0RWxlbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RBcmVhLnByZXBlbmQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdCA9ICdzb3J0LWFkZCc7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGNvbnN0IGV4aXRUb2RvQWRkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkRm9ybScpXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcbiAgICAgIGlmKGFkZEZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgYWRkRm9ybS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoZSwgYWRkRm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZWRhdGUnKS52YWx1ZVxuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby1wcmlvcml0eScpXG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC5vcHRpb25zW3ByaW9yaXR5RWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmFkZFRvZG8obmV3VG9kbywgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZXhpdFRvZG9BZGRlcigpXG5cbiAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFkZEZvcm0gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnLCAndG9kby1hZGRGb3JtJyk7XG4gICAgICBhZGRGb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIGFkZEZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG4gICAgICAgXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpICBcblxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpXG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTsgXG5cbiAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG4gICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlZGF0ZScpO1xuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGR1ZWRhdGVJbnB1dCk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JywgJ2VkaXRhYmxlJyk7XG5cbiAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnO1xuICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJzsgXG5cbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG5cbiAgICAgIHRvZG9BcmVhLmluc2VydEJlZm9yZShhZGRGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lbGVtZW50JykpO1xuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IGFkZE5ld1RvZG8oZSwgYWRkRm9ybSlcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIsIHtvbmNlOiB0cnVlfSlcbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4aXRUb2RvQWRkZXIsIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7b25jZTogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtcmVtb3ZlJztcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0LCB0b2RvVGl0bGUpO1xuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCEnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWxlbWVudCcpO1xuICAgICAgdG9kb0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVhYmxlJyk7XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlbW92ZUVkaXRvciwge29uY2U6IHRydWV9KTtcbiAgICB9XG5cbiAgICBjb25zdCBleGl0UmVtb3ZlRWRpdG9yID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWVsZW1lbnQnKTtcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlYWJsZScpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFNvcnRCYXIocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBzb3J0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29ydEJhci5jbGFzc0xpc3QuYWRkKCdzb3J0LWJhcicpO1xuXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhciwgcHJvamVjdE5hbWUpO1xuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0VGl0bGUuY2xhc3NMaXN0LmFkZCgnc29ydC10aXRsZScpO1xuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0VGl0bGUpO1xuXG4gICAgY29uc3Qgc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0RHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdzb3J0LWR1ZWRhdGUnKTtcbiAgICBzb3J0RHVlZGF0ZS50ZXh0Q29udGVudCA9ICdkdWVkYXRlJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKTtcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1wcmlvcml0eScpO1xuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpO1xuXG4gICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoc29ydEJhcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBib29sKSB7XG4gICAgVG9kby50aXRsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG5cbiAgICBsZXQgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFRvZG8uZHVlZGF0ZS50ZXh0KTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgLy9zZXRzIGRlZmF1bHQgc2VsZWN0aW9uIHRvIGJlIHRoZSBzYW1lIGFzIGN1cnJlbnQgdmFsdWVcbiAgICBbbG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHldLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLnRpdGxlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIFRvZG8uZWxlbWVudC5pbnNlcnRCZWZvcmUoZHVlZGF0ZUlucHV0LCBUb2RvLnByaW9yaXR5LmVsZW1lbnQpO1xuXG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb2RvLmVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgICAgLy9tdXN0IHVwZGF0ZSBlbGVtZW50cyB0byByZW1vdmUgdGhlbT9cbiAgICAgIGR1ZWRhdGVJbnB1dCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlZGF0ZUlucHV0KTtcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQoVG9kbykge1xuICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby50aXRsZS50ZXh0O1xuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZGVzY3JpcHRpb24udGV4dDtcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0O1xuICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8ucHJpb3JpdHkudGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdWJtaXRUb2RvQ2hhbmdlcyhUb2RvKSB7XG4gICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgZHVlZGF0ZVZhbHVlID0gZHVlZGF0ZUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAvL2NvbXBhcmVzIGN1cnJlbnQgdGV4dCB0byB0ZXh0IHdoZW4gZWRpdCB3YXMgaW5pdGlhdGVkXG4gICAgaWYoIFRvZG8udGl0bGUudGV4dCA9PT0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZGVzY3JpcHRpb24udGV4dCA9PT0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZHVlZGF0ZS50ZXh0ID09PSBkdWVkYXRlVmFsdWUgJiZcbiAgICAgICAgVG9kby5wcmlvcml0eS50ZXh0ID09PSBwcmlvcml0eU9wdGlvblxuICAgICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IFRvZG8uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xuICAgICAgY29uc3QgdGl0bGUgPSBUb2RvLnRpdGxlLnRleHQ7XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3RHVlZGF0ZSA9IGR1ZWRhdGVWYWx1ZTtcbiAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlPcHRpb247XG4gICAgICBsZXQgdGl0bGVDaGFuZ2VkO1xuXG4gICAgICBpZihUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgIT09IFRvZG8udGl0bGUudGV4dCkge1xuICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKS5lZGl0KCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgICAgICAgLy9jaGVja3MgaWYgb2xkIHRvZG8gdGl0bGUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dDtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKG5ld1RpdGxlKSA6IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKTtcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgIHRvZG9PYmouZWRpdCgnZHVlZGF0ZScsIG5ld0R1ZWRhdGUpO1xuICAgICAgdG9kb09iai5lZGl0KCdwcmlvcml0eScsIG5ld1ByaW9yaXR5KTtcbiAgICAgIFxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKTtcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdEdWVkYXRlO1xuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvT2JqKTtcbiAgICB9XG4gIH07XG5cbiAgLy90aGlzIGZ1bmN0aW9uIHNlZW1zIGEgYml0IG1lc3N5XG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvL01ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvL3RoZSBlbnRpcmUgdG9kbyBwYXJlbnQgZWxlbWVudFxuICAgICAgICBlZGl0QnRuOiBlLnRhcmdldCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5uZXh0U2libGluZywgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIGR1ZWRhdGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XSwgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCB0cnVlKTtcblxuICAgICAgVG9kby5zdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBUb2RvLnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgVG9kby5lbGVtZW50LnByZXBlbmQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pO1xuICAgICAgVG9kby5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLmxpc3RUb2RvcztcblxuICAgIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKTtcbiAgXG4gICAgaWYodG9kb3MubGVuZ3RoID4gMCkge1xuICBcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWxlbWVudCcpO1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHRvZG8ucGFyZW50UHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlZGF0ZTtcbiAgICAgICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTsgIFxuICAgICAgICBcbiAgICAgICAgdG9kb0FyZWEuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lbGVtZW50JykpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgRXZlbnRzLm9mZigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0QXJlYSA9IHVuZGVmaW5lZDtcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZDtcbiAgICByZW5kZXJFZGl0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJzdEluaXQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgZGVsZXRlIHRoaXMuc2V0UmVuZGVyQ29uZmlnO1xuICAgIGRlbGV0ZSB0aGlzLm9mZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50O1xuICAgIHRvZG9BcmVhID0gdG9kb0VsZW1lbnQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSBlZGl0YWJsZTtcbiAgICBfcmVuZGVyUHJvamVjdHMoKTtcblxuICAgIGlmKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLypQdXR0aW5nIEV2ZW50cyBjb2RlIGhlcmUgYWxsb3dzIGV2ZW50cyB0byBiZSB0cmlnZ2VyZWQgb25seSBhZnRlciBpbml0LCBcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4qL1xuICAgICAgRXZlbnRzLm9uKCdwcm9qZWN0c1VwZGF0ZScsIF9yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICAgIC8vcmV1c2VzIHRoaXMgZnVuY3Rpb24gdG8gc2V0IG9wdGlvbnMgYWZ0ZXIgaW5pdCBpZiBkZXNpcmVkLlxuICAgICAgZmlyc3RJbml0ID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXQ7XG4gICAgICB0aGlzLm9mZiA9IG9mZjtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5pdDtcbiAgfVxuICBcbiAgcmV0dXJuIHtpbml0fTsgLy9hZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5leHBvcnQge1Byb2plY3RSZW5kZXJlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IFByb2plY3RzLCB7UHJvamVjdFJlbmRlcmVyfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG5cblByb2plY3RSZW5kZXJlci5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyksIFxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyksXG4gICAgICAgICAgICAgICAgICAgICB0cnVlKVxuXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNMaXN0JykgPT09ICdbXScgfHwgbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICBQcm9qZWN0cy5hZGQoJ05ldyBQcm9qZWN0JykuZmluZCgnTmV3IFByb2plY3QnKS5hZGRUb2RvKFxuICAgICdTdGFydCBtYWtpbmcgeW91ciB0b2RvIGxpc3RzIScsIFxuICAgIGBBZGQgbmV3IHByb2plY3RzIGJ5IHR5cGluZyB0aGVpciBuYW1lIGluIHRoZSBzaWRlYmFyIGFuZCBwcmVzc2luZyBlbnRlci5cXG5gLFxuICAgICcnLCBcbiAgICAnbG93J1xuICApXG59IGVsc2Uge1xuICBQcm9qZWN0cy5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG59XG5cbi8vZmluZHMgYW5kIGNsaWNrcyB0aGUgZmlyc3QgcHJvamVjdCBpbiB0aGUgcHJvamVjdCBsaXN0IHRvIHJlbmRlciBpdCdzIHRvZG9zXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykuZGlzcGF0Y2hFdmVudChcbiAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgIHZpZXc6IHdpbmRvdyxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSlcbik7XG5cbi8qXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxJylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzInKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc0JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzUnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCc3JylcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJzgnKVxuUHJvamVjdHMuZmluZCgnc29tZXRoaW5nJykuYWRkVG9kbygnOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxNycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxOCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcxOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyMycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNicpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyNycpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyOCcpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCcyOScpXG5Qcm9qZWN0cy5maW5kKCdzb21ldGhpbmcnKS5hZGRUb2RvKCczMCcpXG4qL1xuXG4vKiBUZXN0aW5nIHByb2plY3RzOlxuUHJvamVjdHMuYWRkKCduYW1lJykuZmluZCgnbmFtZScpLmFkZFRvZG8oJ0NoYW5nZSBteSBuYW1lIScsIFwiQ2xpY2sgRWRpdCBuZXh0IHRvIG15IHByb2plY3QncyBuYW1lIHRvIGNoYW5nZSBpdCEgWW91IG1heSBhbHNvIHJlbW92ZSB0aGUgcHJvamVjdCwgb3IgYWRkIGEgbmV3IG9uZSBmcm9tIHRoZSBzaWRlYmFyIHdoaWxlIHlvdSdyZSBhdCBpdCFcIiwgJ25ldmVyJywgJ2xvdycpXG5Qcm9qZWN0cy5hZGQoJ3NvbWV0aGluZycpLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oXCJzb21ldGhpbmdUb2RvXCIsICd0aGlzIGlzIHNvbWV0aGluZyB0byBkbycsICduZXZlcicsICdsb3cnKTtcblByb2plY3RzLmZpbmQoJ3NvbWV0aGluZycpLmFkZFRvZG8oJ3NvbWV0aGluZ0Vsc2VUb2RvJywgJ1RoaXMgaXMgc29tZXRoaW5nIGVsc2UgdG8gZG8nLCAnbmV2ZXInLCAnbG93JylcbiovXG4vL1RvRG8gb2JqZWN0cyBzaG91bGQgaGF2ZSBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eS5cbi8vTm90ZXMgYW5kIGNoZWNrbGlzdCB3b3VsZCBiZSBuaWNlIHRvby5cblxuLy9Qb2plY3RzIHNob3VsZCBob2xkIGxpc3RzIG9mIFRvRG8gb2JqZWN0cy4gVGhlcmUgc2hvdWxkIGJlIGEgZGVmYXVsdCBwcm9qZWN0XG4vL3VzZXJzIGNhbiBhZGQgVG9EbyBvYmplY3RzIHRvLiBVc2VycyBzaG91bGQgYmUgYWJsZSB0byBjcmVhdGUgbmV3IHByb2plY3RzXG4vL2FuZCBjaG9vc2Ugd2hpY2ggdGhlaXIgdG9kb3MgZ28uXG5cbi8vc2VwYXJhdGUgYXBwbGljYXRpb24gbG9naWMgZnJvbSBET00tUmVsYXRlZCBzdHVmZi5cblxuLy9Vc2VycyBzaG91bGQgYmUgYWJsZSB0bzogdmlldyBhbGwgcHJvamVjdHMsIHZpZXcgYWxsIHRvZG9zIGluIGVhY2ggcHJvamVjdCxcbi8vZXhwYW5kIGEgdG9kbyB0byBzZWUvZWRpdCwgYW5kIGRlbGV0ZSBUb2Rvcy5cblxuLy9NYXkgd2FudCB0byB1c2UgZGF0ZS1mbnMuXG5cbi8vdXNlIGxvY2FsIHN0b3JhZ2UhIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9