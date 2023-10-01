import Todo from './Todo.js'

export default function Project(name) {
  const todos = {}
  const addTodo = (name, description) =>
    todos[name] = Todo(name, description)

  const removeTodo = (name) => delete todos[name]


  return {
    get name() { return name },
    set name(value) { name = value },
    get todos() {
      let clone = {}
      for (const key in todos) {
        clone[key] = { ...todos[key] }
      }
      return clone
    },
    addTodo,
    removeTodo
  }
}