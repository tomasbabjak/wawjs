const http = require('http');
const fs = require('fs');
const stream = require("stream");

module.exports = clientZip;

function clientZip(filePath) {

    if (!filePath)
        throw new Error("No file specified");

    if (!fs.existsSync(filePath))
        throw new Error("File specified does not exist");

    let fileRead = fs.createReadStream(filePath);
    let fileWrite = fs.createWriteStream(filePath + ".gz");

    const req = http.request(
        "http://localhost:8080",
        {
            method: "POST"
        });
    req.setHeader('Content-Filename', filePath);

    fileRead.pipe(req).on("error", (err) => {
        console.log('Request failed', err);
        fs.unlinkSync(`${filePath}.gz`);
    });

    req.on("response", (res) => {
        stream.pipeline(
            res,
            fileWrite,
            err => {
                if (err) {
                    console.log('Pipeline failed', err);
                }
            }
        );
    });
    return req;
}
