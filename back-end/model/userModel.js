const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      mobile: { 
        type: Number,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      userName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    {
      timestamps : true,
    }
  );


  
  const User = mongoose.model('User',userSchema);
  module.exports = User