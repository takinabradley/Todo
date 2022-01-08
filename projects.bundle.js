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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFdBQVcsNkJBQTZCO0FBQ3hDLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDbEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDLDZCQUE2QixvQkFBb0I7QUFDakQseUJBQXlCLGdCQUFnQjtBQUN6QywwQkFBMEIsaUJBQWlCO0FBQzNDLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdURBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1AseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSx3REFBd0QsWUFBWTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQsWUFBWTtBQUN2RSx3REFBd0QsWUFBWTtBQUNwRTs7QUFFQSxzREFBc0QsWUFBWTtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLCtEQUErRCxZQUFZO0FBQzNFOztBQUVBLDZEQUE2RCxZQUFZO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxZQUFZO0FBQzVFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxPQUFPLGdCQUFnQjtBQUNsQyxDQUFDOztBQUVELGlFQUFlLFFBQVE7QUFDRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBldmVudHMgPSB7fVxuXG4gIGZ1bmN0aW9uIG9uIChldmVudE5hbWUsIGZuKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXVxuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0IChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGZuKGRhdGEpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG9uLCBvZmYsIGVtaXQsIGdldCBsaXN0ICgpIHsgcmV0dXJuIGV2ZW50cyB9IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG5cbi8qIFBlb3BsZS5qc1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgUGVvcGxlID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcGVvcGxlID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGVvcGxlKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwZXJzb24gPT4gcGVvcGxlLnB1c2gocGVyc29uKSk7XG4gICAgRXZlbnRzLmVtaXQoJ3Blb3BsZUNoYW5nZWQnLCBwZW9wbGUpO1xuICB9XG5cbiAgcmV0dXJuIHthZGRQZW9wbGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xuKi9cblxuLyogU3RhdHMuanNcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBTdGF0cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXRzID0ge307XG5cbiAgRXZlbnRzLm9uKCdwZW9wbGVDaGFuZ2VkJywgc2V0UGVvcGxlKTtcblxuICBmdW5jdGlvbiBzZXRQZW9wbGUocGVvcGxlKSB7XG4gICAgc3RhdHMucGVvcGxlID0gcGVvcGxlLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XG4gICAgY29uc29sZS5sb2coc3RhdHMucGVvcGxlKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4qL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJ1xuXG4vKlxuICAgIFRoaXMgbW9kdWxlIGV4cG9ydHMgYSAnUHJvamVjdHMnIG9iamVjdCB0aGF0IGtlZXBzXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG5cbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEdWVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JylcblxuICAgICAgVG8gYWRkIHRvZG9zIGFmdGVyIGNyZWF0aW9uIHJldHJpZXZlIGFuIG9iamVjdCBhbmQgdXNlIGl0J3MgYWRkVG9kbyBtZXRob2RcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5hZGRUb2RvKC4uLik7XG5cbiAgICAgIFJldHJpdmUgdG9kb3Mgd2l0aCAuZmluZFRvZG8oJ3RvZG9OYW1lJykgb3IgLmxpc3RUb2Rvc1xuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgZWRpdCBhIHRvZG8gdXNpbmcgdGhlIGVkaXQgbWV0aG9kIG9uIFRvZG8gb2JqZWN0cy4gVG9kb3MgbWF5IG5vdFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXVxuXG4gIGZ1bmN0aW9uIF9zYXZlVG9Mb2NhbFN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSlcbiAgICBpZiAoc3RvcmFnZSA9PT0gbnVsbCkgcmV0dXJuIC8vIHJldHVybnMgaWYgbG9jYWxTdG9yYWdlIGhhc24ndCBiZWVuIHVzZWRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2VbaV1cbiAgICAgIGFkZChwcm9qZWN0Lm5hbWUpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmQocHJvamVjdC5uYW1lKS5hZGRUb2RvKHByb2plY3QubGlzdFRvZG9zW2ldLnRpdGxlLFxuICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLmR1ZWRhdGUsXG4gICAgICAgICAgcHJvamVjdC5saXN0VG9kb3NbaV0ucHJpb3JpdHkpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Qcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xuICBmdW5jdGlvbiBhZGQgKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHsgLy8gcmV0dXJucyBpZiBzdHJpbmcgaXMgZW1wdHkgb3Igb25seSBjb250YWlucyB3aGl0ZXNwYWNlXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ1Byb2plY3RzIG11c3QgaGF2ZSBhIG5hbWUhJylcbiAgICB9IGVsc2UgaWYgKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW11cbiAgICAvKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5Ub2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cbiAgICBmdW5jdGlvbiBhZGRUb2RvICh0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlZGF0ZSA9ICcnLCBwcmlvcml0eSA9ICcnKSB7XG4gICAgICBpZiAodGl0bGUgPT09IHVuZGVmaW5lZCB8fCAvXlxccyokLy50ZXN0KHRpdGxlKSkge1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpXG4gICAgICB9IGVsc2UgaWYgKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnVG9kb3MgY2Fubm90IGhhdmUgaWRlbnRpY2FsIHRpdGxlcycpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSB0aGlzLm5hbWVcblxuICAgICAgZnVuY3Rpb24gZWRpdCAoZmllbGQsIGNoYW5nZSkge1xuICAgICAgICBpZiAoZmllbGQgPT09IHVuZGVmaW5lZCB8fCBjaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnTWlzc2luZyBhcmd1bWVudHMhJylcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QodGl0bGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ1RvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIScpXG4gICAgICAgICAgfSBlbHNlIGlmIChmaW5kVG9kbyhjaGFuZ2UpICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlICE9PSB0aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvcyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgdGl0bGVzJylcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgIGRlc2NyaXB0aW9uID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdkdWVkYXRlJykge1xuICAgICAgICAgIGR1ZWRhdGUgPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdGaWVsZCBkb2VzIG5vdCBleGlzdCEnKVxuICAgICAgICB9XG5cbiAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgIEV2ZW50cy5lbWl0KCdwcm9qZWN0c1VwZGF0ZScpXG4gICAgICAgIHJldHVybiBmaW5kKHBhcmVudFByb2plY3QpXG4gICAgICB9XG4gICAgICAvLyBUb2RvIG9iamVjdFxuICAgICAgY29uc3QgdG9kbyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGl0bGUgfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0aW9uIH0sXG4gICAgICAgIGdldCBkdWVkYXRlICgpIHsgcmV0dXJuIGR1ZWRhdGUgfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5ICgpIHsgcmV0dXJuIHByaW9yaXR5IH0sXG4gICAgICAgIGdldCBwYXJlbnRQcm9qZWN0ICgpIHsgcmV0dXJuIHBhcmVudFByb2plY3QgfSxcbiAgICAgICAgZWRpdFxuICAgICAgfSlcbiAgICAgIHRvZG9MaXN0LnB1c2godG9kbylcbiAgICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfTtcbiAgICAvKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+RW5kIG9mIFRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cblxuICAgIC8vIG90aGVyIHByb2plY3QgY3J1ZFxuICAgIGZ1bmN0aW9uIGZpbmRUb2RvICh0aXRsZSkge1xuICAgICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLnRpdGxlID09PSB0aXRsZSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyAodGl0bGUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpXG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCdUb2RvIG5vdCBmb3VuZCEnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9qZWN0IG9iamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgIGdldCBuYW1lICgpIHsgcmV0dXJuIG5hbWUgfSxcbiAgICAgIHNldCBuYW1lIChuZXdOYW1lKSB7XG4gICAgICAgIGlmIChuZXdOYW1lID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdChuZXdOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBhbGVydCgnUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSEnKVxuICAgICAgICB9IGVsc2UgaWYgKGZpbmQobmV3TmFtZSkgIT09IHVuZGVmaW5lZCAmJiBuZXdOYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0cyBjYW5ub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBuZXdOYW1lXG4gICAgICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3Byb2plY3RzVXBkYXRlJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldCBsaXN0VG9kb3MgKCkgeyByZXR1cm4gWy4uLnRvZG9MaXN0XSB9LFxuICAgICAgYWRkVG9kbyxcbiAgICAgIGZpbmRUb2RvLFxuICAgICAgcmVtb3ZlVG9kb1xuICAgIH0pXG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdClcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKVxuICAgIHJldHVybiB0aGlzXG4gIH07XG4gIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG5cbiAgLy8gb3RoZXIgbW9kdWxlIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKSAvLyByZXR1cm5zIGlmIGZpbmRJbmRleCBkb2Vzbid0IGZpbmQgYSBtYXRjaFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICBFdmVudHMuZW1pdCgncHJvamVjdHNVcGRhdGUnKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kIChuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdQcm9qZWN0IG5vdCBmb3VuZCEnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpXG4gICAgfVxuICB9O1xuXG4gIC8vIE1vZHVsZSBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBnZXQgbGlzdCAoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF1cbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlXG4gIH1cbn0pKClcblxuLyogUmVuZGVycyBQcm9qZWN0cyBvbiB0aGUgd2VicGFnZS5cblVzZSBQcm9qZWN0UmVuZGVyZXIuaW5pdChwcm9qZWN0RWxlbWVudCwgdG9kb0VsZW1lbnQsIGVkaXRhYmxlKSB0byBzZXQgdGhlIGFyZWFzXG50byByZW5kZXIgdG8sIGFuZCB3aGV0aGVyIHRoZXkgbWF5IGJlIGVkaXRlZC4gVG9kb3Mgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZWlyXG5yZXNwZWN0aXZlIHByb2plY3RzIGFyZSBjbGlja2VkLlxuSWYgeW91J2QgbGlrZSB0byBvbmx5IHJlbmRlciBwcm9qZWN0IG5hbWVzLCB5b3UgbWF5IHBhc3MgYSBkdW1teSBub24tb2JqZWN0XG52YWx1ZSBhcyB0aGUgdG9kb0VsZW1lbnQuIEl0IHdpbGwgZmFpbCBxdWlldGx5IHdpdGggYSBjb25zb2xlIG1lc3NhZ2UgYnlcbmRlZmF1bHQuXG5cbkFmdGVyIGluaXQsIFByb2plY3RSZW5kZXJlciB3aWxsIGhhdmUgdHdvIG1ldGhvZHMgYXZhaWxhYmxlIHRvIGl0OlxuUHJvamVjdFJlbmRlcmVyLnNldENvbmZpZzogVXNlZCBleGFjdGx5IHRoZSBzYW1lIGFzIFByb2plY3RSZW5kZXJlci5pbml0XG5Qcm9qZWN0UmVuZGVyZXIub2ZmOiByZXNldHMgUHJvamVjdFJlbmRlcmVyIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUgYW5kIGNsZWFyc1xuZWxlbWVudHMgaW1tZWRpYXRlbHkuICovXG5cbmNvbnN0IFByb2plY3RSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0QXJlYVxuICBsZXQgdG9kb0FyZWFcbiAgbGV0IHJlbmRlckVkaXRhYmxlXG4gIGxldCBmaXJzdEluaXQgPSB0cnVlXG5cbiAgZnVuY3Rpb24gX2FwcGVuZFByb2plY3RBZGRlciAoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJylcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgYWRkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtbGFiZWwnKVxuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKVxuICAgIGFkZExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbClcblxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWlucHV0JylcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpXG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKVxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZElucHV0KVxuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtYnV0dG9uJylcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kUHJvamVjdEVkaXRvciAocHJvamVjdEVsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdCcpXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICfinI4nXG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudFxuXG4gICAgICAvLyBjaGFuZ2UgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuXG4gICAgICAvLyBhZGQgcmVtb3ZlIGVsZW1lbnRcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUnKVxuICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJy0nXG4gICAgICBwcm9qZWN0RWxlbWVudC5pbnNlcnRCZWZvcmUocmVtb3ZlQnRuLCBwcm9qZWN0TmFtZUVsZW1lbnQpXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBQcm9qZWN0cy5yZW1vdmUocHJvamVjdE5hbWUpKVxuXG4gICAgICAvLyBleGl0IGVkaXRvciBhbmQgYXBwbHkgYW55IG5hbWUgY2hhbmdlc1xuICAgICAgY29uc3QgZXhpdEVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpXG4gICAgICAgIGVkaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmVDaGlsZChyZW1vdmVCdG4pXG4gICAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpXG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgICAgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubmFtZSA9IG5ld05hbWVcblxuICAgICAgICAgIC8vIGNoZWNrcyBpZiBvbGQgcHJvamVjdCBuYW1lIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgICAgaWYgKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXVzdCByZW1vdmUgbGlzdGVuZXIsIG9yIHdpbGwgY29udGludWUgYXR0ZW1wdGluZyB0byByZW1vdmUgcmVtb3ZlQnRuXG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBleGl0RWRpdG9yKVxuICAgICAgfVxuXG4gICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXhpdEVkaXRvcilcbiAgICB9XG4gICAgLy8gSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdHMgKCkge1xuICAgIGlmICh0eXBlb2YgcHJvamVjdEFyZWEgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvamVjdFJlbmRlcmVyOiBwcm9qZWN0QXJlYSBsZWZ0IHVuZGVmaW5lZCEnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJydcblxuICAgIGlmIChyZW5kZXJFZGl0YWJsZSA9PT0gdHJ1ZSkgX2FwcGVuZFByb2plY3RBZGRlcigpXG5cbiAgICBQcm9qZWN0cy5saXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKVxuXG4gICAgICBpZiAocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KVxuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG4gICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgICAvLyByZW5kZXJzIHRvZG9zIG9uIHByb2plY3QgY2xpY2tcbiAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIW5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YWJsZScpKSB7IC8vIHByZXZlbnRzIHN3aXRjaGluZyBpbiBlZGl0b3IgbW9kZVxuICAgICAgICAgIF9yZW5kZXJUb2RvcyhlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZCcpXG4gICAgICAgIHByb2plY3RBZGRlci5hZnRlcihwcm9qZWN0RWxlbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RBcmVhLnByZXBlbmQocHJvamVjdEVsZW1lbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvQWRkZXIgKHNvcnRCYXIsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRCdG4uY2xhc3NMaXN0ID0gJ3NvcnQtYWRkJ1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICcrJ1xuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuXG4gICAgY29uc3QgZXhpdFRvZG9BZGRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1hZGRGb3JtJylcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYWRkRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgICBpZiAoYWRkRm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBhZGRGb3JtLnJlbW92ZSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJylcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFkZEZvcm0sIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoZSwgYWRkRm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWR1ZWRhdGUnKS52YWx1ZVxuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby1wcmlvcml0eScpXG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC5vcHRpb25zW3ByaW9yaXR5RWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0XG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuYWRkVG9kbyhuZXdUb2RvLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpXG5cbiAgICAgIGV4aXRUb2RvQWRkZXIoKVxuXG4gICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRGb3JtID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQnLCAndG9kby1hZGRGb3JtJylcbiAgICAgIGFkZEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcblxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLXN1Ym1pdCcsICdlZGl0YWJsZScpXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAn4pyTJ1xuICAgICAgYWRkRm9ybS5hcHBlbmQoc3VibWl0QnRuKVxuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nXG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJywgJ2VkaXRhYmxlJylcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJywgJ2VkaXRhYmxlJylcbiAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGR1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnLCAnZWRpdGFibGUnKVxuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKVxuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZHVlZGF0ZUlucHV0KVxuXG4gICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JywgJ2VkaXRhYmxlJylcblxuICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbG93J1xuICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnbWVkaXVtJ1xuICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJ1xuXG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpXG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KVxuXG4gICAgICB0b2RvQXJlYS5pbnNlcnRCZWZvcmUoYWRkRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZWxlbWVudCcpKVxuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4gYWRkTmV3VG9kbyhlLCBhZGRGb3JtKVxuICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0SGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleGl0VG9kb0FkZGVyLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBZGRGb3JtLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRUb2RvUmVtb3ZlciAoc29ydEJhcikge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdCA9ICdzb3J0LXJlbW92ZSdcbiAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSAnLSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bilcblxuICAgIGNvbnN0IHJlbW92ZUVsZW1lbnQgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdCwgdG9kb1RpdGxlKVxuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLnJlbW92ZVRvZG8odG9kb1RpdGxlKVxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQhJylcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50JylcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVhYmxlJylcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdFJlbW92ZUVkaXRvciwgeyBvbmNlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZXhpdFJlbW92ZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1lbGVtZW50JylcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVhYmxlJylcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRSZW1vdmVFZGl0b3IsIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRTb3J0QmFyIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNvcnRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvcnRCYXIuY2xhc3NMaXN0LmFkZCgnc29ydC1iYXInKVxuXG4gICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKVxuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc29ydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtdGl0bGUnKVxuICAgIHNvcnRUaXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRUaXRsZSlcblxuICAgIGNvbnN0IHNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNvcnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWRlc2NyaXB0aW9uJylcbiAgICBzb3J0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24nXG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNvcnREdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZHVlZGF0ZScpXG4gICAgc29ydER1ZWRhdGUudGV4dENvbnRlbnQgPSAnZHVlZGF0ZSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKVxuXG4gICAgY29uc3Qgc29ydFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc29ydFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NvcnQtcHJpb3JpdHknKVxuICAgIHNvcnRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSdcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eSlcblxuICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHNvcnRCYXIpXG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZSAoVG9kbywgYm9vbCkge1xuICAgIFRvZG8udGl0bGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsIGJvb2wpXG4gICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgYm9vbClcblxuICAgIGxldCBkdWVkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScsICdlZGl0YWJsZScpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZWRhdGUnKVxuICAgIGR1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBUb2RvLmR1ZWRhdGUudGV4dClcblxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJywgJ2VkaXRhYmxlJylcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdsb3cnXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ21lZGl1bSdcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdoaWdoJztcblxuICAgIC8vIHNldHMgZGVmYXVsdCBzZWxlY3Rpb24gdG8gYmUgdGhlIHNhbWUgYXMgY3VycmVudCB2YWx1ZVxuICAgIFtsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eV0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChsb3dQcmlvcml0eSwgbWVkaXVtUHJpb3JpdHksIGhpZ2hQcmlvcml0eSlcblxuICAgIGlmIChib29sID09PSB0cnVlKSB7XG4gICAgICBUb2RvLmVkaXRCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJylcbiAgICAgIFRvZG8udGl0bGUuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG4gICAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKVxuICAgICAgVG9kby5lbGVtZW50Lmluc2VydEJlZm9yZShkdWVkYXRlSW5wdXQsIFRvZG8ucHJpb3JpdHkuZWxlbWVudClcblxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpXG4gICAgICBUb2RvLmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIFRvZG8uZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG4gICAgICBUb2RvLnRpdGxlLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGFibGUnKVxuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJylcblxuICAgICAgVG9kby5kdWVkYXRlLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgLy8gbXVzdCB1cGRhdGUgZWxlbWVudHMgdG8gcmVtb3ZlIHRoZW0/XG4gICAgICBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChkdWVkYXRlSW5wdXQpXG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQocHJpb3JpdHlTZWxlY3QpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2Fib3J0VG9kb0VkaXQgKFRvZG8pIHtcbiAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBmYWxzZSlcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pXG5cbiAgICBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLnRpdGxlLnRleHRcbiAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLmRlc2NyaXB0aW9uLnRleHRcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0XG4gICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5wcmlvcml0eS50ZXh0XG4gIH1cblxuICBmdW5jdGlvbiBfc3VibWl0VG9kb0NoYW5nZXMgKFRvZG8pIHtcbiAgICBjb25zdCBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IGR1ZWRhdGVWYWx1ZSA9IGR1ZWRhdGVJbnB1dC52YWx1ZVxuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbcHJpb3JpdHlTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuXG4gICAgLy8gY29tcGFyZXMgY3VycmVudCB0ZXh0IHRvIHRleHQgd2hlbiBlZGl0IHdhcyBpbml0aWF0ZWRcbiAgICBpZiAoVG9kby50aXRsZS50ZXh0ID09PSBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kZXNjcmlwdGlvbi50ZXh0ID09PSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgICAgVG9kby5kdWVkYXRlLnRleHQgPT09IGR1ZWRhdGVWYWx1ZSAmJlxuICAgICAgICBUb2RvLnByaW9yaXR5LnRleHQgPT09IHByaW9yaXR5T3B0aW9uXG4gICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gVG9kby5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICAgIGNvbnN0IHRpdGxlID0gVG9kby50aXRsZS50ZXh0XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IG5ld0R1ZWRhdGUgPSBkdWVkYXRlVmFsdWVcbiAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlPcHRpb25cbiAgICAgIGxldCB0aXRsZUNoYW5nZWRcblxuICAgICAgaWYgKFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCAhPT0gVG9kby50aXRsZS50ZXh0KSB7XG4gICAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpLmVkaXQoJ3RpdGxlJywgbmV3VGl0bGUpXG4gICAgICAgIC8vIGNoZWNrcyBpZiBvbGQgdG9kbyB0aXRsZSBleGlzdHMsIGFuZCByZXNldHMgdGV4dENvbnRlbnQgaWYgc3RpbGwgZG9lc1xuICAgICAgICBpZiAodHlwZW9mIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dFxuICAgICAgICAgIHRpdGxlQ2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGVDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSAodGl0bGVDaGFuZ2VkKVxuICAgICAgICA/IFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8obmV3VGl0bGUpXG4gICAgICAgIDogUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyh0aXRsZSlcblxuICAgICAgdG9kb09iai5lZGl0KCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKVxuICAgICAgdG9kb09iai5lZGl0KCdkdWVkYXRlJywgbmV3RHVlZGF0ZSlcbiAgICAgIHRvZG9PYmouZWRpdCgncHJpb3JpdHknLCBuZXdQcmlvcml0eSlcblxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKFRvZG8uc3VibWl0QnRuKVxuICAgICAgX21ha2VUb2RvRWRpdGFibGUoVG9kbywgZmFsc2UpXG5cbiAgICAgIFRvZG8uZHVlZGF0ZS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3RHVlZGF0ZVxuICAgICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gbmV3UHJpb3JpdHlcbiAgICAgIGNvbnNvbGUubG9nKHRvZG9PYmopXG4gICAgfVxuICB9O1xuXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2VlbXMgYSBiaXQgbWVzc3lcbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9FZGl0b3IgKHRvZG9FbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQnKVxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAn4pyOJ1xuICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vIE1ha2VzIHRoZSBlbnRpcmUgbGlzdCBvZiBlbGVtZW50cyBlYXNpZXIgdG8gcGFzcyBhcm91bmQgdG8gb3RoZXIgZnVuY3Rpb25zXG4gICAgICBjb25zdCBUb2RvID0ge1xuICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LCAvLyB0aGUgZW50aXJlIHRvZG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgZWRpdEJ0bjogZS50YXJnZXQsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZWxlbWVudDogZS50YXJnZXQubmV4dFNpYmxpbmcsXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdLFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bM10sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblszXS50ZXh0Q29udGVudFxuICAgICAgICB9LFxuICAgICAgICBwcmlvcml0eToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bNF0sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIHRydWUpXG5cbiAgICAgIFRvZG8uc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIFRvZG8uc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3VibWl0JylcbiAgICAgIFRvZG8uc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ+KckydcbiAgICAgIFRvZG8uZWxlbWVudC5wcmVwZW5kKFRvZG8uc3VibWl0QnRuKVxuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pXG4gICAgICBUb2RvLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfcmVuZGVyVG9kb3MgKHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0b2RvQXJlYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0UmVuZGVyZXI6IHRvZG9BcmVhIGxlZnQgdW5kZWZpbmVkIScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKS5saXN0VG9kb3NcblxuICAgIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKVxuXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1lbGVtZW50JylcbiAgICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCB0b2RvLnBhcmVudFByb2plY3QpXG5cbiAgICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kVG9kb0VkaXRvcih0b2RvRWxlbWVudClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJylcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICAgICAgY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVkYXRlXG4gICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWVkYXRlJylcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSlcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXG4gICAgICAgIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuXG4gICAgICAgIHRvZG9BcmVhLmluc2VydEJlZm9yZSh0b2RvRWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZWxlbWVudCcpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYgKCkge1xuICAgIEV2ZW50cy5vZmYoJ3Byb2plY3RzVXBkYXRlJywgX3JlbmRlclByb2plY3RzKVxuXG4gICAgcHJvamVjdEFyZWEuaW5uZXJIVE1MID0gJydcbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgcHJvamVjdEFyZWEgPSB1bmRlZmluZWRcbiAgICB0b2RvQXJlYSA9IHVuZGVmaW5lZFxuICAgIHJlbmRlckVkaXRhYmxlID0gdW5kZWZpbmVkXG4gICAgZmlyc3RJbml0ID0gdHJ1ZVxuXG4gICAgdGhpcy5pbml0ID0gaW5pdFxuICAgIGRlbGV0ZSB0aGlzLnNldFJlbmRlckNvbmZpZ1xuICAgIGRlbGV0ZSB0aGlzLm9mZlxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCAocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSA9IHRydWUpIHtcbiAgICBwcm9qZWN0QXJlYSA9IHByb2plY3RFbGVtZW50XG4gICAgdG9kb0FyZWEgPSB0b2RvRWxlbWVudFxuICAgIHJlbmRlckVkaXRhYmxlID0gZWRpdGFibGVcbiAgICBfcmVuZGVyUHJvamVjdHMoKVxuXG4gICAgaWYgKGZpcnN0SW5pdCA9PT0gdHJ1ZSkge1xuICAgICAgLyogUHV0dGluZyBFdmVudHMgY29kZSBoZXJlIGFsbG93cyBldmVudHMgdG8gYmUgdHJpZ2dlcmVkIG9ubHkgYWZ0ZXIgaW5pdCxcbiAgICAgIGF0IHRoZSBjb3N0IG9mIGNyZWF0aW5nIGEgY2xvc3VyZS4gKi9cbiAgICAgIEV2ZW50cy5vbigncHJvamVjdHNVcGRhdGUnLCBfcmVuZGVyUHJvamVjdHMpXG5cbiAgICAgIC8vIHJldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlXG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXRcbiAgICAgIHRoaXMub2ZmID0gb2ZmXG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXRcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfSAvLyBhZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuZXhwb3J0IHsgUHJvamVjdFJlbmRlcmVyIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==