const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../middleware/authenticate-middleware.js");
const usersRouter = require("../users/router");
const howTosRouter = require("../howTos/router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/howtos", authenticate, howTosRouter);

module.exports = server;
