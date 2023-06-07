const User = require("../models/User");
const Project = require('../models/Project');
const {faker} = require('@faker-js/faker');
const Random = require('../helpers/Random');

async function run(){
  const projects = await Project.find();

  for(let i = 0 ; i <= 50; i++){
    const newUser = new User( {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email({firstName: this.name, lastName: this.lastName}),
      role: faker.helpers.arrayElement(['admin', 'user', 'guest']),
      projects: faker.helpers.arrayElements(projects, {min: 2, max: 5}),
    });
    await newUser.save();
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
