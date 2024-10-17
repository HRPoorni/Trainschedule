const mongoose = require("mongoose");
const config = require("../configuration/index");
const logger = require("./logger");

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;
  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      logger.info("Database connect successfully!");
      return connection;
    })
    .catch((err) => logger.error(err.message));
};

module.exports = connect;
