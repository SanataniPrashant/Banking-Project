const mongoose = require("mongoose")
// const { account } = require("../Controller/costomerController")


const costumerSchema = new mongoose.Schema({
  firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    dob : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    mobile : {
      type : String,
      require : true
    },
    address : {
      type : String,
      require : true
    },
    city : {
      type : String,
      require : true
    },
    aadhar : {
      type : String,
      require : true
    },
    pan : {
      type : String,
      require : true
    },
    images : {
      type : [String],
      require : true
    },
    password : {
      type : String,
      require : true
    },
    account : {
      type : String,
      require : true
    },
    createAt :{
      type : Date,
      default : Date.now
    }

})

module.exports = mongoose.model("costumeraccount" , costumerSchema)