import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: "50px",
      height: "50px",
      color: "red"
    }
    console.log('constructor');
  }

  // static getDerivedStateFromProps(newProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   return {
  //     width: newProps.width,
  //     height: newProps.height,
  //     color: newProps.color
  //   };
  // }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  render() {
    const styleBox = {
      width: this.state.width,
      height: this.state.height,
      backgroundColor: this.state.color
    }
    console.log('render');
    return (
      <div>
        <div style={styleBox}></div>
        <button type="button" onClick={this.changeBoxState.bind(this)}>Change</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.setState({
    //   width: "200px",
    //   height: "200px",
    //   color: "blue"
    // });
  }

  changeBoxState() {
    console.log('changeBoxState');
    this.setState({
      width: "200px",
        height: "200px",
        color: "black"
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps.width, prevProps.height, prevProps.color);
    console.log(prevState.width, prevState.height, prevState.color);
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('unmounting...');
  }

}

ReactDOM.render(
  <Box width="150px" height="150px" color="green" />,
  document.getElementById("root")
);