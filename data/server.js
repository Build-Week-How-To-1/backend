const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../middleware/authenticate-middleware.js");
const usersRouter = require("../users/router");
const howtosRouter = require("../how-tos/router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", usersRouter);
server.use("/api/jokes", authenticate, howtosRouter);

module.exports = server;
