import { CompletedTaskList } from "./components/CompletedTaskList"
import Dashboard from "./components/Dashboard"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import Todo from "./components/Todo"

export const App = () => {
  return (
    <div >
    {/* // className="bg-stone-900 grid py-4 min-h-screen"> */}
      <h1 className="">Lets get To-Do ing...</h1>
      {/* <Todo /> */}
      <Dashboard />
      <TaskForm />
      <TaskList />
      <CompletedTaskList />
    </div>
  )
}
