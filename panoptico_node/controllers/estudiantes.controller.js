const Estudiante = require("../models/estudiantes.model");

exports.create = async (req, res) => {
  try {
    const estudiante = new Estudiante({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      email: req.body.email,
    });
    await estudiante.save();
    res.json({ exito: true, msg: "El estudiante se ingresó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al ingresar al estudiante" });
  }
};

exports.find = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
};

exports.findOne = async (req, res) => {
  try {
    const estudiante = await Estudiante.findOne({ cedula: req.params.cedula });
    res.json(estudiante);
  } catch (err) {
    console.error(err);
    res.status(500).json(null);
  }
};

exports.update = async (req, res) => {
  try {
    await Estudiante.findOneAndUpdate(
      { cedula: req.params.cedula },
      {
        $set: {
          cedula: req.body.cedula,
          nombre: req.body.nombre,
          telefono: req.body.telefono,
          email: req.body.email,
        },
      }
    );
    res.json({ exito: true, msg: "El estudiante se modificó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al modificar al estudiante" });
  }
};

exports.remove = async (req, res) => {
  try {
    await Estudiante.findOneAndDelete({ cedula: req.params.cedula });
    res.json({ exito: true, msg: "El estudiante se eliminó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al eliminar al estudiante" });
  }
};
