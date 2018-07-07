const ToDoList = require('../models/todolist');

exports.create_todo_get = function (req, res) {
  res.render('create', { title: 'Create todo' });
};

exports.create_todo_post = function (req, res) {
  ToDoList.insertOne(req.body);
};
