const Todo = require("../models/Task");

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    if(todos.length > 0) {
        res.json(todos);
    } else {
        res.json({message: "No todo found"});
    }
};

exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save();

    res.status(201).json(newTodo);
};

exports.updateTodo = async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(updated);
};

exports.deleteTodo = async (req, res) => {
    const deleted = await Todo.findByIdAndDelete(req.params.id);

    res.status(204).send(deleted);
};