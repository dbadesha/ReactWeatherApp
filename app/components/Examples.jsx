var React = require('react');
var {Link}= require('react-router');

var Examples = ()=> {
  return(
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Following are few example city for weather serach</p>
    <ul>
      <li><Link to ='/?location=San Franscisco'> San Francisco, CA</Link></li>
      <li><Link to ='/?location=Austin'> Austin, TX</Link></li>
      <li><Link to ='/?location=Delhi'>Delhi, India</Link></li>
      <li><Link to ='/?location=frankfurt'>Frankfurt Germany</Link></li>
    </ul>
  </div>
  )
};
module.exports = Examples;
