const apiErrorHandler = require("./utilities/Error/errorHandler");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utilities/logger");
const http = require("http").Server(app);
require("dotenv").config();
const dbConnection = require("./utilities/database.connection")

app.use(cors()); //{ origin: "http://localhost:3000" }

app.use(bodyParser.json({limit:"20mb"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080; 

app.use("/reschedule", require("./api/routes/reschedule_routes"));
app.use("/rating", require("./api/routes/rating_routes"));

//Error handle function
app.use(apiErrorHandler);

http.listen(PORT, () => {
  dbConnection();
  logger.info(`Server is up and running PORT: ${PORT}!`);
});
