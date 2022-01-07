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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFVBQVUsMkJBQTJCO0FBQ3JDLENBQUM7O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7QUFHdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQywyQkFBMkIsbUJBQW1CO0FBQzlDLHVCQUF1QixlQUFlO0FBQ3RDLHdCQUF3QixnQkFBZ0I7QUFDeEMsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdURBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDZEQUE2RCxXQUFXO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw4REFBOEQsV0FBVztBQUN6RTs7QUFFQSw0REFBNEQsV0FBVztBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFdBQVc7QUFDMUUsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTyxlQUFlO0FBQ2hDLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IGV2ZW50cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZiAoZXZlbnROYW1lLCBmbikge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge29uLCBvZmYsIGVtaXQsIGdldCBsaXN0KCkge3JldHVybiBldmVudHN9fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcblxuXG4vKiBQZW9wbGUuanNcblxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFBlb3BsZSA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHBlb3BsZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFBlb3BsZShhcnJheSkge1xuICAgIGFycmF5LmZvckVhY2gocGVyc29uID0+IHBlb3BsZS5wdXNoKHBlcnNvbikpO1xuICAgIEV2ZW50cy5lbWl0KCdwZW9wbGVDaGFuZ2VkJywgcGVvcGxlKTtcbiAgfVxuXG4gIHJldHVybiB7YWRkUGVvcGxlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcbiovXG5cbi8qIFN0YXRzLmpzXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgU3RhdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0cyA9IHt9O1xuXG4gIEV2ZW50cy5vbigncGVvcGxlQ2hhbmdlZCcsIHNldFBlb3BsZSk7XG5cbiAgZnVuY3Rpb24gc2V0UGVvcGxlKHBlb3BsZSkge1xuICAgIHN0YXRzLnBlb3BsZSA9IHBlb3BsZS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coc3RhdHMpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzLnBlb3BsZSk7XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHMuanNcIjtcblxuLyogIFxuICAgIFRoaXMgbW9kdWxlIGV4cG9ydHMgYSAnUHJvamVjdHMnIG9iamVjdCB0aGF0IGtlZXBzIFxuICAgIHRyYWNrIG9mIFByb2plY3RzIGFuZCB0aGVpciBUb2Rvcy5cblxuICAgIE5vdGU6XG4gICAgICBQcm9qZWN0cy5hZGQgJiBQcm9qZWN0cy5yZW1vdmUgcmV0dXJuIHRoZSBQcm9qZWN0cyBtb2R1bGUgaXRzZWxmLlxuICAgICAgLmFkZFRvZG8sIC5yZW1vdmVUb2RvLCBhbmQgLmVkaXQgcmV0dXJuIHRoZSBwcm9qZWN0IHRoZSB0b2RvIGJlbG9uZ3MgdG8uXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHByb2plY3Rzfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIENyZWF0ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QuYWRkKCdwcm9qZWN0TmFtZScpXG5cbiAgICAgIFJldHJpdmUgdGhlbSB3aXRoIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKVxuICAgICAgb3IgdXNlIFByb2plY3RzLmxpc3QgZm9yIGFuIGFycmF5IG9mIGFsbCBwcm9qZWN0c1xuICAgICAgXG4gICAgICBZb3UgbWF5IHJlbmFtZSBhIHByb2plY3QgYnkgcmV0cml2aW5nIGl0IHRocm91Z2ggb25lIG9mIHRoZSBhYm92ZSBtZXRob2RzOlxuICAgICAgICBFeDogUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5uYW1lID0gJ25ld05hbWUnXG4gICAgICBQcm9qZWN0cyBtYXkgbm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzLlxuXG4gICAgICBSZW1vdmUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LnJlbW92ZSgncHJvamVjdE5hbWUnKVxuXG4gICAgfn5+fn5+fn5+fn5+fn5+fn5+fkFkZCwgcmV0cml2ZSwgYW5kIHJlbW92ZSB0b2Rvc35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4gICAgICBZb3UgbWF5IGluaXRpYXRlIGEgUHJvamVjdCB3aXRoIGEgdG9kbyBsaWtlIHNvOlxuICAgICAgICBQcm9qZWN0cy5hZGQoJ25ld1Byb2plY3QnKS5maW5kKCduZXdQcm9qZWN0JykuYWRkVG9kbygnVGl0bGUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEdWVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JylcbiAgICAgIFxuICAgICAgVG8gYWRkIHRvZG9zIGFmdGVyIGNyZWF0aW9uIHJldHJpZXZlIGFuIG9iamVjdCBhbmQgdXNlIGl0J3MgYWRkVG9kbyBtZXRob2RcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5hZGRUb2RvKC4uLik7XG5cbiAgICAgIFJldHJpdmUgdG9kb3Mgd2l0aCAuZmluZFRvZG8oJ3RvZG9OYW1lJykgb3IgLmxpc3RUb2Rvc1xuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgZWRpdCBhIHRvZG8gdXNpbmcgdGhlIGVkaXQgbWV0aG9kIG9uIFRvZG8gb2JqZWN0cy4gVG9kb3MgbWF5IG5vdCBcbiAgICAgIGhhdmUgaWRlbnRpY2FsIHRpdGxlcyBpbiB0aGUgc2FtZSBwcm9qZWN0OlxuICAgICAgICBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpLmVkaXQoJ3RpdGxlJywgJ25ld1RpdGxlJylcbiovXG5cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSk7XG4gICAgaWYoc3RvcmFnZSA9PT0gbnVsbCkgcmV0dXJuOyAvL3JldHVybnMgaWYgbG9jYWxTdG9yYWdlIGhhc24ndCBiZWVuIHVzZWRcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdCA9IHN0b3JhZ2VbaV07XG4gICAgICBhZGQocHJvamVjdC5uYW1lKTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaW5kKHByb2plY3QubmFtZSkuYWRkVG9kbyhwcm9qZWN0Lmxpc3RUb2Rvc1tpXS50aXRsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZHVlZGF0ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLnByaW9yaXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgXG4gIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flByb2plY3QgQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgZnVuY3Rpb24gYWRkKG5hbWUpIHtcbiAgICBpZihuYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuYW1lKSkgeyAvL3JldHVybnMgaWYgc3RyaW5nIGlzIGVtcHR5IG9yIG9ubHkgY29udGFpbnMgd2hpdGVzcGFjZVxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpO1xuICAgIH0gZWxzZSBpZihmaW5kKG5hbWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcbiAgICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICcnKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QodGl0bGUpKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhJyk7XG4gICAgICB9ZWxzZSBpZihmaW5kVG9kbyh0aXRsZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHRoaXMubmFtZTtcblxuICAgICAgZnVuY3Rpb24gZWRpdChmaWVsZCwgY2hhbmdlKSB7XG4gICAgICAgIGlmKGZpZWxkID09PSB1bmRlZmluZWQgfHwgY2hhbmdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ01pc3NpbmcgYXJndW1lbnRzIScpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KHRpdGxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKTtcbiAgICAgICAgICB9ZWxzZSBpZihmaW5kVG9kbyhjaGFuZ2UpICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlICE9PSB0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZHVlZGF0ZScpIHtcbiAgICAgICAgICBkdWVkYXRlID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICBwcmlvcml0eSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ0ZpZWxkIGRvZXMgbm90IGV4aXN0IScpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgcmV0dXJuIGZpbmQocGFyZW50UHJvamVjdCk7XG4gICAgICB9XG4gICAgICAvL1RvZG8gb2JqZWN0XG4gICAgICBjb25zdCB0b2RvID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LCBcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sIFxuICAgICAgICBnZXQgZHVlZGF0ZSgpIHtyZXR1cm4gZHVlZGF0ZX0sIFxuICAgICAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHByaW9yaXR5fSxcbiAgICAgICAgZ2V0IHBhcmVudFByb2plY3QoKSB7cmV0dXJuIHBhcmVudFByb2plY3R9LFxuICAgICAgICBlZGl0XG4gICAgICB9KTtcbiAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIFxuICAgIC8vb3RoZXIgcHJvamVjdCBjcnVkXG4gICAgZnVuY3Rpb24gZmluZFRvZG8odGl0bGUpIHtcbiAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdC5maW5kKCB0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8odGl0bGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kbyBub3QgZm91bmQhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9Qcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBPYmplY3QuZnJlZXplKHsgXG4gICAgICBnZXQgbmFtZSgpIHtyZXR1cm4gbmFtZX0sIFxuICAgICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZihuZXdOYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuZXdOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKTtcbiAgICAgICAgfSBlbHNlIGlmKGZpbmQobmV3TmFtZSkgIT09IHVuZGVmaW5lZCAmJiBuZXdOYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXQgbGlzdFRvZG9zKCkge3JldHVybiBbLi4udG9kb0xpc3RdfSxcbiAgICAgIGFkZFRvZG8sXG4gICAgICBmaW5kVG9kbyxcbiAgICAgIHJlbW92ZVRvZG9cbiAgICB9KTtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFByb2plY3QgQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuXG4gIC8vb3RoZXIgbW9kdWxlIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzTGlzdC5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKTsgLy9yZXR1cm5zIGlmIGZpbmRJbmRleCBkb2Vzbid0IGZpbmQgYSBtYXRjaFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb2plY3RzTGlzdC5maW5kKCBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSApO1xuICAgIH1cbiAgfTtcblxuICAvL01vZHVsZSBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBbLi4ucHJvamVjdHNMaXN0XTtcbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlXG4gIH1cbn0pKCk7XG5cblxuLypSZW5kZXJzIFByb2plY3RzIG9uIHRoZSB3ZWJwYWdlLiBcblVzZSBQcm9qZWN0UmVuZGVyZXIuaW5pdChwcm9qZWN0RWxlbWVudCwgdG9kb0VsZW1lbnQsIGVkaXRhYmxlKSB0byBzZXQgdGhlIGFyZWFzXG50byByZW5kZXIgdG8sIGFuZCB3aGV0aGVyIHRoZXkgbWF5IGJlIGVkaXRlZC4gVG9kb3Mgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZWlyXG5yZXNwZWN0aXZlIHByb2plY3RzIGFyZSBjbGlja2VkLlxuSWYgeW91J2QgbGlrZSB0byBvbmx5IHJlbmRlciBwcm9qZWN0IG5hbWVzLCB5b3UgbWF5IHBhc3MgYSBkdW1teSBub24tb2JqZWN0IFxudmFsdWUgYXMgdGhlIHRvZG9FbGVtZW50LiBJdCB3aWxsIGZhaWwgcXVpZXRseSB3aXRoIGEgY29uc29sZSBtZXNzYWdlIGJ5XG5kZWZhdWx0LlxuXG5BZnRlciBpbml0LCBQcm9qZWN0UmVuZGVyZXIgd2lsbCBoYXZlIHR3byBtZXRob2RzIGF2YWlsYWJsZSB0byBpdDpcblByb2plY3RSZW5kZXJlci5zZXRDb25maWc6IFVzZWQgZXhhY3RseSB0aGUgc2FtZSBhcyBQcm9qZWN0UmVuZGVyZXIuaW5pdFxuUHJvamVjdFJlbmRlcmVyLm9mZjogcmVzZXRzIFByb2plY3RSZW5kZXJlciB0byBpdCdzIG9yaWdpbmFsIHN0YXRlIGFuZCBjbGVhcnMgXG5lbGVtZW50cyBpbW1lZGlhdGVseS4gKi9cblxuXG5jb25zdCBQcm9qZWN0UmVuZGVyZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0QXJlYTtcbiAgbGV0IHRvZG9BcmVhO1xuICBsZXQgcmVuZGVyRWRpdGFibGU7XG4gIGxldCBmaXJzdEluaXQgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIF9hcHBlbmRQcm9qZWN0QWRkZXIoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKVxuICAgIHByb2plY3RBcmVhLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWxhYmVsJyk7XG4gICAgYWRkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbCk7XG5cbiAgICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7O1xuICAgIGFkZElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWlucHV0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWJ1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiBQcm9qZWN0cy5hZGQoYWRkSW5wdXQudmFsdWUpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdCcpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJztcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnRuKVxuXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gZS50YXJnZXQubmV4dFNpYmxpbmdcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICBcbiAgICAgIC8vY2hhbmdlIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuXG4gICAgICAvL2FkZCByZW1vdmUgZWxlbWVudFxuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUnKTtcbiAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICctJztcbiAgICAgIHByb2plY3RFbGVtZW50Lmluc2VydEJlZm9yZShyZW1vdmVCdG4sIHByb2plY3ROYW1lRWxlbWVudCk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBQcm9qZWN0cy5yZW1vdmUocHJvamVjdE5hbWUpKTtcbiAgICAgIFxuICAgICAgLy9leGl0IGVkaXRvciBhbmQgYXBwbHkgYW55IG5hbWUgY2hhbmdlc1xuICAgICAgY29uc3QgZXhpdEVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgICAgIGVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmVCdG4pXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICAgICAgICBcbiAgICAgICAgaWYocHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ICE9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubmFtZSA9IG5ld05hbWU7XG5cbiAgICAgICAgICAvL2NoZWNrcyBpZiBvbGQgcHJvamVjdCBuYW1lIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9tdXN0IHJlbW92ZSBsaXN0ZW5lciwgb3Igd2lsbCBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSByZW1vdmVCdG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpXG4gICAgICB9XG5cbiAgICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKTtcbiAgICB9XG4gICAgLy9IaWRlcyBlZGl0IGJ1dHRvbiBhbmQgcHJvdmlkZXMgYWRkaXRpb25hbCBvcHRpb25zIHVudGlsIHVzZXIgbW92ZXMgYXdheVxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdClcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJQcm9qZWN0cygpIHtcbiAgICBpZih0eXBlb2YgcHJvamVjdEFyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiBwcm9qZWN0QXJlYSBsZWZ0IHVuZGVmaW5lZCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0QXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RBZGRlcigpO1xuXG4gICAgUHJvamVjdHMubGlzdC5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKTtcbiAgICAgIFxuICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KTtcblxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICBcbiAgICAgIC8vcmVuZGVycyB0b2RvcyBvbiBwcm9qZWN0IGNsaWNrXG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoIW5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YWJsZScpKSB7IC8vcHJldmVudHMgc3dpdGNoaW5nIGluIGVkaXRvciBtb2RlXG4gICAgICAgICAgX3JlbmRlclRvZG9zKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpO1xuICAgICAgICBwcm9qZWN0QWRkZXIuYWZ0ZXIocHJvamVjdEVsZW1lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJlYS5wcmVwZW5kKHByb2plY3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9BZGRlcihzb3J0QmFyKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtYWRkJ1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QgPSAnc29ydC1yZW1vdmUnXG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJy0nXG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG5cbiAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0LCB0b2RvVGl0bGUpXG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIScpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWxlbWVudCcpO1xuICAgICAgdG9kb0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50KVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWFibGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGl0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pXG4gICAgfVxuXG4gICAgY29uc3QgZXhpdFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50Jyk7XG4gICAgICB0b2RvRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlYWJsZScpO1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFJlbW92ZUVkaXRvciwge29uY2U6IHRydWV9KVxuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kU29ydEJhcigpIHtcbiAgICBjb25zdCBzb3J0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29ydEJhci5jbGFzc0xpc3QuYWRkKCdzb3J0LWJhcicpO1xuXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhcilcbiAgICAgIF9hcHBlbmRUb2RvUmVtb3Zlcihzb3J0QmFyKVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0VGl0bGUuY2xhc3NMaXN0LmFkZCgnc29ydC10aXRsZScpO1xuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0VGl0bGUpXG5cbiAgICBjb25zdCBzb3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZGVzY3JpcHRpb24nKTtcbiAgICBzb3J0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24nO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoc29ydERlc2NyaXB0aW9uKVxuXG4gICAgY29uc3Qgc29ydER1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29ydER1ZWRhdGUuY2xhc3NMaXN0LmFkZCgnc29ydC1kdWVkYXRlJylcbiAgICBzb3J0RHVlZGF0ZS50ZXh0Q29udGVudCA9ICdkdWVkYXRlJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKVxuXG4gICAgY29uc3Qgc29ydFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdzb3J0LXByaW9yaXR5Jyk7XG4gICAgc29ydFByaW9yaXR5LnRleHRDb250ZW50ID0gJ3ByaW9yaXR5JztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eSlcblxuICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHNvcnRCYXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ha2VUb2RvRWRpdGFibGUoVG9kbywgYm9vbCkge1xuICAgIFRvZG8udGl0bGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIGJvb2wpO1xuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIGJvb2wpO1xuXG4gICAgbGV0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpO1xuICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVkYXRlJylcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgVG9kby5kdWVkYXRlLnRleHQpXG4gICAgXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG5cbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgLy9zZXRzIGRlZmF1bHQgc2VsZWN0aW9uIHRvIGJlIHRoZSBzYW1lIGFzIGN1cnJlbnQgdmFsdWVcbiAgICBbbG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHldLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpXG5cblxuICAgIGlmKGJvb2wgPT09IHRydWUpIHtcbiAgICAgIFRvZG8uZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgVG9kby50aXRsZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJylcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICBUb2RvLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGR1ZWRhdGVJbnB1dCwgVG9kby5wcmlvcml0eS5lbGVtZW50KTtcblxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIFRvZG8uZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgVG9kby50aXRsZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJylcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpXG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgIC8vbXVzdCB1cGRhdGUgZWxlbWVudHMgdG8gcmVtb3ZlIHRoZW0/XG4gICAgICBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKGR1ZWRhdGVJbnB1dClcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQoVG9kbykge1xuICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKVxuICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChUb2RvLnN1Ym1pdEJ0bik7XG5cbiAgICBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLnRpdGxlLnRleHQ7XG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5kZXNjcmlwdGlvbi50ZXh0O1xuICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5kdWVkYXRlLnRleHQ7XG4gICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5wcmlvcml0eS50ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pIHtcbiAgICBjb25zdCBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IGR1ZWRhdGVWYWx1ZSA9IGR1ZWRhdGVJbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcblxuICAgIC8vY29tcGFyZXMgY3VycmVudCB0ZXh0IHRvIHRleHQgd2hlbiBlZGl0IHdhcyBpbml0aWF0ZWRcbiAgICBpZiggVG9kby50aXRsZS50ZXh0ID09PSBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kZXNjcmlwdGlvbi50ZXh0ID09PSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kdWVkYXRlLnRleHQgPT09IGR1ZWRhdGVWYWx1ZSAmJlxuICAgICAgICBUb2RvLnByaW9yaXR5LnRleHQgPT09IHByaW9yaXR5T3B0aW9uXG4gICAgICApIHtcbiAgICAgIF9hYm9ydFRvZG9FZGl0KFRvZG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gVG9kby5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICAgIGNvbnN0IHRpdGxlID0gVG9kby50aXRsZS50ZXh0O1xuICAgICAgY29uc3QgbmV3VGl0bGUgPSBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld0R1ZWRhdGUgPSBkdWVkYXRlVmFsdWU7XG4gICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5T3B0aW9uO1xuICAgICAgbGV0IHRpdGxlQ2hhbmdlZFxuXG4gICAgICBpZihUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgIT09IFRvZG8udGl0bGUudGV4dCkge1xuICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKS5lZGl0KCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgICAgICAgLy9jaGVja3MgaWYgb2xkIHRvZG8gdGl0bGUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dDtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKG5ld1RpdGxlKSA6IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKTtcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKVxuICAgICAgdG9kb09iai5lZGl0KCdkdWVkYXRlJywgbmV3RHVlZGF0ZSlcbiAgICAgIHRvZG9PYmouZWRpdCgncHJpb3JpdHknLCBuZXdQcmlvcml0eSlcbiAgICAgIFxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKTtcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IG5ld0R1ZWRhdGU7XG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdQcmlvcml0eTtcbiAgICAgIGNvbnNvbGUubG9nKHRvZG9PYmopO1xuICAgIH1cbiAgfTtcblxuICAvL3RoaXMgZnVuY3Rpb24gc2VlbXMgYSBiaXQgbWVzc3lcbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQnKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ+Kcjic7XG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vTWFrZXMgdGhlIGVudGlyZSBsaXN0IG9mIGVsZW1lbnRzIGVhc2llciB0byBwYXNzIGFyb3VuZCB0byBvdGhlciBmdW5jdGlvbnNcbiAgICAgIGNvbnN0IFRvZG8gPSB7XG4gICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQsIC8vdGhlIGVudGlyZSB0b2RvIHBhcmVudCBlbGVtZW50XG4gICAgICAgIGVkaXRCdG46IGUudGFyZ2V0LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0Lm5leHRTaWJsaW5nLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5uZXh0U2libGluZy50ZXh0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0sIFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bM10sIFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bM10udGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgcHJpb3JpdHk6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzRdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzRdLnRleHRDb250ZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgX21ha2VUb2RvRWRpdGFibGUoVG9kbywgdHJ1ZSlcblxuICAgICAgVG9kby5zdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBUb2RvLnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgVG9kby5lbGVtZW50LnByZXBlbmQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pO1xuICAgICAgVG9kby5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLmxpc3RUb2RvcztcblxuICAgIF9hcHBlbmRTb3J0QmFyKCk7XG4gIFxuICAgIGlmKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgXG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCB0b2RvLnBhcmVudFByb2plY3QpXG4gICAgICAgIFxuICAgICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlZGF0ZTtcbiAgICAgICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTsgIFxuICAgICAgICBcbiAgICAgICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgRXZlbnRzLm9mZigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0QXJlYSA9IHVuZGVmaW5lZDtcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZDtcbiAgICByZW5kZXJFZGl0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJzdEluaXQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgZGVsZXRlIHRoaXMuc2V0UmVuZGVyQ29uZmlnO1xuICAgIGRlbGV0ZSB0aGlzLm9mZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50O1xuICAgIHRvZG9BcmVhID0gdG9kb0VsZW1lbnQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSBlZGl0YWJsZTtcbiAgICBfcmVuZGVyUHJvamVjdHMoKTtcblxuICAgIGlmKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLypQdXR0aW5nIEV2ZW50cyBjb2RlIGhlcmUgYWxsb3dzIGV2ZW50cyB0byBiZSB0cmlnZ2VyZWQgb25seSBhZnRlciBpbml0LCBcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4qL1xuICAgICAgRXZlbnRzLm9uKCdwcm9qZWN0c1VwZGF0ZScsIF9yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICAgIC8vcmV1c2VzIHRoaXMgZnVuY3Rpb24gdG8gc2V0IG9wdGlvbnMgYWZ0ZXIgaW5pdCBpZiBkZXNpcmVkLlxuICAgICAgZmlyc3RJbml0ID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXQ7XG4gICAgICB0aGlzLm9mZiA9IG9mZjtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5pdDtcbiAgfVxuICBcbiAgcmV0dXJuIHtpbml0fTsgLy9hZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5leHBvcnQge1Byb2plY3RSZW5kZXJlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=