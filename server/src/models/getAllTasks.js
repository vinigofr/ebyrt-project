const connection = require('./connection').getConnection;

const getAllTasks = async () => {
  const allTasks = await connection()
    .then((db) => db.collection('tasks')
      .find({}).toArray());
  return allTasks;
};

module.exports = getAllTasks;
