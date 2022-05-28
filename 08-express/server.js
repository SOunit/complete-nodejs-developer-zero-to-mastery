const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ test: "hello" });
});

app.get("/messages", (req, res) => {
  res.send("<h1>Messages!</h1>");
});

app.post("/messages", (req, res) => {
  console.log("update messages");
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});