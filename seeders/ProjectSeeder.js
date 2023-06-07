const Project = require('../models/Project');
const User = require('../models/User');
const Random = require('../helpers/Random');



const newProjects = [
    {
        title: 'web scaper',
        description: 'this is a project that aims to tackle the idea of getting data from web in automatized ways',
    },
    {
        title: 'node back-end',
        description: 'this is an attempt to explore the possibilities of node used from backend',
    },
    {
        title: 'vue template',
        description: 'an attempt to explore differences an benefits of using composition api instead of options api',
    },
]





async function run(){
    const users = await User.find();

    for(const project of newProjects){
        const newProject = new Project({
            title: project.title,
            description: project.description,
            user_id: users[Random.randomNum(0, users.length - 1)]._id
        });

        await newProject.save();
    }

}

run().finally(()=>{
    process.exit(0);
})