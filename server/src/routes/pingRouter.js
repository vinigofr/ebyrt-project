const express = require('express');

const Router = express.Router();


Router.get('/', (req, res) => {
  res.status(200).send('pong');
});

module.exports = Router;