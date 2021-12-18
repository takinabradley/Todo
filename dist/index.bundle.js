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

/*  
    This module exports a 'Projects' object that keeps 
    track of Projects and their Todos.

    Note: many module methods return the module itself, and many methods on 
      project objects return the project itself, allowing you to chain methods.
 
    ~~~~~~~~~~~~~~~~~~~Add, retrive, and remove projects~~~~~~~~~~~~~~~~~~~~~~~~

      Create projects with Project.add('projectName')

      Retrive them with Project.find('projectName')
      or use Projects.list for an array of all projects
      
      You may rename an object by retriving it through one of the above methods:
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

      Remove todos with .removeTodo('todoTitle')
        Project.find('projectName').removeTodo('todoTitle');

      You may rename a todo's title, but otherwise must remove a todo and create
      a new one. Todos in a project may not have identical titles:
        //change just the title
        Projects.find('ProjectName').findTodo('todoName').title = 'newTitle'

        //change more than just the title
        Projects.find('ProjectName').removeTodo('todoName').addTodo(...);
*/


//I need to re-create this functionality
// Custom Methods for the entire 'Projects' Object go here:
//Use: Projects.CustomMethod()
/*  ProjectsPrototype = {
    method: function(){};
  } */


//Custom methods for projects inside the 'projects' array go here:
//Use: Projects.get('project').CustomMethod()
/*  projectsPrototype = {
      method: function() {}
    } */

const Projects = (function() {
  const projectsList = [];

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function add(name) {
    if(find(name) !== undefined) return; //disallows identical projects
    const todoList = [];

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addTodo(title = '', description = '', duedate = '', priority = '') {
      if(findTodo(title) !== undefined) return; //disallows identical todos

      //todo properties and methods
      const todo = Object.freeze({
        get title() {return title}, 
        set title(newTitle) {
          if(findTodo(newTitle) !== undefined) return; //disallows identical todos
          title = newTitle
          return newTitle;
        },
        get description() {return description}, 
        get duedate() {return duedate}, 
        get priority() {return priority}
      });

      todoList.push(todo)
      return this;
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    //other crud
    function findTodo(title) {
      if(title === undefined) {
        return;
      } else {
        return todoList.find( todo => todo.title === title );
      }
    };

    function removeTodo(title) {
      const index = todoList.findIndex(todo => todo.title === title);

      if (index === -1) {
        return;
      } else {
        todoList.splice(index , 1);
        return this;
      }
    }

    //project properties and methods
    const project = Object.freeze({ 
      get name() {return name}, 
      set name(newName) {
        if(find(newName) !== undefined) return; //disallows identical projects
        name = newName
        return newName
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });

    projectsList.push(project)
    return this;
  };
  /*~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  //other crud
  function remove(name) {
    const index = projectsList.findIndex(project => project.name === name);

    if (index === -1) {
      return; //returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index , 1);
      return this;
    }
  }

  function find(name) {
    if(name === undefined) {
      return;
    } else {
      return projectsList.find( project => project.name === name );
    }
  };

  //module properties and methods
  return {
    get list() {
      return [...projectsList];
    },
    add,
    remove,
    find
  }
})();
//I may want to implement returning 'this' for chaining

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



function renameTodo(project, oldName, newName) {
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(project).removeTodo(oldName).addTodo(newName);
  return _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(project).getTodo(newName);
}

function getTodoIndex(projectName, todoTitle) {
  let array = _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(projectName).getTodo()
  let todoIndex;
  array.forEach( (item, index) => {
    if(item.title === todoTitle) {
      todoIndex = index; 
    }
  });
  return todoIndex;
}

function getProjectIndex(projectName) {
  let projectIndex 
  _modules_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].get().forEach( (item, index) => {
    if(item.getName() === projectName) {
      projectIndex = index;
    }
  });
  return projectIndex;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0EsU0FBUztBQUNULDJCQUEyQixtQkFBbUI7QUFDOUMsdUJBQXVCLGVBQWU7QUFDdEMsd0JBQXdCO0FBQ3hCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNuS3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7OztBQUc3QztBQUNBLEVBQUUsZ0VBQVk7QUFDZCxTQUFTLGdFQUFZO0FBQ3JCOztBQUVBO0FBQ0EsY0FBYyxnRUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsZ0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICBcbiAgICBUaGlzIG1vZHVsZSBleHBvcnRzIGEgJ1Byb2plY3RzJyBvYmplY3QgdGhhdCBrZWVwcyBcbiAgICB0cmFjayBvZiBQcm9qZWN0cyBhbmQgdGhlaXIgVG9kb3MuXG5cbiAgICBOb3RlOiBtYW55IG1vZHVsZSBtZXRob2RzIHJldHVybiB0aGUgbW9kdWxlIGl0c2VsZiwgYW5kIG1hbnkgbWV0aG9kcyBvbiBcbiAgICAgIHByb2plY3Qgb2JqZWN0cyByZXR1cm4gdGhlIHByb2plY3QgaXRzZWxmLCBhbGxvd2luZyB5b3UgdG8gY2hhaW4gbWV0aG9kcy5cbiBcbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHByb2plY3Rzfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIENyZWF0ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QuYWRkKCdwcm9qZWN0TmFtZScpXG5cbiAgICAgIFJldHJpdmUgdGhlbSB3aXRoIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKVxuICAgICAgb3IgdXNlIFByb2plY3RzLmxpc3QgZm9yIGFuIGFycmF5IG9mIGFsbCBwcm9qZWN0c1xuICAgICAgXG4gICAgICBZb3UgbWF5IHJlbmFtZSBhbiBvYmplY3QgYnkgcmV0cml2aW5nIGl0IHRocm91Z2ggb25lIG9mIHRoZSBhYm92ZSBtZXRob2RzOlxuICAgICAgICBFeDogUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5uYW1lID0gJ25ld05hbWUnXG4gICAgICBQcm9qZWN0cyBtYXkgbm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzLlxuXG4gICAgICBSZW1vdmUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LnJlbW92ZSgncHJvamVjdE5hbWUnKVxuXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0R1ZURhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpb3JpdHknKVxuICAgICAgXG4gICAgICBUbyBhZGQgdG9kb3MgYWZ0ZXIgY3JlYXRpb24gcmV0cmlldmUgYW4gb2JqZWN0IGFuZCB1c2UgaXQncyBhZGRUb2RvIG1ldGhvZFxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmFkZFRvZG8oLi4uKTtcblxuICAgICAgUmV0cml2ZSB0b2RvcyB3aXRoIC5maW5kVG9kbygndG9kb05hbWUnKSBvciAubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgdG9kbydzIHRpdGxlLCBidXQgb3RoZXJ3aXNlIG11c3QgcmVtb3ZlIGEgdG9kbyBhbmQgY3JlYXRlXG4gICAgICBhIG5ldyBvbmUuIFRvZG9zIGluIGEgcHJvamVjdCBtYXkgbm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlczpcbiAgICAgICAgLy9jaGFuZ2UganVzdCB0aGUgdGl0bGVcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKS50aXRsZSA9ICduZXdUaXRsZSdcblxuICAgICAgICAvL2NoYW5nZSBtb3JlIHRoYW4ganVzdCB0aGUgdGl0bGVcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5yZW1vdmVUb2RvKCd0b2RvTmFtZScpLmFkZFRvZG8oLi4uKTtcbiovXG5cblxuLy9JIG5lZWQgdG8gcmUtY3JlYXRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuLy8gQ3VzdG9tIE1ldGhvZHMgZm9yIHRoZSBlbnRpcmUgJ1Byb2plY3RzJyBPYmplY3QgZ28gaGVyZTpcbi8vVXNlOiBQcm9qZWN0cy5DdXN0b21NZXRob2QoKVxuLyogIFByb2plY3RzUHJvdG90eXBlID0ge1xuICAgIG1ldGhvZDogZnVuY3Rpb24oKXt9O1xuICB9ICovXG5cblxuLy9DdXN0b20gbWV0aG9kcyBmb3IgcHJvamVjdHMgaW5zaWRlIHRoZSAncHJvamVjdHMnIGFycmF5IGdvIGhlcmU6XG4vL1VzZTogUHJvamVjdHMuZ2V0KCdwcm9qZWN0JykuQ3VzdG9tTWV0aG9kKClcbi8qICBwcm9qZWN0c1Byb3RvdHlwZSA9IHtcbiAgICAgIG1ldGhvZDogZnVuY3Rpb24oKSB7fVxuICAgIH0gKi9cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flByb2plY3QgQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgZnVuY3Rpb24gYWRkKG5hbWUpIHtcbiAgICBpZihmaW5kKG5hbWUpICE9PSB1bmRlZmluZWQpIHJldHVybjsgLy9kaXNhbGxvd3MgaWRlbnRpY2FsIHByb2plY3RzXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcblxuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+VG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgaWYoZmluZFRvZG8odGl0bGUpICE9PSB1bmRlZmluZWQpIHJldHVybjsgLy9kaXNhbGxvd3MgaWRlbnRpY2FsIHRvZG9zXG5cbiAgICAgIC8vdG9kbyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gICAgICBjb25zdCB0b2RvID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LCBcbiAgICAgICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgICAgaWYoZmluZFRvZG8obmV3VGl0bGUpICE9PSB1bmRlZmluZWQpIHJldHVybjsgLy9kaXNhbGxvd3MgaWRlbnRpY2FsIHRvZG9zXG4gICAgICAgICAgdGl0bGUgPSBuZXdUaXRsZVxuICAgICAgICAgIHJldHVybiBuZXdUaXRsZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sIFxuICAgICAgICBnZXQgZHVlZGF0ZSgpIHtyZXR1cm4gZHVlZGF0ZX0sIFxuICAgICAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHByaW9yaXR5fVxuICAgICAgfSk7XG5cbiAgICAgIHRvZG9MaXN0LnB1c2godG9kbylcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIFxuICAgIC8vb3RoZXIgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvKHRpdGxlKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdC5maW5kKCB0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8odGl0bGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL3Byb2plY3QgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICAgIGNvbnN0IHByb2plY3QgPSBPYmplY3QuZnJlZXplKHsgXG4gICAgICBnZXQgbmFtZSgpIHtyZXR1cm4gbmFtZX0sIFxuICAgICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZihmaW5kKG5ld05hbWUpICE9PSB1bmRlZmluZWQpIHJldHVybjsgLy9kaXNhbGxvd3MgaWRlbnRpY2FsIHByb2plY3RzXG4gICAgICAgIG5hbWUgPSBuZXdOYW1lXG4gICAgICAgIHJldHVybiBuZXdOYW1lXG4gICAgICB9LFxuICAgICAgZ2V0IGxpc3RUb2RvcygpIHtyZXR1cm4gWy4uLnRvZG9MaXN0XX0sXG4gICAgICBhZGRUb2RvLFxuICAgICAgZmluZFRvZG8sXG4gICAgICByZW1vdmVUb2RvXG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cblxuICAvL290aGVyIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzTGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuOyAvL3JldHVybnMgaWYgZmluZEluZGV4IGRvZXNuJ3QgZmluZCBhIG1hdGNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lICk7XG4gICAgfVxuICB9O1xuXG4gIC8vbW9kdWxlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBbLi4ucHJvamVjdHNMaXN0XTtcbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZFxuICB9XG59KSgpO1xuLy9JIG1heSB3YW50IHRvIGltcGxlbWVudCByZXR1cm5pbmcgJ3RoaXMnIGZvciBjaGFpbmluZ1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0cyBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG5cbmZ1bmN0aW9uIHJlbmFtZVRvZG8ocHJvamVjdCwgb2xkTmFtZSwgbmV3TmFtZSkge1xuICBQcm9qZWN0cy5nZXQocHJvamVjdCkucmVtb3ZlVG9kbyhvbGROYW1lKS5hZGRUb2RvKG5ld05hbWUpO1xuICByZXR1cm4gUHJvamVjdHMuZ2V0KHByb2plY3QpLmdldFRvZG8obmV3TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9JbmRleChwcm9qZWN0TmFtZSwgdG9kb1RpdGxlKSB7XG4gIGxldCBhcnJheSA9IFByb2plY3RzLmdldChwcm9qZWN0TmFtZSkuZ2V0VG9kbygpXG4gIGxldCB0b2RvSW5kZXg7XG4gIGFycmF5LmZvckVhY2goIChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmKGl0ZW0udGl0bGUgPT09IHRvZG9UaXRsZSkge1xuICAgICAgdG9kb0luZGV4ID0gaW5kZXg7IFxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b2RvSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RJbmRleChwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdEluZGV4IFxuICBQcm9qZWN0cy5nZXQoKS5mb3JFYWNoKCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZihpdGVtLmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIHByb2plY3RJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cblxuLy9Ub0RvIG9iamVjdHMgc2hvdWxkIGhhdmUgcHJvcGVydGllcyBzdWNoIGFzIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkuXG4vL05vdGVzIGFuZCBjaGVja2xpc3Qgd291bGQgYmUgbmljZSB0b28uXG5cbi8vUG9qZWN0cyBzaG91bGQgaG9sZCBsaXN0cyBvZiBUb0RvIG9iamVjdHMuIFRoZXJlIHNob3VsZCBiZSBhIGRlZmF1bHQgcHJvamVjdFxuLy91c2VycyBjYW4gYWRkIFRvRG8gb2JqZWN0cyB0by4gVXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xuLy9hbmQgY2hvb3NlIHdoaWNoIHRoZWlyIHRvZG9zIGdvLlxuXG4vL3NlcGFyYXRlIGFwcGxpY2F0aW9uIGxvZ2ljIGZyb20gRE9NLVJlbGF0ZWQgc3R1ZmYuXG5cbi8vVXNlcnMgc2hvdWxkIGJlIGFibGUgdG86IHZpZXcgYWxsIHByb2plY3RzLCB2aWV3IGFsbCB0b2RvcyBpbiBlYWNoIHByb2plY3QsXG4vL2V4cGFuZCBhIHRvZG8gdG8gc2VlL2VkaXQsIGFuZCBkZWxldGUgVG9kb3MuXG5cbi8vTWF5IHdhbnQgdG8gdXNlIGRhdGUtZm5zLlxuXG4vL3VzZSBsb2NhbCBzdG9yYWdlIVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==