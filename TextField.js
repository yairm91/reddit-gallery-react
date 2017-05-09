import React from 'react';

class TextField extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);


    }
  handleChange(event) {
     this.setState({value: event.target.value});
   }

  handleSubmit(event) {
      this.props.updatePics(this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      <div className="textbox">
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}  className="subreddit" placeholder="type reddit"></input>
        </form>
      </div>
    );
  }
}

TextField.propTypes = {
  updatePics: React.PropTypes.func.isRequired,
};


export default TextField;
