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
    setTimeout(() => setMessage(null), 1000)
    setTimeout(() => {
      toggleCompleted(id)
      triggerPulse(isCompleted ? "todo" : "completed")
    }, 1000)
  }

  const deleteConfirmed = useTasksStore(state => state.deleteTask)
  const handleDelete = () => {
    setMessage("🗑️ Task deleted")
    setIsAnimating(true)
    setTimeout(() => setMessage(null), 1000)
    setTimeout(() =>{
      deleteConfirmed(id)
    }, 1200)
  }

  return (
    <>
    {message && (
      <div className="mx-auto w-fit p-2 items-center bg-indigo-200 dark:bg-indigo-100 text-indigo-800 dark:text-slate-800 rounded shadow-lg/50 grayscale-0 transition-opacity animate-fade-in">
        {message}
      </div>
      )}
      <li className={`p-4 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 border border-slate-200 rounded-lg shadow-sm 
        transition transform duration-300 ease-in-out 
        ${isCompleted ? "grayscale" : ""}
        ${isAnimating ? "slide-out" : ""}`} 
        >
        <p className={`py-1 font-medium 
          ${isCompleted 
          ? "line-through text-slate-400" 
          : "text-slate-800 dark:text-slate-200"}`}>
          {taskMsg}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <button onClick={handleToggle}
            className="text-sm px-2 py-1 rounded bg-slate-500 text-white hover:bg-slate-800">
            {isCompleted ? "Undo" : "Complete"}
          </button>
          <button onClick={handleDelete}
            className="text-sm px-2 py-1 rounded bg-amber-700 text-white hover:bg-amber-500">
            Delete
          </button>
          <p className="sm:w-auto xs:ml-auto xs:text-right text-xs text-slate-500 dark:text-slate-400 mt-1">{formattedDate} at {formattedTime}</p>
        </div>
      </li>
    </>
  )
}