const express = require("express");
const router = express.Router();
const ingresosController = require("../controllers/ingresos.controller");
const auth = require("../auth/main_auth");

// Rutas públicas — registro de entrada sin autenticación
router.post("/registros_estudiantes/", ingresosController.createEst);
router.post("/registros_visitantes/", ingresosController.createVis);
router.post("/", ingresosController.create);

// Rutas protegidas — solo admins autenticados
router.get("/", auth, ingresosController.find);
router.get("/:id_ingreso", auth, ingresosController.findOne);
router.delete("/:id_ingreso", auth, ingresosController.remove);

module.exports = router;
