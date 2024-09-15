const { ValidationError } = require("express-validator");
const CustomError = require("./CustomError");

class RequestValidationError extends CustomError {
  constructor(errors) {
    super("Invalid request parameters");
    this.errors = errors;
    this.statusCode = 400;

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.path }; // Use `err.param` for field instead of `err.msg`
    });
  }
}

module.exports = { RequestValidationError };
