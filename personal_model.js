const mongoose = require("mongoose");

const personal = mongoose.Schema({
  Full_Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:String,
        required:true
    },
    WhatsApp_Number:{
        type:String,
    },
    Gender:{
        type:String,
        required:true
    },
    Marital_Status:{
        type:String,
        required:true
    },
    Language_Known:{
        type:String,
        required:true
    },
    Native_Location:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model("Personal", personal);
