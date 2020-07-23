require("dotenv").config();
const server = require("./data/server.js");

const port = process.env.PORT || 5000;

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

module.exports = server;
