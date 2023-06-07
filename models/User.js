const mongoose =  require('mongoose');
const UserSchema = require('../schemas/UserSchema');
// const connectDB = require('../connection');
require('dotenv').config();
const db = process.env.DB_NAME;
mongoose.connect(process.env.MONGO_URI, {dbName: db, useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;