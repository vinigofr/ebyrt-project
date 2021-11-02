const TaskService = require('../services/index');
const { status } = require('../api/schemas');

const getAllTasks = async (_req, res, next) => {
  const allTasks = await TaskService.getAllTasks();

  if (allTasks.err) {
    return next(allTasks.err);
  }

  return res.status(status.ok).json(allTasks);
};

module.exports = getAllTasks;
