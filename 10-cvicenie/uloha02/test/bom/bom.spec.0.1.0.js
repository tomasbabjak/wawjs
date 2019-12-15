const bom = require("../../src/bom");
const fs = require("fs");
const assert = require("assert");

describe("bom.js tests", function() {

  const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

  it("remove bom - shall remove bom from file", function(done) {

    var chunks = [];

    let file = `${__dirname}/data/without-bom.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);
  
        assert(Buffer.isBuffer(chunk));
        assert.equal(chunk[0], 0x2f);
        assert.equal(chunk.indexOf(bomBuffer), -1);
        assert.equal(chunk.length, 10);
        done();
      })
  });

  it("remove bom - shall remove bom from empty file", function(done) {

    var chunks = [];

    let file = `${__dirname}/data/without-bom-empty.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        assert.equal(chunk.indexOf(bomBuffer), -1);
        assert.equal(chunk.length, 0);
        done();
      });
  });

  it("remove bom - shall remove bom from file, which contain bom", (done) => {

    var chunks = [];

    let file = `${__dirname}/data/with-bom.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        assert(Buffer.isBuffer(chunk));
        assert.equal(chunk[0], 0x2f);
        assert.equal(chunk.indexOf(bomBuffer), -1);
        assert.equal(chunk.length, 10-3);
        done();
      });
  });

  it("remove bom - shall work with arbitrary chunks sizes", (done) => {

    let chunks = [];
    let file = `${__dirname}/data/with-bom.txt`;
    fs.createReadStream(file, {highWaterMark: 2})
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        assert.equal(chunk.indexOf(bomBuffer),-1);
        assert.equal(chunk[0], 0x2f);
        assert.equal(chunk.length,10-3);
        done();
      });
  });
});