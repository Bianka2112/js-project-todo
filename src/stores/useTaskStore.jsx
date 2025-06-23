import { create } from "zustand"

const initialState = {
  tasks: [
    {
      id: 1,
      taskMsg: "Make a to-do app",
      date: Date.now(),
      isCompleted: false
    }
  ]
}

export const useTasksStore = create((set, get) => ({
  ...initialState,

  createTask: (task) => {
    const newTask = {
      id: get().tasks.length > 0 ? get().tasks[0].id + 1 : 1,
      taskMsg: task, 
      date: Date.now(),
      isCompleted: false
    }
    set(state => ({tasks: [newTask, ...state.tasks] }))
  },
  
  toggleCompleted: (id) => set((state) => ({ 
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
  })),
  
  getTaskCount: () => get().tasks.filter(task => task.isCompleted).length, 

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  }))
}))
