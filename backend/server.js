import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { twitRouter } from './todo/todo.router.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const main = () => {
    app.use('/api/todo', () => {
        twitRouter
    })

    app.all('*' , (req , res) => {
        res.status(404).json({message: 'Not found'})
    })

    const PORT = process.env.USER_PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    })
    
}

main()