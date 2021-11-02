const connection = require('./connection').getConnection;

const createTask = async (title, description) => {
  const { insertedId } = await connection().then((db) => db.collection('tasks').insertOne({
    title,
    description,
    status: 'pendente',
    createdAt: new Date(),
  }));

  return {
    _id: insertedId,
    title,
    description,
    status: 'pendente',
    createdAt: new Date(),
  };
};

module.exports = createTask;
