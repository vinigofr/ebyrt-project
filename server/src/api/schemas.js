const status = {
  ok: 200,
  created: 201,
  deleted: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  internalServerError: 500,
};

const error = {
  missingFields: 'All fields must be filled ',
  serverError: 'Internal server error',
};

module.exports = { status, error };
