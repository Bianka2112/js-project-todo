import { useTasksStore } from "../stores/useTaskStore"

export const TaskItem = ({ task: {taskMsg, id, date, isCompleted} }) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-SE", {month: "short", day: "numeric"})

  const formattedTime = new Date(date)
    .toLocaleTimeString("en-SE", { hour: "2-digit", minute: "2-digit"})

  const toggleCompleted = useTasksStore(state => state.toggleCompleted)

  const handleDelete = useTasksStore(state => state.deleteTask)

  return (
    <li className={`p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 rounded-lg shadow-sm mb-4
      transition transform duration-300 ease-out 
      ${isCompleted ? "grayscale" : "hover:-translate-y-1"}`}
      >
      <p className={`font-medium 
        ${isCompleted 
        ? "line-through text-slate-400" 
        : "text-slate-800"}`}>
        {taskMsg}
      </p>
      <div className="mt-2 flex items-center gap-4">
        <button onClick={() => toggleCompleted(id)}
          className="text-sm px-2 py-1 rounded bg-slate-500 text-white hover:bg-slate-800">
          {isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={() => handleDelete(id)}
          className="text-sm px-2 py-1 rounded bg-amber-700 text-white hover:bg-amber-500">
          Delete
        </button>
        <p className="text-xs text-slate-500 mt-1">{formattedDate} at {formattedTime}</p>
      </div>
    </li>
  )
}