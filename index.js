/**
 * Module Dependencies
 */

var request = require('superagent');
var debug = require('automon:weather');

/**
 * Make the request
 */

module.exports = function(city, done) {
  debug('GET %s', 'http://api.openweathermap.org/data/2.5/weather?q=' + city)
  request
    .get('http://api.openweathermap.org/data/2.5/weather?q=' + city)
    .end(function(err, res) {
      if(err) return done(err);
      var body = JSON.parse(res.text);
      var f = toF(body.main.temp);
      debug('%s˚', f);
      done(null, f);
    });
}

function toF(k) {
  return (k - 273.15) * 1.8 + 32 | 0;
}
