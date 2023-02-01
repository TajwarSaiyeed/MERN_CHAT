const express = require("express");
const cors = require("cors");
const chats = require("./data/data");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
app.use(cors());
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("Server is running on http://localhost:5000");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`.yellow.bold);
});
