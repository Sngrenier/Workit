import {useHistory} from 'react-router-dom'
import{useEffect, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import SelectCircuit from '../Circuits/SelectCircuit'
import axios from 'axios'


const MoveStepsModal =()=> {

   const circuitContext = useContext(CircuitContext);
   const [moves, setMoves] =useState([]) 


      useEffect(()=>{
      setMoves(circuitContext.moves)

  }, [circuitContext])


//   useEffect(()=>{
//    axios.get(`/moves/${move_id}`)

//   }, [])


 return (

    <div>This is the move steps
      <ul> { moves.map((el, i)=>{<li key={moves.move_id}> {moves.step1} </li>}) }</ul>
        
   </div>
 )   

}

export default MoveStepsModal