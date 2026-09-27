import { memo, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { highlightCaseInsensitive } from '../utils/highlight'

const ToDoItem = (props) => {
  const {
    className = '',
    id,
    isDone,
    title,
    itemRef 
  } = props

  const {
    deleteTask,
    toggleTaskState,
    searchQuery
  } = useContext(TaskContext)

  const highlightedTitle = highlightCaseInsensitive(title, searchQuery)

  return ( 
    <li className={`todo-item ${className}`} ref={itemRef}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) => toggleTaskState(id, event.target.checked)}
      />

      <label
        className="todo-item__label"
        htmlFor={id}
      >
        <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
      </label>

      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  )
}

export default memo(ToDoItem)