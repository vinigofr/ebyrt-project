const { MongoClient } = require('mongodb');
require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'ebyrt';
const DB_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true };
 
let db = null;
 
const getConnection = () => {
  return db ? Promise.resolve(db)
    : MongoClient.connect(DB_URL, DB_CONFIG).then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    });
};

module.exports = { getConnection };
