const ToDoList = require('../models/todolist');

// Display todolist
exports.todolist = function (req, res) {
  ToDoList.find({})
    .exec(function (err, todos) {
      if (err) { return next(err); }
      res.render('index', { title: 'To Do lists!!!',todo_list: todos });
    });
};
