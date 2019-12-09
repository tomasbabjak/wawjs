const server = require('../src/zip-server');
const client = require('../src/zip-client');

const file = `${__dirname}/test.md`;

const srv = server();
        
client(file).on('finish', () => {
    srv.close();
});