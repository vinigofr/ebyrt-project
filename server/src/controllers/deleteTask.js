const TaskService = require('../services/index');
const { status, error } = require('../api/schemas');

const deleteTask = async (req, res, next) => {
  const { id } = req.body;

  const deletedTask = await TaskService.deleteTask(id);
  console.log(deletedTask);

  if (deletedTask === null) {
    return next({
      status: status.notFound,
      message: error.taskNotFound
    });
  }

  if (deletedTask.err) {
    return next(deletedTask.err);
  }

  return res.status(status.deleted).json(deletedTask);
};

module.exports = deleteTask;
