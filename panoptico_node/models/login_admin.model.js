const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Login_adminSchema = new Schema ({
    email:{type:String, required: true, max: 100},
    contraseña:{type:String, required:true, max: 128},
});

module.exports = mongoose.model("login_admin", Login_adminSchema);
