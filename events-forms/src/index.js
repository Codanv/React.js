import React from 'react';
import ReactDOM from 'react-dom';

class EventDemo extends React.Component {

  // clickHandler(msg1, msg2, event) {
  //   console.log(msg1, msg2);
  // }

  clickHandler = (first, second, event) => console.log(first, second, event);

  render() {
    return (
      // <button 
      //   type="button" 
      //   onClick={this.clickHandler.bind(this, "hello", "world")}
      // >Click</button>

      // <button 
      //   type="button" 
      //   onClick={this.clickHandler.bind(this, "one", "two")}
      // >Click</button>

      <button 
        type="button" 
        onClick={(evnt) => this.clickHandler("one", "two", evnt)}
      >Click</button>
    );
  }
}


class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      error1: '',
      error2: ''
    }
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  submitHandler(event) {
    event.preventDefault();
    
    const fname = this.state.firstname;
    const lname = this.state.lastname;
    let err = '';

    if(fname === "")
      err = 'blank';
    else
      err = '';
    this.setState({error1: err});
    
    if(lname === "")
      err = 'blank';
    else
      err = '';
    this.setState({error2: err});

    if(this.state.error1 != '' && this.state.error2 != '')
      console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <p>First Name:</p>
        <input 
          type="text"
          name="firstname"
          onChange={this.changeHandler.bind(this)}  
        /> {this.state.error1}

        <p>Last Name: </p>
        <input 
          type="text" 
          name="lastname"
          onChange={this.changeHandler.bind(this)}
        /> {this.state.error2}

        <p></p>
        <input 
          type="submit"
          value="Send"
        />
      </form>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById("root")
);