import mongoose from 'mongoose';
const uniqueValidator = require("mongoose-unique-validator");

const ProductSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    }
})

ProductSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Product',ProductSchema);