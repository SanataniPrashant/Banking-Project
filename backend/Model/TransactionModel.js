const mongoose  =require("mongoose")

const transactionSchema = new mongoose.Schema({
     customerid  : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"costumeraccount"
     },
     amount : Number,
     transactiontype : String,
     transactionfor : String,
     status : String,
     date : {
        type : Date,
        default : Date.now
     } 
})



module.exports = mongoose.model("transaction" , transactionSchema)