const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  usuario: { type: String, required: true, maxlength: 100 },
  pass: { type: String, required: true, maxlength: 128 },
});

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("pass")) return next();
  this.pass = await bcrypt.hash(this.pass, 12);
  next();
});

module.exports = mongoose.model("admins", AdminSchema);
