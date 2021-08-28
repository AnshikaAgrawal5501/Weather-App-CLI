const request = require('request');
require('dotenv').config();

function locationKey(cityName, callback) {

    const keyUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.API_KEY}&q=${encodeURIComponent(cityName)}&language=en-us&details=false`;

    request({ url: keyUrl, json: true }, function(error, response) {

        if (error) {
            callback('Unable to Connect to Weather sevices.', undefined);
        } else if (response.body.length == 0) {
            callback('Unable to find the location.', undefined);
        } else {

            const Key = response.body[0].Key;
            callback(undefined, Key);
        }
    });
}

module.exports = locationKey;