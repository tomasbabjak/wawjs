// /*

// Paged request for sonar urls
// sonar supports pageSize and pageIndex as params in URL,
// this can get all results (sequential, not to kill sonar)

// IN:     uri
// OUT:    concatenated paged result

// Samples:
// a)
//   node src/sonar-rules-cli.js \
//       'https://gazelle.ihe.net/sonar/api/rules/search?languages=js' \
//       | npx jsontool -a name

// b) TODO: shell work as
//   npm start
// --------------------------------
// // other TODOs:

// c) shell work as npx sonar-rules-cli (node binary)
// d) parameters (queryes)

// */

// const [
//   ,
//   ,
//   URL = "https://gazelle.ihe.net/sonar/api/rules/search?languages=js"
// ] = process.argv;

// const { doWhilst } = require("async");
// const debug = require("debug")("");
// const request = require("request").defaults({ json: true });

// let pageIndex = 0;
// const results = [];

// async.waterfall([() => getTotal(cb), (total, cb) => {}]);

// function getTotal(cb) {
//   const url = `${URL}&pageIndex=${pageIndex + 1}`;
//   request(url, (err, _, { total, pageSize }) => {
//     cb(null, { total, pageSize });
//   });
// }
// function getPage(url, cb) {
//   request(url, (err, _, data) => {
//     cb(null, data.rules);
//   });
// }

// function getPageCount(total, pageSize) {
//   return total / pageSize;
// }

// function pages(PageCount, cb) {
//   Array.from({ length: PageCount }),
//     (_, i) => {
//       return `${URL}&pageIndex=${i}`;
//     };
//   async.parallel(
//     [
//       cb => getPage(`${URL}&pageIndex=1`),
//       cb => getPage(`${URL}&pageIndex=2`),
//       cb => getPage(`${URL}&pageIndex=3`)
//     ],
//     (err, results) => {
//       const allRules = [].concat(results);
//       console.log(JSON.stringify(allRules, null, 2));
//     }
//   );
// }

// doWhilst(
//   function _do(done) {
//     const url = `${URL}&pageIndex=${pageIndex + 1}`;
//     debug("_do", url);
//     request(url, (err, response, result) => {
//       if (err || response.statusCode !== 200)
//         return done(err || new Error(statusCode));
//       results.push(...result.rules);
//       pageIndex++;
//       debug("do.done", pageIndex, results.length);
//       done(null, result);
//     });
//   },
//   function _while(result, cb) {
//     let { p, ps, total } = result;
//     // has more records, index * pageSize
//     debug("_while", arguments);
//     cb(null, p * ps < total);
//   },
//   function _done(err, result) {
//     debug("_done", arguments);
//     if (err) throw err;
//     console.log(JSON.stringify(results, null, 2));
//   }
// );

/* 
Paged request for sonar urls
sonar supports pageSize and pageIndex as params in URL,
this can get all results (sequential, not to kill sonar)
IN:     uri
OUT:    concatenated paged result
node sonar/_sonar_rules/cli.js \
    'https://gazelle.ihe.net/sonar/api/rules/search?languages=js&' \
    | jsontool -a name
*/

const [, , URL] = process.argv;

const { doWhilst, parallelLimit, waterfall } = require("async");
const request = require("request").defaults({ json: true });

const pageSize = 10;
const results = [];

/*Before*/
let pageIndex = 0;
console.time("before");
doWhilst(
  function _do(done) {
    request(
      `${URL}&pageIndex=${pageIndex + 1}&pageSize=${pageSize}`,
      (err, { statusCode }, result) => {
        if (err || statusCode !== 200)
          return done(err || new Error(statusCode));

        results.push(...result.rules);
        pageIndex++;
        done(null, result);
      }
    );
  },
  function _while({ p, ps, total }) {
    // has more records, index * pageSize
    return p * ps < total;
  },
  function _done(err) {
    if (err) throw err;
    console.timeEnd("before");
    //console.log(JSON.stringify(results, null, 2));
  }
);

//After
console.time("after");
waterfall(
  [
    function _do(done) {
      request(
        `${URL}&pageIndex=1&pageSize=${pageSize}`,
        (err, { statusCode }, result) => {
          if (err || statusCode !== 200)
            return done(err || new Error(statusCode));

          done(null, result.total);
        }
      );
    },
    function(total, done) {
      // console.log(total);
      let tasks = [];
      for (let pageIndex = 0; pageIndex < total / pageSize; pageIndex++) {
        tasks.push(done => {
          request(
            `${URL}&pageIndex=${pageIndex + 1}&pageSize=${pageSize}`,
            (err, { statusCode }, result) => {
              if (err || statusCode !== 200)
                return done(err || new Error(statusCode));

              results.push(...result.rules);
              pageIndex++;
              done(null, result);
            }
          );
        });
      }
      parallelLimit(tasks, 4, (err, res) => {
        //console.log(res);
        done(null, res);
      });
    }
  ],
  (err, res) => {
    console.timeEnd("after");
    // console.log(results);
  }
);
