const Router = require('express').Router();

const createTask = require('../controllers/createTask');

const TaskMiddleware = require('../middlewares/index');

Router.post('/create', createTask);

module.exports = Router;
