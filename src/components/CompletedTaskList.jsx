import { useTasksStore } from "../stores/useTaskStore"
import { TaskItem } from "./TaskItem"

export const CompletedTaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const completedTasks = tasks.filter(task => task.isCompleted)
  const taskCount = useTasksStore(state => state.getCompletedCount())

  if (completedTasks.length === 0) {
    return (
      <p className="text-slate-500 text-sm italic">
        Lets get something checked off ☑
      </p>
    )
  }

  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-2">The Done List ✅</h2>
        <ul className="space-y-3">
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </section>
  )
}