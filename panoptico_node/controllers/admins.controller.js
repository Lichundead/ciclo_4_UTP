require("dotenv").config();
const Usuario = require("../models/admins.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ usuario: req.body.usuario });

    if (!usuario || !(await bcrypt.compare(req.body.pass, usuario.pass))) {
      return res.json({ token: null });
    }

    const token = jwt.sign(
      { id: usuario._id, usuario: usuario.usuario },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ token: null });
  }
};
