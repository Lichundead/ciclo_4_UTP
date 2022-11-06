const Visitante = require("../models/visitantes.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let visitante = new Visitante({
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email,
  });

  visitante.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el visitante");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El visitante se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Visitante.find(function (err, visitantes) {
    res.json(visitantes);
  });
};

exports.findOne = function (req, res) {
  Visitante.findOne({ cedula: req.params.cedula }, function (err, visitante) {
    res.json(visitante);
  });
};

exports.update = function (req, res) {
  let visitante = {
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email,
  };

  Visitante.findOneAndUpdate(
    { cedula: req.params.cedula },
    { $set: visitante },
    function (err) {
      if (err) {
        console.error(err),
          (response.exito = false),
          (response.msg = "Error al modificar al visitante");
        res.json(response);
        return;
      }
      (response.exito = true),
        (response.msg = "El visitante se modificó correctamente");
      res.json(response);
    }
  );
};

exports.remove = function (req, res) {
  Visitante.findOneAndRemove({ cedula: req.params.cedula }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar al visitante");
      res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El visitante se eliminó correctamente");
    res.json(response);
  });
};
