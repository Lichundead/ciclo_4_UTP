const mongoose = require("mongoose");

const uri =
  "mongodb+srv://panoptico:panoptico1@panopticomongo.e5rc48m.mongodb.net/panoptico-db?retryWrites=true&w=majority";

exports.mongoConnect = () => {
  const mongoStringConnection = `${uri}`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "Mongo db connection"));
};
