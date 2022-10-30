const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    //Por el momento no utilizar campo autoincrementable
    //id_visitante: { type: Number, required: true, max: 60 },
    cedula: { type: String, required: true, max: 60 }, 
    nombre: { type: String, required: true, max: 60 },    
    telefono: { type: String, required: true, max: 15 },
    email: { type: String, required: false, max: 70 },
  });
  
  module.exports = mongoose.model("visitas_guiadas", EmpleadosSchema);