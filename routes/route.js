const router = require('express').Router()
const {getAllTodos, saveTodo} = require('../controllers/allreq')


router.get('/', getAllTodos) // Get all todos of users
router.post('/save', saveTodo) // Save submitted todo


module.exports = router
