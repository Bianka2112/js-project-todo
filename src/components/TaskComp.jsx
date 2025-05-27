
export const TaskComp = ({ task: {taskMsg, id, date} }) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-SE", {month: "short", day: "numeric"})

  const formattedTime = new Date(date)
    .toLocaleTimeString("en-SE", { hour: "2-digit", minute: "2-digit"})

  return (
    <div className="task" id={id}>
      <p>{taskMsg}</p>
      <p>{formattedDate} at {formattedTime}</p>
      <button>Delete</button>
      <button>Complete</button>
    </div>
  )
}