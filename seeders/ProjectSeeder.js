const Project = require('../models/Project');
const faker = require('@faker-js/faker');





async function run(){

    for( let i = 0; i <= 30; i++){
        const newProject = new Project({
            title: faker.fakerEN.commerce.product(),
            description: faker.fakerEN.commerce.productDescription(),
        })
        await newProject.save();
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
