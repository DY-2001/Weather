const request = require('request')

const Geocode = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + address + '&APPID=85ae3c92dff6df9234eaa2ef04441fc9'
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect location services!", undefined)
        }
        else if(response.body.weather.length === 0) {
            callback("Unable to find the location. Try to another search!", undefined)
        }
        else {
            callback(undefined, response.body.coord)
        }
    })
}

module.exports = Geocode