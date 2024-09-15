const CustomError = require("./CustomError");

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    this.statusCode = 404;
    this.message = message;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotFoundError;
