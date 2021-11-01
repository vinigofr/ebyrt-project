
const errorHandler = (error, _req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';
  res.status(status).json({ message });
};

module.exports = errorHandler;
