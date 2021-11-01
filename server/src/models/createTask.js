const connection = require('./connection');

const createTask = async (title, description, status) => {
  const { insertedId } = await connection.then((db) => db.collection('tasks').insertOne({
    title, description, status, createdAt: new Date(),
  }));

  return {
    _id: insertedId,
    title,
    description,
    status,
    createdAt: new Date(),
  }
};

module.exports = createTask;
