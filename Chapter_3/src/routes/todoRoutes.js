import express from 'express'
import db from '../db.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', authMiddleware, (req, res) => {
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userId)
    res.json(todos)
})
router.post('/', authMiddleware, (req, res) => {
    const { text } = req.body

    const insertTodo = db.prepare(
        'INSERT INTO todos (text, user_id) VALUES (?, ?)'
    )

    insertTodo.run(text, req.userId)

    res.json({ success: true })
})
router.put('/:id',(req,res) => { //Update a to-do
    
})
router.delete('/:id',(req,res) => { //Delete a to-do
    
})

export default router