import stylesheet from './styles.css'
import Projects, {ProjectRenderer} from './modules/projects.js';


ProjectRenderer.init(document.querySelector('.sidebar'), 
                     document.querySelector('.todos'),
                     true)

Projects.getFromLocalStorage();

/*
Projects.find('something').addTodo('1')
Projects.find('something').addTodo('2')
Projects.find('something').addTodo('3')
Projects.find('something').addTodo('4')
Projects.find('something').addTodo('5')
Projects.find('something').addTodo('6')
Projects.find('something').addTodo('7')
Projects.find('something').addTodo('8')
Projects.find('something').addTodo('9')
Projects.find('something').addTodo('10')
Projects.find('something').addTodo('11')
Projects.find('something').addTodo('12')
Projects.find('something').addTodo('13')
Projects.find('something').addTodo('14')
Projects.find('something').addTodo('15')
Projects.find('something').addTodo('16')
Projects.find('something').addTodo('17')
Projects.find('something').addTodo('18')
Projects.find('something').addTodo('19')
Projects.find('something').addTodo('20')
Projects.find('something').addTodo('21')
Projects.find('something').addTodo('22')
Projects.find('something').addTodo('23')
Projects.find('something').addTodo('24')
Projects.find('something').addTodo('25')
Projects.find('something').addTodo('26')
Projects.find('something').addTodo('27')
Projects.find('something').addTodo('28')
Projects.find('something').addTodo('29')
Projects.find('something').addTodo('30')
*/

/* Testing projects:
Projects.add('name').find('name').addTodo('Change my name!', "Click Edit next to my project's name to change it! You may also remove the project, or add a new one from the sidebar while you're at it!", 'never', 'low')
Projects.add('something').find('something').addTodo("somethingTodo", 'this is something to do', 'never', 'low');
Projects.find('something').addTodo('somethingElseTodo', 'This is something else to do', 'never', 'low')
*/
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