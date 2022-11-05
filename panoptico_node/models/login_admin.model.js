const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  Login_adminSchema = new Schema ({
    email:{type: String, required: false, max: 70},
    contraseña: {type: String, required: false, max: 70},
});

module.exports = mongoose.model("Login_admin", Login_adminSchema);
