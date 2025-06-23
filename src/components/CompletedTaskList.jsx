import { useTasksStore } from "../stores/useTaskStore"
import { TaskComp } from "./TaskComp"

export const CompletedTaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const completedTasks = tasks.filter(task => task.isCompleted)
  const taskCount = useTasksStore(state => state.getTaskCount())

  if (completedTasks.length === 0) return <p>Lets get something checked off ☑</p>

  return (
    <>
      <h2>The Done List ✅</h2>
      { taskCount > 0 && (
        <p>You completed {taskCount}! Woohoo! 🥳</p>
      )}
        <ul>
          {completedTasks.map(task => (
            <TaskComp key={task.id} task={task} />
          ))}
        </ul>
    </>
  )
}