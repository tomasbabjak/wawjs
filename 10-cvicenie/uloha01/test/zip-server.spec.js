const assert = require("assert");
const server = require('../src/zip-server');
const client = require('../src/zip-client');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const file = `${__dirname}/test.md`;
const dir = `${__dirname}/../src/tmp`;

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

// Tests from lukino563, aletred for my programm 
describe("Zipper Tests", function() {

    //May be bad test - test not working correctly
    it("File is correctly sent", function() {

        const srv = server(dir);
        
        client(file).on('finish', () => {
            srv.close();
        });

        srv.on('close', ()=> {

            const f1 = fs.readFileSync(file);
            const f2 = fs.readFileSync(`${dir}/test.md`);
    
            const h1 = crypto.createHash('sha1').update(f1).digest().toString();
            const h2 = crypto.createHash('sha1').update(f2).digest().toString();
    
            console.log(`Hash1: ${h1} \nHash2: ${h2}`);
            assert(h1 == h2);
        });
    });

    it("Server is unreachable", async function() {
        client(file);
        await sleep(1500);
        assert(!fs.existsSync(`${__dirname}/${path.parse(file).base}.gz`));
    });

});