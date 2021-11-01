const { ObjectId } = require('mongodb');
const connection = require('./connection').getConnection;

const deleteTask = async (id) => {
  const { value: deletedTask } = await connection()
    .then((db) => db.collection('tasks').findOneAndDelete({ _id: ObjectId(id) }));
  return deletedTask;
};

module.exports = deleteTask;
