const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Imports here
const pingRouter = require('../routes/pingRouter');
const taskRouter = require('../routes/taskRouter');
const { errorMiddleware } = require('../middlewares/index');

// Routes here
app.use('/ping', pingRouter);
app.use('/task', taskRouter);

// Error middleware
app.use(errorMiddleware);

module.exports = app;
