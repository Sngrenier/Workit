import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import "./reset.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from './components/Authentication/Auth'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'
import SelectCircuit from './components/Circuits/SelectCircuit'
import QuitCircuit from './components/Circuits/QuitCircuit'
import Profile from './components/Profile/Profile'
import CompletedCircuit from './components/Circuits/CompletedCircuit'
import LandingPage from './components/Landing/LandingPage'
import MoveCarousel from './components/Circuits/MoveCarousel'
import MoveDetail from './components/MoveDetail/MoveDetail'
import Trainers from './components/Trainers/MeetTrainers'
import CircuitHistory from './components/Circuits/CircuitHistory'


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/circuitselection" component={SelectCircuit} />
          <Route path="/moveCarousel" component={MoveCarousel} />
          <Route path="/moveDetail" component={MoveDetail} />
          <Route path="/quitcircuit" component={QuitCircuit} />
          <Route path="/completedcircuit" component={CompletedCircuit} />
          <Route path="/trainers" component={Trainers} />
          <Route path="/profile" component={Profile} />
          <Route path="/circuitHistory" component={CircuitHistory} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


