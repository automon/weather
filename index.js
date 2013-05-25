/**
 * Module Dependencies
 */

var request = require('superagent');

/**
 * Make the request
 */

request
  .get('http://api.openweathermap.org/data/2.5/weather?q=San+Francisco')
  .end(function(err, res) {
    if(err) throw err;
    var body = JSON.parse(res.text);
    console.log(toF(body.main.temp) + '˚');
  });


function toF(k) {
  return (k - 273.15) * 1.8 + 32 | 0;
}
