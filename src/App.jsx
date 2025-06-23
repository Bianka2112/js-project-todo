import AppLayout from "./components/AppLayout"
import Dashboard from "./components/Dashboard"
import { Tabs } from "./components/Tabs"
import { TaskForm } from "./components/TaskForm"

// import { CompletedTaskList } from "./components/CompletedTaskList"
// import { TaskList } from "./components/TaskList"

export const App = () => {
  return (
    <AppLayout>
        <TaskForm />
        <Tabs />
        <Dashboard />
      </AppLayout>
  )
}
