const server = require('../src/zip-server');
const client = require('../src/zip-client');

const textFile = `${__dirname}/test.md`;
const IMGFile = `${__dirname}/pic.jpg`;

const srv = server().listen(8080);
        
client(textFile).on('finish', () => 
    client(IMGFile).on('finish', () => {
        srv.close();
    })
);