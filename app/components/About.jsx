var React = require('react');
var About = () =>{
  return(
  <div>
    <h1 className="text-center page-title">About Weather App</h1>
    <p>React Weather App allows users to search weather by City Name, Currently it returns weather in cellis degree, This App is developed using following technologies</p>
    <ol>
      <li><a href="https://facebook.github.io/react/">React</a> Javascript Framework</li>
      <li><a href="https://github.com/reactjs/react-router">Router</a> Routing for React Components</li>
      <li><a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> JavaScript Syntax Ext</li>
      <li><a href="http://foundation.zurb.com/sites/docs/">Styles</a> Foundation Doc</li>
      <li><a href="http://openweathermap.org/api">API Doc</a> Open Weather</li>
    </ol>
    <p>
      In Future it will have more features related to weather
    </p>
    <ol>
      <li>Forecast for 1-10 days</li>
      <li>Heat Map</li>
      <li>Weather Related News</li>
      <li>Integration with AI</li>
      <li>Alerts Notification</li>
    </ol>
  </div>
  )
};
module.exports = About;
