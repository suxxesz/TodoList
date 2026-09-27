import { useContext } from "react"
import Button from "./Button"
import Field from "./Field"
import { TaskContext } from "../context/TaskContext"
import { useState } from "react"

const AddTaskForm = () => {
    const {
        addTask , 
        newTaskTitle , 
        setNewTaskTitle  , 
        newTaskInputRef 
    } = useContext(TaskContext)

    const [error, setError] = useState('')

    const clearTaskTitle =  newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearTaskTitle.length === 0 

    const onSubmit = (event) => {
        event.preventDefault()

        if(!isNewTaskTitleEmpty){
        addTask(clearTaskTitle)
    }
    }
    const onChangeValidity = (event) => {
        const {value} =event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0


         setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'The task cannot be empty' : '')
    }
    return (
        <>
        <form className="todo__form" onSubmit={onSubmit}>
        <Field 
        className="todo__field" 
        id="new-task" 
        label="New Task" 
        type="text"
        value={newTaskTitle}
        onChange={onChangeValidity}
        ref={newTaskInputRef}
        error={error}
        />
        <Button classname = '' name='Add'  type="submit" isDisabeled={isNewTaskTitleEmpty}/>
        </form>
        </>
    )
}
export default AddTaskForm