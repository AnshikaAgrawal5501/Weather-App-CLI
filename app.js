const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const locationKey = require('./utils/location');
const forecast = require('./utils/forecast');
require('dotenv').config();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('weather');
});

app.post('/', (req, res) => {

    const cityName = req.body.city;

    if (!cityName) {
        console.log('Please provide city name.');
    } else {

        locationKey(cityName, (error, data) => {
            if (error) {
                console.log(`Error: ${error}`);
            } else {
                console.log(data);

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

    res.redirect('/');

});

app.listen(process.env.PORT || port, function() {
    console.log(`Example app listening at http://localhost:${port}`);
});