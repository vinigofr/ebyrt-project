const Router = require('express').Router();

const cretateTask = require('../controllers/createTask');
const editTask = require('../controllers/editTask');

Router.post('/create', cretateTask);
Router.put('/edit', editTask);

module.exports = Router;
