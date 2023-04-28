const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { body } = require("express-validator");
const Product = require('../models/product')

router.get('/',async (req,res)=>{
    const productData = await Product.find();
    res.json(productData)
})
router.post('/newproduct',async (req,res)=>{
    const {title , description ,price}=req.body;
    const productData = await Product.create({
        title,
        description,
        price
    })
    res.json(productData)
})


module.exports=router;