import ToDoItem from "./ToDoItem"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const ToDoList = () => {

    const {
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskRefId
    } = useContext(TaskContext)

   const hasTasks = (tasks ?? []).length > 0
const hasntFilteredTasks = (filteredTasks ?? []).length === 0

    if (!hasTasks) {
        return <div className="todo__empty-message">Now your list is empty. Add new hint!👌</div>
    }

    if (hasTasks && hasntFilteredTasks) {
        return <div className="todo__empty-message">Tasks not found👌</div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <ToDoItem 
                    key={task.id}
                    className="todo__item"
                    {...task}
                    itemRef={
                        task.id === firstIncompleteTaskRefId
                            ? firstIncompleteTaskRef
                            : null
                    }
                />
            ))}
        </ul>
    )
}

export default ToDoList