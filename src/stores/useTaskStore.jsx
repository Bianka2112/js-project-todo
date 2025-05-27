import { create } from "zustand"

export const useTasksStore = create(set => ({
  tasks: [],
}))


//   addTask: (task) => set(state => ({tasks: [...state.tasks, task]})),
//   removeTask: (index) => set(state => {
//     const newTasks = [...state.tasks]
//       newTasks.splice(index, 1)
//       return {tasks: newTasks}
//   })
//