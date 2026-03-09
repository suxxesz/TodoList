import SearchForm from './SearchForm'
import AddTaskForm from "./AddTaskForm"
import ToDoInfo from "./TodoInfo"
import ToDoList from "./ToDolist"
import { useState } from 'react'

const ToDo = () =>  {



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


    const deleteAllTasks = (tasks) => {
            console.log('delete all tasks')
    }
    
    const deleteTask = (id) => {
        console.log('delete task with id: ' + id)
    }
    const toggleTaskState = (taskId , isDone) => {
        console.log(`Задача с id ${taskId} теперь ${isDone ? 'выполнена' : 'не выполнена'}`)
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
        <AddTaskForm onAddTask={addTask} newTaskTitle={newTaskTitle} onNewTaskTitleChange={setNewTaskTitle}/>
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