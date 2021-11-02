const TaskService = require('../services/index');

const verifyIfTaskExists = async (req, res, next) => {
  const { id } = req.body;

  const currentTask = await TaskService.getTaskById(id);

  if (!currentTask) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  return next();
};

module.exports = verifyIfTaskExists;
