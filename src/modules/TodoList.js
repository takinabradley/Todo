import { default as Project } from "./Project";

export default function TodoList() {
  const projects = {}
  const addProject = (name) => projects[name] = Project(name)
  const removeProject = (name) => delete projects[name]

  return {
    get projects() {
      const clone = {}
      for (const key in projects) {
        clone[key] = { ...projects[key] }
      }
      return clone
    },
    addProject,
    removeProject
  }
}