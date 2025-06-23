import { useState } from "react"

import { useTasksStore } from "../stores/useTaskStore"

export const TaskForm = () => {
  const [taskMsg, setTaskMsg] = useState("")
  const createTask = useTasksStore(state => state.createTask)
  const [error, setError] = useState()
  
  const handleSubmit = e => {
    e.preventDefault()
    if (taskMsg.trim() === "") {
      setError("Please enter a task.")
      return
    }
    createTask(taskMsg)
    setTaskMsg("")
    setError("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={taskMsg}
          onChange={e => setTaskMsg(e.target.value)}
          placeholder="Next to-do..."
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button type="submit"> Add Task</button>
      </form>
    </>
  )
}