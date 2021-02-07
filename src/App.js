import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about" component={About}></Route>

          <Route path="/contact" component={Contact}></Route>

          <Route path="/" component={Home}></Route>

          <Route path="/" render={() => <div> 404 Error </div>}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
