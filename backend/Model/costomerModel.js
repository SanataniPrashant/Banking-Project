const mongoose = require("mongoose")


const costumerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model("costumer" , costumerSchema)