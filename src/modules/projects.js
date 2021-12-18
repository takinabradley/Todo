
/*  
    This module exports a 'Projects' object that keeps 
    track of Projects and their Todos.

    Note: many module methods return the module itself, and many methods on 
      project objects return the project itself, allowing you to chain methods.
 
    ~~~~~~~~~~~~~~~~~~~Add, retrive, and remove projects~~~~~~~~~~~~~~~~~~~~~~~~

      Create projects with Project.add('projectName')

      Retrive them with Project.find('projectName')
      or use Projects.list for an array of all projects
      
      You may rename an object by retriving it through one of the above methods:
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

      Remove todos with .removeTodo('todoTitle')
        Project.find('projectName').removeTodo('todoTitle');

      You may rename a todo's title, but otherwise must remove a todo and create
      a new one. Todos in a project may not have identical titles:
        //change just the title
        Projects.find('ProjectName').findTodo('todoName').title = 'newTitle'

        //change more than just the title
        Projects.find('ProjectName').removeTodo('todoName').addTodo(...);
*/


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

const Projects = (function() {
  const projectsList = [];

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function add(name) {
    if(find(name) !== undefined) return; //disallows identical projects
    const todoList = [];

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addTodo(title = '', description = '', duedate = '', priority = '') {
      if(findTodo(title) !== undefined) return; //disallows identical todos

      //todo properties and methods
      const todo = Object.freeze({
        get title() {return title}, 
        set title(newTitle) {
          if(findTodo(newTitle) !== undefined) return; //disallows identical todos
          title = newTitle
          return newTitle;
        },
        get description() {return description}, 
        get duedate() {return duedate}, 
        get priority() {return priority}
      });

      todoList.push(todo)
      return this;
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~End of Todo Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    //other crud
    function findTodo(title) {
      if(title === undefined) {
        return;
      } else {
        return todoList.find( todo => todo.title === title );
      }
    };

    function removeTodo(title) {
      const index = todoList.findIndex(todo => todo.title === title);

      if (index === -1) {
        return;
      } else {
        todoList.splice(index , 1);
        return this;
      }
    }

    //project properties and methods
    const project = Object.freeze({ 
      get name() {return name}, 
      set name(newName) {
        if(find(newName) !== undefined) return; //disallows identical projects
        name = newName
        return newName
      },
      get listTodos() {return [...todoList]},
      addTodo,
      findTodo,
      removeTodo
    });

    projectsList.push(project)
    return this;
  };
  /*~~~~~~~~~~~~~~~~~~~~~~~~End of Project Creation~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  //other crud
  function remove(name) {
    const index = projectsList.findIndex(project => project.name === name);

    if (index === -1) {
      return; //returns if findIndex doesn't find a match
    } else {
      projectsList.splice(index , 1);
      return this;
    }
  }

  function find(name) {
    if(name === undefined) {
      return;
    } else {
      return projectsList.find( project => project.name === name );
    }
  };

  //module properties and methods
  return {
    get list() {
      return [...projectsList];
    },
    add,
    remove,
    find
  }
})();
//I may want to implement returning 'this' for chaining

export default Projects;