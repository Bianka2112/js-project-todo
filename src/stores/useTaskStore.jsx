import { create } from "zustand"

const initialState = {
  tasks: [
    {
      id: 1,
      taskMsg: "Make a to-do app",
      date: Date.now()
    }
  ]
}

export const useTasksStore = create((set, get) => ({
  ...initialState,
  createTask: (task) => {
    const newTask = {
      id: get().tasks.length > 0 ? get().tasks[0].id + 1 : 1,
      taskMsg: task, 
      date: new Date().toLocaleString()
    }
    set(state => ({tasks: [newTask, ...state.tasks] }))
  }
}))


//   addTask: (task) => set(state => ({tasks: [...state.tasks, task]})),
//   removeTask: (index) => set(state => {
//     const newTasks = [...state.tasks]
//       newTasks.splice(index, 1)
//       return {tasks: newTasks}
//   })
//