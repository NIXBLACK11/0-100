const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://NIXBLACK:nixblack11@cluster0.tk5azpj.mongodb.net/todoApp")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}