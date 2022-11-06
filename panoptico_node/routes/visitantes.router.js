const express = require("express");
const router = express.Router();
const visitantesController = require("../controllers/visitantes.controller");

router.post("/", visitantesController.create);
router.get("/", visitantesController.find);
router.get("/:cedula", visitantesController.findOne);
router.put("/:cedula", visitantesController.update);
router.delete("/:cedula", visitantesController.remove);

module.exports = router;
