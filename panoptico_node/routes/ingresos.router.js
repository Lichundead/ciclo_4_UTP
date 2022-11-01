const express = require("express");
const router = express.Router();
const ingresosController = require("../controllers/ingresos.controller");

router.post("/", ingresosController.create);
router.get("/", ingresosController.find);
router.get("/:id_ingreso", ingresosController.findOne);
router.delete("/:id_ingreso", ingresosController.remove);

module.exports = router;
