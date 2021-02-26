// convert functional app into class

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 99,
    };
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    //provides display
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
