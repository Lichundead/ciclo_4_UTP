const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngresosSchema = new Schema({
  //Por el momento no utilizar campo autoincrementable
  //id_ingreso: { type: Number, required: true, max: 1000 },
  fecha: { type: String, required: true, max: 30 },
  id_ingreso: { type: String, required: true, max: 15 },
  rol: { type: String, required: true, max: 25 },
});

module.exports = mongoose.model("ingresos", IngresosSchema);
