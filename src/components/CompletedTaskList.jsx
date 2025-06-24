import { useTasksStore } from "../stores/useTaskStore"
import { TaskItem } from "./TaskItem"

export const CompletedTaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const completedTasks = tasks.filter(task => task.isCompleted)
  const taskCount = useTasksStore(state => state.getCompletedCount())

  if (completedTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 px-4 text-slate-500 text-sm italic mt-4 mb-2">
        <p className="italic text-lg sm:text-xl dark:text-slate-300 opacity-80">
          Lets get something ta-done ☑
        </p>
      </div>
    )
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-4">
      <h2 className="text-lg font-semibold mb-2">The Ta-Dones:</h2>
        <ul className="space-y-3">
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </section>
  )
}