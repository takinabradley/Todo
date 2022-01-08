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
___CSS_LOADER_EXPORT___.push([module.id, "/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\ttext-decoration: underline 2px;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(49, 53, 55);\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-add.active {\r\n\tcolor: green;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(223, 32, 32);\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;CACC,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,WAAW;CACX,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA,UAAU;AACV;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,OAAO;CACP,QAAQ;CACR,gBAAgB;CAChB,aAAa;CACb,iCAAiC;CACjC,6BAA6B;AAC9B;;AAEA,WAAW;AACX;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;;AAGA,uBAAuB;AACvB;CACC,aAAa;CACb,iBAAiB;CACjB,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,OAAO;CACP,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,eAAe;CACf,yBAAyB;AAC1B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,UAAU;CACV,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,8BAA8B;CAC9B,OAAO;CACP,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;AACnB;;;AAGA,eAAe;AACf;CACC,aAAa;CACb,OAAO;CACP,2BAA2B;AAC5B;;;AAGA,WAAW;AACX;CACC,aAAa;CACb,8BAA8B;CAC9B,iCAAiC;CACjC,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,UAAU;AACX;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,8BAA8B;CAC9B,iCAAiC;CACjC,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,cAAc;CACd,mBAAmB;CACnB,gBAAgB;CAChB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,OAAO;CACP,UAAU;CACV,kBAAkB;CAClB,YAAY;CACZ,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;;;;CAIC,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;;CAEC,iCAAiC;CACjC,yBAAyB;AAC1B;;AAEA,cAAc;AACd;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,yBAAyB;AAC1B;;AAEA;CACC,OAAO;CACP,eAAe;CACf,gBAAgB;EACf,YAAY;EACZ,UAAU;CACX,eAAe;;CAEf,gBAAgB;CAChB,iBAAiB;;CAEjB,YAAY;CACZ,gBAAgB;AACjB","sourcesContent":["/*General Layout*/\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 18px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\nmain {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tmin-height: 100vh;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n/*sidebar*/\r\n.sidebar  {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-start;\r\n\tflex: 1;\r\n\tgap: 3px;\r\n\tmax-width: 275px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n/*add form*/\r\n.project-add {\r\n\tmargin: 5px 5px 5px 25px;\r\n}\r\n\r\n.project-add-button, .project-add-label {\r\n\tdisplay: none;\r\n}\r\n\r\n.project-add-input {\r\n\ttext-align: center;\r\n\theight: 24px;\r\n}\r\n\r\n\r\n/*project list styling*/\r\n.project-element {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tword-wrap: break-word;\r\n\twidth: 100%;\r\n}\r\n\r\n.project-edit {\r\n\tflex: 1;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmax-width: 25px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.project-remove {\r\n\tflex: 1;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-weight: 900;\r\n\tmax-width: 25px;;\r\n}\r\n\r\n.project-name {\r\n\talign-self: flex-end;\r\n\ttext-decoration: underline 2px;\r\n\tflex: 5;\r\n\tmax-width: 225px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.project-name.editable {\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n\r\n/*todo section*/\r\n.todos {\r\n\tpadding: 10px;\r\n\tflex: 5;\r\n\tbackground-color: slategray;\r\n}\r\n\r\n\r\n/*sort bar*/\r\n.sort-bar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(49, 53, 55);\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 3px;\r\n\tpadding-bottom: 3px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-title, .sort-description, .sort-priority, .sort-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.sort-title, .sort-description, .sort-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.sort-add {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-add.active {\r\n\tcolor: green;\r\n}\r\n\r\n.sort-remove {\r\n\tflex: 1;\r\n\tmax-width: 10px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 3.5px;\r\n\tmargin-right: 3.5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.sort-remove.active {\r\n\tcolor: red;\r\n}\r\n\r\n/*Todo Elements*/\r\n.todo-element {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tborder-radius: 5px;\r\n\twidth: 100%;\r\n\tword-wrap: break-word;\r\n\tflex: 0 1 auto;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tword-break: break-word;\r\n}\r\n\r\n.todo-element.removeable:hover {\r\n\tbackground-color: rgb(223, 32, 32);\r\n}\r\n\r\n.todo-title, .todo-description, .todo-priority, .todo-duedate {\r\n\tflex: 1;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding: 3px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.todo-description {\r\n\ttext-align: left;\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.todo-title, .todo-description, .todo-duedate {\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.todo-title.editable, \r\n.todo-description.editable, \r\n.todo-priority.editable, \r\n.todo-duedate.editable {\r\n\tborder: 1px solid gray;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.todo-priority.editable,\r\n.todo-duedate.editable {\r\n\tbackground-color: rgb(38, 41, 43);\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n/*Todo Editor*/\r\n.todo-edit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\tcolor: rgb(228, 226, 224);\r\n}\r\n\r\n.todo-submit {\r\n\tflex: 1;\r\n\tmax-width: 20px;\r\n\tbackground: none;\r\n  border: none;\r\n  padding: 0;\r\n\tfont-size: 20px;\r\n\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\r\n\tcolor: green;\r\n\tfont-weight: 900;\r\n}"],"sourceRoot":""}]);
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
const Events = (function () {
  const events = {}

  function on (eventName, fn) {
    events[eventName] = events[eventName] || []
    events[eventName].push(fn)
  }

  function off (eventName, fn) {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  function emit (eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }

  return { on, off, emit, get list () { return events } }
})()

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

const Projects = (function () {
  const projectsList = []

  function _saveToLocalStorage () {
    localStorage.setItem('projectsList', JSON.stringify(projectsList))
  };

  function getFromLocalStorage () {
    const storage = JSON.parse(localStorage.getItem('projectsList'))
    if (storage === null) return // returns if localStorage hasn't been used

    for (let i = 0; i < storage.length; i++) {
      const project = storage[i]
      add(project.name)
      for (let i = 0; i < project.listTodos.length; i++) {
        find(project.name).addTodo(project.listTodos[i].title,
          project.listTodos[i].description,
          project.listTodos[i].duedate,
          project.listTodos[i].priority)
      }
    }
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  function add (name) {
    if (name === undefined || /^\s*$/.test(name)) { // returns if string is empty or only contains whitespace
      return console.log('Projects must have a name!')
    } else if (find(name) !== undefined) {
      return alert('Projects cannot have identical names')
    }

    const todoList = []
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function addTodo (title, description = '', duedate = '', priority = '') {
      if (title === undefined || /^\s*$/.test(title)) {
        return alert('Todos must have a title!')
      } else if (findTodo(title) !== undefined) {
        return alert('Todos cannot have identical titles')
      }

      const parentProject = this.name

      function edit (field, change) {
        if (field === undefined || change === undefined) {
          return alert('Missing arguments!')
        } else if (field === 'title') {
          if (title === undefined || /^\s*$/.test(title)) {
            return alert('Todos must have a title!')
          } else if (findTodo(change) !== undefined && change !== title) {
            return alert('Todos cannot have identical titles')
          }
          title = change
        } else if (field === 'description') {
          description = change
        } else if (field === 'duedate') {
          duedate = change
        } else if (field === 'priority') {
          priority = change
        } else {
          return alert('Field does not exist!')
        }

        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
        return find(parentProject)
      }
      // Todo object
      const todo = Object.freeze({
        get title () { return title },
        get description () { return description },
        get duedate () { return duedate },
        get priority () { return priority },
        get parentProject () { return parentProject },
        edit
      })
      todoList.push(todo)
      _saveToLocalStorage()
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
      return this
    };
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // other project crud
    function findTodo (title) {
      if (title === undefined) {
        return alert('Todo not found!')
      } else {
        return todoList.find(todo => todo.title === title)
      }
    };

    function removeTodo (title) {
      const index = todoList.findIndex(todo => todo.title === title)

      if (index === -1) {
        return alert('Todo not found!')
      } else {
        todoList.splice(index, 1)
        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
        return this
      }
    }

    // Project object
    const project = Object.freeze({
      get name () { return name },
      set name (newName) {
        if (newName === undefined || /^\s*$/.test(newName)) {
          return alert('Projects must have a name!')
        } else if (find(newName) !== undefined && newName !== name) {
          return alert('Projects cannot have identical names')
        } else {
          name = newName
          _saveToLocalStorage()
          _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
        }
      },
      get listTodos () { return [...todoList] },
      addTodo,
      findTodo,
      removeTodo
    })
    projectsList.push(project)
    _saveToLocalStorage()
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
    return this
  };
  /* ~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  // other module crud
  function remove (name) {
    const index = projectsList.findIndex(project => project.name === name)

    if (index === -1) {
      return alert('Project not found!') // returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index, 1)
      _saveToLocalStorage()
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate')
      return this
    }
  }

  function find (name) {
    if (name === undefined) {
      return alert('Project not found!')
    } else {
      return projectsList.find(project => project.name === name)
    }
  };

  // Module object
  return {
    get list () {
      return [...projectsList]
    },
    add,
    remove,
    find,
    getFromLocalStorage
  }
})()

/* Renders Projects on the webpage.
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

const ProjectRenderer = (function () {
  let projectArea
  let todoArea
  let renderEditable
  let firstInit = true

  function _appendProjectAdder () {
    const form = document.createElement('form')
    form.classList.add('project-add')
    form.setAttribute('autocomplete', 'off')
    projectArea.appendChild(form)

    const addLabel = document.createElement('label')
    addLabel.classList.add('project-add-label')
    addLabel.setAttribute('for', 'name')
    addLabel.textContent = 'Project Name:'
    form.appendChild(addLabel)

    const addInput = document.createElement('input')
    addInput.classList.add('project-add-input')
    addInput.setAttribute('name', 'name')
    addInput.setAttribute('type', 'text')
    addInput.setAttribute('placeholder', 'New Project')
    addInput.setAttribute('required', '')
    form.appendChild(addInput)

    const addBtn = document.createElement('button')
    addBtn.classList.add('project-add-button')
    addBtn.setAttribute('type', 'submit')
    addBtn.textContent = 'Add'
    form.appendChild(addBtn)

    const addProject = (e) => Projects.add(addInput.value)
    addBtn.addEventListener('click', addProject)
  }

  function _appendProjectEditor (projectElement) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('project-edit')
    editBtn.textContent = '✎'
    projectElement.appendChild(editBtn)

    const editProject = (e) => {
      const projectNameElement = e.target.nextSibling
      const projectName = projectNameElement.textContent

      // change element properties
      projectNameElement.setAttribute('contenteditable', 'true')
      projectNameElement.classList.add('editable')
      editBtn.setAttribute('hidden', '')

      // add remove element
      const removeBtn = document.createElement('button')
      removeBtn.classList.add('project-remove')
      removeBtn.textContent = '-'
      projectElement.insertBefore(removeBtn, projectNameElement)
      removeBtn.addEventListener('click', () => Projects.remove(projectName))

      // exit editor and apply any name changes
      const exitEditor = (e) => {
        projectNameElement.setAttribute('contenteditable', 'false')
        editBtn.removeAttribute('hidden')
        projectElement.removeChild(removeBtn)
        projectNameElement.classList.remove('editable')

        if (projectNameElement.textContent !== projectName) {
          const newName = projectNameElement.textContent
          Projects.find(projectName).name = newName

          // checks if old project name exists, and resets textContent if still does
          if (typeof Projects.find(projectName) === 'object') {
            projectNameElement.textContent = projectName
          }
        }

        // must remove listener, or will continue attempting to remove removeBtn
        projectElement.removeEventListener('mouseleave', exitEditor)
      }

      projectElement.addEventListener('mouseleave', exitEditor)
    }
    // Hides edit button and provides additional options until user moves away
    editBtn.addEventListener('click', editProject)
  }

  function _renderProjects () {
    if (typeof projectArea !== 'object') {
      console.log('ProjectRenderer: projectArea left undefined!')
      return
    }

    projectArea.innerHTML = ''

    if (renderEditable === true) _appendProjectAdder()

    Projects.list.forEach(project => {
      const projectElement = document.createElement('div')
      projectElement.classList.add('project-element')

      if (renderEditable === true) _appendProjectEditor(projectElement)

      const name = document.createElement('span')
      name.classList.add('project-name')
      name.textContent = project.name
      projectElement.appendChild(name)

      // renders todos on project click
      name.addEventListener('click', (e) => {
        if (!name.classList.contains('editable')) { // prevents switching in editor mode
          _renderTodos(e.target.textContent)
        }
      })

      if (renderEditable === true) {
        const projectAdder = document.querySelector('.project-add')
        projectAdder.after(projectElement)
      } else {
        projectArea.prepend(projectElement)
      }
    })
  }

  function _appendTodoAdder (sortBar, projectName) {
    const addBtn = document.createElement('button')
    addBtn.classList = 'sort-add'
    addBtn.textContent = '+'
    sortBar.appendChild(addBtn)

    const exitTodoAdder = () => {
      const addForm = document.querySelector('.todo-addForm')
      const projectName = addForm.getAttribute('data-project')
      if (addForm !== null) {
        addForm.remove()
      }

      const projectNameElements = document.querySelectorAll('.project-name')
      projectNameElements.forEach(element => {
        if (element.textContent === projectName) {
          element.dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true
            })
          )
        }
      })

      addBtn.classList.remove('active')
      addBtn.addEventListener('click', createAddForm, { once: true })
    }

    const addNewTodo = (e, addForm) => {
      const parentProject = addForm.getAttribute('data-project')
      const newTodo = addForm.querySelector('.todo-title').textContent
      const description = addForm.querySelector('.todo-description').textContent
      const duedate = addForm.querySelector('.todo-duedate').value
      const priorityElement = addForm.querySelector('.todo-priority')
      const priority = priorityElement.options[priorityElement.selectedIndex].text

      Projects.find(parentProject).addTodo(newTodo, description, duedate, priority)

      exitTodoAdder()

      console.log(priority)
    }

    const createAddForm = (e) => {
      const addForm = document.createElement('div')
      addForm.classList.add('todo-element', 'todo-addForm')
      addForm.setAttribute('data-project', projectName)

      const submitBtn = document.createElement('button')
      submitBtn.classList.add('todo-submit', 'editable')
      submitBtn.textContent = '✓'
      addForm.append(submitBtn)

      const title = document.createElement('span')
      title.textContent = 'New Todo'
      title.classList.add('todo-title', 'editable')
      title.setAttribute('contentEditable', true)
      addForm.appendChild(title)

      const description = document.createElement('span')
      description.classList.add('todo-description', 'editable')
      description.setAttribute('contentEditable', true)
      addForm.appendChild(description)

      const duedateInput = document.createElement('input')
      duedateInput.classList.add('todo-duedate', 'editable')
      duedateInput.setAttribute('for', 'duedate')
      duedateInput.setAttribute('type', 'date')
      addForm.appendChild(duedateInput)

      const prioritySelect = document.createElement('select')
      prioritySelect.classList.add('todo-priority', 'editable')

      const lowPriority = document.createElement('option')
      lowPriority.textContent = 'low'
      const mediumPriority = document.createElement('option')
      mediumPriority.textContent = 'medium'
      const highPriority = document.createElement('option')
      highPriority.textContent = 'high'

      prioritySelect.append(lowPriority, mediumPriority, highPriority)
      addForm.appendChild(prioritySelect)

      todoArea.insertBefore(addForm, document.querySelector('.todo-element'))
      addBtn.classList.add('active')

      const submitHandler = (e) => addNewTodo(e, addForm)
      submitBtn.addEventListener('click', submitHandler, { once: true })
      addBtn.addEventListener('click', exitTodoAdder, { once: true })
    }

    addBtn.addEventListener('click', createAddForm, { once: true })
  }

  function _appendTodoRemover (sortBar) {
    const removeBtn = document.createElement('button')
    removeBtn.classList = 'sort-remove'
    removeBtn.textContent = '-'
    sortBar.appendChild(removeBtn)

    const removeElement = (e) => {
      const parentElement = e.target.parentElement
      const parentProject = parentElement.getAttribute('data-project')
      const todoTitle = parentElement.querySelector('.todo-title').textContent
      console.log(parentProject, todoTitle)

      Projects.find(parentProject).removeTodo(todoTitle)
      parentElement.remove()
      console.log('removed!')
    }

    const startRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element')
      todoElements.forEach(element => {
        element.addEventListener('click', removeElement)
        element.classList.add('removeable')
      })

      removeBtn.classList.add('active')
      removeBtn.addEventListener('click', exitRemoveEditor, { once: true })
    }

    const exitRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll('.todo-element')
      todoElements.forEach(element => {
        element.removeEventListener('click', removeElement)
        element.classList.remove('removeable')
      })

      removeBtn.classList.remove('active')
      removeBtn.addEventListener('click', startRemoveEditor, { once: true })
    }

    removeBtn.addEventListener('click', startRemoveEditor, { once: true })
  }

  function _appendSortBar (projectName) {
    const sortBar = document.createElement('div')
    sortBar.classList.add('sort-bar')

    if (renderEditable === true) {
      _appendTodoAdder(sortBar, projectName)
      _appendTodoRemover(sortBar)
    }

    const sortTitle = document.createElement('span')
    sortTitle.classList.add('sort-title')
    sortTitle.textContent = 'title'
    sortBar.appendChild(sortTitle)

    const sortDescription = document.createElement('span')
    sortDescription.classList.add('sort-description')
    sortDescription.textContent = 'description'
    sortBar.appendChild(sortDescription)

    const sortDuedate = document.createElement('span')
    sortDuedate.classList.add('sort-duedate')
    sortDuedate.textContent = 'duedate'
    sortBar.appendChild(sortDuedate)

    const sortPriority = document.createElement('span')
    sortPriority.classList.add('sort-priority')
    sortPriority.textContent = 'priority'
    sortBar.appendChild(sortPriority)

    todoArea.appendChild(sortBar)
  }

  function _makeTodoEditable (Todo, bool) {
    Todo.title.element.setAttribute('contentEditable', bool)
    Todo.description.element.setAttribute('contentEditable', bool)

    let duedateInput = document.createElement('input')
    duedateInput.classList.add('todo-duedate', 'editable')
    duedateInput.setAttribute('for', 'duedate')
    duedateInput.setAttribute('type', 'date')
    duedateInput.setAttribute('value', Todo.duedate.text)

    let prioritySelect = document.createElement('select')
    prioritySelect.classList.add('todo-duedate', 'editable')

    const lowPriority = document.createElement('option')
    lowPriority.textContent = 'low'
    const mediumPriority = document.createElement('option')
    mediumPriority.textContent = 'medium'
    const highPriority = document.createElement('option')
    highPriority.textContent = 'high';

    // sets default selection to be the same as current value
    [lowPriority, mediumPriority, highPriority].forEach(element => {
      if (element.textContent === Todo.priority.text) {
        element.setAttribute('selected', '')
      }
    })

    prioritySelect.append(lowPriority, mediumPriority, highPriority)

    if (bool === true) {
      Todo.editBtn.setAttribute('hidden', '')
      Todo.title.element.classList.add('editable')
      Todo.description.element.classList.add('editable')

      Todo.duedate.element.setAttribute('hidden', '')
      Todo.element.insertBefore(duedateInput, Todo.priority.element)

      Todo.priority.element.setAttribute('hidden', '')
      Todo.element.appendChild(prioritySelect)
    } else {
      Todo.editBtn.removeAttribute('hidden')
      Todo.title.element.classList.remove('editable')
      Todo.description.element.classList.remove('editable')

      Todo.duedate.element.removeAttribute('hidden')
      Todo.priority.element.removeAttribute('hidden')

      // must update elements to remove them?
      duedateInput = Todo.element.querySelector('input')
      prioritySelect = Todo.element.querySelector('select')
      Todo.element.removeChild(duedateInput)
      Todo.element.removeChild(prioritySelect)
    }
  }

  function _abortTodoEdit (Todo) {
    _makeTodoEditable(Todo, false)
    Todo.element.removeChild(Todo.submitBtn)

    Todo.title.element.textContent = Todo.title.text
    Todo.description.element.textContent = Todo.description.text
    Todo.duedate.element.textContent = Todo.duedate.text
    Todo.priority.element.textContent = Todo.priority.text
  }

  function _submitTodoChanges (Todo) {
    const duedateInput = Todo.element.querySelector('input')
    const duedateValue = duedateInput.value

    const prioritySelect = Todo.element.querySelector('select')
    const priorityOption = prioritySelect.options[prioritySelect.selectedIndex].text

    // compares current text to text when edit was initiated
    if (Todo.title.text === Todo.title.element.textContent &&
        Todo.description.text === Todo.description.element.textContent &&
        Todo.duedate.text === duedateValue &&
        Todo.priority.text === priorityOption
    ) {
      _abortTodoEdit(Todo)
    } else {
      const parentProject = Todo.element.getAttribute('data-project')
      const title = Todo.title.text
      const newTitle = Todo.title.element.textContent
      const newDescription = Todo.description.element.textContent
      const newDuedate = duedateValue
      const newPriority = priorityOption
      let titleChanged

      if (Todo.title.element.textContent !== Todo.title.text) {
        Projects.find(parentProject).findTodo(title).edit('title', newTitle)
        // checks if old todo title exists, and resets textContent if still does
        if (typeof Projects.find(parentProject).findTodo(title) === 'object') {
          Todo.title.element.textContent = Todo.title.text
          titleChanged = false
        } else {
          titleChanged = true
        }
      }

      const todoObj = (titleChanged)
        ? Projects.find(parentProject).findTodo(newTitle)
        : Projects.find(parentProject).findTodo(title)

      todoObj.edit('description', newDescription)
      todoObj.edit('duedate', newDuedate)
      todoObj.edit('priority', newPriority)

      Todo.element.removeChild(Todo.submitBtn)
      _makeTodoEditable(Todo, false)

      Todo.duedate.element.textContent = newDuedate
      Todo.priority.element.textContent = newPriority
      console.log(todoObj)
    }
  };

  // this function seems a bit messy
  function _appendTodoEditor (todoElement) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('todo-edit')
    editBtn.textContent = '✎'
    todoElement.appendChild(editBtn)

    editBtn.addEventListener('click', (e) => {
      // Makes the entire list of elements easier to pass around to other functions
      const Todo = {
        element: e.target.parentElement, // the entire todo parent element
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

      Todo.submitBtn = document.createElement('button')
      Todo.submitBtn.classList.add('todo-submit')
      Todo.submitBtn.textContent = '✓'
      Todo.element.prepend(Todo.submitBtn)

      const submitHandler = () => _submitTodoChanges(Todo)
      Todo.submitBtn.addEventListener('click', submitHandler, { once: true })
    })
  }

  function _renderTodos (projectName) {
    if (typeof todoArea !== 'object') {
      console.log('ProjectRenderer: todoArea left undefined!')
      return
    }

    todoArea.innerHTML = ''

    const todos = Projects.find(projectName).listTodos

    _appendSortBar(projectName)

    if (todos.length > 0) {
      todos.forEach(todo => {
        const todoElement = document.createElement('div')
        todoElement.classList.add('todo-element')
        todoElement.setAttribute('data-project', todo.parentProject)

        if (renderEditable === true) _appendTodoEditor(todoElement)

        const title = document.createElement('span')
        title.textContent = todo.title
        title.classList.add('todo-title')
        todoElement.appendChild(title)

        const description = document.createElement('span')
        description.textContent = todo.description
        description.classList.add('todo-description')
        todoElement.appendChild(description)

        const duedate = document.createElement('span')
        duedate.textContent = todo.duedate
        duedate.classList.add('todo-duedate')
        todoElement.appendChild(duedate)

        const priority = document.createElement('span')
        priority.textContent = todo.priority
        priority.classList.add('todo-priority')
        todoElement.appendChild(priority)

        todoArea.insertBefore(todoElement, document.querySelector('.todo-element'))
      })
    }
  }

  function off () {
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].off('projectsUpdate', _renderProjects)

    projectArea.innerHTML = ''
    todoArea.innerHTML = ''

    projectArea = undefined
    todoArea = undefined
    renderEditable = undefined
    firstInit = true

    this.init = init
    delete this.setRenderConfig
    delete this.off
  }

  function init (projectElement, todoElement, editable = true) {
    projectArea = projectElement
    todoArea = todoElement
    renderEditable = editable
    _renderProjects()

    if (firstInit === true) {
      /* Putting Events code here allows events to be triggered only after init,
      at the cost of creating a closure. */
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].on('projectsUpdate', _renderProjects)

      // reuses this function to set options after init if desired.
      firstInit = false
      this.setConfig = init
      this.off = off
    }
    delete this.init
  }

  return { init } // after init: {setConfig: init, off};
})()

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



_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectRenderer.init(
  document.querySelector('.sidebar'),
  document.querySelector('.todos'),
  true
)

if (localStorage.getItem('projectsList') === '[]' || localStorage.length === 0) {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].add('New Project').find('New Project').addTodo(
    'Start making your todo lists!',
    'Add new projects by typing their name in the sidebar and pressing enter.\n',
    '',
    'low'
  )
} else {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFromLocalStorage()
}

// finds and clicks the first project in the project list to render it's todos
document.querySelector('.project-name').dispatchEvent(
  new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVSx1REFBVztBQUNyQjtBQUNBLE9BQU87QUFDUCx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSx1REFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHdEQUF3RCxZQUFZO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxZQUFZO0FBQ3ZFLHdEQUF3RCxZQUFZO0FBQ3BFOztBQUVBLHNEQUFzRCxZQUFZO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsK0RBQStELFlBQVk7QUFDM0U7O0FBRUEsNkRBQTZELFlBQVk7QUFDekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE9BQU8sZ0JBQWdCO0FBQ2xDLENBQUM7O0FBRUQsaUVBQWUsUUFBUTtBQUNHOzs7Ozs7O1VDcnZCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDNEM7O0FBRWpFLHNFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsZ0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsZ0ZBQTRCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypHZW5lcmFsIExheW91dCovXFxyXFxuKiB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdGNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qc2lkZWJhciovXFxyXFxuLnNpZGViYXIgIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDNweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI3NXB4O1xcclxcblxcdHBhZGRpbmc6IDE1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDMpO1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKmFkZCBmb3JtKi9cXHJcXG4ucHJvamVjdC1hZGQge1xcclxcblxcdG1hcmdpbjogNXB4IDVweCA1cHggMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWRkLWJ1dHRvbiwgLnByb2plY3QtYWRkLWxhYmVsIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQtaW5wdXQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qcHJvamVjdCBsaXN0IHN0eWxpbmcqL1xcclxcbi5wcm9qZWN0LWVsZW1lbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lZGl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuXFx0bWF4LXdpZHRoOiAyNXB4OztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMjVweDtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUuZWRpdGFibGUge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnRvZG8gc2VjdGlvbiovXFxyXFxuLnRvZG9zIHtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGZsZXg6IDU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnNvcnQgYmFyKi9cXHJcXG4uc29ydC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNTMsIDU1KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDNweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcblxcdGNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtcHJpb3JpdHksIC5zb3J0LWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LXRpdGxlLCAuc29ydC1kZXNjcmlwdGlvbiwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcblxcdGNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWFkZC5hY3RpdmUge1xcclxcblxcdGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtcmVtb3ZlIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogMy41cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtcmVtb3ZlLmFjdGl2ZSB7XFxyXFxuXFx0Y29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVsZW1lbnRzKi9cXHJcXG4udG9kby1lbGVtZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Myk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG5cXHRmbGV4OiAwIDEgYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXHJcXG5cXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1lbGVtZW50LnJlbW92ZWFibGU6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDMyLCAzMik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLCAudG9kby1kZXNjcmlwdGlvbiwgLnRvZG8tcHJpb3JpdHksIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0d2lkdGg6IDI1JTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogM3B4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZS5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24uZWRpdGFibGUsIFxcclxcbi50b2RvLXByaW9yaXR5LmVkaXRhYmxlLCBcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsXFxyXFxuLnRvZG8tZHVlZGF0ZS5lZGl0YWJsZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDMpO1xcclxcblxcdGNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbi8qVG9kbyBFZGl0b3IqL1xcclxcbi50b2RvLWVkaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcdGNvbG9yOiByZ2IoMjI4LCAyMjYsIDIyNCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXN1Ym1pdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxuXFx0Y29sb3I6IGdyZWVuO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZUFBZTtDQUNmLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4Qjs7QUFFQSxVQUFVO0FBQ1Y7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixPQUFPO0NBQ1AsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsaUNBQWlDO0NBQ2pDLDZCQUE2QjtBQUM5Qjs7QUFFQSxXQUFXO0FBQ1g7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOzs7QUFHQSx1QkFBdUI7QUFDdkI7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsVUFBVTtDQUNWLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsOEJBQThCO0NBQzlCLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7O0FBR0EsZUFBZTtBQUNmO0NBQ0MsYUFBYTtDQUNiLE9BQU87Q0FDUCwyQkFBMkI7QUFDNUI7OztBQUdBLFdBQVc7QUFDWDtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsaUNBQWlDO0NBQ2pDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsZ0JBQWdCO0VBQ2YsWUFBWTtFQUNaLFVBQVU7Q0FDWCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixpQ0FBaUM7Q0FDakMsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLE9BQU87Q0FDUCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTs7OztDQUlDLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsaUNBQWlDO0NBQ2pDLHlCQUF5QjtBQUMxQjs7QUFFQSxjQUFjO0FBQ2Q7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixVQUFVO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osVUFBVTtDQUNYLGVBQWU7O0NBRWYsZ0JBQWdCO0NBQ2hCLGlCQUFpQjs7Q0FFakIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkdlbmVyYWwgTGF5b3V0Ki9cXHJcXG4qIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLypzaWRlYmFyKi9cXHJcXG4uc2lkZWJhciAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGdhcDogM3B4O1xcclxcblxcdG1heC13aWR0aDogMjc1cHg7XFxyXFxuXFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Myk7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qYWRkIGZvcm0qL1xcclxcbi5wcm9qZWN0LWFkZCB7XFxyXFxuXFx0bWFyZ2luOiA1cHggNXB4IDVweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQtYnV0dG9uLCAucHJvamVjdC1hZGQtbGFiZWwge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC1pbnB1dCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypwcm9qZWN0IGxpc3Qgc3R5bGluZyovXFxyXFxuLnByb2plY3QtZWxlbWVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1heC13aWR0aDogMjVweDtcXHJcXG5cXHRjb2xvcjogcmdiKDIyOCwgMjI2LCAyMjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cHg7O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIyNXB4O1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZS5lZGl0YWJsZSB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qdG9kbyBzZWN0aW9uKi9cXHJcXG4udG9kb3Mge1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0ZmxleDogNTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qc29ydCBiYXIqL1xcclxcbi5zb3J0LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA1MywgNTUpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0ZmxleDogMCAxIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogM3B4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtdGl0bGUsIC5zb3J0LWRlc2NyaXB0aW9uLCAuc29ydC1wcmlvcml0eSwgLnNvcnQtZHVlZGF0ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAzcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtdGl0bGUsIC5zb3J0LWRlc2NyaXB0aW9uLCAuc29ydC1kdWVkYXRlIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1hZGQge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYWRkLmFjdGl2ZSB7XFxyXFxuXFx0Y29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1yZW1vdmUge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAzLjVweDtcXHJcXG5cXHRjb2xvcjogcmdiKDIyOCwgMjI2LCAyMjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1yZW1vdmUuYWN0aXZlIHtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvZG8gRWxlbWVudHMqL1xcclxcbi50b2RvLWVsZW1lbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDEsIDQzKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0d29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcdGZsZXg6IDAgMSBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDVweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcblxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZW1lbnQucmVtb3ZlYWJsZTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMzIsIDMyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUsIC50b2RvLWRlc2NyaXB0aW9uLCAudG9kby1wcmlvcml0eSwgLnRvZG8tZHVlZGF0ZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAzcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSwgLnRvZG8tZGVzY3JpcHRpb24sIC50b2RvLWR1ZWRhdGUge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLmVkaXRhYmxlLCBcXHJcXG4udG9kby1kZXNjcmlwdGlvbi5lZGl0YWJsZSwgXFxyXFxuLnRvZG8tcHJpb3JpdHkuZWRpdGFibGUsIFxcclxcbi50b2RvLWR1ZWRhdGUuZWRpdGFibGUge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS5lZGl0YWJsZSxcXHJcXG4udG9kby1kdWVkYXRlLmVkaXRhYmxlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Myk7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLypUb2RvIEVkaXRvciovXFxyXFxuLnRvZG8tZWRpdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0Y29sb3I6IHJnYigyMjgsIDIyNiwgMjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc3VibWl0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDVweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG5cXHRjb2xvcjogZ3JlZW47XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHt9XG5cbiAgZnVuY3Rpb24gb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdXG4gICAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQgKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgb24sIG9mZiwgZW1pdCwgZ2V0IGxpc3QgKCkgeyByZXR1cm4gZXZlbnRzIH0gfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcblxuLyogUGVvcGxlLmpzXG5cbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBQZW9wbGUgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwZW9wbGUgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQZW9wbGUoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKHBlcnNvbiA9PiBwZW9wbGUucHVzaChwZXJzb24pKTtcbiAgICBFdmVudHMuZW1pdCgncGVvcGxlQ2hhbmdlZCcsIHBlb3BsZSk7XG4gIH1cblxuICByZXR1cm4ge2FkZFBlb3BsZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGU7XG4qL1xuXG4vKiBTdGF0cy5qc1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFN0YXRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHMgPSB7fTtcblxuICBFdmVudHMub24oJ3Blb3BsZUNoYW5nZWQnLCBzZXRQZW9wbGUpO1xuXG4gIGZ1bmN0aW9uIHNldFBlb3BsZShwZW9wbGUpIHtcbiAgICBzdGF0cy5wZW9wbGUgPSBwZW9wbGUubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0cy5wZW9wbGUpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiovXG4iLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJ1xuXG4vKlxuICAgIFRoaXMgbW9kdWxlIGV4cG9ydHMgYSAnUHJvamVjdHMnIG9iamVjdCB0aGF0IGtlZXBzXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG5cbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEdWVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JylcblxuICAgICAgVG8gYWRkIHRvZG9zIGFmdGVyIGNyZWF0aW9uIHJldHJpZXZlIGFuIG9iamVjdCBhbmQgdXNlIGl0J3MgYWRkVG9kbyBtZXRob2RcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5hZGRUb2RvKC4uLik7XG5cbiAgICAgIFJldHJpdmUgdG9kb3Mgd2l0aCAuZmluZFRvZG8oJ3RvZG9OYW1lJykgb3IgLmxpc3RUb2Rvc1xuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgZWRpdCBhIHRvZG8gdXNpbmcgdGhlIGVkaXQgbWV0aG9kIG9uIFRvZG8gb2JqZWN0cy4gVG9kb3MgbWF5IG5vdFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXVxuXG4gIGZ1bmN0aW9uIF9zYXZlVG9Mb2NhbFN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSlcbiAgICBpZiAoc3RvcmFnZSA9PT0gbnVsbCkgcmV0dXJuIC8vIHJldHVybnMgaWYgbG9jYWxTdG9yYWdlIGhhc24ndCBiZWVuIHVzZWRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2VbaV1cbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLFxuICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmR1ZWRhdGUsXG4gICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Qcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xuICBmdW5jdGlvbiBhZGQgKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHsgLy8gcmV0dXJucyBpZiBzdHJpbmcgaXMgZW1wdHkgb3Igb25seSBjb250YWlucyB3aGl0ZXNwYWNlXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJylcbiAgICB9IGVsc2UgaWYgKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW11cbiAgICAvKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cbiAgICBmdW5jdGlvbiBhZGRUb2RvICh0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICcnKSB7XG4gICAgICBpZiAodGl0bGUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KHRpdGxlKSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpXG4gICAgICB9IGVsc2UgaWYgKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSB0aGlzLm5hbWVcblxuICAgICAgZnVuY3Rpb24gZWRpdCAoZmllbGQsIGNoYW5nZSkge1xuICAgICAgICBpZiAoZmllbGQgPT09IHVuZGVmaW5lZCB8fCBjaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnTWlzc2luZyBhcmd1bWVudHMhJylcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QodGl0bGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpXG4gICAgICAgICAgfSBlbHNlIGlmIChmaW5kVG9kbyhjaGFuZ2UpICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlICE9PSB0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKVxuICAgICAgICB9XG5cbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpXG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpXG4gICAgICB9XG4gICAgICAvLyBUb2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGl0bGUgfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0aW9uIH0sXG4gICAgICAgIGdldCBkdWVkYXRlICgpIHsgcmV0dXJuIGR1ZWRhdGUgfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5ICgpIHsgcmV0dXJuIHByaW9yaXR5IH0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0ICgpIHsgcmV0dXJuIHBhcmVudFByb2plY3QgfSxcbiAgICAgICAgZWRpdFxuICAgICAgfSlcbiAgICAgIHRvZG9MaXN0LnB1c2godG9kbylcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgICAvKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cblxuICAgIC8vIG90aGVyIHByb2plY3QgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvICh0aXRsZSkge1xuICAgICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyAodGl0bGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpXG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgIGdldCBuYW1lICgpIHsgcmV0dXJuIG5hbWUgfSxcbiAgICAgIHNldCBuYW1lIChuZXdOYW1lKSB7XG4gICAgICAgIGlmIChuZXdOYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuZXdOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKVxuICAgICAgICB9IGVsc2UgaWYgKGZpbmQobmV3TmFtZSkgIT09IHVuZGVmaW5lZCAmJiBuZXdOYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lXG4gICAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldCBsaXN0VG9kb3MgKCkgeyByZXR1cm4gWy4uLnRvZG9MaXN0XSB9LFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGZpbmRUb2RvLFxuICAgICAgcmVtb3ZlVG9kb1xuICAgIH0pXG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdClcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKVxuICAgIHJldHVybiB0aGlzXG4gIH07XG4gIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG5cbiAgLy8gb3RoZXIgbW9kdWxlIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKSAvLyByZXR1cm5zIGlmIGZpbmRJbmRleCBkb2Vzbid0IGZpbmQgYSBtYXRjaFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kIChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgfVxuICB9O1xuXG4gIC8vIE1vZHVsZSBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCAoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF1cbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlXG4gIH1cbn0pKClcblxuLyogUmVuZGVycyBQcm9qZWN0cyBvbiB0aGUgd2VicGFnZS5cblVzZSBQcm9qZWN0UmVuZGVyZXIuaW5pdChwcm9qZWN0RWxlbWVudCwgdG9kb0VsZW1lbnQsIGVkaXRhYmxlKSB0byBzZXQgdGhlIGFyZWFzXG50byByZW5kZXIgdG8sIGFuZCB3aGV0aGVyIHRoZXkgbWF5IGJlIGVkaXRlZC4gVG9kb3Mgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZWlyXG5yZXNwZWN0aXZlIHByb2plY3RzIGFyZSBjbGlja2VkLlxuSWYgeW91J2QgbGlrZSB0byBvbmx5IHJlbmRlciBwcm9qZWN0IG5hbWVzLCB5b3UgbWF5IHBhc3MgYSBkdW1teSBub24tb2JqZWN0XG52YWx1ZSBhcyB0aGUgdG9kb0VsZW1lbnQuIEl0IHdpbGwgZmFpbCBxdWlldGx5IHdpdGggYSBjb25zb2xlIG1lc3NhZ2UgYnlcbmRlZmF1bHQuXG5cbkFmdGVyIGluaXQsIFByb2plY3RSZW5kZXJlciB3aWxsIGhhdmUgdHdvIG1ldGhvZHMgYXZhaWxhYmxlIHRvIGl0OlxuUHJvamVjdFJlbmRlcmVyLnNldENvbmZpZzogVXNlZCBleGFjdGx5IHRoZSBzYW1lIGFzIFByb2plY3RSZW5kZXJlci5pbml0XG5Qcm9qZWN0UmVuZGVyZXIub2ZmOiByZXNldHMgUHJvamVjdFJlbmRlcmVyIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUgYW5kIGNsZWFyc1xuZWxlbWVudHMgaW1tZWRpYXRlbHkuICovXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0QXJlYVxuICBsZXQgdG9kb0FyZWFcbiAgbGV0IHJlbmRlckVkaXRhYmxlXG4gIGxldCBmaXJzdEluaXQgPSB0cnVlXG5cbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RBZGRlciAoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtbGFiZWwnKVxuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKVxuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbClcblxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWlucHV0JylcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpXG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKVxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZElucHV0KVxuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtYnV0dG9uJylcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEVkaXRvciAocHJvamVjdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdCcpXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nXG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudFxuXG4gICAgICAvLyBjaGFuZ2UgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuXG4gICAgICAvLyBhZGQgcmVtb3ZlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUnKVxuICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJy0nXG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlQnRuLCBwcm9qZWN0TmFtZUVsZW1lbnQpXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBQcm9qZWN0cy5yZW1vdmUocHJvamVjdE5hbWUpKVxuXG4gICAgICAvLyBleGl0IGVkaXRvciBhbmQgYXBwbHkgYW55IG5hbWUgY2hhbmdlc1xuICAgICAgY29uc3QgZXhpdEVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgICAgIGVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmVCdG4pXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpXG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgICAgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubmFtZSA9IG5ld05hbWVcblxuICAgICAgICAgIC8vIGNoZWNrcyBpZiBvbGQgcHJvamVjdCBuYW1lIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgICAgaWYgKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXVzdCByZW1vdmUgbGlzdGVuZXIsIG9yIHdpbGwgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgcmVtb3ZlQnRuXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcilcbiAgICB9XG4gICAgLy8gSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdHMgKCkge1xuICAgIGlmICh0eXBlb2YgcHJvamVjdEFyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiBwcm9qZWN0QXJlYSBsZWZ0IHVuZGVmaW5lZCEnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJydcblxuICAgIGlmIChyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RBZGRlcigpXG5cbiAgICBQcm9qZWN0cy5saXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKVxuXG4gICAgICBpZiAocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KVxuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG4gICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgICAvLyByZW5kZXJzIHRvZG9zIG9uIHByb2plY3QgY2xpY2tcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIW5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YWJsZScpKSB7IC8vIHByZXZlbnRzIHN3aXRjaGluZyBpbiBlZGl0b3IgbW9kZVxuICAgICAgICAgIF9yZW5kZXJUb2RvcyhlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpXG4gICAgICAgIHByb2plY3RBZGRlci5hZnRlcihwcm9qZWN0RWxlbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RBcmVhLnByZXBlbmQocHJvamVjdEVsZW1lbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvQWRkZXIgKHNvcnRCYXIsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtYWRkJ1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuXG4gICAgY29uc3QgZXhpdFRvZG9BZGRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGRGb3JtJylcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYWRkRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgICBpZiAoYWRkRm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBhZGRGb3JtLnJlbW92ZSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJylcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFkZEZvcm0sIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoZSwgYWRkRm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZWRhdGUnKS52YWx1ZVxuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby1wcmlvcml0eScpXG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC5vcHRpb25zW3ByaW9yaXR5RWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0XG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuYWRkVG9kbyhuZXdUb2RvLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpXG5cbiAgICAgIGV4aXRUb2RvQWRkZXIoKVxuXG4gICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRGb3JtID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnLCAndG9kby1hZGRGb3JtJylcbiAgICAgIGFkZEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcblxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLXN1Ym1pdCcsICdlZGl0YWJsZScpXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJ1xuICAgICAgYWRkRm9ybS5hcHBlbmQoc3VibWl0QnRuKVxuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nXG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJywgJ2VkaXRhYmxlJylcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJywgJ2VkaXRhYmxlJylcbiAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGR1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKVxuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKVxuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZHVlZGF0ZUlucHV0KVxuXG4gICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JywgJ2VkaXRhYmxlJylcblxuICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93J1xuICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJ1xuICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJ1xuXG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpXG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuXG4gICAgICB0b2RvQXJlYS5pbnNlcnRCZWZvcmUoYWRkRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZWxlbWVudCcpKVxuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gYWRkTmV3VG9kbyhlLCBhZGRGb3JtKVxuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0SGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGl0VG9kb0FkZGVyLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvUmVtb3ZlciAoc29ydEJhcikge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdCA9ICdzb3J0LXJlbW92ZSdcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcblxuICAgIGNvbnN0IHJlbW92ZUVsZW1lbnQgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdCwgdG9kb1RpdGxlKVxuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLnJlbW92ZVRvZG8odG9kb1RpdGxlKVxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQhJylcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50JylcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVhYmxlJylcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlbW92ZUVkaXRvciwgeyBvbmNlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZXhpdFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50JylcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVhYmxlJylcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRSZW1vdmVFZGl0b3IsIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRTb3J0QmFyIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNvcnRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvcnRCYXIuY2xhc3NMaXN0LmFkZCgnc29ydC1iYXInKVxuXG4gICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKVxuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc29ydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtdGl0bGUnKVxuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRUaXRsZSlcblxuICAgIGNvbnN0IHNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJylcbiAgICBzb3J0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24nXG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNvcnREdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZHVlZGF0ZScpXG4gICAgc29ydER1ZWRhdGUudGV4dENvbnRlbnQgPSAnZHVlZGF0ZSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKVxuXG4gICAgY29uc3Qgc29ydFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc29ydFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NvcnQtcHJpb3JpdHknKVxuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eSlcblxuICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHNvcnRCYXIpXG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZSAoVG9kbywgYm9vbCkge1xuICAgIFRvZG8udGl0bGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIGJvb2wpXG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbClcblxuICAgIGxldCBkdWVkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKVxuICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBUb2RvLmR1ZWRhdGUudGV4dClcblxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJylcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSdcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcblxuICAgIC8vIHNldHMgZGVmYXVsdCBzZWxlY3Rpb24gdG8gYmUgdGhlIHNhbWUgYXMgY3VycmVudCB2YWx1ZVxuICAgIFtsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eV0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSlcblxuICAgIGlmIChib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG4gICAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgVG9kby5lbGVtZW50Lmluc2VydEJlZm9yZShkdWVkYXRlSW5wdXQsIFRvZG8ucHJpb3JpdHkuZWxlbWVudClcblxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIFRvZG8uZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICBUb2RvLnRpdGxlLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKVxuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJylcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgLy8gbXVzdCB1cGRhdGUgZWxlbWVudHMgdG8gcmVtb3ZlIHRoZW0/XG4gICAgICBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChkdWVkYXRlSW5wdXQpXG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQgKFRvZG8pIHtcbiAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBmYWxzZSlcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pXG5cbiAgICBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLnRpdGxlLnRleHRcbiAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLmRlc2NyaXB0aW9uLnRleHRcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0XG4gICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5wcmlvcml0eS50ZXh0XG4gIH1cblxuICBmdW5jdGlvbiBfc3VibWl0VG9kb0NoYW5nZXMgKFRvZG8pIHtcbiAgICBjb25zdCBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IGR1ZWRhdGVWYWx1ZSA9IGR1ZWRhdGVJbnB1dC52YWx1ZVxuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbcHJpb3JpdHlTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuXG4gICAgLy8gY29tcGFyZXMgY3VycmVudCB0ZXh0IHRvIHRleHQgd2hlbiBlZGl0IHdhcyBpbml0aWF0ZWRcbiAgICBpZiAoVG9kby50aXRsZS50ZXh0ID09PSBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kZXNjcmlwdGlvbi50ZXh0ID09PSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kdWVkYXRlLnRleHQgPT09IGR1ZWRhdGVWYWx1ZSAmJlxuICAgICAgICBUb2RvLnByaW9yaXR5LnRleHQgPT09IHByaW9yaXR5T3B0aW9uXG4gICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gVG9kby5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICAgIGNvbnN0IHRpdGxlID0gVG9kby50aXRsZS50ZXh0XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IG5ld0R1ZWRhdGUgPSBkdWVkYXRlVmFsdWVcbiAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlPcHRpb25cbiAgICAgIGxldCB0aXRsZUNoYW5nZWRcblxuICAgICAgaWYgKFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCAhPT0gVG9kby50aXRsZS50ZXh0KSB7XG4gICAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpLmVkaXQoJ3RpdGxlJywgbmV3VGl0bGUpXG4gICAgICAgIC8vIGNoZWNrcyBpZiBvbGQgdG9kbyB0aXRsZSBleGlzdHMsIGFuZCByZXNldHMgdGV4dENvbnRlbnQgaWYgc3RpbGwgZG9lc1xuICAgICAgICBpZiAodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dFxuICAgICAgICAgIHRpdGxlQ2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGVDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKVxuICAgICAgICA/IFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8obmV3VGl0bGUpXG4gICAgICAgIDogUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyh0aXRsZSlcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKVxuICAgICAgdG9kb09iai5lZGl0KCdkdWVkYXRlJywgbmV3RHVlZGF0ZSlcbiAgICAgIHRvZG9PYmouZWRpdCgncHJpb3JpdHknLCBuZXdQcmlvcml0eSlcblxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKVxuICAgICAgX21ha2VUb2RvRWRpdGFibGUoVG9kbywgZmFsc2UpXG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3RHVlZGF0ZVxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHlcbiAgICAgIGNvbnNvbGUubG9nKHRvZG9PYmopXG4gICAgfVxuICB9O1xuXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2VlbXMgYSBiaXQgbWVzc3lcbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9FZGl0b3IgKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQnKVxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJ1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vIE1ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvLyB0aGUgZW50aXJlIHRvZG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgZWRpdEJ0bjogZS50YXJnZXQsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQubmV4dFNpYmxpbmcsXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bM10sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblszXS50ZXh0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBwcmlvcml0eToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bNF0sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIHRydWUpXG5cbiAgICAgIFRvZG8uc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0JylcbiAgICAgIFRvZG8uc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ+KckydcbiAgICAgIFRvZG8uZWxlbWVudC5wcmVwZW5kKFRvZG8uc3VibWl0QnRuKVxuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pXG4gICAgICBUb2RvLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyVG9kb3MgKHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5saXN0VG9kb3NcblxuICAgIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKVxuXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1lbGVtZW50JylcbiAgICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCB0b2RvLnBhcmVudFByb2plY3QpXG5cbiAgICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kVG9kb0VkaXRvcih0b2RvRWxlbWVudClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJylcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVkYXRlXG4gICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJylcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSlcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuXG4gICAgICAgIHRvZG9BcmVhLmluc2VydEJlZm9yZSh0b2RvRWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZWxlbWVudCcpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKCkge1xuICAgIEV2ZW50cy5vZmYoJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJydcbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgcHJvamVjdEFyZWEgPSB1bmRlZmluZWRcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZFxuICAgIHJlbmRlckVkaXRhYmxlID0gdW5kZWZpbmVkXG4gICAgZmlyc3RJbml0ID0gdHJ1ZVxuXG4gICAgdGhpcy5pbml0ID0gaW5pdFxuICAgIGRlbGV0ZSB0aGlzLnNldFJlbmRlckNvbmZpZ1xuICAgIGRlbGV0ZSB0aGlzLm9mZlxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCAocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50XG4gICAgdG9kb0FyZWEgPSB0b2RvRWxlbWVudFxuICAgIHJlbmRlckVkaXRhYmxlID0gZWRpdGFibGVcbiAgICBfcmVuZGVyUHJvamVjdHMoKVxuXG4gICAgaWYgKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLyogUHV0dGluZyBFdmVudHMgY29kZSBoZXJlIGFsbG93cyBldmVudHMgdG8gYmUgdHJpZ2dlcmVkIG9ubHkgYWZ0ZXIgaW5pdCxcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4gKi9cbiAgICAgIEV2ZW50cy5vbigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpXG5cbiAgICAgIC8vIHJldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlXG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXRcbiAgICAgIHRoaXMub2ZmID0gb2ZmXG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXRcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfSAvLyBhZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuZXhwb3J0IHsgUHJvamVjdFJlbmRlcmVyIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCBQcm9qZWN0cywgeyBQcm9qZWN0UmVuZGVyZXIgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnXG5cblByb2plY3RSZW5kZXJlci5pbml0KFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKSxcbiAgdHJ1ZVxuKVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpID09PSAnW10nIHx8IGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgUHJvamVjdHMuYWRkKCdOZXcgUHJvamVjdCcpLmZpbmQoJ05ldyBQcm9qZWN0JykuYWRkVG9kbyhcbiAgICAnU3RhcnQgbWFraW5nIHlvdXIgdG9kbyBsaXN0cyEnLFxuICAgICdBZGQgbmV3IHByb2plY3RzIGJ5IHR5cGluZyB0aGVpciBuYW1lIGluIHRoZSBzaWRlYmFyIGFuZCBwcmVzc2luZyBlbnRlci5cXG4nLFxuICAgICcnLFxuICAgICdsb3cnXG4gIClcbn0gZWxzZSB7XG4gIFByb2plY3RzLmdldEZyb21Mb2NhbFN0b3JhZ2UoKVxufVxuXG4vLyBmaW5kcyBhbmQgY2xpY2tzIHRoZSBmaXJzdCBwcm9qZWN0IGluIHRoZSBwcm9qZWN0IGxpc3QgdG8gcmVuZGVyIGl0J3MgdG9kb3NcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS5kaXNwYXRjaEV2ZW50KFxuICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgdmlldzogd2luZG93LFxuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZVxuICB9KVxuKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9