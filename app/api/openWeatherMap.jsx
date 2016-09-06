var axios = require('axios');

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=45a827688ff38b8f1a37c8430e49b9da&units=imperial";


module.exports={
  getTempt: function(location){
    var encodedLocation = encodeURIComponent(location);
    var reqURL = `${BASE_URL}&q=${encodedLocation}`;

    return axios.get(reqURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(){
      throw new Error(res.data.message);
    })
  }
}
