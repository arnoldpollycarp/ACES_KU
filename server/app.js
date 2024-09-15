const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("express-async-errors");
const NotFoundError = require("./errors/NotFoundError");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Routes
 */
app.use("/api/v1/auth", require("./controllers/authController"));
app.all("*", async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

module.exports = { app };
