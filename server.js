const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db/db");
const appRouter = require("./routes/routes");

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/details", appRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
