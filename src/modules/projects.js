import Events from "./events.js";

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
        Events.emit('projectsUpdate');
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
      Events.emit('projectsUpdate');
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
        Events.emit('projectsUpdate');
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
          Events.emit('projectsUpdate');
        }
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });
    projectsList.push(project);
    _saveToLocalStorage();
    Events.emit('projectsUpdate');
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
      Events.emit('projectsUpdate');
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
    Events.off('projectsUpdate', _renderProjects);

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
      Events.on('projectsUpdate', _renderProjects);

      //reuses this function to set options after init if desired.
      firstInit = false;
      this.setConfig = init;
      this.off = off;
    }
    delete this.init;
  }
  
  return {init}; //after init: {setConfig: init, off};
})();

export default Projects;
export {ProjectRenderer}