const TaskService = require('../services/index');
const { status, error } = require('../api/schemas');

const verifyIfTaskExists = async (req, res, next) => {
  const { id } = req.body;

  const currentTask = await TaskService.getTaskById(id);

  if (!currentTask) {
    return next({
      status: status.notFound,
      message: error.taskNotFound,
    });
  }

  return next();
};

module.exports = verifyIfTaskExists;
