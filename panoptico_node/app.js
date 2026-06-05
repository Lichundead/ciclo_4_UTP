require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const database = require("./config/database");
const cors = require("cors");

const visitantesRouter = require("./routes/visitantes.router");
const ingresosRouter = require("./routes/ingresos.router");
const estudiantesRouter = require("./routes/estudiantes.router");
const adminsRouter = require("./routes/admins.router");
const auth = require("./auth/main_auth");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));

database.mongoConnect();

// Rutas públicas
app.use("/admins", adminsRouter);
app.use("/ingresos", ingresosRouter);

// Rutas protegidas
app.use(auth);
app.use("/visitas_guiadas", visitantesRouter);
app.use("/estudiantes_inscritos", estudiantesRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const isDev = req.app.get("env") === "development";
  res.status(err.status || 500).json({
    msg: err.message,
    ...(isDev && { stack: err.stack }),
  });
});

module.exports = app;
