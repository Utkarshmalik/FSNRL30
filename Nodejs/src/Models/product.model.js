const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    features:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum: ['Electronics', 'Fashion']
    }
});


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;