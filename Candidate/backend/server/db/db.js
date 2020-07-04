const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://iternity:123456@iternity@cluster0.s1hx0.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
