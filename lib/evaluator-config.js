var _ = require('underscore'),
    mongoConfig = require('./mongo-config');

var evaluatorConfig = _.extend({
  'http-port': 1081
}, mongoConfig);

module.exports = evaluatorConfig;
