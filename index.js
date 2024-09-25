const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blog", (req, res) => {
  res.send("This is my blog");
});

app.get("/tutorial", (req, res) => {
  res.send("This is my tutorial");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
