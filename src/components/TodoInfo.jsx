import { memo , useContext, useMemo } from "react"
import { TaskContext } from "../context/TaskContext"

const ToDoInfo = ( ) => { 
 
     const {
      tasks = [] , deleteAllTasks , searchQuery
     } = useContext(TaskContext)

     const total = tasks.length
     const hasTasks = total > 0
     const countOfTasks = useMemo(() => {
             return tasks.filter(t => t.isDone).length
         } , [tasks , searchQuery])

    
     return  (
        <> 
        <div className="todo__info">
        <div className="todo__total-tasks">Done: {countOfTasks}  from {total}</div>
       { hasTasks && ( 
        <button 
        className="todo__delete-all-button"
        type="button"
        onClick={deleteAllTasks}
        >
          Delete all
        </button>
          )}
      </div>
      </>
     )
}
export default memo(ToDoInfo)
