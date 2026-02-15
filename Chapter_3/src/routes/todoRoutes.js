import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/',(req,res) => { //get all to-dos
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userId)
    res.json(todos)
})
router.post('/',(req,res) => { //Accept a to-do
    
})
router.put('/:id',(req,res) => { //Update a to-do
    
})
router.delete('/:id',(req,res) => { //Delete a to-do
    
})

export default router