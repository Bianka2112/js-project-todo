import { useTasksStore } from "../stores/useTaskStore"
import { TaskComp } from "./TaskComp"


export const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)

  if (tasks.length === 0) return <p>Nothing to-do... yet.</p>

  return (
    <>
      <h2>My List</h2>
        <ul>
          {tasks.map((task) => (
            <TaskComp key={task.id} task={task} />
          ))}
        </ul>
    </>
  )
}