
    const Tag = require('../models/Tag');
    const faker = require('@faker-js/faker');


    async function run(){

        await Tag.deleteMany();

        //this is a standard numbers that can be changed to personal need

        for( let i = 0; i <= 30; i++){ 
            const newTag = new Tag({
                //insert fields to populate
            })
            await newTag.save();
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
    