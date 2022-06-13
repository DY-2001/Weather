const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const geoloc = require('./utils/geoloc.js')

const address = process.argv[2]

if(!address) {
    console.log("Please Provide the Address!")
}
else {
    geocode(address, (error, geoCoordData) => {
        if(error) {
            return console.log(error)
        }
    
        forecast(geoCoordData.lon, geoCoordData.lat, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
             
            geoloc(address, (error, geoLocData) => {
                if(error) {
                    return console.log(error)
                }
    
                console.log('Geographical location :  ', geoLocData.name, geoLocData.sys.country)
                console.log('Geographical coordinates :  ', geoCoordData)
                console.log('forecastData :  ', forecastData)
            })
        })
    }) 
}





