import React, { Component } from "react";

const NameContext = React.createContext();

class NameProvider extends Component {
  state = { name: "Jane Doe", age: 12, address: "Mumbai" };

  render() {
    return (
      <NameContext.Provider value={this.state}>
        {this.props.children}
      </NameContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NameProvider>
        <GrandFather />
      </NameProvider>
    );
  }
}

class GrandFather extends Component {
  render() {
    return <Father />;
  }
}

class Father extends Component {
  render() {
    return <Child />;
  }
}

class Child extends Component {
  render() {
    return (
      <NameContext.Consumer>
        {person => (
          <h1>
            My name is {person.name} | {person.age} | {person.address}
          </h1>
        )}
      </NameContext.Consumer>
    );
  }
}

export default App;
