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
    const users = await User.find().populate('projects');
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

app.get('/users/:email', async (req, res)=> {
    try{
        const user = await User.findOne({email: req.params.email}).populate('projects');
        if(user){
            res.status(200).json(user);
        }else {
            res.status(404).json('not found');
        }
    }catch(err){
        res.status(500).json({ error: 'server error' }); 
    }
})


