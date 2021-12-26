/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ProjectRenderer": () => (/* binding */ ProjectRenderer),
/* harmony export */   "ProjectInterface": () => (/* binding */ ProjectInterface)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");


/*
const config = {

}
*/
/*  
    This module exports a 'Projects' object that keeps 
    track of Projects and their Todos.

    Note:
      Projects.add & Projects.remove return the Projects module itself.
      .addTodo and .removeTodo used on project objects returns that object in
      the list.
      .edit used on todo objects returns project object it belongs to.

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

/*
enableEvents: true
renderTodosOnClick: true
*/


const Projects = (function() {
  const projectsList = [];
  function _saveToLocalStorage() {
    localStorage.setItem('projectsList', JSON.stringify(projectsList))
  };

  function getFromLocalStorage() {
    let storage = JSON.parse(localStorage.getItem('projectsList'))
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
    if(name === undefined) {
      return alert('Projects must have a name!')
    } else if(find(name) !== undefined) {
      return alert('Projects cannot have identical names')
    }

    const todoList = [];
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addTodo(title, description = '', duedate = '', priority = '') {
      if(title === undefined) {
        return alert('Todos must have a title!')
      }else if(findTodo(title) !== undefined) {
        return alert('Todos cannot have identical titles');
      }

      const parentProject = this.name;

      function edit(field, change) {
        if(field === undefined || change === undefined) {
          return alert('Missing arguments!');
        } else if (field === 'title') {
          if(title === undefined) {
            return alert('Todos must have a title!')
          }else if(findTodo(change) !== undefined) {
            return alert('Todos cannot have identical titles');
          }
          title = change;
          //return change;
        } else if(field === 'description') {
          description = change;
          //return change;
        } else if(field === 'duedate') {
          duedate = change;
          //return change;
        } else if(field === 'priority') {
          priority = change;
          //return change;
        } else {
          return alert('Field does not exist!');
        }
        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList])
        return find(parentProject);
      }
      //todo object
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
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList])
      return this;
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    //other crud
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
        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList])
        return this;
      }
    }

    //project object
    const project = Object.freeze({ 
      get name() {return name}, 
      set name(newName) {
        if(newName === undefined) {
          return alert('Projects must have a name!')
        } else if(find(newName) !== undefined) {
          return alert('Projects cannot have identical names');
        } else {
          name = newName;
          _saveToLocalStorage();
          _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList]);
        }
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });
    projectsList.push(project);
    _saveToLocalStorage()
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList])
    return this;
  };
  /*~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  //other crud
  function remove(name) {
    const index = projectsList.findIndex(project => project.name === name);

    if (index === -1) {
      return alert('Project not found!'); //returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index , 1);
      _saveToLocalStorage()
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit('projectsUpdate', [...projectsList])
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

/*Should init with areas to render to before manipulating the Projects module.
Not doing so will cause ProjectRenderer to not render until a "projectsUpdate"
event. Other methods will also be inaccessable until after initiation.
If you'd like to only render project names, you may pass a dummy non-object 
value as the todoElement and it will fail quietly with a console message by
default.
You can optionally set Events to false if don't want projects and todos to 
automatically render on "projectsUpdate" events.*/


const ProjectRenderer = (function() {
  let projectArea;
  let todoArea;

  function _exportElements() { return [projectArea, todoArea] }
  _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].on('requestElements', _exportElements)

  function init(projectElement, todoElement, useEvents = true) {
    projectArea = projectElement;
    todoArea = todoElement;

    this.renderProjects = renderProjects;
    this.renderTodos = renderTodos;

    /*Putting Events code here allows events to be triggered only after init, 
    at the cost of not garbage collecting this function*/
    if(useEvents === true) {
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].on('projectsUpdate', this.renderProjects)
    }
    delete this.init;
  } 

  function renderProjects() {
    if(typeof projectArea !== 'object') {
      console.log('ProjectRenderer: projectArea left undefined!');
      return;
    }

    projectArea.innerHTML = '';
  
    Projects.list.forEach(project => {
      const projectElement = document.createElement('div')
      projectElement.textContent = project.name 
      projectElement.classList.add('project-element')
      projectArea.appendChild(projectElement);
      
      const clickHandler = (e) => renderTodos(e.target.textContent)
      projectElement.addEventListener('click', clickHandler)
    })
  }

  function renderTodos(projectName) {
    if(typeof todoArea !== 'object') {
      console.log('ProjectRenderer: todoArea left undefined!');
      return;
    }
    todoArea.innerHTML = '';
  
    const todos = Projects.find(projectName).listTodos
  
    if(todos.length > 0) {
  
      todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-element')
  
        const title = document.createElement('span')
        title.textContent = todo.title
        title.classList.add('todo-title')
  
        const description = document.createElement('span')
        description.textContent = todo.description
        description.classList.add('todo-description')
  
        const duedate = document.createElement('span')
        duedate.textContent = todo.duedate
        duedate.classList.add('todo-duedate')
  
        const priority = document.createElement('span')
        priority.textContent = todo.priority
        priority.classList.add('todo-priority')
  
        todoElement.appendChild(title)
        todoElement.appendChild(description)
        todoElement.appendChild(duedate)
        todoElement.appendChild(priority)
        todoArea.appendChild(todoElement);
      })
    }
  }

  return {init}
})();

/*renders additional controls for managing the Projects module from the webpage. 
Uses the elements selected for ProjectRenderer*/
const ProjectInterface = (function() {

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/* Random other functions I may need
function getTodoIndex(projectName, todoTitle) {
  let array = Projects.find(projectName).listTodo
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
  Projects.list.forEach( (item, index) => {
    if(item.name === projectName) {
      projectIndex = index;
    }
  });
  return projectIndex;
}
*/


//Possible extra functionality
//If you want to add additional methods and properties to the module or 
//projects, you can do so by attaching them to their prototype here:

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IGV2ZW50cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge29uLCBvZmYsIGVtaXQsIGdldCBsaXN0KCkge3JldHVybiBldmVudHN9fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcblxuXG4vKiBQZW9wbGUuanNcblxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFBlb3BsZSA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHBlb3BsZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFBlb3BsZShhcnJheSkge1xuICAgIGFycmF5LmZvckVhY2gocGVyc29uID0+IHBlb3BsZS5wdXNoKHBlcnNvbikpO1xuICAgIEV2ZW50cy5lbWl0KCdwZW9wbGVDaGFuZ2VkJywgcGVvcGxlKTtcbiAgfVxuXG4gIHJldHVybiB7YWRkUGVvcGxlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcbiovXG5cbi8qIFN0YXRzLmpzXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgU3RhdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0cyA9IHt9O1xuXG4gIEV2ZW50cy5vbigncGVvcGxlQ2hhbmdlZCcsIHNldFBlb3BsZSk7XG5cbiAgZnVuY3Rpb24gc2V0UGVvcGxlKHBlb3BsZSkge1xuICAgIHN0YXRzLnBlb3BsZSA9IHBlb3BsZS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coc3RhdHMpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzLnBlb3BsZSk7XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHMuanNcIjtcblxuLypcbmNvbnN0IGNvbmZpZyA9IHtcblxufVxuKi9cbi8qICBcbiAgICBUaGlzIG1vZHVsZSBleHBvcnRzIGEgJ1Byb2plY3RzJyBvYmplY3QgdGhhdCBrZWVwcyBcbiAgICB0cmFjayBvZiBQcm9qZWN0cyBhbmQgdGhlaXIgVG9kb3MuXG5cbiAgICBOb3RlOlxuICAgICAgUHJvamVjdHMuYWRkICYgUHJvamVjdHMucmVtb3ZlIHJldHVybiB0aGUgUHJvamVjdHMgbW9kdWxlIGl0c2VsZi5cbiAgICAgIC5hZGRUb2RvIGFuZCAucmVtb3ZlVG9kbyB1c2VkIG9uIHByb2plY3Qgb2JqZWN0cyByZXR1cm5zIHRoYXQgb2JqZWN0IGluXG4gICAgICB0aGUgbGlzdC5cbiAgICAgIC5lZGl0IHVzZWQgb24gdG9kbyBvYmplY3RzIHJldHVybnMgcHJvamVjdCBvYmplY3QgaXQgYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG4gICAgICBcbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgdG9kb3N+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgWW91IG1heSBpbml0aWF0ZSBhIFByb2plY3Qgd2l0aCBhIHRvZG8gbGlrZSBzbzpcbiAgICAgICAgUHJvamVjdHMuYWRkKCduZXdQcm9qZWN0JykuZmluZCgnbmV3UHJvamVjdCcpLmFkZFRvZG8oJ1RpdGxlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRHVlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmlvcml0eScpXG4gICAgICBcbiAgICAgIFRvIGFkZCB0b2RvcyBhZnRlciBjcmVhdGlvbiByZXRyaWV2ZSBhbiBvYmplY3QgYW5kIHVzZSBpdCdzIGFkZFRvZG8gbWV0aG9kXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuYWRkVG9kbyguLi4pO1xuXG4gICAgICBSZXRyaXZlIHRvZG9zIHdpdGggLmZpbmRUb2RvKCd0b2RvTmFtZScpIG9yIC5saXN0VG9kb3NcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKVxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmxpc3RUb2Rvc1xuXG4gICAgICBSZW1vdmUgdG9kb3Mgd2l0aCAucmVtb3ZlVG9kbygndG9kb1RpdGxlJylcbiAgICAgICAgUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpO1xuXG4gICAgICBZb3UgbWF5IGVkaXQgYSB0b2RvIHVzaW5nIHRoZSBlZGl0IG1ldGhvZCBvbiBUb2RvIG9iamVjdHMuIFRvZG9zIG1heSBub3QgXG4gICAgICBoYXZlIGlkZW50aWNhbCB0aXRsZXMgaW4gdGhlIHNhbWUgcHJvamVjdDpcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKS5lZGl0KCd0aXRsZScsICduZXdUaXRsZScpXG4qL1xuXG4vKlxuZW5hYmxlRXZlbnRzOiB0cnVlXG5yZW5kZXJUb2Rvc09uQ2xpY2s6IHRydWVcbiovXG5cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuICBmdW5jdGlvbiBfc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSlcbiAgICBpZihzdG9yYWdlID09PSBudWxsKSByZXR1cm47IC8vcmV0dXJucyBpZiBsb2NhbFN0b3JhZ2UgaGFzbid0IGJlZW4gdXNlZFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gc3RvcmFnZVtpXTtcbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kdWVkYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+UHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpXG4gICAgfSBlbHNlIGlmKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpXG4gICAgICB9ZWxzZSBpZihmaW5kVG9kbyh0aXRsZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHRoaXMubmFtZTtcblxuICAgICAgZnVuY3Rpb24gZWRpdChmaWVsZCwgY2hhbmdlKSB7XG4gICAgICAgIGlmKGZpZWxkID09PSB1bmRlZmluZWQgfHwgY2hhbmdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ01pc3NpbmcgYXJndW1lbnRzIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKVxuICAgICAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKGNoYW5nZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlID0gY2hhbmdlO1xuICAgICAgICAgIC8vcmV0dXJuIGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBjaGFuZ2U7XG4gICAgICAgICAgLy9yZXR1cm4gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2U7XG4gICAgICAgICAgLy9yZXR1cm4gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICBwcmlvcml0eSA9IGNoYW5nZTtcbiAgICAgICAgICAvL3JldHVybiBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKTtcbiAgICAgICAgfVxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJywgWy4uLnByb2plY3RzTGlzdF0pXG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpO1xuICAgICAgfVxuICAgICAgLy90b2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZWRhdGUoKSB7cmV0dXJuIGR1ZWRhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0KCkge3JldHVybiBwYXJlbnRQcm9qZWN0fSxcbiAgICAgICAgZWRpdFxuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJywgWy4uLnByb2plY3RzTGlzdF0pXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBUb2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBcbiAgICAvL290aGVyIGNydWRcbiAgICBmdW5jdGlvbiBmaW5kVG9kbyh0aXRsZSkge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQoIHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0aXRsZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJywgWy4uLnByb2plY3RzTGlzdF0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vcHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gT2JqZWN0LmZyZWV6ZSh7IFxuICAgICAgZ2V0IG5hbWUoKSB7cmV0dXJuIG5hbWV9LCBcbiAgICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgICAgaWYobmV3TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpXG4gICAgICAgIH0gZWxzZSBpZihmaW5kKG5ld05hbWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnLCBbLi4ucHJvamVjdHNMaXN0XSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXQgbGlzdFRvZG9zKCkge3JldHVybiBbLi4udG9kb0xpc3RdfSxcbiAgICAgIGFkZFRvZG8sXG4gICAgICBmaW5kVG9kbyxcbiAgICAgIHJlbW92ZVRvZG9cbiAgICB9KTtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnLCBbLi4ucHJvamVjdHNMaXN0XSlcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgUHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG5cbiAgLy9vdGhlciBjcnVkXG4gIGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7IC8vcmV0dXJucyBpZiBmaW5kSW5kZXggZG9lc24ndCBmaW5kIGEgbWF0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnLCBbLi4ucHJvamVjdHNMaXN0XSlcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb2plY3RzTGlzdC5maW5kKCBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSApO1xuICAgIH1cbiAgfTtcblxuICAvL01vZHVsZSBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBbLi4ucHJvamVjdHNMaXN0XTtcbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlXG4gIH1cbn0pKCk7XG5cbi8qU2hvdWxkIGluaXQgd2l0aCBhcmVhcyB0byByZW5kZXIgdG8gYmVmb3JlIG1hbmlwdWxhdGluZyB0aGUgUHJvamVjdHMgbW9kdWxlLlxuTm90IGRvaW5nIHNvIHdpbGwgY2F1c2UgUHJvamVjdFJlbmRlcmVyIHRvIG5vdCByZW5kZXIgdW50aWwgYSBcInByb2plY3RzVXBkYXRlXCJcbmV2ZW50LiBPdGhlciBtZXRob2RzIHdpbGwgYWxzbyBiZSBpbmFjY2Vzc2FibGUgdW50aWwgYWZ0ZXIgaW5pdGlhdGlvbi5cbklmIHlvdSdkIGxpa2UgdG8gb25seSByZW5kZXIgcHJvamVjdCBuYW1lcywgeW91IG1heSBwYXNzIGEgZHVtbXkgbm9uLW9iamVjdCBcbnZhbHVlIGFzIHRoZSB0b2RvRWxlbWVudCBhbmQgaXQgd2lsbCBmYWlsIHF1aWV0bHkgd2l0aCBhIGNvbnNvbGUgbWVzc2FnZSBieVxuZGVmYXVsdC5cbllvdSBjYW4gb3B0aW9uYWxseSBzZXQgRXZlbnRzIHRvIGZhbHNlIGlmIGRvbid0IHdhbnQgcHJvamVjdHMgYW5kIHRvZG9zIHRvIFxuYXV0b21hdGljYWxseSByZW5kZXIgb24gXCJwcm9qZWN0c1VwZGF0ZVwiIGV2ZW50cy4qL1xuXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHByb2plY3RBcmVhO1xuICBsZXQgdG9kb0FyZWE7XG5cbiAgZnVuY3Rpb24gX2V4cG9ydEVsZW1lbnRzKCkgeyByZXR1cm4gW3Byb2plY3RBcmVhLCB0b2RvQXJlYV0gfVxuICBFdmVudHMub24oJ3JlcXVlc3RFbGVtZW50cycsIF9leHBvcnRFbGVtZW50cylcblxuICBmdW5jdGlvbiBpbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgdXNlRXZlbnRzID0gdHJ1ZSkge1xuICAgIHByb2plY3RBcmVhID0gcHJvamVjdEVsZW1lbnQ7XG4gICAgdG9kb0FyZWEgPSB0b2RvRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0cztcbiAgICB0aGlzLnJlbmRlclRvZG9zID0gcmVuZGVyVG9kb3M7XG5cbiAgICAvKlB1dHRpbmcgRXZlbnRzIGNvZGUgaGVyZSBhbGxvd3MgZXZlbnRzIHRvIGJlIHRyaWdnZXJlZCBvbmx5IGFmdGVyIGluaXQsIFxuICAgIGF0IHRoZSBjb3N0IG9mIG5vdCBnYXJiYWdlIGNvbGxlY3RpbmcgdGhpcyBmdW5jdGlvbiovXG4gICAgaWYodXNlRXZlbnRzID09PSB0cnVlKSB7XG4gICAgICBFdmVudHMub24oJ3Byb2plY3RzVXBkYXRlJywgdGhpcy5yZW5kZXJQcm9qZWN0cylcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5pdDtcbiAgfSBcblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBpZih0eXBlb2YgcHJvamVjdEFyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiBwcm9qZWN0QXJlYSBsZWZ0IHVuZGVmaW5lZCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgXG4gICAgUHJvamVjdHMubGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWUgXG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKVxuICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgXG4gICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4gcmVuZGVyVG9kb3MoZS50YXJnZXQudGV4dENvbnRlbnQpXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcilcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVG9kb3MocHJvamVjdE5hbWUpIHtcbiAgICBpZih0eXBlb2YgdG9kb0FyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiB0b2RvQXJlYSBsZWZ0IHVuZGVmaW5lZCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubGlzdFRvZG9zXG4gIFxuICAgIGlmKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgXG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnKVxuICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKVxuICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKVxuICBcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVkYXRlXG4gICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJylcbiAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eVxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JylcbiAgXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSlcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtpbml0fVxufSkoKTtcblxuLypyZW5kZXJzIGFkZGl0aW9uYWwgY29udHJvbHMgZm9yIG1hbmFnaW5nIHRoZSBQcm9qZWN0cyBtb2R1bGUgZnJvbSB0aGUgd2VicGFnZS4gXG5Vc2VzIHRoZSBlbGVtZW50cyBzZWxlY3RlZCBmb3IgUHJvamVjdFJlbmRlcmVyKi9cbmNvbnN0IFByb2plY3RJbnRlcmZhY2UgPSAoZnVuY3Rpb24oKSB7XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuZXhwb3J0IHtQcm9qZWN0UmVuZGVyZXIsIFByb2plY3RJbnRlcmZhY2V9XG5cbi8qIFJhbmRvbSBvdGhlciBmdW5jdGlvbnMgSSBtYXkgbmVlZFxuZnVuY3Rpb24gZ2V0VG9kb0luZGV4KHByb2plY3ROYW1lLCB0b2RvVGl0bGUpIHtcbiAgbGV0IGFycmF5ID0gUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubGlzdFRvZG9cbiAgbGV0IHRvZG9JbmRleDtcbiAgYXJyYXkuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYoaXRlbS50aXRsZSA9PT0gdG9kb1RpdGxlKSB7XG4gICAgICB0b2RvSW5kZXggPSBpbmRleDsgXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvZG9JbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggXG4gIFByb2plY3RzLmxpc3QuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYoaXRlbS5uYW1lID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgcHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2plY3RJbmRleDtcbn1cbiovXG5cblxuLy9Qb3NzaWJsZSBleHRyYSBmdW5jdGlvbmFsaXR5XG4vL0lmIHlvdSB3YW50IHRvIGFkZCBhZGRpdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gdGhlIG1vZHVsZSBvciBcbi8vcHJvamVjdHMsIHlvdSBjYW4gZG8gc28gYnkgYXR0YWNoaW5nIHRoZW0gdG8gdGhlaXIgcHJvdG90eXBlIGhlcmU6XG5cbi8vSSBuZWVkIHRvIHJlLWNyZWF0ZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbi8vIEN1c3RvbSBNZXRob2RzIGZvciB0aGUgZW50aXJlICdQcm9qZWN0cycgT2JqZWN0IGdvIGhlcmU6XG4vL1VzZTogUHJvamVjdHMuQ3VzdG9tTWV0aG9kKClcbi8qICBQcm9qZWN0c1Byb3RvdHlwZSA9IHtcbiAgICBtZXRob2Q6IGZ1bmN0aW9uKCl7fTtcbiAgfSAqL1xuXG5cbi8vQ3VzdG9tIG1ldGhvZHMgZm9yIHByb2plY3RzIGluc2lkZSB0aGUgJ3Byb2plY3RzJyBhcnJheSBnbyBoZXJlOlxuLy9Vc2U6IFByb2plY3RzLmdldCgncHJvamVjdCcpLkN1c3RvbU1ldGhvZCgpXG4vKiAgcHJvamVjdHNQcm90b3R5cGUgPSB7XG4gICAgICBtZXRob2Q6IGZ1bmN0aW9uKCkge31cbiAgICB9ICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9