const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../server/config/db.js");
const userRoute = require("./routes/userRoute.js");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
