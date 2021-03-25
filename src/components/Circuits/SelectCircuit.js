import {useState, useEffect, useContext} from 'react'
import { ButtonContainer } from '../NavButton'
import MoveCarousel from './MoveCarousel'
import {CircuitContext} from '../../context/circuitContext'
import CompletedCircuit from './CompletedCircuit'
import {Link} from 'react-router-dom'
import './SelectCircuit.css'
import {useHistory, useParams} from 'react-router-dom'
import MoveSteps from '../MoveStepsModal/MoveStepsModal'


//this selects the circuit for the user to start the workout
//once the Start Workout button is clicked, it renders the MoveCarousel component
const SelectCircuit =()=> {

    const circuitContext = useContext(CircuitContext);
    const [moves, setMoves] =useState([]) 
    const {push} = useHistory()
    // const {move_id} = useParams()
    

    useEffect(()=>{
        setMoves(circuitContext.moves)

    }, [circuitContext])

    const startWorkout=(id)=>{
        
        // push(`/movecarousel${id}`)

    }

    // console.log(moves, 'moves on state in SelectCircuit')

    const readMoveDetails = (id)=> {
        push(`movesteps/${id}`)

        }

    return (
        <div>
            <Link to="/landing">
                <img className="close-box" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                </Link>
                <br></br>
           <button className='spotifyBtn'>Pick a playlist</button>
           <h3>what you'll need</h3>
            <h3>what you'll do</h3>

            <ul>{moves.map((elem, index)=> 
            <li key={index} onClick={()=>readMoveDetails(elem.move_id)}> 
                
                <Link to={`/${elem.move_id}`}>
                <img src={elem.image} height='auto' width='200px'/>
                </Link> 
                {elem.move_title}
                {elem.reps}
                </li>)}
                </ul>
           
            <ButtonContainer className='startWorkout' onClick={startWorkout}> Start Workout </ButtonContainer>

        </div>
    )



}
export default SelectCircuit
 
//(moves.circuit_id)

//</Link>

//<MoveSteps key={i} readMoveDetails={readMoveDetails}/>



