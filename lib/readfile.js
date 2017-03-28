/**
 * Read input file
 */
function readFile(dirname, cb) {
  var fs = require("fs");
  fs.readFile(path, function (err, f) {
    return cb(err, (f ? f.toString().split('\n') : null));
  });
}

module.exports = readFile;