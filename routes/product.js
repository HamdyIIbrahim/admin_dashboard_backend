const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { body } = require("express-validator");
const Product = require('../models/product')

router.get('/',async (req,res)=>{
    const productData = await Product.find();
    res.status(200).json(productData)
})
router.post('/newproduct',async (req,res)=>{
    const {title , description ,price}=req.body;
    const productData = await Product.create({
        title,
        description,
        price
    })
    res.status(200).json(productData)
})
router.get(`/:id`,async (req,res)=>{
    const ID = req.params.id;
    const product = await Product.findById(ID);
    res.status(200).json(product)
})
router.put('/editproduct',async (req,res)=>{
    const {title , description ,price,id}=req.body;
    const updateProduct =await Product.findByIdAndUpdate(id,{title,description,price});
    res.status(200).json("Product update successfully")
})


module.exports=router;