const TaskModel = require('../models/index');
const { status, error } = require('../api/schemas');

const createTask = async (title, description) => {
  try {
    const task = await TaskModel.CreateTask(title, description);
    return task;
  } catch (e) {
    return { err: {
      status: status.internalServerError, message: error.serverError,
    } };
  }
};

module.exports = createTask;
