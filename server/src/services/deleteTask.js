const TaskModel = require('../models/index');
const { status, error } = require('../api/schemas');

const deleteTask = async (id) => {
  try {
    const deletedTask = await TaskModel.deleteTask(id);
    return deletedTask;
  } catch (e) {
    return {
      err: {
        status: status.internalServerError, message: error.serverError,
      },
    };
  }
};

module.exports = deleteTask;
