const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  Login_adminSchema = new Schema ({
    //Por el momento no utilizar campo autoincrementable
    //id_ingreso: { type: Number, required: true, max: 1000 },
    email:{type: String, required: false, max: 70},
    contraseña: {type: String, required: false, max: 70},
});

module.exports = mongoose.model("Login_adminShema", Login_adminSchema);
