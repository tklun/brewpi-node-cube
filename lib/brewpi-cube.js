// BrewPi Cube Data Setup
// ---------------------

// Current version of Node BrewPi Cube. Keep in sync with `package.json`.
exports.version = '0.1.0-alpha';

// Module dependencies.
var cube = require('cube'),
    mongoconfig = require('./mongo-config'),
    cubeCollectorConfig = require('./collector-config'),
    cubeEvaluatorConfig = require('./evaluator-config');


var BrewPiCube = {
  createDataEmitter: function() {
    var wsPath = 'ws://' + mongoconfig['mongo-host'] + ':' + cubeCollectorConfig['http-port'];
    var client = cube.emitter(wsPath);

    return client;
  },
  startCubeCollector: function() {
    var brewpiCollector = cube.server(cubeCollectorConfig);
    brewpiCollector.register = function(db, endpoints) {
      cube.collector.register(db, endpoints);
    };

    brewpiCollector.start();
  },
  startCubeEvaluator: function() {
    var brewpiEvaluator = cube.server(cubeEvaluatorConfig);
    brewpiEvaluator.register = function(db, endpoints) {
      cube.evaluator.register(db, endpoints);
    };

    brewpiEvaluator.start();
  },
  start: function() {
    this.startCubeCollector();
    this.startCubeEvaluator();
  }
};

// Expose BrewPi Cube
// -------------------------
exports = module.exports = BrewPiCube;
