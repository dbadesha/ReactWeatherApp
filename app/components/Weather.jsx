var React = require('react');
var WeatherInputForm = require('WeatherInputForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
      return {
        isLoading: false
      }
    },

  handleSearch: function(location){

    var that = this;
    this.setState ({
      isLoading : true,
      errorMessage: undefined,
      location: undefined,
      tempt:undefined
    });

    openWeatherMap.getTempt(location).then(function(tempt){
      that.setState({
      location: location,
      tempt: tempt,
      isLoading: false
      });
    }, function(e){
      that.setState ({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function(){
    var {isLoading, tempt, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fecthing Weather ...</h3>;
      }else if (tempt && location){
        return <WeatherMessage tempt = {tempt} location = {location}/>;
      }
    };

    function renderError(){
      if (typeof errorMessage === "string"){
        return(
          <ErrorModal message = {errorMessage}/>
          )
      }
    };

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherInputForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
