import ToDoItem from "./ToDoItem"

const ToDoList = ( props ) => {

    const {tasks = [] , onDelete , onToggleTaskState} = props

    if(tasks.length === 0) {
        return <div className="todo__empty-message">Now your list is empty. Add new hint!👌</div>
    }
    return (
        <>
        <ul className="todo__list">
        {tasks.map((task) => (
          <ToDoItem 
            key={task.id} 
            className="todo__item"
            {...task}
            onDelete={onDelete}
            onToggleTaskState={onToggleTaskState}
        />
        ))}
      </ul>
        </>
    )
}
export default ToDoList