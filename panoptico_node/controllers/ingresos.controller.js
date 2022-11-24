const Ingreso = require("../models/ingresos.model");
const Estudiante = require("../models/estudiantes.model");
const Visitante = require("../models/visitantes.model");
let date = new Date();
date = new Date(date);
date = date.toLocaleDateString();
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
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

exports.createEst = function (req, res) {
  let cedula = req.body.cedula;
  let nombre = req.body.nombre;
  let telefono = req.body.telefono;
  let email = req.body.email;

  let estudiante = new Estudiante({
    cedula: cedula,
    nombre: nombre,
    telefono: telefono,
    email: email,
  });

  estudiante.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al ingresar al estudiante / ");
      return;
    }

    (response.exito = true),
      (response.msg = "El estudiante se ingresó correctamente / ");
  });

  let ingreso = new Ingreso({
    fecha: date,
    id_ingreso: cedula,
    rol: "Estudiante",
  });

  ingreso.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = response.msg + "Error al guardar el ingreso");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = response.msg + "El ingreso se guardó correctamente");
    res.json(response);
  });
};

exports.createVis = function (req, res) {
  let cedula = req.body.cedula;
  let nombre = req.body.nombre;
  let telefono = req.body.telefono;
  let email = req.body.email;

  let visitante = new Visitante({
    cedula: cedula,
    nombre: nombre,
    telefono: telefono,
    email: email,
  });

  visitante.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al ingresar al ingresar el visitante / ");
      return;
    }

    (response.exito = true),
      (response.msg = "El visitante se ingresó correctamente / ");
  });

  let ingreso = new Ingreso({
    fecha: date,
    id_ingreso: cedula,
    rol: "Visitante",
  });

  ingreso.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = response.msg + "Error al guardar el ingreso");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = response.msg + "El ingreso se guardó correctamente");
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
