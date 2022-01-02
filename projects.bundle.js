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

  function _renderProjectAdder() {
    const form = document.createElement('form');
    form.classList.add('project-form');
    projectArea.appendChild(form);

    const addLabel = document.createElement('label');
    addLabel.classList.add('project-name-label');
    addLabel.setAttribute('for', 'name');
    addLabel.textContent = "Project Name:";
    form.appendChild(addLabel);

    const addInput = document.createElement('input');;
    addInput.classList.add('project-name-input');
    addInput.setAttribute('name', 'name');
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('placeholder', 'New Project');
    addInput.setAttribute('required', '');
    form.appendChild(addInput);

    const addBtn = document.createElement('button');
    addBtn.classList.add('project-form-addBtn');
    addBtn.setAttribute('type', 'submit');
    addBtn.textContent = 'Add';
    form.appendChild(addBtn);

    const addProject = (e) => Projects.add(addInput.value);
    addBtn.addEventListener('click', addProject);
  }
  
  function _renderProjectEditor(projectElement) {
    const editBtn = document.createElement('button');
    editBtn.classList.add('project-edit');
    editBtn.textContent = '✎';
    projectElement.appendChild(editBtn)

    //Hides edit button and provides additional options until user moves away
    editBtn.addEventListener('click', function(e) {
      const projectNameElement = e.target.nextSibling
      const projectName = projectNameElement.textContent
      
      projectNameElement.setAttribute('contenteditable', 'true');
      editBtn.setAttribute('hidden', '')

      const removeElement = document.createElement('span');
      removeElement.classList.add('project-remove');
      removeElement.textContent = '-';
      projectElement.insertBefore(removeElement, projectNameElement);

      removeElement.addEventListener('click', () => Projects.remove(projectName));
      
      const exitEditor = (e) => {
        projectNameElement.setAttribute('contenteditable', 'false')
        projectElement.removeChild(removeElement)
        editBtn.removeAttribute('hidden')
        
        if(projectNameElement.textContent !== projectName) {
          const newName = projectNameElement.textContent;
          Projects.find(projectName).name = newName;

          //checks if old project name exists, and resets textContent if still does
          if(typeof Projects.find(projectName) === 'object') {
            projectNameElement.textContent = projectName;
          }
        }

        //must remove listener, or will continue attempting to remove removeElement
        projectElement.removeEventListener('mouseleave', exitEditor)
      }

      projectElement.addEventListener('mouseleave', exitEditor);
    })
  }

  function _renderProjects() {
    if(typeof projectArea !== 'object') {
      console.log('ProjectRenderer: projectArea left undefined!');
      return;
    }

    projectArea.innerHTML = '';
    
    if(renderEditable === true) _renderProjectAdder();

    Projects.list.forEach( project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project-element');
      
      if(renderEditable === true) _renderProjectEditor(projectElement);

      const name = document.createElement('span');
      name.classList.add('project-name');
      name.textContent = project.name;
      projectElement.appendChild(name);

      name.addEventListener('click', (e) => _renderTodos(e.target.textContent));

      projectArea.appendChild(projectElement);
    })
  }

  
  function _renderTodos(projectName) {
    if(typeof todoArea !== 'object') {
      console.log('ProjectRenderer: todoArea left undefined!');
      return;
    }

    todoArea.innerHTML = '';
  
    const todos = Projects.find(projectName).listTodos;
  
    if(todos.length > 0) {
  
      todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-element');
  
        const title = document.createElement('span');
        title.textContent = todo.title;
        title.classList.add('todo-title');
  
        const description = document.createElement('span');
        description.textContent = todo.description;
        description.classList.add('todo-description');
  
        const duedate = document.createElement('span');
        duedate.textContent = todo.duedate;
        duedate.classList.add('todo-duedate');
  
        const priority = document.createElement('span');
        priority.textContent = todo.priority;
        priority.classList.add('todo-priority');
  
        todoElement.appendChild(title);
        todoElement.appendChild(description);
        todoElement.appendChild(duedate);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNLHVEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGVBQWU7QUFDaEMsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgZXZlbnRzID0ge307XG5cbiAgZnVuY3Rpb24gb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmIChldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7b24sIG9mZiwgZW1pdCwgZ2V0IGxpc3QoKSB7cmV0dXJuIGV2ZW50c319O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8qIFBlb3BsZS5qc1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgUGVvcGxlID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcGVvcGxlID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGVvcGxlKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwZXJzb24gPT4gcGVvcGxlLnB1c2gocGVyc29uKSk7XG4gICAgRXZlbnRzLmVtaXQoJ3Blb3BsZUNoYW5nZWQnLCBwZW9wbGUpO1xuICB9XG5cbiAgcmV0dXJuIHthZGRQZW9wbGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xuKi9cblxuLyogU3RhdHMuanNcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBTdGF0cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXRzID0ge307XG5cbiAgRXZlbnRzLm9uKCdwZW9wbGVDaGFuZ2VkJywgc2V0UGVvcGxlKTtcblxuICBmdW5jdGlvbiBzZXRQZW9wbGUocGVvcGxlKSB7XG4gICAgc3RhdHMucGVvcGxlID0gcGVvcGxlLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XG4gICAgY29uc29sZS5sb2coc3RhdHMucGVvcGxlKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4qL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50cy5qc1wiO1xuXG4vKiAgXG4gICAgVGhpcyBtb2R1bGUgZXhwb3J0cyBhICdQcm9qZWN0cycgb2JqZWN0IHRoYXQga2VlcHMgXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG4gICAgICBcbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0R1ZURhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpb3JpdHknKVxuICAgICAgXG4gICAgICBUbyBhZGQgdG9kb3MgYWZ0ZXIgY3JlYXRpb24gcmV0cmlldmUgYW4gb2JqZWN0IGFuZCB1c2UgaXQncyBhZGRUb2RvIG1ldGhvZFxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmFkZFRvZG8oLi4uKTtcblxuICAgICAgUmV0cml2ZSB0b2RvcyB3aXRoIC5maW5kVG9kbygndG9kb05hbWUnKSBvciAubGlzdFRvZG9zXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJylcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5saXN0VG9kb3NcblxuICAgICAgUmVtb3ZlIHRvZG9zIHdpdGggLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpXG4gICAgICAgIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKS5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKTtcblxuICAgICAgWW91IG1heSBlZGl0IGEgdG9kbyB1c2luZyB0aGUgZWRpdCBtZXRob2Qgb24gVG9kbyBvYmplY3RzLiBUb2RvcyBtYXkgbm90IFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuXG5jb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgZnVuY3Rpb24gX3NhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpKTtcbiAgICBpZihzdG9yYWdlID09PSBudWxsKSByZXR1cm47IC8vcmV0dXJucyBpZiBsb2NhbFN0b3JhZ2UgaGFzbid0IGJlZW4gdXNlZFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gc3RvcmFnZVtpXTtcbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kdWVkYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+UHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5hbWUpKSB7IC8vcmV0dXJucyBpZiBzdHJpbmcgaXMgZW1wdHkgb3Igb25seSBjb250YWlucyB3aGl0ZXNwYWNlXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgfSBlbHNlIGlmKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+VG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVkYXRlID0gJycsIHByaW9yaXR5ID0gJycpIHtcbiAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQgfHwgdGl0bGUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhJyk7XG4gICAgICB9ZWxzZSBpZihmaW5kVG9kbyh0aXRsZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHRoaXMubmFtZTtcblxuICAgICAgZnVuY3Rpb24gZWRpdChmaWVsZCwgY2hhbmdlKSB7XG4gICAgICAgIGlmKGZpZWxkID09PSB1bmRlZmluZWQgfHwgY2hhbmdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ01pc3NpbmcgYXJndW1lbnRzIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAndGl0bGUnKSB7XG5cbiAgICAgICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKGNoYW5nZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlID0gY2hhbmdlO1xuXG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnRmllbGQgZG9lcyBub3QgZXhpc3QhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gZmluZChwYXJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICAgIC8vVG9kbyBvYmplY3RcbiAgICAgIGNvbnN0IHRvZG8gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sIFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSwgXG4gICAgICAgIGdldCBkdWVkYXRlKCkge3JldHVybiBkdWVkYXRlfSwgXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgICAgICBnZXQgcGFyZW50UHJvamVjdCgpIHtyZXR1cm4gcGFyZW50UHJvamVjdH0sXG4gICAgICAgIGVkaXRcbiAgICAgIH0pO1xuICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgVG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gICAgXG4gICAgLy9vdGhlciBwcm9qZWN0IGNydWRcbiAgICBmdW5jdGlvbiBmaW5kVG9kbyh0aXRsZSkge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQoIHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0aXRsZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1Byb2plY3Qgb2JqZWN0XG4gICAgY29uc3QgcHJvamVjdCA9IE9iamVjdC5mcmVlemUoeyBcbiAgICAgIGdldCBuYW1lKCkge3JldHVybiBuYW1lfSwgXG4gICAgICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgICAgIGlmKG5ld05hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5ld05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpO1xuICAgICAgICB9IGVsc2UgaWYoZmluZChuZXdOYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXQgbGlzdFRvZG9zKCkge3JldHVybiBbLi4udG9kb0xpc3RdfSxcbiAgICAgIGFkZFRvZG8sXG4gICAgICBmaW5kVG9kbyxcbiAgICAgIHJlbW92ZVRvZG9cbiAgICB9KTtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFByb2plY3QgQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuXG4gIC8vb3RoZXIgbW9kdWxlIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzTGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKTsgLy9yZXR1cm5zIGlmIGZpbmRJbmRleCBkb2Vzbid0IGZpbmQgYSBtYXRjaFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb2plY3RzTGlzdC5maW5kKCBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSApO1xuICAgIH1cbiAgfTtcblxuICAvL01vZHVsZSBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBbLi4ucHJvamVjdHNMaXN0XTtcbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlXG4gIH1cbn0pKCk7XG5cblxuLypSZW5kZXJzIFByb2plY3RzIG9uIHRoZSB3ZWJwYWdlLiBcblVzZSBQcm9qZWN0UmVuZGVyZXIuaW5pdChwcm9qZWN0RWxlbWVudCwgdG9kb0VsZW1lbnQsIGVkaXRhYmxlKSB0byBzZXQgdGhlIGFyZWFzXG50byByZW5kZXIgdG8sIGFuZCB3aGV0aGVyIHRoZXkgbWF5IGJlIGVkaXRlZC4gVG9kb3Mgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZWlyXG5yZXNwZWN0aXZlIHByb2plY3RzIGFyZSBjbGlja2VkLlxuSWYgeW91J2QgbGlrZSB0byBvbmx5IHJlbmRlciBwcm9qZWN0IG5hbWVzLCB5b3UgbWF5IHBhc3MgYSBkdW1teSBub24tb2JqZWN0IFxudmFsdWUgYXMgdGhlIHRvZG9FbGVtZW50LiBJdCB3aWxsIGZhaWwgcXVpZXRseSB3aXRoIGEgY29uc29sZSBtZXNzYWdlIGJ5XG5kZWZhdWx0LlxuXG5BZnRlciBpbml0LCBQcm9qZWN0UmVuZGVyZXIgd2lsbCBoYXZlIHR3byBtZXRob2RzIGF2YWlsYWJsZSB0byBpdDpcblByb2plY3RSZW5kZXJlci5zZXRDb25maWc6IFVzZWQgZXhhY3RseSB0aGUgc2FtZSBhcyBQcm9qZWN0UmVuZGVyZXIuaW5pdFxuUHJvamVjdFJlbmRlcmVyLm9mZjogcmVzZXRzIFByb2plY3RSZW5kZXJlciB0byBpdCdzIG9yaWdpbmFsIHN0YXRlIGFuZCBjbGVhcnMgXG5lbGVtZW50cyBpbW1lZGlhdGVseS4gKi9cblxuXG5jb25zdCBQcm9qZWN0UmVuZGVyZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0QXJlYTtcbiAgbGV0IHRvZG9BcmVhO1xuICBsZXQgcmVuZGVyRWRpdGFibGU7XG4gIGxldCBmaXJzdEluaXQgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIF9yZW5kZXJQcm9qZWN0QWRkZXIoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICAgIHByb2plY3RBcmVhLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1sYWJlbCcpO1xuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOztcbiAgICBhZGRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRJbnB1dCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWFkZEJ0bicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiBQcm9qZWN0cy5hZGQoYWRkSW5wdXQudmFsdWUpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdCcpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJztcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnRuKVxuXG4gICAgLy9IaWRlcyBlZGl0IGJ1dHRvbiBhbmQgcHJvdmlkZXMgYWRkaXRpb25hbCBvcHRpb25zIHVudGlsIHVzZXIgbW92ZXMgYXdheVxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBlLnRhcmdldC5uZXh0U2libGluZ1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgIFxuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcblxuICAgICAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHJlbW92ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUnKTtcbiAgICAgIHJlbW92ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlRWxlbWVudCwgcHJvamVjdE5hbWVFbGVtZW50KTtcblxuICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFByb2plY3RzLnJlbW92ZShwcm9qZWN0TmFtZSkpO1xuICAgICAgXG4gICAgICBjb25zdCBleGl0RWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICAgIFxuICAgICAgICBpZihwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgIT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5uYW1lID0gbmV3TmFtZTtcblxuICAgICAgICAgIC8vY2hlY2tzIGlmIG9sZCBwcm9qZWN0IG5hbWUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgICBpZih0eXBlb2YgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL211c3QgcmVtb3ZlIGxpc3RlbmVyLCBvciB3aWxsIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIHJlbW92ZUVsZW1lbnRcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgICB9XG5cbiAgICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbmRlclByb2plY3RzKCkge1xuICAgIGlmKHR5cGVvZiBwcm9qZWN0QXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHByb2plY3RBcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfcmVuZGVyUHJvamVjdEFkZGVyKCk7XG5cbiAgICBQcm9qZWN0cy5saXN0LmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudCcpO1xuICAgICAgXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX3JlbmRlclByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfcmVuZGVyVG9kb3MoZS50YXJnZXQudGV4dENvbnRlbnQpKTtcblxuICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIH0pXG4gIH1cblxuICBcbiAgZnVuY3Rpb24gX3JlbmRlclRvZG9zKHByb2plY3ROYW1lKSB7XG4gICAgaWYodHlwZW9mIHRvZG9BcmVhICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RSZW5kZXJlcjogdG9kb0FyZWEgbGVmdCB1bmRlZmluZWQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubGlzdFRvZG9zO1xuICBcbiAgICBpZih0b2Rvcy5sZW5ndGggPiAwKSB7XG4gIFxuICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1lbGVtZW50Jyk7XG4gIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gIFxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gIFxuICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVkYXRlO1xuICAgICAgICBkdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScpO1xuICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpO1xuICBcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2ZmKCkge1xuICAgIEV2ZW50cy5vZmYoJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKTtcblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgdG9kb0FyZWEgPSB1bmRlZmluZWQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSB1bmRlZmluZWQ7XG4gICAgZmlyc3RJbml0ID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIGRlbGV0ZSB0aGlzLnNldFJlbmRlckNvbmZpZztcbiAgICBkZWxldGUgdGhpcy5vZmY7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUgPSB0cnVlKSB7XG4gICAgcHJvamVjdEFyZWEgPSBwcm9qZWN0RWxlbWVudDtcbiAgICB0b2RvQXJlYSA9IHRvZG9FbGVtZW50O1xuICAgIHJlbmRlckVkaXRhYmxlID0gZWRpdGFibGU7XG4gICAgX3JlbmRlclByb2plY3RzKCk7XG5cbiAgICBpZihmaXJzdEluaXQgPT09IHRydWUpIHtcbiAgICAgIC8qUHV0dGluZyBFdmVudHMgY29kZSBoZXJlIGFsbG93cyBldmVudHMgdG8gYmUgdHJpZ2dlcmVkIG9ubHkgYWZ0ZXIgaW5pdCwgXG4gICAgICBhdCB0aGUgY29zdCBvZiBjcmVhdGluZyBhIGNsb3N1cmUuKi9cbiAgICAgIEV2ZW50cy5vbigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgICAvL3JldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDb25maWcgPSBpbml0O1xuICAgICAgdGhpcy5vZmYgPSBvZmY7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXQ7XG4gIH1cbiAgXG4gIHJldHVybiB7aW5pdH07IC8vYWZ0ZXIgaW5pdDoge3NldENvbmZpZzogaW5pdCwgb2ZmfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuZXhwb3J0IHtQcm9qZWN0UmVuZGVyZXJ9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9