import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import Galary from "./components/Galary";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <li>
            <Link className="anchor" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/galary">
              Galary
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/contact">
              Contact
            </Link>
          </li>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/galary" component={Galary} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
