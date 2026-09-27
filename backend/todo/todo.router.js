import { Router } from 'express';
import { TodoService } from './todo.service.js';

export const todoRouter = Router();
const todoService = new TodoService();

todoRouter.get('/', async (req, res, next) => {
    try {
        const todos = await todoService.getAll();
        res.json(todos);
    } catch (err) {
        next(err);
    }
});

todoRouter.post('/', async (req, res, next) => {
    try {
        const newTodo = await todoService.createTodo(req.body);
        res.status(201).json(newTodo);
    } catch (err) {
        next(err);
    }
});

todoRouter.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { isDone } = req.body;
        
        const updatedTodo = await todoService.toggleTodo(id, isDone);
        res.json(updatedTodo);
    } catch (err) {
        next(err);
    }
});

todoRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await todoService.deleteTodo(id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});