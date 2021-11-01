const errorHandler = (error, _req, res) => {
  const status = error.status || 500;
  const message = error.message || 'Internal server error';
  res.status(status).json({ error: { message } });
};

module.exports = errorHandler;
