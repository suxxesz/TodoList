import Button from "./Button"
import Field from "./Field"

const AddTaskForm = (props) => {
    const {onAddTask , newTaskTitle , onNewTaskTitleChange } = props

    const onSubmit = (event) => {
        event.preventDefault()
        onAddTask()
    }
    return (
        <>
        <form className="todo__form" onSubmit={onSubmit}>
        <Field className="todo__field" id="new-task" label="New Task" type="text"
        value={newTaskTitle}
        onChange={(event) => onNewTaskTitleChange(event.target.value)}
        />
        <Button classname = '' name='Add'  type="submit"/>
        </form>
        </>
    )
}
export default AddTaskForm