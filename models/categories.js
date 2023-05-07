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
    // parentCategory:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Categories'
    // },
})

CategoriesSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Categories',CategoriesSchema);