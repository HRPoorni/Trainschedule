const ApiError = require("./errors");
const mongoose = require("mongoose");
const logger = require("../logger");

function apiErrorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.code).json({ message: err.message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ValidationError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.CastError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.DocumentNotFoundError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.MissingSchemaError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.OverwriteModelError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ParallelSaveError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err instanceof mongoose.Error.ValidatorError) {
    const message = Object.values(err.errors).map((value) => value.message);
    res.status(422).json({ message: message });
    logger.warn(err.message);
    return;
  } else if (err.code == 11000) {
    res.status(409).json({
      message: "Some values already exist. Please try with another values.",
    });
    logger.warn(err.message);
    return;
  }

  //Catch other errors
  res.status(503).json({ message: "Service Unavailable" });
  logger.error(err);
}
module.exports = apiErrorHandler;
