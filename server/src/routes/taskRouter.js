const Router = require('express').Router();

const TaskController = require('../controllers/index');
const TaskMiddleware = require('../middlewares/index');

Router.post('/create',
  TaskMiddleware.verifyTaskFields,
  TaskController.createTask);

module.exports = Router;
