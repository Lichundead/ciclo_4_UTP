const express = require("express");
const router = express.Router();
const adminsController = require("../controllers/admins.controller");

router.post("/login", adminsController.login);

module.exports = router;
