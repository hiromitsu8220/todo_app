const ToDoList = require('../models/todolist');

// Display todolist
exports.todolist = function (req, res) {
  ToDoList.find({})
    .exec(function (err, todos) {
      if (err) { return next(err); }
      res.render('index', { title: 'To Do lists!!!', todo_list: todo });
    });
};

exports.deletetodo = function (req, res) {
  var delete_item = Array.isArray(req.body.cbox) ? req.body.cbox : [req.body.cbox];


  ToDoList.find({ item: delete_item }).remove().exec(function () {
    res.render('delete_result', { message: "'" + delete_item.item + "'" + " is deleted from ToDo List" });
  });

};
