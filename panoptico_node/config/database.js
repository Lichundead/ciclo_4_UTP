const mongoose = require("mongoose");

const uri =
  "mongodb+srv:;

exports.mongoConnect = () => {
  const mongoStringConnection = `${uri}`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "Mongo db connection"));
};
