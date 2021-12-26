import stylesheet from './styles.css'
import Projects, {ProjectRenderer, ProjectInterface} from './modules/projects.js';
import Events from './modules/events.js';




ProjectRenderer.init(document.querySelector('.projects-list'), 
                     document.querySelector('.todo-list'))

Projects.getFromLocalStorage();




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