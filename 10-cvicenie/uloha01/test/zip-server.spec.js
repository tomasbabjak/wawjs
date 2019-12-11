const assert = require("assert");
const server = require('../src/zip-server');
const client = require('../src/zip-client');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const textFile = `${__dirname}/test.md`;
const IMGFile = `${__dirname}/pic.jpg`;

describe("Zipper Tests", function() {

    // Test from lukino563, aletred for my purpose 
    it("Server is unreachable", () => {

        client(textFile).on('close', () => {
            assert(!fs.existsSync(`${__dirname}/${path.parse(textFile).base}.gz`));
        });
    });

    // Test from xminarikd, aletred for my purpose 
    it("It should sent foto", function (done) {
        this.timeout(2000);

        const srv = server().listen(8080);

        client(IMGFile).on('finish', () => {
            srv.close();
        });

        srv.on('close', async () => {

            const hash2 = crypto.createHash('sha1');
            hash2.setEncoding('hex');

            const readStream = fs.createReadStream('./test/pic.jpg');

            readStream.on('end', () => {
                hash2.end();
                let hash = hash2.read();
                console.log(hash);
                assert.equal(hash, '0cb1f5e32a2be2b0aa29fc1c9d4e4f9d7b14d96f');
                done();
            });

            readStream.pipe(hash2);
        });
    });

    it("It should sent text file", function (done) {
        this.timeout(2000);

        const srv = server().listen(8080);

        client(textFile).on('finish', () => {
            srv.close();
        });

        srv.on('close', async () => {

            const hash2 = crypto.createHash('sha1');
            hash2.setEncoding('hex');

            const readStream = fs.createReadStream('./test/test.md');

            readStream.on('end', () => {
                hash2.end();
                let hash = hash2.read();
                console.log(hash);
                assert.equal(hash, '7a7c4dd23434b97cf73b30a9273c9ae37257c4c0');
                done();
            });

            readStream.pipe(hash2);
        });
    });

});