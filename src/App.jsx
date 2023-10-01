import useTodoList from './hooks/useTodoList'

function Project({ projectName, projectTodos, onAddTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo(projectName, e.target.todoName.value)
  }

  return (
    <div className="Project">
      <div className="Project__name">{projectName}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='todoName' />
        <button type='submit'>Submit</button>
      </form>
      <div className="Project__todos">
        {Object.keys(projectTodos).map(todo => {
          return <div key={projectTodos[todo].title + Date.now().toString()}>{projectTodos[todo].title}</div>
        })}
      </div>
    </div>
  )
}
function App() {
  const { projects, addProject, removeProject, addTodo, removeTodo } = useTodoList()

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

export default App
