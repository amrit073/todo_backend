const todo = require('../models/models')


const getAllTodos = (req, res) => {
	todo.find({}, {}, (err, result) => {
		if (err) return console.log(err);
		console.log(result)
		res.send(result)
	})

}


const saveTodo = (req, res) => {
	const { todo_id, user_id, title, description, tags, isCompleted, image_id, data } = req.body
	const to_add = todo({
		todo_id,
		user_id,
		title,
		description,
		tags,
		isCompleted,
		images: {
			image_id,
			data
		}
	})

	to_add.save((err, result) => {
		if (err) return console.log(err);
		console.log(result)
		res.send(result)
	})
}

const deleteTodo = (req, res) => {

}

const changeDate = (req, res) => {

}

const completeTodo = (req, res) => {

}

const editTodo = (req, res) => {

}


module.exports = { getAllTodos, saveTodo, deleteTodo, changeDate, completeTodo, editTodo }