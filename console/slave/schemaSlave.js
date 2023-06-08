const fs = require('fs');

const directory = 'schemas';

const schemaName = process.argv[2];



function generateSchema(schemaName){
    const template = `const mongoose = require('mongoose');

    const ${schemaName} = mongoose.Schema({
        createdAt: {
            type: Date,
            default: Date.now(),
            immutable: true,
        },
        UpdatedAt: {
            type: Date,
            default: ()=>  Date.now()
        }
    });

module.exports = ${schemaName};
    `;

    fs.writeFileSync(`${directory}/${schemaName}.js`, template);

    console.log(`${schemaName} created successfully`);
}


// generateSchema(schemaName);

module.exports = generateSchema;