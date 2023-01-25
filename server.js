const express = require("express");
const chats = require("./data/data");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running on http://localhost:5000");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
