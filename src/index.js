import stylesheet from './styles.css'
import Projects, {ProjectRenderer} from './modules/projects.js';


ProjectRenderer.init(document.querySelector('.sidebar'), 
                     document.querySelector('.todos'),
                     true)

if(localStorage.getItem('projectsList') === '[]' || localStorage.length === 0) {
  Projects.add('New Project').find('New Project').addTodo(
    'Start making your todo lists!', 
    `Add new projects by typing their name in the sidebar and pressing enter.\n`,
    '', 
    'low'
  )
} else {
  Projects.getFromLocalStorage();
}

//finds and clicks the first project in the project list to render it's todos
document.querySelector('.project-name').dispatchEvent(
  new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
);