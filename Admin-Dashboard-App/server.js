const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")

const app = express();
const testRoutes = express.Router();
require("dotenv").config()
//port and URI
const uri = process.env.Mongo_URI||"mongodb+srv://iternity:123456@iternity@cluster0.s1hx0.mongodb.net/test";
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handle get requests
app.get("/app", function (req, res) {
  var query1 = {};
  Query(connection, 10,0, res, query1);
});

//handle post requests and parse the queries
app.post("/app/filter", (req, res) => {
  filters = req.body.filters;
  skip = Number(req.body.skip);
  var query = {};
  filters.forEach((ele) => {
    //   if (key === "score") {
    //   var value = ele.value;
    //   var opr = ele.opr;
    //   };
    //   if (opr === "greater_than") {
    //     query.$expr = {
    //       $gt: [score, parseFloat(value)],
    //     };
    //   } else if (opr === "smaller_than") {
    //     query.$expr = {
    //       $lt: [discount, parseFloat(value)],
    //     };
    //   } else if (opr === "equal") {
    //     query.$expr = {
    //       $eq: [discount, parseFloat(value)],
    //     };
    //   }
    // }
    if (key === "skill") {
      const value = String(ele.value);
      var regex = RegExp(".*" + value + ".*");
      query["skill.name"] = regex;
    }
  });
  Query(connection, 10,skip, res, query);
});

//send query to atlas and get response
function Query(connection, _limit,skip, res, query) {
  var options = {
    limit: _limit,
    skip: skip,
    sort: ["score", "dec"],
  };

  connection
    .collection("personals")
    .find(query, options)
    .limit(_limit)
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).json("Error: " + err);
      } else {
        console.log(result);
        res.json(result);
      }
    });
}

if(process.env.NODE_ENV === "production"){
  app.use(express.static("Client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
