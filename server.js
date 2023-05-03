const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/categories');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(`${process.env.MONGODB_URI}`).then(() => {
    console.log("connect successfully");
}).catch(() => {
    console.log("can't connect");
});

app.use('/products',productRoute);
app.use('/category',categoryRoute);
app.listen(2000);