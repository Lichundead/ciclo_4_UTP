var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
var database = require("./config/database");
var visitantesRouter = require("./routes/visitantes.router");
var ingresosRouter = require("./routes/ingresos.router");

var database = require("./config/database");

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Mongo conection:A partir de aqui comienza a llamar la conexión
database.mongoConnect();

//Router: A partir de aqui comienza el router
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/visitantes", visitantesRouter);
app.use("/ingresos", ingresosRouter);

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
