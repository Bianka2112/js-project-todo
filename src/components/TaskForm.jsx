import { useState } from "react"

import { useTasksStore } from "../stores/useTaskStore"

export const TaskForm = () => {
  const [taskMsg, setTaskMsg] = useState("")
  const createTask = useTasksStore(state => state.createTask)
  const [error, setError] = useState()
  
  const handleSubmit = e => {
    e.preventDefault()
    if (taskMsg.trim() === "") {
      setError("Cannot add an empty task.")
      return
    }
    createTask(taskMsg)
    setTaskMsg("")
    setError("")
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <label htmlFor="taskInput" className="sr-only">Add new task</label>
          <input
            id="taskInput"
            type="text"
            value={taskMsg}
            onChange={e => {
              setTaskMsg(e.target.value)
              if (error) setError("")
            }}
            placeholder="Next on the list..."
            className="w-full p-2 border rounded resize-none dark:text-slate-600"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button type="submit" className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-indigo-400 disabled:bg-gray-300">
            Add Task
          </button>
      </form>
  )
}