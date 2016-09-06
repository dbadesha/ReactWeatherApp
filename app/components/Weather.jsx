var React = require('react');
var WeatherInputForm = require('WeatherInputForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
      return {
        isLoading: false
      }
    },

  handleSearch: function(location){

    var that = this;
    this.setState ({isLoading : true});
    openWeatherMap.getTempt(location).then(function(tempt){
      that.setState({
      location: location,
      tempt: tempt,
      isLoading: false
      });
    }, function(errorMessage){
      that.setState ({isLoading: false});
      alert(errorMessage);
    });
  },

  render: function(){
    var {isLoading, tempt, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fecthing Weather ...</h3>;
      }else if (tempt && location){
        return <WeatherMessage tempt = {tempt} location = {location}/>;
      }
    };
    return(
      <div>
        <h4>Check Weather</h4>
        <WeatherInputForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
