import { useTasksStore } from "../stores/useTaskStore"
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
  const tasks = useTasksStore(state => state.tasks)
  const activeTasks = tasks.filter(task => !task.isCompleted)

  if (activeTasks.length === 0) {
    return (
      <p className="text-slate-500 text-sm italic mt-4 mb-2">
        Nothing to-do... yet.
      </p>
    )
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-4">
      <h2 className="text-lg font-semibold mb-2">My Pending List</h2>
        <ul className="space-y-3 my-4">
          {activeTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </section>
  )
}