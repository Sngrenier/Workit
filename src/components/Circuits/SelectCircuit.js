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
import Spotify from '../Spotify/SpotifyModal'


//this selects the circuit for the user to start the workout
//once the Start Workout button is clicked, it renders the MoveCarousel component
const SelectCircuit =(props)=> {

    const circuitContext = useContext(CircuitContext);
    const [moves, setMoves] =useState([]) 
    const {push} = useHistory()
    // const {move_id} = useParams()
    

    useEffect(()=>{
        setMoves(circuitContext.moves)
    }, [circuitContext])

    
    const startWorkout=(id)=>{
        push(`/movecarousel${id}`)
    }
    // console.log(moves, 'moves on state in SelectCircuit')
    
    const readMoveDetails = (id)=> {
        push(`movesteps/${id}`) 
    }

    return (
        <div className="container-fluid">
            <div className="image-container">
                <img className="image" src={circuitContext.individualCircuit.mainimg}></img>
            </div>
            <Link to="/landing">
                <img className="close-icon" src="https://img.icons8.com/ios-glyphs/24/ffffff/cancel.png"/>
                </Link>
            <div className="cir-landing">
                <h5 className="subtitle-line">{circuitContext.individualCircuit.subtitle}</h5>
                <h5 className="title-line">{circuitContext.individualCircuit.title}</h5>
                <h5 className="info-line">{circuitContext.individualCircuit.info}</h5>
         {/* <Link to='/spotify'> */}

         <a href='http://localhost:3000/spotify'>
             {/* <a href='http://localhost:3000/dashboard'> */}
             <ButtonContainer className='spotify-btn'>Spotify</ButtonContainer>
             
        </a>   
        {/* </Link> */}
           <h3 className="staging">what you'll need</h3>
                <img className="equip-icon" src={circuitContext.individualCircuit.equipment} height='100px' width='100px'/>
            <h3 className="staging">what you'll do</h3>

            <ul className="move-item">
                {moves.map((elem, index)=> {
                    return <>
                        {index === 0 ? <h4 className="circuit-title">Circuit 1</h4> : index === 4 ? <h4 className="circuit-title">Circuit 2</h4> : null} 
            <li className="move-info" key={index} onClick={()=>readMoveDetails(elem.move_id)}> 
            
                <Link to={`/${elem.move_id}`}>
                <img className="move-img" src={elem.image} height='auto' width='200px'/>

                </Link> 
                <div className="move-details">
                <h3 className="move-deet">{elem.move_title}</h3>
                <h3 className="move-deet">{elem.reps}</h3>
                </div>
                </li> </>})}
                </ul>

                <Link to={`/movecarousel`}>
            <ButtonContainer className='start-btn' onClick={startWorkout}> Start Workout </ButtonContainer>
            </Link>
                </div>

        </div>
    )



}
export default SelectCircuit
 
//(moves.circuit_id)

//</Link>

//<MoveSteps key={i} readMoveDetails={readMoveDetails}/>


/*
Questions:
1. How to make the circuit title, subtitle, and info appear on circuitSelection
2. How to make the Start button start the specfied circuit 
3. How to break the circuit moves in half - that way there are 4 moves per circuit
4. Add equiptment column and values into circuit sql table 
*/