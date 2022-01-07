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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFVBQVUsMkJBQTJCO0FBQ3JDLENBQUM7O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7QUFHdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQywyQkFBMkIsbUJBQW1CO0FBQzlDLHVCQUF1QixlQUFlO0FBQ3RDLHdCQUF3QixnQkFBZ0I7QUFDeEMsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdURBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHVEQUF1RCxXQUFXO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsV0FBVztBQUNyRSx1REFBdUQsV0FBVztBQUNsRTs7QUFFQSxxREFBcUQsV0FBVztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2REFBNkQsV0FBVztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsOERBQThELFdBQVc7QUFDekU7O0FBRUEsNERBQTRELFdBQVc7QUFDdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRCxXQUFXO0FBQzFFLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFTOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU8sZUFBZTtBQUNoQyxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBldmVudHMgPSB7fTtcblxuICBmdW5jdGlvbiBvbiAoZXZlbnROYW1lLCBmbikge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtvbiwgb2ZmLCBlbWl0LCBnZXQgbGlzdCgpIHtyZXR1cm4gZXZlbnRzfX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG5cblxuLyogUGVvcGxlLmpzXG5cbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBQZW9wbGUgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBwZW9wbGUgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQZW9wbGUoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKHBlcnNvbiA9PiBwZW9wbGUucHVzaChwZXJzb24pKTtcbiAgICBFdmVudHMuZW1pdCgncGVvcGxlQ2hhbmdlZCcsIHBlb3BsZSk7XG4gIH1cblxuICByZXR1cm4ge2FkZFBlb3BsZX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGU7XG4qL1xuXG4vKiBTdGF0cy5qc1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFN0YXRzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgc3RhdHMgPSB7fTtcblxuICBFdmVudHMub24oJ3Blb3BsZUNoYW5nZWQnLCBzZXRQZW9wbGUpO1xuXG4gIGZ1bmN0aW9uIHNldFBlb3BsZShwZW9wbGUpIHtcbiAgICBzdGF0cy5wZW9wbGUgPSBwZW9wbGUubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0cy5wZW9wbGUpO1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZXZlbnRzLmpzXCI7XG5cbi8qICBcbiAgICBUaGlzIG1vZHVsZSBleHBvcnRzIGEgJ1Byb2plY3RzJyBvYmplY3QgdGhhdCBrZWVwcyBcbiAgICB0cmFjayBvZiBQcm9qZWN0cyBhbmQgdGhlaXIgVG9kb3MuXG5cbiAgICBOb3RlOlxuICAgICAgUHJvamVjdHMuYWRkICYgUHJvamVjdHMucmVtb3ZlIHJldHVybiB0aGUgUHJvamVjdHMgbW9kdWxlIGl0c2VsZi5cbiAgICAgIC5hZGRUb2RvLCAucmVtb3ZlVG9kbywgYW5kIC5lZGl0IHJldHVybiB0aGUgcHJvamVjdCB0aGUgdG9kbyBiZWxvbmdzIHRvLlxuXG4gICAgfn5+fn5+fn5+fn5+fn5+fn5+fkFkZCwgcmV0cml2ZSwgYW5kIHJlbW92ZSBwcm9qZWN0c35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4gICAgICBDcmVhdGUgcHJvamVjdHMgd2l0aCBQcm9qZWN0LmFkZCgncHJvamVjdE5hbWUnKVxuXG4gICAgICBSZXRyaXZlIHRoZW0gd2l0aCBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJylcbiAgICAgIG9yIHVzZSBQcm9qZWN0cy5saXN0IGZvciBhbiBhcnJheSBvZiBhbGwgcHJvamVjdHNcbiAgICAgIFxuICAgICAgWW91IG1heSByZW5hbWUgYSBwcm9qZWN0IGJ5IHJldHJpdmluZyBpdCB0aHJvdWdoIG9uZSBvZiB0aGUgYWJvdmUgbWV0aG9kczpcbiAgICAgICAgRXg6IFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykubmFtZSA9ICduZXdOYW1lJ1xuICAgICAgUHJvamVjdHMgbWF5IG5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcy5cblxuICAgICAgUmVtb3ZlIHByb2plY3RzIHdpdGggUHJvamVjdC5yZW1vdmUoJ3Byb2plY3ROYW1lJylcblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgdG9kb3N+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgWW91IG1heSBpbml0aWF0ZSBhIFByb2plY3Qgd2l0aCBhIHRvZG8gbGlrZSBzbzpcbiAgICAgICAgUHJvamVjdHMuYWRkKCduZXdQcm9qZWN0JykuZmluZCgnbmV3UHJvamVjdCcpLmFkZFRvZG8oJ1RpdGxlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRHVlRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmlvcml0eScpXG4gICAgICBcbiAgICAgIFRvIGFkZCB0b2RvcyBhZnRlciBjcmVhdGlvbiByZXRyaWV2ZSBhbiBvYmplY3QgYW5kIHVzZSBpdCdzIGFkZFRvZG8gbWV0aG9kXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykuYWRkVG9kbyguLi4pO1xuXG4gICAgICBSZXRyaXZlIHRvZG9zIHdpdGggLmZpbmRUb2RvKCd0b2RvTmFtZScpIG9yIC5saXN0VG9kb3NcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKVxuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmxpc3RUb2Rvc1xuXG4gICAgICBSZW1vdmUgdG9kb3Mgd2l0aCAucmVtb3ZlVG9kbygndG9kb1RpdGxlJylcbiAgICAgICAgUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpLnJlbW92ZVRvZG8oJ3RvZG9UaXRsZScpO1xuXG4gICAgICBZb3UgbWF5IGVkaXQgYSB0b2RvIHVzaW5nIHRoZSBlZGl0IG1ldGhvZCBvbiBUb2RvIG9iamVjdHMuIFRvZG9zIG1heSBub3QgXG4gICAgICBoYXZlIGlkZW50aWNhbCB0aXRsZXMgaW4gdGhlIHNhbWUgcHJvamVjdDpcbiAgICAgICAgUHJvamVjdHMuZmluZCgnUHJvamVjdE5hbWUnKS5maW5kVG9kbygndG9kb05hbWUnKS5lZGl0KCd0aXRsZScsICduZXdUaXRsZScpXG4qL1xuXG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBfc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNMaXN0JykpO1xuICAgIGlmKHN0b3JhZ2UgPT09IG51bGwpIHJldHVybjsgLy9yZXR1cm5zIGlmIGxvY2FsU3RvcmFnZSBoYXNuJ3QgYmVlbiB1c2VkXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb2plY3QgPSBzdG9yYWdlW2ldO1xuICAgICAgYWRkKHByb2plY3QubmFtZSk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0VG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmluZChwcm9qZWN0Lm5hbWUpLmFkZFRvZG8ocHJvamVjdC5saXN0VG9kb3NbaV0udGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmR1ZWRhdGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5wcmlvcml0eSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFxuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Qcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiovXG4gIGZ1bmN0aW9uIGFkZChuYW1lKSB7XG4gICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHsgLy9yZXR1cm5zIGlmIHN0cmluZyBpcyBlbXB0eSBvciBvbmx5IGNvbnRhaW5zIHdoaXRlc3BhY2VcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKTtcbiAgICB9IGVsc2UgaWYoZmluZChuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIGNhbm5vdCBoYXZlIGlkZW50aWNhbCBuYW1lcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgLyp+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4qL1xuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZWRhdGUgPSAnJywgcHJpb3JpdHkgPSAnJykge1xuICAgICAgaWYodGl0bGUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KHRpdGxlKSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpO1xuICAgICAgfWVsc2UgaWYoZmluZFRvZG8odGl0bGUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSB0aGlzLm5hbWU7XG5cbiAgICAgIGZ1bmN0aW9uIGVkaXQoZmllbGQsIGNoYW5nZSkge1xuICAgICAgICBpZihmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGNoYW5nZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdNaXNzaW5nIGFyZ3VtZW50cyEnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgIGlmKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhJyk7XG4gICAgICAgICAgfWVsc2UgaWYoZmluZFRvZG8oY2hhbmdlKSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZSAhPT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZihmaWVsZCA9PT0gJ2R1ZWRhdGUnKSB7XG4gICAgICAgICAgZHVlZGF0ZSA9IGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmKGZpZWxkID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgcHJpb3JpdHkgPSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpO1xuICAgICAgfVxuICAgICAgLy9Ub2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZWRhdGUoKSB7cmV0dXJuIGR1ZWRhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0KCkge3JldHVybiBwYXJlbnRQcm9qZWN0fSxcbiAgICAgICAgZWRpdFxuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBUb2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cbiAgICBcbiAgICAvL290aGVyIHByb2plY3QgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvKHRpdGxlKSB7XG4gICAgICBpZih0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kbyBub3QgZm91bmQhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3QuZmluZCggdG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRpdGxlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG8udGl0bGUgPT09IHRpdGxlKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG8gbm90IGZvdW5kIScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vUHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gT2JqZWN0LmZyZWV6ZSh7IFxuICAgICAgZ2V0IG5hbWUoKSB7cmV0dXJuIG5hbWV9LCBcbiAgICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgICAgaWYobmV3TmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmV3TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJyk7XG4gICAgICAgIH0gZWxzZSBpZihmaW5kKG5ld05hbWUpICE9PSB1bmRlZmluZWQgJiYgbmV3TmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0IGxpc3RUb2RvcygpIHtyZXR1cm4gWy4uLnRvZG9MaXN0XX0sXG4gICAgICBhZGRUb2RvLFxuICAgICAgZmluZFRvZG8sXG4gICAgICByZW1vdmVUb2RvXG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+Ki9cblxuICAvL290aGVyIG1vZHVsZSBjcnVkXG4gIGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7IC8vcmV0dXJucyBpZiBmaW5kSW5kZXggZG9lc24ndCBmaW5kIGEgbWF0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCAsIDEpO1xuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKG5hbWUpIHtcbiAgICBpZihuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdCBub3QgZm91bmQhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9qZWN0c0xpc3QuZmluZCggcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgLy9Nb2R1bGUgb2JqZWN0XG4gIHJldHVybiB7XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF07XG4gICAgfSxcbiAgICBhZGQsXG4gICAgcmVtb3ZlLFxuICAgIGZpbmQsXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZVxuICB9XG59KSgpO1xuXG5cbi8qUmVuZGVycyBQcm9qZWN0cyBvbiB0aGUgd2VicGFnZS4gXG5Vc2UgUHJvamVjdFJlbmRlcmVyLmluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSkgdG8gc2V0IHRoZSBhcmVhc1xudG8gcmVuZGVyIHRvLCBhbmQgd2hldGhlciB0aGV5IG1heSBiZSBlZGl0ZWQuIFRvZG9zIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGVpclxucmVzcGVjdGl2ZSBwcm9qZWN0cyBhcmUgY2xpY2tlZC5cbklmIHlvdSdkIGxpa2UgdG8gb25seSByZW5kZXIgcHJvamVjdCBuYW1lcywgeW91IG1heSBwYXNzIGEgZHVtbXkgbm9uLW9iamVjdCBcbnZhbHVlIGFzIHRoZSB0b2RvRWxlbWVudC4gSXQgd2lsbCBmYWlsIHF1aWV0bHkgd2l0aCBhIGNvbnNvbGUgbWVzc2FnZSBieVxuZGVmYXVsdC5cblxuQWZ0ZXIgaW5pdCwgUHJvamVjdFJlbmRlcmVyIHdpbGwgaGF2ZSB0d28gbWV0aG9kcyBhdmFpbGFibGUgdG8gaXQ6XG5Qcm9qZWN0UmVuZGVyZXIuc2V0Q29uZmlnOiBVc2VkIGV4YWN0bHkgdGhlIHNhbWUgYXMgUHJvamVjdFJlbmRlcmVyLmluaXRcblByb2plY3RSZW5kZXJlci5vZmY6IHJlc2V0cyBQcm9qZWN0UmVuZGVyZXIgdG8gaXQncyBvcmlnaW5hbCBzdGF0ZSBhbmQgY2xlYXJzIFxuZWxlbWVudHMgaW1tZWRpYXRlbHkuICovXG5cblxuY29uc3QgUHJvamVjdFJlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdEFyZWE7XG4gIGxldCB0b2RvQXJlYTtcbiAgbGV0IHJlbmRlckVkaXRhYmxlO1xuICBsZXQgZmlyc3RJbml0ID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEFkZGVyKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZCcpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBhZGRMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1sYWJlbCcpO1xuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkTGFiZWwpO1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOztcbiAgICBhZGRJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1pbnB1dCcpO1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBQcm9qZWN0Jyk7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZElucHV0KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC1idXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RFZGl0b3IocHJvamVjdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQnKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ+Kcjic7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgXG4gICAgICAvL2NoYW5nZSBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcblxuICAgICAgLy9hZGQgcmVtb3ZlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcmVtb3ZlJyk7XG4gICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlQnRuLCBwcm9qZWN0TmFtZUVsZW1lbnQpO1xuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gUHJvamVjdHMucmVtb3ZlKHByb2plY3ROYW1lKSk7XG4gICAgICBcbiAgICAgIC8vZXhpdCBlZGl0b3IgYW5kIGFwcGx5IGFueSBuYW1lIGNoYW5nZXNcbiAgICAgIGNvbnN0IGV4aXRFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuICAgICAgICBlZGl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgIFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLm5hbWUgPSBuZXdOYW1lO1xuXG4gICAgICAgICAgLy9jaGVja3MgaWYgb2xkIHByb2plY3QgbmFtZSBleGlzdHMsIGFuZCByZXNldHMgdGV4dENvbnRlbnQgaWYgc3RpbGwgZG9lc1xuICAgICAgICAgIGlmKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbXVzdCByZW1vdmUgbGlzdGVuZXIsIG9yIHdpbGwgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgcmVtb3ZlQnRuXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcik7XG4gICAgfVxuICAgIC8vSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgaWYodHlwZW9mIHByb2plY3RBcmVhICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RSZW5kZXJlcjogcHJvamVjdEFyZWEgbGVmdCB1bmRlZmluZWQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0QWRkZXIoKTtcblxuICAgIFByb2plY3RzLmxpc3QuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtZW50Jyk7XG4gICAgICBcbiAgICAgIGlmKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgXG4gICAgICAvL3JlbmRlcnMgdG9kb3Mgb24gcHJvamVjdCBjbGlja1xuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucygnZWRpdGFibGUnKSkgeyAvL3ByZXZlbnRzIHN3aXRjaGluZyBpbiBlZGl0b3IgbW9kZVxuICAgICAgICAgIF9yZW5kZXJUb2RvcyhlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hZGQnKTtcbiAgICAgICAgcHJvamVjdEFkZGVyLmFmdGVyKHByb2plY3RFbGVtZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEFyZWEucHJlcGVuZChwcm9qZWN0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhciwgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtYWRkJztcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgY29uc3QgZXhpdFRvZG9BZGRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGRGb3JtJylcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYWRkRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xuICAgICAgaWYoYWRkRm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBhZGRGb3JtLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpO1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFkZEZvcm0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkTmV3VG9kbyA9IChlLCBhZGRGb3JtKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gYWRkRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgICBjb25zdCBuZXdUb2RvID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpLnRleHRDb250ZW50XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgZHVlZGF0ZSA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tZHVlZGF0ZScpLnZhbHVlXG4gICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXByaW9yaXR5JylcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlFbGVtZW50Lm9wdGlvbnNbcHJpb3JpdHlFbGVtZW50LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuYWRkVG9kbyhuZXdUb2RvLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICBleGl0VG9kb0FkZGVyKClcblxuICAgICAgY29uc29sZS5sb2cocHJpb3JpdHkpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQWRkRm9ybSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWxlbWVudCcsICd0b2RvLWFkZEZvcm0nKTtcbiAgICAgIGFkZEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcblxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1zdWJtaXQnKTtcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgYWRkRm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcbiAgICAgICBcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCB0cnVlKVxuICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZCh0aXRsZSkgIFxuXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pOyBcblxuICAgICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGR1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcbiAgICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVkYXRlJyk7XG4gICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZHVlZGF0ZUlucHV0KTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknLCAnZWRpdGFibGUnKTtcblxuICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ2xvdyc7XG4gICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJztcbiAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnOyBcblxuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKGxvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5KVxuICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcblxuICAgICAgdG9kb0FyZWEuaW5zZXJ0QmVmb3JlKGFkZEZvcm0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWVsZW1lbnQnKSk7XG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gYWRkTmV3VG9kbyhlLCBhZGRGb3JtKVxuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0SGFuZGxlciwge29uY2U6IHRydWV9KVxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFRvZG9BZGRlciwge29uY2U6IHRydWV9KVxuICAgIH1cblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFkZEZvcm0sIHtvbmNlOiB0cnVlfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kVG9kb1JlbW92ZXIoc29ydEJhcikge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QgPSAnc29ydC1yZW1vdmUnO1xuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICctJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmVudFByb2plY3QsIHRvZG9UaXRsZSk7XG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIScpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGFydFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50Jyk7XG4gICAgICB0b2RvRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWFibGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGl0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZWxlbWVudCcpO1xuICAgICAgdG9kb0VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVhYmxlJyk7XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7b25jZTogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFNvcnRCYXIocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBzb3J0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29ydEJhci5jbGFzc0xpc3QuYWRkKCdzb3J0LWJhcicpO1xuXG4gICAgaWYocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgIF9hcHBlbmRUb2RvQWRkZXIoc29ydEJhciwgcHJvamVjdE5hbWUpO1xuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0VGl0bGUuY2xhc3NMaXN0LmFkZCgnc29ydC10aXRsZScpO1xuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0VGl0bGUpO1xuXG4gICAgY29uc3Qgc29ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJyk7XG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0RHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdzb3J0LWR1ZWRhdGUnKTtcbiAgICBzb3J0RHVlZGF0ZS50ZXh0Q29udGVudCA9ICdkdWVkYXRlJztcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKTtcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1wcmlvcml0eScpO1xuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpO1xuXG4gICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoc29ydEJhcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBib29sKSB7XG4gICAgVG9kby50aXRsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbCk7XG5cbiAgICBsZXQgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJyk7XG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFRvZG8uZHVlZGF0ZS50ZXh0KTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKTtcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93JztcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ2hpZ2gnO1xuXG4gICAgLy9zZXRzIGRlZmF1bHQgc2VsZWN0aW9uIHRvIGJlIHRoZSBzYW1lIGFzIGN1cnJlbnQgdmFsdWVcbiAgICBbbG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHldLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZihlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpO1xuXG5cbiAgICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLnRpdGxlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIFRvZG8uZWxlbWVudC5pbnNlcnRCZWZvcmUoZHVlZGF0ZUlucHV0LCBUb2RvLnByaW9yaXR5LmVsZW1lbnQpO1xuXG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUb2RvLmVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICBUb2RvLnByaW9yaXR5LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgICAgLy9tdXN0IHVwZGF0ZSBlbGVtZW50cyB0byByZW1vdmUgdGhlbT9cbiAgICAgIGR1ZWRhdGVJbnB1dCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlZGF0ZUlucHV0KTtcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQoVG9kbykge1xuICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby50aXRsZS50ZXh0O1xuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZGVzY3JpcHRpb24udGV4dDtcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0O1xuICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8ucHJpb3JpdHkudGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdWJtaXRUb2RvQ2hhbmdlcyhUb2RvKSB7XG4gICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgZHVlZGF0ZVZhbHVlID0gZHVlZGF0ZUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAvL2NvbXBhcmVzIGN1cnJlbnQgdGV4dCB0byB0ZXh0IHdoZW4gZWRpdCB3YXMgaW5pdGlhdGVkXG4gICAgaWYoIFRvZG8udGl0bGUudGV4dCA9PT0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZGVzY3JpcHRpb24udGV4dCA9PT0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICAgIFRvZG8uZHVlZGF0ZS50ZXh0ID09PSBkdWVkYXRlVmFsdWUgJiZcbiAgICAgICAgVG9kby5wcmlvcml0eS50ZXh0ID09PSBwcmlvcml0eU9wdGlvblxuICAgICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IFRvZG8uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xuICAgICAgY29uc3QgdGl0bGUgPSBUb2RvLnRpdGxlLnRleHQ7XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3RHVlZGF0ZSA9IGR1ZWRhdGVWYWx1ZTtcbiAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlPcHRpb247XG4gICAgICBsZXQgdGl0bGVDaGFuZ2VkO1xuXG4gICAgICBpZihUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgIT09IFRvZG8udGl0bGUudGV4dCkge1xuICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKS5lZGl0KCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgICAgICAgLy9jaGVja3MgaWYgb2xkIHRvZG8gdGl0bGUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgaWYodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dDtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKG5ld1RpdGxlKSA6IFxuICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKTtcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgIHRvZG9PYmouZWRpdCgnZHVlZGF0ZScsIG5ld0R1ZWRhdGUpO1xuICAgICAgdG9kb09iai5lZGl0KCdwcmlvcml0eScsIG5ld1ByaW9yaXR5KTtcbiAgICAgIFxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKTtcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKTtcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdEdWVkYXRlO1xuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvT2JqKTtcbiAgICB9XG4gIH07XG5cbiAgLy90aGlzIGZ1bmN0aW9uIHNlZW1zIGEgYml0IG1lc3N5XG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvRWRpdG9yKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0Jyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nO1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvL01ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvL3RoZSBlbnRpcmUgdG9kbyBwYXJlbnQgZWxlbWVudFxuICAgICAgICBlZGl0QnRuOiBlLnRhcmdldCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5uZXh0U2libGluZywgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIGR1ZWRhdGU6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLCBcbiAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzNdLnRleHRDb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XSwgXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCB0cnVlKTtcblxuICAgICAgVG9kby5zdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0Jyk7XG4gICAgICBUb2RvLnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgVG9kby5lbGVtZW50LnByZXBlbmQoVG9kby5zdWJtaXRCdG4pO1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pO1xuICAgICAgVG9kby5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuICAgIH0pXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3RzLmZpbmQocHJvamVjdE5hbWUpLmxpc3RUb2RvcztcblxuICAgIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKTtcbiAgXG4gICAgaWYodG9kb3MubGVuZ3RoID4gMCkge1xuICBcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWxlbWVudCcpO1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHRvZG8ucGFyZW50UHJvamVjdCk7XG4gICAgICAgIFxuICAgICAgICBpZihyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlZGF0ZTtcbiAgICAgICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTsgIFxuICAgICAgICBcbiAgICAgICAgdG9kb0FyZWEuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1lbGVtZW50JykpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgRXZlbnRzLm9mZigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpO1xuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0QXJlYSA9IHVuZGVmaW5lZDtcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZDtcbiAgICByZW5kZXJFZGl0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJzdEluaXQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuaW5pdCA9IGluaXQ7XG4gICAgZGVsZXRlIHRoaXMuc2V0UmVuZGVyQ29uZmlnO1xuICAgIGRlbGV0ZSB0aGlzLm9mZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50O1xuICAgIHRvZG9BcmVhID0gdG9kb0VsZW1lbnQ7XG4gICAgcmVuZGVyRWRpdGFibGUgPSBlZGl0YWJsZTtcbiAgICBfcmVuZGVyUHJvamVjdHMoKTtcblxuICAgIGlmKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLypQdXR0aW5nIEV2ZW50cyBjb2RlIGhlcmUgYWxsb3dzIGV2ZW50cyB0byBiZSB0cmlnZ2VyZWQgb25seSBhZnRlciBpbml0LCBcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4qL1xuICAgICAgRXZlbnRzLm9uKCdwcm9qZWN0c1VwZGF0ZScsIF9yZW5kZXJQcm9qZWN0cyk7XG5cbiAgICAgIC8vcmV1c2VzIHRoaXMgZnVuY3Rpb24gdG8gc2V0IG9wdGlvbnMgYWZ0ZXIgaW5pdCBpZiBkZXNpcmVkLlxuICAgICAgZmlyc3RJbml0ID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXQ7XG4gICAgICB0aGlzLm9mZiA9IG9mZjtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5pdDtcbiAgfVxuICBcbiAgcmV0dXJuIHtpbml0fTsgLy9hZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5leHBvcnQge1Byb2plY3RSZW5kZXJlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=