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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFVBQVUsMkJBQTJCO0FBQ3JDLENBQUM7O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7QUFHdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDLDJCQUEyQixtQkFBbUI7QUFDOUMsdUJBQXVCLGVBQWU7QUFDdEMsd0JBQXdCLGdCQUFnQjtBQUN4Qyw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLHVEQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUSx1REFBVztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVSx1REFBVztBQUNyQjtBQUNBLE9BQU87QUFDUCx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSx1REFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHVEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFTOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU8sZUFBZTtBQUNoQyxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBldmVudHMgPSB7fTtcblxuICBmdW5jdGlvbiBvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtvbiwgb2ZmLCBlbWl0LCBnZXQgbGlzdCgpIHtyZXR1cm4gZXZlbnRzfX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLyogUGVvcGxlLmpzXG5cbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBQZW9wbGUgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwZW9wbGUgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQZW9wbGUoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKHBlcnNvbiA9PiBwZW9wbGUucHVzaChwZXJzb24pKTtcbiAgICBFdmVudHMuZW1pdCgncGVvcGxlQ2hhbmdlZCcsIHBlb3BsZSk7XG4gIH1cblxuICByZXR1cm4ge2FkZFBlb3BsZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGU7XG4qL1xuXG4vKiBTdGF0cy5qc1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFN0YXRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHMgPSB7fTtcblxuICBFdmVudHMub24oJ3Blb3BsZUNoYW5nZWQnLCBzZXRQZW9wbGUpO1xuXG4gIGZ1bmN0aW9uIHNldFBlb3BsZShwZW9wbGUpIHtcbiAgICBzdGF0cy5wZW9wbGUgPSBwZW9wbGUubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0cy5wZW9wbGUpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzLmpzXCI7XG5cbi8qICBcbiAgICBUaGlzIG1vZHVsZSBleHBvcnRzIGEgJ1Byb2plY3RzJyBvYmplY3QgdGhhdCBrZWVwcyBcbiAgICB0cmFjayBvZiBQcm9qZWN0cyBhbmQgdGhlaXIgVG9kb3MuXG5cbiAgICBOb3RlOlxuICAgICAgUHJvamVjdHMuYWRkICYgUHJvamVjdHMucmVtb3ZlIHJldHVybiB0aGUgUHJvamVjdHMgbW9kdWxlIGl0c2VsZi5cbiAgICAgIC5hZGRUb2RvLCAucmVtb3ZlVG9kbywgYW5kIC5lZGl0IHJldHVybiB0aGUgcHJvamVjdCB0aGUgdG9kbyBiZWxvbmdzIHRvLlxuXG4gICAgfn5+fn5+fn5+fn5+fn5+fn5+fkFkZCwgcmV0cml2ZSwgYW5kIHJlbW92ZSBwcm9qZWN0c35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4gICAgICBDcmVhdGUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LmFkZCgncHJvamVjdE5hbWUnKVxuXG4gICAgICBSZXRyaXZlIHRoZW0gd2l0aCBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJylcbiAgICAgIG9yIHVzZSBQcm9qZWN0cy5saXN0IGZvciBhbiBhcnJheSBvZiBhbGwgcHJvamVjdHNcbiAgICAgIFxuICAgICAgWW91IG1heSByZW5hbWUgYSBwcm9qZWN0IGJ5IHJldHJpdmluZyBpdCB0aHJvdWdoIG9uZSBvZiB0aGUgYWJvdmUgbWV0aG9kczpcbiAgICAgICAgRXg6IFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykubmFtZSA9ICduZXdOYW1lJ1xuICAgICAgUHJvamVjdHMgbWF5IG5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcy5cblxuICAgICAgUmVtb3ZlIHByb2plY3RzIHdpdGggUHJvamVjdC5yZW1vdmUoJ3Byb2plY3ROYW1lJylcblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgdG9kb3N+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgWW91IG1heSBpbml0aWF0ZSBhIFByb2plY3Qgd2l0aCBhIHRvZG8gbGlrZSBzbzpcbiAgICAgICAgUHJvamVjdHMuYWRkKCduZXdQcm9qZWN0JykuZmluZCgnbmV3UHJvamVjdCcpLmFkZFRvZG8oJ1RpdGxlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRHVlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmlvcml0eScpXG4gICAgICBcbiAgICAgIFRvIGFkZCB0b2RvcyBhZnRlciBjcmVhdGlvbiByZXRyaWV2ZSBhbiBvYmplY3QgYW5kIHVzZSBpdCdzIGFkZFRvZG8gbWV0aG9kXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuYWRkVG9kbyguLi4pO1xuXG4gICAgICBSZXRyaXZlIHRvZG9zIHdpdGggLmZpbmRUb2RvKCd0b2RvTmFtZScpIG9yIC5saXN0VG9kb3NcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKVxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmxpc3RUb2Rvc1xuXG4gICAgICBSZW1vdmUgdG9kb3Mgd2l0aCAucmVtb3ZlVG9kbygndG9kb1RpdGxlJylcbiAgICAgICAgUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpO1xuXG4gICAgICBZb3UgbWF5IGVkaXQgYSB0b2RvIHVzaW5nIHRoZSBlZGl0IG1ldGhvZCBvbiBUb2RvIG9iamVjdHMuIFRvZG9zIG1heSBub3QgXG4gICAgICBoYXZlIGlkZW50aWNhbCB0aXRsZXMgaW4gdGhlIHNhbWUgcHJvamVjdDpcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKS5lZGl0KCd0aXRsZScsICduZXdUaXRsZScpXG4qL1xuXG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBfc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNMaXN0JykpO1xuICAgIGlmKHN0b3JhZ2UgPT09IG51bGwpIHJldHVybjsgLy9yZXR1cm5zIGlmIGxvY2FsU3RvcmFnZSBoYXNuJ3QgYmVlbiB1c2VkXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb2plY3QgPSBzdG9yYWdlW2ldO1xuICAgICAgYWRkKHByb2plY3QubmFtZSk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0VG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmluZChwcm9qZWN0Lm5hbWUpLmFkZFRvZG8ocHJvamVjdC5saXN0VG9kb3NbaV0udGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmR1ZWRhdGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5wcmlvcml0eSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFxuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Qcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gIGZ1bmN0aW9uIGFkZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHsgLy9yZXR1cm5zIGlmIHN0cmluZyBpcyBlbXB0eSBvciBvbmx5IGNvbnRhaW5zIHdoaXRlc3BhY2VcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKTtcbiAgICB9IGVsc2UgaWYoZmluZChuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCB8fCB0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKTtcbiAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gdGhpcy5uYW1lO1xuXG4gICAgICBmdW5jdGlvbiBlZGl0KGZpZWxkLCBjaGFuZ2UpIHtcbiAgICAgICAgaWYoZmllbGQgPT09IHVuZGVmaW5lZCB8fCBjaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnTWlzc2luZyBhcmd1bWVudHMhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICd0aXRsZScpIHtcblxuICAgICAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhJyk7XG4gICAgICAgICAgfWVsc2UgaWYoZmluZFRvZG8oY2hhbmdlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2U7XG5cbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2R1ZWRhdGUnKSB7XG4gICAgICAgICAgZHVlZGF0ZSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgcHJpb3JpdHkgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpO1xuICAgICAgfVxuICAgICAgLy9Ub2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZWRhdGUoKSB7cmV0dXJuIGR1ZWRhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0KCkge3JldHVybiBwYXJlbnRQcm9qZWN0fSxcbiAgICAgICAgZWRpdFxuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBUb2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBcbiAgICAvL290aGVyIHByb2plY3QgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvKHRpdGxlKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kbyBub3QgZm91bmQhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3QuZmluZCggdG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRpdGxlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vUHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gT2JqZWN0LmZyZWV6ZSh7IFxuICAgICAgZ2V0IG5hbWUoKSB7cmV0dXJuIG5hbWV9LCBcbiAgICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgICAgaWYobmV3TmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmV3TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgICAgIH0gZWxzZSBpZihmaW5kKG5ld05hbWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldCBsaXN0VG9kb3MoKSB7cmV0dXJuIFsuLi50b2RvTGlzdF19LFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGZpbmRUb2RvLFxuICAgICAgcmVtb3ZlVG9kb1xuICAgIH0pO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgUHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG5cbiAgLy9vdGhlciBtb2R1bGUgY3J1ZFxuICBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpOyAvL3JldHVybnMgaWYgZmluZEluZGV4IGRvZXNuJ3QgZmluZCBhIG1hdGNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lICk7XG4gICAgfVxuICB9O1xuXG4gIC8vTW9kdWxlIG9iamVjdFxuICByZXR1cm4ge1xuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIFsuLi5wcm9qZWN0c0xpc3RdO1xuICAgIH0sXG4gICAgYWRkLFxuICAgIHJlbW92ZSxcbiAgICBmaW5kLFxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2VcbiAgfVxufSkoKTtcblxuXG4vKlJlbmRlcnMgUHJvamVjdHMgb24gdGhlIHdlYnBhZ2UuIFxuVXNlIFByb2plY3RSZW5kZXJlci5pbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUpIHRvIHNldCB0aGUgYXJlYXNcbnRvIHJlbmRlciB0bywgYW5kIHdoZXRoZXIgdGhleSBtYXkgYmUgZWRpdGVkLiBUb2RvcyB3aWxsIGJlIHJlbmRlcmVkIHdoZW4gdGhlaXJcbnJlc3BlY3RpdmUgcHJvamVjdHMgYXJlIGNsaWNrZWQuXG5JZiB5b3UnZCBsaWtlIHRvIG9ubHkgcmVuZGVyIHByb2plY3QgbmFtZXMsIHlvdSBtYXkgcGFzcyBhIGR1bW15IG5vbi1vYmplY3QgXG52YWx1ZSBhcyB0aGUgdG9kb0VsZW1lbnQuIEl0IHdpbGwgZmFpbCBxdWlldGx5IHdpdGggYSBjb25zb2xlIG1lc3NhZ2UgYnlcbmRlZmF1bHQuXG5cbkFmdGVyIGluaXQsIFByb2plY3RSZW5kZXJlciB3aWxsIGhhdmUgdHdvIG1ldGhvZHMgYXZhaWxhYmxlIHRvIGl0OlxuUHJvamVjdFJlbmRlcmVyLnNldENvbmZpZzogVXNlZCBleGFjdGx5IHRoZSBzYW1lIGFzIFByb2plY3RSZW5kZXJlci5pbml0XG5Qcm9qZWN0UmVuZGVyZXIub2ZmOiByZXNldHMgUHJvamVjdFJlbmRlcmVyIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUgYW5kIGNsZWFycyBcbmVsZW1lbnRzIGltbWVkaWF0ZWx5LiAqL1xuXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHByb2plY3RBcmVhO1xuICBsZXQgdG9kb0FyZWE7XG4gIGxldCByZW5kZXJFZGl0YWJsZTtcbiAgbGV0IGZpcnN0SW5pdCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKTtcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1sYWJlbCcpO1xuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOztcbiAgICBhZGRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1pbnB1dCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBQcm9qZWN0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZElucHV0KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1idXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQnKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ+Kcjic7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgXG4gICAgICAvL2NoYW5nZSBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcblxuICAgICAgLy9hZGQgcmVtb3ZlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcmVtb3ZlJyk7XG4gICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlQnRuLCBwcm9qZWN0TmFtZUVsZW1lbnQpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gUHJvamVjdHMucmVtb3ZlKHByb2plY3ROYW1lKSk7XG4gICAgICBcbiAgICAgIC8vZXhpdCBlZGl0b3IgYW5kIGFwcGx5IGFueSBuYW1lIGNoYW5nZXNcbiAgICAgIGNvbnN0IGV4aXRFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuICAgICAgICBlZGl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLm5hbWUgPSBuZXdOYW1lO1xuXG4gICAgICAgICAgLy9jaGVja3MgaWYgb2xkIHByb2plY3QgbmFtZSBleGlzdHMsIGFuZCByZXNldHMgdGV4dENvbnRlbnQgaWYgc3RpbGwgZG9lc1xuICAgICAgICAgIGlmKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbXVzdCByZW1vdmUgbGlzdGVuZXIsIG9yIHdpbGwgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgcmVtb3ZlQnRuXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcik7XG4gICAgfVxuICAgIC8vSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgaWYodHlwZW9mIHByb2plY3RBcmVhICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RSZW5kZXJlcjogcHJvamVjdEFyZWEgbGVmdCB1bmRlZmluZWQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0QWRkZXIoKTtcblxuICAgIFByb2plY3RzLmxpc3QuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtZW50Jyk7XG4gICAgICBcbiAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgXG4gICAgICAvL3JlbmRlcnMgdG9kb3Mgb24gcHJvamVjdCBjbGlja1xuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucygnZWRpdGFibGUnKSkgeyAvL3ByZXZlbnRzIHN3aXRjaGluZyBpbiBlZGl0b3IgbW9kZVxuICAgICAgICAgIF9yZW5kZXJUb2RvcyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hZGQnKTtcbiAgICAgICAgcHJvamVjdEFkZGVyLmFmdGVyKHByb2plY3RFbGVtZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEFyZWEucHJlcGVuZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhcikge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkQnRuLmNsYXNzTGlzdCA9ICdzb3J0LWFkZCdcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnKydcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRTb3J0QmFyKCkge1xuICAgIGNvbnN0IHNvcnRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3J0QmFyLmNsYXNzTGlzdC5hZGQoJ3NvcnQtYmFyJyk7XG5cbiAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFRvZG9BZGRlcihzb3J0QmFyKVxuXG4gICAgY29uc3Qgc29ydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdzb3J0LXRpdGxlJyk7XG4gICAgc29ydFRpdGxlLnRleHRDb250ZW50ID0gJ3RpdGxlJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRUaXRsZSlcblxuICAgIGNvbnN0IHNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnc29ydC1kZXNjcmlwdGlvbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbic7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0RHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdzb3J0LWR1ZWRhdGUnKVxuICAgIHNvcnREdWVkYXRlLnRleHRDb250ZW50ID0gJ2R1ZWRhdGUnO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoc29ydER1ZWRhdGUpXG5cbiAgICBjb25zdCBzb3J0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29ydFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NvcnQtcHJpb3JpdHknKTtcbiAgICBzb3J0UHJpb3JpdHkudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5KVxuXG4gICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoc29ydEJhcik7XG4gIH1cblxuICAvL3RoaXMgZnVuY3Rpb24gc2VlbXMgYSBiaXQgbWVzc3lcbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdCcpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJztcbiAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKVxuICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgIGNvbnN0IGR1ZWRhdGVFbGVtZW50ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZHVlZGF0ZScpO1xuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcHJpb3JpdHknKTtcblxuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkdWVkYXRlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZHVlZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IG1ha2VUb2RvRWRpdGFibGUgPSAoYm9vbCkgPT4ge1xuICAgICAgICB0aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBib29sKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG4gICAgICBcbiAgICAgICAgbGV0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcbiAgICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKVxuICAgICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuXG4gICAgICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2xvdyc7XG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnaGlnaCc7XG4gICAgICBcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKGxvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5KVxuICAgICAgXG4gICAgICBcbiAgICAgICAgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG4gICAgICAgIFxuICAgICAgICAgIGR1ZWRhdGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICAgICAgdG9kb0VsZW1lbnQuaW5zZXJ0QmVmb3JlKGR1ZWRhdGVJbnB1dCwgcHJpb3JpdHlFbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgICAgcHJpb3JpdHlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpXG4gICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJylcbiAgICAgICAgXG4gICAgICAgICAgZHVlZGF0ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICAgIHByaW9yaXR5RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICAgIFxuICAgICAgICAgIC8vbXVzdCB1cGRhdGUgZWxlbWVudHMgdG8gcmVtb3ZlIHRoZW0/XG4gICAgICAgICAgZHVlZGF0ZUlucHV0ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICBwcmlvcml0eVNlbGVjdCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUNoaWxkKGR1ZWRhdGVJbnB1dClcbiAgICAgICAgICB0b2RvRWxlbWVudC5yZW1vdmVDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgICAgIFxuICAgICAgICAgIC8vaW1wb3J0YW50OiBob3cgdG8gZ2V0IHZhbHVlc1xuICAgICAgICAgIGNvbnNvbGUubG9nKGR1ZWRhdGVJbnB1dC52YWx1ZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhpdEVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIG1ha2VUb2RvRWRpdGFibGUoZmFsc2UpXG4gICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUNoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGR1ZWRhdGU7XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJtaXRDaGFuZ2VzID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICBjb25zdCBkdWVkYXRlVmFsdWUgPSBkdWVkYXRlSW5wdXQudmFsdWU7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbcHJpb3JpdHlTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuXG4gICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUNoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIG1ha2VUb2RvRWRpdGFibGUoZmFsc2UpXG5cbiAgICAgICAgLy90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgLy9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkdWVkYXRlVmFsdWU7XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5T3B0aW9uO1xuXG4gICAgICAgIHRvZG9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgbWFrZVRvZG9FZGl0YWJsZSh0cnVlKVxuXG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLXN1Ym1pdCcpO1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgICB0b2RvRWxlbWVudC5wcmVwZW5kKHN1Ym1pdEJ0bik7XG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRDaGFuZ2VzKTtcblxuICAgICAgdG9kb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLmxpc3RUb2RvcztcblxuICAgIF9hcHBlbmRTb3J0QmFyKCk7XG4gIFxuICAgIGlmKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgXG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kVG9kb0VkaXRvcih0b2RvRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVkYXRlO1xuICAgICAgICBkdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScpO1xuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChkdWVkYXRlKTtcbiAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpOyAgXG4gICAgICAgIFxuICAgICAgICB0b2RvQXJlYS5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZigpIHtcbiAgICBFdmVudHMub2ZmKCdwcm9qZWN0c1VwZGF0ZScsIF9yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICBwcm9qZWN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3RBcmVhID0gdW5kZWZpbmVkO1xuICAgIHRvZG9BcmVhID0gdW5kZWZpbmVkO1xuICAgIHJlbmRlckVkaXRhYmxlID0gdW5kZWZpbmVkO1xuICAgIGZpcnN0SW5pdCA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgICBkZWxldGUgdGhpcy5zZXRSZW5kZXJDb25maWc7XG4gICAgZGVsZXRlIHRoaXMub2ZmO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdChwcm9qZWN0RWxlbWVudCwgdG9kb0VsZW1lbnQsIGVkaXRhYmxlID0gdHJ1ZSkge1xuICAgIHByb2plY3RBcmVhID0gcHJvamVjdEVsZW1lbnQ7XG4gICAgdG9kb0FyZWEgPSB0b2RvRWxlbWVudDtcbiAgICByZW5kZXJFZGl0YWJsZSA9IGVkaXRhYmxlO1xuICAgIF9yZW5kZXJQcm9qZWN0cygpO1xuXG4gICAgaWYoZmlyc3RJbml0ID09PSB0cnVlKSB7XG4gICAgICAvKlB1dHRpbmcgRXZlbnRzIGNvZGUgaGVyZSBhbGxvd3MgZXZlbnRzIHRvIGJlIHRyaWdnZXJlZCBvbmx5IGFmdGVyIGluaXQsIFxuICAgICAgYXQgdGhlIGNvc3Qgb2YgY3JlYXRpbmcgYSBjbG9zdXJlLiovXG4gICAgICBFdmVudHMub24oJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKTtcblxuICAgICAgLy9yZXVzZXMgdGhpcyBmdW5jdGlvbiB0byBzZXQgb3B0aW9ucyBhZnRlciBpbml0IGlmIGRlc2lyZWQuXG4gICAgICBmaXJzdEluaXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q29uZmlnID0gaW5pdDtcbiAgICAgIHRoaXMub2ZmID0gb2ZmO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5pbml0O1xuICB9XG4gIFxuICByZXR1cm4ge2luaXR9OyAvL2FmdGVyIGluaXQ6IHtzZXRDb25maWc6IGluaXQsIG9mZn07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbmV4cG9ydCB7UHJvamVjdFJlbmRlcmVyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==