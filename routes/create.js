var express = require('express');
var router = express.Router();

var create_todo_controller = require('../controllers/createtodoController');

router.get('/create', create_todo_controller.create_todo_get);

module.exports = router;
