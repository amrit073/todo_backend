const express = require('express')
const app = express()
const myRoutes = require('./routes/route')
const mongoose = require('mongoose')
require('dotenv').config()

app.use('/api/v1', myRoutes)

app.get('/', (req, res)=>{
	res.send('home')
})


const mongoConnect = () => {
	dburl = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@todo-cluster.xpurb.mongodb.net/TodosDatabase?retryWrites=true&w=majority` //url?
	mongoose.connect(dburl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, (err) => {
		if (err) return console.log(err)
		app.listen(process.env.PORT || 3000, () => {
			console.log('started listenig at port ');
 			
		})
	})
}

mongoConnect()

