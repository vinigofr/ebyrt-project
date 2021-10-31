const express = require('express');

const app = express();
app.use(express.json());
const pingRouter = require('../routes/pingRouter');

// Imports here
//

// Rotas
app.use('/ping', pingRouter);

// Middleware de erro
//

module.exports = app;
