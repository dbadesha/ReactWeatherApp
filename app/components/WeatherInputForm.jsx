var React = require('react');

var WeatherInputForm = React.createClass({
  onSubmission: function(e){
    //Cancel the deaults
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit = {this.onSubmission}>
        <div>
          <input type='text' ref = 'location' placeholder='Enter Zip Code'></input><br/>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }

});
module.exports = WeatherInputForm;
