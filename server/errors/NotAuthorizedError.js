const CustomError = require("./CustomError");

class NotAuthorizedError extends CustomError {
  constructor(message = "Not Authorized") {
    super(message);
    this.statusCode = 401;
    this.message = message;

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotAuthorizedError;
