var http = require("http");
var log4js = require("log4js");
var logger = log4js.getLogger("OpenWeatherMapAdapter");
var Q = require("q");
var _ = require("lodash");
var request = require("request");
var WeatherInterface = require("../utils/OpenWeatherMapInterface");

function OpenWeatherMapAdapter(options) {
  logger.info("Creating OpenWeatherMapAdapter");
  this.validateOptions(options);
  this.options = options;
  this.weatherInterface = new WeatherInterface();
};

OpenWeatherMapAdapter.prototype.validateOptions = function(options) {
  logger.debug("Configuration options: ", options);
  if(!_.has(options, "OpenWeatherMap.api_key")) {
    throw new Error("Bad OpenWeatherMapAdapter configuration.");
  }
};

OpenWeatherMapAdapter.prototype.start = function() {
  var deferred = Q.defer();
  deferred.resolve();
  return deferred.promise;
};

module.exports = OpenWeatherMapAdapter;
