import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">{this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.state.counter === 0
              ? alert("Counter is zero")
              : this.setState({ counter: this.state.counter - 1 });
          }}
          data-test="decrement-button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
