import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Authentication/Register'
import SelectCircuit from './components/Circuits/SelectCircuit'
import QuitCircuit from './components/Circuits/QuitCircuit'
import Profile from './components/Profile/Profile'
import CompletedCircuit from './components/Circuits/CompletedCircuit'


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/circuitselection" component={SelectCircuit} />
          <Route path="/quitcircuit" component={QuitCircuit} />
          <Route path="/profile" component={Profile} />
          <Route path="/completedcircuit" component={CompletedCircuit} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


