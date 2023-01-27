const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = connectDB;
