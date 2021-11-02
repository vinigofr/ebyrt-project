const TaskModel = require('../models/index');
const { status, error } = require('../api/schemas');

const getTaskById = async (id) => {
  try {
    const task = await TaskModel.getTaskById(id);
    return task;
  } catch (e) {
    return {
      err: {
        status: status.internalServerError, message: error.serverError,
      },
    };
  }
};

module.exports = getTaskById;
