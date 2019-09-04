import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `The Count # ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `The Count # ${this.state.count}`;
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <p>The Count #{this.state.count}</p>
        <button onClick={this.handleClick}>Increase Click</button>
      </>
    );
  }
}

export default App;
