const Router = require('express').Router();

const cretateTask = require('../controllers/createTask');

Router.post('/create', cretateTask);

module.exports = Router;
