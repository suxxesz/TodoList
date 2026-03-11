import SearchForm from './SearchForm'
import AddTaskForm from "./AddTaskForm"
import ToDoInfo from "./TodoInfo"
import ToDoList from "./ToDolist"
import { useState , useEffect, use} from 'react'

const ToDo = () =>  {
    useEffect(() => {
        console.log('ToDo component mounted')
        return () => {
            console.log('ToDo component unmounted')
        }
    } , [])


    const [tasks, setTasks] = useState([
        {
            id: crypto.randomUUID() ,
            title: 'Убрать унитаз' , 
            isDone: Math.random() < 0.5 , 
        } , 
        {
            id: crypto.randomUUID() ,
            title: 'Покормить кошку' , 
            isDone: Math.random() > 0.5 , 
        } , 
        {
            id: crypto.randomUUID() ,
            title: 'Купить сахара' , 
            isDone: Math.random() > 0.5 , 
        } 
    ]
)
    const [newTaskTitle, setNewTaskTitle] = useState('')


    const deleteAllTasks = () => {
        const confirmDelete = window.confirm('Вы уверены, что хотите удалить все задачи?')
        if(confirmDelete){ setTasks([])}
    }
    
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    const toggleTaskState = (taskId , isDone) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t , isDone} : t))
    }
    const filterTasks = (query) => {
        console.log('filter tasks with query: ' + query)
    }
    const addTask = () => {
        if(newTaskTitle.trim().length > 0 ) {
        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString() , 
            title: newTaskTitle , 
            isDone : false , 
        }
        setTasks([...tasks , newTask])
        setNewTaskTitle('')
    }
    }
    return (
        <> 
        <AddTaskForm 
        onAddTask={addTask} 
        newTaskTitle={newTaskTitle} 
        setNewTaskTitle={setNewTaskTitle}
        />
            <SearchForm onSearchInput={filterTasks}/>
            <ToDoInfo 
                total={tasks.length}
                done={tasks.filter(t => t.isDone).length}
                onDeleteAll={() => deleteAllTasks(tasks)}
                />
            <ToDoList tasks={tasks} 
            onDelete={(id) => deleteTask(id)}
             onToggleTaskState={toggleTaskState} />
        </>
    )
}
export default ToDo 