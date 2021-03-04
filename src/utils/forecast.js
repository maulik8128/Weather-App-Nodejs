const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {    

    const url ='http://api.weatherstack.com/current?access_key=60c9d5bdf903f47a5d78db6bdfbaa810&query='
    +latitude+ ','+longitude+'&units=m'

    request({ url, json: true },(error,{body})=>{
        if(error){

            callback('Unable to find location', undefined)
        }else if(body.error){

            callback('Unable to find Location', undefined)
        }else{
            
            callback(undefined,body.location.name +' '+  body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' Degress out. It is feels like ' + body.current.feelslike + ' degress out. The humidity is '+ body.current.humidity + "%.")
        }



    })

}

module.exports = forecast