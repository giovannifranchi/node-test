
    const mongoose =  require('mongoose');
    require('dotenv').config();
    const TagSchema = require('../models/TagSchema');
    const db = process.env.DB_NAME;
    mongoose.connect(process.env.MONGO_URI, {dbName: db, useNewUrlParser: true, useUnifiedTopology: true });

    const Tag = mongoose.model('Tag', TagSchema, 'tags');

    module.exports = Tag;
    