require("dotenv").config();
const server = require("./api/server.js");
// const express = require("express");
// const cors = require("cors");
// const usersRouter = require("./users/router");

const port = process.env.PORT || 5000;

// server.use(cors());
// server.use(express.json());

// server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Welcome to our How-to API",
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

// @ts-ignore
if (!module.parent) {
  server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
  });
}
