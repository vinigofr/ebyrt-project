const { status, error } = require('../api/schemas');

const verifyTaskFields = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next({
      status: status.badRequest,
      message: error.missingFields,
    });
  }

  next();
};

module.exports = verifyTaskFields;
