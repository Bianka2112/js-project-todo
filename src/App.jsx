import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

export const App = () => {
  return (
    <>
    <h1>Lets get To-Do ing...</h1>
    <TaskForm />
    <TaskList />
    </>
  )
}
