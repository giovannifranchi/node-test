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
  {
    name: "giovanni",
    lastname: "franchi",
    email: "giovanni@test.it",
    role: "admin",
  },

];

async function run() {
  for (const user of newUsers) {
    const newUser = new User({
      name: user.name,
      lastName: user.lastname,
      email: user.email,
      role: user.role,
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
