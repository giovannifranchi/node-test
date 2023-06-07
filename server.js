const express = require("express");
require("dotenv").config();
const User = require("./models/User");
const Project = require("./models/Project");

const app = express();

app.listen(3000, async () => {
  console.log("running...");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().populate('projects', 'project', 'Project');
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});


