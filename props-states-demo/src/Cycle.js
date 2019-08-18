import React from 'react'

class Cycle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {color: "red"}
  }

  render() {
    return (
      <div>
        <h1>Hey! {this.props.isGear} </h1>
        <p>lorem ipsum {this.state.color}</p>
      </div>
    );
  }
}

export default Cycle