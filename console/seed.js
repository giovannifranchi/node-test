const { exec } = require('child_process');

const filename = process.argv[2]; 

const massSeeder = ['ProjectSeeder', 'UserSeeder']; //populate in order of execution with filenames the mass seeder to execute a global seeding, if you need to populate dependecies use the single seeder


if(filename){
  exec(`node seeders/${filename}.js`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing script:', error);
    } else {
      console.log(`${filename} executed successfully`);
    }
  });
}else {
  for(let seeder of massSeeder){
    exec(`node seeders/${seeder}.js`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing script:', error);
      } else {
        console.log(`${seeder} executed successfully`);
      }
    })
  }
}