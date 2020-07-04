const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Covid_warrior:1234@cluster-cvexm.mongodb.net/iternity?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
