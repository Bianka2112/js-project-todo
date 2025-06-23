import AppLayout from "./components/AppLayout"
import { CompletedTaskList } from "./components/CompletedTaskList"
import Dashboard from "./components/Dashboard"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

export const App = () => {
  return (
    <AppLayout>
      {/* // <h1 className="">Lets get To-Do ing...</h1> */}
        <TaskForm />
        <TaskList />
        <CompletedTaskList />
        <Dashboard />
      </AppLayout>
  )
}
