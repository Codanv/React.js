import React from "react";

class App extends React.Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  buttonRef = React.createRef();

  componentDidMount = () => {
    this.usernameRef.current.focus();
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      switch (event.target.name) {
        case "username":
          this.passwordRef.current.focus();
          break;
        case "password":
          this.buttonRef.current.focus();
          break;
        default:
          this.usernameRef.current.focus();
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <from onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onKeyUp={this.handleKeyUp}
            ref={this.usernameRef}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onKeyUp={this.handleKeyUp}
            ref={this.passwordRef}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Log in"
            onKeyUp={this.handleKeyUp}
            ref={this.buttonRef}
          />
        </div>
      </from>
    );
  }
}

export default App;
