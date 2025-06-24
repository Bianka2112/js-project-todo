import { useState, useEffect } from "react"
import { useTasksStore } from "../stores/useTaskStore"
import { TaskItem } from "./TaskItem"
import { motivationalQuotes } from "./quotes"

export const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const activeTasks = tasks.filter(task => !task.isCompleted)
  const [quote, setQuote] = useState("")

useEffect(() => {
  const interval = setInterval(() => {
    const random = Math.floor(Math.random() * motivationalQuotes.length)
    setQuote(motivationalQuotes[random])
  }, 8000)
  return () => clearInterval(interval)
}, [])

  if (activeTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 px-4 text-slate-500 text-sm italic mt-4 mb-2">
        <p className="italic text-lg sm:text-xl dark:text-slate-300 opacity-80">"{quote}"</p>
      </div>
    )
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-4">
      <h2 className="text-lg font-semibold mb-2">My Pending List</h2>
        <ul className="space-y-3 my-4">
          {activeTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </section>
  )
}