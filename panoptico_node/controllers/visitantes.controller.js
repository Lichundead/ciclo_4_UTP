const Visitante = require("../models/visitantes.model");

exports.create = async (req, res) => {
  try {
    const visitante = new Visitante({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      email: req.body.email,
    });
    await visitante.save();
    res.json({ exito: true, msg: "El visitante se guardó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al guardar el visitante" });
  }
};

exports.find = async (req, res) => {
  try {
    const visitantes = await Visitante.find();
    res.json(visitantes);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
};

exports.findOne = async (req, res) => {
  try {
    const visitante = await Visitante.findOne({ cedula: req.params.cedula });
    res.json(visitante);
  } catch (err) {
    console.error(err);
    res.status(500).json(null);
  }
};

exports.update = async (req, res) => {
  try {
    await Visitante.findOneAndUpdate(
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
    res.json({ exito: true, msg: "El visitante se modificó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al modificar al visitante" });
  }
};

exports.remove = async (req, res) => {
  try {
    await Visitante.findOneAndDelete({ cedula: req.params.cedula });
    res.json({ exito: true, msg: "El visitante se eliminó correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ exito: false, msg: "Error al eliminar al visitante" });
  }
};
