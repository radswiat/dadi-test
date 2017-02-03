var chalk = require('chalk');
var path = require('path')
var url = require('url')
var model = require(path.join(__dirname, '/../../../node_modules/@dadi/api/dadi/lib/model'));
var rows = model('documentRows')

module.exports.get = function (req, res, next) {
  // DOESN'T WORK
  return rows.find({ documentId: "5894f8fee21a1704858fda59" }, function (err, result) {
    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result))
  });

}
