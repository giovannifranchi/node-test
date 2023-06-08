const { exec } = require('child_process');

const filename = process.argv[2]; 

exec(`node seeders/${filename}.js`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error executing script:', error);
  } else {
    console.log(`${filename} executed successfully`);
  }
});