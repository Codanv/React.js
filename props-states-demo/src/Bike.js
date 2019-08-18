import React from 'react'

import Cycle from './Cycle'

class Bike extends React.Component {

  constructor(props) {
    super(props);
    this.state = {maxSpeed: 200, price: 0}
  }

  // ----------------- Updated after the session ----------------
  /*
    mounting --> when component is rendered to the DOM for first time 
    'componentDidMount()' is lifecycle method Called immediately after a component is mounted. Setting 'state' here will trigger re-rendering.
  */
  
  componentDidMount() {
    this.changeSpeed(this.props.maxSpeed, this.props.newPrice);
  }

  changeSpeed(mSpeed, nPrice) {
    this.setState({maxSpeed: mSpeed, price: nPrice})
  }
  // ---------------------------------------------------------------------

  render() {
    return (
      <div>
        <Cycle isGear="true" />  
        <h2>I have a {this.props.model} bike.</h2>
        <h2>I have a {this.props.engine} bike.</h2>
        <p>Max Speed: {this.state.maxSpeed} <br />
          Price: {this.state.price}   
        </p>
      </div>
    );
  }
}

export default Bike