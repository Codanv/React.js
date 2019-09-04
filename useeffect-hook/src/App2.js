import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return <p>Time: {this.state.time}</p>;
  }
}

export default App;
