const { status, error } = require('../api/schemas');

// eslint-disable-next-line consistent-return
const verifyTaskFields = (req, _res, next) => {
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
