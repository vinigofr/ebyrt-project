const Router = require('express').Router();

const TaskController = require('../controllers/index');
const TaskMiddleware = require('../middlewares/index');

Router.post('/create',
  TaskMiddleware.verifyTaskFields,
  TaskController.createTask);

Router.delete('/delete',
  // Depois inserir um middleware de validação do id
  TaskController.deleteTask);

Router.get('/all',
  TaskController.getAllTasks);

module.exports = Router;
