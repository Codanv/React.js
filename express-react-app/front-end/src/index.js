import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        {id: 1, username: 'andrew'},
        {id: 2, username: 'Mark'},
      ]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/users')
      .then(data => data.json())
      .then(users => users.forEach(user => this.setState({
        users: [...this.state.users, user]
      })))
  }

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);