const todo = require('../models/models')


const getAllTodos = (req, res) =>{
res.send('datas')	
}


const saveTodo = (req, res) =>{
res.send('saved')
}

const deleteTodo= (req, res)=>{

}

const changeDate= (req, res)=>{

}

const completeTodo= (req, res)=>{

}

const editTodo= (req, res)=>{

}


module.exports = {getAllTodos, saveTodo , deleteTodo, changeDate , completeTodo, editTodo}