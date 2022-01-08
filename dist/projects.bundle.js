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

  function on(eventName, fn) {
    events[eventName] = events[eventName] || []
    events[eventName].push(fn)
  }

  function off(eventName, fn) {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  function emit(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }

  return {
    on,
    off,
    emit,
    get list() {
      return events
    },
  }
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

  function _saveToLocalStorage() {
    localStorage.setItem("projectsList", JSON.stringify(projectsList))
  }

  function getFromLocalStorage() {
    const storage = JSON.parse(localStorage.getItem("projectsList"))
    if (storage === null) return // returns if localStorage hasn't been used

    for (let i = 0; i < storage.length; i++) {
      const project = storage[i]
      add(project.name)
      for (let i = 0; i < project.listTodos.length; i++) {
        find(project.name).addTodo(
          project.listTodos[i].title,
          project.listTodos[i].description,
          project.listTodos[i].duedate,
          project.listTodos[i].priority
        )
      }
    }
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  function add(name) {
    if (name === undefined || /^\s*$/.test(name)) {
      // returns if string is empty or only contains whitespace
      return console.log("Projects must have a name!")
    } else if (find(name) !== undefined) {
      return alert("Projects cannot have identical names")
    }

    const todoList = []
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    function addTodo(title, description = "", duedate = "", priority = "") {
      if (title === undefined || /^\s*$/.test(title)) {
        return alert("Todos must have a title!")
      } else if (findTodo(title) !== undefined) {
        return alert("Todos cannot have identical titles")
      }

      const parentProject = this.name

      function edit(field, change) {
        if (field === undefined || change === undefined) {
          return alert("Missing arguments!")
        } else if (field === "title") {
          if (title === undefined || /^\s*$/.test(title)) {
            return alert("Todos must have a title!")
          } else if (findTodo(change) !== undefined && change !== title) {
            return alert("Todos cannot have identical titles")
          }
          title = change
        } else if (field === "description") {
          description = change
        } else if (field === "duedate") {
          duedate = change
        } else if (field === "priority") {
          priority = change
        } else {
          return alert("Field does not exist!")
        }

        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
        return find(parentProject)
      }
      // Todo object
      const todo = Object.freeze({
        get title() {
          return title
        },
        get description() {
          return description
        },
        get duedate() {
          return duedate
        },
        get priority() {
          return priority
        },
        get parentProject() {
          return parentProject
        },
        edit,
      })
      todoList.push(todo)
      _saveToLocalStorage()
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
      return this
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // other project crud
    function findTodo(title) {
      if (title === undefined) {
        return alert("Todo not found!")
      } else {
        return todoList.find((todo) => todo.title === title)
      }
    }

    function removeTodo(title) {
      const index = todoList.findIndex((todo) => todo.title === title)

      if (index === -1) {
        return alert("Todo not found!")
      } else {
        todoList.splice(index, 1)
        _saveToLocalStorage()
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
        return this
      }
    }

    // Project object
    const project = Object.freeze({
      get name() {
        return name
      },
      set name(newName) {
        if (newName === undefined || /^\s*$/.test(newName)) {
          return alert("Projects must have a name!")
        } else if (find(newName) !== undefined && newName !== name) {
          return alert("Projects cannot have identical names")
        } else {
          name = newName
          _saveToLocalStorage()
          _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
        }
      },
      get listTodos() {
        return [...todoList]
      },
      addTodo,
      findTodo,
      removeTodo,
    })
    projectsList.push(project)
    _saveToLocalStorage()
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
    return this
  }
  /* ~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  // other module crud
  function remove(name) {
    const index = projectsList.findIndex((project) => project.name === name)

    if (index === -1) {
      return alert("Project not found!") // returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index, 1)
      _saveToLocalStorage()
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit("projectsUpdate")
      return this
    }
  }

  function find(name) {
    if (name === undefined) {
      return alert("Project not found!")
    } else {
      return projectsList.find((project) => project.name === name)
    }
  }

  // Module object
  return {
    get list() {
      return [...projectsList]
    },
    add,
    remove,
    find,
    getFromLocalStorage,
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

  function _appendProjectAdder() {
    const form = document.createElement("form")
    form.classList.add("project-add")
    form.setAttribute("autocomplete", "off")
    projectArea.appendChild(form)

    const addLabel = document.createElement("label")
    addLabel.classList.add("project-add-label")
    addLabel.setAttribute("for", "name")
    addLabel.textContent = "Project Name:"
    form.appendChild(addLabel)

    const addInput = document.createElement("input")
    addInput.classList.add("project-add-input")
    addInput.setAttribute("name", "name")
    addInput.setAttribute("type", "text")
    addInput.setAttribute("placeholder", "New Project")
    addInput.setAttribute("required", "")
    form.appendChild(addInput)

    const addBtn = document.createElement("button")
    addBtn.classList.add("project-add-button")
    addBtn.setAttribute("type", "submit")
    addBtn.textContent = "Add"
    form.appendChild(addBtn)

    const addProject = (e) => Projects.add(addInput.value)
    addBtn.addEventListener("click", addProject)
  }

  function _appendProjectEditor(projectElement) {
    const editBtn = document.createElement("button")
    editBtn.classList.add("project-edit")
    editBtn.textContent = "✎"
    projectElement.appendChild(editBtn)

    const editProject = (e) => {
      const projectNameElement = e.target.nextSibling
      const projectName = projectNameElement.textContent

      // change element properties
      projectNameElement.setAttribute("contenteditable", "true")
      projectNameElement.classList.add("editable")
      editBtn.setAttribute("hidden", "")

      // add remove element
      const removeBtn = document.createElement("button")
      removeBtn.classList.add("project-remove")
      removeBtn.textContent = "-"
      projectElement.insertBefore(removeBtn, projectNameElement)
      removeBtn.addEventListener("click", () => Projects.remove(projectName))

      // exit editor and apply any name changes
      const exitEditor = (e) => {
        projectNameElement.setAttribute("contenteditable", "false")
        editBtn.removeAttribute("hidden")
        projectElement.removeChild(removeBtn)
        projectNameElement.classList.remove("editable")

        if (projectNameElement.textContent !== projectName) {
          const newName = projectNameElement.textContent
          Projects.find(projectName).name = newName

          // checks if old project name exists, and resets textContent if still does
          if (typeof Projects.find(projectName) === "object") {
            projectNameElement.textContent = projectName
          }
        }

        // must remove listener, or will continue attempting to remove removeBtn
        projectElement.removeEventListener("mouseleave", exitEditor)
      }

      projectElement.addEventListener("mouseleave", exitEditor)
    }
    // Hides edit button and provides additional options until user moves away
    editBtn.addEventListener("click", editProject)
  }

  function _renderProjects() {
    if (typeof projectArea !== "object") {
      console.log("ProjectRenderer: projectArea left undefined!")
      return
    }

    projectArea.innerHTML = ""

    if (renderEditable === true) _appendProjectAdder()

    Projects.list.forEach((project) => {
      const projectElement = document.createElement("div")
      projectElement.classList.add("project-element")

      if (renderEditable === true) _appendProjectEditor(projectElement)

      const name = document.createElement("span")
      name.classList.add("project-name")
      name.textContent = project.name
      projectElement.appendChild(name)

      // renders todos on project click
      name.addEventListener("click", (e) => {
        if (!name.classList.contains("editable")) {
          // prevents switching in editor mode
          _renderTodos(e.target.textContent)
        }
      })

      if (renderEditable === true) {
        const projectAdder = document.querySelector(".project-add")
        projectAdder.after(projectElement)
      } else {
        projectArea.prepend(projectElement)
      }
    })
  }

  function _appendTodoAdder(sortBar, projectName) {
    const addBtn = document.createElement("button")
    addBtn.classList = "sort-add"
    addBtn.textContent = "+"
    sortBar.appendChild(addBtn)

    const exitTodoAdder = () => {
      const addForm = document.querySelector(".todo-addForm")
      const projectName = addForm.getAttribute("data-project")
      if (addForm !== null) {
        addForm.remove()
      }

      const projectNameElements = document.querySelectorAll(".project-name")
      projectNameElements.forEach((element) => {
        if (element.textContent === projectName) {
          element.dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
            })
          )
        }
      })

      addBtn.classList.remove("active")
      addBtn.addEventListener("click", createAddForm, { once: true })
    }

    const addNewTodo = (e, addForm) => {
      const parentProject = addForm.getAttribute("data-project")
      const newTodo = addForm.querySelector(".todo-title").textContent
      const description = addForm.querySelector(".todo-description").textContent
      const duedate = addForm.querySelector(".todo-duedate").value
      const priorityElement = addForm.querySelector(".todo-priority")
      const priority =
        priorityElement.options[priorityElement.selectedIndex].text

      Projects.find(parentProject).addTodo(
        newTodo,
        description,
        duedate,
        priority
      )

      exitTodoAdder()

      console.log(priority)
    }

    const createAddForm = (e) => {
      const addForm = document.createElement("div")
      addForm.classList.add("todo-element", "todo-addForm")
      addForm.setAttribute("data-project", projectName)

      const submitBtn = document.createElement("button")
      submitBtn.classList.add("todo-submit", "editable")
      submitBtn.textContent = "✓"
      addForm.append(submitBtn)

      const title = document.createElement("span")
      title.textContent = "New Todo"
      title.classList.add("todo-title", "editable")
      title.setAttribute("contentEditable", true)
      addForm.appendChild(title)

      const description = document.createElement("span")
      description.classList.add("todo-description", "editable")
      description.setAttribute("contentEditable", true)
      addForm.appendChild(description)

      const duedateInput = document.createElement("input")
      duedateInput.classList.add("todo-duedate", "editable")
      duedateInput.setAttribute("for", "duedate")
      duedateInput.setAttribute("type", "date")
      addForm.appendChild(duedateInput)

      const prioritySelect = document.createElement("select")
      prioritySelect.classList.add("todo-priority", "editable")

      const lowPriority = document.createElement("option")
      lowPriority.textContent = "low"
      const mediumPriority = document.createElement("option")
      mediumPriority.textContent = "medium"
      const highPriority = document.createElement("option")
      highPriority.textContent = "high"

      prioritySelect.append(lowPriority, mediumPriority, highPriority)
      addForm.appendChild(prioritySelect)

      todoArea.insertBefore(addForm, document.querySelector(".todo-element"))
      addBtn.classList.add("active")

      const submitHandler = (e) => addNewTodo(e, addForm)
      submitBtn.addEventListener("click", submitHandler, { once: true })
      addBtn.addEventListener("click", exitTodoAdder, { once: true })
    }

    addBtn.addEventListener("click", createAddForm, { once: true })
  }

  function _appendTodoRemover(sortBar) {
    const removeBtn = document.createElement("button")
    removeBtn.classList = "sort-remove"
    removeBtn.textContent = "-"
    sortBar.appendChild(removeBtn)

    const removeElement = (e) => {
      const parentElement = e.target.parentElement
      const parentProject = parentElement.getAttribute("data-project")
      const todoTitle = parentElement.querySelector(".todo-title").textContent
      console.log(parentProject, todoTitle)

      Projects.find(parentProject).removeTodo(todoTitle)
      parentElement.remove()
      console.log("removed!")
    }

    const startRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll(".todo-element")
      todoElements.forEach((element) => {
        element.addEventListener("click", removeElement)
        element.classList.add("removeable")
      })

      removeBtn.classList.add("active")
      removeBtn.addEventListener("click", exitRemoveEditor, { once: true })
    }

    const exitRemoveEditor = (e) => {
      const todoElements = document.querySelectorAll(".todo-element")
      todoElements.forEach((element) => {
        element.removeEventListener("click", removeElement)
        element.classList.remove("removeable")
      })

      removeBtn.classList.remove("active")
      removeBtn.addEventListener("click", startRemoveEditor, { once: true })
    }

    removeBtn.addEventListener("click", startRemoveEditor, { once: true })
  }

  function _appendSortBar(projectName) {
    const sortBar = document.createElement("div")
    sortBar.classList.add("sort-bar")

    if (renderEditable === true) {
      _appendTodoAdder(sortBar, projectName)
      _appendTodoRemover(sortBar)
    }

    const sortTitle = document.createElement("span")
    sortTitle.classList.add("sort-title")
    sortTitle.textContent = "title"
    sortBar.appendChild(sortTitle)

    const sortDescription = document.createElement("span")
    sortDescription.classList.add("sort-description")
    sortDescription.textContent = "description"
    sortBar.appendChild(sortDescription)

    const sortDuedate = document.createElement("span")
    sortDuedate.classList.add("sort-duedate")
    sortDuedate.textContent = "duedate"
    sortBar.appendChild(sortDuedate)

    const sortPriority = document.createElement("span")
    sortPriority.classList.add("sort-priority")
    sortPriority.textContent = "priority"
    sortBar.appendChild(sortPriority)

    todoArea.appendChild(sortBar)
  }

  function _makeTodoEditable(Todo, bool) {
    Todo.title.element.setAttribute("contentEditable", bool)
    Todo.description.element.setAttribute("contentEditable", bool)

    let duedateInput = document.createElement("input")
    duedateInput.classList.add("todo-duedate", "editable")
    duedateInput.setAttribute("for", "duedate")
    duedateInput.setAttribute("type", "date")
    duedateInput.setAttribute("value", Todo.duedate.text)

    let prioritySelect = document.createElement("select")
    prioritySelect.classList.add("todo-duedate", "editable")

    const lowPriority = document.createElement("option")
    lowPriority.textContent = "low"
    const mediumPriority = document.createElement("option")
    mediumPriority.textContent = "medium"
    const highPriority = document.createElement("option")
    highPriority.textContent = "high"

    // sets default selection to be the same as current value
    ;[lowPriority, mediumPriority, highPriority].forEach((element) => {
      if (element.textContent === Todo.priority.text) {
        element.setAttribute("selected", "")
      }
    })

    prioritySelect.append(lowPriority, mediumPriority, highPriority)

    if (bool === true) {
      Todo.editBtn.setAttribute("hidden", "")
      Todo.title.element.classList.add("editable")
      Todo.description.element.classList.add("editable")

      Todo.duedate.element.setAttribute("hidden", "")
      Todo.element.insertBefore(duedateInput, Todo.priority.element)

      Todo.priority.element.setAttribute("hidden", "")
      Todo.element.appendChild(prioritySelect)
    } else {
      Todo.editBtn.removeAttribute("hidden")
      Todo.title.element.classList.remove("editable")
      Todo.description.element.classList.remove("editable")

      Todo.duedate.element.removeAttribute("hidden")
      Todo.priority.element.removeAttribute("hidden")

      // must update elements to remove them?
      duedateInput = Todo.element.querySelector("input")
      prioritySelect = Todo.element.querySelector("select")
      Todo.element.removeChild(duedateInput)
      Todo.element.removeChild(prioritySelect)
    }
  }

  function _abortTodoEdit(Todo) {
    _makeTodoEditable(Todo, false)
    Todo.element.removeChild(Todo.submitBtn)

    Todo.title.element.textContent = Todo.title.text
    Todo.description.element.textContent = Todo.description.text
    Todo.duedate.element.textContent = Todo.duedate.text
    Todo.priority.element.textContent = Todo.priority.text
  }

  function _submitTodoChanges(Todo) {
    const duedateInput = Todo.element.querySelector("input")
    const duedateValue = duedateInput.value

    const prioritySelect = Todo.element.querySelector("select")
    const priorityOption =
      prioritySelect.options[prioritySelect.selectedIndex].text

    // compares current text to text when edit was initiated
    if (
      Todo.title.text === Todo.title.element.textContent &&
      Todo.description.text === Todo.description.element.textContent &&
      Todo.duedate.text === duedateValue &&
      Todo.priority.text === priorityOption
    ) {
      _abortTodoEdit(Todo)
    } else {
      const parentProject = Todo.element.getAttribute("data-project")
      const title = Todo.title.text
      const newTitle = Todo.title.element.textContent
      const newDescription = Todo.description.element.textContent
      const newDuedate = duedateValue
      const newPriority = priorityOption
      let titleChanged

      if (Todo.title.element.textContent !== Todo.title.text) {
        Projects.find(parentProject).findTodo(title).edit("title", newTitle)
        // checks if old todo title exists, and resets textContent if still does
        if (typeof Projects.find(parentProject).findTodo(title) === "object") {
          Todo.title.element.textContent = Todo.title.text
          titleChanged = false
        } else {
          titleChanged = true
        }
      }

      const todoObj = titleChanged
        ? Projects.find(parentProject).findTodo(newTitle)
        : Projects.find(parentProject).findTodo(title)

      todoObj.edit("description", newDescription)
      todoObj.edit("duedate", newDuedate)
      todoObj.edit("priority", newPriority)

      Todo.element.removeChild(Todo.submitBtn)
      _makeTodoEditable(Todo, false)

      Todo.duedate.element.textContent = newDuedate
      Todo.priority.element.textContent = newPriority
      console.log(todoObj)
    }
  }

  // this function seems a bit messy
  function _appendTodoEditor(todoElement) {
    const editBtn = document.createElement("button")
    editBtn.classList.add("todo-edit")
    editBtn.textContent = "✎"
    todoElement.appendChild(editBtn)

    editBtn.addEventListener("click", (e) => {
      // Makes the entire list of elements easier to pass around to other functions
      const Todo = {
        element: e.target.parentElement, // the entire todo parent element
        editBtn: e.target,
        title: {
          element: e.target.nextSibling,
          text: e.target.nextSibling.textContent,
        },
        description: {
          element: e.target.parentElement.children[2],
          text: e.target.parentElement.children[2].textContent,
        },
        duedate: {
          element: e.target.parentElement.children[3],
          text: e.target.parentElement.children[3].textContent,
        },
        priority: {
          element: e.target.parentElement.children[4],
          text: e.target.parentElement.children[4].textContent,
        },
      }

      _makeTodoEditable(Todo, true)

      Todo.submitBtn = document.createElement("button")
      Todo.submitBtn.classList.add("todo-submit")
      Todo.submitBtn.textContent = "✓"
      Todo.element.prepend(Todo.submitBtn)

      const submitHandler = () => _submitTodoChanges(Todo)
      Todo.submitBtn.addEventListener("click", submitHandler, { once: true })
    })
  }

  function _renderTodos(projectName) {
    if (typeof todoArea !== "object") {
      console.log("ProjectRenderer: todoArea left undefined!")
      return
    }

    todoArea.innerHTML = ""

    const todos = Projects.find(projectName).listTodos

    _appendSortBar(projectName)

    if (todos.length > 0) {
      todos.forEach((todo) => {
        const todoElement = document.createElement("div")
        todoElement.classList.add("todo-element")
        todoElement.setAttribute("data-project", todo.parentProject)

        if (renderEditable === true) _appendTodoEditor(todoElement)

        const title = document.createElement("span")
        title.textContent = todo.title
        title.classList.add("todo-title")
        todoElement.appendChild(title)

        const description = document.createElement("span")
        description.textContent = todo.description
        description.classList.add("todo-description")
        todoElement.appendChild(description)

        const duedate = document.createElement("span")
        duedate.textContent = todo.duedate
        duedate.classList.add("todo-duedate")
        todoElement.appendChild(duedate)

        const priority = document.createElement("span")
        priority.textContent = todo.priority
        priority.classList.add("todo-priority")
        todoElement.appendChild(priority)

        todoArea.insertBefore(
          todoElement,
          document.querySelector(".todo-element")
        )
      })
    }
  }

  function off() {
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].off("projectsUpdate", _renderProjects)

    projectArea.innerHTML = ""
    todoArea.innerHTML = ""

    projectArea = undefined
    todoArea = undefined
    renderEditable = undefined
    firstInit = true

    this.init = init
    delete this.setRenderConfig
    delete this.off
  }

  function init(projectElement, todoElement, editable = true) {
    projectArea = projectElement
    todoArea = todoElement
    renderEditable = editable
    _renderProjects()

    if (firstInit === true) {
      /* Putting Events code here allows events to be triggered only after init,
      at the cost of creating a closure. */
      _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].on("projectsUpdate", _renderProjects)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRLHVEQUFXO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVUsdURBQVc7QUFDckI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sdURBQVc7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSx3REFBd0QsWUFBWTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQsWUFBWTtBQUN2RSx3REFBd0QsWUFBWTtBQUNwRTs7QUFFQSxzREFBc0QsWUFBWTtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLCtEQUErRCxZQUFZO0FBQzNFOztBQUVBLDZEQUE2RCxZQUFZO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE9BQU8sZ0JBQWdCO0FBQ2xDLENBQUM7O0FBRUQsaUVBQWUsUUFBUTtBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHt9XG5cbiAgZnVuY3Rpb24gb24oZXZlbnROYW1lLCBmbikge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW11cbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgZW1pdCxcbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiBldmVudHNcbiAgICB9LFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c1xuXG4vKiBQZW9wbGUuanNcblxuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IFBlb3BsZSA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHBlb3BsZSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFBlb3BsZShhcnJheSkge1xuICAgIGFycmF5LmZvckVhY2gocGVyc29uID0+IHBlb3BsZS5wdXNoKHBlcnNvbikpO1xuICAgIEV2ZW50cy5lbWl0KCdwZW9wbGVDaGFuZ2VkJywgcGVvcGxlKTtcbiAgfVxuXG4gIHJldHVybiB7YWRkUGVvcGxlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcbiovXG5cbi8qIFN0YXRzLmpzXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgU3RhdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0cyA9IHt9O1xuXG4gIEV2ZW50cy5vbigncGVvcGxlQ2hhbmdlZCcsIHNldFBlb3BsZSk7XG5cbiAgZnVuY3Rpb24gc2V0UGVvcGxlKHBlb3BsZSkge1xuICAgIHN0YXRzLnBlb3BsZSA9IHBlb3BsZS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coc3RhdHMpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRzLnBlb3BsZSk7XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHMuanNcIlxuXG4vKlxuICAgIFRoaXMgbW9kdWxlIGV4cG9ydHMgYSAnUHJvamVjdHMnIG9iamVjdCB0aGF0IGtlZXBzXG4gICAgdHJhY2sgb2YgUHJvamVjdHMgYW5kIHRoZWlyIFRvZG9zLlxuXG4gICAgTm90ZTpcbiAgICAgIFByb2plY3RzLmFkZCAmIFByb2plY3RzLnJlbW92ZSByZXR1cm4gdGhlIFByb2plY3RzIG1vZHVsZSBpdHNlbGYuXG4gICAgICAuYWRkVG9kbywgLnJlbW92ZVRvZG8sIGFuZCAuZWRpdCByZXR1cm4gdGhlIHByb2plY3QgdGhlIHRvZG8gYmVsb25ncyB0by5cblxuICAgIH5+fn5+fn5+fn5+fn5+fn5+fn5BZGQsIHJldHJpdmUsIGFuZCByZW1vdmUgcHJvamVjdHN+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuICAgICAgQ3JlYXRlIHByb2plY3RzIHdpdGggUHJvamVjdC5hZGQoJ3Byb2plY3ROYW1lJylcblxuICAgICAgUmV0cml2ZSB0aGVtIHdpdGggUHJvamVjdC5maW5kKCdwcm9qZWN0TmFtZScpXG4gICAgICBvciB1c2UgUHJvamVjdHMubGlzdCBmb3IgYW4gYXJyYXkgb2YgYWxsIHByb2plY3RzXG5cbiAgICAgIFlvdSBtYXkgcmVuYW1lIGEgcHJvamVjdCBieSByZXRyaXZpbmcgaXQgdGhyb3VnaCBvbmUgb2YgdGhlIGFib3ZlIG1ldGhvZHM6XG4gICAgICAgIEV4OiBQcm9qZWN0cy5maW5kKCdQcm9qZWN0TmFtZScpLm5hbWUgPSAnbmV3TmFtZSdcbiAgICAgIFByb2plY3RzIG1heSBub3QgaGF2ZSBpZGVudGljYWwgbmFtZXMuXG5cbiAgICAgIFJlbW92ZSBwcm9qZWN0cyB3aXRoIFByb2plY3QucmVtb3ZlKCdwcm9qZWN0TmFtZScpXG5cbiAgICB+fn5+fn5+fn5+fn5+fn5+fn5+QWRkLCByZXRyaXZlLCBhbmQgcmVtb3ZlIHRvZG9zfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbiAgICAgIFlvdSBtYXkgaW5pdGlhdGUgYSBQcm9qZWN0IHdpdGggYSB0b2RvIGxpa2Ugc286XG4gICAgICAgIFByb2plY3RzLmFkZCgnbmV3UHJvamVjdCcpLmZpbmQoJ25ld1Byb2plY3QnKS5hZGRUb2RvKCdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEdWVEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JylcblxuICAgICAgVG8gYWRkIHRvZG9zIGFmdGVyIGNyZWF0aW9uIHJldHJpZXZlIGFuIG9iamVjdCBhbmQgdXNlIGl0J3MgYWRkVG9kbyBtZXRob2RcbiAgICAgICAgUHJvamVjdHMuZmluZCgncHJvamVjdE5hbWUnKS5hZGRUb2RvKC4uLik7XG5cbiAgICAgIFJldHJpdmUgdG9kb3Mgd2l0aCAuZmluZFRvZG8oJ3RvZG9OYW1lJykgb3IgLmxpc3RUb2Rvc1xuICAgICAgICBQcm9qZWN0cy5maW5kKCdwcm9qZWN0TmFtZScpLmZpbmRUb2RvKCd0b2RvTmFtZScpXG4gICAgICAgIFByb2plY3RzLmZpbmQoJ3Byb2plY3ROYW1lJykubGlzdFRvZG9zXG5cbiAgICAgIFJlbW92ZSB0b2RvcyB3aXRoIC5yZW1vdmVUb2RvKCd0b2RvVGl0bGUnKVxuICAgICAgICBQcm9qZWN0LmZpbmQoJ3Byb2plY3ROYW1lJykucmVtb3ZlVG9kbygndG9kb1RpdGxlJyk7XG5cbiAgICAgIFlvdSBtYXkgZWRpdCBhIHRvZG8gdXNpbmcgdGhlIGVkaXQgbWV0aG9kIG9uIFRvZG8gb2JqZWN0cy4gVG9kb3MgbWF5IG5vdFxuICAgICAgaGF2ZSBpZGVudGljYWwgdGl0bGVzIGluIHRoZSBzYW1lIHByb2plY3Q6XG4gICAgICAgIFByb2plY3RzLmZpbmQoJ1Byb2plY3ROYW1lJykuZmluZFRvZG8oJ3RvZG9OYW1lJykuZWRpdCgndGl0bGUnLCAnbmV3VGl0bGUnKVxuKi9cblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXVxuXG4gIGZ1bmN0aW9uIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIikpXG4gICAgaWYgKHN0b3JhZ2UgPT09IG51bGwpIHJldHVybiAvLyByZXR1cm5zIGlmIGxvY2FsU3RvcmFnZSBoYXNuJ3QgYmVlbiB1c2VkXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlW2ldXG4gICAgICBhZGQocHJvamVjdC5uYW1lKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaW5kKHByb2plY3QubmFtZSkuYWRkVG9kbyhcbiAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS50aXRsZSxcbiAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBwcm9qZWN0Lmxpc3RUb2Rvc1tpXS5kdWVkYXRlLFxuICAgICAgICAgIHByb2plY3QubGlzdFRvZG9zW2ldLnByaW9yaXR5XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+UHJvamVjdCBDcmVhdGlvbn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cbiAgZnVuY3Rpb24gYWRkKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmFtZSkpIHtcbiAgICAgIC8vIHJldHVybnMgaWYgc3RyaW5nIGlzIGVtcHR5IG9yIG9ubHkgY29udGFpbnMgd2hpdGVzcGFjZVxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiUHJvamVjdHMgbXVzdCBoYXZlIGEgbmFtZSFcIilcbiAgICB9IGVsc2UgaWYgKGZpbmQobmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzXCIpXG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXVxuICAgIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flRvZG8gQ3JlYXRpb25+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgZHVlZGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gXCJcIikge1xuICAgICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9kb3MgbXVzdCBoYXZlIGEgdGl0bGUhXCIpXG4gICAgICB9IGVsc2UgaWYgKGZpbmRUb2RvKHRpdGxlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIlRvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXNcIilcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IHRoaXMubmFtZVxuXG4gICAgICBmdW5jdGlvbiBlZGl0KGZpZWxkLCBjaGFuZ2UpIHtcbiAgICAgICAgaWYgKGZpZWxkID09PSB1bmRlZmluZWQgfHwgY2hhbmdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoXCJNaXNzaW5nIGFyZ3VtZW50cyFcIilcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQgfHwgL15cXHMqJC8udGVzdCh0aXRsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRvZG9zIG11c3QgaGF2ZSBhIHRpdGxlIVwiKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmluZFRvZG8oY2hhbmdlKSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZSAhPT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRvZG9zIGNhbm5vdCBoYXZlIGlkZW50aWNhbCB0aXRsZXNcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgdGl0bGUgPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJkdWVkYXRlXCIpIHtcbiAgICAgICAgICBkdWVkYXRlID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwicHJpb3JpdHlcIikge1xuICAgICAgICAgIHByaW9yaXR5ID0gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmllbGQgZG9lcyBub3QgZXhpc3QhXCIpXG4gICAgICAgIH1cblxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoXCJwcm9qZWN0c1VwZGF0ZVwiKVxuICAgICAgICByZXR1cm4gZmluZChwYXJlbnRQcm9qZWN0KVxuICAgICAgfVxuICAgICAgLy8gVG9kbyBvYmplY3RcbiAgICAgIGNvbnN0IHRvZG8gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgIHJldHVybiB0aXRsZVxuICAgICAgICB9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBkdWVkYXRlKCkge1xuICAgICAgICAgIHJldHVybiBkdWVkYXRlXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgICByZXR1cm4gcHJpb3JpdHlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHBhcmVudFByb2plY3QoKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFByb2plY3RcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdCxcbiAgICAgIH0pXG4gICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pXG4gICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgIEV2ZW50cy5lbWl0KFwicHJvamVjdHNVcGRhdGVcIilcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyogfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBUb2RvIENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG5cbiAgICAvLyBvdGhlciBwcm9qZWN0IGNydWRcbiAgICBmdW5jdGlvbiBmaW5kVG9kbyh0aXRsZSkge1xuICAgICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9kbyBub3QgZm91bmQhXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3QuZmluZCgodG9kbykgPT4gdG9kby50aXRsZSA9PT0gdGl0bGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0aXRsZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0b2RvTGlzdC5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8udGl0bGUgPT09IHRpdGxlKVxuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIlRvZG8gbm90IGZvdW5kIVwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgRXZlbnRzLmVtaXQoXCJwcm9qZWN0c1VwZGF0ZVwiKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByb2plY3Qgb2JqZWN0XG4gICAgY29uc3QgcHJvamVjdCA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgICB9LFxuICAgICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZiAobmV3TmFtZSA9PT0gdW5kZWZpbmVkIHx8IC9eXFxzKiQvLnRlc3QobmV3TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQcm9qZWN0cyBtdXN0IGhhdmUgYSBuYW1lIVwiKVxuICAgICAgICB9IGVsc2UgaWYgKGZpbmQobmV3TmFtZSkgIT09IHVuZGVmaW5lZCAmJiBuZXdOYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdHMgY2Fubm90IGhhdmUgaWRlbnRpY2FsIG5hbWVzXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IG5ld05hbWVcbiAgICAgICAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICBFdmVudHMuZW1pdChcInByb2plY3RzVXBkYXRlXCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXQgbGlzdFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRvZG9MaXN0XVxuICAgICAgfSxcbiAgICAgIGFkZFRvZG8sXG4gICAgICBmaW5kVG9kbyxcbiAgICAgIHJlbW92ZVRvZG8sXG4gICAgfSlcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KVxuICAgIF9zYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIEV2ZW50cy5lbWl0KFwicHJvamVjdHNVcGRhdGVcIilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8qIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fkVuZCBvZiBQcm9qZWN0IENyZWF0aW9ufn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXG5cbiAgLy8gb3RoZXIgbW9kdWxlIGNydWRcbiAgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzTGlzdC5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSlcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBhbGVydChcIlByb2plY3Qgbm90IGZvdW5kIVwiKSAvLyByZXR1cm5zIGlmIGZpbmRJbmRleCBkb2Vzbid0IGZpbmQgYSBtYXRjaFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpXG4gICAgICBFdmVudHMuZW1pdChcInByb2plY3RzVXBkYXRlXCIpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIlByb2plY3Qgbm90IGZvdW5kIVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNMaXN0LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSlcbiAgICB9XG4gIH1cblxuICAvLyBNb2R1bGUgb2JqZWN0XG4gIHJldHVybiB7XG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gWy4uLnByb2plY3RzTGlzdF1cbiAgICB9LFxuICAgIGFkZCxcbiAgICByZW1vdmUsXG4gICAgZmluZCxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxuICB9XG59KSgpXG5cbi8qIFJlbmRlcnMgUHJvamVjdHMgb24gdGhlIHdlYnBhZ2UuXG5Vc2UgUHJvamVjdFJlbmRlcmVyLmluaXQocHJvamVjdEVsZW1lbnQsIHRvZG9FbGVtZW50LCBlZGl0YWJsZSkgdG8gc2V0IHRoZSBhcmVhc1xudG8gcmVuZGVyIHRvLCBhbmQgd2hldGhlciB0aGV5IG1heSBiZSBlZGl0ZWQuIFRvZG9zIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGVpclxucmVzcGVjdGl2ZSBwcm9qZWN0cyBhcmUgY2xpY2tlZC5cbklmIHlvdSdkIGxpa2UgdG8gb25seSByZW5kZXIgcHJvamVjdCBuYW1lcywgeW91IG1heSBwYXNzIGEgZHVtbXkgbm9uLW9iamVjdFxudmFsdWUgYXMgdGhlIHRvZG9FbGVtZW50LiBJdCB3aWxsIGZhaWwgcXVpZXRseSB3aXRoIGEgY29uc29sZSBtZXNzYWdlIGJ5XG5kZWZhdWx0LlxuXG5BZnRlciBpbml0LCBQcm9qZWN0UmVuZGVyZXIgd2lsbCBoYXZlIHR3byBtZXRob2RzIGF2YWlsYWJsZSB0byBpdDpcblByb2plY3RSZW5kZXJlci5zZXRDb25maWc6IFVzZWQgZXhhY3RseSB0aGUgc2FtZSBhcyBQcm9qZWN0UmVuZGVyZXIuaW5pdFxuUHJvamVjdFJlbmRlcmVyLm9mZjogcmVzZXRzIFByb2plY3RSZW5kZXJlciB0byBpdCdzIG9yaWdpbmFsIHN0YXRlIGFuZCBjbGVhcnNcbmVsZW1lbnRzIGltbWVkaWF0ZWx5LiAqL1xuXG5jb25zdCBQcm9qZWN0UmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdEFyZWFcbiAgbGV0IHRvZG9BcmVhXG4gIGxldCByZW5kZXJFZGl0YWJsZVxuICBsZXQgZmlyc3RJbml0ID0gdHJ1ZVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRQcm9qZWN0QWRkZXIoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hZGRcIilcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKVxuICAgIHByb2plY3RBcmVhLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCBhZGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGFkZExhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFkZC1sYWJlbFwiKVxuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIilcbiAgICBhZGRMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRMYWJlbClcblxuICAgIGNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgYWRkSW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWRkLWlucHV0XCIpXG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIilcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3RcIilcbiAgICBhZGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkSW5wdXQpXG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFkZC1idXR0b25cIilcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ0bilcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4gUHJvamVjdHMuYWRkKGFkZElucHV0LnZhbHVlKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdClcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRQcm9qZWN0RWRpdG9yKHByb2plY3RFbGVtZW50KSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVkaXRcIilcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCLinI5cIlxuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRCdG4pXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBlLnRhcmdldC5uZXh0U2libGluZ1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUVsZW1lbnQudGV4dENvbnRlbnRcblxuICAgICAgLy8gY2hhbmdlIGVsZW1lbnQgcHJvcGVydGllc1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIilcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWRpdGFibGVcIilcbiAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpXG5cbiAgICAgIC8vIGFkZCByZW1vdmUgZWxlbWVudFxuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXJlbW92ZVwiKVxuICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCItXCJcbiAgICAgIHByb2plY3RFbGVtZW50Lmluc2VydEJlZm9yZShyZW1vdmVCdG4sIHByb2plY3ROYW1lRWxlbWVudClcbiAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gUHJvamVjdHMucmVtb3ZlKHByb2plY3ROYW1lKSlcblxuICAgICAgLy8gZXhpdCBlZGl0b3IgYW5kIGFwcGx5IGFueSBuYW1lIGNoYW5nZXNcbiAgICAgIGNvbnN0IGV4aXRFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwiZmFsc2VcIilcbiAgICAgICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlQnRuKVxuICAgICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVkaXRhYmxlXCIpXG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCAhPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50XG4gICAgICAgICAgUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubmFtZSA9IG5ld05hbWVcblxuICAgICAgICAgIC8vIGNoZWNrcyBpZiBvbGQgcHJvamVjdCBuYW1lIGV4aXN0cywgYW5kIHJlc2V0cyB0ZXh0Q29udGVudCBpZiBzdGlsbCBkb2VzXG4gICAgICAgICAgaWYgKHR5cGVvZiBQcm9qZWN0cy5maW5kKHByb2plY3ROYW1lKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdXN0IHJlbW92ZSBsaXN0ZW5lciwgb3Igd2lsbCBjb250aW51ZSBhdHRlbXB0aW5nIHRvIHJlbW92ZSByZW1vdmVCdG5cbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXhpdEVkaXRvcilcbiAgICAgIH1cblxuICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXhpdEVkaXRvcilcbiAgICB9XG4gICAgLy8gSGlkZXMgZWRpdCBidXR0b24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgb3B0aW9ucyB1bnRpbCB1c2VyIG1vdmVzIGF3YXlcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdClcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJQcm9qZWN0cygpIHtcbiAgICBpZiAodHlwZW9mIHByb2plY3RBcmVhICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2plY3RSZW5kZXJlcjogcHJvamVjdEFyZWEgbGVmdCB1bmRlZmluZWQhXCIpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwcm9qZWN0QXJlYS5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICBpZiAocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIF9hcHBlbmRQcm9qZWN0QWRkZXIoKVxuXG4gICAgUHJvamVjdHMubGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsZW1lbnRcIilcblxuICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kUHJvamVjdEVkaXRvcihwcm9qZWN0RWxlbWVudClcblxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIilcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICAgIC8vIHJlbmRlcnMgdG9kb3Mgb24gcHJvamVjdCBjbGlja1xuICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRhYmxlXCIpKSB7XG4gICAgICAgICAgLy8gcHJldmVudHMgc3dpdGNoaW5nIGluIGVkaXRvciBtb2RlXG4gICAgICAgICAgX3JlbmRlclRvZG9zKGUudGFyZ2V0LnRleHRDb250ZW50KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAocmVuZGVyRWRpdGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZFwiKVxuICAgICAgICBwcm9qZWN0QWRkZXIuYWZ0ZXIocHJvamVjdEVsZW1lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJlYS5wcmVwZW5kKHByb2plY3RFbGVtZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZEJ0bi5jbGFzc0xpc3QgPSBcInNvcnQtYWRkXCJcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIitcIlxuICAgIHNvcnRCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuXG4gICAgY29uc3QgZXhpdFRvZG9BZGRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tYWRkRm9ybVwiKVxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBhZGRGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxuICAgICAgaWYgKGFkZEZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgYWRkRm9ybS5yZW1vdmUoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW5hbWVcIilcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcbiAgICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUFkZEZvcm0sIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE5ld1RvZG8gPSAoZSwgYWRkRm9ybSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGFkZEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXG4gICAgICBjb25zdCBuZXdUb2RvID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGR1ZWRhdGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kdWVkYXRlXCIpLnZhbHVlXG4gICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcmlvcml0eVwiKVxuICAgICAgY29uc3QgcHJpb3JpdHkgPVxuICAgICAgICBwcmlvcml0eUVsZW1lbnQub3B0aW9uc1twcmlvcml0eUVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dFxuXG4gICAgICBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmFkZFRvZG8oXG4gICAgICAgIG5ld1RvZG8sXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVkYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgICAgKVxuXG4gICAgICBleGl0VG9kb0FkZGVyKClcblxuICAgICAgY29uc29sZS5sb2cocHJpb3JpdHkpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQWRkRm9ybSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50XCIsIFwidG9kby1hZGRGb3JtXCIpXG4gICAgICBhZGRGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBwcm9qZWN0TmFtZSlcblxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN1Ym1pdFwiLCBcImVkaXRhYmxlXCIpXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIuKck1wiXG4gICAgICBhZGRGb3JtLmFwcGVuZChzdWJtaXRCdG4pXG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgVG9kb1wiXG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiLCBcImVkaXRhYmxlXCIpXG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgdHJ1ZSlcbiAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIsIFwiZWRpdGFibGVcIilcbiAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCB0cnVlKVxuICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgICAgY29uc3QgZHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlZGF0ZVwiLCBcImVkaXRhYmxlXCIpXG4gICAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlZGF0ZVwiKVxuICAgICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGR1ZWRhdGVJbnB1dClcblxuICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgICBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiLCBcImVkaXRhYmxlXCIpXG5cbiAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcImxvd1wiXG4gICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJtZWRpdW1cIlxuICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJoaWdoXCJcblxuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKGxvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5KVxuICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcblxuICAgICAgdG9kb0FyZWEuaW5zZXJ0QmVmb3JlKGFkZEZvcm0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1lbGVtZW50XCIpKVxuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICAgICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiBhZGROZXdUb2RvKGUsIGFkZEZvcm0pXG4gICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleGl0VG9kb0FkZGVyLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUFkZEZvcm0sIHsgb25jZTogdHJ1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpIHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcmVtb3ZlQnRuLmNsYXNzTGlzdCA9IFwic29ydC1yZW1vdmVcIlxuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiLVwiXG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pXG5cbiAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIilcbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50XG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRQcm9qZWN0LCB0b2RvVGl0bGUpXG5cbiAgICAgIFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpXG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQhXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWVsZW1lbnRcIilcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbW92ZWFibGVcIilcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4aXRSZW1vdmVFZGl0b3IsIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IGV4aXRSZW1vdmVFZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWVsZW1lbnRcIilcbiAgICAgIHRvZG9FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZWFibGVcIilcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UmVtb3ZlRWRpdG9yLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcHBlbmRTb3J0QmFyKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3Qgc29ydEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzb3J0QmFyLmNsYXNzTGlzdC5hZGQoXCJzb3J0LWJhclwiKVxuXG4gICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSB7XG4gICAgICBfYXBwZW5kVG9kb0FkZGVyKHNvcnRCYXIsIHByb2plY3ROYW1lKVxuICAgICAgX2FwcGVuZFRvZG9SZW1vdmVyKHNvcnRCYXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzb3J0VGl0bGUuY2xhc3NMaXN0LmFkZChcInNvcnQtdGl0bGVcIilcbiAgICBzb3J0VGl0bGUudGV4dENvbnRlbnQgPSBcInRpdGxlXCJcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRUaXRsZSlcblxuICAgIGNvbnN0IHNvcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgc29ydERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJzb3J0LWRlc2NyaXB0aW9uXCIpXG4gICAgc29ydERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJkZXNjcmlwdGlvblwiXG4gICAgc29ydEJhci5hcHBlbmRDaGlsZChzb3J0RGVzY3JpcHRpb24pXG5cbiAgICBjb25zdCBzb3J0RHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgc29ydER1ZWRhdGUuY2xhc3NMaXN0LmFkZChcInNvcnQtZHVlZGF0ZVwiKVxuICAgIHNvcnREdWVkYXRlLnRleHRDb250ZW50ID0gXCJkdWVkYXRlXCJcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnREdWVkYXRlKVxuXG4gICAgY29uc3Qgc29ydFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInNvcnQtcHJpb3JpdHlcIilcbiAgICBzb3J0UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcInByaW9yaXR5XCJcbiAgICBzb3J0QmFyLmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eSlcblxuICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHNvcnRCYXIpXG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBib29sKSB7XG4gICAgVG9kby50aXRsZS5lbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBib29sKVxuICAgIFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgYm9vbClcblxuICAgIGxldCBkdWVkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlZGF0ZVwiLCBcImVkaXRhYmxlXCIpXG4gICAgZHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZWRhdGVcIilcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICBkdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgVG9kby5kdWVkYXRlLnRleHQpXG5cbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlZGF0ZVwiLCBcImVkaXRhYmxlXCIpXG5cbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwibG93XCJcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwibWVkaXVtXCJcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJoaWdoXCJcblxuICAgIC8vIHNldHMgZGVmYXVsdCBzZWxlY3Rpb24gdG8gYmUgdGhlIHNhbWUgYXMgY3VycmVudCB2YWx1ZVxuICAgIDtbbG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHldLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBUb2RvLnByaW9yaXR5LnRleHQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQobG93UHJpb3JpdHksIG1lZGl1bVByaW9yaXR5LCBoaWdoUHJpb3JpdHkpXG5cbiAgICBpZiAoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgVG9kby5lZGl0QnRuLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcIlwiKVxuICAgICAgVG9kby50aXRsZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKVxuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIilcbiAgICAgIFRvZG8uZWxlbWVudC5pbnNlcnRCZWZvcmUoZHVlZGF0ZUlucHV0LCBUb2RvLnByaW9yaXR5LmVsZW1lbnQpXG5cbiAgICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIilcbiAgICAgIFRvZG8uZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgVG9kby5lZGl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxuICAgICAgVG9kby50aXRsZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0YWJsZVwiKVxuICAgICAgVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0YWJsZVwiKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcbiAgICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcblxuICAgICAgLy8gbXVzdCB1cGRhdGUgZWxlbWVudHMgdG8gcmVtb3ZlIHRoZW0/XG4gICAgICBkdWVkYXRlSW5wdXQgPSBUb2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgICBwcmlvcml0eVNlbGVjdCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpXG4gICAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlZGF0ZUlucHV0KVxuICAgICAgVG9kby5lbGVtZW50LnJlbW92ZUNoaWxkKHByaW9yaXR5U2VsZWN0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hYm9ydFRvZG9FZGl0KFRvZG8pIHtcbiAgICBfbWFrZVRvZG9FZGl0YWJsZShUb2RvLCBmYWxzZSlcbiAgICBUb2RvLmVsZW1lbnQucmVtb3ZlQ2hpbGQoVG9kby5zdWJtaXRCdG4pXG5cbiAgICBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLnRpdGxlLnRleHRcbiAgICBUb2RvLmRlc2NyaXB0aW9uLmVsZW1lbnQudGV4dENvbnRlbnQgPSBUb2RvLmRlc2NyaXB0aW9uLnRleHRcbiAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8uZHVlZGF0ZS50ZXh0XG4gICAgVG9kby5wcmlvcml0eS5lbGVtZW50LnRleHRDb250ZW50ID0gVG9kby5wcmlvcml0eS50ZXh0XG4gIH1cblxuICBmdW5jdGlvbiBfc3VibWl0VG9kb0NoYW5nZXMoVG9kbykge1xuICAgIGNvbnN0IGR1ZWRhdGVJbnB1dCA9IFRvZG8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBkdWVkYXRlVmFsdWUgPSBkdWVkYXRlSW5wdXQudmFsdWVcblxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gVG9kby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIilcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9XG4gICAgICBwcmlvcml0eVNlbGVjdC5vcHRpb25zW3ByaW9yaXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcblxuICAgIC8vIGNvbXBhcmVzIGN1cnJlbnQgdGV4dCB0byB0ZXh0IHdoZW4gZWRpdCB3YXMgaW5pdGlhdGVkXG4gICAgaWYgKFxuICAgICAgVG9kby50aXRsZS50ZXh0ID09PSBUb2RvLnRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgJiZcbiAgICAgIFRvZG8uZGVzY3JpcHRpb24udGV4dCA9PT0gVG9kby5kZXNjcmlwdGlvbi5lbGVtZW50LnRleHRDb250ZW50ICYmXG4gICAgICBUb2RvLmR1ZWRhdGUudGV4dCA9PT0gZHVlZGF0ZVZhbHVlICYmXG4gICAgICBUb2RvLnByaW9yaXR5LnRleHQgPT09IHByaW9yaXR5T3B0aW9uXG4gICAgKSB7XG4gICAgICBfYWJvcnRUb2RvRWRpdChUb2RvKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gVG9kby5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxuICAgICAgY29uc3QgdGl0bGUgPSBUb2RvLnRpdGxlLnRleHRcbiAgICAgIGNvbnN0IG5ld1RpdGxlID0gVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50XG4gICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IFRvZG8uZGVzY3JpcHRpb24uZWxlbWVudC50ZXh0Q29udGVudFxuICAgICAgY29uc3QgbmV3RHVlZGF0ZSA9IGR1ZWRhdGVWYWx1ZVxuICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eU9wdGlvblxuICAgICAgbGV0IHRpdGxlQ2hhbmdlZFxuXG4gICAgICBpZiAoVG9kby50aXRsZS5lbGVtZW50LnRleHRDb250ZW50ICE9PSBUb2RvLnRpdGxlLnRleHQpIHtcbiAgICAgICAgUHJvamVjdHMuZmluZChwYXJlbnRQcm9qZWN0KS5maW5kVG9kbyh0aXRsZSkuZWRpdChcInRpdGxlXCIsIG5ld1RpdGxlKVxuICAgICAgICAvLyBjaGVja3MgaWYgb2xkIHRvZG8gdGl0bGUgZXhpc3RzLCBhbmQgcmVzZXRzIHRleHRDb250ZW50IGlmIHN0aWxsIGRvZXNcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKHRpdGxlKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIFRvZG8udGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IFRvZG8udGl0bGUudGV4dFxuICAgICAgICAgIHRpdGxlQ2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGVDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvZG9PYmogPSB0aXRsZUNoYW5nZWRcbiAgICAgICAgPyBQcm9qZWN0cy5maW5kKHBhcmVudFByb2plY3QpLmZpbmRUb2RvKG5ld1RpdGxlKVxuICAgICAgICA6IFByb2plY3RzLmZpbmQocGFyZW50UHJvamVjdCkuZmluZFRvZG8odGl0bGUpXG5cbiAgICAgIHRvZG9PYmouZWRpdChcImRlc2NyaXB0aW9uXCIsIG5ld0Rlc2NyaXB0aW9uKVxuICAgICAgdG9kb09iai5lZGl0KFwiZHVlZGF0ZVwiLCBuZXdEdWVkYXRlKVxuICAgICAgdG9kb09iai5lZGl0KFwicHJpb3JpdHlcIiwgbmV3UHJpb3JpdHkpXG5cbiAgICAgIFRvZG8uZWxlbWVudC5yZW1vdmVDaGlsZChUb2RvLnN1Ym1pdEJ0bilcbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIGZhbHNlKVxuXG4gICAgICBUb2RvLmR1ZWRhdGUuZWxlbWVudC50ZXh0Q29udGVudCA9IG5ld0R1ZWRhdGVcbiAgICAgIFRvZG8ucHJpb3JpdHkuZWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ByaW9yaXR5XG4gICAgICBjb25zb2xlLmxvZyh0b2RvT2JqKVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgZnVuY3Rpb24gc2VlbXMgYSBiaXQgbWVzc3lcbiAgZnVuY3Rpb24gX2FwcGVuZFRvZG9FZGl0b3IodG9kb0VsZW1lbnQpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZWRpdFwiKVxuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIuKcjlwiXG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBNYWtlcyB0aGUgZW50aXJlIGxpc3Qgb2YgZWxlbWVudHMgZWFzaWVyIHRvIHBhc3MgYXJvdW5kIHRvIG90aGVyIGZ1bmN0aW9uc1xuICAgICAgY29uc3QgVG9kbyA9IHtcbiAgICAgICAgZWxlbWVudDogZS50YXJnZXQucGFyZW50RWxlbWVudCwgLy8gdGhlIGVudGlyZSB0b2RvIHBhcmVudCBlbGVtZW50XG4gICAgICAgIGVkaXRCdG46IGUudGFyZ2V0LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0Lm5leHRTaWJsaW5nLFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50LFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS50ZXh0Q29udGVudCxcbiAgICAgICAgfSxcbiAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bM10sXG4gICAgICAgICAgdGV4dDogZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblszXS50ZXh0Q29udGVudCxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpb3JpdHk6IHtcbiAgICAgICAgICBlbGVtZW50OiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzRdLFxuICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bNF0udGV4dENvbnRlbnQsXG4gICAgICAgIH0sXG4gICAgICB9XG5cbiAgICAgIF9tYWtlVG9kb0VkaXRhYmxlKFRvZG8sIHRydWUpXG5cbiAgICAgIFRvZG8uc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgVG9kby5zdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tc3VibWl0XCIpXG4gICAgICBUb2RvLnN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwi4pyTXCJcbiAgICAgIFRvZG8uZWxlbWVudC5wcmVwZW5kKFRvZG8uc3VibWl0QnRuKVxuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCkgPT4gX3N1Ym1pdFRvZG9DaGFuZ2VzKFRvZG8pXG4gICAgICBUb2RvLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0SGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW5kZXJUb2Rvcyhwcm9qZWN0TmFtZSkge1xuICAgIGlmICh0eXBlb2YgdG9kb0FyZWEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdFJlbmRlcmVyOiB0b2RvQXJlYSBsZWZ0IHVuZGVmaW5lZCFcIilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRvZG9BcmVhLmlubmVySFRNTCA9IFwiXCJcblxuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdHMuZmluZChwcm9qZWN0TmFtZSkubGlzdFRvZG9zXG5cbiAgICBfYXBwZW5kU29ydEJhcihwcm9qZWN0TmFtZSlcblxuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50XCIpXG4gICAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCB0b2RvLnBhcmVudFByb2plY3QpXG5cbiAgICAgICAgaWYgKHJlbmRlckVkaXRhYmxlID09PSB0cnVlKSBfYXBwZW5kVG9kb0VkaXRvcih0b2RvRWxlbWVudClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlZGF0ZVxuICAgICAgICBkdWVkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZWRhdGVcIilcbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlZGF0ZSlcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eVxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSlcblxuICAgICAgICB0b2RvQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgdG9kb0VsZW1lbnQsXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWVsZW1lbnRcIilcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoKSB7XG4gICAgRXZlbnRzLm9mZihcInByb2plY3RzVXBkYXRlXCIsIF9yZW5kZXJQcm9qZWN0cylcblxuICAgIHByb2plY3RBcmVhLmlubmVySFRNTCA9IFwiXCJcbiAgICB0b2RvQXJlYS5pbm5lckhUTUwgPSBcIlwiXG5cbiAgICBwcm9qZWN0QXJlYSA9IHVuZGVmaW5lZFxuICAgIHRvZG9BcmVhID0gdW5kZWZpbmVkXG4gICAgcmVuZGVyRWRpdGFibGUgPSB1bmRlZmluZWRcbiAgICBmaXJzdEluaXQgPSB0cnVlXG5cbiAgICB0aGlzLmluaXQgPSBpbml0XG4gICAgZGVsZXRlIHRoaXMuc2V0UmVuZGVyQ29uZmlnXG4gICAgZGVsZXRlIHRoaXMub2ZmXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KHByb2plY3RFbGVtZW50LCB0b2RvRWxlbWVudCwgZWRpdGFibGUgPSB0cnVlKSB7XG4gICAgcHJvamVjdEFyZWEgPSBwcm9qZWN0RWxlbWVudFxuICAgIHRvZG9BcmVhID0gdG9kb0VsZW1lbnRcbiAgICByZW5kZXJFZGl0YWJsZSA9IGVkaXRhYmxlXG4gICAgX3JlbmRlclByb2plY3RzKClcblxuICAgIGlmIChmaXJzdEluaXQgPT09IHRydWUpIHtcbiAgICAgIC8qIFB1dHRpbmcgRXZlbnRzIGNvZGUgaGVyZSBhbGxvd3MgZXZlbnRzIHRvIGJlIHRyaWdnZXJlZCBvbmx5IGFmdGVyIGluaXQsXG4gICAgICBhdCB0aGUgY29zdCBvZiBjcmVhdGluZyBhIGNsb3N1cmUuICovXG4gICAgICBFdmVudHMub24oXCJwcm9qZWN0c1VwZGF0ZVwiLCBfcmVuZGVyUHJvamVjdHMpXG5cbiAgICAgIC8vIHJldXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHNldCBvcHRpb25zIGFmdGVyIGluaXQgaWYgZGVzaXJlZC5cbiAgICAgIGZpcnN0SW5pdCA9IGZhbHNlXG4gICAgICB0aGlzLnNldENvbmZpZyA9IGluaXRcbiAgICAgIHRoaXMub2ZmID0gb2ZmXG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluaXRcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfSAvLyBhZnRlciBpbml0OiB7c2V0Q29uZmlnOiBpbml0LCBvZmZ9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuZXhwb3J0IHsgUHJvamVjdFJlbmRlcmVyIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==