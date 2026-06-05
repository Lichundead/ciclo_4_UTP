const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const adminsController = require("../controllers/admins.controller");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { token: null, msg: "Demasiados intentos. Intenta en 15 minutos." },
});

router.post("/login", loginLimiter, adminsController.login);

module.exports = router;
