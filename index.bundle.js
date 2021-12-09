/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/*  This module exports a 'Projects' object that keeps 
    track of Projects and their Todos  */

/*  
    Creating and Retrieveing Projects:

      Create Projects with Project.create('projectName')...
      ... and retrive them with Project.get('projectName')

      You may also Project.remove('projectName'), and
      Project.rename('projectName', 'newName')

      To fetch the array of of all objects, use Project.get() without arguments.


    Adding Todo Lists to Projects:

      Most methods related to Creating and Retrieving projects (above) return
      the object. Todo Lists have the following arguments: Title, Description,
      DueDate, and Priority.

      You may initiate a Project with one or more Todo lists like so:
      Project.create('newProject').addTodo('Title', 'Description', 'DueDate',
                     'Priority').addTodo(etc...)
      
      To add a todo to a project after creation, use Project.get('projectName'):
      Project.get('projectName').addTodo(...);

      You may also remove a todo by naming it's title with:
      Project.get('projectName').removeTodo('todoTitle');

      To return the array of a projects todos, use:
      Project.get('projectName').getTodos();

      The above functions chain, minus getTodos(). So you may add and remove 
      todos on the same line:
      Project.get('...').removeTodo('someTodo').addTodo('newTodo');
*/




//You can 
//and retrive projects with Project.get('projectName');

//You may also Project.rename('projectName', 'newName')
//and Project.remove('projectName')

//Projects 

const projectPrototype = {
  type: 'project',
  getTodo: function(title = 'all') {
    if(title === 'all') {
      return this.todos;
    } else {
      let returnTodo;
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].title === title) {
          returnTodo = this.todos[i];
          break;
        }
      }
      return returnTodo;
    }
    
  },
  addTodo: function (title = '', description = '', duedate = '', priority = '') {
    this.todos.push({title, description, duedate, priority});
    return this;
  },
  removeTodo: function (title) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].title === title) {
        this.todos.splice(i, 1);
        return this;
        break;
      }
    }
  },

};

const Projects = (function() {
  let projects = [];

  function create(name) {
    let todos = [];
    const obj = Object.assign(Object.create(projectPrototype), {name, todos});
    return projects[projects.push(obj) - 1];
  };

  function get(name = 'all') {
    if(name === 'all') {
      return projects;
    } else {
      for(let i = 0; i < projects.length; i++) {
        if(projects[i].name === name) {
          return projects[i];
          break;
        }
      }
    }
  };

  function remove(name) {
    for(let i = 0; i < projects.length; i++) {
      if(projects[i].name === name) {
        projects.splice(i, 1);
        return projects;
      }
    }
  }

  function rename(name, newName = get(name).name) {
    let renamedProject;
    for(let i = 0; i < projects.length; i++) {
      if(projects[i].name === name) {
        projects[i].name = newName;
        renamedProject = projects[i];
        break;
      }
    }
    return renamedProject;
  }

  return {create, get, remove, rename}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

//function ProjectCreate(name) {
//  let todos = [];
//  return Object.assign(Object.create(projectPrototype), {name, todos})
//};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");


_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].create('something').addTodo('aVeryLongTodo').addTodo('AnotherVeryLongTodo');
_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].create('somethingElse');
_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].create('woweeeee');



console.log(_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('something').getTodo())
console.log(_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].rename());
console.log(_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get());

function renameTodo(project, oldName, newName) {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(project).removeTodo(oldName).addTodo(newName);
  return _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(project);
}

console.log(renameTodo('something', 'aVeryLongTodo', 'shortTodo'));
console.log(_modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('something').getTodo('shortTodo'));





//let defaultProject = ProjectCreate('Default');
//defaultProject.addTodo('newTodo');
//defaultProject.addTodo('anotherTodo');
//defaultProject.addTodo('thirdTodo');
//defaultProject.removeTodo('anotherTodo');
//console.log(defaultProject);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0UsWUFBWTtBQUM1RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7O0FBRXhCO0FBQ0E7QUFDQSwyREFBMkQsWUFBWTtBQUN2RTs7Ozs7O1VDdklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDLG1FQUFlO0FBQ2YsbUVBQWU7QUFDZixtRUFBZTs7OztBQUlmLFlBQVksZ0VBQVk7QUFDeEIsWUFBWSxtRUFBZTtBQUMzQixZQUFZLGdFQUFZOztBQUV4QjtBQUNBLEVBQUUsZ0VBQVk7QUFDZCxTQUFTLGdFQUFZO0FBQ3JCOztBQUVBO0FBQ0EsWUFBWSxnRUFBWTs7Ozs7O0FBTXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgVGhpcyBtb2R1bGUgZXhwb3J0cyBhICdQcm9qZWN0cycgb2JqZWN0IHRoYXQga2VlcHMgXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zICAqL1xuXG4vKiAgXG4gICAgQ3JlYXRpbmcgYW5kIFJldHJpZXZlaW5nIFByb2plY3RzOlxuXG4gICAgICBDcmVhdGUgUHJvamVjdHMgd2l0aCBQcm9qZWN0LmNyZWF0ZSgncHJvamVjdE5hbWUnKS4uLlxuICAgICAgLi4uIGFuZCByZXRyaXZlIHRoZW0gd2l0aCBQcm9qZWN0LmdldCgncHJvamVjdE5hbWUnKVxuXG4gICAgICBZb3UgbWF5IGFsc28gUHJvamVjdC5yZW1vdmUoJ3Byb2plY3ROYW1lJyksIGFuZFxuICAgICAgUHJvamVjdC5yZW5hbWUoJ3Byb2plY3ROYW1lJywgJ25ld05hbWUnKVxuXG4gICAgICBUbyBmZXRjaCB0aGUgYXJyYXkgb2Ygb2YgYWxsIG9iamVjdHMsIHVzZSBQcm9qZWN0LmdldCgpIHdpdGhvdXQgYXJndW1lbnRzLlxuXG5cbiAgICBBZGRpbmcgVG9kbyBMaXN0cyB0byBQcm9qZWN0czpcblxuICAgICAgTW9zdCBtZXRob2RzIHJlbGF0ZWQgdG8gQ3JlYXRpbmcgYW5kIFJldHJpZXZpbmcgcHJvamVjdHMgKGFib3ZlKSByZXR1cm5cbiAgICAgIHRoZSBvYmplY3QuIFRvZG8gTGlzdHMgaGF2ZSB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czogVGl0bGUsIERlc2NyaXB0aW9uLFxuICAgICAgRHVlRGF0ZSwgYW5kIFByaW9yaXR5LlxuXG4gICAgICBZb3UgbWF5IGluaXRpYXRlIGEgUHJvamVjdCB3aXRoIG9uZSBvciBtb3JlIFRvZG8gbGlzdHMgbGlrZSBzbzpcbiAgICAgIFByb2plY3QuY3JlYXRlKCduZXdQcm9qZWN0JykuYWRkVG9kbygnVGl0bGUnLCAnRGVzY3JpcHRpb24nLCAnRHVlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAnUHJpb3JpdHknKS5hZGRUb2RvKGV0Yy4uLilcbiAgICAgIFxuICAgICAgVG8gYWRkIGEgdG9kbyB0byBhIHByb2plY3QgYWZ0ZXIgY3JlYXRpb24sIHVzZSBQcm9qZWN0LmdldCgncHJvamVjdE5hbWUnKTpcbiAgICAgIFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpLmFkZFRvZG8oLi4uKTtcblxuICAgICAgWW91IG1heSBhbHNvIHJlbW92ZSBhIHRvZG8gYnkgbmFtaW5nIGl0J3MgdGl0bGUgd2l0aDpcbiAgICAgIFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpO1xuXG4gICAgICBUbyByZXR1cm4gdGhlIGFycmF5IG9mIGEgcHJvamVjdHMgdG9kb3MsIHVzZTpcbiAgICAgIFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpLmdldFRvZG9zKCk7XG5cbiAgICAgIFRoZSBhYm92ZSBmdW5jdGlvbnMgY2hhaW4sIG1pbnVzIGdldFRvZG9zKCkuIFNvIHlvdSBtYXkgYWRkIGFuZCByZW1vdmUgXG4gICAgICB0b2RvcyBvbiB0aGUgc2FtZSBsaW5lOlxuICAgICAgUHJvamVjdC5nZXQoJy4uLicpLnJlbW92ZVRvZG8oJ3NvbWVUb2RvJykuYWRkVG9kbygnbmV3VG9kbycpO1xuKi9cblxuXG5cblxuLy9Zb3UgY2FuIFxuLy9hbmQgcmV0cml2ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QuZ2V0KCdwcm9qZWN0TmFtZScpO1xuXG4vL1lvdSBtYXkgYWxzbyBQcm9qZWN0LnJlbmFtZSgncHJvamVjdE5hbWUnLCAnbmV3TmFtZScpXG4vL2FuZCBQcm9qZWN0LnJlbW92ZSgncHJvamVjdE5hbWUnKVxuXG4vL1Byb2plY3RzIFxuXG5jb25zdCBwcm9qZWN0UHJvdG90eXBlID0ge1xuICB0eXBlOiAncHJvamVjdCcsXG4gIGdldFRvZG86IGZ1bmN0aW9uKHRpdGxlID0gJ2FsbCcpIHtcbiAgICBpZih0aXRsZSA9PT0gJ2FsbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmV0dXJuVG9kbztcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMudG9kb3NbaV0udGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgcmV0dXJuVG9kbyA9IHRoaXMudG9kb3NbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5Ub2RvO1xuICAgIH1cbiAgICBcbiAgfSxcbiAgYWRkVG9kbzogZnVuY3Rpb24gKHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgIHRoaXMudG9kb3MucHVzaCh7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eX0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICByZW1vdmVUb2RvOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYodGhpcy50b2Rvc1tpXS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbn07XG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm9qZWN0UHJvdG90eXBlKSwge25hbWUsIHRvZG9zfSk7XG4gICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RzLnB1c2gob2JqKSAtIDFdO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldChuYW1lID0gJ2FsbCcpIHtcbiAgICBpZihuYW1lID09PSAnYWxsJykge1xuICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0c1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5hbWUobmFtZSwgbmV3TmFtZSA9IGdldChuYW1lKS5uYW1lKSB7XG4gICAgbGV0IHJlbmFtZWRQcm9qZWN0O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocHJvamVjdHNbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBwcm9qZWN0c1tpXS5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgcmVuYW1lZFByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW5hbWVkUHJvamVjdDtcbiAgfVxuXG4gIHJldHVybiB7Y3JlYXRlLCBnZXQsIHJlbW92ZSwgcmVuYW1lfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5cbi8vZnVuY3Rpb24gUHJvamVjdENyZWF0ZShuYW1lKSB7XG4vLyAgbGV0IHRvZG9zID0gW107XG4vLyAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm9qZWN0UHJvdG90eXBlKSwge25hbWUsIHRvZG9zfSlcbi8vfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG5Qcm9qZWN0cy5jcmVhdGUoJ3NvbWV0aGluZycpLmFkZFRvZG8oJ2FWZXJ5TG9uZ1RvZG8nKS5hZGRUb2RvKCdBbm90aGVyVmVyeUxvbmdUb2RvJyk7XG5Qcm9qZWN0cy5jcmVhdGUoJ3NvbWV0aGluZ0Vsc2UnKTtcblByb2plY3RzLmNyZWF0ZSgnd293ZWVlZWUnKTtcblxuXG5cbmNvbnNvbGUubG9nKFByb2plY3RzLmdldCgnc29tZXRoaW5nJykuZ2V0VG9kbygpKVxuY29uc29sZS5sb2coUHJvamVjdHMucmVuYW1lKCkpO1xuY29uc29sZS5sb2coUHJvamVjdHMuZ2V0KCkpO1xuXG5mdW5jdGlvbiByZW5hbWVUb2RvKHByb2plY3QsIG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgUHJvamVjdHMuZ2V0KHByb2plY3QpLnJlbW92ZVRvZG8ob2xkTmFtZSkuYWRkVG9kbyhuZXdOYW1lKTtcbiAgcmV0dXJuIFByb2plY3RzLmdldChwcm9qZWN0KTtcbn1cblxuY29uc29sZS5sb2cocmVuYW1lVG9kbygnc29tZXRoaW5nJywgJ2FWZXJ5TG9uZ1RvZG8nLCAnc2hvcnRUb2RvJykpO1xuY29uc29sZS5sb2coUHJvamVjdHMuZ2V0KCdzb21ldGhpbmcnKS5nZXRUb2RvKCdzaG9ydFRvZG8nKSk7XG5cblxuXG5cblxuLy9sZXQgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0Q3JlYXRlKCdEZWZhdWx0Jyk7XG4vL2RlZmF1bHRQcm9qZWN0LmFkZFRvZG8oJ25ld1RvZG8nKTtcbi8vZGVmYXVsdFByb2plY3QuYWRkVG9kbygnYW5vdGhlclRvZG8nKTtcbi8vZGVmYXVsdFByb2plY3QuYWRkVG9kbygndGhpcmRUb2RvJyk7XG4vL2RlZmF1bHRQcm9qZWN0LnJlbW92ZVRvZG8oJ2Fub3RoZXJUb2RvJyk7XG4vL2NvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuXG5cbi8vVG9EbyBvYmplY3RzIHNob3VsZCBoYXZlIHByb3BlcnRpZXMgc3VjaCBhcyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LlxuLy9Ob3RlcyBhbmQgY2hlY2tsaXN0IHdvdWxkIGJlIG5pY2UgdG9vLlxuXG4vL1BvamVjdHMgc2hvdWxkIGhvbGQgbGlzdHMgb2YgVG9EbyBvYmplY3RzLiBUaGVyZSBzaG91bGQgYmUgYSBkZWZhdWx0IHByb2plY3Rcbi8vdXNlcnMgY2FuIGFkZCBUb0RvIG9iamVjdHMgdG8uIFVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcbi8vYW5kIGNob29zZSB3aGljaCB0aGVpciB0b2RvcyBnby5cblxuLy9zZXBhcmF0ZSBhcHBsaWNhdGlvbiBsb2dpYyBmcm9tIERPTS1SZWxhdGVkIHN0dWZmLlxuXG4vL1VzZXJzIHNob3VsZCBiZSBhYmxlIHRvOiB2aWV3IGFsbCBwcm9qZWN0cywgdmlldyBhbGwgdG9kb3MgaW4gZWFjaCBwcm9qZWN0LFxuLy9leHBhbmQgYSB0b2RvIHRvIHNlZS9lZGl0LCBhbmQgZGVsZXRlIFRvZG9zLlxuXG4vL01heSB3YW50IHRvIHVzZSBkYXRlLWZucy5cblxuLy91c2UgbG9jYWwgc3RvcmFnZSEiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=