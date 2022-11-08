const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Login_adminSchema = new Schema({
  email: { type: String, required: true, max: 100 },
  pass: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("login_admins", Login_adminSchema);
