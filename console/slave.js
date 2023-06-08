const schemaGenerator = require('./slave/schemaSlave');
const modelGenerator = require('./slave/modelSlave');
const slave = process.argv[2];
const slaveName = process.argv[3];




function slaveController(slave, slaveName){
    switch(slave){
        case 'schema':
            schemaGenerator(slaveName);
            break;
        case 'model':
            modelGenerator(slaveName);
            break;
        case 'seeder':
            executor('seeder');
            break;
    }
}


slaveController(slave, slaveName);

