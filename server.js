const express = require("express");
const chats = require("./data/data");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running on http://localhost:5000");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
