const TaskService = require('../services/index');
const { status, error } = require('../api/schemas');

const deleteTask = async (req, res, next) => {
  const { id } = req.body;

  const deletedTask = await TaskService.deleteTask(id);

  if (!deletedTask) {
    return next({
      status: status.notFound,
      message: error.taskNotFound,
    });
  }

  if (deletedTask.err) {
    return next(deletedTask.err);
  }

  return res.status(status.ok).json(deletedTask);
};

module.exports = deleteTask;
