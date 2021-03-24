import {useHistory} from 'react-router-dom'
import{useEffect, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import SelectCircuit from '../Circuits/SelectCircuit'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const MoveStepsModal =(props)=> {

   const circuitContext = useContext(CircuitContext);
   const {move_id} = useParams()
   const [moves, setMoves] =useState([]) 
   const [steps, setSteps] = useState([])


      useEffect(()=>{
      setMoves(circuitContext.moves)
      console.log(moves, 'moves data')
   

      }, [circuitContext])





const displaySteps = ()=>{

}

console.log(moves, 'moves after useEffect')

 return (

    <div>
       { moves ?  

         
         <ul>
            <li>{moves.step1}</li>
            <li>{moves.step2}</li>
            <li>{moves.step3}</li>
            <li>{moves.step4}</li>
            <li>{moves.step5}</li>
            <li>{moves.step6}</li>
         </ul>

      : <h1>This is null</h1>   

      }  
          
      

      {/* <ul> { moves.map((elem, index)=>{<li key={index}> {elem.step1} {elem.step2} </li>}) }</ul> */}
        
   </div>
 )   

}

export default MoveStepsModal