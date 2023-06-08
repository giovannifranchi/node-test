const schemaGenerator = require('./slave/schemaSlave');
const modelGenerator = require('./slave/modelSlave');
const seederGenerator = require('./slave/seederSlave');
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
            seederGenerator(slaveName);
            break;
        default: console.log('wrong syntax used');
    }
}


slaveController(slave, slaveName);

