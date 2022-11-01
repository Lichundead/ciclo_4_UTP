const Ingreso = require("../models/ingresos.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let date = new Date();
  date = new Date(date);
  date = date.toLocaleString();

  let ingreso = new Ingreso({
    fecha: date,
    id_ingreso: req.body.id_ingreso,
    rol: req.body.rol,
  });

  ingreso.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el ingreso");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El ingreso se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Ingreso.find(function (err, ingresos) {
    res.json(ingresos);
  });
};

exports.findOne = function (req, res) {
  Ingreso.findOne(
    { id_ingreso: req.params.id_ingreso },
    function (err, ingreso) {
      res.json(ingreso);
    }
  );
};

exports.remove = function (req, res) {
  Ingreso.findOneAndRemove(
    { id_ingreso: req.params.id_ingreso },
    function (err) {
      if (err) {
        console.error(err),
          (response.exito = false),
          (response.msg = "Error al eliminar el ingreso");
        res.json(response);
        return;
      }

      (response.exito = true),
        (response.msg = "El ingreso eliminado correctamente");
      res.json(response);
    }
  );
};
