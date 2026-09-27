import ToDo from "./components/ToDo"
import { TaskProvider } from "./context/TaskContext"


const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <TaskProvider>
      <ToDo />
      </TaskProvider>
    </div>
  )
}

export default App
