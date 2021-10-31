const express = require('express');

const app = express();
app.use(express.json());

// Imports here
//

// Rotas
app.use('fake route', 'route index');

// Middleware de erro
//

module.exports = app;
