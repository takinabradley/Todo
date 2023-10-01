import PropTypes from 'prop-types'
export default function Project({ projectName, projectTodos, onAddTodo }) {
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

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectTodos: PropTypes.object.isRequired,
  onAddTodo: PropTypes.func
}