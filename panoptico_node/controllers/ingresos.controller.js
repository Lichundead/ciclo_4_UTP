const Ingreso = require("../models/ingresos.model");
const Estudiante = require("../models/estudiantes.model");
const Visitante = require("../models/visitantes.model");

exports.create = async (req, res) => {
  try {
    const ingreso = new Ingreso({
      fecha: new Date().toLocaleString(),
      id_ingreso: req.body.id_ingreso,
      rol: req.body.rol,
    });
    await ingreso.save();
    res.json({ exito: true, msg: "El ingreso se guardó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al guardar el ingreso" });
  }
};

exports.createEst = async (req, res) => {
  const { cedula, nombre, telefono, email } = req.body;
  if (!cedula) return res.status(400).json({ exito: false, msg: "Cédula requerida" });
  try {
    const existe = await Estudiante.findOne({ cedula });
    if (!existe) {
      if (!nombre || !telefono) {
        return res.status(400).json({ exito: false, msg: "Nombre y teléfono requeridos para nuevo estudiante" });
      }
      await new Estudiante({ cedula, nombre, telefono, email }).save();
    }
    await new Ingreso({
      fecha: new Date().toLocaleString(),
      id_ingreso: cedula,
      rol: "Estudiante",
    }).save();
    res.json({ exito: true, msg: "Ingreso registrado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al registrar el ingreso" });
  }
};

exports.createVis = async (req, res) => {
  const { cedula, nombre, telefono, email } = req.body;
  if (!cedula) return res.status(400).json({ exito: false, msg: "Cédula requerida" });
  try {
    const existe = await Visitante.findOne({ cedula });
    if (!existe) {
      if (!nombre || !telefono) {
        return res.status(400).json({ exito: false, msg: "Nombre y teléfono requeridos para nuevo visitante" });
      }
      await new Visitante({ cedula, nombre, telefono, email }).save();
    }
    await new Ingreso({
      fecha: new Date().toLocaleString(),
      id_ingreso: cedula,
      rol: "Visitante",
    }).save();
    res.json({ exito: true, msg: "Ingreso registrado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al registrar el ingreso" });
  }
};

exports.find = async (req, res) => {
  try {
    const ingresos = await Ingreso.find();
    res.json(ingresos);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
};

exports.findOne = async (req, res) => {
  try {
    const ingreso = await Ingreso.findOne({ id_ingreso: req.params.id_ingreso });
    res.json(ingreso);
  } catch (err) {
    console.error(err);
    res.status(500).json(null);
  }
};

exports.remove = async (req, res) => {
  try {
    await Ingreso.findOneAndDelete({ id_ingreso: req.params.id_ingreso });
    res.json({ exito: true, msg: "El ingreso eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al eliminar el ingreso" });
  }
};
