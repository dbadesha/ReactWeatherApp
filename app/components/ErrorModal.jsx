var React= require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return{
      title: 'Error Message'
    };
  },

  propTypes:{
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#errorModal'));
    modal.open();
  },
  render: function(){
    var{title, message}=this.props;
    return(
      <div className="reveal tiny text-center" id="errorModal" data-reveal="">
        <h4>{title}</h4><br/>
        <p>{message}</p>
        <p>
          <button className="button hollow expanded" data-close="">
            Close
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
