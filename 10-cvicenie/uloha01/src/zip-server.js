const http = require('http');
const fs = require('fs');
const {createGzip} = require('zlib');
const stream = require("stream");

module.exports = serverZip;

function serverZip() {

    let tmpDir = `${__dirname}/../tmp`;
    fs.existsSync(tmpDir) || fs.mkdirSync(tmpDir);

    return http.createServer(function (req, res) {

        let fileName = req.headers['filename'];
        console.log(fileName);
        let tmpFile = `${tmpDir}/${fileName}`;

        let fileOut = fs.createWriteStream(tmpFile);

        stream.pipeline(
            req,
            fileOut,
            (err) => {
                console.log(err ? err : "Local file written");
            }
        );

        stream.pipeline(
            req,
            createGzip(),
            res,
            (err) => {
                console.log(err ? err : "Zipped file sent");
            }
        );

    }).on('error', (err) => {
        return console.error('Server error has occured:', err.code);
    });
}