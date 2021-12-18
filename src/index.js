import Projects from './modules/projects.js';


function renameTodo(project, oldName, newName) {
  Projects.get(project).removeTodo(oldName).addTodo(newName);
  return Projects.get(project).getTodo(newName);
}

function getTodoIndex(projectName, todoTitle) {
  let array = Projects.get(projectName).getTodo()
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
  Projects.get().forEach( (item, index) => {
    if(item.getName() === projectName) {
      projectIndex = index;
    }
  });
  return projectIndex;
}


//ToDo objects should have properties such as title, description, duedate, priority.
//Notes and checklist would be nice too.

//Pojects should hold lists of ToDo objects. There should be a default project
//users can add ToDo objects to. Users should be able to create new projects
//and choose which their todos go.

//separate application logic from DOM-Related stuff.

//Users should be able to: view all projects, view all todos in each project,
//expand a todo to see/edit, and delete Todos.

//May want to use date-fns.

//use local storage!


