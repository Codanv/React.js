import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: parseInt(this.props.initialValue)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count #{this.state.count}</p>
        <AnotherComponent initialValue={this.props.initialValue} />
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

class AnotherComponent extends React.Component {
  render() {
    return <h2>{this.props.initialValue}</h2>;
  }
}

export default App;
