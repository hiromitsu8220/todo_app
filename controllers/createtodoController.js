const ToDoList = require('../models/todolist');

exports.create_todo_get = function (req, res) {
  res.render('create_todo', { title: 'Create todo' });
};

exports.create_todo_post = function (req, res) {
  var new_item = new ToDoList(
    {
      item: req.body.item,
      content: req.body.content
    }
  );
  new_item.save(function () {
    res.render('create_result', { message: "'" + new_item.item + "'" + " is added to ToDo List" });
  });

};
