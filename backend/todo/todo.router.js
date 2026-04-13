import { Router } from "express";
import { TodoService } from "./todo.service.js";

const router = Router()

const todoService = new TodoService()

router.post('/api/todo' , (req , res) => {
    const todo = todoService.createTodo(req.body)

    res.status(201).json(todo)
})

export const twitRouter = router