import { db } from '../db.js';
import { randomUUID } from 'crypto';

export class TodoService {
    async getAll() {
        const result = await db.execute('SELECT * FROM todos');
        return result.rows.map(row => ({
            id: row.id,
            title: row.title,
            isDone: Boolean(row.isDone)
        }));
    }

    async createTodo(data) {
        const id = randomUUID();
        const isDone = Boolean(data.isDone);

        await db.execute({
            sql: 'INSERT INTO todos (id, title, isDone) VALUES (?, ?, ?)',
            args: [id, data.title, isDone ? 1 : 0]
        });

        return { id, title: data.title, isDone };
    }

    async toggleTodo(id, isDone) {
        await db.execute({
            sql: 'UPDATE todos SET isDone = ? WHERE id = ?',
            args: [isDone ? 1 : 0, id]
        });

        return { id, isDone };
    }

    async deleteTodo(id) {
        await db.execute({
            sql: 'DELETE FROM todos WHERE id = ?',
            args: [id]
        });
    }
}