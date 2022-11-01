const mongoose = require("mongoose");

const uri =
  "mongodb+srv://panoptico:panoptico1@panopticomongo.e5rc48m.mongodb.net/?retryWrites=true&w=majority";
const db = "panoptico-db";

exports.mongoConnect = () => {
  const mongoStringConnection = `${uri}/${db}`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "Mongo db connection"));
};
