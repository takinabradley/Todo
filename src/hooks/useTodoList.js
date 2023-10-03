import { useState } from "react";
import TodoList from "../modules/TodoList";

export default function useTodoList() {
  const [todoList] = useState(TodoList())
  const [projects, setProjects] = useState(todoList.projects)

  const addProject = (name) => {
    todoList.addProject(name)
    setProjects(todoList.projects)
  }

  const removeProject = (name) => {
    todoList.removeProject(name)
    setProjects(todoList.projects)
  }

  const addTodo = (projectName, ...todoargs) => {
    todoList.projects[projectName].addTodo(...todoargs)
    setProjects(todoList.projects)
  }

  const removeTodo = (projectName, todoName) => {
    todoList[projectName].removeTodo(todoName)
    setProjects(todoList.projects)
  }

  return {
    projects,
    addProject,
    removeProject,
    addTodo,
    removeTodo
  }
}