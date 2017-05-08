import React from 'react';

class TextField extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
     this.setState({value: event.target.value});
   }

  render() {
    return (
      <div className="textbox">
        <form>
        <input type="text" value={this.state.value} onChange={this.handleChange}  className="subreddit" placeholder="type reddit"></input>
        </form>
      </div>
    );
  }
}


export default TextField;
