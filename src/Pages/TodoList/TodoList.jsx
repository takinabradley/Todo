import { useTodoList } from '../../hooks'
import Project from './Project'

function TodoList() {
  const { projects, addProject, addTodo } = useTodoList()

  const handleSubmit = (e) => {
    e.preventDefault()
    const projectName = e.target.projectName.value
    addProject(projectName)
  }

  const handleAddTodo = (projectName, todoName) => {
    addTodo(projectName, todoName)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='projectName' />
        <button type='submit'>Submit</button>
      </form>

      <div>
        {
          Object.keys(projects).map(key =>
            <Project
              projectName={projects[key].name}
              projectTodos={projects[key].todos}
              onAddTodo={handleAddTodo}
              key={projects[key].name + Date.now().toString()}
            />)
        }
      </div>
    </div>
  )
}

export default TodoList
