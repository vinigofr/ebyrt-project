const { ObjectId } = require('mongodb');
const connection = require('./connection').getConnection;

const getTaskById = (id) => {
  const task = connection().then((db) => db.collection('tasks').findOne({ _id: ObjectId(id) }));
  return task;
};

module.exports = getTaskById;
