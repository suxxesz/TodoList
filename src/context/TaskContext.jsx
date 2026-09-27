import { createContext , useMemo } from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TaskContext = createContext({});

export const TaskProvider = (props) => { 
    const { children } = props;

    const  {   tasks,
                filteredTasks,
                deleteAllTasks,
                deleteTask,
                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
                toggleTaskState,
         } = useTasks()
         const {firstIncompleteTaskRef , firstIncompleteTaskRefId} = useIncompleteTaskScroll(tasks)

         const value = useMemo(() => {
            return {
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskRefId,
                deleteAllTasks,
                deleteTask,
                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery, 
                newTaskInputRef,
                addTask,
                toggleTaskState,
            } 
         } , [{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskRefId,
                deleteAllTasks,
                deleteTask,
                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
                toggleTaskState,
            }])
    return (
        <TaskContext.Provider
            value={value}
        >
            {children}
        </TaskContext.Provider>
    );
};