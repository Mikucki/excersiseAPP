const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECT);
    const connection = mongoose.connection;
    connection.once(
      "open",
      console.log("MONGODB WAS SUCESSFULLY CONNECTED :D")
    );
  } catch (error) {
    console.log(`${error} Cant connet Database db.js file`);
  }
};

module.exports = connectDB;
