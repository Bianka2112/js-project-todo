import { useTasksStore } from "../stores/useTaskStore"
import { useState } from "react"

export const TaskItem = ({ task: {taskMsg, id, date, isCompleted} }) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-SE", {month: "short", day: "numeric"})

  const formattedTime = new Date(date)
    .toLocaleTimeString("en-SE", { hour: "2-digit", minute: "2-digit"})

  const [message, setMessage] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const toggleCompleted = useTasksStore(state => state.toggleCompleted)
  const triggerPulse = useTasksStore(state => state.triggerPulseTab)
  
  const handleToggle = () => {
    setMessage(isCompleted ? "⏎ Task pending." : "✅ Task completed!")
    setIsAnimating(true)
    setTimeout(() => {
      toggleCompleted(id)
      triggerPulse(isCompleted ? "todo" : "completed")
    }, 600)
    setTimeout(() => setMessage(null), 3500)
  }

  const deleteConfirmed = useTasksStore(state => state.deleteTask)
  const handleDelete = () => {
    setMessage("🗑️ Task deleted")
    setIsAnimating(true)
    setTimeout(() =>{
      deleteConfirmed(id)
    }, 600)
    setTimeout(() => setMessage(null), 2000)
  }

  return (
    <>
      <li className={`p-4 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 border border-slate-200 rounded-lg shadow-sm 
        transition transform duration-300 ease-in-out 
        ${isCompleted ? "grayscale" : ""}
        ${isAnimating ? "slide-out" : ""}`} 
        >
        <p className={`font-medium 
          ${isCompleted 
          ? "line-through text-slate-400" 
          : "text-slate-800 dark:text-slate-200"}`}>
          {taskMsg}
        </p>
        <div className="mt-2 flex items-center gap-4">
          <button onClick={handleToggle}
            className="text-sm px-2 py-1 rounded bg-slate-500 text-white hover:bg-slate-800">
            {isCompleted ? "Undo" : "Complete"}
          </button>
          <button onClick={handleDelete}
            className="text-sm px-2 py-1 rounded bg-amber-700 text-white hover:bg-amber-500">
            Delete
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{formattedDate} at {formattedTime}</p>
        </div>
      </li>
      {message && (
      <div className="py-1 items-center bg-indigo-100 dark:bg-indigo-500 text-indigo-900 dark:text-indigo-100 rounded shadow transition-opacity animate-fade-in">
        {message}
      </div>
      )}
    </>
  )
}