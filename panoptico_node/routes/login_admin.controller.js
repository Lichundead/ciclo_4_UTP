const express = require("express");
const router = express.Router();
const login_adminController = require("../controllers/usuarios.controller");

router.post("/login", login_adminController.login);

module.exports = router;
