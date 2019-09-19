import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Download from "./components/Download";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/download" component={Download} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
