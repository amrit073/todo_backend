const todo = require('../models/models')


const getAllTodos = (req, res) =>{
res.send('datas')	
}


const saveTodo = (req, res) =>{
res.send('saved')
}


module.exports = {getAllTodos, saveTodo} 