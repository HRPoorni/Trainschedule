class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
  static forbiddenRequest(msg) {
    return new ApiError(403, msg);
  }
  static unauthorizedRequest(msg) {
    return new ApiError(401, msg);
  }
  static notFound(msg) {
    return new ApiError(404, msg);
  }
  static internalError(msg) {
    return new ApiError(500, msg);
  }
  static notCreated(msg) {
    return new ApiError(204, msg);
  }
  static duplicateError(msg) {
    return new ApiError(409, msg);
  }
}

module.exports = ApiError;
