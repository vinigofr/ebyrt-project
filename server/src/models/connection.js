const { MongoClient } = require('mongodb');
require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const REMOTE_URL = `mongodb+srv://vinigofr:${process.env.PASSWORD_DB}@viniciusprojects.whgqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'ebyrt';
const DB_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true };

let db = null;

const getConnection = () => (db ? Promise.resolve(db)
  : MongoClient.connect(REMOTE_URL, DB_CONFIG).then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = { getConnection };
