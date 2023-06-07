const express = require('express');
require('dotenv').config();
const User = require('./models/User');

const app = express();

const newUser = new User({
    name: 'giovanni',
    lastName: 'franchi',
    email:'test@test.com',
    role: 'admin'
});


app.listen(3000, async()=> {
    await newUser.save();
    console.log('running');
})



