import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  increaseCounter() {
    this.setState({counter: this.state.counter + 1});
    document.querySelector("#paintCounter").style.color = "green";
  }

  decreaseCounter() {
    if(this.state.counter > 0){
      this.setState({counter: this.state.counter - 1});
      document.querySelector("#paintCounter").style.color = "red";
    }
  }

  resetCounter() {
    this.setState({counter: 0});
    document.querySelector("#paintCounter").style.color = "yellow";
  }

  render() {
    return (
      <div className="container">
        <div id="display">
          <span id="paintCounter">{this.state.counter}</span>
        </div>
        <button type="button" onClick={this.increaseCounter.bind(this)} > + </button>
        <button type="button" onClick={this.resetCounter.bind(this)}> Reset </button>
        <button type="button" onClick={this.decreaseCounter.bind(this)} > - </button>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
);