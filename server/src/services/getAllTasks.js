const TaskModel = require('../models/index');
const { status, error } = require('../api/schemas');

const getAllTasks = async () => {
  try {
    const tasks = await TaskModel.getAllTasks();
    return tasks;
  } catch (e) {
    return {
      err: {
        status: status.internalServerError, message: error.serverError,
      },
    };
  }
};

module.exports = getAllTasks;
