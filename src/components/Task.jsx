import { useState } from "react"

export const Task = () => {
  const [task, setTask] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault()
    setTask("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Next to-do..."
          />
          <button type="submit"> Add Task</button>
      </form>
    </>
  )
}