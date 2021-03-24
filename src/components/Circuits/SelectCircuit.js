import {useState, useEffect, useContext} from 'react'
import { ButtonContainer } from '../NavButton'
import MoveCarousel from './MoveCarousel'
import {CircuitContext} from '../../context/circuitContext'
import CompletedCircuit from './CompletedCircuit'

//this selects the circuit for the user to start the workout
//once the Start Workout button is clicked, it renders the MoveCarousel component
const SelectCircuit =()=> {

    const circuitContext = useContext(CircuitContext);
    const [moves, setMoves] =useState([])   

    useEffect(()=>{
        setMoves(circuitContext.moves)

    }, [circuitContext])

    const startWorkout=()=>{

    }

    return (
        <div>
           
           <button className='spotifyBtn'>Pick a playlist</button>
           <h3>what you'll need</h3>
            <h3>what you'll do</h3>

            <ul>{moves.map((el, i)=><li key={i}>{el.move_title}</li>)}</ul>
           
            <ButtonContainer className='startWorkout' onClick={startWorkout}> Start Workout </ButtonContainer>

        </div>
    )



}
export default SelectCircuit
 
