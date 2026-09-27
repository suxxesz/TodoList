import SearchForm from './SearchForm'
import AddTaskForm from "./AddTaskForm"
import ToDoInfo from "./TodoInfo"
import ToDoList from "./ToDolist"
import Button from './Button'
import { useContext , useMemo} from 'react'
import { TaskContext } from '../context/TaskContext'

const ToDo = () =>  {
    const { firstIncompleteTaskRef, tasks = [] } = useContext(TaskContext)
   
    const isFilled = useMemo(() => {
        return tasks.length > 6 && tasks.some(task => task.isDone)
    }, [tasks])


    return (
        <div className='todo'>
        <AddTaskForm 
        />
            <SearchForm     />
            <ToDoInfo 
                />
                <Button
                onClick={() => {firstIncompleteTaskRef.current?.scrollIntoView({behavior : 'smooth'})}}
                name='Scroll to last incompleted task'
                className={isFilled ? null : 'visually-hidden'}
                >
                </Button>
            <ToDoList/>
        </div>
    )
}
export default ToDo 
