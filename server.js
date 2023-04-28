const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(`${process.env.MONGODB_URI}`).then(
    console.log('connect successfully')
).catch(
    console.log('faild to connect')
)

app.listen(2000);