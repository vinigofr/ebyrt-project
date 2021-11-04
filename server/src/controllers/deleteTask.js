const TaskService = require('../services/index');
const { status } = require('../api/schemas');

const deleteTask = async (req, res, next) => {
  const { id } = req.body;
  console.log(id);

  const deletedTask = await TaskService.deleteTask(id);

  if (deletedTask.err) {
    return next(deletedTask.err);
  }

  return res.status(status.ok).json(deletedTask);
};

module.exports = deleteTask;
