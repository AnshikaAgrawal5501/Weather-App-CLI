const request = require('request');
require('dotenv').config();

function forecast(locationKey, callback) {

    const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.API_KEY}&details=true`;

    request({ url: weatherUrl, json: true }, function(error, response) {

        if (error) {
            callback('Unable to Connect to Weather sevices.', undefined);
        } else if (response.body.length == 0) {
            callback('Unable to find the location.', undefined);
        } else {
            callback(undefined, response.body[0]);
        }
    });
}

module.exports = forecast;