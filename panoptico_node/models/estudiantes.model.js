const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
  cedula: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  telefono: { type: String, required: true, max: 15 },
  email: { type: String, required: false, max: 70 },
});

module.exports = mongoose.model("estudiantes_inscritos", EstudianteSchema);
