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
      submitBtn.classList.add('todo-submit', 'editable');
      submitBtn.textContent = '✓';
      addForm.append(submitBtn);
       
      const title = document.createElement('span');
      title.textContent = 'New Todo';
      title.classList.add('todo-title', 'editable');
      title.setAttribute('contentEditable', true)
      addForm.appendChild(title)  

      const description = document.createElement('span');
      description.classList.add('todo-description', 'editable');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFVBQVUsMkJBQTJCO0FBQ3JDLENBQUM7O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7QUFHdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQywyQkFBMkIsbUJBQW1CO0FBQzlDLHVCQUF1QixlQUFlO0FBQ3RDLHdCQUF3QixnQkFBZ0I7QUFDeEMsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdURBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHVEQUF1RCxXQUFXO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsV0FBVztBQUNyRSx1REFBdUQsV0FBVztBQUNsRTs7QUFFQSxxREFBcUQsV0FBVztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2REFBNkQsV0FBVztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDhEQUE4RCxXQUFXO0FBQ3pFOztBQUVBLDREQUE0RCxXQUFXO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsV0FBVztBQUMxRSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGVBQWU7QUFDaEMsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgZXZlbnRzID0ge307XG5cbiAgZnVuY3Rpb24gb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmIChldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAgICAgICBmbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7b24sIG9mZiwgZW1pdCwgZ2V0IGxpc3QoKSB7cmV0dXJuIGV2ZW50c319O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8qIFBlb3BsZS5qc1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgUGVvcGxlID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcGVvcGxlID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGVvcGxlKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwZXJzb24gPT4gcGVvcGxlLnB1c2gocGVyc29uKSk7XG4gICAgRXZlbnRzLmVtaXQoJ3Blb3BsZUNoYW5nZWQnLCBwZW9wbGUpO1xuICB9XG5cbiAgcmV0dXJuIHthZGRQZW9wbGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xuKi9cblxuLyogU3RhdHMuanNcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBTdGF0cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXRzID0ge307XG5cbiAgRXZlbnRzLm9uKCdwZW9wbGVDaGFuZ2VkJywgc2V0UGVvcGxlKTtcblxuICBmdW5jdGlvbiBzZXRQZW9wbGUocGVvcGxlKSB7XG4gICAgc3RhdHMucGVvcGxlID0gcGVvcGxlLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XG4gICAgY29uc29sZS5sb2coc3RhdHMucGVvcGxlKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4qL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2V2ZW50cy5qc1wiO1xuXG4vKiAgXG4gICAgVGhpcyBtb2R1bGUgZXhwb3J0cyBhICdQcm9qZWN0cycgb2JqZWN0IHRoYXQga2VlcHMgXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG4gICAgICBcbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0R1ZURhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUHJpb3JpdHknKVxuICAgICAgXG4gICAgICBUbyBhZGQgdG9kb3MgYWZ0ZXIgY3JlYXRpb24gcmV0cmlldmUgYW4gb2JqZWN0IGFuZCB1c2UgaXQncyBhZGRUb2RvIG1ldGhvZFxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmFkZFRvZG8oLi4uKTtcblxuICAgICAgUmV0cml2ZSB0b2RvcyB3aXRoIC5maW5kVG9kbygndG9kb05hbWUnKSBvciAubGlzdFRvZG9zXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJylcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5saXN0VG9kb3NcblxuICAgICAgUmVtb3ZlIHRvZG9zIHdpdGggLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpXG4gICAgICAgIFByb2plY3QuZmluZCgncHJvamVjdE5hbWUnKS5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKTtcblxuICAgICAgWW91IG1heSBlZGl0IGEgdG9kbyB1c2luZyB0aGUgZWRpdCBtZXRob2Qgb24gVG9kbyBvYmplY3RzLiBUb2RvcyBtYXkgbm90IFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuXG5jb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgZnVuY3Rpb24gX3NhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpKTtcbiAgICBpZihzdG9yYWdlID09PSBudWxsKSByZXR1cm47IC8vcmV0dXJucyBpZiBsb2NhbFN0b3JhZ2UgaGFzbid0IGJlZW4gdXNlZFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gc3RvcmFnZVtpXTtcbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kdWVkYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+UHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICBmdW5jdGlvbiBhZGQobmFtZSkge1xuICAgIGlmKG5hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5hbWUpKSB7IC8vcmV0dXJucyBpZiBzdHJpbmcgaXMgZW1wdHkgb3Igb25seSBjb250YWlucyB3aGl0ZXNwYWNlXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgfSBlbHNlIGlmKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+VG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVkYXRlID0gJycsIHByaW9yaXR5ID0gJycpIHtcbiAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBtdXN0IGhhdmUgYSB0aXRsZSEnKTtcbiAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gdGhpcy5uYW1lO1xuXG4gICAgICBmdW5jdGlvbiBlZGl0KGZpZWxkLCBjaGFuZ2UpIHtcbiAgICAgICAgaWYoZmllbGQgPT09IHVuZGVmaW5lZCB8fCBjaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnTWlzc2luZyBhcmd1bWVudHMhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QodGl0bGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgICAgIH1lbHNlIGlmKGZpbmRUb2RvKGNoYW5nZSkgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2UgIT09IHRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2UgaWYoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnRmllbGQgZG9lcyBub3QgZXhpc3QhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gZmluZChwYXJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICAgIC8vVG9kbyBvYmplY3RcbiAgICAgIGNvbnN0IHRvZG8gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sIFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSwgXG4gICAgICAgIGdldCBkdWVkYXRlKCkge3JldHVybiBkdWVkYXRlfSwgXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgICAgICBnZXQgcGFyZW50UHJvamVjdCgpIHtyZXR1cm4gcGFyZW50UHJvamVjdH0sXG4gICAgICAgIGVkaXRcbiAgICAgIH0pO1xuICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgVG9kbyBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gICAgXG4gICAgLy9vdGhlciBwcm9qZWN0IGNydWRcbiAgICBmdW5jdGlvbiBmaW5kVG9kbyh0aXRsZSkge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQoIHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0aXRsZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1Byb2plY3Qgb2JqZWN0XG4gICAgY29uc3QgcHJvamVjdCA9IE9iamVjdC5mcmVlemUoeyBcbiAgICAgIGdldCBuYW1lKCkge3JldHVybiBuYW1lfSwgXG4gICAgICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgICAgIGlmKG5ld05hbWUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KG5ld05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIScpO1xuICAgICAgICB9IGVsc2UgaWYoZmluZChuZXdOYW1lKSAhPT0gdW5kZWZpbmVkICYmIG5ld05hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldCBsaXN0VG9kb3MoKSB7cmV0dXJuIFsuLi50b2RvTGlzdF19LFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGZpbmRUb2RvLFxuICAgICAgcmVtb3ZlVG9kb1xuICAgIH0pO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5FbmQgb2YgUHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG5cbiAgLy9vdGhlciBtb2R1bGUgY3J1ZFxuICBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpOyAvL3JldHVybnMgaWYgZmluZEluZGV4IGRvZXNuJ3QgZmluZCBhIG1hdGNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXggLCAxKTtcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3Qgbm90IGZvdW5kIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQoIHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lICk7XG4gICAgfVxuICB9O1xuXG4gIC8vTW9kdWxlIG9iamVjdFxuICByZXR1cm4ge1xuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIFsuLi5wcm9qZWN0c0xpc3RdO1xuICAgIH0sXG4gICAgYWRkLFxuICAgIHJlbW92ZSxcbiAgICBmaW5kLFxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2VcbiAgfVxufSkoKTtcblxuXG4vKlJlbmRlcnMgUHJvamVjdHMgb24gdGhlIHdlYnBhZ2UuIFxuVXNlIFByb2plY3RSZW5kZXJlci5pbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUpIHRvIHNldCB0aGUgYXJlYXNcbnRvIHJlbmRlciB0bywgYW5kIHdoZXRoZXIgdGhleSBtYXkgYmUgZWRpdGVkLiBUb2RvcyB3aWxsIGJlIHJlbmRlcmVkIHdoZW4gdGhlaXJcbnJlc3BlY3RpdmUgcHJvamVjdHMgYXJlIGNsaWNrZWQuXG5JZiB5b3UnZCBsaWtlIHRvIG9ubHkgcmVuZGVyIHByb2plY3QgbmFtZXMsIHlvdSBtYXkgcGFzcyBhIGR1bW15IG5vbi1vYmplY3QgXG52YWx1ZSBhcyB0aGUgdG9kb0VsZW1lbnQuIEl0IHdpbGwgZmFpbCBxdWlldGx5IHdpdGggYSBjb25zb2xlIG1lc3NhZ2UgYnlcbmRlZmF1bHQuXG5cbkFmdGVyIGluaXQsIFByb2plY3RSZW5kZXJlciB3aWxsIGhhdmUgdHdvIG1ldGhvZHMgYXZhaWxhYmxlIHRvIGl0OlxuUHJvamVjdFJlbmRlcmVyLnNldENvbmZpZzogVXNlZCBleGFjdGx5IHRoZSBzYW1lIGFzIFByb2plY3RSZW5kZXJlci5pbml0XG5Qcm9qZWN0UmVuZGVyZXIub2ZmOiByZXNldHMgUHJvamVjdFJlbmRlcmVyIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUgYW5kIGNsZWFycyBcbmVsZW1lbnRzIGltbWVkaWF0ZWx5LiAqL1xuXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHByb2plY3RBcmVhO1xuICBsZXQgdG9kb0FyZWE7XG4gIGxldCByZW5kZXJFZGl0YWJsZTtcbiAgbGV0IGZpcnN0SW5pdCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RBZGRlcigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpXG4gICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYWRkTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtbGFiZWwnKTtcbiAgICBhZGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgYWRkTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZExhYmVsKTtcblxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTs7XG4gICAgYWRkSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtaW5wdXQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRJbnB1dCk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGUpID0+IFByb2plY3RzLmFkZChhZGRJbnB1dC52YWx1ZSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBlLnRhcmdldC5uZXh0U2libGluZ1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgIFxuICAgICAgLy9jaGFuZ2UgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJyk7XG4gICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG5cbiAgICAgIC8vYWRkIHJlbW92ZSBlbGVtZW50XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXJlbW92ZScpO1xuICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJy0nO1xuICAgICAgcHJvamVjdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJlbW92ZUJ0biwgcHJvamVjdE5hbWVFbGVtZW50KTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFByb2plY3RzLnJlbW92ZShwcm9qZWN0TmFtZSkpO1xuICAgICAgXG4gICAgICAvL2V4aXQgZWRpdG9yIGFuZCBhcHBseSBhbnkgbmFtZSBjaGFuZ2VzXG4gICAgICBjb25zdCBleGl0RWRpdG9yID0gKGUpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJylcbiAgICAgICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZUJ0bilcbiAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG4gICAgICAgIFxuICAgICAgICBpZihwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgIT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5uYW1lID0gbmV3TmFtZTtcblxuICAgICAgICAgIC8vY2hlY2tzIGlmIG9sZCBwcm9qZWN0IG5hbWUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgICBpZih0eXBlb2YgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL211c3QgcmVtb3ZlIGxpc3RlbmVyLCBvciB3aWxsIGNvbnRpbnVlIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIHJlbW92ZUJ0blxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcilcbiAgICAgIH1cblxuICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV4aXRFZGl0b3IpO1xuICAgIH1cbiAgICAvL0hpZGVzIGVkaXQgYnV0dG9uIGFuZCBwcm92aWRlcyBhZGRpdGlvbmFsIG9wdGlvbnMgdW50aWwgdXNlciBtb3ZlcyBhd2F5XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbmRlclByb2plY3RzKCkge1xuICAgIGlmKHR5cGVvZiBwcm9qZWN0QXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHByb2plY3RBcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEFkZGVyKCk7XG5cbiAgICBQcm9qZWN0cy5saXN0LmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudCcpO1xuICAgICAgXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIFxuICAgICAgLy9yZW5kZXJzIHRvZG9zIG9uIHByb2plY3QgY2xpY2tcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZighbmFtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRhYmxlJykpIHsgLy9wcmV2ZW50cyBzd2l0Y2hpbmcgaW4gZWRpdG9yIG1vZGVcbiAgICAgICAgICBfcmVuZGVyVG9kb3MoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYWRkJyk7XG4gICAgICAgIHByb2plY3RBZGRlci5hZnRlcihwcm9qZWN0RWxlbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RBcmVhLnByZXBlbmQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmNsYXNzTGlzdCA9ICdzb3J0LWFkZCc7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGNvbnN0IGV4aXRUb2RvQWRkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYWRkRm9ybScpXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcbiAgICAgIGlmKGFkZEZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgYWRkRm9ybS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoZSwgYWRkRm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZWRhdGUnKS52YWx1ZVxuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby1wcmlvcml0eScpXG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC5vcHRpb25zW3ByaW9yaXR5RWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmFkZFRvZG8obmV3VG9kbywgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZXhpdFRvZG9BZGRlcigpXG5cbiAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFkZEZvcm0gPSAoZSkgPT4ge1xuICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnLCAndG9kby1hZGRGb3JtJyk7XG4gICAgICBhZGRGb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0JywgJ2VkaXRhYmxlJyk7XG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIGFkZEZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG4gICAgICAgXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnLCAnZWRpdGFibGUnKTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpICBcblxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJywgJ2VkaXRhYmxlJyk7XG4gICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIHRydWUpXG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTsgXG5cbiAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG4gICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlZGF0ZScpO1xuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGR1ZWRhdGVJbnB1dCk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JywgJ2VkaXRhYmxlJyk7XG5cbiAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnO1xuICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJzsgXG5cbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG5cbiAgICAgIHRvZG9BcmVhLmluc2VydEJlZm9yZShhZGRGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lbGVtZW50JykpO1xuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IGFkZE5ld1RvZG8oZSwgYWRkRm9ybSlcbiAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIsIHtvbmNlOiB0cnVlfSlcbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4aXRUb2RvQWRkZXIsIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7b25jZTogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtcmVtb3ZlJztcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0LCB0b2RvVGl0bGUpO1xuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCEnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWxlbWVudCcpO1xuICAgICAgdG9kb0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVhYmxlJyk7XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlbW92ZUVkaXRvciwge29uY2U6IHRydWV9KTtcbiAgICB9XG5cbiAgICBjb25zdCBleGl0UmVtb3ZlRWRpdG9yID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWVsZW1lbnQnKTtcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlYWJsZScpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFNvcnRCYXIocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBzb3J0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29ydEJhci5jbGFzc0xpc3QuYWRkKCdzb3J0LWJhcicpO1xuXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhciwgcHJvamVjdE5hbWUpO1xuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0VGl0bGUuY2xhc3NMaXN0LmFkZCgnc29ydC10aXRsZScpO1xuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0VGl0bGUpO1xuXG4gICAgY29uc3Qgc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0RHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdzb3J0LWR1ZWRhdGUnKTtcbiAgICBzb3J0RHVlZGF0ZS50ZXh0Q29udGVudCA9ICdkdWVkYXRlJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKTtcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1wcmlvcml0eScpO1xuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpO1xuXG4gICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoc29ydEJhcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBib29sKSB7XG4gICAgVG9kby50aXRsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG5cbiAgICBsZXQgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFRvZG8uZHVlZGF0ZS50ZXh0KTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgLy9zZXRzIGRlZmF1bHQgc2VsZWN0aW9uIHRvIGJlIHRoZSBzYW1lIGFzIGN1cnJlbnQgdmFsdWVcbiAgICBbbG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHldLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLnRpdGxlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIFRvZG8uZWxlbWVudC5pbnNlcnRCZWZvcmUoZHVlZGF0ZUlucHV0LCBUb2RvLnByaW9yaXR5LmVsZW1lbnQpO1xuXG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb2RvLmVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgICAgLy9tdXN0IHVwZGF0ZSBlbGVtZW50cyB0byByZW1vdmUgdGhlbT9cbiAgICAgIGR1ZWRhdGVJbnB1dCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlZGF0ZUlucHV0KTtcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQoVG9kbykge1xuICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby50aXRsZS50ZXh0O1xuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZGVzY3JpcHRpb24udGV4dDtcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0O1xuICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8ucHJpb3JpdHkudGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdWJtaXRUb2RvQ2hhbmdlcyhUb2RvKSB7XG4gICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgZHVlZGF0ZVZhbHVlID0gZHVlZGF0ZUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAvL2NvbXBhcmVzIGN1cnJlbnQgdGV4dCB0byB0ZXh0IHdoZW4gZWRpdCB3YXMgaW5pdGlhdGVkXG4gICAgaWYoIFRvZG8udGl0bGUudGV4dCA9PT0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZGVzY3JpcHRpb24udGV4dCA9PT0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZHVlZGF0ZS50ZXh0ID09PSBkdWVkYXRlVmFsdWUgJiZcbiAgICAgICAgVG9kby5wcmlvcml0eS50ZXh0ID09PSBwcmlvcml0eU9wdGlvblxuICAgICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IFRvZG8uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xuICAgICAgY29uc3QgdGl0bGUgPSBUb2RvLnRpdGxlLnRleHQ7XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3RHVlZGF0ZSA9IGR1ZWRhdGVWYWx1ZTtcbiAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlPcHRpb247XG4gICAgICBsZXQgdGl0bGVDaGFuZ2VkO1xuXG4gICAgICBpZihUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgIT09IFRvZG8udGl0bGUudGV4dCkge1xuICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKS5lZGl0KCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgICAgICAgLy9jaGVja3MgaWYgb2xkIHRvZG8gdGl0bGUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dDtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKG5ld1RpdGxlKSA6IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKTtcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgIHRvZG9PYmouZWRpdCgnZHVlZGF0ZScsIG5ld0R1ZWRhdGUpO1xuICAgICAgdG9kb09iai5lZGl0KCdwcmlvcml0eScsIG5ld1ByaW9yaXR5KTtcbiAgICAgIFxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKTtcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdEdWVkYXRlO1xuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvT2JqKTtcbiAgICB9XG4gIH07XG5cbiAgLy90aGlzIGZ1bmN0aW9uIHNlZW1zIGEgYml0IG1lc3N5XG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvL01ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvL3RoZSBlbnRpcmUgdG9kbyBwYXJlbnQgZWxlbWVudFxuICAgICAgICBlZGl0QnRuOiBlLnRhcmdldCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5uZXh0U2libGluZywgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIGR1ZWRhdGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XSwgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCB0cnVlKTtcblxuICAgICAgVG9kby5zdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBUb2RvLnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgVG9kby5lbGVtZW50LnByZXBlbmQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pO1xuICAgICAgVG9kby5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLmxpc3RUb2RvcztcblxuICAgIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKTtcbiAgXG4gICAgaWYodG9kb3MubGVuZ3RoID4gMCkge1xuICBcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWxlbWVudCcpO1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHRvZG8ucGFyZW50UHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlZGF0ZTtcbiAgICAgICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTsgIFxuICAgICAgICBcbiAgICAgICAgdG9kb0FyZWEuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lbGVtZW50JykpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgRXZlbnRzLm9mZigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0QXJlYSA9IHVuZGVmaW5lZDtcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZDtcbiAgICByZW5kZXJFZGl0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJzdEluaXQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgZGVsZXRlIHRoaXMuc2V0UmVuZGVyQ29uZmlnO1xuICAgIGRlbGV0ZSB0aGlzLm9mZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50O1xuICAgIHRvZG9BcmVhID0gdG9kb0VsZW1lbnQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSBlZGl0YWJsZTtcbiAgICBfcmVuZGVyUHJvamVjdHMoKTtcblxuICAgIGlmKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLypQdXR0aW5nIEV2ZW50cyBjb2RlIGhlcmUgYWxsb3dzIGV2ZW50cyB0byBiZSB0cmlnZ2VyZWQgb25seSBhZnRlciBpbml0LCBcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4qL1xuICAgICAgRXZlbnRzLm9uKCdwcm9qZWN0c1VwZGF0ZScsIF9yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICAgIC8vcmV1c2VzIHRoaXMgZnVuY3Rpb24gdG8gc2V0IG9wdGlvbnMgYWZ0ZXIgaW5pdCBpZiBkZXNpcmVkLlxuICAgICAgZmlyc3RJbml0ID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXQ7XG4gICAgICB0aGlzLm9mZiA9IG9mZjtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5pdDtcbiAgfVxuICBcbiAgcmV0dXJuIHtpbml0fTsgLy9hZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5leHBvcnQge1Byb2plY3RSZW5kZXJlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=