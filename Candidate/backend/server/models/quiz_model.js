const mongoose = require("mongoose");

const quiz = mongoose.Schema({
  Full_Name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quiz);
