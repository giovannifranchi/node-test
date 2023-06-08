const fs = require('fs');

const directory = 'models';

function modelGenerator(modelName){
    const template = `
    const mongoose =  require('mongoose');
    require('dotenv').config();
    const ${modelName}Schema = require('../models/${modelName}Schema');
    const db = process.env.DB_NAME;
    mongoose.connect(process.env.MONGO_URI, {dbName: db, useNewUrlParser: true, useUnifiedTopology: true });

    const ${modelName} = mongoose.model('${modelName}', ${modelName}Schema, '${modelName.toLowerCase()}s');

    module.exports = ${modelName};
    `;

    fs.writeFileSync(`${directory}/${modelName}.js`, template);

    console.log(`${modelName} created successfully`);
}

module.exports = modelGenerator;