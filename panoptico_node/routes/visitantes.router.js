const express = require("express");
const router = express.Router();
const visitantesController = require('../controllers/visitasGuiadas.controller');

router.post("/", visitantesController.create);

module.exports = router;