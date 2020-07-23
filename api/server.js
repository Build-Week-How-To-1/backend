const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../middleware/authenticate-middleware.js");
const usersRouter = require("../users/router");
const howTosRouter = require("../howTos/router");
const reviewsRouter = require("../reviews/router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/users", usersRouter);
server.use("/howTos", authenticate, howTosRouter);
server.use("/reviews", authenticate, reviewsRouter);

module.exports = server;
