const express = require('express');
const router = express.Router();

const todolist_controller = require('../controllers/todolistController');

router.get('/', todolist_controller.todolist);
module.exports = router;
