const express = require('express')
const app = express()
const myRoutes = require('./routes/route')
const mongoose = require('mongoose')


app.use('/api/v1', myRoutes)

app.get('/', (req, res)=>{
	res.send('home')
})


const mongoConnect = () => {
	dburl = `` //url?
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

