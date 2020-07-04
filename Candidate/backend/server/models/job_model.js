const mongoose = require("mongoose");

const job = mongoose.Schema({
  Industry:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Job_Type:{
        type:String,
        required:true
    },
    Expected_Salary:{
        type:String,
        required:true
    },
    Desired_loc:{
        type:String,
        required:true
    },
    Desired_shift:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model("Job", job);
