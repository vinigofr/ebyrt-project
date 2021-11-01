const Router = require('express').Router();

const cretateTask = require('../controllers/createTask');
const editTaskInformation = require('../controllers/editTask');

Router.post('/create', cretateTask);
Router.put('/edit', editTaskInformation);

module.exports = Router;
