const Estudiante = require("../models/estudiantes.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let estudiante = new Estudiante({
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email,
  });

  estudiante.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al ingresar al estudiante");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El estudiante se ingresó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Estudiante.find(function (err, estudiantes) {
    res.json(estudiantes);
  });
};

exports.findOne = function (req, res) {
  Estudiante.findOne({ cedula: req.params.cedula }, function (err, estudiante) {
    res.json(estudiante);
  });
};

exports.update = function (req, res) {
  let estudiante = {
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email,
  };

  Estudiante.findOneAndUpdate(
    { cedula: req.params.cedula },
    { $set: estudiante },
    function (err) {
      if (err) {
        console.error(err),
          (response.exito = false),
          (response.msg = "Error al modificar al estudiante");
        res.json(response);
        return;
      }
      (response.exito = true),
        (response.msg = "El estudiante se modificó correctamente");
      res.json(response);
    }
  );
};

exports.remove = function (req, res) {
  Estudiante.findOneAndRemove({ cedula: req.params.cedula }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar al estudiante");
      res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El estudiante se eliminó correctamente");
    res.json(response);
  });
};
