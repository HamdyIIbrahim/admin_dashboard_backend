const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const CategoriesSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parentCategory:{
        type: String
    }
})

CategoriesSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Categories',CategoriesSchema);