import React from 'react';
import ReactDOM from 'react-dom';

// Cart Component
class Cart extends React.Component {
  
  constructor() {
    super();
    this.state = {isOld: "Not New", msg: "New to react js"}
  }

  render() {
    return <h1>From Cart: {this.state.isOld} : {this.state.msg} </h1>
  }
}

// Vehicle Component
class Vehicle extends React.Component {
  render() {
    const a = 34
    return (
      <div>
        <h1>Vehicle Componet -- {a + 40} </h1>
        <Cart />
      </div>
    )
  }
}

ReactDOM.render(<Vehicle />, document.getElementById('root'));
