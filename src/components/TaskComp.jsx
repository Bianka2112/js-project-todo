import { useTasksStore } from "../stores/useTaskStore"



export const TaskComp = ({ task: {taskMsg, id, date, isCompleted} }) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-SE", {month: "short", day: "numeric"})

  const formattedTime = new Date(date)
    .toLocaleTimeString("en-SE", { hour: "2-digit", minute: "2-digit"})

  const toggleCompleted = useTasksStore(state => state.toggleCompleted)

  return (
    <div className="task" id={id}>
      <p>{taskMsg}</p>
      <p>{formattedDate} at {formattedTime}</p>
      <button>Delete</button>
      <button onClick={() => toggleCompleted(id)}>{isCompleted ? "Undo" : "Complete"}</button>
    </div>
  )
}