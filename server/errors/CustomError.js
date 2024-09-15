class CustomError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = null;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    throw new Error(
      'Method "serializeErrors" should be implemented in subclass'
    );
  }
}

module.exports = CustomError;
