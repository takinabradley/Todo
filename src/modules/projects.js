
/*  This module exports a 'Projects' object that keeps 
    track of Projects and their Todos  */

/*  
    Creating and Retrieveing Projects:

      Create Projects with Project.create('projectName')...
      ... and retrive them with Project.get('projectName')

      You may also Project.remove('projectName'), and
      Project.rename('projectName', 'newName')

      To fetch the array of of all objects, use Project.get() without arguments.


    Adding Todo Lists to Projects:

      Most methods related to Creating and Retrieving projects (above) return
      the object. Todo Lists have the following arguments: Title, Description,
      DueDate, and Priority.

      You may initiate a Project with one or more Todo lists like so:
      Project.create('newProject').addTodo('Title', 'Description', 'DueDate',
                     'Priority').addTodo(etc...)
      
      To add a todo to a project after creation, use Project.get('projectName'):
      Project.get('projectName').addTodo(...);

      You may also remove a todo by naming it's title with:
      Project.get('projectName').removeTodo('todoTitle');

      To return the array of a projects todos, use:
      Project.get('projectName').getTodos();

      The above functions chain, minus getTodos(). So you may add and remove 
      todos on the same line:
      Project.get('...').removeTodo('someTodo').addTodo('newTodo');
*/




//You can 
//and retrive projects with Project.get('projectName');

//You may also Project.rename('projectName', 'newName')
//and Project.remove('projectName')

//Projects 

const projectPrototype = {
  type: 'project',
  getTodo: function(title = 'all') {
    if(title === 'all') {
      return this.todos;
    } else {
      let returnTodo;
      for(let i = 0; i < this.todos.length; i++) {
        if(this.todos[i].title === title) {
          returnTodo = this.todos[i];
          break;
        }
      }
      return returnTodo;
    }
    
  },
  addTodo: function (title = '', description = '', duedate = '', priority = '') {
    this.todos.push({title, description, duedate, priority});
    return this;
  },
  removeTodo: function (title) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].title === title) {
        this.todos.splice(i, 1);
        break;
      }
    }
    return this;
  },
};

const Projects = (function() {
  let projects = [];

  function create(name) {
    let todos = [];
    let werk = 'werk'
    function getWerk() {
      return werk;
    }
    const obj = Object.assign(Object.create(projectPrototype), {name, todos});
    return projects[projects.push(obj) - 1];
  };

  function get(name = 'all') {
    if(name === 'all') {
      return projects;
    } else {

      return projects.find( project => project.name === name)
      //let returnObject;
      //for(let i = 0; i < projects.length; i++) {
      //  if(projects[i].name === name) {
      //    returnObject = projects[i];
      //    break;
      //  }
      //}
      //
      //return returnObject;
    }
  };

  function remove(name) {
    for(let i = 0; i < projects.length; i++) {
      if(projects[i].name === name) {
        projects.splice(i, 1);
        return projects;
      }
    }
  }

  function rename(name, newName = get(name).name) {
    let renamedProject;

    for(let i = 0; i < projects.length; i++) {
      if(projects[i].name === name) {
        projects[i].name = newName;
        renamedProject = projects[i];
        break;
      }
    }
    return renamedProject;
  }

  return {create, get, remove, rename}
})();

export default Projects;

//realizing now that new project objects are not safe...
//need to edit factory function to be safe.