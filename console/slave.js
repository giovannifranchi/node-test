const schemaGenerator = require('./slave/schemaSlave');
const modelGenerator = require('./slave/modelSlave');
const seederGenerator = require('./slave/seederSlave');
const slave = process.argv[2];
const slaveName = process.argv[3];

function slaveNameSanitizer(slaveName){
    const seederName = `${slaveName}Seeder`;
    const schemaName = `${slaveName}Schema`;
    schemaGenerator(schemaName);
    seederGenerator(seederName);
    modelGenerator(slaveName); 
}


function slaveController(slave, slaveName){
    switch(slave){
        case 'schema':
            schemaGenerator(slaveName);
            break;
        case 'model':
            modelGenerator(slaveName);
            break;
        case 'seeder':
            seederGenerator(slaveName);
            break;
        case 'resource':
            slaveNameSanitizer(slaveName);
            break;
        default: console.log('wrong syntax');
    }
}


slaveController(slave, slaveName);

