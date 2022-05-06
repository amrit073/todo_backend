const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imagesSchema = new Schema({
	image_id : String,
	data: Buffer
})

const todoSchema = new Schema({

todo_id : String,
user_id : String,
title: String,
description: String,
tags : Array,
isCompleted : Boolean,
images: [imagesSchema]

}, {timestamps:true})





const todo = mongoose.model('todo', todoSchema)

module.exports = todo
