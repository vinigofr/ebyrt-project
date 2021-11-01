const TaskService = require('../services/index');
const { status, error } = require('../api/schemas');

const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  const createdTask = await TaskService.createTask(title, description);

  if(createdTask.err) {
    return next(createdTask.err)
  }

  return res.status(status.created).json(createdTask);
};

module.exports = createTask;
