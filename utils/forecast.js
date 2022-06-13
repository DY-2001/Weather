const request = require('request')

const Forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=85ae3c92dff6df9234eaa2ef04441fc9'
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect location services!", undefined)
        }
        else if(response.body.weather.length === 0) {
            callback("Unable to find the location. Try to another search!", undefined)
        }
        else {
            callback(undefined, response.body.main)
        }
    })
}

module.exports = Forecast
