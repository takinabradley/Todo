import Events from "./events.js";

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
        Events.emit('projectsUpdate', [...projectsList])
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
      Events.emit('projectsUpdate', [...projectsList])
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
        Events.emit('projectsUpdate', [...projectsList])
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
          Events.emit('projectsUpdate', [...projectsList]);
        }
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });
    projectsList.push(project);
    _saveToLocalStorage()
    Events.emit('projectsUpdate', [...projectsList])
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
      Events.emit('projectsUpdate', [...projectsList])
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
  Events.on('requestElements', _exportElements)

  function init(projectElement, todoElement, useEvents = true) {
    projectArea = projectElement;
    todoArea = todoElement;

    this.renderProjects = renderProjects;
    this.renderTodos = renderTodos;

    /*Putting Events code here allows events to be triggered only after init, 
    at the cost of not garbage collecting this function*/
    if(useEvents === true) {
      Events.on('projectsUpdate', this.renderProjects)
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

export default Projects;
export {ProjectRenderer, ProjectInterface}

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