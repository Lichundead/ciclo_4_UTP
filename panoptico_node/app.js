var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var database = require("./config/database");
var auth = require("./auth/main_auth");

var visitantesRouter = require("./routes/visitantes.router");
var ingresosRouter = require("./routes/ingresos.router");
var estudiantesRouter = require("./routes/estudiantes.router");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Mongo conection:A partir de aqui comienza a llamar la conexión
database.mongoConnect();
app.use("auth");

//Router: A partir de aqui comienza el router
app.use("/visitas_guiadas", visitantesRouter);
app.use("/ingresos", ingresosRouter);
app.use("/estudiantes_inscritos", estudiantesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
