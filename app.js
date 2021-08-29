const locationKey = require('./utils/location');
const forecast = require('./utils/forecast');

const cityName = process.argv[2];

if (!cityName) {
    console.log('Please provide city name.');
} else {

    locationKey(cityName, (error, data) => {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            console.log(`Location Key : ${data}`);

            forecast(data, (error, forecastData) => {
                if (error) {
                    console.log(`Error: ${error}`);
                } else {
                    console.log(forecastData);
                }
            });
        }
    });
}