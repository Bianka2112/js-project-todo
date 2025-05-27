import { useState } from "react"

export const Task = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  
  const handleSubmit = e => {
    e.preventDefault()
    if (task.trim() === "") return

    setTasks(prev => [...prev, task])
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

      <h2>My List</h2>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  )
}