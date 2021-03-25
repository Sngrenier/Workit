import {useState, useEffect, useContext} from 'react'
import { ButtonContainer } from '../NavButton'
import MoveCarousel from './MoveCarousel'
import {CircuitContext} from '../../context/circuitContext'
import CompletedCircuit from './CompletedCircuit'
import {Link} from 'react-router-dom'
import './SelectCircuit.css'
import {useHistory, useParams} from 'react-router-dom'
import MoveSteps from '../MoveStepsModal/MoveStepsModal'
import Circuit from '../Landing/Circuit'


//this selects the circuit for the user to start the workout
//once the Start Workout button is clicked, it renders the MoveCarousel component
const SelectCircuit =()=> {

    const circuitContext = useContext(CircuitContext);
    const [moves, setMoves] =useState([]) 
    // const [circuit, setCircuit] = useState([])
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

    // useEffect(()=> {
    //     setCircuit(circuitContext.circuit)
    // }, [])

    return (
        <div className="container-fluid">
            <div className="image">
            </div>
            <Link to="/landing">
                <img className="close-icon" src="https://img.icons8.com/ios-glyphs/30/4a90e2/macos-close.png"/>
                </Link>
            <div className="cir-landing">
           <ButtonContainer className='spotify-btn'>Pick a playlist</ButtonContainer>
           <h3>what you'll need</h3>
            <h3>what you'll do</h3>

            <ul className="move-item">{moves.map((elem, index)=> 
            <li className="move-info" key={index} onClick={()=>readMoveDetails(elem.move_id)}> 
                
                <Link to={`/movesteps/${elem.move_id}`}>
                <img className="move-img" src={elem.image} height='auto' width='200px'/>
                </Link> 
                <div className="move-details">
                <h3 className="move-deet">{elem.move_title}</h3>
                <h3 className="move-deet">{elem.reps}</h3>
                </div>
                </li>)}
                </ul>
            <ButtonContainer className='start-btn' onClick={startWorkout}> Start Workout </ButtonContainer>
                </div>

        </div>
    )



}
export default SelectCircuit
 
//(moves.circuit_id)

//</Link>

//<MoveSteps key={i} readMoveDetails={readMoveDetails}/>



