import {Switch, Route} from 'react-router-dom'
import Register from './components/Authentication/Register'
import SelectCircuit from './components/Circuits/SelectCircuit'
import Profile from './components/Profile/Profile'
import CompletedCircuit from './components/Circuits/CompletedCircuit'

export default (

<Switch>
<Route exact path = '/' component={Register} />
<Route path = '/circuitselection' component={SelectCircuit} />
<Route path = '/quitcircuit' component={QuitCircuit} />
<Route path = '/profile' component={Profile} />
<Route path = '/completedcircuit' component={CompletedCircuit} />

</Switch>

)