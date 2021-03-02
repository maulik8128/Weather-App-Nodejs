const request = require('postman-request')
  
  
const geocode = (address,callback)=>{

  const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWF1bGlrODEyOCIsImEiOiJja2t5OXBjbGwycmx0MnVzMWt6ajBkcDE0In0.WKsfdm8ySE8B1WryiFjRvQ&limit=1'
  // ? becomes %3F;
      request({ url:url, json:true  },(error, {body}={})=>{

          if(error){

              callback('Unable to connect location services!',undefined)

          }else if(body.features.length ===0){

              callback('unable to find location. Try another search.',undefined)

          }else{

              callback(undefined,{


                  latitude : body.features[0].center[1],
                  longitude :body.features[0].center[0],
                   location :body.features[0].place_name
                  
              })

         }
      })

}

module.exports = geocode





