const express = require("express");
const router = express.Router();
const login_adminController = require("../controllers/login_admin.controller");

router.post("/login", login_adminController.login);

module.exports = router;
