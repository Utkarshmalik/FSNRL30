const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
         type:String,
        required:true
    },
    userType:{
        type:String,
        default:"CUSTOMER"
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }
})

const userModal = mongoose.model("UserCollection",userSchema);

module.exports=userModal;