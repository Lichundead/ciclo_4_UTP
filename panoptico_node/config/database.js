require("dotenv").config();
const mongoose = require("mongoose");

exports.mongoConnect = () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI no está definida en las variables de entorno");

  mongoose.connect(uri);
  mongoose.connection.on("error", (err) =>
    console.error("Error de conexión MongoDB:", err)
  );
  mongoose.connection.once("open", () =>
    console.log("Conectado a MongoDB")
  );
};
