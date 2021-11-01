const express = require('express');

const app = express();
app.use(express.json());

// Imports here
const pingRouter = require('../routes/pingRouter');
const taskRouter = require('../routes/taskRouter');

// Routes here
app.use('/ping', pingRouter);
app.use('/task', taskRouter);

// Error middleware
app.use(require('../middlewares/index').errorMiddleware);

module.exports = app;
