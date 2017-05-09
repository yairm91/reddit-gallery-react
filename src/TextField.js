import React from 'react';

class TextField extends React.Component {

  constructor(props) {
      super(props);
      // this.state = {value: ''};

      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
          this.props.onFilterTextInput(e.target.value);
          console.log('pressed');
        }
      }

    // handleFilterTextInputChange(e) {
    //   this.props.onFilterTextInput(e.target.value);
    // }

  // handleChange(event) {
  //    this.setState({value: event.target.value});
  //  }
  //
  //  onChange={this.handleChange}

  render() {
    return (
      <div className="textbox">
        <form>
        <input type="text" onChange={this.handleKeyPress} className="subreddit" placeholder="type reddit"></input>
        </form>
      </div>
    );
  }
}


export default TextField;
