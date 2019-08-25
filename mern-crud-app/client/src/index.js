import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      fullname: '',
      username: '',
      _id: ''
    }
  }

  componentDidMount() {

    fetch('http://localhost:3001/api/users')
      .then(users => users.json())
      .then(users => this.setState({
        users: users
      }));
  }

  beforeCreate(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  createUser(event) {
    event.preventDefault();

    fetch('http://localhost:3001/api/users/create', {
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: `fullname=${this.state.fullname}&username=${this.state.username}`
    });
  }

  beforeUpdate(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  updateUser(event) {
    event.preventDefault();

    fetch('http://localhost:3001/api/users/update', {
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: `_id=${this.state._id}&fullname=${this.state.fullname}&username=${this.state.username}`
    });
  }
    
  deleteUser(uid) {
    
    fetch('http://localhost:3001/api/users/delete', {
      method: 'delete',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: `_id=${uid}`
    });
  }

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full name</th>
              <th>Username</th>
              <th>Operations</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map(user => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.fullname}</td>
                  <td>{user.username}</td>
                  <td>
                    <button 
                      type="button"
                      onClick={this.deleteUser.bind(this, user._id)}
                    >delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <h2>User Create</h2>
        <form onSubmit={this.createUser.bind(this)}>
          <p>Fullname:
            <input
              type="text"
              name="fullname"
              onChange={this.beforeCreate.bind(this)}
            />
          </p>      
          
          <p>Username:
            <input
              type="text"
              name="username"
              onChange={this.beforeCreate.bind(this)}
            />
          </p> 

          <p>
            <input type="submit" value="Create" />
          </p>     
        </form>
        
        <h2>User Update</h2>
        <form onSubmit={this.updateUser.bind(this)}>
          <p>ID:
            <input
              type="text"
              name="_id"
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>      
          <p>Fullname:
            <input
              type="text"
              name="fullname"
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>      
          
          <p>Username:
            <input
              type="text"
              name="username"
              onChange={this.beforeUpdate.bind(this)}
            />
          </p> 

          <p>
            <input type="submit" value="Update" />
          </p>     
        </form>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);