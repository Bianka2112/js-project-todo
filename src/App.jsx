import AppLayout from "./components/AppLayout"
import Dashboard from "./components/Dashboard"
import { Tabs } from "./components/Tabs"
import { TaskForm } from "./components/TaskForm"

export const App = () => {
  return (
    <AppLayout>
        <TaskForm />
        <Tabs />
        <Dashboard />
      </AppLayout>
  )
}
