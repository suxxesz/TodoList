import { useCallback, useRef, useEffect, useMemo, useState, useReducer } from 'react';
import { taskAPI } from '../api/taskAPI';

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': {
            return Array.isArray(action.tasks) ? action.tasks : state;
        }
        case 'ADD': {
            return [...state, action.task];
        }
        case 'TOGGLE_COMPLETE': {
            return state.map((task) =>
                task.id === action.id ? { ...task, isDone: action.isDone } : task
            );
        }
        case 'DELETE': {
            return state.filter(({ id }) => id !== action.id);
        }
        case 'DELETE_ALL': {
            return [];
        }
        default: {
            return state;
        }
    }
};

const useTasks = () => {
    const { getAll, add, delete: deleteTaskAPI, toggleState, deleteAll } = taskAPI;

    const [tasks, dispatch] = useReducer(tasksReducer, []);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const newTaskInputRef = useRef(null);

    const deleteAllTasks = useCallback(() => {
        if (window.confirm('Вы уверены, что хотите удалить все задачи?')) {
            deleteAll(tasks.map((t) => t.id))
                .then(() => dispatch({ type: 'DELETE_ALL' }))
                .catch((error) => console.error('Error deleting all tasks:', error));
        }
    }, [deleteAll, tasks]);

    const deleteTask = useCallback(async (taskId) => {
        try {
            await deleteTaskAPI(taskId);
            dispatch({ type: 'DELETE', id: taskId });
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }, [deleteTaskAPI]);

    const toggleTaskState = useCallback((taskId, nextIsDone) => {
        toggleState(taskId, nextIsDone)
            .then(() => {
                dispatch({ type: 'TOGGLE_COMPLETE', id: taskId, isDone: nextIsDone });
            })
            .catch((error) => console.error('Error toggling task state:', error));
    }, [toggleState]);

    const addTask = useCallback(async (title) => {
        if (!title.trim()) return;
        const newTask = { title, isDone: false };
        try {
            const createdTask = await add(newTask);
            dispatch({ type: 'ADD', task: createdTask });
            setNewTaskTitle('');
            setSearchQuery('');
            newTaskInputRef.current?.focus();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }, [add]);

    const filteredTasks = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return query
            ? tasks.filter(({ title }) => title.toLowerCase().includes(query))
            : tasks;
    }, [searchQuery, tasks]);

    useEffect(() => {
        newTaskInputRef.current?.focus();
        getAll()
            .then((serverTasks) => {
                dispatch({ type: 'SET_ALL', tasks: serverTasks });
            })
            .catch((error) => console.error('Error fetching tasks:', error));
    }, [getAll]);

    return {
        tasks,
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
    };
};

export default useTasks;