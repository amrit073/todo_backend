const router = require('express').Router()
const {getAllTodos, saveTodo , deleteTodo, changeDate , completeTodo, editTodo} = require('../controllers/allreq')


router.get('/', getAllTodos) // Get all todos of users
router.post('/add', saveTodo) // add submitted todo
router.get('/delete:id' ,deleteTodo)
router.post('/change-date', changeDate)
router.get('/completed:id', completeTodo)
router.post('/edit', editTodo)

module.exports = router
