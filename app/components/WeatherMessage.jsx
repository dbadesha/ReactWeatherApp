var React = require('react');

var WeatherMessage = ({tempt, location}) =>{
  return(
    <form>
      <div>
        <h3>it's {tempt} in {location} </h3>
      </div>
    </form>
  );
}
module.exports = WeatherMessage;
