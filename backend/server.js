import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { todoRouter } from './todo/todo.router.js'
import { initDb } from './db.js';

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url}`)
    console.log(req?.body)
    next()
})

app.use('/api/todo', todoRouter)

app.use((_req, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.use((err, _req, res, _next) => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
})

const PORT = process.env.USER_PORT || 3000

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(console.error);