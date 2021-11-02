const { status, error } = require('../api/schemas');

const verifyTaskFields = (req, _res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next({
      status: status.badRequest,
      message: error.missingFields,
    });
  }

  return next();
};

module.exports = verifyTaskFields;
