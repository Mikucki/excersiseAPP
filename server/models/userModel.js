const { default: mongoose } = require("mongoose");
const mognoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true, //if someone types space in the end it will be cleared
    },
    email: String,
    password: String,
    password2: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
