const Visitante = require('../models/visitasGuiadas.model');
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