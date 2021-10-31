const express = require('express');

const app = express();

app.use(express.json());

// Aqui nesse espaço em branco serão implementados 

const { MongoClient } = require("mongodb");
const DB_URL= 'mongodb://127.0.0.1:27017';
const DB_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true };

const client = new MongoClient(DB_URL, DB_CONFIG);
 
let db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
});
},
 
  getDb: function () {
    return db;
  },
};