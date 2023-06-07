const User = require("../models/User");

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
];

function run() {
  newUsers.forEach(async (user) => {
    const newUser = new User({
      name: user.name,
      lastName: user.lastname,
      email: user.email,
      role: user.role,
    });
    await newUser.save();
  });
}

run();
