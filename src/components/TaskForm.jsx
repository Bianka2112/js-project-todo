import { useState } from "react"
import { useTasksStore } from "../stores/useTaskStore"

export const TaskForm = () => {
  const [taskMsg, setTaskMsg] = useState("")
  const createTask = useTasksStore(state => state.createTask)
  
  const handleSubmit = e => {
    e.preventDefault()
    if (taskMsg.trim() === "") return
    createTask(taskMsg)
    setTaskMsg("")
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
          <button type="submit"> Add Task</button>
      </form>
    </>
  )
}