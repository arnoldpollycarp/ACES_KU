const { validationResult } = require("express-validator");
const { RequestValidationError } = require("../errors/RequestValidationError");

const validateRequest = (req, _res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};
module.exports = { validateRequest };
