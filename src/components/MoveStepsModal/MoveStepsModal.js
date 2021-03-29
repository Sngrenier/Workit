import {useHistory} from 'react-router-dom'
import{useEffect, useState, useContext} from 'react'
import {CircuitContext} from '../../context/circuitContext'
import SelectCircuit from '../Circuits/SelectCircuit'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import './MoveStepsModal.css'


const MoveStepsModal =(props)=> {
   const circuitContext = useContext(CircuitContext);
   const videoRef = useRef()
   const [moves, setMoves] =useState([]) 
   const [play, setPlay] = useState(true)
   const [index, setIndex] = useState(0)
   // const [steps, setSteps] = useState([])
   // const {move_id} = useParams()


//    useEffect(()=>{
//       if(videoRef.current && moves[index].gif){
//           videoRef.current.load()
//           videoRef.current.play()
//       }
//   }, [index])

      useEffect(()=>{
         console.log(circuitContext.moves, 'this is context')
      let selectedMove = circuitContext.moves.find(move => move.move_id === +props.match.params.id)   
      setMoves(selectedMove)
      }, [circuitContext])
      console.log(moves, 'moves data')


const displaySteps = ()=>{
}
console.log(moves, 'moves after useEffect')

 return (
    <section>
    <div className="details-container">
       <div className="container-fluid">
               <Link to="/circuitSelection/:id">
                <img className="close-box" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                </Link>

         <div className="move-content-container">

       { moves &&  
         <ul className="move-content">
            <div className="video-space">
            <li>{<video loop ref={videoRef} width={400} height={400}><source src={moves.gif} type='video/mp4'/></video>}</li>
            </div>
            <div className="title-space">
            <li>{moves.move_title}</li>
            </div>
            <div className="step-space">
            <li>{moves.equipment}</li>
            </div>
            <div className="step-row">
            <img className="check-icon" src="https://img.icons8.com/flat-round/30/000000/checkmark.png"/>
            <h4 className="step-header">Step 1</h4>
            </div>
            <div className="step-space">
            <li className="step">{moves.step1}</li>
            </div>
            <div className="step-row">
            <img className="check-icon" src="https://img.icons8.com/flat-round/30/000000/checkmark.png"/>
            <h4 className="step-header">Step 2</h4>
            </div>
            <div className="step-space">
            <li className="step">{moves.step2}</li>
            </div>
            <div className="step-row">
            <img className="check-icon" src="https://img.icons8.com/flat-round/30/000000/checkmark.png"/>
            <h4 className="step-header">Step 3</h4>
            </div>
            <div className="step-space">
            <li className="step">{moves.step3}</li>
            </div>
            <div className="step-row">
            <img className="check-icon" src="https://img.icons8.com/flat-round/30/000000/checkmark.png"/>
            <h4 className="step-header">Step 4</h4>
            </div>
            <div className="step-space">
            <li className="step">{moves.step4}</li>
            </div>
            <div className="step-space">
            <li className="step">{moves.step5}</li>
            </div>
            <div className="step-space">
            <li className="step">{moves.step6}</li>
            </div>
         </ul>
         } 
         </div>
      </div>
   </div>
   </section>
 )   

}

export default MoveStepsModal