const User = require("../models/User");
const Project = require('../models/Project');
const Random = require('../helpers/Random');

const newUsers = [
  {
    name: "jacopo",
    lastname: "marcello",
    email: "jacopo@test.com",
    role: "user",
  },
  {
    name: "nicola",
    lastname: "rossi",
    email: "nicola@test.it",
    role: "guest",
  },
  {
    name: "franco",
    lastname: "rossi",
    email: "franco@test.it",
    role: "guest",
  },
  {
    name: "giovanni",
    lastname: "franchi",
    email: "giovanni@test.it",
    role: "admin",
  },

];

async function run() {
  const projects = await Project.find();

  for (const user of newUsers) {
    const newUser = new User({
      name: user.name,
      lastName: user.lastname,
      email: user.email,
      role: user.role,
      projects: [projects[Random.randomNum(0, projects.length - 1)]._id, projects[Random.randomNum(0, projects.length - 1)]._id]
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
