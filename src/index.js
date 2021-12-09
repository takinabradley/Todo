import Projects from './modules/projects.js';

Projects.create('something').addTodo('aVeryLongTodo').addTodo('AnotherVeryLongTodo');
Projects.create('somethingElse');
Projects.create('woweeeee');



console.log(Projects.get('something').getTodo())
console.log(Projects.rename());
console.log(Projects.get());

function renameTodo(project, oldName, newName) {
  Projects.get(project).removeTodo(oldName).addTodo(newName);
  return Projects.get(project);
}

console.log(renameTodo('something', 'aVeryLongTodo', 'shortTodo'))


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

console.log(getTodoIndex('something', 'AnotherVeryLongTodo'));
console.log(Projects.rename('something', 'somethingRenamed'));

Projects.get('somethingRenamed').todos[3] = 'kladsjf;adsfj';
Projects.get('somethingRenamed').name = 'alksdfj'
console.log(Projects.get('alksdfj'))






//let defaultProject = ProjectCreate('Default');
//defaultProject.addTodo('newTodo');
//defaultProject.addTodo('anotherTodo');
//defaultProject.addTodo('thirdTodo');
//defaultProject.removeTodo('anotherTodo');
//console.log(defaultProject);



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