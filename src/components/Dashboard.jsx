import { useTasksStore } from "../stores/useTaskStore"

const Dashboard = () => {
  const total = useTasksStore(state => state.tasks.length)
  const completed = useTasksStore(state => state.getCompletedCount())
  const pending = useTasksStore(state => state.getPendingCount())

  return (
    <section className="p-4 mb-4 bg-gray-100 dark:bg-slate-700 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">📋 Your Task Overview</h2>
      <p>Total tasks: {total}</p>
      <p>✅ Completed: {completed}</p>
      <p>🕒 Remaining: {pending}</p>

      {total === 0 && <p className="italic mt-2">Start by adding your first task!</p>}
      {total > 0 && pending === 0 && <p className="mt-2 text-green-600 font-medium">You're all caught up! 🎉</p>}
    </section>
  )
}

export default Dashboard