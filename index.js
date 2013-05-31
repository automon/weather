/**
 * Module Dependencies
 */

var request = require('superagent');

/**
 * Make the request
 */

module.exports = function(city, done) {
  request
    .get('http://api.openweathermap.org/data/2.5/weather?q=' + city)
    .end(function(err, res) {
      if(err) return done(err);
      var body = JSON.parse(res.text);
      done(null, toF(body.main.temp));
    });
}

function toF(k) {
  return (k - 273.15) * 1.8 + 32 | 0;
}
