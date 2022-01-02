import stylesheet from './styles.css'
import Projects, {ProjectRenderer} from './modules/projects.js';


ProjectRenderer.init(document.querySelector('.projects-list'), 
                     document.querySelector('.todo-list'),
                     true)

Projects.getFromLocalStorage();

/* Testing projects:
Projects.add('name').find('name').addTodo('Change my name!', "Click Edit next to my project's name to change it! You may also remove the project, or add a new one from the sidebar while you're at it!", 'never', 'low')
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