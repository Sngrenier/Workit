import { Switch, Route } from "react-router-dom"
import React from 'react'
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
import MoveStepsModal from './components/MoveStepsModal/MoveStepsModal'
import Trainers from './components/Trainers/MeetTrainers'
import CircuitHistory from './components/Circuits/CircuitHistory'
import ProfilePic from './components/ProfilePic/ProfilePic'
// import Dashboard from './components/Spotify/Dashboard'
import SpotifyWidget from './components/Spotify/SpotifyWidget'
// import SpotifyLogin from './components/Spotify/SpotifyLogin'
import MeetTrainers from './components/MeetInstructors/MeetInstructors'
import SpotifyFooter from './components/Spotify/SpotifyFooter'
import {SpotifyContext} from './context/SpotifyContext'
import {useContext} from 'react'

function App() {

  const {accessToken} = useContext(SpotifyContext)

 
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path='/register' component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/circuitselection/:id" component={SelectCircuit} />
          <Route path='/spotify' component={SpotifyWidget} />
          <Route path='/instructors' component={MeetTrainers} />
          <Route path="/movecarousel"><MoveCarousel time={20} rounds={2} /></Route>
          <Route path="/movesteps/:id" component={MoveStepsModal} />
          <Route path="/quitcircuit" component={QuitCircuit} />
          <Route path="/completedcircuit" component={CompletedCircuit} />
          <Route path="/trainers" component={Trainers} />
          <Route path="/profile" component={Profile} />
          <Route path="/circuithistory" component={CircuitHistory} />
          <Route path="/ProfilePic" component={ProfilePic} /> 
        </Switch>
             {accessToken && <SpotifyFooter />}
      </React.Fragment>
     

 
    );
  
}

export default App;


