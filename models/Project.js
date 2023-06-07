const mongoose =  require('mongoose');
require('dotenv').config();
const ProjectSchema = require('../schemas/ProjectSchema');
const db = process.env.DB_NAME;
mongoose.connect(process.env.MONGO_URI, {dbName: db, useNewUrlParser: true, useUnifiedTopology: true });

const Project = mongoose.model('Project', ProjectSchema, 'projects');

module.exports = Project;