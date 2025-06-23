import { useTasksStore } from "../stores/useTaskStore"
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const activeTasks = tasks.filter(task => !task.isCompleted)

  if (tasks.length === 0) {
    return (
      <p className="text-slate-500 text-sm italic mt-4">
        Nothing to-do... yet.
      </p>
    )
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-4">
      <h3 className="text-lg font-semibold mb-2">My List</h3>
        <ul className="space-y-3">
          {activeTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </section>
  )
}