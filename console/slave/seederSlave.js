const fs = require('fs');

const directory = 'seeders';


function generateSeeder(seederName){
    const regex = /(?=[A-Z][a-z])/;
    const sanitizedName = seederName.split(regex);
    const template = `
    const ${sanitizedName} = require('../models/${sanitizedName}');
    const faker = require('@faker-js/faker');


    async function run(){

        await ${sanitizedName}.deleteMany();

        //this is a standard numbers that can be changed to personal need

        for( let i = 0; i <= 30; i++){ 
            const new${sanitizedName} = new ${sanitizedName}({
                //insert fields to populate
            })
            await new${sanitizedName}.save();
        }

    }

    run()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error("Seeding failed:", error);
        process.exit(1);
    });
    `;

    fs.writeFileSync(`${directory}/${seederName}.js`, template);
}


module.exports = generateSeeder;

