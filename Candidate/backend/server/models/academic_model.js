const mongoose = require("mongoose");

const academic = mongoose.Schema({
  Skill1: {
    type: String,
    required: true,
  },
  Skill2: {
    type: String,
    required: true,
  },
  Skill3: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  startYear: {
    type: String,
    required: true,
  },
  endMonth: {
    type: String,
    required: true,
  },
  endYear: {
    type: String,
    required: true,
  },
  isWorking: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  contribution: {
    type: String,
    required: true,
  },
  projectFrom: {
    type: Date,
    required: true,
  },
  projectTo: {
    type: Date,
    required: true,
  },
  otherComment: {
    type: String,
    required: true,
  },
  schoolName10: {
    type: String,
    required: true,
  },
  schoolBoard10: {
    type: String,
    required: true,
  },
  result10: {
    type: Number,
    required: true,
  },
  schoolName12: {
    type: String,
    required: true,
  },
  schoolBoard12: {
    type: String,
    required: true,
  },
  result12: {
    type: Number,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  marks10: {
    type: Number,
    required: true,
  },
  marks12: {
    type: Number,
    required: true,
  },
  Email:{
     type: String,
    required: true,
  },
});

module.exports = mongoose.model("Academic", academic);
