const mongoose = require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");

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
        default: userTypes.CUSTOMER,
        enum : [userTypes.CUSTOMER, userTypes.ENGINEER, userTypes.ADMIN]
    },
    userStatus:{
        type:String,
        required:true,
        default: userStatus.APPROVED,
        enum:[userStatus.APPROVED, userStatus.REJECTED, userStatus.PENDING]
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }
})

const userModal = mongoose.model("UserCollection",userSchema);

module.exports=userModal;