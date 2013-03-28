var _ = require('underscore'),
    mongoConfig = require('./mongo-config');

var collectorConfig = _.extend({
  'http-port': 1080,
  'udp-port': 1180
}, mongoConfig);

module.exports = collectorConfig;
