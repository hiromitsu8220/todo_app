const express = require('express');
const router = express.Router();

const create_todo_controller = require('../controllers/createtodoController');

router.get('/create_todo', create_todo_controller.create_todo_get);

router.post('/create_todo', create_todo_controller.create_todo_post);

module.exports = router;
