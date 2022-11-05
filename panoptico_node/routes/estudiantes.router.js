const express = require("express");
const router = express.Router();
const estudiantesController = require("../controllers/estudiantes.controller");

router.post("/", estudiantesController.create);
router.get("/", estudiantesController.find);
router.get("/:cedula", estudiantesController.findOne);
router.put("/:cedula", estudiantesController.update);
router.delete("/:cedula", estudiantesController.remove);

module.exports = router;
