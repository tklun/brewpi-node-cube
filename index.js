// module.exports = process.env.BREWPI_CUBE_COV
//   ? require('./lib-cov/brewpi-cube')
//   : require('./lib/brewpi-cube');

var go = require('./lib/brewpi-cube');

go.start();
