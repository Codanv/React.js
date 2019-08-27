import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

class ForumApp extends Component {
  render() {
    return(
      <div>
        <Header headerText="Forum" />
        <Main toDisplay="forum" />
        <Footer />
      </div>
    );
  }
}

class StoryApp extends React.Component {
  render() {
    return(
      <div>
        <Header headerText="Story" />
        <Main toDisplay="story" />
        <Footer />
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
    <div>
      <h1>Home</h1>
      <Link to="/forum">Forum</Link>
      <br />
      <Link to="/story">Story</Link>
    </div>
    
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forum" component={ForumApp} />
      <Route exact path="/story" component={StoryApp} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);