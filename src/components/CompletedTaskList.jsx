import { useTasksStore } from "../stores/useTaskStore"
import { TaskComp } from "./TaskComp"


export const CompletedTaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const completedTasks = tasks.filter(task => task.isCompleted)

  if (completedTasks.length === 0) return <p>Lets get something checked off ☑</p>

  return (
    <>
      <h2>The Done List ✅</h2>
        <ul>
          {completedTasks.map(task => (
            <TaskComp key={task.id} task={task} />
          ))}
        </ul>
    </>
  )
}